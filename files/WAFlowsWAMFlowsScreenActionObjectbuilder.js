__d(
  "WAFlowsWAMFlowsScreenActionObjectbuilder",
  ["WAFlowsLoggingUtils", "WAFlowsWAMLoggerTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
      var e,
        n = t.bizPlatform,
        r = t.businessOwnerJid,
        a = t.clickName,
        i = t.clickType,
        l = t.currentFlowId,
        s = t.currentSessionSequenceNumber,
        u = t.flowScreenData,
        c = t.flowsCurrentScreen,
        d = t.flowsCurrentScreenLayoutType,
        m = t.flowsMessageId,
        p = t.flowsNextScreen,
        _ = t.flowsNextScreenLayoutType,
        f = t.flowsSessionId,
        g = t.isTerminalScreen;
      return babelHelpers.extends(
        {
          eventName: (e = o("WAFlowsWAMLoggerTypes")).WAFlowsWAMEventNameType
            .WamFlowsScreenAction,
          code: e.WAFlowsWAMEventCodeType.WamFlowsScreenAction,
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
            name: "click_name",
            type: e.WAFlowsWAMFieldValuesTypes.STRING,
            value: a,
          },
          {
            key: 4,
            name: "click_type",
            type: e.WAFlowsWAMFieldValuesTypes.STRING,
            value: i,
          },
          {
            key: 5,
            name: "current_flow_id",
            type: e.WAFlowsWAMFieldValuesTypes.STRING,
            value: l != null ? l : "",
          },
          {
            key: 6,
            name: "current_session_sequence_number",
            type: o("WAFlowsWAMLoggerTypes").WAFlowsWAMFieldValuesTypes.STRING,
            value: s,
          },
          {
            key: 7,
            name: "flows_screen_data",
            type: o("WAFlowsWAMLoggerTypes").WAFlowsWAMFieldValuesTypes.STRING,
            value: u,
          },
          {
            key: 8,
            name: "flows_current_screen",
            type: o("WAFlowsWAMLoggerTypes").WAFlowsWAMFieldValuesTypes.STRING,
            value: c,
          },
          {
            key: 9,
            name: "flows_current_screen_layout_type",
            type: o("WAFlowsWAMLoggerTypes").WAFlowsWAMFieldValuesTypes.STRING,
            value: d,
          },
          {
            key: 10,
            name: "flows_message_id",
            type: o("WAFlowsWAMLoggerTypes").WAFlowsWAMFieldValuesTypes.STRING,
            value: m != null ? m : "",
          },
          {
            key: 11,
            name: "flows_next_screen",
            type: o("WAFlowsWAMLoggerTypes").WAFlowsWAMFieldValuesTypes.STRING,
            value: p,
          },
          {
            key: 12,
            name: "flows_next_screen_layout_type",
            type: o("WAFlowsWAMLoggerTypes").WAFlowsWAMFieldValuesTypes.STRING,
            value: _,
          },
          {
            key: 13,
            name: "flows_session_id",
            type: o("WAFlowsWAMLoggerTypes").WAFlowsWAMFieldValuesTypes.STRING,
            value: f != null ? f : "",
          },
          {
            key: 14,
            name: "is_terminal_screen",
            type: o("WAFlowsWAMLoggerTypes").WAFlowsWAMFieldValuesTypes.BOOLEAN,
            value: g,
          },
        ]),
      );
    };
    l.buildWAMFlowsScreenActionObject = e;
  },
  98,
);
