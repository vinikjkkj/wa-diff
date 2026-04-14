__d(
  "WAWebLinkDeviceAutoLogoutToggle.react",
  [
    "fbt",
    "WAWebCheckBox.react",
    "WAWebFbtAppName",
    "WAWebFlex.react",
    "WAWebInfoRefreshedIcon.react",
    "WDSFocusStateStyles",
    "WDSTooltip.react",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        autoLogoutToggleM1: { position: "x1n2onr6", $$css: !0 },
        infoRefreshedIcon: { color: "xowaa7l", $$css: !0 },
        infoIconWrapper: {
          display: "x3nfvp2",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          $$css: !0,
        },
      };
    function m(t) {
      var n,
        a = t.autoLogoutEnabled,
        i = t.onAutoLogoutToggle,
        l = t.xstyle;
      return c.jsxs((n = o("WAWebFlex.react")).FlexRow, {
        align: "center",
        dir: "auto",
        columnGap: 12,
        className: (e || (e = r("stylex")))([d.autoLogoutToggleM1, l]),
        children: [
          c.jsx(o("WAWebFlex.react").FlexColumn, {
            margin: 4,
            children: c.jsx(o("WAWebCheckBox.react").CheckBox, {
              id: "auto-logout-toggle",
              checked: !a,
              onChange: i,
              theme: o("WAWebCheckBox.react").CheckboxTheme.AUTO_LOGOUT,
            }),
          }),
          c.jsx(o("WAWebFlex.react").FlexColumn, {
            marginTop: 4,
            marginBottom: 4,
            children: c.jsxs(o("WAWebFlex.react").FlexRow, {
              columnGap: 4,
              align: "center",
              children: [
                c.jsx(o("WAWebFlex.react").FlexColumn, {
                  children: c.jsx("label", {
                    className: "xt0psk2 xk50ysn",
                    htmlFor: "auto-logout-toggle",
                    children: s._(/*BTDS*/ "Stay logged in on this browser"),
                  }),
                }),
                c.jsx(o("WAWebFlex.react").FlexColumn, {
                  children: c.jsx(p, {}),
                }),
              ],
            }),
          }),
        ],
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p() {
      var t = s._(
        /*BTDS*/ "If selected, you'll stay logged into {app name} after closing the browser tab.",
        [
          s._param(
            "app name",
            o("WAWebFbtAppName").fbtWAWebAppShortNameWithoutWindows(),
          ),
        ],
      );
      return c.jsx(r("WDSTooltip.react"), {
        label: t,
        children: c.jsx(
          "span",
          babelHelpers.extends(
            {},
            (e || (e = r("stylex"))).props(
              d.infoIconWrapper,
              o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
            ),
            {
              "aria-label": t,
              role: "img",
              tabIndex: 0,
              children: c.jsx(
                o("WAWebInfoRefreshedIcon.react").InfoRefreshedIcon,
                { width: 16, height: 16, iconXstyle: d.infoRefreshedIcon },
                "info_icon",
              ),
            },
          ),
        ),
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
