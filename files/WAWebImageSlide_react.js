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
      var t = e.altText,
        n = e.forwardRef,
        a = e.image,
        i = e.mediaData,
        l = e.onClick,
        s = e.onLoad,
        d = e.renderFallback,
        f = e.showUnsupportedVideoOverlay,
        g = e.singleSlide,
        h = o("useWAWebModelValues").useModelValues(i, [
          "fullHeight",
          "fullWidth",
          "mediaStage",
          "renderableUrl",
        ]),
        y = h.fullHeight,
        C = h.fullWidth,
        b = h.mediaStage,
        v = h.renderableUrl,
        S = v,
        R = p(null),
        L = p(b === o("WAWebMediaTypes").MediaDataStage.RESOLVED);
      m(
        function () {
          s &&
            !L.current &&
            !d &&
            b === o("WAWebMediaTypes").MediaDataStage.RESOLVED &&
            (s(), (L.current = !0));
        },
        [s, d, b],
      );
      var E = function () {
          l && R.current && a && l(R.current, a);
        },
        k = !!g,
        I = C && y ? C / y : 0.8;
      (I < 0.8 && (I = 0.8), I > 1.91 && (I = 1.91), I > 1 && !k && (I = 1));
      var T = {
          width: k && I < 1 ? 100 * I + "%" : I === 1 && !g ? "100%" : null,
        },
        D = { paddingTop: Math.floor(100 / I) + "%" },
        x = { cursor: l ? "pointer" : "auto" },
        $;
      return (
        (a == null ? void 0 : a.videoUrl) != null &&
          ($ = c.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: _.playButton,
            children: c.jsx(o("WAWebMediaStateControls.react").Play, {}),
          })),
        c.jsx("div", {
          ref: n
            ? function (e) {
                return n(e);
              }
            : null,
          className: "_ak9l",
          style: T,
          children: c.jsxs("div", {
            className: "_ak9m",
            style: D,
            children: [
              !r("isStringNullOrEmpty")(S) &&
                c.jsx("img", {
                  ref: R,
                  alt: t,
                  src: S,
                  className: "_ak9n",
                  style: x,
                  draggable: "false",
                  onClick: E,
                }),
              $,
              f === !0 &&
                c.jsx(o("WAWebFlex.react").FlexRow, {
                  xstyle: _.unsupportedVideoOverlay,
                  children: c.jsx(o("WAWebFlex.react").FlexRow, {
                    xstyle: _.unsupportedVideoOverlayText,
                    children: u._(
                      /*BTDS*/ "Use WhatsApp on your phone to view catalog videos.",
                    ),
                  }),
                }),
            ],
          }),
        })
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
