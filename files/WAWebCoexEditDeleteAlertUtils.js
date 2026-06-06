__d(
  "WAWebCoexEditDeleteAlertUtils",
  [
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "WACoexEditAlertShownBusiness",
      s = "WACoexDeleteAlertShownBusiness",
      u = "WACoexEditAlertShownThreads",
      c = "WACoexDeleteAlertShownThreads";
    function d() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e) === !0;
    }
    function m() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(s) === !0;
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(e, !0);
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(s, !0);
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      var t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(u) || [];
      return t.includes(e);
    }
    function y(e) {
      var t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(c) || [];
      return t.includes(e);
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(u) || [];
          t.includes(e) ||
            (yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
              u,
              [].concat(t, [e]),
            ));
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(c) || [];
          t.includes(e) ||
            (yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
              c,
              [].concat(t, [e]),
            ));
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      t === void 0 && (t = !1);
      var n = o(
        "WAWebUserPrefsMultiDevice",
      ).getIsHostedMeAccountFromLocalStorage();
      return n ? !d() : t ? !h(e) : !1;
    }
    function L(e, t) {
      t === void 0 && (t = !1);
      var n = o(
        "WAWebUserPrefsMultiDevice",
      ).getIsHostedMeAccountFromLocalStorage();
      return n ? !m() : t ? !y(e) : !1;
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
            "WAWebUserPrefsMultiDevice",
          ).getIsHostedMeAccountFromLocalStorage();
          t ? yield p() : yield C(e);
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
            "WAWebUserPrefsMultiDevice",
          ).getIsHostedMeAccountFromLocalStorage();
          t ? yield f() : yield v(e);
        })),
        T.apply(this, arguments)
      );
    }
    ((l.shouldShowCoexEditAlert = R),
      (l.shouldShowCoexDeleteAlert = L),
      (l.markCoexEditAlertShown = E),
      (l.markCoexDeleteAlertShown = I));
  },
  98,
);
