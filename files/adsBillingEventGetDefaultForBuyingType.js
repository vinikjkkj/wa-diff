__d(
  "adsBillingEventGetDefaultForBuyingType",
  ["AdsBillingEventConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("AdsBillingEventConstants").VALID_EVENTS_BY_BUYING_TYPE.get(e);
      return !t || !t.length ? null : t[0];
    }
    l.default = e;
  },
  98,
);
