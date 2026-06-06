__d(
  "WAWebParseLimitSharingHistorySyncProto",
  [
    "WAWebCommonMsgSubtypeTypes",
    "WAWebLimitSharingGatingUtils",
    "WAWebLimitSharingPropMappingUtils",
    "WAWebMsgType",
    "WAWebProtobufsWeb.pb",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            !o("WAWebLimitSharingGatingUtils").isOpusEnabled() &&
            e.messageStubType ===
              o("WAWebProtobufsWeb.pb").WebMessageInfo$StubType
                .CHANGE_LIMIT_SHARING
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
              s = u(l, i ? o("WAWebWidFactory").createWid(i) : void 0);
            yield d(t, s);
          }
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      return {
        sharingLimited: e == null ? void 0 : e.sharingLimited,
        trigger: e == null ? void 0 : e.trigger,
        limitSharingSettingTimestamp:
          e == null ? void 0 : e.limitSharingSettingTimestamp,
        initiatedBy: t,
      };
    }
    function c(e) {
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
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          ((e.type = o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE),
            (e.subtype = o(
              "WAWebCommonMsgSubtypeTypes",
            ).MsgSubtype.LimitSharingSystemMessage),
            (e.limitSharing = t));
        })),
        m.apply(this, arguments)
      );
    }
    ((l.parseLimitSharingFromProtocolHistorySyncMessage = e),
      (l.getLimitSharingFromEnvelope = u),
      (l.getLimitSharingEnvelopeFromProtobuf = c));
  },
  98,
);
