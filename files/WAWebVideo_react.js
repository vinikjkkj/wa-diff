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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(55),
        n,
        a;
      t[0] !== e
        ? ((a = e.ref),
          (n = babelHelpers.objectWithoutPropertiesLoose(e, u)),
          (t[0] = e),
          (t[1] = n),
          (t[2] = a))
        : ((n = t[1]), (a = t[2]));
      var i = n,
        l = i.autoPlay,
        s = i.controls,
        c = i.disableAutoplayManagement,
        m = i.loop,
        _ = i.muted,
        f = i.onAudioChannelRelease,
        y = i.onEnded,
        C = i.onLoadedData,
        b = i.onLoadedMetadata,
        S = i.onLoop,
        L = i.onPlaying,
        E = i.onStoppedPlaying,
        k = i.onTimeUpdate,
        I = i.renderVideoPixelsFit,
        T = i.src,
        D = i.srcObject,
        x = i.xstyle,
        $ = s === void 0 ? !1 : s,
        P = m === void 0 ? !1 : m,
        N = o(
          "useVideoPlayerXAPIOutsideVideoPlayerSurface",
        ).useVideoPlayerXAPIOutsideVideoPlayerSurface(),
        M = N[0],
        w = N[1],
        A = w.controller,
        F;
      t[3] !== P || t[4] !== y
        ? ((F = function () {
            P || y == null || y();
          }),
          (t[3] = P),
          (t[4] = y),
          (t[5] = F))
        : (F = t[5]);
      var O = F,
        B,
        W;
      (t[6] !== A || t[7] !== _
        ? ((B = function () {
            _ != null && A != null && A.setMuted(_, "product_initiated");
          }),
          (W = [A, _]),
          (t[6] = A),
          (t[7] = _),
          (t[8] = B),
          (t[9] = W))
        : ((B = t[8]), (W = t[9])),
        g(B, W));
      var q;
      t[10] !== A || t[11] !== $ || t[12] !== f
        ? ((q =
            f != null
              ? f
              : function () {
                  $ && (A == null || A.pause("product_initiated"));
                }),
          (t[10] = A),
          (t[11] = $),
          (t[12] = f),
          (t[13] = q))
        : (q = t[13]);
      var U;
      t[14] !== q
        ? ((U = {
            onAudioChannelRelease: q,
            onlyClaimIfUnmuted: !0,
            syncVolumeSettings: !1,
          }),
          (t[14] = q),
          (t[15] = U))
        : (U = t[15]);
      var V = U,
        H;
      (t[16] !== A
        ? ((H = function () {
            return {
              underlyingVideo: R,
              play: function (t) {
                A == null || A.play(t != null ? t : "user_initiated");
              },
              pause: function (t) {
                A == null || A.pause(t != null ? t : "user_initiated");
              },
              pauseAndReset: function () {
                (A == null || A.pause("product_initiated"),
                  A == null || A.seek(0));
              },
              seek: function (t) {
                A == null || A.seek(t);
              },
              getPaused: function () {
                var e;
                return (e = A == null ? void 0 : A.getCurrentState().paused) !=
                  null
                  ? e
                  : !0;
              },
              getDuration: function () {
                return A == null ? void 0 : A.getCurrentState().duration;
              },
              getCurrentTime: function () {
                return A == null ? void 0 : A.getPlayheadPosition();
              },
              getVideoDimensions: function () {
                return A == null
                  ? void 0
                  : A.internal_getVideoPixelsDecodedDimensions();
              },
              getVideoElementDimensions: function () {
                var e = A == null ? void 0 : A.internal_getVideoElement();
                return e == null || e.offsetWidth <= 0 || e.offsetHeight <= 0
                  ? null
                  : { width: e.offsetWidth, height: e.offsetHeight };
              },
              drawFrameToContext: function (t) {
                for (
                  var e = arguments.length,
                    n = new Array(e > 1 ? e - 1 : 0),
                    r = 1;
                  r < e;
                  r++
                )
                  n[r - 1] = arguments[r];
                var o = n,
                  a = A == null ? void 0 : A.internal_getVideoElement();
                return a == null
                  ? !1
                  : (o.length === 4
                      ? t.drawImage.apply(t, [a].concat(o))
                      : t.drawImage.apply(t, [a].concat(o)),
                    !0);
              },
            };
          }),
          (t[16] = A),
          (t[17] = H))
        : (H = t[17]),
        h(a, H));
      var G;
      t[18] !== n.onClick
        ? ((G = n.onClick != null ? { onClick: n.onClick } : {}),
          (t[18] = n.onClick),
          (t[19] = G))
        : (G = t[19]);
      var z = G,
        j;
      t[20] !== n.height || t[21] !== n.style || t[22] !== n.width
        ? ((j =
            n.width != null || n.height != null
              ? babelHelpers.extends({}, n.style, {
                  width: n.width,
                  height: n.height,
                })
              : n.style),
          (t[20] = n.height),
          (t[21] = n.style),
          (t[22] = n.width),
          (t[23] = j))
        : (j = t[23]);
      var K = j,
        Q;
      t[24] !== n.className || t[25] !== x
        ? ((Q = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            (d || (d = r("stylex")))(v.video, x),
            n.className,
          )),
          (t[24] = n.className),
          (t[25] = x),
          (t[26] = Q))
        : (Q = t[26]);
      var X = l != null ? l : !1,
        Y = P ? -1 : 0,
        J;
      t[27] !== b
        ? ((J = function () {
            b == null || b();
          }),
          (t[27] = b),
          (t[28] = J))
        : (J = t[28]);
      var Z;
      t[29] !== $
        ? ((Z = $
            ? p.jsx(
                o("WAWebVideoPlayerXBasicControlsLoadable.react")
                  .WAWebVideoPlayerXBasicControlsLoadable,
                {},
              )
            : null),
          (t[29] = $),
          (t[30] = Z))
        : (Z = t[30]);
      var ee;
      t[31] !== V ||
      t[32] !== O ||
      t[33] !== C ||
      t[34] !== S ||
      t[35] !== L ||
      t[36] !== E ||
      t[37] !== k ||
      t[38] !== J ||
      t[39] !== Z
        ? ((ee = p.jsx(
            o("WAWebVideoPlayerSurfaceLoadable.react")
              .WAWebVideoPlayerSurfaceLoadable,
            {
              audioBridgeOptions: V,
              onEnded: O,
              onLoadedData: C,
              onLoadedMetadata: J,
              onLoop: S,
              onPlaying: L,
              onStoppedPlaying: E,
              onTimeUpdate: k,
              children: Z,
            },
          )),
          (t[31] = V),
          (t[32] = O),
          (t[33] = C),
          (t[34] = S),
          (t[35] = L),
          (t[36] = E),
          (t[37] = k),
          (t[38] = J),
          (t[39] = Z),
          (t[40] = ee))
        : (ee = t[40]);
      var te;
      t[41] !== M ||
      t[42] !== c ||
      t[43] !== I ||
      t[44] !== T ||
      t[45] !== D ||
      t[46] !== X ||
      t[47] !== Y ||
      t[48] !== ee
        ? ((te = p.jsx(
            o("WAWebVideoPlayerXLoadable.react").WAWebVideoPlayerXLoadable,
            {
              apiRef: M,
              src: T,
              mediaStream: D,
              autoplayEnabled: X,
              disableAutoplayManagement: c,
              loopCount: Y,
              renderVideoPixelsFit: I,
              children: ee,
            },
          )),
          (t[41] = M),
          (t[42] = c),
          (t[43] = I),
          (t[44] = T),
          (t[45] = D),
          (t[46] = X),
          (t[47] = Y),
          (t[48] = ee),
          (t[49] = te))
        : (te = t[49]);
      var ne;
      return (
        t[50] !== K || t[51] !== z || t[52] !== Q || t[53] !== te
          ? ((ne = p.jsx(
              "div",
              babelHelpers.extends({ className: Q, style: K }, z, {
                children: te,
              }),
            )),
            (t[50] = K),
            (t[51] = z),
            (t[52] = Q),
            (t[53] = te),
            (t[54] = ne))
          : (ne = t[54]),
        ne
      );
    }
    function R() {
      return null;
    }
    function L(t) {
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
    L.displayName = L.name + " [from " + i.id + "]";
    var E = o("WAWebMediaGatingUtils").isVideoCometVideoPlayerEnabled() ? S : L,
      k = E;
    l.default = k;
  },
  98,
);
