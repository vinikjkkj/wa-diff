__d(
  "WAWebLoggerOptimizer",
  [],
  function (t, n, r, o, a, i) {
    var e = "==================================================EOU",
      l = 4e3;
    async function s(t, n, r, o) {
      (n === void 0 && (n = 0),
        r === void 0 && (r = !1),
        o === void 0 && (o = 1 / 0));
      var a = [];
      if (r)
        for (
          var i = await t.logs
              .where("timestamp")
              .between(n, o)
              .reverse()
              .until(function (e) {
                return e.log.includes("[sendlogs]");
              }, !0)
              .toArray(),
            l = i.length - 1;
          l >= 0 && (u(i[l], a), !i[l].log.includes(e));
          l--
        );
      else
        await t.logs
          .where("timestamp")
          .between(n, o)
          .each(function (e) {
            u(e, a);
          });
      return a;
    }
    function u(e, t) {
      ((e.log = e.log.slice(0, l)), t.push(e));
    }
    ((i.END_OF_UPLOAD = e),
      (i.TRIM_LENGTH = l),
      (i.getTimeboxedAndTrimmedLogs = s));
  },
  66,
);
