__d(
  "AdsInterfacesRouteTypeString",
  ["invariant", "filterNulls", "immutable"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = /,(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/g,
      u = /^\"(.*)\"$/;
    function c(t, n) {
      return Array.isArray(n)
        ? r("filterNulls")(
            n.map(function (e) {
              return typeof e == "string" ? e : null;
            }),
          )
        : typeof n != "string" || !n.length
          ? []
          : n.split(e).map(function (e) {
              return e.replace(u, "$1");
            });
    }
    function d(e, t) {
      return (
        Array.isArray(t) || s(0, 12166, typeof t, JSON.stringify(t), e),
        t
          .map(function (e) {
            return String(e);
          })
          .map(function (e) {
            return e.indexOf(",") > -1 ? '"' + e + '"' : e;
          })
          .join(",")
      );
    }
    function m(e, t) {
      return r("immutable").OrderedSet(c(e, t));
    }
    function p(e, t) {
      return (
        r("immutable").OrderedSet.isOrderedSet(t) ||
          s(0, 12166, typeof t, JSON.stringify(t), e),
        d(e, t.toArray())
      );
    }
    function _(e, t) {
      return r("immutable").List(c(e, t));
    }
    function f(e, t) {
      return (
        r("immutable").List.isList(t) ||
          s(0, 12166, typeof t, JSON.stringify(t), e),
        d(e, t.toArray())
      );
    }
    ((l.decodeArray = c),
      (l.encodeArray = d),
      (l.decodeOrderedSet = m),
      (l.encodeOrderedSet = p),
      (l.decodeList = _),
      (l.encodeList = f));
  },
  98,
);
