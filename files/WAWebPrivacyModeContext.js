__d(
  "WAWebPrivacyModeContext",
  [
    "WAWebCmd",
    "WAWebPrivacyModeBlurConfig",
    "WAWebUserPrefsPrivacyMode",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useCallback,
      m = u.useContext,
      p = u.useEffect,
      _ = u.useMemo,
      f = u.useState,
      g = {
        isPrivacyModeEnabled: !1,
        setPrivacyModeEnabled: function () {},
        getBlurForCategory: function (t) {
          return o("WAWebPrivacyModeBlurConfig").blurValueForPreset(
            o("WAWebPrivacyModeBlurConfig").defaultPresetForCategory(t),
          );
        },
        updateBlurPreset: function () {},
        resetBlurPresets: function () {},
      },
      h = c(g);
    function y(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.children,
        r = f(o("WAWebUserPrefsPrivacyMode").isPrivacyScreenEnabled),
        a = r[0],
        i = r[1],
        l = f(b),
        u = l[0],
        c = l[1],
        d;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = function (t) {
            (i(t), o("WAWebUserPrefsPrivacyMode").setPrivacyScreenEnabled(t));
          }),
          (t[0] = d))
        : (d = t[0]);
      var m = d,
        _,
        g;
      (t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = function () {
            var e = function () {
              i(C);
            };
            return (
              o("WAWebCmd").Cmd.on("toggle_privacy_mode", e),
              function () {
                o("WAWebCmd").Cmd.off("toggle_privacy_mode", e);
              }
            );
          }),
          (g = []),
          (t[1] = _),
          (t[2] = g))
        : ((_ = t[1]), (g = t[2])),
        p(_, g));
      var y;
      t[3] !== u
        ? ((y = function (t) {
            var e,
              n =
                (e = u.get(t)) != null
                  ? e
                  : o("WAWebPrivacyModeBlurConfig").defaultPresetForCategory(t);
            return o("WAWebPrivacyModeBlurConfig").blurValueForPreset(n);
          }),
          (t[3] = u),
          (t[4] = y))
        : (y = t[4]);
      var v = y,
        S;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = function (t, n) {
            (o("WAWebUserPrefsPrivacyMode").setBlurPreset(t, n),
              c(function (e) {
                var r = new Map(e);
                return (r.set(t, n), r);
              }));
          }),
          (t[5] = S))
        : (S = t[5]);
      var R = S,
        L;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = function () {
            var e = new Map();
            for (var t of o(
              "WAWebPrivacyModeBlurConfig",
            ).BlurCategory.members()) {
              var n = o("WAWebPrivacyModeBlurConfig").defaultPresetForCategory(
                t,
              );
              (o("WAWebUserPrefsPrivacyMode").setBlurPreset(t, n), e.set(t, n));
            }
            c(e);
          }),
          (t[6] = L))
        : (L = t[6]);
      var E = L,
        k;
      t[7] !== v || t[8] !== a
        ? ((k = {
            isPrivacyModeEnabled: a,
            setPrivacyModeEnabled: m,
            getBlurForCategory: v,
            updateBlurPreset: R,
            resetBlurPresets: E,
          }),
          (t[7] = v),
          (t[8] = a),
          (t[9] = k))
        : (k = t[9]);
      var I = k,
        T;
      return (
        t[10] !== n || t[11] !== I
          ? ((T = s.jsx(h.Provider, { value: I, children: n })),
            (t[10] = n),
            (t[11] = I),
            (t[12] = T))
          : (T = t[12]),
        T
      );
    }
    function C(e) {
      var t = !e;
      return (o("WAWebUserPrefsPrivacyMode").setPrivacyScreenEnabled(t), t);
    }
    function b() {
      var e = new Map();
      for (var t of o("WAWebPrivacyModeBlurConfig").BlurCategory.members())
        e.set(t, o("WAWebUserPrefsPrivacyMode").getBlurPreset(t));
      return e;
    }
    function v() {
      return m(h);
    }
    ((l.WAWebPrivacyModeProvider = y), (l.usePrivacyMode = v));
  },
  98,
);
