__d(
  "MessageThreadUnsendabilityStatus.bs",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      if (e == null) return null;
      switch (e) {
        case "can_unsend":
          return "can_unsend";
        case "deny_for_specific_ids":
          return "deny_for_specific_ids";
        case "deny_if_cannot_load_thread":
          return "deny_if_cannot_load_thread";
        case "deny_if_marketplace_thread":
          return "deny_if_marketplace_thread";
        case "deny_if_page_thread":
          return "deny_if_page_thread";
        case "deny_if_thread_contains_pau":
          return "deny_if_thread_contains_pau";
        default:
          return null;
      }
    }
    i.fromNullableString = e;
  },
  66,
);
