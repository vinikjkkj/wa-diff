__d(
  "WAWebBotPluginCarouselChevronBtn.react",
  [
    "WAWebChevronButton.react",
    "WAWebL10N",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        btnContainer: {
          position: "x1n2onr6",
          height: "xvt47uu",
          width: "x187nhsf",
          borderStartStartRadius: "xr9w4p7",
          borderStartEndRadius: "x7f0h72",
          borderEndEndRadius: "x1nug9m2",
          borderEndStartRadius: "x18qtlnh",
          $$css: !0,
        },
        btnContainerBackgroundPrev: { backgroundImage: "x9bwfyp", $$css: !0 },
        btnContainerBackgroundNext: { backgroundImage: "x4g7omz", $$css: !0 },
        btnContainerBackgroundPrevRTL: {
          backgroundImage: "x4g7omz",
          $$css: !0,
        },
        btnContainerBackgroundNextRTL: {
          backgroundImage: "x9bwfyp",
          $$css: !0,
        },
      };
    function d(t) {
      var n = o("react-compiler-runtime").c(17),
        a = t.displayType,
        i = t.onClick,
        l = t.theme,
        s = t.type,
        d =
          a ===
          o("WAWebChevronButton.react").ChevronButtonDisplayType
            .BotPluginCarousel,
        _ = s === o("WAWebChevronButton.react").ButtonType.Prev && d,
        f = s === o("WAWebChevronButton.react").ButtonType.Next && d,
        g;
      n[0] !== f || n[1] !== _
        ? ((g = {
            0: {},
            2: { className: "x10l6tqk x13vifvy xvt47uu x187nhsf x11uqc5h" },
            1: { className: "x10l6tqk x13vifvy xtijo5x xvt47uu x187nhsf" },
            3: {
              className: "x11uqc5h x10l6tqk x13vifvy xtijo5x xvt47uu x187nhsf",
            },
          }[(!!_ << 1) | (!!f << 0)]),
          (n[0] = f),
          (n[1] = _),
          (n[2] = g))
        : (g = n[2]);
      var h;
      n[3] !== d || n[4] !== f || n[5] !== _
        ? ((h = (e || (e = r("stylex"))).props(
            d && c.btnContainer,
            _ && m(),
            f && p(),
          )),
          (n[3] = d),
          (n[4] = f),
          (n[5] = _),
          (n[6] = h))
        : (h = n[6]);
      var y;
      n[7] !== i || n[8] !== l || n[9] !== s
        ? ((y = u.jsx(o("WAWebChevronButton.react").ChevronButton, {
            type: s,
            onClick: i,
            theme: l,
          })),
          (n[7] = i),
          (n[8] = l),
          (n[9] = s),
          (n[10] = y))
        : (y = n[10]);
      var C;
      n[11] !== h || n[12] !== y
        ? ((C = u.jsx("div", babelHelpers.extends({}, h, { children: y }))),
          (n[11] = h),
          (n[12] = y),
          (n[13] = C))
        : (C = n[13]);
      var b;
      return (
        n[14] !== g || n[15] !== C
          ? ((b = u.jsx("div", babelHelpers.extends({}, g, { children: C }))),
            (n[14] = g),
            (n[15] = C),
            (n[16] = b))
          : (b = n[16]),
        b
      );
    }
    function m() {
      return r("WAWebL10N").isRTL()
        ? c.btnContainerBackgroundPrevRTL
        : c.btnContainerBackgroundPrev;
    }
    function p() {
      return r("WAWebL10N").isRTL()
        ? c.btnContainerBackgroundNextRTL
        : c.btnContainerBackgroundNext;
    }
    l.default = d;
  },
  98,
);
