__d(
  "AdsObjectIDLevelRegistry",
  ["FBLogger", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map();
    function s() {
      return !0;
    }
    function u() {
      return r("gkx")("4687");
    }
    function c(t, n) {
      if (s())
        for (var o of t) {
          var a = e.get(o);
          if (a != null && a !== n) {
            r("FBLogger")("ads_object_id_level_registry").warn(
              "Duplicate ID registration conflict: id=%s existingLevel=%s newLevel=%s",
              o,
              a,
              n,
            );
            continue;
          }
          e.set(o, n);
        }
    }
    function d(t) {
      var n;
      return (n = e.get(t)) != null ? n : null;
    }
    function m(t, n, o) {
      var a = e.get(t);
      return a == null || a === n
        ? !0
        : (u() &&
            r("FBLogger")("ads_object_id_level_registry").warn(
              "CombinedStore ID level mismatch: id=%s registeredLevel=%s expectedLevel=%s store=%s",
              t,
              a,
              n,
              o,
            ),
          !1);
    }
    function p(e, t, n) {
      return m(e, t, n) ? !1 : r("gkx")("11997");
    }
    function _() {
      e.clear();
    }
    ((l.registerIDs = c),
      (l.getRegisteredLevel = d),
      (l.checkIDLevel = m),
      (l.shouldBlockOnIDMismatch = p),
      (l.clear = _));
  },
  98,
);
