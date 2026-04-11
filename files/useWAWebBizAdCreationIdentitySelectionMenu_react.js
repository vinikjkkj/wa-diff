__d(
  "useWAWebBizAdCreationIdentitySelectionMenu.react",
  [
    "fbt",
    "WAWebBizAdCreationShowIdentityChangeConfirmation",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
    "useWAWebBizAdCreationIdentityContext",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useCallback;
    function d(e, t, n, a, i) {
      var l = o("react-compiler-runtime").c(33),
        c = e === void 0 ? !0 : e,
        d = t === void 0 ? null : t,
        m = n === void 0 ? null : n,
        p = a === void 0 ? null : a,
        _ = i === void 0 ? null : i,
        f = r("useWAWebBizAdCreationIdentityContext")(),
        g;
      l[0] !== f
        ? ((g = f != null ? f : {}), (l[0] = f), (l[1] = g))
        : (g = l[1]);
      var h = g,
        y = h.accountType,
        C = h.isWAAEligible,
        b = h.loginWithFacebook,
        v = h.loginWithWhatsApp,
        S = h.logoutOfFacebook,
        R;
      l[2] !== d
        ? ((R = function () {
            d == null || d();
          }),
          (l[2] = d),
          (l[3] = R))
        : (R = l[3]);
      var L = R,
        E;
      l[4] !== c
        ? ((E = function (t) {
            c ? r("WAWebBizAdCreationShowIdentityChangeConfirmation")(t) : t();
          }),
          (l[4] = c),
          (l[5] = E))
        : (E = l[5]);
      var k = E,
        I;
      l[6] !== k || l[7] !== b || l[8] !== m
        ? ((I = function () {
            (m == null || m(),
              k(function () {
                return b == null ? void 0 : b();
              }));
          }),
          (l[6] = k),
          (l[7] = b),
          (l[8] = m),
          (l[9] = I))
        : (I = l[9]);
      var T = I,
        D;
      l[10] !== k || l[11] !== v || l[12] !== p
        ? ((D = function () {
            (p == null || p(),
              k(function () {
                return v == null ? void 0 : v();
              }));
          }),
          (l[10] = k),
          (l[11] = v),
          (l[12] = p),
          (l[13] = D))
        : (D = l[13]);
      var x = D,
        $;
      l[14] !== k || l[15] !== S || l[16] !== _
        ? (($ = function () {
            (_ == null || _(),
              k(function () {
                return S == null ? void 0 : S();
              }));
          }),
          (l[14] = k),
          (l[15] = S),
          (l[16] = _),
          (l[17] = $))
        : ($ = l[17]);
      var P = $,
        N = null;
      if (y === "WAA") {
        var M;
        l[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((M = s._(/*BTDS*/ "Log into Facebook")), (l[18] = M))
          : (M = l[18]);
        var w;
        (l[19] !== T
          ? ((w = u.jsx(r("WDSMenu.react"), {
              children: u.jsx(r("WDSMenuItem.react"), { title: M, onPress: T }),
            })),
            (l[19] = T),
            (l[20] = w))
          : (w = l[20]),
          (N = w));
      } else if (y === "FB") {
        var A;
        l[21] !== x || l[22] !== C
          ? ((A =
              (C != null ? C : !1) === !0 &&
              u.jsx(r("WDSMenuItem.react"), {
                title: s._(/*BTDS*/ "Switch to WhatsApp"),
                onPress: x,
              })),
            (l[21] = x),
            (l[22] = C),
            (l[23] = A))
          : (A = l[23]);
        var F;
        l[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((F = s._(/*BTDS*/ "Remove account")), (l[24] = F))
          : (F = l[24]);
        var O;
        l[25] !== P
          ? ((O = u.jsx(r("WDSMenuItem.react"), {
              title: F,
              onPress: P,
              destructive: !0,
            })),
            (l[25] = P),
            (l[26] = O))
          : (O = l[26]);
        var B;
        (l[27] !== A || l[28] !== O
          ? ((B = u.jsxs(r("WDSMenu.react"), { children: [A, O] })),
            (l[27] = A),
            (l[28] = O),
            (l[29] = B))
          : (B = l[29]),
          (N = B));
      }
      var W;
      return (
        l[30] !== N || l[31] !== L
          ? ((W = { menuContent: N, onMenuOpen: L }),
            (l[30] = N),
            (l[31] = L),
            (l[32] = W))
          : (W = l[32]),
        W
      );
    }
    l.default = d;
  },
  226,
);
