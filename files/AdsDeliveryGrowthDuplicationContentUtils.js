__d(
  "AdsDeliveryGrowthDuplicationContentUtils",
  [
    "StandardEventsDetails",
    "enumObjectKeys",
    "firstx",
    "isTruthy",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e === null) return null;
      var t = Object.values(r("nullthrows")(e)),
        n = new Set(
          t
            .map(function (e) {
              return e == null ? void 0 : e.custom_event_type;
            })
            .filter(function (e) {
              return e;
            }),
        );
      if (n.size !== 1) return null;
      var o = r("firstx")(n.values());
      return o == null ? null : s(o);
    }
    function s(e) {
      var t = r("enumObjectKeys")(r("StandardEventsDetails")).find(
        function (t) {
          return r("StandardEventsDetails")[t].custom_event_type === e;
        },
      );
      return r("isTruthy")(t) ? r("StandardEventsDetails")[t].name : null;
    }
    ((l.getEventNameFromPromotedObjects = e),
      (l.getEventNameFromCustomEvent = s));
  },
  98,
);
