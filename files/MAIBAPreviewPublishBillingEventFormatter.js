__d(
  "MAIBAPreviewPublishBillingEventFormatter",
  [
    "AdsAPIBillingEvents",
    "AdsBillingEventStrings",
    "MAIBAPreviewPublishEnumAtomFormatter",
    "getEnumFromString",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (typeof e != "string" || e === "") return null;
      var t = r("getEnumFromString")(r("AdsAPIBillingEvents"), e);
      return t == null
        ? o("MAIBAPreviewPublishEnumAtomFormatter").formatEnumValue(e)
        : String(o("AdsBillingEventStrings").getLabel(t));
    }
    l.billingEventLabel = e;
  },
  98,
);
