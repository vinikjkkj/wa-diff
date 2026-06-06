__d(
  "WAWebCoexCallingFirstTimeAlertUtils",
  [
    "WAWebABProps",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "WACoexSMBCallingFirstTimeAlertShown",
      s = "WACoexCallingFirstTimeAlertShownThreads";
    function u() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e) === !0;
    }
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(e, !0);
        })),
        d.apply(this, arguments)
      );
    }
    function m() {
      var e = o("WAWebABProps").getABPropConfigValue("coex_calling_enabled");
      if (!e) return !1;
      var t = o(
        "WAWebUserPrefsMultiDevice",
      ).getIsHostedMeAccountFromLocalStorage();
      return t ? !u() : !1;
    }
    function p(e) {
      var t,
        n =
          (t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(s)) != null
            ? t
            : [];
      return n.includes(e);
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n =
              (t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(s)) !=
              null
                ? t
                : [];
          n.includes(e) ||
            (yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
              s,
              [].concat(n, [e]),
            ));
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      var n = o("WAWebABProps").getABPropConfigValue("coex_calling_enabled");
      return !n || !t ? !1 : !p(e);
    }
    ((l.markCoexCallingSMBFirstTimeAlertShown = c),
      (l.shouldShowCoexCallingSMBFirstTimeAlert = m),
      (l.markCoexCallingConsumerFirstTimeAlertShownForThread = _),
      (l.shouldShowCoexCallingConsumerFirstTimeAlert = g));
  },
  98,
);
