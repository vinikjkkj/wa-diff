__d(
  "WAFlowsWAMLoggerTypes",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = Object.freeze({
        FLOW_SUCCESS: "flow_success",
        FLOW_ERROR: "flow_error",
        USER_INTERRUPTED: "user_interrupted",
      }),
      l = Object.freeze({
        PAYMENTS: "payments",
        CART: "cart",
        CATALOG: "catalog",
      }),
      s = Object.freeze({ BOOLEAN: 1, LONG: 2, FLOAT: 3, STRING: 4, ENUM: 5 }),
      u = Object.freeze({ REGULAR: 0, REAL_TIME: 1, PRIVATE_STATS: 2 }),
      c = Object.freeze({
        WamExtensionsStructuredMessageInteraction:
          "WamEventExtensionsStructuredMessageInteraction",
        WamExtensionsScreenProgress: "WamEventExtensionScreenProgress",
        WamFlowsScreenAction: "WamEventFlowsScreenAction",
      }),
      d = Object.freeze({
        WamExtensionsStructuredMessageInteraction: 4114,
        WamExtensionsScreenProgress: 4112,
        WamFlowsScreenAction: 5980,
      }),
      m = Object.freeze({
        1: "1|unknown",
        2: "2|smb",
        3: "3|ent",
        4: "4|cloudapi",
      }),
      p = Object.freeze({
        0: "0|business_initiated",
        1: "1|consumer_initiated",
        2: "2|no_messages_last_24h",
      }),
      _ = Object.freeze({ 0: "0|message_cta", 1: "1|biz_card_cta" }),
      f = Object.freeze({ FALSE: 0, TRUE: 1 });
    ((i.WAFlowsWAMExtensionsScreenProgressFlowStatusTypes = e),
      (i.WAFlowsWAMFieldValuesTypes = s),
      (i.WAFlowsWAMChannelType = u),
      (i.WAFlowsWAMEventNameType = c),
      (i.WAFlowsWAMEventCodeType = d),
      (i.WAFlowsWAMEventBusinessPlatformType = m),
      (i.WAFlowsWAMEventEntryPointConversationInitiatedType = p),
      (i.WAFlowsWAMEventFlowEntryPointType = _),
      (i.WAFlowsBooleanType = f));
  },
  66,
);
