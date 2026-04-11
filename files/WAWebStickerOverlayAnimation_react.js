__d(
  "WAWebStickerOverlayAnimation.react",
  [
    "WAWebInMemoryLottieStickerCache",
    "WAWebLottieAnimationLoadable",
    "react",
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(16),
        a = t.mediaData,
        i = t.onClose,
        l = t.sizePercent,
        s = l === void 0 ? 400 : l,
        c;
      n[0] !== a.filehash
        ? ((c = o(
            "WAWebInMemoryLottieStickerCache",
          ).InMemorySecondaryLottieStickerCache.get(a.filehash)),
          (n[0] = a.filehash),
          (n[1] = c))
        : (c = n[1]);
      var d = c,
        p,
        f;
      (n[2] !== i || n[3] !== d
        ? ((p = function () {
            d == null && i();
          }),
          (f = [d, i]),
          (n[2] = i),
          (n[3] = d),
          (n[4] = p),
          (n[5] = f))
        : ((p = n[4]), (f = n[5])),
        m(p, f));
      var g;
      n[6] !== i
        ? ((g = function () {
            i();
          }),
          (n[6] = i),
          (n[7] = g))
        : (g = n[7]);
      var h = g;
      if (d == null) return null;
      var y = s + "%",
        C;
      n[8] !== y
        ? ((C = (e || (e = r("stylex"))).props(_.overlayContainer(y))),
          (n[8] = y),
          (n[9] = C))
        : (C = n[9]);
      var b;
      n[10] !== h || n[11] !== d
        ? ((b = u.jsx(o("WAWebLottieAnimationLoadable").LottieAnimation, {
            data: d,
            autoplay: !0,
            loop: !1,
            onComplete: h,
            xstyle: _.lottieFill,
            wrapperXstyle: _.lottieFill,
          })),
          (n[10] = h),
          (n[11] = d),
          (n[12] = b))
        : (b = n[12]);
      var v;
      return (
        n[13] !== C || n[14] !== b
          ? ((v = u.jsx("div", babelHelpers.extends({}, C, { children: b }))),
            (n[13] = C),
            (n[14] = b),
            (n[15] = v))
          : (v = n[15]),
        v
      );
    }
    l.default = f;
  },
  98,
);
