__d(
  "WAWebStickerOverlayAnimation.react",
  [
    "WAWebInMemoryLottieStickerCache",
    "WAWebLottieAnimationLoadable",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useEffect,
      p = {
        position: "x10l6tqk",
        top: "xwa60dl",
        left: "x1nrll8i",
        insetInlineStart: "",
        insetInlineEnd: "",
        transform: "x11lhmoz",
        zIndex: "xfo81ep",
        pointerEvents: "x47corl",
        $$css: !0,
      },
      _ = {
        overlayContainer: function (t) {
          return [
            p,
            {
              width: t != null ? "x5lhr3w" : t,
              height: t != null ? "x16ye13r" : t,
              $$css: !0,
            },
            {
              "--x-width": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t),
              "--x-height": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t),
            },
          ];
        },
        lottieFill: { width: "xh8yej3", height: "x5yr21d", $$css: !0 },
      };
    function f(t) {
      var n = t.mediaData,
        a = t.onClose,
        i = t.sizePercent,
        l = i === void 0 ? 400 : i,
        s = o(
          "WAWebInMemoryLottieStickerCache",
        ).InMemorySecondaryLottieStickerCache.get(n.filehash);
      m(
        function () {
          s == null && a();
        },
        [s, a],
      );
      var c = d(
        function () {
          a();
        },
        [a],
      );
      if (s == null) return null;
      var p = l + "%";
      return u.jsx(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(_.overlayContainer(p)),
          {
            children: u.jsx(o("WAWebLottieAnimationLoadable").LottieAnimation, {
              data: s,
              autoplay: !0,
              loop: !1,
              onComplete: c,
              xstyle: _.lottieFill,
              wrapperXstyle: _.lottieFill,
            }),
          },
        ),
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
