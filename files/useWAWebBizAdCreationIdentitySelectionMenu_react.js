__d(
  "useWAWebBizAdCreationIdentitySelectionMenu.react",
  [
    "fbt",
    "WAWebBizAdCreationShowIdentityChangeConfirmation",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "react",
    "useWAWebBizAdCreationIdentityContext",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useCallback;
    function d(e, t, n, o, a) {
      (e === void 0 && (e = !0),
        t === void 0 && (t = null),
        n === void 0 && (n = null),
        o === void 0 && (o = null),
        a === void 0 && (a = null));
      var i = r("useWAWebBizAdCreationIdentityContext")(),
        l = i != null ? i : {},
        d = l.accountType,
        m = l.isWAAEligible,
        p = l.loginWithFacebook,
        _ = l.loginWithWhatsApp,
        f = l.logoutOfFacebook,
        g = c(
          function () {
            t == null || t();
          },
          [t],
        ),
        h = c(
          function (t) {
            e ? r("WAWebBizAdCreationShowIdentityChangeConfirmation")(t) : t();
          },
          [e],
        ),
        y = c(
          function () {
            (n == null || n(),
              h(function () {
                return p == null ? void 0 : p();
              }));
          },
          [h, p, n],
        ),
        C = c(
          function () {
            (o == null || o(),
              h(function () {
                return _ == null ? void 0 : _();
              }));
          },
          [h, _, o],
        ),
        b = c(
          function () {
            (a == null || a(),
              h(function () {
                return f == null ? void 0 : f();
              }));
          },
          [h, f, a],
        ),
        v = null;
      return (
        d === "WAA"
          ? (v = u.jsx(r("WDSMenu.react"), {
              children: u.jsx(r("WDSMenuItem.react"), {
                title: s._(/*BTDS*/ "Log into Facebook"),
                onPress: y,
              }),
            }))
          : d === "FB" &&
            (v = u.jsxs(r("WDSMenu.react"), {
              children: [
                (m != null ? m : !1) === !0 &&
                  u.jsx(r("WDSMenuItem.react"), {
                    title: s._(/*BTDS*/ "Switch to WhatsApp"),
                    onPress: C,
                  }),
                u.jsx(r("WDSMenuItem.react"), {
                  title: s._(/*BTDS*/ "Remove account"),
                  onPress: b,
                  destructive: !0,
                }),
              ],
            })),
        { menuContent: v, onMenuOpen: g }
      );
    }
    l.default = d;
  },
  226,
);
