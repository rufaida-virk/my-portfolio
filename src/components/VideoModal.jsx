import React, { useEffect, useRef } from 'react';
import { X, Play, VolumeX } from 'lucide-react';

export const VideoModal = ({ isOpen, onClose, videoUrl, title, poster }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
      // Block any volume increment / un-mute hotkeys while video modal is active
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'm' || e.key === 'M') {
        e.preventDefault();
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.volume = 0;
        }
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Strict silence enforcer - guarantees 0 volume and muted state under all circumstances
  const enforceSilence = (el) => {
    if (!el) return;
    el.muted = true;
    el.defaultMuted = true;
    el.volume = 0;
  };

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    enforceSilence(el);

    // Actively intercept any attempt by browser/user to change volume or unmute
    const onVolChange = () => enforceSilence(el);
    el.addEventListener('volumechange', onVolChange);

    // Web Audio API hard disconnect: intercepts audio track into a dead-end gain node (gain=0)
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx && !el._audioSilenced) {
        const ctx = new AudioCtx();
        const src = ctx.createMediaElementSource(el);
        const gain = ctx.createGain();
        gain.gain.value = 0;
        src.connect(gain);
        // gain is never connected to ctx.destination, completely nullifying audio output
        el._audioSilenced = true;
      }
    } catch {
      // AudioContext already attached or restricted; DOM enforcement guarantees silence
    }

    return () => {
      el.removeEventListener('volumechange', onVolChange);
    };
  }, [videoUrl, isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-boho-cream dark:bg-boho-dark-surface rounded-boho overflow-hidden shadow-2xl border border-boho-terracotta/30 dark:border-boho-sand/20 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-boho-terracotta/15 dark:border-boho-sand/10">
          <div className="flex items-center space-x-2 truncate pr-2">
            <Play className="w-4 h-4 text-boho-terracotta flex-shrink-0" />
            <h3 className="font-serif text-sm sm:text-lg md:text-xl text-boho-brown dark:text-boho-cream font-bold truncate">
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-full hover:bg-boho-sand/60 dark:hover:bg-boho-dark-card text-boho-brown dark:text-boho-cream transition-colors flex-shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
          <video
            ref={videoRef}
            key={videoUrl}
            src={videoUrl}
            poster={poster}
            controls
            muted
            defaultMuted
            playsInline
            preload="metadata"
            onVolumeChange={(e) => enforceSilence(e.currentTarget)}
            onPlay={(e) => enforceSilence(e.currentTarget)}
            onPlaying={(e) => enforceSilence(e.currentTarget)}
            onTimeUpdate={(e) => {
              if (!e.currentTarget.muted || e.currentTarget.volume > 0) {
                enforceSilence(e.currentTarget);
              }
            }}
            onLoadedMetadata={(e) => enforceSilence(e.currentTarget)}
            onLoadedData={(e) => enforceSilence(e.currentTarget)}
            className="w-full h-full object-contain silent-video"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Modal Footer Note */}
        <div className="px-4 sm:px-6 py-2.5 sm:py-3 bg-boho-sand/30 dark:bg-boho-dark-card text-[11px] sm:text-xs text-boho-brown/75 dark:text-boho-cream/75 flex justify-between items-center">
          <span className="flex items-center space-x-1.5">
            <VolumeX className="w-3.5 h-3.5 text-boho-terracotta flex-shrink-0" />
            <span>Silent Walkthrough (Audio Completely Disabled)</span>
          </span>
          <span className="hidden sm:inline">Click outside or press ESC to close</span>
        </div>
      </div>
    </div>
  );
};
