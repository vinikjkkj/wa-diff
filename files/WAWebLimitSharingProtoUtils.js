__d(
  "WAWebLimitSharingProtoUtils",
  [
    "WAWebCommonMsgSubtypeTypes",
    "WAWebLimitSharingGatingUtils",
    "WAWebLimitSharingModelUtils",
    "WAWebLimitSharingPropMappingUtils",
    "WAWebMsgType",
    "WAWebParseLimitSharingHistorySyncProto",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return {
        sharingLimited: e.limitSharing,
        trigger: o(
          "WAWebLimitSharingPropMappingUtils",
        ).getLimitSharingTriggerFromHistorySyncStubParameter(
          String(e.limitSharingTrigger),
        ),
        initiatedByMe: e.limitSharingInitiatedByMe,
        limitSharingSettingTimestamp: e.limitSharingSettingTimestamp,
      };
    }
    async function s(e, t, n) {
      var r, a;
      if (
        !o("WAWebLimitSharingGatingUtils").isOpusEnabled() &&
        !(
          t == null ||
          (e == null ? void 0 : e.from) == null ||
          (e == null || (r = e.id) == null ? void 0 : r.remote) == null
        )
      ) {
        var i = p(t);
        if (i) await u(e, i);
        else if ((a = t.messageContextInfo) != null && a.limitSharingV2) {
          var l;
          await c(
            e,
            (l = t.messageContextInfo) == null ? void 0 : l.limitSharingV2,
            n,
          );
        }
      }
    }
    async function u(e, t) {
      var n = o(
        "WAWebParseLimitSharingHistorySyncProto",
      ).getLimitSharingFromEnvelope(
        t,
        o("WAWebWidFactory").createWid(e.from.toString()),
      );
      ((e.type = o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE),
        (e.subtype = o(
          "WAWebCommonMsgSubtypeTypes",
        ).MsgSubtype.LimitSharingSystemMessage),
        (e.limitSharing = n),
        await d(e.id.remote.toString(), n));
    }
    async function c(e, t, n) {
      var r = o(
          "WAWebParseLimitSharingHistorySyncProto",
        ).getLimitSharingFromEnvelope(t),
        a = n === "history" ? "onValueChange" : "always";
      await d(e.id.remote.toString(), r, a);
    }
    async function d(e, t, n) {
      var r;
      if (!o("WAWebLimitSharingGatingUtils").isOpusEnabled()) {
        var a = await o("WAWebLimitSharingModelUtils").getChat(e);
        if (!(a == null || !m(t, a))) {
          var i = o("WAWebWidFactory").createWid(a.id),
            l =
              n === "always" ||
              (n === "onValueChange" &&
                ((r = a.limitSharing) == null ? void 0 : r.sharingLimited) !==
                  t.sharingLimited);
          (l &&
            (await o(
              "WAWebLimitSharingModelUtils",
            ).genLimitSharingSystemMessage(i, t)),
            await o("WAWebLimitSharingModelUtils").updateChat(i, t));
        }
      }
    }
    function m(e, t) {
      var n,
        r,
        o,
        a =
          (n = e == null ? void 0 : e.limitSharingSettingTimestamp) != null
            ? n
            : 0,
        i =
          (r =
            t == null || (o = t.limitSharing) == null
              ? void 0
              : o.limitSharingSettingTimestamp) != null
            ? r
            : 0;
      return Number(a) > Number(i);
    }
    function p(e) {
      var t;
      return (t = o(
        "WAWebParseLimitSharingHistorySyncProto",
      ).getLimitSharingEnvelopeFromProtobuf(e)) == null
        ? void 0
        : t.limitSharing;
    }
    ((l.getLimitSharingFromProtocolHistorySyncConversation = e),
      (l.parseLimitSharingFromMessage = s),
      (l.updateChatWithLimitSharingIfNewer = d));
  },
  98,
);
