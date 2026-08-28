__d(
  "composerAttachmentAreaReducer",
  [
    "CometComposerFooterAttachmentPluginTypes",
    "CometComposerPreAttachmentPluginTypes",
    "CometComposerTaggerPluginTypes",
    "cometComposerFooterAttachmentsEligibilityChecker",
    "composerCommunityQAPluginEligibilityChecker",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var r,
        o,
        a,
        i =
          (r =
            (o = n.attachmentArea) == null ? void 0 : o.activeAttachmentType) !=
          null
            ? r
            : (a = n.attachmentArea) == null
              ? void 0
              : a.previousAttachmentType,
        l = e.attachmentType;
      return t === l && l === i;
    }
    function s(t, n, r) {
      var o = r.attachmentType,
        a = r.field;
      if (!e(n, o, t)) return t;
      var i = babelHelpers.extends({}, t);
      return ((i[a] = void 0), i);
    }
    function u(t, n) {
      var a,
        i,
        l,
        s = (a = t.attachmentArea) == null ? void 0 : a.activeAttachmentType,
        u =
          (i = t.footerAttachmentArea) == null
            ? void 0
            : i.activeFooterAttachmentType,
        c =
          (l = t.preAttachmentArea) == null
            ? void 0
            : l.activePreAttachmentType;
      switch (n.type) {
        case "ACTIVATE_ATTACHMENT_TYPE": {
          if (
            n.attachmentType === "LINK" &&
            s !== "LINK" &&
            s !== "LOCATION" &&
            s != null
          )
            return t;
          if (
            ["LINK", "GET_MESSAGES", "GET_WHATSAPP_MESSAGES"].includes(
              n.attachmentType,
            )
          )
            return babelHelpers.extends({}, t, {
              attachmentArea: babelHelpers.extends({}, t.attachmentArea, {
                activeAttachmentType: n.attachmentType,
                onRemove: n.onRemove,
                previousAttachmentType:
                  (n == null ? void 0 : n.attachmentType) === "GET_MESSAGES"
                    ? s
                    : void 0,
              }),
            });
          if (
            s === n.attachmentType ||
            (s != null &&
              Object.prototype.hasOwnProperty.call(
                r("CometComposerTaggerPluginTypes"),
                n.attachmentType,
              )) ||
            (c ===
              o("CometComposerPreAttachmentPluginTypes")
                .CometComposerPreAttachmentPluginTypes.COMMUNITY_QA &&
              !o(
                "composerCommunityQAPluginEligibilityChecker",
              ).isAttachmentCompatible(n.attachmentType))
          )
            return t;
          var d =
            u != null &&
            !o("cometComposerFooterAttachmentsEligibilityChecker")
              .getCompatibleMainAttachmentTypes(u)
              .has(n.attachmentType)
              ? null
              : u;
          return (
            n.attachmentType === "MEDIA" &&
              s === "GET_MESSAGES" &&
              (d = o("CometComposerFooterAttachmentPluginTypes")
                .CometComposerFooterAttachmentPluginTypes.GET_MESSAGES),
            babelHelpers.extends({}, t, {
              attachmentArea: babelHelpers.extends({}, t.attachmentArea, {
                activeAttachmentType: n.attachmentType,
                onRemove: n.onRemove,
                previousAttachmentType: s,
              }),
              footerAttachmentArea: babelHelpers.extends(
                {},
                t.footerAttachmentArea,
                { activeFooterAttachmentType: d },
              ),
            })
          );
        }
        case "REMOVE_ATTACHMENT_TYPE": {
          var m, p, _, f;
          (n == null ? void 0 : n.attachmentType) === "GET_MESSAGES" &&
          (t.mediaAttachments || []).length > 0
            ? (f = "MEDIA")
            : (n == null ? void 0 : n.attachmentType) !== "LOCATION" &&
              ((m = t.attachmentArea) == null
                ? void 0
                : m.previousAttachmentType) === "LOCATION" &&
              (f = "LOCATION");
          var g =
            ((p = t.attachmentArea) == null
              ? void 0
              : p.activeAttachmentType) != null &&
            e(
              n,
              (_ = t.attachmentArea) == null ? void 0 : _.activeAttachmentType,
              t,
            );
          if (g) {
            var h = n.attachmentType;
            if (
              (n.attachmentType === "EVENT" ||
                n.attachmentType === "MINUTIAE") &&
              t.activityMinutiae != null
            ) {
              var y = babelHelpers.extends({}, t.activityMinutiae, {
                hideAttachment: !0,
              });
              return babelHelpers.extends({}, t, {
                activityMinutiae: y,
                attachmentArea: babelHelpers.extends({}, t.attachmentArea, {
                  activeAttachmentType: f,
                  previousAttachmentType: h,
                }),
              });
            }
            var C = t.mediaAttachments;
            return (
              n.attachmentType === "CALL_NOW" && (C = null),
              n.attachmentType === "PAID_CONTENT" && t.paidContent != null
                ? (t.mediaAttachments != null &&
                    t.mediaAttachments[0].fileType === "VIDEO" &&
                    (t.mediaAttachments || []).length >= 1 &&
                    (f = "MEDIA"),
                  babelHelpers.extends({}, t, {
                    attachmentArea: babelHelpers.extends({}, t.attachmentArea, {
                      activeAttachmentType: f,
                      previousAttachmentType: h,
                    }),
                    paidContent: void 0,
                  }))
                : babelHelpers.extends({}, t, {
                    attachmentArea: babelHelpers.extends({}, t.attachmentArea, {
                      activeAttachmentType: f,
                      previousAttachmentType: h,
                    }),
                    mediaAttachments: C,
                  })
            );
          }
        }
      }
      return t;
    }
    ((l.getCanAlterAttachmentData = e),
      (l.removeActiveAttachmentViewStateData = s),
      (l.composerAttachmentAreaReducer = u));
  },
  98,
);
