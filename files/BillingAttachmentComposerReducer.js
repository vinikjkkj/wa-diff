__d(
  "BillingAttachmentComposerReducer",
  ["composerAttachmentAreaReducer"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n, r, a, i, l, s;
      switch (t.type) {
        case "REMOVE_UPLOAD_FILE_MULTI_ATTACHMENT":
          if (
            ((n = e.workMultiAttachments) == null
              ? void 0
              : n.attachments.size) === 0 &&
            e.mediaAttachments != null &&
            ((r = e.mediaAttachments) == null ? void 0 : r.length) > 0
          )
            return o(
              "composerAttachmentAreaReducer",
            ).composerAttachmentAreaReducer(e, {
              attachmentType: "MEDIA",
              type: "ACTIVATE_ATTACHMENT_TYPE",
            });
          break;
        case "REMOVE_ATTACHMENT_TYPE":
          if (
            (e.mediaAttachments == null ||
              ((a = e.mediaAttachments) == null ? void 0 : a.length) === 0) &&
            e.workMultiAttachments != null &&
            ((i = e.workMultiAttachments) == null
              ? void 0
              : i.attachments.size) > 0
          )
            return o(
              "composerAttachmentAreaReducer",
            ).composerAttachmentAreaReducer(e, {
              attachmentType: "WORK_MULTI_ATTACHMENTS",
              type: "ACTIVATE_ATTACHMENT_TYPE",
            });
          break;
        default:
          return e;
      }
      return (e.mediaAttachments == null ||
        ((l = e.mediaAttachments) == null ? void 0 : l.length) === 0) &&
        (e.workMultiAttachments == null ||
          ((s = e.workMultiAttachments) == null
            ? void 0
            : s.attachments.size) === 0)
        ? babelHelpers.extends(
            {
              attachmentArea: babelHelpers.extends(
                { activeAttachmentType: void 0 },
                e.attachmentArea,
              ),
            },
            e,
          )
        : e;
    }
    function s(t, n) {
      return e(t, n);
    }
    l.default = s;
  },
  98,
);
