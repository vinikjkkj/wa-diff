__d(
  "oz-player/manifests/OzByteRange",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      return e.startByte === t.startByte;
    }
    function l(e, t) {
      return t.endByte === null ? !1 : e.startByte === t.endByte + 1;
    }
    function s(e, t) {
      return e.startByte < t.startByte
        ? !1
        : t.endByte == null || t.endByte >= e.startByte;
    }
    function u(e, t) {
      var n = e,
        r = t;
      if (r.startByte < n.startByte) {
        var o = n;
        ((n = r), (r = o));
      }
      if (n.endByte == null) return { startByte: n.startByte, endByte: null };
      if (r.startByte > n.endByte + 1) return null;
      var a =
        r.endByte == null || r.endByte > n.endByte ? r.endByte : n.endByte;
      return { startByte: n.startByte, endByte: a };
    }
    function c(e, t) {
      return t.endByte == null
        ? null
        : e.startByte > t.endByte
          ? { startByte: e.startByte, endByte: e.endByte }
          : e.endByte != null && e.endByte <= t.endByte
            ? null
            : { startByte: t.endByte + 1, endByte: e.endByte };
    }
    function d(e) {
      return e.endByte == null ? null : e.endByte - e.startByte + 1;
    }
    ((i.startsAtSame = e),
      (i.startsImmediateAfter = l),
      (i.startsDuring = s),
      (i.union = u),
      (i.disjoinAfter = c),
      (i.getLength = d));
  },
  66,
);
