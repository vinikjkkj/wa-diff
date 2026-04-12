__d(
  "WAWebStatusSeenCount.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebLottieAnimationLoadable",
    "WAWebSpinner.react",
    "WAWebStatusLikesAnimationData",
    "WAWebTabOrder",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "WAWebUserPrefsGeneral",
    "WDSIconIcVisibility.react",
    "WDSIconIcVisibilityOff.react",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        container: {
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          color: "x17t9dm2",
          $$css: !0,
        },
        animation: { height: "xpnc28q", width: "xop8lp1", $$css: !0 },
      };
    function m(t) {
      var n = t.hasLikes,
        a = n === void 0 ? !1 : n,
        i = t.onClick,
        l = t.seenCount,
        u =
          !!a &&
          c.jsx(o("WAWebLottieAnimationLoadable").LottieAnimation, {
            loop: !1,
            autoplay: !0,
            data: o("WAWebStatusLikesAnimationData").statusLikes,
            xstyle: [d.animation, o("WAWebUISpacing").uiMargin.vert10],
          }),
        m =
          o("WAWebUserPrefsGeneral").getUserPrivacySettings().readReceipts ===
          "none",
        p = m
          ? c.jsx(r("WDSIconIcVisibilityOff.react"), {})
          : c.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              justify: "center",
              children: [
                c.jsx(o("WAWebFlex.react").FlexItem, { children: u }),
                c.jsxs(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  justify: "center",
                  children: [
                    c.jsx(r("WDSIconIcVisibility.react"), {}),
                    c.jsx(
                      "div",
                      babelHelpers.extends(
                        {},
                        (e || (e = r("stylex"))).props(
                          o("WAWebUISpacing").uiMargin.start5,
                        ),
                        { children: l },
                      ),
                    ),
                  ],
                }),
              ],
            }),
        _ = i
          ? c.jsx(r("WAWebUnstyledButton.react"), {
              dataTab: o("WAWebTabOrder").TAB_ORDER.STATUS_BOTTOM_SECTION,
              xstyle: d.container,
              onClick: i,
              "aria-label": s._(/*BTDS*/ "See viewers"),
              children: p,
            })
          : p;
      return m || l != null
        ? c.jsx("div", {
            className: "x78zum5 x1q0g3np x6s0dn4 xl56j7k x17t9dm2",
            "aria-label": s._(/*BTDS*/ "Seen count"),
            children: _,
          })
        : c.jsx(o("WAWebSpinner.react").Spinner, { stroke: 3, size: 12 });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
