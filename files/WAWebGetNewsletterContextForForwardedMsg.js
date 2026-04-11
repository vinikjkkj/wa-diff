__d(
  "WAWebGetNewsletterContextForForwardedMsg",
  [
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNewsletterMetadataCollection",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t, n;
      if (e.forwardedNewsletterMessageInfo != null)
        return e.forwardedNewsletterMessageInfo;
      if (o("WAWebMsgGetters").getIsNewsletterMsg(e)) {
        var a = e.id.remote,
          i = r("WAWebNewsletterMetadataCollection").get(a);
        return {
          newsletterId: o("WAWebWidFactory").asNewsletterWidOrThrow(a),
          newsletterName: i == null ? void 0 : i.name,
          serverMessageId: (t = e.serverId) != null ? t : void 0,
          profileName: (n = e.newsletterAdminProfile) == null ? void 0 : n.name,
        };
      }
    }
    function s(e) {
      var t = e.destination,
        n = e.forwardable,
        r = e.isOriginalMsgForwarded,
        a = e.isQuestionOrQuestionReply,
        i = e.source;
      return t.isNewsletter() &&
        t.equals(i) &&
        !r &&
        n.type !== o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT &&
        !a
        ? babelHelpers.extends({}, n, {
            isForwarded: !1,
            forwardedNewsletterMessageInfo: void 0,
            forwardingScore: void 0,
          })
        : n;
    }
    ((l.getNewsletterContextForForwardedMsg = e),
      (l.maybeStripNewsletterForwardMetadata = s));
  },
  98,
);
