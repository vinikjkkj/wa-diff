__d(
  "isAttachmentEmpty",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t, n, r;
      if (((t = e.isEmptyMetaData) == null ? void 0 : t.useIsEmpty) !== !0)
        return !1;
      if (
        ((n = e.attachmentArea) == null ? void 0 : n.activeAttachmentType) !=
        null
      ) {
        if (
          e.attachmentArea.activeAttachmentType === "MEDIA" &&
          (e.mediaAttachments == null || e.mediaAttachments.length === 0)
        )
          return !0;
        if (e.attachmentArea.activeAttachmentType !== "FORMATTED_TEXT")
          return !1;
      }
      return !(
        ((r = e.footerAttachmentArea) == null
          ? void 0
          : r.activeFooterAttachmentType) != null ||
        (e.withTagIDsTracker != null && e.withTagIDsTracker.size > 0) ||
        e.activityMinutiae != null ||
        e.locationMinutiae != null
      );
    }
    i.default = e;
  },
  66,
);
