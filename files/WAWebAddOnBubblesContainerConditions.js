__d(
  "WAWebAddOnBubblesContainerConditions",
  [
    "WAWebAddOnBubbleType",
    "WAWebDisplayType",
    "WAWebMsgActionCapability",
    "WAWebMsgKey",
    "WAWebNewsletterGatingUtils",
    "react-compiler-runtime",
    "useWAWebCommentMessages",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("react-compiler-runtime").c(4),
        n;
      t[0] !== e[0]
        ? ((n = r("WAWebMsgKey").from(e[0])), (t[0] = e[0]), (t[1] = n))
        : (n = t[1]);
      var a;
      t[2] !== n ? ((a = [n]), (t[2] = n), (t[3] = a)) : (a = t[3]);
      var i = o("useWAWebCommentMessages").useHydrateAndAggregateComments(a);
      return i.length > 0;
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
