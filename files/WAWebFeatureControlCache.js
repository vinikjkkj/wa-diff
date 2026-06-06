__d(
  "WAWebFeatureControlCache",
  ["WATimeUtils", "WAWebUserPrefsIndexedDBStorage", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "WAAuthorizedAgentFeatureControlPolicy";
    function s() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e);
    }
    function u() {
      var e;
      return (e = s()) == null ? void 0 : e.policy;
    }
    function c() {
      var e;
      return (e = s()) == null ? void 0 : e.lastFetchedAt;
    }
    function d() {
      var e;
      return ((e = s()) == null ? void 0 : e.isUserAA) === !0;
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = {
            policy: t,
            lastFetchedAt: o("WATimeUtils").unixTimeMs(),
            isUserAA: !0,
          };
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(e, n);
        })),
        p.apply(this, arguments)
      );
    }
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t,
            n,
            r = s();
          if ((r == null ? void 0 : r.isUserAA) !== !0) {
            var a = {
              policy: (t = r == null ? void 0 : r.policy) != null ? t : null,
              lastFetchedAt:
                (n = r == null ? void 0 : r.lastFetchedAt) != null ? n : null,
              isUserAA: !0,
            };
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(e, a);
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g() {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(e);
        })),
        h.apply(this, arguments)
      );
    }
    ((l.getPolicy = u),
      (l.getPolicyLastFetchedAt = c),
      (l.getUserIsAA = d),
      (l.setPolicy = m),
      (l.markUserAsAA = _),
      (l.clearPolicy = g));
  },
  98,
);
