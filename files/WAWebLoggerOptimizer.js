__d(
  "WAWebLoggerOptimizer",
  ["asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i) {
    var e = "==================================================EOU",
      l = 4e3;
    function s(e, t, n) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          (n === void 0 && (n = 0), r === void 0 && (r = !1));
          var o = [];
          if (r)
            for (
              var a = yield t.logs
                  .orderBy("timestamp")
                  .filter(function (e) {
                    return e.timestamp >= n;
                  })
                  .reverse()
                  .until(function (e) {
                    return e.log.includes("[sendlogs]");
                  }, !0)
                  .toArray(),
                i = a.length - 1;
              i >= 0 && (c(a[i], o), !a[i].log.includes(e));
              i--
            );
          else
            yield t.logs
              .orderBy("timestamp")
              .filter(function (e) {
                return e.timestamp >= n;
              })
              .each(function (e) {
                c(e, o);
              });
          return o;
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t) {
      ((e.log = e.log.slice(0, l)), t.push(e));
    }
    ((i.END_OF_UPLOAD = e),
      (i.TRIM_LENGTH = l),
      (i.getTimeboxedAndTrimmedLogs = s));
  },
  66,
);
