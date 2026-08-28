__d(
  "RpGenaiSctpCaptionsGenAIBotStateCoreTypes",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum")({
        AMBIENT: 1,
        LISTENING: 2,
        THINKING: 3,
        RESPONDING: 4,
      }),
      l = n("$InternalEnum")({
        UNKNOWN: 0,
        UNIFIED_RESPONSE: 1,
        GRAPHQL_JSON: 2,
        CLIPPY_CLIENT_TOOL_REQUEST: 3,
      });
    a.exports = { BotStateType: e, StandardizedResponseType: l };
  },
  null,
);
