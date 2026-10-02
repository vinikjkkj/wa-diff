__d(
  "VideoPlayerImplementationStateMachineStateUncontrolledState",
  [
    "ExecutionEnvironment",
    "NetworkStatus",
    "convertToViewabilityPercentage",
    "gkx",
    "performance",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t) {
      var n,
        o,
        a,
        i,
        l,
        u,
        c,
        d,
        m = t.engineExtrasAPI,
        p = t.fullscreenControllerRef,
        _ = t.videoElementAPI,
        f = t.videoLiveTraceRef,
        g = t.videoPlayerPassiveViewabilityInfo,
        h = f.current,
        y = 0,
        C;
      (e || (e = r("ExecutionEnvironment"))).canUseDOM &&
        ((y = Date.now()), (C = document.hidden));
      var b =
        typeof (s || (s = r("performance"))).now == "function"
          ? (s || (s = r("performance"))).now()
          : 0;
      if (_ == null) {
        var v;
        return {
          audioRepresentationID: void 0,
          availableAudioTracks: [],
          availableQualities: [],
          availableVideoTracks: [],
          clockTimestamp: y,
          currentPlayingAudioTrackID: void 0,
          currentPlayingVideoQuality: void 0,
          currentPlayingVideoTrackID: void 0,
          estimatedBandwidth: void 0,
          isDocumentHidden: C,
          isDRM: void 0,
          isFBIsLiveTemplated: void 0,
          isFBMS: void 0,
          isFBWasLive: void 0,
          isFullscreen: p.current ? p.current.getIsFullscreen() : void 0,
          isLiveRewindAvailable: void 0,
          isMixedCodecManifest: null,
          isPredictiveDash: void 0,
          liveTraceContext:
            h && (v = h.getLiveTraceContext()) != null ? v : void 0,
          manifestIdentifier: void 0,
          mpdValidationErrors: void 0,
          networkConnected: void 0,
          perfTimestamp: b,
          targetAudioTrack: null,
          targetVideoQuality: "",
          videoElementDebugCurrentSrc: void 0,
          videoElementDebugSrc: void 0,
          videoElementDroppedFrameCount: void 0,
          videoElementDuration: void 0,
          videoElementEnded: void 0,
          videoElementError: void 0,
          videoElementLastBufferEndPosition: void 0,
          videoElementMuted: void 0,
          videoElementNetworkState: void 0,
          videoElementPaused: void 0,
          videoElementPlaybackRate: void 0,
          videoElementPlayheadPosition: void 0,
          videoElementReadyState: void 0,
          videoElementTotalFrameCount: void 0,
          videoElementVolume: void 0,
          videoProjection: void 0,
          videoRepresentationID: void 0,
          viewabilityPercentage: void 0,
        };
      }
      var S = _.getPlayheadPosition(),
        R = _.getFrameCounts(),
        L = g.getCurrent();
      return {
        audioRepresentationID: m
          ? m.getCurrentPlayingAudioRepresentationID()
          : void 0,
        availableAudioTracks:
          (n = m == null ? void 0 : m.getAvailableAudioTracks()) != null
            ? n
            : [],
        availableQualities:
          (o = m == null ? void 0 : m.getAvailableVideoQualities()) != null
            ? o
            : [],
        availableVideoTracks:
          (a = m == null ? void 0 : m.getAvailableVideoTracks()) != null
            ? a
            : [],
        clockTimestamp: y,
        currentPlayingAudioTrackID: m
          ? m.getCurrentPlayingAudioRepresentationID()
          : void 0,
        currentPlayingVideoQuality: m
          ? m.getCurrentPlayingVideoQuality()
          : void 0,
        currentPlayingVideoTrackID: m
          ? m.getCurrentPlayingVideoRepresentationID()
          : void 0,
        estimatedBandwidth: m ? m.getEstimatedBandwidth() : void 0,
        isDocumentHidden: C,
        isDRM: m ? m.isDrm() : void 0,
        isFBIsLiveTemplated: m ? m.isFBIsLiveTemplated() : void 0,
        isFBMS: m ? m.isFBMS() : void 0,
        isFBWasLive: m ? m.isFBWasLive() : void 0,
        isFullscreen: p.current ? p.current.getIsFullscreen() : void 0,
        isLiveRewindAvailable: m ? m.isLiveRewindAvailable() : void 0,
        isMixedCodecManifest: m ? m.isMixedCodecManifest() : null,
        isPredictiveDash: m ? m.isPredictiveDash() : void 0,
        liveTraceContext:
          h && (i = h.getLiveTraceContext()) != null ? i : void 0,
        manifestIdentifier: m ? m.getManifestIdentifier() : void 0,
        mpdValidationErrors: m ? m.getMpdValidationErrors() : void 0,
        networkConnected: r("NetworkStatus").isOnline(),
        perfTimestamp: b,
        targetAudioTrack:
          (l = m == null ? void 0 : m.getTargetAudioTrack()) != null ? l : null,
        targetVideoQuality:
          (u = m == null ? void 0 : m.getCurrentTargetVideoQuality()) != null
            ? u
            : "",
        videoElementDebugCurrentSrc: r("gkx")("24351")
          ? (c = _.getUnderlyingVideoElement()) == null
            ? void 0
            : c.currentSrc
          : void 0,
        videoElementDebugSrc: r("gkx")("24351")
          ? (d = _.getUnderlyingVideoElement()) == null
            ? void 0
            : d.src
          : void 0,
        videoElementDroppedFrameCount: R.droppedFrameCount,
        videoElementDuration: _.getDuration(),
        videoElementEnded: _.getEnded(),
        videoElementError: _.getError(),
        videoElementLastBufferEndPosition: _.getLastBufferEndPosition(),
        videoElementMuted: _.getMuted(),
        videoElementNetworkState: _.getNetworkState(),
        videoElementPaused: _.getPaused(),
        videoElementPlaybackRate: _.getPlaybackRate(),
        videoElementPlayheadPosition: S,
        videoElementReadyState: _.getReadyState(),
        videoElementTotalFrameCount: R.totalFrameCount,
        videoElementVolume: _.getVolume(),
        videoProjection: m == null ? void 0 : m.getVideoProjectionType(),
        videoRepresentationID: m
          ? m.getCurrentPlayingVideoRepresentationID()
          : void 0,
        viewabilityPercentage: L
          ? r("convertToViewabilityPercentage")(L.visiblePercentage)
          : void 0,
      };
    }
    l.createVideoPlayerImplementationStateMachineStateUncontrolledState = u;
  },
  98,
);
