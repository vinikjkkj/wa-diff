__d(
  "WAWebVoipPostCallSurvey.react",
  [
    "fbt",
    "WAWebAppRatingStarButton.react",
    "WAWebFlex.react",
    "WAWebNoop",
    "WDSButton.react",
    "WDSColorStyles.stylex",
    "WDSText.react",
    "WDSThemes",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = {
        surveyContainer: { width: "xh8yej3", height: "x5yr21d", $$css: !0 },
        textContainer: {
          maxWidth: "x1j9u4d2",
          textAlign: "x2b8uid",
          marginTop: "x98l61r",
          marginInlineEnd: "xviac27",
          marginBottom: "x1ua1l7f",
          marginInlineStart: "xlese2p",
          $$css: !0,
        },
        textContainerCompact: {
          maxWidth: "x1j9u4d2",
          textAlign: "x2b8uid",
          paddingInlineStart: "x12w63v0",
          paddingInlineEnd: "x1nzty39",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
      },
      m = [1, 2, 3, 4, 5];
    function p(e) {
      var t = e.isCompact,
        n = t === void 0 ? !1 : t,
        a = e.onDismiss,
        i = e.onInteract,
        l = i === void 0 ? r("WAWebNoop") : i,
        p = e.onSubmit,
        _ = p === void 0 ? r("WAWebNoop") : p,
        f = c(0),
        g = f[0],
        h = f[1],
        y = c(0),
        C = y[0],
        b = y[1],
        v = function () {
          (g > 0 && _(g), a());
        },
        S = function () {
          a();
        },
        R = function (t) {
          (h(t), l());
        },
        L = function (t) {
          b(t);
        },
        E = function () {
          b(0);
        };
      return u.jsx(o("WAWebFlex.react").FlexColumn, {
        align: "center",
        justify: "center",
        xstyle: [
          d.surveyContainer,
          o("WDSColorStyles.stylex").WDSBackgroundColorStyles
            .backgroundWashPlain,
        ],
        children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
          align: "center",
          gap: n ? 8 : 16,
          children: [
            u.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              gap: 4,
              xstyle: n ? d.textContainerCompact : d.textContainer,
              children: [
                u.jsx(r("WDSText.react"), {
                  type: "Body1Emphasized",
                  colorName: "contentDeemphasized",
                  children: s._(/*BTDS*/ "How was the quality of your call?"),
                }),
                !n &&
                  u.jsx(r("WDSText.react"), {
                    type: "Body2",
                    colorName: "contentDeemphasized",
                    children: s._(
                      /*BTDS*/ "Your answer is anonymous. WhatsApp uses it to help improve your call experience.",
                    ),
                  }),
              ],
            }),
            u.jsx(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "center",
              gap: 8,
              children: m.map(function (e) {
                return u.jsx(
                  r("WAWebAppRatingStarButton.react"),
                  {
                    ariaLabel: s._(/*BTDS*/ "Rate {starValue} stars", [
                      s._param("starValue", e),
                    ]),
                    currentRating: g,
                    hoveredRating: C,
                    onClick: R,
                    onHover: L,
                    onHoverEnd: E,
                    value: e,
                  },
                  e,
                );
              }),
            }),
            u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "center",
              gap: 8,
              children: [
                u.jsx(r("WDSButton.react"), {
                  label: s._(/*BTDS*/ "Not now"),
                  size: "medium",
                  variant: "outline",
                  xstyle: o("WDSThemes").WDSLightTheme,
                  onPress: S,
                }),
                u.jsx(r("WDSButton.react"), {
                  label: s._(/*BTDS*/ "Submit"),
                  size: "medium",
                  variant: "filled",
                  disabled: g === 0,
                  onPress: v,
                }),
              ],
            }),
          ],
        }),
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
