__d(
  "FalcoUtils",
  ["AnalyticsCoreData", "ODS", "PersistedQueue", "nullthrows"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = "ods_web_batch",
      c = p(33);
    function d(e) {
      var t;
      return ((e.tags = _((t = e.tags) != null ? t : [0, 0], c)), e);
    }
    function m(e) {
      if (e) {
        var t = e.appScopedIdentity,
          n = e.claim,
          r = e.fbIdentity,
          o = "";
        if (r) {
          var a = r.accountId,
            i = r.actorId;
          o = a + "^#" + i + "^#";
        } else t !== void 0 && (o = "^#^#" + t);
        return o + "^#" + n;
      }
      return "";
    }
    function p(e) {
      return e > 30 ? [0, 1 << (e - 30)] : [1 << e, 0];
    }
    function _(e, t) {
      return [e[0] | t[0], e[1] | t[1]];
    }
    function f(t, n, a) {
      var i;
      t !== u &&
        (s || (s = o("ODS"))).bumpEntityKey(
          7173,
          "entities.ff_js_web." +
            t +
            "." +
            (e || (e = r("AnalyticsCoreData"))).app_id +
            "." +
            ((i = (e || (e = r("AnalyticsCoreData"))).app_version) != null
              ? i
              : "0"
            ).split(".")[0] +
            "." +
            e.push_phase,
          n,
          a,
        );
    }
    function g(e, t, n) {
      var o,
        a = (o = r("PersistedQueue").getSuffixesForKey(e)) != null ? o : [];
      a.push(t);
      for (var i of a) {
        var l = e + "^$" + i;
        if (!n.has(l)) {
          var s = r("PersistedQueue").create(e, {
            onLoad: d,
            queueNameSuffix: i,
          });
          n.set(l, s);
        }
      }
      return r("nullthrows")(n.get(e + "^$" + t));
    }
    ((l.identityToString = m),
      (l.getTaggedBitmap = p),
      (l.xorBitmap = _),
      (l.bumpODSMetrics = f),
      (l.createQueue = g));
  },
  98,
);
