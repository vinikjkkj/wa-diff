__d(
  "WAWebDualUploadsSendPolicy",
  ["WAWebBizBotProfileUtils", "WAWebMediaGatingUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return e.isNewsletter() || e.isBroadcast()
        ? !1
        : !e.isBot() &&
            !e.isAiHub() &&
            !o("WAWebBizBotProfileUtils").isBizBot3pBusinessProfile(t);
    }
    function s(t, n) {
      return (
        e(t, n) && o("WAWebMediaGatingUtils").isHdImageDualUploadSendEnabled()
      );
    }
    function u(e, t) {
      return (
        t.height >= e.height &&
        t.width >= e.width &&
        (t.height > e.height || t.width > e.width)
      );
    }
    ((l.canChatCarryHdImagePair = e),
      (l.isChatEligibleForHdImagePair = s),
      (l.isHdChildBetterThanParent = u));
  },
  98,
);
