__d(
  "WAFlowsWAMExtensionsScreenProgressObjectBuilder",
  ["WAFlowsLoggingUtils", "WAFlowsWAMLoggerTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
      var e,
        n = t.bizPlatform,
        r = t.businessOwnerJid,
        a = t.clickSequenceNumber,
        i = t.embeddedError,
        l = t.embeddedFlow,
        s = t.embeddedFlowType,
        u = t.entryPointConversationInitiated,
        c = t.entryPointConversionApp,
        d = t.entryPointConversionSource,
        m = t.extensionCategory,
        p = t.extensionRestoredFromCache,
        _ = t.extensionScreenLength,
        f = t.extensionSessionId,
        g = t.extensionsFlowId,
        h = t.extensionsMessageId,
        y = t.extensionStatus,
        C = t.flowEntryPoint,
        b = t.flowStatusExit,
        v = t.hsmCategory,
        S = t.hsmTag,
        R = t.isTemplate,
        L = t.layoutType,
        E = t.screenProgress,
        k = t.sequenceNumber,
        I = t.shoppingCartItemsCount;
      return babelHelpers.extends(
        {
          eventName: (e = o("WAFlowsWAMLoggerTypes")).WAFlowsWAMEventNameType
            .WamExtensionsScreenProgress,
          code: e.WAFlowsWAMEventCodeType.WamExtensionsScreenProgress,
          channel: e.WAFlowsWAMChannelType.PRIVATE_STATS,
          psIdKey: 0,
          sampleRate: {
            sample_rate_debug: 1,
            sample_rate_beta: 1,
            sample_rate_release: 1,
            log_all_for_debug: e.WAFlowsBooleanType.FALSE,
          },
        },
        o("WAFlowsLoggingUtils").buildWAMFields([
          {
            key: 1,
            name: "biz_platform",
            type: e.WAFlowsWAMFieldValuesTypes.ENUM,
            value: n,
          },
          {
            key: 2,
            name: "business_owner_jid",
            type: e.WAFlowsWAMFieldValuesTypes.STRING,
            value: r,
          },
          {
            key: 3,
            name: "embedded_error",
            type: e.WAFlowsWAMFieldValuesTypes.STRING,
            value: i != null ? i : "",
          },
          {
            key: 4,
            name: "embedded_flow",
            type: o("WAFlowsWAMLoggerTypes").WAFlowsWAMFieldValuesTypes.STRING,
            value: l != null ? l : "",
          },
          {
            key: 5,
            name: "embedded_flow_type",
            type: o("WAFlowsWAMLoggerTypes").WAFlowsWAMFieldValuesTypes.STRING,
            value: s != null ? s : "",
          },
          {
            key: 6,
            name: "extension_category",
            type: o("WAFlowsWAMLoggerTypes").WAFlowsWAMFieldValuesTypes.STRING,
            value: m && JSON.stringify(m),
          },
          {
            key: 7,
            name: "extension_screen_length",
            type: o("WAFlowsWAMLoggerTypes").WAFlowsWAMFieldValuesTypes.FLOAT,
            value: _,
          },
          {
            key: 8,
            name: "extensions_flow_id",
            type: o("WAFlowsWAMLoggerTypes").WAFlowsWAMFieldValuesTypes.STRING,
            value: g,
          },
          {
            key: 9,
            name: "extensions_message_id",
            type: o("WAFlowsWAMLoggerTypes").WAFlowsWAMFieldValuesTypes.STRING,
            value: h,
          },
          {
            key: 10,
            name: "extensions_session_id",
            type: o("WAFlowsWAMLoggerTypes").WAFlowsWAMFieldValuesTypes.STRING,
            value: f,
          },
          {
            key: 11,
            name: "flow_status_exit",
            type: o("WAFlowsWAMLoggerTypes").WAFlowsWAMFieldValuesTypes.STRING,
            value: b,
          },
          {
            key: 12,
            name: "hsm_category",
            type: o("WAFlowsWAMLoggerTypes").WAFlowsWAMFieldValuesTypes.STRING,
            value: v,
          },
          {
            key: 13,
            name: "is_template",
            type: o("WAFlowsWAMLoggerTypes").WAFlowsWAMFieldValuesTypes.FLOAT,
            value:
              R != null
                ? R
                : o("WAFlowsWAMLoggerTypes").WAFlowsBooleanType.FALSE,
          },
          {
            key: 14,
            name: "screen_progress",
            type: o("WAFlowsWAMLoggerTypes").WAFlowsWAMFieldValuesTypes.STRING,
            value: E,
          },
          {
            key: 15,
            name: "sequence_number",
            type: o("WAFlowsWAMLoggerTypes").WAFlowsWAMFieldValuesTypes.FLOAT,
            value: k,
          },
          {
            key: 16,
            name: "hsm_tag",
            type: o("WAFlowsWAMLoggerTypes").WAFlowsWAMFieldValuesTypes.STRING,
            value: S,
          },
          {
            key: 17,
            name: "extension_restored_from_cache",
            type: o("WAFlowsWAMLoggerTypes").WAFlowsWAMFieldValuesTypes.STRING,
            value: p,
          },
          {
            key: 18,
            name: "extension_status",
            type: o("WAFlowsWAMLoggerTypes").WAFlowsWAMFieldValuesTypes.STRING,
            value: y,
          },
          {
            key: 19,
            name: "entry_point_conversation_initiated",
            type: o("WAFlowsWAMLoggerTypes").WAFlowsWAMFieldValuesTypes.ENUM,
            value: u,
          },
          {
            key: 20,
            name: "entry_point_conversion_app",
            type: o("WAFlowsWAMLoggerTypes").WAFlowsWAMFieldValuesTypes.STRING,
            value: c,
          },
          {
            key: 21,
            name: "entry_point_conversion_source",
            type: o("WAFlowsWAMLoggerTypes").WAFlowsWAMFieldValuesTypes.STRING,
            value: d,
          },
          {
            key: 23,
            name: "flow_entry_point",
            type: o("WAFlowsWAMLoggerTypes").WAFlowsWAMFieldValuesTypes.ENUM,
            value: C,
          },
          {
            key: 24,
            name: "click_sequence_number",
            type: o("WAFlowsWAMLoggerTypes").WAFlowsWAMFieldValuesTypes.FLOAT,
            value: a,
          },
          {
            key: 26,
            name: "layout_type",
            type: o("WAFlowsWAMLoggerTypes").WAFlowsWAMFieldValuesTypes.STRING,
            value: L,
          },
          {
            key: 27,
            name: "shopping_cart_items_count",
            type: o("WAFlowsWAMLoggerTypes").WAFlowsWAMFieldValuesTypes.FLOAT,
            value: I,
          },
        ]),
      );
    };
    l.buildWAMExtensionsScreenProgressObject = e;
  },
  98,
);
