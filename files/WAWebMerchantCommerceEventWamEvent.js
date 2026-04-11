__d(
  "WAWebMerchantCommerceEventWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumBizPlatform"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          MerchantCommerceEvent: [
            4688,
            {
              acceptedPaymentMethods: [1, e.TYPES.STRING],
              adId: [2, e.TYPES.STRING],
              appSessionId: [3, e.TYPES.STRING],
              bizPlatform: [4, o("WAWebWamEnumBizPlatform").BIZ_PLATFORM],
              commerceExperience: [6, e.TYPES.STRING],
              commerceFlowId: [20, e.TYPES.STRING],
              commerceInteractionAction: [7, e.TYPES.STRING],
              commerceInteractionActionType: [21, e.TYPES.STRING],
              commerceOrderStatus: [22, e.TYPES.STRING],
              commercePaymentStatus: [8, e.TYPES.STRING],
              commerceSessionId: [9, e.TYPES.STRING],
              commerceSurface: [10, e.TYPES.STRING],
              extraAttributes: [11, e.TYPES.STRING],
              isCtwaOriginated: [12, e.TYPES.BOOLEAN],
              isEligibleForAdSignal: [13, e.TYPES.BOOLEAN],
              merchantHasCatalog: [14, e.TYPES.BOOLEAN],
              merchantIsDiscoverable: [15, e.TYPES.BOOLEAN],
              p2mFlow: [17, e.TYPES.STRING],
              referral: [18, e.TYPES.STRING],
              sequenceId: [19, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { MerchantCommerceEvent: [] },
      );
    l.MerchantCommerceEventWamEvent = s;
  },
  98,
);
