__d(
  "WAWebPrivacyModeBlurPresetDrawer.react",
  [
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebPrivacyModeBlurConfig",
    "WAWebPrivacyModeContext",
    "WAWebPrivacyModeSettingsFBT",
    "WAWebPrivacyModeUtils",
    "WAWebPrivacyVisibilityOption.react",
    "WAWebUISpacing",
    "WAWebUserPrefsPrivacyMode",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useState,
      c = [
        o("WAWebPrivacyModeBlurConfig").BlurPreset.Off,
        o("WAWebPrivacyModeBlurConfig").BlurPreset.Light,
        o("WAWebPrivacyModeBlurConfig").BlurPreset.Medium,
        o("WAWebPrivacyModeBlurConfig").BlurPreset.Strong,
      ];
    function d(e) {
      return e === o("WAWebPrivacyModeBlurConfig").BlurCategory.General
        ? o("WAWebPrivacyModeSettingsFBT").privacyModeGeneralLabel()
        : o("WAWebPrivacyModeSettingsFBT").privacyModeMediaLabel();
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(23),
        n = e.category,
        a = e.onBack,
        i = o("WAWebPrivacyModeContext").usePrivacyMode(),
        l = i.updateBlurPreset,
        m;
      t[0] !== n
        ? ((m = function () {
            return o("WAWebUserPrefsPrivacyMode").getBlurPreset(n);
          }),
          (t[0] = n),
          (t[1] = m))
        : (m = t[1]);
      var p = u(m),
        _ = p[0],
        f = p[1],
        g;
      t[2] !== n || t[3] !== l
        ? ((g = function (t) {
            (l(n, t), f(t));
          }),
          (t[2] = n),
          (t[3] = l),
          (t[4] = g))
        : (g = t[4]);
      var h = g,
        y;
      t[5] !== n ? ((y = d(n)), (t[5] = n), (t[6] = y)) : (y = t[6]);
      var C = y,
        b;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = { surface: "unknown", viewName: "privacy-blur-preset" }),
          (t[7] = b))
        : (b = t[7]);
      var v;
      t[8] !== a || t[9] !== C
        ? ((v = s.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            testid: void 0,
            title: C,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: a,
            focusBackOrCancel: !0,
          })),
          (t[8] = a),
          (t[9] = C),
          (t[10] = v))
        : (v = t[10]);
      var S;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = [
            o("WAWebUISpacing").uiPadding.horiz30,
            o("WAWebUISpacing").uiPadding.vert20,
          ]),
          (t[11] = S))
        : (S = t[11]);
      var R;
      t[12] !== C
        ? ((R = C.toString()), (t[12] = C), (t[13] = R))
        : (R = t[13]);
      var L;
      t[14] !== _ || t[15] !== h
        ? ((L = c.map(function (e) {
            return s.jsx(
              r("WAWebPrivacyVisibilityOption.react"),
              {
                text: o("WAWebPrivacyModeUtils").getPresetLabel(e),
                selected: _ === e,
                testid: void 0,
                onClick: function () {
                  return h(e);
                },
              },
              e,
            );
          })),
          (t[14] = _),
          (t[15] = h),
          (t[16] = L))
        : (L = t[16]);
      var E;
      t[17] !== R || t[18] !== L
        ? ((E = s.jsx(r("WAWebDrawerBody.react"), {
            children: s.jsx(r("WAWebDrawerSection.react"), {
              animation: !1,
              xstyle: S,
              children: s.jsx("div", {
                role: "radiogroup",
                "aria-label": R,
                children: L,
              }),
            }),
          })),
          (t[17] = R),
          (t[18] = L),
          (t[19] = E))
        : (E = t[19]);
      var k;
      return (
        t[20] !== v || t[21] !== E
          ? ((k = s.jsxs(r("WAWebDrawer.react"), {
              testid: void 0,
              tsNavigationData: b,
              children: [v, E],
            })),
            (t[20] = v),
            (t[21] = E),
            (t[22] = k))
          : (k = t[22]),
        k
      );
    }
    l.default = m;
  },
  98,
);
