__d(
  "WAWebPrivacyModeContext",
  [
    "WAWebCmd",
    "WAWebPrivacyModeBlurConfig",
    "WAWebUserPrefsPrivacyMode",
    "react",
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
      var t = e.children,
        n = f(o("WAWebUserPrefsPrivacyMode").isPrivacyScreenEnabled),
        r = n[0],
        a = n[1],
        i = f(function () {
          var e = new Map();
          for (var t of o("WAWebPrivacyModeBlurConfig").BlurCategory.members())
            e.set(t, o("WAWebUserPrefsPrivacyMode").getBlurPreset(t));
          return e;
        }),
        l = i[0],
        u = i[1],
        c = d(function (e) {
          (a(e), o("WAWebUserPrefsPrivacyMode").setPrivacyScreenEnabled(e));
        }, []);
      p(function () {
        var e = function () {
          a(function (e) {
            var t = !e;
            return (
              o("WAWebUserPrefsPrivacyMode").setPrivacyScreenEnabled(t),
              t
            );
          });
        };
        return (
          o("WAWebCmd").Cmd.on("toggle_privacy_mode", e),
          function () {
            o("WAWebCmd").Cmd.off("toggle_privacy_mode", e);
          }
        );
      }, []);
      var m = d(
          function (e) {
            var t,
              n =
                (t = l.get(e)) != null
                  ? t
                  : o("WAWebPrivacyModeBlurConfig").defaultPresetForCategory(e);
            return o("WAWebPrivacyModeBlurConfig").blurValueForPreset(n);
          },
          [l],
        ),
        g = d(function (e, t) {
          (o("WAWebUserPrefsPrivacyMode").setBlurPreset(e, t),
            u(function (n) {
              var r = new Map(n);
              return (r.set(e, t), r);
            }));
        }, []),
        y = d(function () {
          var e = new Map();
          for (var t of o(
            "WAWebPrivacyModeBlurConfig",
          ).BlurCategory.members()) {
            var n = o("WAWebPrivacyModeBlurConfig").defaultPresetForCategory(t);
            (o("WAWebUserPrefsPrivacyMode").setBlurPreset(t, n), e.set(t, n));
          }
          u(e);
        }, []),
        C = _(
          function () {
            return {
              isPrivacyModeEnabled: r,
              setPrivacyModeEnabled: c,
              getBlurForCategory: m,
              updateBlurPreset: g,
              resetBlurPresets: y,
            };
          },
          [r, c, m, g, y],
        );
      return s.jsx(h.Provider, { value: C, children: t });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C() {
      return m(h);
    }
    ((l.WAWebPrivacyModeProvider = y), (l.usePrivacyMode = C));
  },
  98,
);
