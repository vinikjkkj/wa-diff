__d(
  "WAWebImageSlide.react",
  [
    "cx",
    "fbt",
    "WAWebFlex.react",
    "WAWebMediaStateControls.react",
    "WAWebMediaTypes",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e,
      c = e || (e = o("react")),
      d = e,
      m = d.useEffect,
      p = d.useRef,
      _ = {
        unsupportedVideoOverlay: {
          width: "xh8yej3",
          position: "x10l6tqk",
          zIndex: "xhtitgo",
          top: "xwa60dl",
          insetInlineStart: "xbudbmw",
          left: null,
          right: null,
          transform: "x11lhmoz",
          backgroundColor: "x1280gxy",
          borderStartStartRadius: "x16qb05n",
          borderStartEndRadius: "xi7iut8",
          borderEndEndRadius: "x1dm3dyd",
          borderEndStartRadius: "x1pv694p",
          boxShadow: "x17gmuz2",
          pointerEvents: "x47corl",
          $$css: !0,
        },
        unsupportedVideoOverlayText: { color: "xraqfvc", $$css: !0 },
        playButton: { pointerEvents: "x47corl", $$css: !0 },
      };
    function f(e) {
      var t = o("react-compiler-runtime").c(34),
        n = e.altText,
        a = e.forwardRef,
        i = e.image,
        l = e.mediaData,
        s = e.onClick,
        d = e.onLoad,
        f = e.renderFallback,
        g = e.showUnsupportedVideoOverlay,
        h = e.singleSlide,
        y;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = ["fullHeight", "fullWidth", "mediaStage", "renderableUrl"]),
          (t[0] = y))
        : (y = t[0]);
      var C = o("useWAWebModelValues").useModelValues(l, y),
        b = C.fullHeight,
        v = C.fullWidth,
        S = C.mediaStage,
        R = C.renderableUrl,
        L = R,
        E = p(null),
        k = p(S === o("WAWebMediaTypes").MediaDataStage.RESOLVED),
        I,
        T;
      (t[1] !== S || t[2] !== d || t[3] !== f
        ? ((I = function () {
            d &&
              !k.current &&
              !f &&
              S === o("WAWebMediaTypes").MediaDataStage.RESOLVED &&
              (d(), (k.current = !0));
          }),
          (T = [d, f, S]),
          (t[1] = S),
          (t[2] = d),
          (t[3] = f),
          (t[4] = I),
          (t[5] = T))
        : ((I = t[4]), (T = t[5])),
        m(I, T));
      var D;
      t[6] !== i || t[7] !== s
        ? ((D = function () {
            s && E.current && i && s(E.current, i);
          }),
          (t[6] = i),
          (t[7] = s),
          (t[8] = D))
        : (D = t[8]);
      var x = D,
        $ = !!h,
        P = v && b ? v / b : 0.8;
      (P < 0.8 && (P = 0.8), P > 1.91 && (P = 1.91), P > 1 && !$ && (P = 1));
      var N = $ && P < 1 ? 100 * P + "%" : P === 1 && !h ? "100%" : null,
        M;
      t[9] !== N ? ((M = { width: N }), (t[9] = N), (t[10] = M)) : (M = t[10]);
      var w = M,
        A = Math.floor(100 / P) + "%",
        F;
      t[11] !== A
        ? ((F = { paddingTop: A }), (t[11] = A), (t[12] = F))
        : (F = t[12]);
      var O = F,
        B = s ? "pointer" : "auto",
        W;
      t[13] !== B
        ? ((W = { cursor: B }), (t[13] = B), (t[14] = W))
        : (W = t[14]);
      var q = W,
        U;
      if ((i == null ? void 0 : i.videoUrl) != null) {
        var V;
        (t[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((V = c.jsx(o("WAWebFlex.react").FlexRow, {
              xstyle: _.playButton,
              children: c.jsx(o("WAWebMediaStateControls.react").Play, {}),
            })),
            (t[15] = V))
          : (V = t[15]),
          (U = V));
      }
      var H;
      t[16] !== a
        ? ((H = a
            ? function (e) {
                return a(e);
              }
            : null),
          (t[16] = a),
          (t[17] = H))
        : (H = t[17]);
      var G;
      t[18] !== n || t[19] !== x || t[20] !== q || t[21] !== L
        ? ((G =
            !r("isStringNullOrEmpty")(L) &&
            c.jsx("img", {
              ref: E,
              alt: n,
              src: L,
              className: "_ak9n",
              style: q,
              draggable: "false",
              onClick: x,
            })),
          (t[18] = n),
          (t[19] = x),
          (t[20] = q),
          (t[21] = L),
          (t[22] = G))
        : (G = t[22]);
      var z;
      t[23] !== g
        ? ((z =
            g === !0 &&
            c.jsx(o("WAWebFlex.react").FlexRow, {
              xstyle: _.unsupportedVideoOverlay,
              children: c.jsx(o("WAWebFlex.react").FlexRow, {
                xstyle: _.unsupportedVideoOverlayText,
                children: u._(
                  /*BTDS*/ "Use WhatsApp on your phone to view catalog videos.",
                ),
              }),
            })),
          (t[23] = g),
          (t[24] = z))
        : (z = t[24]);
      var j;
      t[25] !== O || t[26] !== U || t[27] !== G || t[28] !== z
        ? ((j = c.jsxs("div", {
            className: "_ak9m",
            style: O,
            children: [G, U, z],
          })),
          (t[25] = O),
          (t[26] = U),
          (t[27] = G),
          (t[28] = z),
          (t[29] = j))
        : (j = t[29]);
      var K;
      return (
        t[30] !== w || t[31] !== H || t[32] !== j
          ? ((K = c.jsx("div", {
              ref: H,
              className: "_ak9l",
              style: w,
              children: j,
            })),
            (t[30] = w),
            (t[31] = H),
            (t[32] = j),
            (t[33] = K))
          : (K = t[33]),
        K
      );
    }
    l.default = f;
  },
  226,
);
