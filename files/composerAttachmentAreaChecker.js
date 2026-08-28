__d(
  "composerAttachmentAreaChecker",
  ["CometComposerAttachmentPluginTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n, o, a, i, l, s, u;
      if (
        (t == null || (n = t.attachmentArea) == null
          ? void 0
          : n.activeAttachmentType) ===
        r("CometComposerAttachmentPluginTypes").FORMATTED_TEXT
      )
        return "UNCHANGED";
      if (
        (e == null || (o = e.attachmentArea) == null
          ? void 0
          : o.activeAttachmentType) != null &&
        (t == null || (a = t.attachmentArea) == null
          ? void 0
          : a.activeAttachmentType) == null
      )
        return "DELETED";
      if (
        (e == null || (i = e.attachmentArea) == null
          ? void 0
          : i.activeAttachmentType) !==
          (t == null || (l = t.attachmentArea) == null
            ? void 0
            : l.activeAttachmentType) &&
        ((t.mediaAttachments || []).length !== 0 ||
          ((s = t.fileAttachment) == null ? void 0 : s.file) != null)
      )
        return "UPDATED";
      if (
        (t == null || (u = t.attachmentArea) == null
          ? void 0
          : u.activeAttachmentType) ===
        r("CometComposerAttachmentPluginTypes").WORK_MULTI_ATTACHMENTS
      ) {
        var c, d, m, p;
        if (
          (e == null ||
          (c = e.workMultiAttachments) == null ||
          (c = c.attachments) == null
            ? void 0
            : c.size) !==
            (t == null ||
            (d = t.workMultiAttachments) == null ||
            (d = d.attachments) == null
              ? void 0
              : d.size) ||
          (e == null || (m = e.workMultiAttachments) == null
            ? void 0
            : m.attachments) !==
            (t == null || (p = t.workMultiAttachments) == null
              ? void 0
              : p.attachments)
        )
          return "UPDATED";
      }
      return "UNCHANGED";
    }
    l.default = e;
  },
  98,
);
