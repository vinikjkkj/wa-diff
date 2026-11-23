__d(
  "WABuildMpsPayload",
  [
    "IgnitionE2EEMpsCompareChecker",
    "MpsFutureProofKey",
    "MpsTypes",
    "WAArmadilloBackupMessage.pb",
    "WAArmadilloMiTransportAdminMessage.pb",
    "WAArmadilloTransportEvent.pb",
    "WAGlobals",
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "encodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(e, t) {
      var n = o("WAJids").extractUserId(t.senderJid),
        r;
      t.hideDecryptionFailure != null &&
        (r = t.hideDecryptionFailure
          ? o("MpsFutureProofKey").WCEPlaintextPayloadFutureProof
              .WCEPlaintextPayloadFutureProofNoPlaceholder
          : o("MpsFutureProofKey").WCEPlaintextPayloadFutureProof
              .WCEPlaintextPayloadFutureProofPlaceholder);
      var a = o("encodeProtobuf")
        .encodeProtobuf(
          o("WAArmadilloBackupMessage.pb").BackupMessageSpec,
          babelHelpers.extends({}, e, {
            metadata: {
              frankingMetadata: {
                frankingTag: t.frankingTag,
                reportingTag: t.reportingTag,
              },
              messageId: t.externalId,
              payloadVersion: 2,
              senderId: n,
              futureProofBehavior: r,
              timestampMs: t.timestampMs,
            },
          }),
        )
        .readBuffer();
      return a;
    }
    function d(e, t) {
      var n = o("WAJids").extractUserId(t.senderJid),
        r = o("MpsTypes").toThreadId(t.threadId),
        a =
          t.millisServerTs != null
            ? t.millisServerTs
            : t.serverTs * 1e3 +
              o("WAGlobals")
                .getDependencies()
                .extractMsFromStanzaId(t.externalId),
        i = c(e, {
          senderJid: t.senderJid,
          externalId: t.externalId,
          frankingTag: t.frankingTag,
          reportingTag: t.reportingTag,
          hideDecryptionFailure: t.hideDecryptionFailure,
          threadId: t.threadId,
          timestampMs: o("MpsTypes").toTimestamp(a),
        });
      return {
        messageId: o("MpsTypes").toMessageId(t.externalId),
        payload: o("MpsTypes").toBytes(i),
        senderId: n,
        threadId: r,
        timestampMs: o("MpsTypes").toTimestamp(a),
      };
    }
    function m(t, n, r) {
      try {
        var a = {};
        switch (r.type) {
          case "message":
            a = { encryptedTransportMessage: r.applicationPayload };
            break;
          case "ciphertext":
            a = {
              encryptedTransportEvent: {
                payload: o("encodeProtobuf")
                  .encodeProtobuf(
                    o("WAArmadilloTransportEvent.pb").TransportEventSpec,
                    {
                      placeholder: {
                        type: o("WAArmadilloTransportEvent.pb")
                          .TransportEvent$Placeholder$Type.DECRYPTION_FAILURE,
                      },
                    },
                  )
                  .readBuffer(),
                version: 3,
              },
            };
            break;
          case "unavailable":
            a = {
              encryptedTransportEvent: {
                payload: o("encodeProtobuf")
                  .encodeProtobuf(
                    o("WAArmadilloTransportEvent.pb").TransportEventSpec,
                    {
                      placeholder: {
                        type: o("WAArmadilloTransportEvent.pb")
                          .TransportEvent$Placeholder$Type.DECRYPTION_FAILURE,
                      },
                    },
                  )
                  .readBuffer(),
                version: 3,
              },
            };
            break;
          default:
            r.type;
        }
        var i = n.type === "Available" ? n.originalMsgTimestampMs : null,
          l = d(
            a,
            babelHelpers.extends(
              {
                senderJid: o("WAJids").extractUserJid(n.from),
                externalId: t.stanzaId,
              },
              i != null
                ? { millisServerTs: o("WATimeUtils").castToMillisTime(i) }
                : { serverTs: t.serverTs },
              {
                frankingTag: t.frankingTag,
                reportingTag: t.reportingTag,
                hideDecryptionFailure: t.hideDecryptionFailure,
                threadId: n.chat,
              },
            ),
          );
        return (
          o("IgnitionE2EEMpsCompareChecker").recordWaiSide(
            l,
            o("WAJids").isAuthorMe(n.author),
          ),
          l
        );
      } catch (t) {
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "buildMpsMessagePayload: ",
                "",
              ])),
            t,
          ),
          null
        );
      }
    }
    function p(e, t, n) {
      if (n.payload == null)
        return (
          o("WALogger").ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "buildMpsAppdataPayload: No appdata payload",
              ])),
          ),
          null
        );
      try {
        return d(
          { encryptedTransportMessage: n.payload },
          {
            senderJid: o("WAJids").extractUserJid(e.from),
            externalId: e.stanzaId,
            serverTs: t,
            threadId: o("WAJids").extractUserJid(e.from),
          },
        );
      } catch (e) {
        return (
          o("WALogger").ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "buildMpsAppdataPayload: ",
                "",
              ])),
            e,
          ),
          null
        );
      }
    }
    function _(e, t, n, r, a) {
      var i = {
        payload: o("encodeProtobuf")
          .encodeProtobuf(
            o("WAArmadilloMiTransportAdminMessage.pb")
              .MiTransportAdminMessageSpec,
            { groupMembershipAddModeChanged: { mode: n } },
          )
          .readBuffer(),
        version: 3,
      };
      return d(
        { miTransportAdminMessage: i },
        {
          serverTs: r != null ? r : o("WATimeUtils").unixTime(),
          externalId: a,
          hideDecryptionFailure: !1,
          senderJid: t,
          threadId: e,
        },
      );
    }
    function f(e, t, n, r, a, i) {
      var l = {
        payload: o("encodeProtobuf")
          .encodeProtobuf(
            o("WAArmadilloMiTransportAdminMessage.pb")
              .MiTransportAdminMessageSpec,
            {
              groupAdminChanged: {
                targetUserId: n.map(o("WAJids").extractUserId),
                action: r,
              },
            },
          )
          .readBuffer(),
        version: 3,
      };
      return d(
        { miTransportAdminMessage: l },
        {
          serverTs: a != null ? a : o("WATimeUtils").unixTime(),
          externalId: i,
          hideDecryptionFailure: !1,
          senderJid: t,
          threadId: e,
        },
      );
    }
    function g(e, t, n, r, a, i) {
      var l = {
        payload: o("encodeProtobuf")
          .encodeProtobuf(
            o("WAArmadilloMiTransportAdminMessage.pb")
              .MiTransportAdminMessageSpec,
            {
              groupParticipantChanged: {
                targetUserId: n.map(o("WAJids").extractUserId),
                action: r,
              },
            },
          )
          .readBuffer(),
        version: 3,
      };
      return d(
        { miTransportAdminMessage: l },
        {
          serverTs: a != null ? a : o("WATimeUtils").unixTime(),
          externalId: i,
          hideDecryptionFailure: !1,
          senderJid: t,
          threadId: e,
        },
      );
    }
    function h(e, t, n, r, a) {
      var i = {
        payload: o("encodeProtobuf")
          .encodeProtobuf(
            o("WAArmadilloMiTransportAdminMessage.pb")
              .MiTransportAdminMessageSpec,
            { groupNameChanged: { groupName: n } },
          )
          .readBuffer(),
        version: 3,
      };
      return d(
        { miTransportAdminMessage: i },
        {
          serverTs: r != null ? r : o("WATimeUtils").unixTime(),
          externalId: a,
          hideDecryptionFailure: !1,
          senderJid: t,
          threadId: e,
        },
      );
    }
    function y(e, t, n, r, a) {
      var i = {
        payload: o("encodeProtobuf")
          .encodeProtobuf(
            o("WAArmadilloMiTransportAdminMessage.pb")
              .MiTransportAdminMessageSpec,
            {
              disappearingSettingChanged: {
                disappearingSettingDurationSeconds: n,
              },
            },
          )
          .readBuffer(),
        version: 3,
      };
      return d(
        { miTransportAdminMessage: i },
        {
          serverTs: r != null ? r : o("WATimeUtils").unixTime(),
          externalId: a,
          hideDecryptionFailure: !1,
          senderJid: t,
          threadId: e,
        },
      );
    }
    function C(e, t, n, r, a, i, l) {
      var s = {
        payload: o("encodeProtobuf")
          .encodeProtobuf(
            o("WAArmadilloTransportEvent.pb").TransportEventSpec,
            {
              event: {
                deviceChange: { type: r, devicePlatform: a, deviceModel: i },
              },
            },
          )
          .readBuffer(),
        version: 3,
      };
      return d(
        { encryptedTransportEvent: s },
        {
          serverTs: t != null ? t : o("WATimeUtils").unixTime(),
          externalId: n,
          hideDecryptionFailure: !1,
          senderJid: e,
          threadId: l != null ? l : e,
        },
      );
    }
    ((l.buildBackupProtobufBytes = c),
      (l.buildMpsMessage = d),
      (l.buildMpsMessageFromIncomingMessage = m),
      (l.buildMpsAppdataPayload = p),
      (l.buildMpsGroupMemberAddType = _),
      (l.buildMpsGroupAdminChangedMsg = f),
      (l.buildMpsGroupParticipantsChanged = g),
      (l.buildMpsGroupNameChangedMsg = h),
      (l.buildMpsDisappearingSettingChanged = y),
      (l.buildMpsDeviceChangeAdminMessage = C));
  },
  98,
);
