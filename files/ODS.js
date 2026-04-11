__d(
  "ODS",
  [
    "ExecutionEnvironment",
    "FBLogger",
    "OdsWebBatchFalcoEvent",
    "Random",
    "Run",
    "clearTimeout",
    "gkx",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u =
        (e || (e = r("ExecutionEnvironment"))).canUseDOM ||
        (e || (e = r("ExecutionEnvironment"))).isInWorker,
      c = {};
    function d(e, t, n, r, o) {
      var a;
      (r === void 0 && (r = 1), o === void 0 && (o = 1));
      var i = (a = c[t]) != null ? a : null;
      if (!(i != null && i <= 0)) {
        s = s || {};
        var l = s[e] || (s[e] = {}),
          u = l[t] || (l[t] = {}),
          d = u[n] || (u[n] = { n: 0, d: null }),
          m = Number(r),
          _ = Number(o);
        if ((i > 0 && ((m /= i), (_ /= i)), !(!isFinite(m) || !isFinite(_)))) {
          if (((d.n += m), arguments.length >= 5)) {
            var f = d.d;
            (f == null && (f = 0), (d.d = f + _));
          }
          p();
        }
      }
    }
    var m;
    function p() {
      m == null &&
        (m = r("setTimeout")(
          function () {
            h();
          },
          r("gkx")("20935") ? 13e3 / 2 : 5e3,
        ));
    }
    function _(e, t) {
      u && (c[e] = o("Random").random() < t ? t : 0);
    }
    function f(e, t, n, r) {
      (r === void 0 && (r = 1), u && d(e, t, n, r));
    }
    function g(e, t, n, r, o) {
      (r === void 0 && (r = 1), o === void 0 && (o = 1), u && d(e, t, n, r, o));
    }
    function h(e) {
      if (
        (e === void 0 && (e = "normal"),
        !u || (r("clearTimeout")(m), (m = null), s == null))
      )
        return;
      var t = s;
      s = null;
      function n() {
        return { batch: t };
      }
      e === "critical"
        ? r("OdsWebBatchFalcoEvent").logCritical(n)
        : r("OdsWebBatchFalcoEvent").log(n);
    }
    (u &&
      o("Run").onUnload(function () {
        h("critical");
      }),
      (l.setEntitySample = _),
      (l.bumpEntityKey = f),
      (l.bumpFraction = g),
      (l.flush = h));
  },
  98,
);
