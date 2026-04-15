__d(
  "WAWebSupportCarouselChevronBtn.react",
  [
    "WAWebChevronButton.react",
    "WAWebL10N",
    "WAWebRound.react",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        btnBase: { height: "x5yr21d", width: "x187nhsf", $$css: !0 },
        btnContainerBase: {
          position: "x1n2onr6",
          borderStartStartRadius: "xr9w4p7",
          borderStartEndRadius: "x7f0h72",
          borderEndEndRadius: "x1nug9m2",
          borderEndStartRadius: "x18qtlnh",
          $$css: !0,
        },
        backgroundImageGradientToLeft: {
          backgroundImage: "x4g7omz",
          $$css: !0,
        },
        backgroundImageGradientToRight: {
          backgroundImage: "x9bwfyp",
          $$css: !0,
        },
      };
    function d(t) {
      var n = o("react-compiler-runtime").c(15),
        a = t.onClick,
        i = t.type,
        l = i === o("WAWebChevronButton.react").ButtonType.Prev,
        s = i === o("WAWebChevronButton.react").ButtonType.Next,
        d;
      n[0] !== s || n[1] !== l
        ? ((d = {
            0: { className: "x5yr21d x187nhsf x10l6tqk x13vifvy" },
            2: { className: "x5yr21d x187nhsf x10l6tqk x13vifvy x11uqc5h" },
            1: { className: "x5yr21d x187nhsf x10l6tqk x13vifvy xtijo5x" },
            3: {
              className: "x5yr21d x187nhsf x10l6tqk x13vifvy x11uqc5h xtijo5x",
            },
          }[(!!l << 1) | (!!s << 0)]),
          (n[0] = s),
          (n[1] = l),
          (n[2] = d))
        : (d = n[2]);
      var _;
      n[3] !== s || n[4] !== l
        ? ((_ = (e || (e = r("stylex"))).props(
            c.btnBase,
            c.btnContainerBase,
            l && m(),
            s && p(),
          )),
          (n[3] = s),
          (n[4] = l),
          (n[5] = _))
        : (_ = n[5]);
      var f;
      n[6] !== a || n[7] !== i
        ? ((f = u.jsx(o("WAWebChevronButton.react").ChevronButton, {
            type: i,
            onClick: a,
            theme: o("WAWebRound.react").RoundTheme.XSmall,
          })),
          (n[6] = a),
          (n[7] = i),
          (n[8] = f))
        : (f = n[8]);
      var g;
      n[9] !== _ || n[10] !== f
        ? ((g = u.jsx("div", babelHelpers.extends({}, _, { children: f }))),
          (n[9] = _),
          (n[10] = f),
          (n[11] = g))
        : (g = n[11]);
      var h;
      return (
        n[12] !== d || n[13] !== g
          ? ((h = u.jsx("div", babelHelpers.extends({}, d, { children: g }))),
            (n[12] = d),
            (n[13] = g),
            (n[14] = h))
          : (h = n[14]),
        h
      );
    }
    function m() {
      return r("WAWebL10N").isRTL()
        ? c.backgroundImageGradientToLeft
        : c.backgroundImageGradientToRight;
    }
    function p() {
      return r("WAWebL10N").isRTL()
        ? c.backgroundImageGradientToRight
        : c.backgroundImageGradientToLeft;
    }
    l.default = d;
  },
  98,
);
