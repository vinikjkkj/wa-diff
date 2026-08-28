__d(
  "AdsInterfacesRouteTypeFBID",
  ["invariant", "immutable"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = ",";
    function u(t, n) {
      return n.length ? n.split(e) : [];
    }
    function c(e, t) {
      return (
        Array.isArray(t) || s(0, 12166, typeof t, JSON.stringify(t), e),
        t
          .map(function (e) {
            return String(e);
          })
          .join(",")
      );
    }
    function d(e, t) {
      return r("immutable").OrderedSet(u(e, t));
    }
    function m(e, t) {
      return (
        r("immutable").OrderedSet.isOrderedSet(t) ||
          s(0, 12166, typeof t, JSON.stringify(t), e),
        c(e, t.toArray())
      );
    }
    function p(e, t) {
      return r("immutable").List(u(e, t));
    }
    function _(e, t) {
      return (
        r("immutable").List.isList(t) ||
          s(0, 12166, typeof t, JSON.stringify(t), e),
        c(e, t.toArray())
      );
    }
    ((l.decodeArray = u),
      (l.encodeArray = c),
      (l.decodeOrderedSet = d),
      (l.encodeOrderedSet = m),
      (l.decodeList = p),
      (l.encodeList = _));
  },
  98,
);
