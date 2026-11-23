__d(
  "getMaibaQPLPointNameFromStreamingState",
  [],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (e) {
        case "CLIENT_INIT":
          return "initiating_client";
        case "INIT":
          return "ack_from_server_displayed";
        case "STREAMING":
          return "first_token_received";
        case "LLM_DONE":
          return "final_token_received";
        case "SEARCHING":
          return "searching";
        case "ERROR":
          return "error_received";
        case "CLIENT_STOP":
          return "client_stop_received";
        case "MAKING_TITLE":
          return "renaming_chat_title";
        case "OVERALL_DONE":
          return "final_token_displayed";
        default:
          return null;
      }
    }
    l.default = e;
  },
  98,
);
