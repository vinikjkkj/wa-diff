__d(
  "MAIBAV2TerminalResponseClassifier",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.hasBotResponse,
        n = e.hasConversation,
        r = e.hasPayloadErrors,
        o = e.isFinal,
        a = e.isHandoverActive;
      return r
        ? { outcome: "FAIL", reason: "graphql_payload_error" }
        : o
          ? t || (a && n)
            ? { outcome: "SUCCESS", reason: null }
            : { outcome: "FAIL", reason: "no_bot_response" }
          : {
              outcome: "FAIL",
              reason: t ? "non_final_response" : "no_bot_response",
            };
    }
    i.default = e;
  },
  66,
);
