__d(
  "WAWebChipButton.react",
  ["WAWebUISpacing", "WAWebUnstyledButton.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        container: {
          position: "x1n2onr6",
          color: "xq49mwq",
          backgroundColor: "xlelruc",
          borderStartStartRadius: "x12ol6y4",
          borderStartEndRadius: "x180vkcf",
          borderEndEndRadius: "x1khw62d",
          borderEndStartRadius: "x709u02",
          $$css: !0,
        },
        containerRefreshed: {
          color: "x1v5yvga",
          backgroundColor: "x4wrhlh",
          $$css: !0,
        },
        icon: {
          display: "x1rg5ohu",
          position: "x10l6tqk",
          right: "x4a824z",
          insetInlineStart: null,
          insetInlineEnd: null,
          top: "x1jzctok",
          $$css: !0,
        },
        iconSvg: { color: "xq49mwq", $$css: !0 },
        iconSvgRefreshed: { color: "x1v5yvga", $$css: !0 },
        prefixIcon: {
          left: "x1rvfpmx",
          insetInlineStart: null,
          insetInlineEnd: null,
          $$css: !0,
        },
        paddedSvg: {
          paddingTop: "x4p5aij",
          paddingInlineEnd: "x1ccui7m",
          paddingBottom: "x1j85h84",
          paddingInlineStart: "x18pi947",
          $$css: !0,
        },
      };
    function c(e) {
      var t = e.PostfixIcon,
        n = e.PrefixIcon,
        a = e.label,
        i = e.onClick,
        l = e.xstyle,
        c = e.iconTheme === "padded-svg",
        d = [
          u.iconSvg,
          u.iconSvgRefreshed,
          c ? u.paddedSvg : o("WAWebUISpacing").uiPadding.all4,
        ],
        m = { width: c ? 20 : 16, height: c ? 20 : 16 };
      return s.jsxs(r("WAWebUnstyledButton.react"), {
        xstyle: [
          u.container,
          u.containerRefreshed,
          o("WAWebUISpacing").uiPadding.vert8,
          o("WAWebUISpacing").uiPadding.horiz12,
          n != null && o("WAWebUISpacing").uiPadding.start36,
          t != null && o("WAWebUISpacing").uiPadding.end36,
          l,
        ],
        onClick: i,
        "aria-label": e["aria-label"],
        children: [
          n &&
            s.jsx(
              n,
              babelHelpers.extends(
                {
                  xstyle: [
                    u.icon,
                    u.prefixIcon,
                    o("WAWebUISpacing").uiMargin.start5,
                  ],
                  iconXstyle: d,
                },
                m,
              ),
            ),
          s.jsx("div", { className: "x1rg5ohu", children: a }),
          t &&
            s.jsx(
              t,
              babelHelpers.extends(
                {
                  xstyle: [u.icon, o("WAWebUISpacing").uiMargin.start5],
                  iconXstyle: d,
                },
                m,
              ),
            ),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
