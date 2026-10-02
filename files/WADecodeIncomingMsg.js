__d(
  "WADecodeIncomingMsg",
  [
    "WALongInt",
    "WAMsgApplication.pb",
    "WAMsgTransport.pb",
    "WAParseMessageApplication",
    "WAParseMessageTransport",
    "WAStanzaUtils",
    "WATimeUtils",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return e.futureProof && n != null
        ? {
            version: "v3",
            type: "futureProof",
            futureProof: e.futureProof,
            protobuf: t,
            applicationPayload: n,
            subtype: null,
          }
        : { version: "v3", type: "error", error: e.error };
    }
    function s(t, n, r, a) {
      if (n === "v2") return { version: "v2", encoded: t };
      if (n === "v3") {
        var i = o("decodeProtobuf").decodeProtobufWithUnknowns(
            o("WAMsgTransport.pb").MessageTransportSpec,
            t,
          ),
          l = o("WAParseMessageTransport").parseMessageTransport(i, r),
          s = m(i);
        if (l.type === "error") return e(l, t);
        if (l.type === "skdm") return u(l.skdm);
        if (l.type === "applicationPayload") {
          if (a === !0)
            return l.applicationPayload.payload == null
              ? {
                  version: "v3",
                  type: "error",
                  error: "instamadillo unhandled proto",
                }
              : {
                  version: "v3",
                  type: "instamadillo",
                  applicationPayload: new Uint8Array(
                    l.applicationPayload.payload,
                  ),
                  backupDirective: s,
                };
          var d = c(l.applicationPayload, t, s);
          if (l.skdm != null) {
            var p = u(l.skdm);
            return { version: "v3", type: "msgWithSKDM", msg: d, skdm: p };
          }
          return d;
        } else
          return l.type === "empty"
            ? { version: "v3", type: "empty" }
            : (l.type,
              {
                version: "v3",
                type: "error",
                error: "unhandled proto with type " + l.type,
              });
      } else
        return {
          type: "error",
          version: "v3",
          error:
            "decodeIncomingMsg called with unexpected encoding version: " + n,
        };
    }
    function u(e) {
      var t = e.axolotlSenderKeyDistributionMessage,
        n = e.groupId;
      return t == null
        ? {
            type: "error",
            version: "v3",
            error:
              "parseSKDM called with null axolotlSenderKeyDistributionMessage",
          }
        : n == null
          ? {
              type: "error",
              version: "v3",
              error: "parseSKDM called with null groupId",
            }
          : { version: "v3", type: "skdm", msg: { senderKey: t, groupId: n } };
    }
    function c(t, n, r) {
      var a,
        i = o("decodeProtobuf").decodeProtobufWithUnknowns(
          o("WAMsgApplication.pb").MessageApplicationSpec,
          t.payload,
        );
      if (i.payload == null) return d(i.metadata, t.payload);
      var l = o("WAParseMessageApplication").parseMessageApplication(i);
      return l.type === "error"
        ? e(l, n)
        : t.payload == null
          ? e(
              {
                error: "Empty application payload",
                type: "error",
                version: "v3",
              },
              n,
            )
          : {
              version: "v3",
              type: "subprotocol",
              metadata: (a = i.metadata) != null ? a : null,
              subprotocolType: l.subprotocolType,
              subprotocol: l.payload,
              applicationPayload: t.payload,
              protobuf: n,
              frankingContent: t.payload,
              backupDirective: r,
            };
    }
    function d(e, t) {
      var n = e == null ? void 0 : e.chatEphemeralSetting;
      if (n != null) {
        var r = n.ephemeralExpiration,
          a = n.ephemeralSettingTimestamp;
        if (r == null)
          return {
            version: "v3",
            type: "error",
            error: "Ephemeral setting without expiration",
          };
        if (t == null)
          return {
            error: "Empty application payload",
            type: "error",
            version: "v3",
          };
        try {
          var i,
            l =
              a != null
                ? o("WATimeUtils").castToUnixTime(
                    o("WALongInt").numberOrThrowIfTooLarge(a) / 1e3,
                  )
                : o("WATimeUtils").DEFAULT_UNIXTIME;
          return {
            version: "v3",
            type: "ephemeral",
            ephemeralExpirationInSec: r,
            ephemeralLastUpdatedOrSetTimestamp: l,
            isEphemeralSettingReset:
              (i = n.isEphemeralSettingReset) != null ? i : !1,
            applicationPayload: t,
          };
        } catch (e) {
          var s;
          return {
            version: "v3",
            type: "ephemeral",
            ephemeralExpirationInSec: r,
            ephemeralLastUpdatedOrSetTimestamp:
              o("WATimeUtils").DEFAULT_UNIXTIME,
            isEphemeralSettingReset:
              (s = n.isEphemeralSettingReset) != null ? s : !1,
            applicationPayload: t,
          };
        }
      } else
        return {
          version: "v3",
          type: "error",
          error: "MessageApplication has no payload and is not ephemeral",
        };
    }
    function m(e) {
      var t,
        n =
          (t = e.protocol) == null || (t = t.ancillary) == null
            ? void 0
            : t.backupDirective;
      if (n == null) return null;
      var r = n.actionType,
        a = n.messageId,
        i = n.supplementalKey;
      return a == null || r == null
        ? null
        : {
            messageId: o("WAStanzaUtils").toStanzaId(a),
            actionType: r,
            supplementalKey: i,
          };
    }
    l.decodeIncomingMsg = s;
  },
  98,
);
