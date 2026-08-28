__d(
  "AdsDeliverySpecBulkConverter",
  ["$InternalEnum", "AdsBulkValueUtils", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({
      PROMOTED_OBJECT: "promoted_object",
      TARGETING: "targeting",
    });
    function s(t) {
      return e.cast(t) != null;
    }
    function u(e) {
      return e.map(function (e, t) {
        return s(t) ? u(e) : o("AdsBulkValueUtils").wrapValue(e);
      });
    }
    function c(e) {
      return e.map(function (e, t) {
        return e instanceof r("immutable").Map
          ? s(t)
            ? c(e)
            : void 0
          : o("AdsBulkValueUtils").getUniformValue(e);
      });
    }
    function d(e) {
      return r("immutable")
        .fromJS(e)
        .map(function (e, t) {
          return s(t)
            ? d(e)
            : e &&
                e.map(function (e) {
                  return r("immutable").fromJS(e);
                });
        });
    }
    function m(e) {
      return e && e.toJS ? e.toJS() : e;
    }
    function p(e) {
      return e
        .map(function (e, t) {
          return s(t) && e instanceof r("immutable").Map ? p(e) : e && e.map(m);
        })
        .toJS();
    }
    ((l.toBulkSpec = u),
      (l.toSingleSpec = c),
      (l.toBulkImmutableSpec = d),
      (l.convertToJS = m),
      (l.toBulkJSSpec = p));
  },
  98,
);
