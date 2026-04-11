__d(
  "WAWebHandleNewsletterMsgAddOns",
  [
    "Promise",
    "WAAckLevel",
    "WAWebBackendApi",
    "WAWebCRUDOperationsNewsletterMyVotes",
    "WAWebDBCreateOrUpdateReactions",
    "WAWebNewsletterDBUtils",
    "WAWebPollOptionHashUtils",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, r) {
      switch (t.type) {
        case "reaction":
          return u(t);
        case "poll_update":
          return d(t, r);
        default:
          return (e || (e = n("Promise"))).resolve();
      }
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.from,
            n = e.id,
            r = e.reactionText,
            a = e.serverId,
            i = e.t;
          if (!(a == null || i == null || t == null || r == null)) {
            var l = {
              msgKey: n.toString(),
              parentMsgKey: o("WAWebNewsletterDBUtils")
                .craftNewsletterMsgKeyFromServerId(a, t)
                .toString(),
              senderUserJid: o("WAWebUserPrefsMeUser")
                .getMePnUserOrThrow_DO_NOT_USE()
                .toString(),
              reactionText: r,
              timestamp: i * 1e3,
              orphan: 0,
              read: !0,
              ack: o("WAAckLevel").ACK.SENT,
            };
            yield o("WAWebDBCreateOrUpdateReactions").createOrUpdateReactions([
              l,
            ]);
            var s = yield o("WAWebNewsletterDBUtils").getMessageByServerId(
              a,
              t.toJid(),
            );
            s != null &&
              (yield o("WAWebBackendApi").frontendFireAndForget(
                "updateChatPreviewFromReaction",
                { reactionMsgObj: l, parentMsgKey: s.id },
              ));
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.from,
            r = e.id,
            a = e.selectedOptionLocalIds,
            i = e.serverId,
            l = e.t,
            s = t.pollVotes;
          if (!(i == null || l == null || n == null || s == null)) {
            var u = {
              chatJid: r.remote.toJid(),
              msgServerId: i,
              msgKey: e.id.toString(),
              serverTimestampMs: l * 1e3,
              t: l,
              votes: s.map(o("WAWebPollOptionHashUtils").bufferToHex),
            };
            yield o(
              "WAWebCRUDOperationsNewsletterMyVotes",
            ).createOrUpdateMyVote(u);
            var c = yield o("WAWebNewsletterDBUtils").getMessageByServerId(
              i,
              n.toJid(),
            );
            c != null &&
              (yield o("WAWebBackendApi").frontendFireAndForget(
                "updateChatPreviewFromVote",
                {
                  voteMsgObj: {
                    ack: o("WAAckLevel").ACK.SENT,
                    read: !0,
                    msgKey: e.id,
                    parentMsgKey: c.id,
                    selectedOptionLocalIds: a != null ? a : [],
                    sender: o(
                      "WAWebUserPrefsMeUser",
                    ).getMePnUserOrThrow_DO_NOT_USE(),
                    senderTimestampMs: l * 1e3,
                    t: l,
                  },
                  parentMsgKey: c.id,
                },
              ));
          }
        })),
        m.apply(this, arguments)
      );
    }
    l.maybeHandleNewsletterMsgAddOns = s;
  },
  98,
);
