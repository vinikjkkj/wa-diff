__d(
  "WebBloksLogEvent",
  ["FalcoLoggerInternal", "WebBloksFalcoPolicyData"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, a) {
      var i = o("FalcoLoggerInternal").create(
        t,
        r("WebBloksFalcoPolicyData").get(t),
      );
      i.log(function () {
        return a;
      });
    }
    l.default = e;
  },
  98,
);
