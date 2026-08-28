__d(
  "CometMessengerState",
  ["Promise", "asyncToGeneratorRuntime", "ifRequired"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield (t = window.navigator) == null ||
            (t = t.locks) == null ||
            t.query == null
              ? void 0
              : t.query(),
            r =
              n == null
                ? void 0
                : n.pending
                    .filter(function (t) {
                      return t.name.indexOf(e) === 0;
                    })
                    .map(function (e) {
                      return e.name;
                    });
          return r != null ? r : [];
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield (t = window.navigator) == null ||
            (t = t.locks) == null ||
            t.query == null
              ? void 0
              : t.query(),
            r =
              n == null
                ? void 0
                : n.held
                    .filter(function (t) {
                      return t.name.indexOf(e) === 0;
                    })
                    .map(function (e) {
                      return e.name;
                    });
          return r != null ? r : [];
        })),
        d.apply(this, arguments)
      );
    }
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e,
            t,
            n =
              (e = yield (t = window.navigator) == null ||
              (t = t.locks) == null ||
              t.query == null
                ? void 0
                : t.query()) != null
                ? e
                : {};
          return JSON.stringify(n);
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
            o =
              (t = r("ifRequired")("ReStoreNameUtils", function (e) {
                return e;
              })) != null
                ? t
                : null;
          if (!o) return null;
          var a = o.lsPlatformLockName,
            i = o.reStoreCMLockName;
          return (e || (e = n("Promise"))).all([s(i), yield c(a), yield m()]);
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
          var e = yield _();
          if (e != null) {
            var t = e[0],
              n = e[1],
              r = e[2],
              o = (t.length > 0 ? "\u274C " : "") + t.length,
              a = (n.length < 1 ? "\u274C " : "") + n.length;
            return {
              lsPlatformLockHeld: a,
              rawLocksState: r,
              restoreLockPending: o,
            };
          }
        })),
        h.apply(this, arguments)
      );
    }
    l.dump = g;
  },
  98,
);
