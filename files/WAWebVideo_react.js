__d(
  "WAWebVideo.react",
  [
    "WALogger",
    "WAWebClassnames",
    "WAWebDomVideoDisposeMediaPlayer",
    "WAWebMediaGatingUtils",
    "WAWebNoop",
    "WAWebPttAudioChannels",
    "WAWebUA",
    "WAWebVideoPlayerSurfaceLoadable.react",
    "WAWebVideoPlayerXBasicControlsLoadable.react",
    "WAWebVideoPlayerXLoadable.react",
    "gkx",
    "react",
    "stylex",
    "useLazyRef",
    "useVideoPlayerXAPIOutsideVideoPlayerSurface",
    "useWAWebListener",
    "useWAWebOnUnmount",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = ["ref"],
      c = ["ref"],
      d,
      m,
      p = m || (m = o("react")),
      _ = m,
      f = _.useCallback,
      g = _.useEffect,
      h = _.useImperativeHandle,
      y = _.useMemo,
      C = _.useRef,
      b = _.useState,
      v = {
        video: {
          display: "x1lliihq",
          width: "xh8yej3",
          height: "x5yr21d",
          $$css: !0,
        },
      };
    function S(e) {
      var t = e.ref,
        n = babelHelpers.objectWithoutPropertiesLoose(e, u),
        a = n.autoPlay,
        i = n.controls,
        l = i === void 0 ? !1 : i,
        s = n.disableAutoplayManagement,
        c = n.loop,
        m = c === void 0 ? !1 : c,
        _ = n.muted,
        C = n.onAudioChannelRelease,
        b = n.onEnded,
        S = n.onLoadedData,
        R = n.onLoadedMetadata,
        L = n.onLoop,
        E = n.onPlaying,
        k = n.onStoppedPlaying,
        I = n.onTimeUpdate,
        T = n.renderVideoPixelsFit,
        D = n.src,
        x = n.srcObject,
        $ = n.xstyle,
        P = o(
          "useVideoPlayerXAPIOutsideVideoPlayerSurface",
        ).useVideoPlayerXAPIOutsideVideoPlayerSurface(),
        N = P[0],
        M = P[1].controller,
        w = P[2],
        A = f(
          function () {
            m || b == null || b();
          },
          [m, b],
        );
      g(
        function () {
          _ != null && M != null && M.setMuted(_, "product_initiated");
        },
        [M, _],
      );
      var F = y(
        function () {
          return {
            onAudioChannelRelease:
              C != null
                ? C
                : function () {
                    l && (M == null || M.pause("product_initiated"));
                  },
            onlyClaimIfUnmuted: !0,
            syncVolumeSettings: !1,
          };
        },
        [M, l, C],
      );
      h(t, function () {
        return {
          underlyingVideo: function () {
            return null;
          },
          play: function (t) {
            M == null || M.play(t != null ? t : "user_initiated");
          },
          pause: function (t) {
            M == null || M.pause(t != null ? t : "user_initiated");
          },
          pauseAndReset: function () {
            (M == null || M.pause("product_initiated"), M == null || M.seek(0));
          },
          seek: function (t) {
            M == null || M.seek(t);
          },
          getPaused: function () {
            var e;
            return (e = M == null ? void 0 : M.getCurrentState().paused) != null
              ? e
              : !0;
          },
          getDuration: function () {
            return M == null ? void 0 : M.getCurrentState().duration;
          },
          getCurrentTime: function () {
            return M == null ? void 0 : M.getPlayheadPosition();
          },
          getVideoDimensions: function () {
            return M == null
              ? void 0
              : M.internal_getVideoPixelsDecodedDimensions();
          },
          getVideoElementDimensions: function () {
            var e = M == null ? void 0 : M.internal_getVideoElement();
            return e == null || e.offsetWidth <= 0 || e.offsetHeight <= 0
              ? null
              : { width: e.offsetWidth, height: e.offsetHeight };
          },
          drawFrameToContext: function (t) {
            var e = M == null ? void 0 : M.internal_getVideoElement();
            if (e == null) return !1;
            for (
              var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
              o < n;
              o++
            )
              r[o - 1] = arguments[o];
            return (
              r.length === 4
                ? t.drawImage.apply(t, [e].concat(r))
                : t.drawImage.apply(t, [e].concat(r)),
              !0
            );
          },
        };
      });
      var O = n.onClick != null ? { onClick: n.onClick } : {},
        B =
          n.width != null || n.height != null
            ? babelHelpers.extends({}, n.style, {
                width: n.width,
                height: n.height,
              })
            : n.style;
      return p.jsx(
        "div",
        babelHelpers.extends(
          {
            className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
              (d || (d = r("stylex")))(v.video, $),
              n.className,
            ),
            style: B,
          },
          O,
          {
            children: p.jsx(
              o("WAWebVideoPlayerXLoadable.react").WAWebVideoPlayerXLoadable,
              {
                apiRef: N,
                src: D,
                mediaStream: x,
                autoplayEnabled: a != null ? a : !1,
                disableAutoplayManagement: s,
                loopCount: m ? -1 : 0,
                renderVideoPixelsFit: T,
                children: p.jsx(
                  o("WAWebVideoPlayerSurfaceLoadable.react")
                    .WAWebVideoPlayerSurfaceLoadable,
                  {
                    audioBridgeOptions: F,
                    onEnded: A,
                    onLoadedData: S,
                    onLoadedMetadata: function () {
                      R == null || R();
                    },
                    onLoop: L,
                    onPlaying: E,
                    onStoppedPlaying: k,
                    onTimeUpdate: I,
                    children: l
                      ? p.jsx(
                          o("WAWebVideoPlayerXBasicControlsLoadable.react")
                            .WAWebVideoPlayerXBasicControlsLoadable,
                          {},
                        )
                      : null,
                  },
                ),
              },
            ),
          },
        ),
      );
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, c),
        i = a.autoPlay,
        l = a.controls,
        u = l === void 0 ? !1 : l,
        m = a.loop,
        _ = m === void 0 ? !1 : m,
        y = a.muted,
        S = a.onAudioChannelRelease,
        R = a.onEnded,
        L = a.onLoadedMetadata,
        E = a.onLoop,
        k = a.onPlaying,
        I = a.src,
        T = a.srcObject,
        D = a.xstyle,
        x = C(null),
        $ = b(!1),
        P = $[0],
        N = $[1],
        M = b(null),
        w = M[0],
        A = M[1];
      r("useWAWebOnUnmount")(function () {
        (x.current == null || x.current(),
          o("WAWebUA").UA.isBlink &&
            w &&
            r("WAWebDomVideoDisposeMediaPlayer")(w));
      });
      var F = function () {
          return w;
        },
        O = function (t) {
          w != null && w.paused && w.play().catch(r("WAWebNoop"));
        },
        B = function (t) {
          w && !w.paused && w.pause();
        },
        W = function () {
          w && ((w.currentTime = 0), w.paused || w.pause());
        },
        q = function (t) {
          w && (w.currentTime = t);
        },
        U = function () {
          var e;
          return (e = w == null ? void 0 : w.paused) != null ? e : !0;
        },
        V = function () {
          return w == null ? void 0 : w.duration;
        },
        H = function () {
          return w == null ? void 0 : w.currentTime;
        },
        G = function () {
          return w && w.videoWidth > 0 && w.videoHeight > 0
            ? { width: w.videoWidth, height: w.videoHeight }
            : null;
        },
        z = function () {
          return w && w.offsetWidth > 0 && w.offsetHeight > 0
            ? { width: w.offsetWidth, height: w.offsetHeight }
            : null;
        },
        j = function (t) {
          if (w == null) return !1;
          for (
            var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
            r < e;
            r++
          )
            n[r - 1] = arguments[r];
          return (
            n.length === 4
              ? t.drawImage.apply(t, [w].concat(n))
              : t.drawImage.apply(t, [w].concat(n)),
            !0
          );
        };
      h(n, function () {
        return {
          underlyingVideo: F,
          play: O,
          pause: B,
          pauseAndReset: W,
          seek: q,
          getPaused: U,
          getDuration: V,
          getCurrentTime: H,
          getVideoDimensions: G,
          getVideoElementDimensions: z,
          drawFrameToContext: j,
        };
      });
      var K = function () {
          x.current == null || x.current();
        },
        Q = r("useLazyRef")(function () {
          return Symbol("audio-channel");
        }),
        X =
          S != null
            ? S
            : function () {
                u && (w == null || w.pause());
              },
        Y = function () {
          x.current = o("WAWebPttAudioChannels").MainAudioChannel.claim(
            Q.current,
            X,
          );
        },
        J = function () {
          w && (w.muted || Y());
        },
        Z = function (n) {
          w &&
            (y !== !0 && Y(),
            (!w.videoHeight || !w.videoWidth) &&
              !P &&
              (N(!0),
              w.pause(),
              w.play().catch(r("WAWebNoop")),
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "video height/width should not be 0",
                    ])),
                )
                .tags("non-sad")
                .sendLogs("non-zero height and width")),
            w.videoHeight && w.videoWidth && k && (k(), N(!1)));
        },
        ee = function (t) {
          L == null || L(t);
        };
      (g(
        function () {
          (w &&
            ("srcObject" in w && T
              ? (w.srcObject = T)
              : I != null && I !== ""
                ? (w.src = I)
                : r("gkx")("26258") ||
                  o("WALogger").WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Neither src nor srcObject is passed in to Video component.",
                      ])),
                  )),
            i === !0 && (w == null || w.play().catch(r("WAWebNoop"))));
        },
        [w],
      ),
        o("useWAWebListener").useListener(w, "playing", Z),
        o("useWAWebListener").useListener(w, "pause", K),
        o("useWAWebListener").useListener(w, "volumechange", J));
      var te = f(
        function () {
          _
            ? (w == null || w.play().catch(r("WAWebNoop")), E == null || E())
            : R == null || R();
        },
        [_, w, R, E],
      );
      return p.jsx("video", {
        ref: A,
        className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          (d || (d = r("stylex")))(v.video, D),
          a.className,
        ),
        muted: a.muted,
        controls: a.controls,
        controlsList: a.controlsList,
        width: a.width,
        height: a.height,
        onClick: a.onClick,
        onEnded: te,
        onLoadedMetadata: ee,
        onLoadedData: a.onLoadedData,
        style: a.style,
        children: a.children,
      });
    }
    R.displayName = R.name + " [from " + i.id + "]";
    var L = o("WAWebMediaGatingUtils").isVideoCometVideoPlayerEnabled() ? S : R,
      E = L;
    l.default = E;
  },
  98,
);
