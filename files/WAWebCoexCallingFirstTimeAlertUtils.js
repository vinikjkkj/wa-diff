__d(
  "WAWebCoexCallingFirstTimeAlertUtils",
  [
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
      var e = o(
        "WAWebUserPrefsMultiDevice",
      ).getIsHostedMeAccountFromLocalStorage();
      return e ? !u() : !1;
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
      return t ? !p(e) : !1;
    }
    ((l.markCoexCallingSMBFirstTimeAlertShown = c),
      (l.shouldShowCoexCallingSMBFirstTimeAlert = m),
      (l.markCoexCallingConsumerFirstTimeAlertShownForThread = _),
      (l.shouldShowCoexCallingConsumerFirstTimeAlert = g));
  },
  98,
);
