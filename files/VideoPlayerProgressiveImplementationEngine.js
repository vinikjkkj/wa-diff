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
    "assignMediaStream",
    "cr:1680308",
    "cr:7276",
    "err",
    "getErrorNameFromMediaErrorCode",
    "getErrorSafe",
    "getMoreGranularErrorNameFromHTMLVideoElementErrorMessage",
    "gkx",
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
        _ = a.loggingMetaData.instanceKey,
        f = function () {
          var t = L(),
            i = l.current;
          if (!(t == null || i == null)) {
            t.addEventListener("error", function (o) {
              var i = t.error,
                l = i == null ? void 0 : i.code,
                s = r("getErrorNameFromMediaErrorCode")(l),
                u = i == null ? void 0 : i.message,
                c = u == null || u === "" ? "Unknown media error" : u,
                d = [],
                m =
                  u != null
                    ? r(
                        "getMoreGranularErrorNameFromHTMLVideoElementErrorMessage",
                      )(u)
                    : null,
                p = t.src;
              if (
                (!i &&
                  t.poster != null &&
                  t.poster !== "" &&
                  (c += "(possible_poster_load_failure)"),
                p !== "")
              ) {
                var _ = null;
                (e || (e = n("Promise")))
                  .resolve()
                  .then(function () {
                    return a.coreVideoPlayerMetaData
                      .crossOrigin_DO_NOT_USE_UNLESS_YOU_KNOW_WHAT_YOURE_DOING ===
                      "use-credentials" && r("gkx")("19391")
                      ? window.fetch(p, {
                          credentials: "include",
                          method: "GET",
                        })
                      : window.fetch(p);
                  })
                  .then(function (e) {
                    var t,
                      n = e.status,
                      r =
                        (t = e.headers.get("Content-Type")) != null
                          ? t
                          : "unknown";
                    if (
                      ((c =
                        c +
                        ". Fetched video content with Status:" +
                        n +
                        " Content-Type:" +
                        r),
                      (_ = "URL_RESPONSE_HTTP_" + n),
                      n < 200 || n >= 300)
                    )
                      return e.text().then(
                        function (e) {
                          (d.push(e.length.toString()),
                            (c +=
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
                      ? ((_ =
                          _ != null
                            ? _
                            : "URL_RESPONSE_FETCH_FAILED/" + e.name),
                        (c =
                          c +
                          ". Failed fetching video content with error: " +
                          e.name +
                          " " +
                          e.message))
                      : ((_ = _ != null ? _ : "URL_RESPONSE_FETCH_FAILED"),
                        (c =
                          c +
                          ". Failed fetching video content with unknown error"));
                  })
                  .finally(function () {
                    var e = r("err").apply(void 0, [c].concat(d));
                    ((e.name = [s, m, _].filter(Boolean).join("/")),
                      k(e, "progressive_implementation_error_with_more_info"));
                  });
              } else {
                var f = r("err").apply(void 0, [c].concat(d));
                ((f.name = [s, m, "VIDEO_ELEMENT_SRC_EMPTY"]
                  .filter(Boolean)
                  .join("/")),
                  k(f, "progressive_implementation_error_with_empty_src"));
              }
            });
            try {
              var s,
                c = i.graphQLVideoDRMInfo,
                d = i.videoFBID,
                m = c && (s = c.fairplayCert) != null ? s : null;
              if (n("cr:1680308") && c && m != null && d != null)
                if (
                  ((p.current = n("cr:1680308").newIfSupported(
                    m,
                    t,
                    d,
                    c.videoLicenseUriMap,
                  )),
                  p.current == null)
                ) {
                  var _ = r("err")("Fairplay not supported");
                  k(_, "progressive_player_fairplay_handler_missing");
                } else
                  p.current.addListener("error", function (e) {
                    var t = r("err")(e.error);
                    k(t, "progressive_player_fairplay_handler_error");
                  });
              var f = r("gkx")("18183")
                ? o("VideoPlayerImplementationEngineAPI").ensureVideoElementAPI(
                    T,
                  )
                : (T.current = o(
                    "VideoPlayerImplementationEngineVideoElementAPI",
                  ).createVideoPlayerImplementationEngineVideoElementAPI(t));
              u.current = i;
              {
                var g = R();
                E({
                  inbandCaptionsAutogeneratedFromManifest:
                    y.getInbandCaptionsAutogeneratedFromManifest(),
                  inbandCaptionsExpectedFromManifest:
                    y.getInbandCaptionsExpectedFromManifest(),
                  inbandCaptionsExpectedFromProps:
                    g == null ? void 0 : g.inbandCaptionsExpectedFromProps,
                  representationCaptionsExpectedFromManifest:
                    y.getRepresentationCaptionsExpectedFromManifest(),
                  sideLoadCaptionsExpectedFromProps:
                    g == null ? void 0 : g.sideLoadCaptionsExpectedFromProps,
                  sideLoadCaptionsUrlFromProps:
                    g == null ? void 0 : g.sideLoadCaptionsUrlFromProps,
                });
              }
              I.dispatch({
                payload: {
                  selectedVideoQuality: y.getUserSelectedVideoQuality(),
                  streamingFormat: y.getStreamType(),
                },
                type: "implementation_engine_initialized",
              });
              var h = function () {
                f.setPlayheadPosition(a.coreVideoPlayerMetaData.startTimestamp);
              };
              h();
            } catch (e) {
              k(e, "progressive_player_create_exception");
            }
          }
        },
        g = function (t, n) {
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
        h = function (t) {
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
          if (!g(u, i.current)) return !1;
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
            f(),
            !0
          );
        },
        y = o(
          "VideoPlayerProgressiveImplementationEngineExtrasAPI",
        ).createVideoPlayerProgressiveImplementationEngineExtrasAPI({
          getPlayingVideoInfo: function () {
            if (r("gkx")("440")) {
              var e,
                t = u.current;
              if (!t) return null;
              var n =
                (e = T.current) == null
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
              ).ensureVideoElementAPI(T),
              i = n.getUnderlyingVideoElement();
            if (e.mediaStream != null) {
              (m(i, e.mediaStream),
                I.dispatch({ payload: {}, type: "representation_changed" }));
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
                      I.getCurrentState().uncontrolledState
                        .videoElementPlayheadPosition) != null
                      ? s
                      : 0;
                  if (
                    (c > 0 && n.setPlayheadPosition(c),
                    I.getCurrentState().controlledState.playbackState ===
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
                  I.dispatch({ payload: {}, type: "representation_changed" });
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
        C = function () {
          p.current && (p.current.destroy(), (p.current = null));
        },
        b = o(
          "VideoPlayerImplementationEngineAPI",
        ).createVideoPlayerImplementationEngine({
          createDebugAPI: function (t) {
            var e = t.getVideoElementAPI,
              r = t.loggerToVPL;
            return n("cr:7276")
              ? n("cr:7276").createVideoPlayerImplementationDebugAPI({
                  engineExtrasAPI: y,
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
            C();
          },
          engineCreateArgs: t,
          engineExtrasAPI: y,
          engineMetadata: {
            isAbrEnabled: !1,
            playerInstanceKey: _,
            playerVersion: "comet_progressive",
            streamingFormat: "progressive",
          },
          handleVideoElementChanged: function (t) {
            t != null && f();
          },
          handleVideoInfoChange: h,
        }),
        v = b.debugLog,
        S = b.engine,
        R = b.getCaptionsInfo,
        L = b.getVideoElement,
        E = b.handleCaptionsInfoChange,
        k = b.handleFatalImplementationError,
        I = b.machine,
        T = b.videoElementAPIRef;
      return S;
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
