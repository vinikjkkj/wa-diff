__d(
  "WAWebLoggerOptimizer",
  ["asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i) {
    var e = "==================================================EOU",
      l = 4e3;
    function s(e, t, n, r) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, r, o) {
            (n === void 0 && (n = 0),
              r === void 0 && (r = !1),
              o === void 0 && (o = 1 / 0));
            var a = [];
            if (r)
              for (
                var i = yield t.logs
                    .where("timestamp")
                    .between(n, o)
                    .reverse()
                    .until(function (e) {
                      return e.log.includes("[sendlogs]");
                    }, !0)
                    .toArray(),
                  l = i.length - 1;
                l >= 0 && (c(i[l], a), !i[l].log.includes(e));
                l--
              );
            else
              yield t.logs
                .where("timestamp")
                .between(n, o)
                .each(function (e) {
                  c(e, a);
                });
            return a;
          },
        )),
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
