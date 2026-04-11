__d(
  "WebBloksGetDatetimeText",
  ["WebBloksDateUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r, a, i, l) {
      var c = u(r, "medium"),
        d = u(a, "long"),
        m = s(n, "datetime");
      return o("WebBloksDateUtils").getDateTimeText(
        t,
        e.bloksContext.objectSet.environment.locale,
        m,
        c,
        d,
        l,
      );
    }
    function s(e, t) {
      return e !== "date" && e !== "datetime" && e !== "time" ? t : e;
    }
    function u(e, t) {
      return e !== "short" && e !== "medium" && e !== "long" && e !== "full"
        ? t
        : e;
    }
    l.default = e;
  },
  98,
);
