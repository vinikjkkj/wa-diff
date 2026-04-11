__d(
  "VideoPlayerImplementationStateMachineStateUncontrolledState",
  ["NetworkStatus", "convertToViewabilityPercentage", "gkx", "performance"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var n,
        o,
        a,
        i,
        l,
        s,
        u,
        c,
        d = t.engineExtrasAPI,
        m = t.fullscreenControllerRef,
        p = t.videoElementAPI,
        _ = t.videoLiveTraceRef,
        f = t.videoPlayerPassiveViewabilityInfo,
        g = _.current,
        h = Date.now(),
        y =
          typeof (e || (e = r("performance"))).now == "function"
            ? (e || (e = r("performance"))).now()
            : 0;
      if (p == null) {
        var C;
        return {
          audioRepresentationID: void 0,
          availableAudioTracks: [],
          availableQualities: [],
          availableVideoTracks: [],
          clockTimestamp: h,
          currentPlayingAudioTrackID: void 0,
          currentPlayingVideoQuality: void 0,
          currentPlayingVideoTrackID: void 0,
          estimatedBandwidth: void 0,
          isDocumentHidden: document.hidden,
          isDRM: void 0,
          isFBIsLiveTemplated: void 0,
          isFBMS: void 0,
          isFBWasLive: void 0,
          isFullscreen: m.current ? m.current.getIsFullscreen() : void 0,
          isLiveRewindAvailable: void 0,
          isMixedCodecManifest: null,
          isPredictiveDash: void 0,
          liveTraceContext:
            g && (C = g.getLiveTraceContext()) != null ? C : void 0,
          manifestIdentifier: void 0,
          mpdValidationErrors: void 0,
          networkConnected: void 0,
          perfTimestamp: y,
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
      var b = p.getPlayheadPosition(),
        v = f.getCurrent();
      return {
        audioRepresentationID: d
          ? d.getCurrentPlayingAudioRepresentationID()
          : void 0,
        availableAudioTracks:
          (n = d == null ? void 0 : d.getAvailableAudioTracks()) != null
            ? n
            : [],
        availableQualities:
          (o = d == null ? void 0 : d.getAvailableVideoQualities()) != null
            ? o
            : [],
        availableVideoTracks:
          (a = d == null ? void 0 : d.getAvailableVideoTracks()) != null
            ? a
            : [],
        clockTimestamp: h,
        currentPlayingAudioTrackID: d
          ? d.getCurrentPlayingAudioRepresentationID()
          : void 0,
        currentPlayingVideoQuality: d
          ? d.getCurrentPlayingVideoQuality()
          : void 0,
        currentPlayingVideoTrackID: d
          ? d.getCurrentPlayingVideoRepresentationID()
          : void 0,
        estimatedBandwidth: d ? d.getEstimatedBandwidth() : void 0,
        isDocumentHidden: document.hidden,
        isDRM: d ? d.isDrm() : void 0,
        isFBIsLiveTemplated: d ? d.isFBIsLiveTemplated() : void 0,
        isFBMS: d ? d.isFBMS() : void 0,
        isFBWasLive: d ? d.isFBWasLive() : void 0,
        isFullscreen: m.current ? m.current.getIsFullscreen() : void 0,
        isLiveRewindAvailable: d ? d.isLiveRewindAvailable() : void 0,
        isMixedCodecManifest: d ? d.isMixedCodecManifest() : null,
        isPredictiveDash: d ? d.isPredictiveDash() : void 0,
        liveTraceContext:
          g && (i = g.getLiveTraceContext()) != null ? i : void 0,
        manifestIdentifier: d ? d.getManifestIdentifier() : void 0,
        mpdValidationErrors: d ? d.getMpdValidationErrors() : void 0,
        networkConnected: r("NetworkStatus").isOnline(),
        perfTimestamp: y,
        targetAudioTrack:
          (l = d == null ? void 0 : d.getTargetAudioTrack()) != null ? l : null,
        targetVideoQuality:
          (s = d == null ? void 0 : d.getCurrentTargetVideoQuality()) != null
            ? s
            : "",
        videoElementDebugCurrentSrc: r("gkx")("24351")
          ? (u = p.getUnderlyingVideoElement()) == null
            ? void 0
            : u.currentSrc
          : void 0,
        videoElementDebugSrc: r("gkx")("24351")
          ? (c = p.getUnderlyingVideoElement()) == null
            ? void 0
            : c.src
          : void 0,
        videoElementDroppedFrameCount: p.getDroppedFrameCount(),
        videoElementDuration: p.getDuration(),
        videoElementEnded: p.getEnded(),
        videoElementError: p.getError(),
        videoElementLastBufferEndPosition: p.getLastBufferEndPosition(),
        videoElementMuted: p.getMuted(),
        videoElementNetworkState: p.getNetworkState(),
        videoElementPaused: p.getPaused(),
        videoElementPlaybackRate: p.getPlaybackRate(),
        videoElementPlayheadPosition: b,
        videoElementReadyState: p.getReadyState(),
        videoElementTotalFrameCount: p.getTotalFrameCount(),
        videoElementVolume: p.getVolume(),
        videoProjection: d == null ? void 0 : d.getVideoProjectionType(),
        videoRepresentationID: d
          ? d.getCurrentPlayingVideoRepresentationID()
          : void 0,
        viewabilityPercentage: v
          ? r("convertToViewabilityPercentage")(v.visiblePercentage)
          : void 0,
      };
    }
    l.createVideoPlayerImplementationStateMachineStateUncontrolledState = s;
  },
  98,
);
