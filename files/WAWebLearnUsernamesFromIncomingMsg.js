__d(
  "WAWebLearnUsernamesFromIncomingMsg",
  [
    "WALogger",
    "WAWebHandleMsgTypes",
    "WAWebInsertUsernameChangeSystemMsg",
    "WAWebSetUsernameJob",
    "WAWebUsernameGatingUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      if (!o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) return [];
      var n = (function (n) {
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          "type" in n &&
          n.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.GROUP
        )
          return [
            o("WAWebSetUsernameJob").maybeCreateSetUsernameInfoJobArg({
              userId: o("WAWebWidFactory").asUserWidOrThrow(e.author),
              username: e.participantUsername,
            }),
          ];
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          "type" in n &&
          n.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.PEER_BROADCAST &&
          "bclParticipants" in n
        ) {
          var r = n.bclParticipants;
          return r.map(d);
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          "type" in n &&
          n.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.OTHER_BROADCAST
        )
          return [m(e)];
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          "type" in n &&
          (n.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.CHAT ||
            n.type ===
              o("WAWebHandleMsgTypes").MESSAGE_TYPE.DIRECT_PEER_STATUS ||
            n.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.OTHER_STATUS)
        )
          return t == null ? p(e) : g(t);
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            n,
        );
      })(e);
      return n.filter(Boolean);
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var n = yield o("WAWebSetUsernameJob").setUsernamesJob(t);
            yield o(
              "WAWebInsertUsernameChangeSystemMsg",
            ).maybeInsertUsernameChangeSystemMsgs(t, n, "handleMsg");
          } catch (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "handleMsg: failed to learn usernames",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .tags("messaging", "username")
              .sendLogs("handle-msg-username-learning-failed");
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      var t;
      return o("WAWebSetUsernameJob").maybeCreateSetUsernameInfoJobArg({
        userId: o("WAWebWidFactory").asUserWidOrThrow(
          (t = e.peerRecipientLid) != null ? t : e.wid,
        ),
        username: e.peerRecipientUsername,
      });
    }
    function m(e) {
      var t,
        n =
          e.participantLid || ((t = e.participant) != null && t.isLid())
            ? e.participant
            : null;
      return n
        ? o("WAWebSetUsernameJob").maybeCreateSetUsernameInfoJobArg({
            userId: o("WAWebWidFactory").asUserWidOrThrow(n),
            username: e.participantUsername,
          })
        : null;
    }
    function p(e) {
      return [
        _(e, o("WAWebWidFactory").asUserWidOrThrow(e.author)),
        o("WAWebSetUsernameJob").maybeCreateSetUsernameInfoJobArg({
          userId: f(e),
          username: e.peerRecipientUsername,
        }),
      ];
    }
    function _(e, t) {
      if (e.username == null && e.senderPn != null && t.isLid()) {
        var n;
        return {
          userId: t,
          deleteUsername: !0,
          usernameCountryCode: (n = e.senderCountryCode) != null ? n : void 0,
        };
      }
      return o("WAWebSetUsernameJob").maybeCreateSetUsernameInfoJobArg({
        userId: t,
        username: e.username,
        usernameCountryCode: e.senderCountryCode,
      });
    }
    function f(e) {
      if (e.peerRecipientLid)
        return o("WAWebWidFactory").asUserWidOrThrow(e.peerRecipientLid);
      if (e.chat.isLid()) return o("WAWebWidFactory").asUserWidOrThrow(e.chat);
    }
    function g(e) {
      var t, n;
      return [
        e.usernameInfoUpdate,
        o("WAWebSetUsernameJob").maybeCreateSetUsernameInfoJobArg({
          userId: (t = e.peerRecipientUsernameInfo) == null ? void 0 : t.userId,
          username:
            (n = e.peerRecipientUsernameInfo) == null ? void 0 : n.username,
        }),
      ];
    }
    ((l.collectUsernameInfoUpdatesFromIncomingMsg = s),
      (l.storeUsernamesLearnedFromIncomingMsg = u));
  },
  98,
);
