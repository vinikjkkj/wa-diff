__d(
  "WAWebFailIcon.react",
  [
    "WAWebAppContext.react",
    "WAWebDisplayType",
    "WAWebErrorTooltip.react",
    "WAWebRound.react",
    "WDSIconIcError.react",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useState,
      d = {
        container: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          height: "x5yr21d",
          pointerEvents: "x47corl",
          position: "x10l6tqk",
          insetInlineEnd: "x4e0jua",
          left: null,
          right: null,
          top: "x13vifvy",
          zIndex: "xfo81ep",
          "@media screen and (max-width: 900px)_insetInlineEnd": "xjn1kfi",
          "@media screen and (max-width: 900px)_left": null,
          "@media screen and (max-width: 900px)_right": null,
          "@media screen and (min-width: 901px) and (max-width: 1024px)_marginInlineEnd":
            "x16on6y5",
          $$css: !0,
        },
        containerWithRightDrawer: {
          "@media screen and (min-width: 1025px) and (max-width: 1300px)_insetInlineEnd":
            "x1a5125j",
          "@media screen and (min-width: 1025px) and (max-width: 1300px)_left":
            null,
          "@media screen and (min-width: 1025px) and (max-width: 1300px)_right":
            null,
          $$css: !0,
        },
        groupChatProfilePictureDisplayed: {
          "@media screen and (max-width: 900px)_insetInlineEnd": "x1p46kum",
          "@media screen and (max-width: 900px)_left": null,
          "@media screen and (max-width: 900px)_right": null,
          $$css: !0,
        },
        notFromMe: {
          insetInlineStart: "x65okc",
          left: null,
          right: null,
          $$css: !0,
        },
        compact: {
          insetInlineEnd: "xtez0ps",
          left: null,
          right: null,
          $$css: !0,
        },
      };
    function m(t) {
      var n = t.ariaLabel,
        a = t.displayType,
        i = t.fromMe,
        l = t.isGroupChatProfilePictureDisplayed,
        s = t.onClick,
        m = t.tooltip,
        p = c(!1),
        _ = p[0],
        f = p[1],
        g = o("WAWebAppContext.react").useAppContext(),
        h = g.rightDrawerOpen,
        y = s
          ? u.jsx(
              o("WAWebRound.react").Round,
              {
                onClick: s,
                theme: o("WAWebRound.react").RoundTheme.Error,
                label: n,
                children: u.jsx(r("WDSIconIcError.react"), {
                  colorName: "persistentAlwaysWhite",
                  height: 16,
                  width: 16,
                }),
              },
              "error-button",
            )
          : u.jsx(
              "div",
              {
                className:
                  "x6s0dn4 xk0ssx3 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1zfx7y x1gj3efs x151wx5t xea0m3l x1c9tyrk xeusxvb x1pahc9y x1ertn4p x17t9dm2 x78zum5 xxk0z11 xl56j7k xnei2rj x67bb7w xvy4d1p",
                children: u.jsx(r("WDSIconIcError.react"), {
                  colorName: "persistentAlwaysWhite",
                  height: 16,
                  width: 16,
                }),
              },
              "error-icon",
            ),
        C = [y];
      if (_ && a !== o("WAWebDisplayType").DISPLAY_TYPE.COMMENT) {
        var b = u.jsx(
          r("WAWebErrorTooltip.react"),
          { fromMe: i, children: m },
          "error-tooltip",
        );
        C.unshift(b);
      }
      return (
        i === !1 && (C = C.reverse()),
        u.jsx(
          "div",
          babelHelpers.extends(
            {},
            (e || (e = r("stylex"))).props([
              a !== o("WAWebDisplayType").DISPLAY_TYPE.COMMENT && d.container,
              a === o("WAWebDisplayType").DISPLAY_TYPE.MSG_INFO && d.compact,
              i === !1 && d.notFromMe,
              l === !0 && d.groupChatProfilePictureDisplayed,
              h && d.containerWithRightDrawer,
            ]),
            {
              onMouseEnter: function () {
                return f(!0);
              },
              onMouseLeave: function () {
                return f(!1);
              },
              "data-testid": void 0,
              children: C,
            },
          ),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
