__d(
  "WAWebPipYoutubeVideoPlayer.react",
  [
    "cx",
    "WAWebDomFullscreen",
    "WAWebPipCloseButton.react",
    "WAWebPipFullscreenToggleButton.react",
    "WAWebPipShade.react",
    "WAWebPipSharedVideoPlayer.react",
    "WAWebPipVideoRefControls.react",
    "WAWebPipYoutubeVideoTag.react",
    "WAWebUA",
    "WAWebVelocityTransitionGroup",
    "lodash",
    "react",
    "useWAWebDebouncedCallback",
    "useWAWebListener",
    "useWAWebPrevious",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useRef,
      p = c.useState;
    function _(e) {
      var t = e.isFullscreenMode,
        n = e.isVideoPlaying,
        r = e.mouseDownCoorRef,
        a = e.mouseMoveRecently,
        i = e.onClose,
        l = e.onExposeIframeInPiP,
        s = e.onFullScreenToggle,
        c = e.ref,
        d = e.videoMetadata,
        m = e.videoRef,
        p = function (t) {
          if (m.current) {
            var e = t;
            (d && t >= d.duration - 1 && d.duration > 1 && (e = d.duration - 1),
              m.current.setCurrentTime(e));
          }
        },
        _ = null;
      if (d) {
        var f,
          g =
            "x1ey2m1c x78zum5 xvt47uu xbudbmw xexx8yu x5zjp28 x18d9i69 x162tt16 x10l6tqk xtijo5x x1hc1fzr x13dflua x19991ni xwji4o3";
        ((_ = u.jsx("div", {
          ref: c,
          style: ((f = {}), (f._ah_g = !a), f),
          children: u.jsx(
            o("WAWebPipVideoRefControls.react").VideoRefControls,
            {
              refVideo: m.current,
              videoMetadata: d,
              isFullscreenMode: t,
              isVideoPlaying: n,
              handleSetCurrentTimeByControls: p,
              controlsClassName: t ? g : void 0,
              onFullscreenToggle: s,
              onClose: i,
              newPiPStyle: !0,
            },
          ),
        })),
          t ||
            (_ = u.jsx("div", {
              ref: c,
              className: "x5yr21d x10l6tqk xh8yej3",
              onMouseDown: function (t) {
                r.current = { x: t.clientX, y: t.clientY };
              },
              onMouseUp: function (t) {
                var e = t.clientX,
                  n = t.clientY,
                  o = r.current,
                  a = o ? o.x : void 0,
                  i = o ? o.y : void 0;
                a != null &&
                  i != null &&
                  Math.abs(e - a) + Math.abs(n - i) < 4 &&
                  l(!0);
              },
              children: _,
            })));
      }
      return _;
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t,
        n,
        a = e.onClose,
        i = e.onError,
        l = e.onRefSet,
        s = e.onSetFullscreenToggleCallback,
        c = e.onVideoEnded,
        f = e.onVideoMetadataChange,
        g = e.startTime,
        h = m(null),
        y = m(null),
        C = m(!1),
        b = m(null),
        v = p(void 0),
        S = v[0],
        R = v[1],
        L = p(!1),
        E = L[0],
        k = L[1],
        I = p(!1),
        T = I[0],
        D = I[1],
        x = p(!1),
        $ = x[0],
        P = x[1],
        N = p(!1),
        M = N[0],
        w = N[1],
        A = p(!1),
        F = A[0],
        O = A[1],
        B = r("useWAWebPrevious")(E),
        W = r("useWAWebPrevious")(S);
      o("useWAWebListener").useListener(
        r("WAWebDomFullscreen"),
        "fullscreen_change",
        function () {
          r("WAWebDomFullscreen").isFullscreenMode() &&
          r("WAWebDomFullscreen").getFullscreenElement() === h.current
            ? w(!0)
            : r("WAWebDomFullscreen").isFullscreenMode() || w(!1);
        },
      );
      var q = function (t) {
          (t.stopPropagation(),
            M
              ? r("WAWebDomFullscreen").exitFullscreen()
              : r("WAWebDomFullscreen").requestFullscreen(h.current));
        },
        U = r("useWAWebDebouncedCallback")(function () {
          P(!1);
        }, o("WAWebPipSharedVideoPlayer.react").FULLSCREEN_CONTROLS_DISPLAY_TIMEOUT);
      d(function () {
        s == null || s(q);
      }, []);
      var V = r("useWAWebStableCallback")(function (e) {
          ((y.current = e), e != null && (l == null || l(e)));
        }),
        H = function () {
          (c && c(), k(!1));
        },
        G = function () {
          i && i();
        },
        z = function () {
          var e,
            t,
            n =
              (e = (t = y.current) == null ? void 0 : t.getCurrentTime()) !=
              null
                ? e
                : null;
          (R(function (e) {
            return e && n != null
              ? babelHelpers.extends({}, e, { currentTime: n })
              : e;
          }),
            k(!1),
            (C.current = !0));
        },
        j = function () {
          var e,
            t,
            n =
              (e = (t = y.current) == null ? void 0 : t.getCurrentTime()) !=
              null
                ? e
                : null;
          (R(function (e) {
            return e && n != null
              ? babelHelpers.extends({}, e, { currentTime: n })
              : e;
          }),
            k(!0),
            (C.current = !0));
        },
        K = function (t) {
          var e = g != null ? g : 0;
          R({
            duration: t.duration,
            currentTime: e,
            volume: t.volume,
            muted: t.muted,
            bufferedTime: 0,
          });
        },
        Q = function (t) {
          R(function (e) {
            return (
              e &&
              babelHelpers.extends({}, e, { volume: t.volume, muted: t.muted })
            );
          });
        },
        X = function (t) {
          if (C.current) {
            C.current = !1;
            return;
          }
          R(function (e) {
            return e && babelHelpers.extends({}, e, { currentTime: t });
          });
        },
        Y = function (t) {
          var e = t[0],
            n = e[1];
          R(function (e) {
            return e && babelHelpers.extends({}, e, { bufferedTime: n });
          });
        };
      d(
        function () {
          (B !== E || !r("lodash").isEqual(W, S)) && (f == null || f(S, E));
        },
        [E, B, f, S, W],
      );
      var J =
          e.exposeIframeInPiP || F || M
            ? null
            : u.jsx("div", {
                className:
                  "x1ktv7sr x142x0oa xv7zg05 x12dgle5 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x166i9x0 x1gex1yb x1n7ce0x xqz8djb x5yr21d x1o0tod x10l6tqk x13vifvy xh8yej3",
              }),
        Z = u.jsxs("div", {
          className: "x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod",
          style: ((t = {}), (t._ah_a = M), t),
          children: [
            J,
            u.jsx(r("WAWebPipYoutubeVideoTag.react"), {
              ref: V,
              youtubeVideoId: e.youtubeVideoId,
              startTime: e.startTime,
              onEnded: H,
              onError: G,
              onLoadedMetadata: K,
              onPause: z,
              onPlaying: j,
              onProgress: Y,
              onTimeUpdate: X,
              onVolumeChange: Q,
              autoPlay: e.autoPlay,
              counterAbuseData: e.counterAbuseData,
            }),
          ],
        }),
        ee =
          e.disablePiPControls !== !0 || M
            ? u.jsx(_, {
                videoMetadata: S,
                videoRef: y,
                mouseDownCoorRef: b,
                mouseMoveRecently: $,
                isVideoPlaying: E,
                isFullscreenMode: M,
                onFullScreenToggle: q,
                onClose: a,
                onExposeIframeInPiP: O,
              })
            : null,
        te;
      o("WAWebUA").UA.isSafari ||
        (te = u.jsx(r("WAWebPipFullscreenToggleButton.react"), {
          isFullscreenMode: M,
          onClick: q,
        }));
      var ne = u.jsx(r("WAWebPipShade.react"), { theme: "full-rounded" }),
        re = M
          ? u.jsxs(u.Fragment, { children: [Z, ee] })
          : u.jsxs(u.Fragment, {
              children: [
                Z,
                u.jsx(r("WAWebVelocityTransitionGroup"), {
                  transitionName: "fade-fast",
                  children:
                    T && $ && !F && e.disablePiPControls !== !0
                      ? [
                          ne,
                          ee,
                          te,
                          u.jsx(
                            r("WAWebPipCloseButton.react"),
                            {
                              isFullscreenMode: M,
                              onClick: function (n) {
                                (n.stopPropagation(), e.onClose());
                              },
                            },
                            "close",
                          ),
                        ]
                      : null,
                }),
              ],
            });
      return u.jsx(
        "div",
        {
          ref: h,
          className: "xums3t4 x5yr21d xh8yej3",
          style: ((n = {}), (n._ah_a = M), (n._ah_d = !0), n),
          onMouseEnter: function (t) {
            if (F) {
              if (o("WAWebUA").UA.isGecko && T) return;
              O(!1);
            }
            D(!0);
          },
          onMouseLeave: function (t) {
            D(!1);
          },
          onMouseDown: function (t) {
            M && t.stopPropagation();
          },
          onMouseMove: function (t) {
            (T || D(!0), $ || P(!0), U());
          },
          children: re,
        },
        "elementsWrapped",
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
