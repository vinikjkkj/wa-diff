__d(
  "WAWebHatchConnectionsText",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      if (e.isGroup) return s._(/*BTDS*/ "");
      var t = e.agentName;
      return t == null ? null : s._(/*BTDS*/ "", [s._param("Muse name", t)]);
    }
    function u(e, t) {
      var n = t.agentName;
      return n == null
        ? e
        : s._(/*BTDS*/ "", [
            s._param("own Muse name", e),
            s._param("other Muse name", n),
          ]);
    }
    function c(e) {
      return e.displayName !== "" ? e.displayName : s._(/*BTDS*/ "");
    }
    function d(e) {
      return e.personName !== "" ? e.personName : s._(/*BTDS*/ "");
    }
    ((l.hatchConnectionSubtitle = e),
      (l.hatchConnectionMusePair = u),
      (l.hatchConnectionDisplayName = c),
      (l.hatchConnectionRequesterName = d));
  },
  226,
);
