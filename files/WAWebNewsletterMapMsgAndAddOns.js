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
            f,
            g,
            h =
              (r = e.newsletterReactionsMixin) == null
                ? void 0
                : r.reactionsReaction,
            y = (a = e.newsletterPollVotesMixin) == null ? void 0 : a.votesVote,
            C = o("WAWebNewsletterMsgUtils").mapNewsletterMsgToMsgData(
              e,
              t,
              ((i = h == null ? void 0 : h.length) != null ? i : 0) > 0,
              n,
            ),
            b =
              (l = C == null ? void 0 : C.id) != null
                ? l
                : yield s(t, e.serverId),
            v = e.newsletterViewsCountViewsOrDeprecatedMixinGroup,
            S =
              (v == null ? void 0 : v.name) === "NewsletterViewsCountViews"
                ? (u = v.value.viewsCount[0]) == null
                  ? void 0
                  : u.count
                : v == null || (c = v.value) == null
                  ? void 0
                  : c.viewsCountCount,
            R =
              (d =
                (_ = e.newsletterForwardsCountMixin) == null
                  ? void 0
                  : _.forwardsCountCount) != null
                ? d
                : 0,
            L =
              (f =
                (g = e.newsletterResponsesCountMixin) == null
                  ? void 0
                  : g.responsesCountCount) != null
                ? f
                : 0;
          return {
            msgData: C,
            reactionData: m(h, b, n),
            pollVoteData: p(y, b, n),
            id: b,
            viewCount: S,
            questionResponsesCount: L,
            forwardsCount: R,
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
