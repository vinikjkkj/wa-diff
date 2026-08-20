__d(
  "VideoPlayerNextgendashEngineExtrasAPI",
  [
    "VideoPlayerNextgendashMain",
    "VideoPlayerNextgendashManifestParser",
    "VideoPlayerOzWWWGlobalConfig",
    "oz-player/networks/OzBandwidthEstimator",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return {
        displayLabel: o(
          "VideoPlayerNextgendashManifestParser",
        ).getDisplayLabelFromAudioRepresentation(e),
        id: e.representationId,
        lang: e.lang,
        mimeCodecs: e.mimeCodecsParsed.mimeCodecs,
        role: e.role,
        variantKey: e.variantKey,
      };
    }
    function s(e) {
      return {
        codec: e.mimeCodecsParsed.codecs,
        codecFamily: e.mimeCodecsParsed.codecFamily,
        displayLabel: o(
          "VideoPlayerNextgendashManifestParser",
        ).getDisplayLabelFromVideoRepresentation(e),
        height: e.height,
        id: e.representationId,
        lang: e.lang,
        mimeCodecs: e.mimeCodecsParsed.mimeCodecs,
        qualityLabel: e.qualityLabel,
        role: e.role,
        variantKey: e.variantKey,
        width: e.width,
      };
    }
    function u(t) {
      var n = t.getVideoElementAPI,
        a = t.mainSm,
        i = {
          getApproximateFBLSToPlayerDisplayLatency: function () {
            return null;
          },
          getAvailableAudioTracks: function () {
            return o("VideoPlayerNextgendashMain")
              .getAvailableAudioRepresentations(a)
              .map(function (t) {
                return e(t);
              });
          },
          getAvailableVideoQualities: function () {
            return Array.from(
              new Set(
                o("VideoPlayerNextgendashMain")
                  .filterVideoRepresentationsByTargetVariant(
                    a,
                    o(
                      "VideoPlayerNextgendashMain",
                    ).getAvailableVideoRepresentations(a),
                  )
                  .sort(function (e, t) {
                    return e.bandwidth - t.bandwidth;
                  })
                  .map(
                    o("VideoPlayerNextgendashManifestParser")
                      .getDisplayLabelFromVideoRepresentation,
                  ),
              ),
            );
          },
          getAvailableVideoTracks: function () {
            return o("VideoPlayerNextgendashMain")
              .getAvailableVideoRepresentations(a)
              .map(function (e) {
                return s(e);
              });
          },
          getCurrentAudioRepresentation: function () {
            var e = o(
              "VideoPlayerNextgendashMain",
            ).getCurrentPlayingAudioRepresentation(a);
            return e == null
              ? null
              : {
                  getBandwidth: function () {
                    return e.bandwidth;
                  },
                  getDisplayLabel: function () {
                    return o(
                      "VideoPlayerNextgendashManifestParser",
                    ).getDisplayLabelFromAudioRepresentation(e);
                  },
                  getID: function () {
                    return e.representationId;
                  },
                  getMimeCodecs: function () {
                    return e.mimeCodecsParsed.mimeCodecs;
                  },
                };
          },
          getCurrentPlayingAudioRepresentationID: function () {
            var e = o(
              "VideoPlayerNextgendashMain",
            ).getCurrentPlayingAudioRepresentation(a);
            return e != null ? e.representationId : null;
          },
          getCurrentPlayingAudioTrackID: function () {
            var e = o(
              "VideoPlayerNextgendashMain",
            ).getCurrentPlayingAudioRepresentation(a);
            return e != null ? e.representationId : null;
          },
          getCurrentPlayingVideoQuality: function () {
            var e = o(
              "VideoPlayerNextgendashMain",
            ).getCurrentPlayingVideoRepresentation(a);
            return e != null
              ? o(
                  "VideoPlayerNextgendashManifestParser",
                ).getDisplayLabelFromVideoRepresentation(e)
              : "";
          },
          getCurrentPlayingVideoRepresentationID: function () {
            var e = o(
              "VideoPlayerNextgendashMain",
            ).getCurrentPlayingVideoRepresentation(a);
            return e != null ? e.representationId : null;
          },
          getCurrentTargetVideoQuality: function () {
            var e = o(
              "VideoPlayerNextgendashMain",
            ).getCurrentTargetVideoRepresentation(a);
            return e != null
              ? o(
                  "VideoPlayerNextgendashManifestParser",
                ).getDisplayLabelFromVideoRepresentation(e)
              : "";
          },
          getCurrentVideoRepresentation: function () {
            var e = o(
              "VideoPlayerNextgendashMain",
            ).getCurrentPlayingVideoRepresentation(a);
            return e == null
              ? null
              : {
                  canPredict: function () {
                    return (
                      e.segmentsInfo.type === "SegmentTemplate" &&
                      e.segmentsInfo.segmentTimelinePredictive != null
                    );
                  },
                  getBandwidth: function () {
                    return e.bandwidth;
                  },
                  getDisplayLabel: function () {
                    return o(
                      "VideoPlayerNextgendashManifestParser",
                    ).getDisplayLabelFromVideoRepresentation(e);
                  },
                  getID: function () {
                    return e.representationId;
                  },
                  getMimeCodecs: function () {
                    return e.mimeCodecsParsed.mimeCodecs;
                  },
                  getQualityScoreCurveString: function (n) {
                    return n === "csvqm"
                      ? e.playbackResolutionCsvqmScoreCurve
                      : e.playbackResolutionMosScoreCurve;
                  },
                  getTimeRanges: function () {
                    return [];
                  },
                };
          },
          getEstimatedBandwidth: function () {
            return r("oz-player/networks/OzBandwidthEstimator").getBandwidth(
              r("VideoPlayerOzWWWGlobalConfig"),
            );
          },
          getInbandCaptionsAutogeneratedFromManifest: function () {
            return !1;
          },
          getInbandCaptionsExpectedFromManifest: function () {
            return (r("vulture")("tR5ZngRK5SqGSWsrK0VQglhS2Ps="), !1);
          },
          getManifestIdentifier: function () {
            return null;
          },
          getMpdValidationErrors: function () {
            return null;
          },
          getPerfLoggerProvider: function () {
            return null;
          },
          getRepresentationCaptionsExpectedFromManifest: function () {
            return !1;
          },
          getStreamType: function () {
            return "dash";
          },
          getTargetAudioTrack: function () {
            var t = o(
              "VideoPlayerNextgendashMain",
            ).getCurrentTargetAudioRepresentation(a);
            return t == null ? null : e(t);
          },
          getUserSelectedVideoQuality: function () {
            var e = o(
              "VideoPlayerNextgendashMain",
            ).getSelectedVideoQualityDisplayLabel(a);
            return e != null ? e : "auto";
          },
          getUserSelectedVideoVariant: function () {
            var e,
              t,
              n,
              r,
              i = o("VideoPlayerNextgendashMain").getSelectedMediaVariant(a);
            return i == null
              ? null
              : {
                  lang:
                    (e = (t = i.audioLang) != null ? t : i.videoLang) != null
                      ? e
                      : null,
                  role:
                    (n = (r = i.audioRole) != null ? r : i.videoRole) != null
                      ? n
                      : null,
                };
          },
          getVideoProjectionType: function () {
            return null;
          },
          getVideoRepresentations: function () {
            return null;
          },
          isDrm: function () {
            return !1;
          },
          isFBIsLiveTemplated: function () {
            return !1;
          },
          isFBMS: function () {
            return !1;
          },
          isFBWasLive: function () {
            return !1;
          },
          isLiveRewindAvailable: function () {
            return !1;
          },
          isMixedCodecManifest: function () {
            return o("VideoPlayerNextgendashMain").getIsMixedCodecManifest(a);
          },
          isPredictiveDash: function () {
            var e;
            return (e = o("VideoPlayerNextgendashMain").getIsPredictiveDash(
              a,
            )) != null
              ? e
              : !1;
          },
          setDimensions: function (t) {},
          setEnableLiveheadCatchup: function (t) {
            a.env.config.liveFollowEdgeActive = t;
          },
          setLatencyLevel: function (t) {},
          setUserSelectedVideoQuality: function (t) {
            var e = t === "auto" || t === "notselected" ? null : t;
            a.sendEvent({
              type: "select_video_quality",
              videoQualityDisplayLabel: e,
            });
          },
          setUserSelectedVideoVariant: function (t) {
            var e, n, r, i;
            if (t != null) {
              var l = o("VideoPlayerNextgendashMain").getSelectedMediaVariant(
                a,
              );
              a.sendEvent({
                mediaVariant: babelHelpers.extends(
                  {},
                  l != null
                    ? l
                    : {
                        audioLang: null,
                        audioRole: null,
                        videoLang: null,
                        videoRole: null,
                      },
                  {
                    audioLang:
                      (e = t == null ? void 0 : t.lang) != null ? e : null,
                    audioRole:
                      (n = t == null ? void 0 : t.role) != null ? n : null,
                    videoLang:
                      a.env.config.enableLipSync &&
                      (r = t == null ? void 0 : t.lang) != null
                        ? r
                        : null,
                    videoRole:
                      a.env.config.enableLipSync &&
                      (i = t == null ? void 0 : t.role) != null
                        ? i
                        : null,
                  },
                ),
                type: "select_media_variant",
              });
            }
          },
        };
      return i;
    }
    l.createVideoPlayerNextgendashEngineExtrasAPI = u;
  },
  98,
);
