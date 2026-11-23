__d(
  "WAWebNewsletterMapMsgAndAddOns",
  [
    "WAWebBackendApi",
    "WAWebNewsletterDBUtils",
    "WAWebNewsletterMsgUtils",
    "WAWebPollOptionHashUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = await o("WAWebBackendApi").frontendSendAndReceive(
        "findMsgKeyFromServerId",
        { from: e, serverId: t },
      );
      if (n != null) return Promise.resolve(n);
      var r = await o("WAWebNewsletterDBUtils").getMessageByServerId(
        t,
        e.toJid(),
      );
      return r == null ? void 0 : r.id;
    }
    async function s(t, n, r) {
      var a,
        i,
        l,
        s,
        d,
        m,
        p,
        _,
        f =
          (a = t.newsletterReactionsMixin) == null
            ? void 0
            : a.reactionsReaction,
        g = (i = t.newsletterPollVotesMixin) == null ? void 0 : i.votesVote,
        h = o("WAWebNewsletterMsgUtils").mapNewsletterMsgToMsgData({
          from: n,
          hasReaction:
            ((l = f == null ? void 0 : f.length) != null ? l : 0) > 0,
          lastUpdateFromServerTs: r,
          message: t,
        }),
        y =
          (s = h == null ? void 0 : h.id) != null ? s : await e(n, t.serverId),
        C = o("WAWebNewsletterMsgUtils").getNewsletterViewCount(
          t.newsletterViewsCountViewsOrDeprecatedMixinGroup,
        ),
        b =
          (d =
            (m = t.newsletterForwardsCountMixin) == null
              ? void 0
              : m.forwardsCountCount) != null
            ? d
            : 0,
        v =
          (p =
            (_ = t.newsletterResponsesCountMixin) == null
              ? void 0
              : _.responsesCountCount) != null
            ? p
            : 0;
      return {
        msgData: h,
        reactionData: u(f, y, r),
        pollVoteData: c(g, y, r),
        id: y,
        viewCount: C,
        questionResponsesCount: v,
        forwardsCount: b,
      };
    }
    function u(e, t, n) {
      return t != null && e != null && e.length > 0
        ? {
            parentMsgKey: t,
            serverTimestamp: n,
            emojiCountMap: e.reduce(function (e, t) {
              return e.set(t.code, t.count);
            }, new Map()),
          }
        : null;
    }
    function c(e, t, n) {
      return t == null || e == null || e.length === 0
        ? null
        : {
            parentMsgKey: t,
            serverTimestamp: n,
            voteCountMap: e.reduce(function (e, t) {
              return e.set(
                o("WAWebPollOptionHashUtils").bufferToHex(t.elementValue),
                t.count,
              );
            }, new Map()),
          };
    }
    l.mapMsgAndAddOns = s;
  },
  98,
);
