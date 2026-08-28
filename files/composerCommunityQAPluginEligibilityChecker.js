__d(
  "composerCommunityQAPluginEligibilityChecker",
  [
    "CometComposerAttachmentPluginTypes",
    "CometComposerPreAttachmentPluginTypes",
    "CometComposerTaggerPluginTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([r("CometComposerAttachmentPluginTypes").MEDIA]);
    function s(e) {
      return Object.prototype.hasOwnProperty.call(
        r("CometComposerTaggerPluginTypes"),
        e,
      );
    }
    function u(t) {
      return t == null ? !1 : e.has(t);
    }
    function c(e) {
      var t,
        n,
        r,
        a,
        i,
        l,
        c,
        m = (t = e.attachmentArea) == null ? void 0 : t.activeAttachmentType,
        p = (n = e.isEditingPreExistingStory) != null ? n : !1,
        _ =
          (r =
            (a = e.communityQAMetadata) == null
              ? void 0
              : a.isEditingPreExistingCommunityQAStory) != null
            ? r
            : !1,
        f =
          (i =
            (l = e.communityQAMetadata) == null
              ? void 0
              : l.isEditingPreExistingCommunityQAIshStory) != null
            ? i
            : !1;
      if (f) {
        var g = d();
        return (
          g.add(
            o("CometComposerPreAttachmentPluginTypes")
              .CometComposerPreAttachmentPluginTypes.COMMUNITY_QA,
          ),
          g
        );
      }
      if (p && !_)
        return new Set([
          o("CometComposerPreAttachmentPluginTypes")
            .CometComposerPreAttachmentPluginTypes.COMMUNITY_QA,
        ]);
      if (m != null && !u(m) && !s(m))
        return new Set([
          o("CometComposerPreAttachmentPluginTypes")
            .CometComposerPreAttachmentPluginTypes.COMMUNITY_QA,
        ]);
      var h =
        (c = e.preAttachmentArea) == null ? void 0 : c.activePreAttachmentType;
      return h ===
        o("CometComposerPreAttachmentPluginTypes")
          .CometComposerPreAttachmentPluginTypes.COMMUNITY_QA
        ? d()
        : new Set();
    }
    function d() {
      var e = Object.keys(r("CometComposerAttachmentPluginTypes"));
      return new Set(
        e.filter(function (e) {
          var t = u(e);
          return !s(e) && !t;
        }),
      );
    }
    ((l.COMPATIBLE_ATTACHMENT_PLUGINS = e),
      (l.isAttachmentCompatible = u),
      (l.composerCommunityQAPluginEligibilityChecker = c));
  },
  98,
);
