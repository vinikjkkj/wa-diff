__d(
  "WAWebSupportCarouselChevronBtn.react",
  [
    "WAWebChevronButton.react",
    "WAWebL10N",
    "WAWebRound.react",
    "react",
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
      var n = t.onClick,
        a = t.type,
        i = a === o("WAWebChevronButton.react").ButtonType.Prev,
        l = a === o("WAWebChevronButton.react").ButtonType.Next;
      return u.jsx(
        "div",
        babelHelpers.extends(
          {},
          {
            0: { className: "x5yr21d x187nhsf x10l6tqk x13vifvy" },
            2: { className: "x5yr21d x187nhsf x10l6tqk x13vifvy x11uqc5h" },
            1: { className: "x5yr21d x187nhsf x10l6tqk x13vifvy xtijo5x" },
            3: {
              className: "x5yr21d x187nhsf x10l6tqk x13vifvy x11uqc5h xtijo5x",
            },
          }[(!!i << 1) | (!!l << 0)],
          {
            children: u.jsx(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(
                  c.btnBase,
                  c.btnContainerBase,
                  i && m(),
                  l && p(),
                ),
                {
                  children: u.jsx(o("WAWebChevronButton.react").ChevronButton, {
                    type: a,
                    onClick: n,
                    theme: o("WAWebRound.react").RoundTheme.XSmall,
                  }),
                },
              ),
            ),
          },
        ),
      );
    }
    d.displayName = d.name + " [from " + i.id + "]";
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
