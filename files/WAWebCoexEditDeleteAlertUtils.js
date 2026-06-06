__d(
  "WAWebCoexEditDeleteAlertUtils",
  ["WAWebUserPrefsIndexedDBStorage", "WAWebUserPrefsMultiDevice"],
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
    async function p() {
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(e, !0);
    }
    async function _() {
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(s, !0);
    }
    function f(e) {
      var t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(u) || [];
      return t.includes(e);
    }
    function g(e) {
      var t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(c) || [];
      return t.includes(e);
    }
    async function h(e) {
      var t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(u) || [];
      t.includes(e) ||
        (await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
          u,
          [].concat(t, [e]),
        ));
    }
    async function y(e) {
      var t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(c) || [];
      t.includes(e) ||
        (await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
          c,
          [].concat(t, [e]),
        ));
    }
    function C(e, t) {
      t === void 0 && (t = !1);
      var n = o(
        "WAWebUserPrefsMultiDevice",
      ).getIsHostedMeAccountFromLocalStorage();
      return n ? !d() : t ? !f(e) : !1;
    }
    function b(e, t) {
      t === void 0 && (t = !1);
      var n = o(
        "WAWebUserPrefsMultiDevice",
      ).getIsHostedMeAccountFromLocalStorage();
      return n ? !m() : t ? !g(e) : !1;
    }
    async function v(e) {
      var t = o(
        "WAWebUserPrefsMultiDevice",
      ).getIsHostedMeAccountFromLocalStorage();
      t ? await p() : await h(e);
    }
    async function S(e) {
      var t = o(
        "WAWebUserPrefsMultiDevice",
      ).getIsHostedMeAccountFromLocalStorage();
      t ? await _() : await y(e);
    }
    ((l.shouldShowCoexEditAlert = C),
      (l.shouldShowCoexDeleteAlert = b),
      (l.markCoexEditAlertShown = v),
      (l.markCoexDeleteAlertShown = S));
  },
  98,
);
