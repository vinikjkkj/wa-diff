__d(
  "WAWebLearnUsernamesFromIncomingMsg",
  [
    "WALogger",
    "WAWebHandleMsgTypes",
    "WAWebInsertUsernameChangeSystemMsg",
    "WAWebSetUsernameJob",
    "WAWebUsernameGatingUtils",
    "WAWebWidFactory",
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
          return r.map(c);
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          "type" in n &&
          n.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.OTHER_BROADCAST
        )
          return [d(e)];
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          "type" in n &&
          (n.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.CHAT ||
            n.type ===
              o("WAWebHandleMsgTypes").MESSAGE_TYPE.DIRECT_PEER_STATUS ||
            n.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.OTHER_STATUS)
        )
          return t == null ? m(e) : f(t);
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            n,
        );
      })(e);
      return n.filter(Boolean);
    }
    async function u(t, n) {
      try {
        var a = await o("WAWebSetUsernameJob").setUsernamesJob(t);
        (n != null &&
          o("WAWebInsertUsernameChangeSystemMsg").hasUsernameChangeSystemMsgs(
            t,
            a,
          ) &&
          (await n()),
          await o(
            "WAWebInsertUsernameChangeSystemMsg",
          ).maybeInsertUsernameChangeSystemMsgs(t, a, "handleMsg"));
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
    }
    function c(e) {
      var t;
      return o("WAWebSetUsernameJob").maybeCreateSetUsernameInfoJobArg({
        userId: o("WAWebWidFactory").asUserWidOrThrow(
          (t = e.peerRecipientLid) != null ? t : e.wid,
        ),
        username: e.peerRecipientUsername,
      });
    }
    function d(e) {
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
    function m(e) {
      return [
        p(e, o("WAWebWidFactory").asUserWidOrThrow(e.author)),
        o("WAWebSetUsernameJob").maybeCreateSetUsernameInfoJobArg({
          userId: _(e),
          username: e.peerRecipientUsername,
        }),
      ];
    }
    function p(e, t) {
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
    function _(e) {
      if (e.peerRecipientLid)
        return o("WAWebWidFactory").asUserWidOrThrow(e.peerRecipientLid);
      if (e.chat.isLid()) return o("WAWebWidFactory").asUserWidOrThrow(e.chat);
    }
    function f(e) {
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
