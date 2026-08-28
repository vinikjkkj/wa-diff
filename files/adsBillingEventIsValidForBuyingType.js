__d(
  "adsBillingEventIsValidForBuyingType",
  ["AdsBillingEventConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n =
        o("AdsBillingEventConstants").VALID_EVENTS_BY_BUYING_TYPE.get(t) || [];
      return n.indexOf(e) !== -1;
    }
    l.default = e;
  },
  98,
);
