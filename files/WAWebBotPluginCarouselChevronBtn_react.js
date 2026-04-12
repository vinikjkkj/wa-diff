__d(
  "WAWebBotPluginCarouselChevronBtn.react",
  ["WAWebChevronButton.react", "WAWebL10N", "react", "stylex"],
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
      var n = t.displayType,
        a = t.onClick,
        i = t.theme,
        l = t.type,
        s =
          n ===
          o("WAWebChevronButton.react").ChevronButtonDisplayType
            .BotPluginCarousel,
        d = l === o("WAWebChevronButton.react").ButtonType.Prev && s,
        _ = l === o("WAWebChevronButton.react").ButtonType.Next && s;
      return u.jsx(
        "div",
        babelHelpers.extends(
          {},
          {
            0: {},
            2: { className: "x10l6tqk x13vifvy xvt47uu x187nhsf x11uqc5h" },
            1: { className: "x10l6tqk x13vifvy xtijo5x xvt47uu x187nhsf" },
            3: {
              className: "x11uqc5h x10l6tqk x13vifvy xtijo5x xvt47uu x187nhsf",
            },
          }[(!!d << 1) | (!!_ << 0)],
          {
            children: u.jsx(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(
                  s && c.btnContainer,
                  d && m(),
                  _ && p(),
                ),
                {
                  children: u.jsx(o("WAWebChevronButton.react").ChevronButton, {
                    type: l,
                    onClick: a,
                    theme: i,
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
