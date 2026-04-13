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
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(11),
        a = t.autoLogoutEnabled,
        i = t.onAutoLogoutToggle,
        l = t.xstyle,
        u;
      n[0] !== l
        ? ((u = (e || (e = r("stylex")))([d.autoLogoutToggleM1, l])),
          (n[0] = l),
          (n[1] = u))
        : (u = n[1]);
      var m = !a,
        _;
      n[2] !== i || n[3] !== m
        ? ((_ = c.jsx(o("WAWebFlex.react").FlexColumn, {
            margin: 4,
            children: c.jsx(o("WAWebCheckBox.react").CheckBox, {
              id: "auto-logout-toggle",
              checked: m,
              onChange: i,
              theme: o("WAWebCheckBox.react").CheckboxTheme.AUTO_LOGOUT,
            }),
          })),
          (n[2] = i),
          (n[3] = m),
          (n[4] = _))
        : (_ = n[4]);
      var f;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = { className: "xt0psk2 xk50ysn" }), (n[5] = f))
        : (f = n[5]);
      var g;
      n[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = c.jsx(o("WAWebFlex.react").FlexColumn, {
            children: c.jsx(
              "label",
              babelHelpers.extends({}, f, {
                htmlFor: "auto-logout-toggle",
                children: s._(/*BTDS*/ "Stay logged in on this browser"),
              }),
            ),
          })),
          (n[6] = g))
        : (g = n[6]);
      var h;
      n[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = c.jsx(o("WAWebFlex.react").FlexColumn, {
            marginTop: 4,
            marginBottom: 4,
            children: c.jsxs(o("WAWebFlex.react").FlexRow, {
              columnGap: 4,
              align: "center",
              children: [
                g,
                c.jsx(o("WAWebFlex.react").FlexColumn, {
                  children: c.jsx(p, {}),
                }),
              ],
            }),
          })),
          (n[7] = h))
        : (h = n[7]);
      var y;
      return (
        n[8] !== u || n[9] !== _
          ? ((y = c.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              dir: "auto",
              columnGap: 12,
              className: u,
              children: [_, h],
            })),
            (n[8] = u),
            (n[9] = _),
            (n[10] = y))
          : (y = n[10]),
        y
      );
    }
    function p() {
      var t = o("react-compiler-runtime").c(3),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = s._(
            /*BTDS*/ "If selected, you'll stay logged into {app name} after closing the browser tab.",
            [
              s._param(
                "app name",
                o("WAWebFbtAppName").fbtWAWebAppShortNameWithoutWindows(),
              ),
            ],
          )),
          (t[0] = n))
        : (n = t[0]);
      var a = n,
        i;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = (e || (e = r("stylex"))).props(
            d.infoIconWrapper,
            o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
          )),
          (t[1] = i))
        : (i = t[1]);
      var l;
      return (
        t[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = c.jsx(r("WDSTooltip.react"), {
              label: a,
              children: c.jsx(
                "span",
                babelHelpers.extends({}, i, {
                  "aria-label": a,
                  role: "img",
                  tabIndex: 0,
                  children: c.jsx(
                    o("WAWebInfoRefreshedIcon.react").InfoRefreshedIcon,
                    { width: 16, height: 16, iconXstyle: d.infoRefreshedIcon },
                    "info_icon",
                  ),
                }),
              ),
            })),
            (t[2] = l))
          : (l = t[2]),
        l
      );
    }
    l.default = m;
  },
  226,
);
