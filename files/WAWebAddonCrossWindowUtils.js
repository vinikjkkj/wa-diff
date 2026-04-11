__d(
  "WAWebAddonCrossWindowUtils",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      return e.realType != null
        ? e.realType
        : e.revokeAddonType != null
          ? e.revokeAddonType
          : e.type;
    }
    function l(t) {
      return t.type === e(t);
    }
    function s(t) {
      var n = e(t);
      switch (n) {
        case "pin_message":
        case "reaction":
        case "reaction_enc":
        case "comment":
        case "event_edit_encrypted":
        case "poll_edit_encrypted":
        case "poll_add_option_encrypted":
        case "event_response":
        case "poll_update":
        case "newsletter_question_response":
        case "message_edit_encrypted":
          return !0;
        case "keep_in_chat":
        case "unknown":
          return !1;
        default:
          return !1;
      }
    }
    ((i.getAddonProcessorType = e),
      (i.isRealAddonType = l),
      (i.isInfraSupportedAddon = s));
  },
  66,
);
