__d(
  "WAWebDebugPolls",
  [
    "WALogger",
    "WANullthrows",
    "WATimeUtils",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebDBStoreMessageOrphans",
    "WAWebDebugPollFixtures",
    "WAWebFrontendMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebNewsletterCollection",
    "WAWebPollCreationUtils",
    "WAWebPollsPollVoteCollection",
    "WAWebPollsPollVoteModel",
    "WAWebPollsSendPollCreationMsgAction",
    "WAWebPollsSendPollResultSnapshotMsgAction",
    "WAWebPollsSendVoteMsgAction",
    "WAWebSendMsgChatAction",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "filterNulls",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      var t,
        n,
        a = e.autoUpdate,
        i = e.initialVotes,
        l = e.pollName,
        s = e.pollOptions,
        u =
          (t = o("WAWebChatCollection").ChatCollection.getActive()) != null
            ? t
            : r("WAWebNewsletterCollection").getActive();
      if (u == null) throw r("err")("You must open a chat first");
      var c = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        d = u.contact.id,
        m = Math.round(Date.now() / 1e3),
        p = new (r("WAWebMsgKey"))({
          fromMe: !0,
          remote: d,
          id: "fake-poll-" + m,
        }),
        _ = new (o("WAWebMsgModel").Msg)({
          id: p,
          from: c,
          to: d,
          type: o("WAWebMsgType").MSG_TYPE.POLL_CREATION,
          serverId: o("WAWebChatGetters").getIsNewsletter(u)
            ? (n = u.msgs.last()) == null
              ? void 0
              : n.serverId
            : void 0,
          t: m,
          ack: 1,
          pollName: l,
          pollOptions: s.map(function (e, t) {
            return { name: e, localId: t };
          }),
          pollSelectableOptionsCount: s.length - 1,
        });
      u.msgs.add(_);
      for (var f = 0; f < i; f++) {
        var g = "fake-poll-" + (m + Math.random().toString());
        o("WAWebPollsPollVoteCollection").PollVoteCollection.add(
          new (o("WAWebPollsPollVoteModel").PollVote)({
            id: g,
            msgKey: new (r("WAWebMsgKey"))({ fromMe: !0, remote: d, id: g }),
            parentMsgKey: p,
            selectedOptionLocalIds: [L(0, s.length - 1)],
            senderTimestampMs: Date.now(),
            sender: c,
          }),
        );
      }
      if (a) {
        var h = self.setInterval(function () {
          var e = "fake-poll-" + (m + Math.random().toString());
          o("WAWebPollsPollVoteCollection").PollVoteCollection.add(
            new (o("WAWebPollsPollVoteModel").PollVote)({
              id: e,
              msgKey: new (r("WAWebMsgKey"))({ fromMe: !1, remote: d, id: e }),
              parentMsgKey: p,
              selectedOptionLocalIds: [L(0, s.length - 1)],
              senderTimestampMs: Date.now(),
              sender: c,
            }),
          );
        }, 1e3);
        self.setTimeout(function () {
          self.clearInterval(h);
        }, 6e4);
      }
    }
    function m(e) {
      (e === void 0 && (e = 4),
        d({
          pollName: "What do we want to have for dinner tomorrow?",
          pollOptions: ["Pizza", "Sushi", "Tacos", "Pasta", "Burgers"],
          autoUpdate: !1,
          initialVotes: e,
        }));
    }
    ((m.doc = "Add a fake poll message locally. (Used for debugging view.)"),
      (m.paramsToExecute = []));
    function p() {
      d({
        pollName: o("WAWebDebugPollFixtures").question,
        pollOptions: ["Pizza", "Sushi", "Tacos", "Pasta", "Burgers"],
        autoUpdate: !1,
        initialVotes: 4,
      });
    }
    ((p.doc =
      "Add a fake poll message locally with large question and options. (Used for debugging view.)"),
      (p.paramsToExecute = []));
    function _() {
      d({
        pollName: "What do we want to have for dinner tomorrow?",
        pollOptions: ["Pizza", "Sushi", "Tacos", "Pasta", "Burgers"],
        autoUpdate: !0,
        initialVotes: 0,
      });
    }
    ((_.doc =
      "Add a fake poll message locally with results constantly updating. (Used for debugging view.)"),
      (_.paramsToExecute = []));
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new (r("WAWebMsgKey"))({
              id: "key",
              remote: o("WAWebWidFactory").createWid("23456@c.us"),
              fromMe: !0,
            }),
            n = babelHelpers.extends(
              {
                id: new (r("WAWebMsgKey"))({
                  id: yield r("WAWebMsgKey").newId(),
                  remote: o("WAWebWidFactory").createWid("23456@c.us"),
                  fromMe: !0,
                }),
                t: o("WATimeUtils").unixTime(),
                type: o("WAWebMsgType").MSG_TYPE.POLL_UPDATE,
                subtype: "poll_vote",
                addonEncrypted: !0,
                encPollVote: {
                  encIv: new ArrayBuffer(8),
                  encPayload: new ArrayBuffer(8),
                },
                senderTimestampMs: o("WATimeUtils").unixTimeMs(),
                pollUpdateParentKey: t,
              },
              e,
            );
          yield o("WAWebDBStoreMessageOrphans").storeMessageOrphans(
            [n],
            function (e) {
              return e.pollUpdateParentKey;
            },
          );
        })),
        g.apply(this, arguments)
      );
    }
    var h = new WeakMap();
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = o("WAWebChatCollection").ChatCollection.getActive();
          if (n == null) {
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "You must have a chat active to use this command.",
                ])),
            );
            return;
          }
          var a = h.get(n);
          if (a == null) {
            var i = {
              name: "What should we have for dinner?",
              options: [
                { name: "Pizza" },
                { name: "Tacos" },
                { name: "Sushi" },
              ],
              selectableOptionsCount: 0,
              contentType: "TEXT",
              pollType: "POLL",
            };
            ((a = yield o(
              "WAWebPollsSendPollCreationMsgAction",
            ).createPollCreationMsgData({ poll: i, chat: n })),
              h.set(n, a));
          }
          var l = r("WANullthrows")(a.pollOptions),
            s =
              t != null
                ? t
                : r("filterNulls")(
                    Array.from(l.keys(), function (e) {
                      return e === 0 || Math.random() > 5 ? e : null;
                    }),
                  ),
            u = r("WANullthrows")(
              o("WAWebFrontendMsgGetters").getAsPollCreation(
                new (o("WAWebMsgModel").Msg)(a),
              ),
            );
          yield o("WAWebPollsSendVoteMsgAction").sendVote(u, new Set(s));
        })),
        C.apply(this, arguments)
      );
    }
    y.doc =
      "Send a poll vote before sending the corresponding poll. After calling this, you can send the poll by calling `sendPollForOrphanPollVotes()`. The vote will be for random options, but always include the first (Pizza).";
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebChatCollection").ChatCollection.getActive();
          if (e == null) {
            o("WALogger").ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "You must have a chat active to use this command.",
                ])),
            );
            return;
          }
          var t = h.get(e);
          if (t == null) {
            o("WALogger").ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "No early votes. Call Debug.sendOrphanPollVote() first",
                ])),
            );
            return;
          }
          (h.delete(e),
            yield o("WAWebSendMsgChatAction").addAndSendMsgToChat(e, t));
        })),
        v.apply(this, arguments)
      );
    }
    b.doc = "Send the poll for all queued orphan votes.";
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e,
            t =
              (e = o("WAWebChatCollection").ChatCollection.getActive()) != null
                ? e
                : r("WAWebNewsletterCollection").getActive();
          if (t == null) {
            o("WALogger").ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "You must have a chat active to use this command.",
                ])),
            );
            return;
          }
          yield o(
            "WAWebPollsSendPollResultSnapshotMsgAction",
          ).sendPollResultSnapshotMsg({
            pollResultSnapshot: {
              name: "Test Poll",
              pollVotesSnapshot: {
                pollVotes: [
                  {
                    option: { name: "Option 1", localId: 0 },
                    optionVoteCount: L(1, 100),
                  },
                  {
                    option: { name: "Option 2", localId: 1 },
                    optionVoteCount: L(100, 1e3),
                  },
                  {
                    option: { name: "Option 3", localId: 2 },
                    optionVoteCount: L(1e4, 1e6),
                  },
                ],
              },
            },
            chat: t,
            pollType: o("WAWebPollCreationUtils").PollType.POLL,
          });
        })),
        R.apply(this, arguments)
      );
    }
    S.doc = "Send a poll result snapshot message";
    function L(e, t) {
      return Math.floor(Math.random() * (t - e + 1) + e);
    }
    var E = {
      addFakePollHelper: d,
      addFakePoll: m,
      addFakePollMaxLength: p,
      addFakePollWithAutoUpdates: _,
      storePollVoteOrphanRecord: f,
      sendOrphanPollVote: y,
      sendPollForOrphanPollVotes: b,
      sendPollResultSnapshot: S,
      PollVoteCollection: o("WAWebPollsPollVoteCollection").PollVoteCollection,
    };
    l.default = E;
  },
  98,
);
