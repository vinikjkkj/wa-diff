__d(
  "WAWebStickerStoreStickerIconContainer.react",
  [
    "WAWebDetailImage.react",
    "WAWebImgWithFallback.react",
    "WDSIconWdsIcSticker.react",
    "react",
    "stylex",
    "useWAWebIntersection",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useRef,
      d = {
        container: {
          boxSizing: "x9f619",
          height: "xy75621",
          width: "xni59qk",
          minHeight: "x1qafhyn",
          minWidth: "x187xtus",
          position: "x1n2onr6",
          $$css: !0,
        },
      };
    function m(t) {
      var n = t.url,
        a = t.xstyle,
        i = r("useWAWebIntersection")({
          root: null,
          rootMargin: "0px",
          threshold: 0,
        }),
        l = i[0],
        s = i[1].isIntersecting,
        m = c(s);
      return (
        (m.current = m.current || s),
        u.jsx(
          "div",
          babelHelpers.extends(
            { ref: l },
            (e || (e = r("stylex"))).props(d.container, a),
            {
              children:
                m.current &&
                u.jsx(o("WAWebImgWithFallback.react").ImgWithFallback, {
                  fallbackSVG: u.jsx(r("WDSIconWdsIcSticker.react"), {}),
                  wrapOptions: { centerWrapperChild: !0, wrapperClassName: "" },
                  className: "xh8yej3 x5yr21d",
                  size: "NONE",
                  shape: o("WAWebDetailImage.react").DetailImageShape.Square,
                  imgProps: { src: n, draggable: !1 },
                  theme: o("WAWebImgWithFallback.react").Theme.Transparent,
                }),
            },
          ),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
