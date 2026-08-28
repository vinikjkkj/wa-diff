__d(
  "cometComposerFooterAttachmentsEligibilityChecker",
  [
    "CometComposerAttachmentPluginTypes",
    "CometComposerFooterAttachmentPluginTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (e) {
        case o("CometComposerFooterAttachmentPluginTypes")
          .CometComposerFooterAttachmentPluginTypes.CALL_NOW:
          return new Set([
            r("CometComposerAttachmentPluginTypes").FORMATTED_TEXT,
            r("CometComposerAttachmentPluginTypes").MEDIA,
          ]);
        case o("CometComposerFooterAttachmentPluginTypes")
          .CometComposerFooterAttachmentPluginTypes.GET_MESSAGES:
          return new Set([
            r("CometComposerAttachmentPluginTypes").FORMATTED_TEXT,
            r("CometComposerAttachmentPluginTypes").MEDIA,
          ]);
        case o("CometComposerFooterAttachmentPluginTypes")
          .CometComposerFooterAttachmentPluginTypes.FISHBOWL:
          return new Set([
            r("CometComposerAttachmentPluginTypes").ANIMATED_IMAGE,
            r("CometComposerAttachmentPluginTypes").MEDIA,
            r("CometComposerAttachmentPluginTypes").SHARE,
            r("CometComposerAttachmentPluginTypes").LOCATION,
          ]);
        case o("CometComposerFooterAttachmentPluginTypes")
          .CometComposerFooterAttachmentPluginTypes.GROUP_WELCOME_POST:
          return new Set([
            r("CometComposerAttachmentPluginTypes").FORMATTED_TEXT,
            r("CometComposerAttachmentPluginTypes").MEDIA,
            r("CometComposerAttachmentPluginTypes").SHARE,
            r("CometComposerAttachmentPluginTypes").LINK,
            r("CometComposerAttachmentPluginTypes").LOCATION,
            r("CometComposerAttachmentPluginTypes").ANIMATED_IMAGE,
            r("CometComposerAttachmentPluginTypes").FILE,
            r("CometComposerAttachmentPluginTypes").POLL,
          ]);
        case o("CometComposerFooterAttachmentPluginTypes")
          .CometComposerFooterAttachmentPluginTypes.NONPROFIT:
          return new Set([
            r("CometComposerAttachmentPluginTypes").MEDIA,
            r("CometComposerAttachmentPluginTypes").SHARE,
            r("CometComposerAttachmentPluginTypes").LOCATION,
          ]);
        case o("CometComposerFooterAttachmentPluginTypes")
          .CometComposerFooterAttachmentPluginTypes.GET_WHATSAPP_MESSAGES:
          return new Set([
            r("CometComposerAttachmentPluginTypes").FORMATTED_TEXT,
            r("CometComposerAttachmentPluginTypes").MEDIA,
          ]);
        case o("CometComposerFooterAttachmentPluginTypes")
          .CometComposerFooterAttachmentPluginTypes.EVENT:
          return new Set([r("CometComposerAttachmentPluginTypes").MEDIA]);
        default:
          return new Set(Object.keys(r("CometComposerAttachmentPluginTypes")));
      }
    }
    function s(t) {
      var n,
        r = (n = t.attachmentArea) == null ? void 0 : n.activeAttachmentType;
      return r != null
        ? new Set(
            Array.from(
              o(
                "CometComposerFooterAttachmentPluginTypes",
              ).CometComposerFooterAttachmentPluginTypes.members(),
            ).filter(function (t) {
              var n = e(t);
              return !n.has(r);
            }),
          )
        : new Set();
    }
    ((l.getCompatibleMainAttachmentTypes = e),
      (l.cometComposerFooterAttachmentsEligibilityChecker = s));
  },
  98,
);
