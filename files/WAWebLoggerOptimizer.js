__d(
  "WAWebLoggerOptimizer",
  [],
  function (t, n, r, o, a, i) {
    var e = "==================================================EOU",
      l = 4e3;
    async function s(t, n, r) {
      (n === void 0 && (n = 0), r === void 0 && (r = !1));
      var o = [];
      if (r)
        for (
          var a = await t.logs
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
          i >= 0 && (u(a[i], o), !a[i].log.includes(e));
          i--
        );
      else
        await t.logs
          .orderBy("timestamp")
          .filter(function (e) {
            return e.timestamp >= n;
          })
          .each(function (e) {
            u(e, o);
          });
      return o;
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
