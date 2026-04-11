__d(
  "RelayRTIUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e === "group_post_deletion_subscribe" ||
        e === "group_comment_delete_subscribe" ||
        e === "group_post_creation_subscribe" ||
        e === "group_post_edit_subscribe" ||
        e === "group_comment_edit_subscribe" ||
        e === "group_comment_creation_subscribe"
        ? "resumption_lwg_subscription"
        : null;
    }
    i.experimentPegasusResumptionGroup = e;
  },
  66,
);
