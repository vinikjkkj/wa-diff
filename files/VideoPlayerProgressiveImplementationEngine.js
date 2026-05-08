__d(
  "VideoPlayerProgressiveImplementationEngine",
  [
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
    "cr:7276",
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
    var e;
    function s(e, t, n) {
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
    function u(t) {
      var a = t.initialProps,
        i = { current: null },
        l = { current: null },
        u = { current: null },
        p = { current: null },
        _ = { current: !1 },
        f = { current: null },
        g = { current: null },
        h = a.loggingMetaData.instanceKey,
        y = function () {
          var t = I(),
            i = l.current;
          if (!(t == null || i == null)) {
            var s = 0,
              c = !1,
              d = null,
              m = !1,
              h = null,
              y = 0,
              C = function () {
                (s === 0 && (y = t.currentTime), s++);
                var e =
                  d != null
                    ? d
                    : o("VideoPlayerRetryConfig").computeBackoffMs(s - 1);
                ((d = null),
                  f.current != null && r("clearTimeout")(f.current),
                  (f.current = r("setTimeout")(function () {
                    if (
                      ((f.current = null), !(_.current || u.current == null))
                    ) {
                      g.current != null && (g.current(), (g.current = null));
                      var e = function () {
                        (t.removeEventListener("loadedmetadata", e),
                          (g.current = null),
                          !_.current &&
                            (y > 0 && (t.currentTime = y),
                            (c = !1),
                            (s = 0),
                            (d = null),
                            (m = !1),
                            (h = null),
                            (y = 0)));
                      };
                      (t.addEventListener("loadedmetadata", e),
                        (g.current = function () {
                          t.removeEventListener("loadedmetadata", e);
                        }),
                        (c = !0),
                        t.load());
                    }
                  }, e)));
              };
            t.addEventListener("error", function (i) {
              if (c) {
                if (
                  ((c = !1),
                  r("gkx")("25633") &&
                    m &&
                    s <
                      o("VideoPlayerRetryConfig").PROGRESSIVE_RETRY_CONFIG
                        .retryCount)
                ) {
                  C();
                  return;
                }
                h != null && D(h.implementationError, h.errorLocation);
                return;
              }
              var l = t.error,
                u = l == null ? void 0 : l.code,
                p = r("getErrorNameFromMediaErrorCode")(u),
                _ = l == null ? void 0 : l.message,
                f = _ == null || _ === "" ? "Unknown media error" : _,
                g = [],
                y =
                  _ != null
                    ? r(
                        "getMoreGranularErrorNameFromHTMLVideoElementErrorMessage",
                      )(_)
                    : null,
                b = t.src;
              if (
                (!l &&
                  t.poster != null &&
                  t.poster !== "" &&
                  (f += "(possible_poster_load_failure)"),
                b !== "")
              ) {
                var v = null;
                (e || (e = n("Promise")))
                  .resolve()
                  .then(function () {
                    return a.coreVideoPlayerMetaData
                      .crossOrigin_DO_NOT_USE_UNLESS_YOU_KNOW_WHAT_YOURE_DOING ===
                      "use-credentials" && r("gkx")("19391")
                      ? window.fetch(b, {
                          credentials: "include",
                          method: "GET",
                        })
                      : window.fetch(b);
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
                      (v = "URL_RESPONSE_HTTP_" + n),
                      o(
                        "VideoPlayerRetryConfig",
                      ).isRetriableTransientHttpResponseErrorName(v) &&
                        (d = o("VideoPlayerRetryConfig").parseRetryAfterMs(
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
                      ? ((v =
                          v != null
                            ? v
                            : "URL_RESPONSE_FETCH_FAILED/" + e.name),
                        (f =
                          f +
                          ". Failed fetching video content with error: " +
                          e.name +
                          " " +
                          e.message))
                      : ((v = v != null ? v : "URL_RESPONSE_FETCH_FAILED"),
                        (f =
                          f +
                          ". Failed fetching video content with unknown error"));
                  })
                  .finally(function () {
                    var e = r("err").apply(void 0, [f].concat(g));
                    e.name = [p, y, v].filter(Boolean).join("/");
                    var t = "progressive_implementation_error_with_more_info";
                    if (
                      ((h = { errorLocation: t, implementationError: e }),
                      (m = o(
                        "VideoPlayerRetryConfig",
                      ).isRetriableTransientHttpResponseErrorName(v)),
                      r("gkx")("25633") &&
                        m &&
                        s <
                          o("VideoPlayerRetryConfig").PROGRESSIVE_RETRY_CONFIG
                            .retryCount)
                    ) {
                      C();
                      return;
                    }
                    D(e, t);
                  });
              } else {
                var S = r("err").apply(void 0, [f].concat(g));
                ((S.name = [p, y, "VIDEO_ELEMENT_SRC_EMPTY"]
                  .filter(Boolean)
                  .join("/")),
                  D(S, "progressive_implementation_error_with_empty_src"));
              }
            });
            try {
              var b,
                S = i.graphQLVideoDRMInfo,
                R = i.videoFBID,
                L = S && (b = S.fairplayCert) != null ? b : null;
              if (n("cr:1680308") && S && L != null && R != null)
                if (
                  ((p.current = n("cr:1680308").newIfSupported(
                    L,
                    t,
                    R,
                    S.videoLicenseUriMap,
                  )),
                  p.current == null)
                ) {
                  var E = r("err")("Fairplay not supported");
                  D(E, "progressive_player_fairplay_handler_missing");
                } else
                  p.current.addListener("error", function (e) {
                    var t = r("err")(e.error);
                    D(t, "progressive_player_fairplay_handler_error");
                  });
              var P = r("gkx")("18183")
                ? o("VideoPlayerImplementationEngineAPI").ensureVideoElementAPI(
                    $,
                  )
                : ($.current = o(
                    "VideoPlayerImplementationEngineVideoElementAPI",
                  ).createVideoPlayerImplementationEngineVideoElementAPI(t));
              u.current = i;
              {
                var N = k();
                T({
                  inbandCaptionsAutogeneratedFromManifest:
                    v.getInbandCaptionsAutogeneratedFromManifest(),
                  inbandCaptionsExpectedFromManifest:
                    v.getInbandCaptionsExpectedFromManifest(),
                  inbandCaptionsExpectedFromProps:
                    N == null ? void 0 : N.inbandCaptionsExpectedFromProps,
                  representationCaptionsExpectedFromManifest:
                    v.getRepresentationCaptionsExpectedFromManifest(),
                  sideLoadCaptionsExpectedFromProps:
                    N == null ? void 0 : N.sideLoadCaptionsExpectedFromProps,
                  sideLoadCaptionsUrlFromProps:
                    N == null ? void 0 : N.sideLoadCaptionsUrlFromProps,
                });
              }
              x.dispatch({
                payload: {
                  selectedVideoQuality: v.getUserSelectedVideoQuality(),
                  streamingFormat: v.getStreamType(),
                },
                type: "implementation_engine_initialized",
              });
              var M = function () {
                P.setPlayheadPosition(a.coreVideoPlayerMetaData.startTimestamp);
              };
              M();
            } catch (e) {
              D(e, "progressive_player_create_exception");
            }
          }
        },
        C = function (t, n) {
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
        b = function (t) {
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
          if (!C(u, i.current)) return !1;
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
            y(),
            !0
          );
        },
        v = o(
          "VideoPlayerProgressiveImplementationEngineExtrasAPI",
        ).createVideoPlayerProgressiveImplementationEngineExtrasAPI({
          getPlayingVideoInfo: function () {
            if (r("gkx")("440")) {
              var e,
                t = u.current;
              if (!t) return null;
              var n =
                (e = $.current) == null
                  ? void 0
                  : e.getUnderlyingVideoElement().currentSrc;
              return babelHelpers.extends({}, t, {
                playingSrc: n != null && n !== "" ? n : null,
              });
            } else return u.current;
          },
          setUserSelectedVideoQuality: function (t) {
            var e = u.current;
            if (!e)
              throw r("FBLogger")("comet_video_player").mustfixThrow(
                "Attempt to switch quality when playingVideoInfo does not exist",
              );
            var n = o(
                "VideoPlayerImplementationEngineAPI",
              ).ensureVideoElementAPI($),
              i = n.getUnderlyingVideoElement();
            if (e.mediaStream != null) {
              (m(i, e.mediaStream),
                x.dispatch({ payload: {}, type: "representation_changed" }));
              return;
            }
            u.current = o(
              "VideoPlayerProgressiveImplementationEngineUtils",
            ).updatePlayingVideoInfoProgressiveWithUserSelectedQuality(e, t);
            var l = u.current.targetSrc;
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
            c(l, a.coreVideoPlayerMetaData.expiredVideoUrlRefreshHandler)
              .then(function (e) {
                var t, o, s;
                if (((t = u.current) == null ? void 0 : t.targetSrc) === l) {
                  d(
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
                  var c =
                    (s =
                      x.getCurrentState().uncontrolledState
                        .videoElementPlayheadPosition) != null
                      ? s
                      : 0;
                  if (
                    (c > 0 && n.setPlayheadPosition(c),
                    x.getCurrentState().controlledState.playbackState ===
                      "playing")
                  ) {
                    var m;
                    (m = n.play()) == null ||
                      m.catch(function (e) {
                        r("FBLogger")("video_playback_www")
                          .catching(r("getErrorSafe")(e))
                          .warn("Failed to play video after quality change");
                      });
                  }
                  x.dispatch({ payload: {}, type: "representation_changed" });
                }
              })
              .catch(function (e) {
                var t;
                if (((t = u.current) == null ? void 0 : t.targetSrc) === l) {
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
        S = function () {
          p.current && (p.current.destroy(), (p.current = null));
        },
        R = o(
          "VideoPlayerImplementationEngineAPI",
        ).createVideoPlayerImplementationEngine({
          createDebugAPI: function (t) {
            var e = t.getVideoElementAPI,
              r = t.loggerToVPL;
            return n("cr:7276")
              ? n("cr:7276").createVideoPlayerImplementationDebugAPI({
                  engineExtrasAPI: v,
                  getVideoElementAPI: e,
                  loggerToVPL: r,
                })
              : null;
          },
          createVideoPlayerError: function (t, n) {
            var e;
            return s(t, n, (e = u.current) == null ? void 0 : e.targetSrc);
          },
          destroyEngineParts: function () {
            ((_.current = !0),
              f.current != null &&
                (r("clearTimeout")(f.current), (f.current = null)),
              g.current != null && (g.current(), (g.current = null)),
              S());
          },
          engineCreateArgs: t,
          engineExtrasAPI: v,
          engineMetadata: {
            isAbrEnabled: !1,
            playerInstanceKey: h,
            playerVersion: "comet_progressive",
            streamingFormat: "progressive",
          },
          handleVideoElementChanged: function (t) {
            t != null && y();
          },
          handleVideoInfoChange: b,
        }),
        L = R.debugLog,
        E = R.engine,
        k = R.getCaptionsInfo,
        I = R.getVideoElement,
        T = R.handleCaptionsInfoChange,
        D = R.handleFatalImplementationError,
        x = R.machine,
        $ = R.videoElementAPIRef;
      return E;
    }
    function c(t, a) {
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
    function d(e, t, n) {
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
    function m(e, t) {
      r("assignMediaStream")(e, t);
    }
    ((l.createVideoPlayerProgressiveImplementationEngine = u),
      (l.internal_setHTMLVideoElementSrc = d),
      (l.internal_setHTMLVideoElementSrcObject = m));
  },
  98,
);
