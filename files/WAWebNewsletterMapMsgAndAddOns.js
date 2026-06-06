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
        f,
        g,
        h =
          (a = t.newsletterReactionsMixin) == null
            ? void 0
            : a.reactionsReaction,
        y = (i = t.newsletterPollVotesMixin) == null ? void 0 : i.votesVote,
        C = o("WAWebNewsletterMsgUtils").mapNewsletterMsgToMsgData(
          t,
          n,
          ((l = h == null ? void 0 : h.length) != null ? l : 0) > 0,
          r,
        ),
        b =
          (s = C == null ? void 0 : C.id) != null ? s : await e(n, t.serverId),
        v = t.newsletterViewsCountViewsOrDeprecatedMixinGroup,
        S =
          (v == null ? void 0 : v.name) === "NewsletterViewsCountViews"
            ? (d = v.value.viewsCount[0]) == null
              ? void 0
              : d.count
            : v == null || (m = v.value) == null
              ? void 0
              : m.viewsCountCount,
        R =
          (p =
            (_ = t.newsletterForwardsCountMixin) == null
              ? void 0
              : _.forwardsCountCount) != null
            ? p
            : 0,
        L =
          (f =
            (g = t.newsletterResponsesCountMixin) == null
              ? void 0
              : g.responsesCountCount) != null
            ? f
            : 0;
      return {
        msgData: C,
        reactionData: u(h, b, r),
        pollVoteData: c(y, b, r),
        id: b,
        viewCount: S,
        questionResponsesCount: L,
        forwardsCount: R,
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
