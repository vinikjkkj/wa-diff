__d(
  "MessageUnsendabilityStatus.bs",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      if (e == null) return null;
      switch (e) {
        case "can_unsend":
          return "can_unsend";
        case "deny_blob_attachment":
          return "deny_blob_attachment";
        case "deny_for_non_sender":
          return "deny_for_non_sender";
        case "deny_log_message":
          return "deny_log_message";
        case "deny_p2p_payment":
          return "deny_p2p_payment";
        case "deny_story_reaction":
          return "deny_story_reaction";
        case "deny_tombstone_message":
          return "deny_tombstone_message";
        default:
          return null;
      }
    }
    i.fromNullableString = e;
  },
  66,
);
