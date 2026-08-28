__d(
  "LWICometGenericEventsFalcoEvent",
  ["LWICometLogger", "logBoostedComponentGenericEvents"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return (
        e == null &&
          (e = new (r("LWICometLogger"))(
            r("logBoostedComponentGenericEvents"),
          )),
        e
      );
    }
    function u(e) {
      s().log(e);
    }
    function c(e) {
      if (e == null) return null;
      var t = {};
      for (var n in e)
        e[n] != null ? (t[n] = JSON.stringify(e[n])) : (t[n] = null);
      return t;
    }
    ((l.getLogger = s), (l.log = u), (l.transformExtraData = c));
  },
  98,
);
