__d(
  "MAIBAAdObjectHoverCardUtils",
  [
    "AdsManagerDeliveryStatus",
    "AdsManagerDeliverySubstatus",
    "MAIBAAdObjectHoverCardUtils_deliveryStatusInfo.graphql",
    "RelayHooks",
    "TypeCoercionUtils",
    "getJSEnumSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = { status: "pending", substatuses: ["in_draft"], extra_data: {} },
      u = { status: "pending", substatuses: ["in_review"], extra_data: {} },
      c =
        e !== void 0
          ? e
          : (e = n("MAIBAAdObjectHoverCardUtils_deliveryStatusInfo.graphql"));
    function d(e) {
      var t,
        n = e != null ? o("RelayHooks").readInlineData(c, e) : null;
      return {
        status: o("TypeCoercionUtils").coerceNonMaybeValue(
          r("getJSEnumSafe")(
            r("AdsManagerDeliveryStatus"),
            n == null ? void 0 : n.status,
          ),
          "deliveryStatusInfo.status",
          i.id,
        ),
        substatuses: ((t = n == null ? void 0 : n.substatuses) != null
          ? t
          : []
        ).map(function (e) {
          return o("TypeCoercionUtils").coerceNonMaybeValue(
            r("getJSEnumSafe")(r("AdsManagerDeliverySubstatus"), e.id),
            "substatus.id",
            i.id,
          );
        }),
        extra_data: {},
      };
    }
    ((l.DRAFT_ASSET_DELIVERY_STATUS_INFO = s),
      (l.IN_REVIEW_ASSET_DELIVERY_STATUS_INFO = u),
      (l.MAIBAAdObjectHoverCardUtils_deliveryStatusInfo = c),
      (l.createDeliveryStatusInfo = d));
  },
  98,
);
