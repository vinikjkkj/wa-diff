__d(
  "WAWebOrgAdminAssociationRetry",
  ["WAPromiseDelays", "asyncToGeneratorRuntime", "err"],
  function (t, n, r, o, a, i, l) {
    var e = [0, 300, 900, 1800];
    function s(e) {
      return u(e, 0);
    }
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a,
            i = (a = e[n]) != null ? a : 0;
          i > 0 && (yield o("WAPromiseDelays").delayMs(i));
          var l = n === e.length - 1;
          try {
            var s = yield t();
            if (s != null) return s;
          } catch (e) {
            if (!d(e) || l) throw e;
          }
          if (l) throw r("err")("Association rejected");
          return u(t, n + 1);
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return e instanceof Error && e.message === "NOT_FOUND_OR_UNAVAILABLE";
    }
    l.associateOrgAdminManagedObjectWithRetry = s;
  },
  98,
);
