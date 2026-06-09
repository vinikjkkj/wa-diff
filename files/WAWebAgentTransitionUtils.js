__d(
  "WAWebAgentTransitionUtils",
  ["WAWebUserPrefsIndexedDBStorage", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "WAMeSmbOffboardingState",
      s = "WAMeSmbParentCompanyName";
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(e, !0);
        })),
        c.apply(this, arguments)
      );
    }
    function d() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e) === !0;
    }
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(e),
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(s));
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(s, e);
        })),
        f.apply(this, arguments)
      );
    }
    function g() {
      var e;
      return (e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(s)) !=
        null
        ? e
        : "";
    }
    ((l.storeMeSmbOffboardingState = u),
      (l.getMeSmbOffboardingState = d),
      (l.clearMeSmbOffboardingState = m),
      (l.storeMeSmbParentCompanyName = _),
      (l.getMeSmbParentCompanyName = g));
  },
  98,
);
