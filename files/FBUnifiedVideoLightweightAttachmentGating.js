__d(
  "FBUnifiedVideoLightweightAttachmentGating",
  ["gkx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e;
      return (e = r("qex")._("5467")) != null ? e : !1;
    }
    function s(t) {
      var n = r("gkx")("15193"),
        o = e();
      switch (t) {
        case "search_results_page":
        case "homepage_stream":
        case "permalink":
        case "timeline":
          return n;
        case "group":
        case "groups_tab":
        case "groups_viewer_content_published_posts":
        case "groups_viewer_content_pending_posts":
        case "groups_viewer_content_deleted_posts":
        case "groups_viewer_content_scheduled_posts":
        case "group_pending_queue":
        case "group_report_queue":
        case "group_moderation_alert_queue":
        case "groups_modmin_review_folder":
          return o;
        default:
          return !1;
      }
    }
    ((l.shouldEnableLightweightVideoAttachmentForGroups = e),
      (l.shouldRenderLightweightVideoAttachmentForRenderLocation = s));
  },
  98,
);
