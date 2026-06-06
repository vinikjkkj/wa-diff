__d(
  "WAWebParseLimitSharingHistorySyncProto",
  [
    "WAWebCommonMsgSubtypeTypes",
    "WAWebLimitSharingGatingUtils",
    "WAWebLimitSharingPropMappingUtils",
    "WAWebMsgType",
    "WAWebProtobufsWeb.pb",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t) {
      if (
        !o("WAWebLimitSharingGatingUtils").isOpusEnabled() &&
        e.messageStubType ===
          o("WAWebProtobufsWeb.pb").WebMessageInfo$StubType.CHANGE_LIMIT_SHARING
      ) {
        var n = e.messageStubParameters,
          r = n[0],
          a = n[1],
          i = n[2],
          l = {
            sharingLimited: r === "true",
            limitSharingSettingTimestamp: Number(e.messageTimestamp) * 1e3,
            trigger: o(
              "WAWebLimitSharingPropMappingUtils",
            ).getLimitSharingTriggerFromHistorySyncStubParameter(a),
          },
          u = s(l, i ? o("WAWebWidFactory").createWid(i) : void 0);
        await c(t, u);
      }
    }
    function s(e, t) {
      return {
        sharingLimited: e == null ? void 0 : e.sharingLimited,
        trigger: e == null ? void 0 : e.trigger,
        limitSharingSettingTimestamp:
          e == null ? void 0 : e.limitSharingSettingTimestamp,
        initiatedBy: t,
      };
    }
    function u(e) {
      var t,
        n,
        r = e.limitSharingMessage,
        o = e.protocolMessage;
      return r != null &&
        (t = r.message) != null &&
        (t = t.protocolMessage) != null &&
        t.limitSharing
        ? r == null || (n = r.message) == null
          ? void 0
          : n.protocolMessage
        : o;
    }
    async function c(e, t) {
      ((e.type = o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE),
        (e.subtype = o(
          "WAWebCommonMsgSubtypeTypes",
        ).MsgSubtype.LimitSharingSystemMessage),
        (e.limitSharing = t));
    }
    ((l.parseLimitSharingFromProtocolHistorySyncMessage = e),
      (l.getLimitSharingFromEnvelope = s),
      (l.getLimitSharingEnvelopeFromProtobuf = u));
  },
  98,
);
