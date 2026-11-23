__d(
  "WAWebAddOnBubblesContainerConditions",
  [
    "WAWebAddOnBubbleType",
    "WAWebDisplayType",
    "WAWebMessageAssociation.flow",
    "WAWebMsgActionCapability",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "useWAWebCommentMessages",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("useWAWebCommentMessages").useHydrateAndAggregateComments([
        r("WAWebMsgKey").from(e[0]),
      ]);
      return t.length > 0;
    }
    function s(e, t) {
      return e === 0 || !t;
    }
    function u(e, t, n) {
      if (e.length === 0) return null;
      var r =
        t === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER &&
        n !== o("WAWebAddOnBubbleType").AddOnBubbleType.MEDIA_VIEWER &&
        o("WAWebNewsletterGatingUtils").isNewsletterQuickForwardingEnabled();
      if (!r) return null;
      var a = null;
      if (e.length === 1) a = o("WAWebMsgCollection").MsgCollection.get(e[0]);
      else {
        var i = o("WAWebMsgCollection").MsgCollection.get(e[0]);
        if ((i == null ? void 0 : i.type) === o("WAWebMsgType").MSG_TYPE.ALBUM)
          a = i;
        else if (
          (i == null ? void 0 : i.associationType) ===
          o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_ALBUM
        ) {
          var l = i == null ? void 0 : i.parentMsgKey;
          a = l && o("WAWebMsgCollection").MsgCollection.get(l);
        }
      }
      return a && o("WAWebMsgActionCapability").canForwardMsg(a) ? a : null;
    }
    ((l.useHasCommentsBubble = e),
      (l.hasHiddenSenderReactions = s),
      (l.getForwardBubbleTargetMsg = u));
  },
  98,
);
