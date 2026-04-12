__d(
  "WAWebAddOnBubblesContainerConditions",
  [
    "WAWebAddOnBubbleType",
    "WAWebDisplayType",
    "WAWebMsgActionCapability",
    "WAWebMsgKey",
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
      return (
        t === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER &&
        n !== o("WAWebAddOnBubbleType").AddOnBubbleType.MEDIA_VIEWER &&
        e != null &&
        o("WAWebMsgActionCapability").canForwardMsg(e) &&
        o("WAWebNewsletterGatingUtils").isNewsletterQuickForwardingEnabled()
      );
    }
    ((l.useHasCommentsBubble = e),
      (l.hasHiddenSenderReactions = s),
      (l.getHasForwardBubble = u));
  },
  98,
);
