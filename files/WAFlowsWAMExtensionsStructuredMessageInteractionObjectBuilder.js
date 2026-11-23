__d(
  "WAFlowsWAMExtensionsStructuredMessageInteractionObjectBuilder",
  ["WAFlowsLoggingUtils", "WAFlowsWAMLoggerTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
      var e,
        n = t.bizPlatform,
        r = t.businessOwnerJid,
        a = t.entryPointConversationInitiated,
        i = t.entryPointConversionApp,
        l = t.entryPointConversionSource,
        s = t.flowEntryPoint,
        u = t.messageClass,
        c = t.messageClassAttributes,
        d = t.messageInteraction,
        m = t.messageMediaType;
      return babelHelpers.extends(
        {
          eventName: (e = o("WAFlowsWAMLoggerTypes")).WAFlowsWAMEventNameType
            .WamExtensionsStructuredMessageInteraction,
          code: e.WAFlowsWAMEventCodeType
            .WamExtensionsStructuredMessageInteraction,
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
            name: "message_class",
            type: e.WAFlowsWAMFieldValuesTypes.ENUM,
            value: u,
          },
          {
            key: 4,
            name: "message_class_attributes",
            type: e.WAFlowsWAMFieldValuesTypes.STRING,
            value: c,
          },
          {
            key: 5,
            name: "message_interaction",
            type: e.WAFlowsWAMFieldValuesTypes.ENUM,
            value: d,
          },
          {
            key: 6,
            name: "message_media_type",
            type: e.WAFlowsWAMFieldValuesTypes.ENUM,
            value: m,
          },
          {
            key: 7,
            name: "entry_point_conversation_initiated",
            type: e.WAFlowsWAMFieldValuesTypes.ENUM,
            value: a,
          },
          {
            key: 8,
            name: "entry_point_conversion_app",
            type: e.WAFlowsWAMFieldValuesTypes.STRING,
            value: i,
          },
          {
            key: 9,
            name: "entry_point_conversion_source",
            type: e.WAFlowsWAMFieldValuesTypes.STRING,
            value: l,
          },
          {
            key: 10,
            name: "flowEntryPoint",
            type: e.WAFlowsWAMFieldValuesTypes.ENUM,
            value: s,
          },
        ]),
      );
    };
    l.buildWAMExtensionsStructuredMessageInteractionObject = e;
  },
  98,
);
