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
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(14),
        a = t.hasLikes,
        i = t.onClick,
        l = t.seenCount,
        u = a === void 0 ? !1 : a,
        m;
      n[0] !== u
        ? ((m =
            !!u &&
            c.jsx(o("WAWebLottieAnimationLoadable").LottieAnimation, {
              loop: !1,
              autoplay: !0,
              data: o("WAWebStatusLikesAnimationData").statusLikes,
              xstyle: [d.animation, o("WAWebUISpacing").uiMargin.vert10],
            })),
          (n[0] = u),
          (n[1] = m))
        : (m = n[1]);
      var p = m,
        _;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = o("WAWebUserPrefsGeneral").getUserPrivacySettings()),
          (n[2] = _))
        : (_ = n[2]);
      var f = _.readReceipts === "none",
        g;
      n[3] !== p || n[4] !== l
        ? ((g = f
            ? c.jsx(r("WDSIconIcVisibilityOff.react"), {})
            : c.jsxs(o("WAWebFlex.react").FlexColumn, {
                align: "center",
                justify: "center",
                children: [
                  c.jsx(o("WAWebFlex.react").FlexItem, { children: p }),
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
              })),
          (n[3] = p),
          (n[4] = l),
          (n[5] = g))
        : (g = n[5]);
      var h = g,
        y;
      n[6] !== i || n[7] !== h
        ? ((y = i
            ? c.jsx(r("WAWebUnstyledButton.react"), {
                dataTab: o("WAWebTabOrder").TAB_ORDER.STATUS_BOTTOM_SECTION,
                xstyle: d.container,
                onClick: i,
                "aria-label": s._(/*BTDS*/ "See viewers"),
                children: h,
              })
            : h),
          (n[6] = i),
          (n[7] = h),
          (n[8] = y))
        : (y = n[8]);
      var C = y;
      if (f || l != null) {
        var b, v;
        n[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = { className: "x78zum5 x1q0g3np x6s0dn4 xl56j7k x17t9dm2" }),
            (v = s._(/*BTDS*/ "Seen count")),
            (n[9] = b),
            (n[10] = v))
          : ((b = n[9]), (v = n[10]));
        var S;
        return (
          n[11] !== C
            ? ((S = c.jsx(
                "div",
                babelHelpers.extends({}, b, { "aria-label": v, children: C }),
              )),
              (n[11] = C),
              (n[12] = S))
            : (S = n[12]),
          S
        );
      }
      var R;
      return (
        n[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((R = c.jsx(o("WAWebSpinner.react").Spinner, {
              stroke: 3,
              size: 12,
            })),
            (n[13] = R))
          : (R = n[13]),
        R
      );
    }
    l.default = m;
  },
  226,
);
