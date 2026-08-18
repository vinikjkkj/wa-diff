__d(
  "WAWebNewsletterMapMsgAndAddOns",
  [
    "Promise",
    "WAWebBackendApi",
    "WAWebNewsletterDBUtils",
    "WAWebNewsletterMsgUtils",
    "WAWebPollOptionHashUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a = yield o("WAWebBackendApi").frontendSendAndReceive(
            "findMsgKeyFromServerId",
            { from: t, serverId: r },
          );
          if (a != null) return (e || (e = n("Promise"))).resolve(a);
          var i = yield o("WAWebNewsletterDBUtils").getMessageByServerId(
            r,
            t.toJid(),
          );
          return i == null ? void 0 : i.id;
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r,
            a,
            i,
            l,
            u,
            c,
            d,
            _,
            f =
              (r = e.newsletterReactionsMixin) == null
                ? void 0
                : r.reactionsReaction,
            g = (a = e.newsletterPollVotesMixin) == null ? void 0 : a.votesVote,
            h = o("WAWebNewsletterMsgUtils").mapNewsletterMsgToMsgData({
              from: t,
              hasReaction:
                ((i = f == null ? void 0 : f.length) != null ? i : 0) > 0,
              lastUpdateFromServerTs: n,
              message: e,
            }),
            y =
              (l = h == null ? void 0 : h.id) != null
                ? l
                : yield s(t, e.serverId),
            C = o("WAWebNewsletterMsgUtils").getNewsletterViewCount(
              e.newsletterViewsCountViewsOrDeprecatedMixinGroup,
            ),
            b =
              (u =
                (c = e.newsletterForwardsCountMixin) == null
                  ? void 0
                  : c.forwardsCountCount) != null
                ? u
                : 0,
            v =
              (d =
                (_ = e.newsletterResponsesCountMixin) == null
                  ? void 0
                  : _.responsesCountCount) != null
                ? d
                : 0;
          return {
            msgData: h,
            reactionData: m(f, y, n),
            pollVoteData: p(g, y, n),
            id: y,
            viewCount: C,
            questionResponsesCount: v,
            forwardsCount: b,
          };
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t, n) {
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
    function p(e, t, n) {
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
    l.mapMsgAndAddOns = c;
  },
  98,
);
