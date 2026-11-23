__d(
  "WAWebCoexCallingFirstTimeAlertUtils",
  ["WAWebUserPrefsIndexedDBStorage", "WAWebUserPrefsMultiDevice"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "WACoexSMBCallingFirstTimeAlertShown",
      s = "WACoexCallingFirstTimeAlertShownThreads";
    function u() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e) === !0;
    }
    async function c() {
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(e, !0);
    }
    function d() {
      var e = o(
        "WAWebUserPrefsMultiDevice",
      ).getIsHostedMeAccountFromLocalStorage();
      return e ? !u() : !1;
    }
    function m(e) {
      var t,
        n =
          (t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(s)) != null
            ? t
            : [];
      return n.includes(e);
    }
    async function p(e) {
      var t,
        n =
          (t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(s)) != null
            ? t
            : [];
      n.includes(e) ||
        (await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
          s,
          [].concat(n, [e]),
        ));
    }
    function _(e, t) {
      return t ? !m(e) : !1;
    }
    ((l.markCoexCallingSMBFirstTimeAlertShown = c),
      (l.shouldShowCoexCallingSMBFirstTimeAlert = d),
      (l.markCoexCallingConsumerFirstTimeAlertShownForThread = p),
      (l.shouldShowCoexCallingConsumerFirstTimeAlert = _));
  },
  98,
);
