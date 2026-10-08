__d(
  "VideoPlayerProgressiveImplementationEngine",
  [
    "ExecutionEnvironment",
    "FBLogger",
    "Promise",
    "VideoPlayerImplementationEngineAPI",
    "VideoPlayerImplementationEngineVideoElementAPI",
    "VideoPlayerImplementationErrors",
    "VideoPlayerODS",
    "VideoPlayerProgressiveImplementationEngineExtrasAPI",
    "VideoPlayerProgressiveImplementationEngineUtils",
    "VideoPlayerRetryConfig",
    "assignMediaStream",
    "clearTimeout",
    "cr:1680308",
    "cr:4158",
    "err",
    "getErrorNameFromMediaErrorCode",
    "getErrorSafe",
    "getMoreGranularErrorNameFromHTMLVideoElementErrorMessage",
    "gkx",
    "setTimeout",
    "videoUrlUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      var t = e.getBoundingClientRect(),
        n = window.innerHeight || document.documentElement.clientHeight;
      return t.bottom > 0 && t.top < n;
    }
    function c(e, t, n) {
      var r =
        typeof e == "object" && e != null && typeof e.name == "string"
          ? e.name
          : null;
      return o(
        "VideoPlayerImplementationErrors",
      ).createVideoPlayerErrorFromGenericError(
        ["PROGRESSIVE_JAVASCRIPT_NATIVE", r].filter(Boolean).join("/"),
        e,
        t,
        n,
      );
    }
    function d(t) {
      var a = t.initialProps,
        i = { current: null },
        l = { current: null },
        d = { current: null },
        f = { current: null },
        g = { current: !1 },
        h = { current: null },
        y = { current: null },
        C = { current: null },
        b = { current: null },
        v = function (t) {
          C.current == null || C.current();
          var e = function () {
              b.current != null ||
                t.paused ||
                ((b.current = t.currentTime),
                w.dispatch({
                  payload: {
                    bufferingType: w.getCurrentState().controlledState
                      .waitingForDomPlaying
                      ? "start/unpause"
                      : "in_play",
                  },
                  type: "buffering_begin_requested",
                }));
            },
            n = function (t) {
              b.current != null &&
                ((b.current = null),
                w.dispatch({
                  payload: { domEventPerfTimestamp: t.timeStamp },
                  type: "buffering_end_requested",
                }));
            },
            r = function () {
              b.current != null && (b.current = t.currentTime);
            },
            o = function (r) {
              var e = b.current;
              e != null && t.currentTime > e && n(r);
            };
          (t.addEventListener("waiting", e),
            t.addEventListener("playing", n),
            t.addEventListener("pause", n),
            t.addEventListener("seeking", r),
            t.addEventListener("timeupdate", o),
            (C.current = function () {
              (t.removeEventListener("waiting", e),
                t.removeEventListener("playing", n),
                t.removeEventListener("pause", n),
                t.removeEventListener("seeking", r),
                t.removeEventListener("timeupdate", o),
                (C.current = null));
            }));
        },
        S = a.loggingMetaData.instanceKey,
        R = function () {
          var t = P(),
            i = l.current;
          if (!(t == null || i == null)) {
            var c = 0,
              m = !1,
              p = null,
              _ = !1,
              C = null,
              b = 0,
              S = function () {
                (c === 0 && (b = t.currentTime), c++);
                var e =
                  p != null
                    ? p
                    : o("VideoPlayerRetryConfig").computeBackoffMs(c - 1);
                ((p = null),
                  h.current != null && r("clearTimeout")(h.current),
                  (h.current = r("setTimeout")(function () {
                    if (
                      r("gkx")("25633") &&
                      (document.visibilityState === "hidden" || !u(t))
                    ) {
                      ((h.current = null),
                        C != null && M(C.implementationError, C.errorLocation));
                      return;
                    }
                    h.current = null;
                    var e = function () {
                      !g.current &&
                        C != null &&
                        M(C.implementationError, C.errorLocation);
                    };
                    if (r("gkx")("25633")) {
                      var n =
                        (s || (s = r("ExecutionEnvironment"))).canUseDOM &&
                        document.visibilityState === "hidden";
                      if (n || !u(t)) {
                        e();
                        return;
                      }
                    }
                    if (!(g.current || d.current == null)) {
                      y.current != null && (y.current(), (y.current = null));
                      var o = function () {
                        (t.removeEventListener("loadedmetadata", o),
                          (y.current = null),
                          !g.current &&
                            (b > 0 && (t.currentTime = b),
                            (m = !1),
                            (c = 0),
                            (p = null),
                            (_ = !1),
                            (C = null),
                            (b = 0)));
                      };
                      (t.addEventListener("loadedmetadata", o),
                        (y.current = function () {
                          t.removeEventListener("loadedmetadata", o);
                        }),
                        (m = !0),
                        t.load());
                    }
                  }, e)));
              };
            (t.addEventListener("error", function (i) {
              if (m) {
                if (
                  ((m = !1),
                  r("gkx")("25633") &&
                    _ &&
                    c <
                      o("VideoPlayerRetryConfig").PROGRESSIVE_RETRY_CONFIG
                        .retryCount)
                ) {
                  S();
                  return;
                }
                C != null && M(C.implementationError, C.errorLocation);
                return;
              }
              var l = t.error,
                s = l == null ? void 0 : l.code,
                u = r("getErrorNameFromMediaErrorCode")(s),
                d = l == null ? void 0 : l.message,
                f = d == null || d === "" ? "Unknown media error" : d,
                g = [],
                h =
                  d != null
                    ? r(
                        "getMoreGranularErrorNameFromHTMLVideoElementErrorMessage",
                      )(d)
                    : null,
                y = t.src;
              if (
                (!l &&
                  t.poster != null &&
                  t.poster !== "" &&
                  (f += "(possible_poster_load_failure)"),
                y !== "")
              ) {
                var b = null;
                (e || (e = n("Promise")))
                  .resolve()
                  .then(function () {
                    return a.coreVideoPlayerMetaData
                      .crossOrigin_DO_NOT_USE_UNLESS_YOU_KNOW_WHAT_YOURE_DOING ===
                      "use-credentials" && r("gkx")("19391")
                      ? window.fetch(y, {
                          credentials: "include",
                          method: "GET",
                        })
                      : window.fetch(y);
                  })
                  .then(function (e) {
                    var t,
                      n = e.status,
                      r =
                        (t = e.headers.get("Content-Type")) != null
                          ? t
                          : "unknown";
                    if (
                      ((f =
                        f +
                        ". Fetched video content with Status:" +
                        n +
                        " Content-Type:" +
                        r),
                      (b = "URL_RESPONSE_HTTP_" + n),
                      o(
                        "VideoPlayerRetryConfig",
                      ).isRetriableTransientHttpResponseErrorName(b) &&
                        (p = o("VideoPlayerRetryConfig").parseRetryAfterMs(
                          e.headers.get("Retry-After"),
                        )),
                      n < 200 || n >= 300)
                    )
                      return e.text().then(
                        function (e) {
                          (g.push(e.length.toString()),
                            (f +=
                              " Body:%s:" +
                              e.substr(0, 200) +
                              (e.length > 200 ? "..." : "")));
                        },
                        function () {},
                      );
                  })
                  .catch(function (e) {
                    typeof e == "object" &&
                    e != null &&
                    typeof e.name == "string" &&
                    typeof e.message == "string"
                      ? ((b =
                          b != null
                            ? b
                            : "URL_RESPONSE_FETCH_FAILED/" + e.name),
                        (f =
                          f +
                          ". Failed fetching video content with error: " +
                          e.name +
                          " " +
                          e.message))
                      : ((b = b != null ? b : "URL_RESPONSE_FETCH_FAILED"),
                        (f =
                          f +
                          ". Failed fetching video content with unknown error"));
                  })
                  .finally(function () {
                    var e = r("err").apply(void 0, [f].concat(g));
                    e.name = [u, h, b].filter(Boolean).join("/");
                    var t = "progressive_implementation_error_with_more_info";
                    if (
                      ((C = { errorLocation: t, implementationError: e }),
                      (_ = o(
                        "VideoPlayerRetryConfig",
                      ).isRetriableTransientHttpResponseErrorName(b)),
                      r("gkx")("25633") &&
                        _ &&
                        c <
                          o("VideoPlayerRetryConfig").PROGRESSIVE_RETRY_CONFIG
                            .retryCount)
                    ) {
                      S();
                      return;
                    }
                    M(e, t);
                  });
              } else {
                var v = r("err").apply(void 0, [f].concat(g));
                ((v.name = [u, h, "VIDEO_ELEMENT_SRC_EMPTY"]
                  .filter(Boolean)
                  .join("/")),
                  M(v, "progressive_implementation_error_with_empty_src"));
              }
            }),
              v(t));
            try {
              var R,
                L = i.graphQLVideoDRMInfo,
                E = i.videoFBID,
                I = L && (R = L.fairplayCert) != null ? R : null;
              if (n("cr:1680308") && L && I != null && E != null)
                if (
                  ((f.current = n("cr:1680308").newIfSupported(
                    I,
                    t,
                    E,
                    L.videoLicenseUriMap,
                  )),
                  f.current == null)
                ) {
                  var T = r("err")("Fairplay not supported");
                  M(T, "progressive_player_fairplay_handler_missing");
                } else
                  f.current.addListener("error", function (e) {
                    var t = r("err")(e.error);
                    M(t, "progressive_player_fairplay_handler_error");
                  });
              var D = r("gkx")("18183")
                ? o("VideoPlayerImplementationEngineAPI").ensureVideoElementAPI(
                    A,
                  )
                : (A.current = o(
                    "VideoPlayerImplementationEngineVideoElementAPI",
                  ).createVideoPlayerImplementationEngineVideoElementAPI(t));
              d.current = i;
              {
                var x = $();
                N({
                  inbandCaptionsAutogeneratedFromManifest:
                    k.getInbandCaptionsAutogeneratedFromManifest(),
                  inbandCaptionsExpectedFromManifest:
                    k.getInbandCaptionsExpectedFromManifest(),
                  inbandCaptionsExpectedFromProps:
                    x == null ? void 0 : x.inbandCaptionsExpectedFromProps,
                  representationCaptionsExpectedFromManifest:
                    k.getRepresentationCaptionsExpectedFromManifest(),
                  sideLoadCaptionsExpectedFromProps:
                    x == null ? void 0 : x.sideLoadCaptionsExpectedFromProps,
                  sideLoadCaptionsUrlFromProps:
                    x == null ? void 0 : x.sideLoadCaptionsUrlFromProps,
                });
              }
              w.dispatch({
                payload: {
                  selectedVideoQuality: k.getUserSelectedVideoQuality(),
                  streamingFormat: k.getStreamType(),
                },
                type: "implementation_engine_initialized",
              });
              var F = function () {
                D.setPlayheadPosition(a.coreVideoPlayerMetaData.startTimestamp);
              };
              F();
            } catch (e) {
              M(e, "progressive_player_create_exception");
            }
          }
        },
        L = function (t, n) {
          if (n == null) return !0;
          if (t.videoFBID !== n.videoFBID) {
            var e = 14;
            return (
              o("VideoPlayerODS").bumpEntityKey(
                "comet_video_player",
                "ProgressiveImplementation.video_fbid_changed",
                e,
              ),
              !1
            );
          } else if (t.hdSrc !== n.hdSrc || t.sdSrc !== n.sdSrc) {
            var r = 14;
            return (
              o("VideoPlayerODS").bumpEntityKey(
                "comet_video_player",
                "ProgressiveImplementation.src_changed",
                r,
              ),
              !1
            );
          } else return !1;
        },
        E = function (t) {
          var e,
            n,
            a,
            s,
            u = {
              audioOnly: t.coreVideoPlayerMetaData.audioOnly,
              graphQLVideoDRMInfo:
                (e = t.coreVideoPlayerMetaData.graphQLVideoDRMInfo) != null
                  ? e
                  : null,
              hdSrc: t.hdSrc === "" ? null : (n = t.hdSrc) != null ? n : null,
              hdSrcPreferred: t.hdSrcPreferred,
              mediaStream: (a = t.mediaStream) != null ? a : null,
              sdSrc: t.sdSrc === "" ? null : (s = t.sdSrc) != null ? s : null,
              videoFBID: t.coreVideoPlayerMetaData.videoFBID,
            };
          if (!L(u, i.current)) return !1;
          var c = u.mediaStream != null;
          if (!c && u.hdSrc == null && u.sdSrc == null)
            throw r("FBLogger")("comet_video_player").mustfixThrow(
              "Empty hdSrc, sdSrc, and mediaStream",
            );
          return (
            (i.current = u),
            (l.current = o(
              "VideoPlayerProgressiveImplementationEngineUtils",
            ).createResolvedVideoInfoProgressive(u)),
            R(),
            !0
          );
        },
        k = o(
          "VideoPlayerProgressiveImplementationEngineExtrasAPI",
        ).createVideoPlayerProgressiveImplementationEngineExtrasAPI({
          getPlayingVideoInfo: function () {
            if (r("gkx")("440")) {
              var e,
                t = d.current;
              if (!t) return null;
              var n =
                (e = A.current) == null
                  ? void 0
                  : e.getUnderlyingVideoElement().currentSrc;
              return babelHelpers.extends({}, t, {
                playingSrc: n != null && n !== "" ? n : null,
              });
            } else return d.current;
          },
          setUserSelectedVideoQuality: function (t) {
            var e = d.current;
            if (!e)
              throw r("FBLogger")("comet_video_player").mustfixThrow(
                "Attempt to switch quality when playingVideoInfo does not exist",
              );
            var n = o(
                "VideoPlayerImplementationEngineAPI",
              ).ensureVideoElementAPI(A),
              i = n.getUnderlyingVideoElement();
            if (e.mediaStream != null) {
              (_(i, e.mediaStream),
                w.dispatch({ payload: {}, type: "representation_changed" }));
              return;
            }
            d.current = o(
              "VideoPlayerProgressiveImplementationEngineUtils",
            ).updatePlayingVideoInfoProgressiveWithUserSelectedQuality(e, t);
            var l = d.current.targetSrc;
            if (l === null) {
              r("FBLogger")("comet_video_player")
                .addMetadata(
                  "COMET_VIDEO",
                  "VIDEO_ID",
                  a.coreVideoPlayerMetaData.videoFBID,
                )
                .warn(
                  "Received null targetSrc from setUserSelectedVideoQuality, selectedQuality: %s",
                  String(t),
                );
              return;
            }
            m(l, a.coreVideoPlayerMetaData.expiredVideoUrlRefreshHandler)
              .then(function (e) {
                var t, o, s;
                if (((t = d.current) == null ? void 0 : t.targetSrc) === l) {
                  p(
                    i,
                    {
                      crossOrigin:
                        (o =
                          a.coreVideoPlayerMetaData
                            .crossOrigin_DO_NOT_USE_UNLESS_YOU_KNOW_WHAT_YOURE_DOING) !=
                        null
                          ? o
                          : a.coreVideoPlayerMetaData.isSpherical === !0
                            ? "anonymous"
                            : null,
                    },
                    e,
                  );
                  var u =
                    (s =
                      w.getCurrentState().uncontrolledState
                        .videoElementPlayheadPosition) != null
                      ? s
                      : 0;
                  if (
                    (u > 0 && n.setPlayheadPosition(u),
                    w.getCurrentState().controlledState.playbackState ===
                      "playing")
                  ) {
                    var c;
                    (c = n.play()) == null ||
                      c.catch(function (e) {
                        r("FBLogger")("video_playback_www")
                          .catching(r("getErrorSafe")(e))
                          .warn("Failed to play video after quality change");
                      });
                  }
                  w.dispatch({ payload: {}, type: "representation_changed" });
                }
              })
              .catch(function (e) {
                var t;
                if (((t = d.current) == null ? void 0 : t.targetSrc) === l) {
                  var n = r("getErrorSafe")(e);
                  r("FBLogger")("comet_video_player")
                    .addMetadata(
                      "COMET_VIDEO",
                      "VIDEO_ID",
                      a.coreVideoPlayerMetaData.videoFBID,
                    )
                    .catching(n)
                    .warn(
                      "Failed refreshing video URL with original error: %s",
                      String(n),
                    );
                }
              });
          },
        }),
        I = function () {
          f.current && (f.current.destroy(), (f.current = null));
        },
        T = o(
          "VideoPlayerImplementationEngineAPI",
        ).createVideoPlayerImplementationEngine({
          createDebugAPI: function (t) {
            var e = t.getVideoElementAPI,
              r = t.loggerToVPL;
            return n("cr:4158")
              ? n("cr:4158").createVideoPlayerImplementationDebugAPI({
                  engineExtrasAPI: k,
                  getVideoElementAPI: e,
                  loggerToVPL: r,
                })
              : null;
          },
          createVideoPlayerError: function (t, n) {
            var e;
            return c(t, n, (e = d.current) == null ? void 0 : e.targetSrc);
          },
          destroyEngineParts: function () {
            ((g.current = !0),
              h.current != null &&
                (r("clearTimeout")(h.current), (h.current = null)),
              y.current != null && (y.current(), (y.current = null)),
              C.current == null || C.current(),
              I());
          },
          engineCreateArgs: t,
          engineExtrasAPI: k,
          engineMetadata: {
            isAbrEnabled: !1,
            playerInstanceKey: S,
            playerVersion: "comet_progressive",
            streamingFormat: "progressive",
          },
          handleVideoElementChanged: function (t) {
            t != null && R();
          },
          handleVideoInfoChange: E,
        }),
        D = T.debugLog,
        x = T.engine,
        $ = T.getCaptionsInfo,
        P = T.getVideoElement,
        N = T.handleCaptionsInfoChange,
        M = T.handleFatalImplementationError,
        w = T.machine,
        A = T.videoElementAPIRef;
      return x;
    }
    function m(t, a) {
      return a && o("videoUrlUtils").isCdnUrlExpired(t)
        ? a(t).then(function (t) {
            var o;
            return (o = t.refreshedUrl) != null
              ? o
              : (e || (e = n("Promise"))).reject(
                  r("err")(
                    "Failed refreshing URL" +
                      (t.reason !== null ? " with reason: " + t.reason : ""),
                  ),
                );
          })
        : (e || (e = n("Promise"))).resolve(t);
    }
    function p(e, t, n) {
      var r = t.crossOrigin;
      if (n == null || n === "") e.removeAttribute("src");
      else {
        var o = e.playbackRate;
        e.setAttribute("src", n);
        var a = null;
        if (r != null) {
          try {
            a = new URL(n).origin;
          } catch (e) {}
          if (a != null && location.origin !== a)
            switch (r) {
              case "anonymous":
              case "use-credentials":
                e.setAttribute("crossOrigin", r);
                break;
              default:
                e.removeAttribute("crossOrigin");
                break;
            }
        }
        e.playbackRate = o;
      }
    }
    function _(e, t) {
      r("assignMediaStream")(e, t);
    }
    ((l.isVideoElementOnScreen = u),
      (l.createVideoPlayerProgressiveImplementationEngine = d),
      (l.internal_setHTMLVideoElementSrc = p),
      (l.internal_setHTMLVideoElementSrcObject = _));
  },
  98,
);
