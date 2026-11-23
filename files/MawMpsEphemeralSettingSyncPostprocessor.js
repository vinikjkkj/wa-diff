__d(
  "MawMpsEphemeralSettingSyncPostprocessor",
  [
    "DateConsts",
    "MAWCOPMessagesHandler",
    "MAWEphemeralSettingsCache",
    "MAWEphemeralUtil",
    "MAWJids",
    "MAWProtobufDeserializers",
    "MpsErrors",
    "MpsTypes",
    "Promise",
    "WAJids",
    "WALongInt",
    "WAStanzaUtils",
    "WATimeUtils",
    "WmiErrorReport",
    "WmiMetadataEphemeralSyncResponseBackoffWriter",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 90 * o("DateConsts").SEC_PER_DAY;
    function u(e) {
      var t,
        n,
        r,
        a,
        i = o("MAWProtobufDeserializers").DeserializedBackupMessage.create(
          e.message.payload,
        ),
        l =
          (t = i.encryptedTransportMessage()) == null ||
          (t = t.proto.metadata) == null
            ? void 0
            : t.chatEphemeralSetting;
      if (l == null) return null;
      var s =
        (n = o("WALongInt").maybeNumber(l.ephemeralSettingTimestamp)) != null
          ? n
          : 0;
      return {
        ephemeralExpirationInSec: (r = l.ephemeralExpiration) != null ? r : 0,
        ephemeralLastUpdatedOrSetTimestamp: o("WATimeUtils").castToUnixTime(
          Math.floor(s / 1e3),
        ),
        isEphemeralSettingReset:
          (a = l.isEphemeralSettingReset) != null ? a : !1,
      };
    }
    function c(e, t) {
      if (t.ephemeralExpirationInSec < 0 || t.ephemeralExpirationInSec > s) {
        var n = o("WAJids")
          .interpretAndValidateJid(e.message.threadId)
          .toString();
        o("WmiErrorReport").reportWmiError(
          o("MpsErrors").MpsErrors.error(
            "payload_incomplete",
            "ephemeral duration %s invalid, jidType %s",
            t.ephemeralExpirationInSec,
            n,
          ),
        );
        return;
      }
      var r = o("MAWJids").threadIdToChatJid(e.message.threadId),
        a = o("WAJids").interpretAsUserJid(r);
      if (a == null) {
        o("WmiErrorReport").reportWmiError(
          o("MpsErrors").MpsErrors.error(
            "payload_incomplete",
            "chat jid for incoming ephemeral settings",
          ),
        );
        return;
      }
      var i = o("MAWEphemeralSettingsCache").getEphemeralSettingCache(r);
      if (i != null) {
        var l = {
          ephemeralExpirationInSec: t.ephemeralExpirationInSec,
          ephemeralLastUpdatedOrSetTimestamp:
            t.ephemeralLastUpdatedOrSetTimestamp,
        };
        o("MAWEphemeralUtil").shouldSendSyncResponse(l, i) &&
          o("MAWCOPMessagesHandler").sendEphemeralSyncResponse(
            r,
            o("WAStanzaUtils").toStanzaId(e.message.messageId),
            o("WAJids").unsafeCoerceToUserJid(e.message.senderId),
            i,
          );
      }
    }
    function d(e) {
      var t = o("MAWJids").threadIdToChatJid(e.message.threadId);
      o("WAJids").switchOnMsgrChatJidType(t, {
        group: function () {
          var t = o("WAJids").unsafeCoerceToUserJid(e.message.senderId);
          o(
            "WmiMetadataEphemeralSyncResponseBackoffWriter",
          ).deleteEphemeralSyncResponseBackoffInfo([t]);
        },
        user: function () {
          if (
            e.directive.actionType === o("MpsTypes").ActionType.UpsertTopLevel
          ) {
            var n = o("WAJids").interpretAsUserJid(t);
            if (n == null) return;
            var r = o("MAWEphemeralSettingsCache").getEphemeralSettingCache(t);
            if (r == null || r.ephemeralExpirationInSec === 0) return;
            o("MAWCOPMessagesHandler").sendEphemeralSyncResponse(
              t,
              o("WAStanzaUtils").toStanzaId(e.message.messageId),
              o("WAJids").unsafeCoerceToUserJid(e.message.senderId),
              r,
            );
          }
        },
      });
    }
    var m = {
      name: "ephemeral_setting_sync",
      process: function (r) {
        try {
          for (var t of r) {
            var a = u(t);
            a != null ? c(t, a) : d(t);
          }
        } catch (e) {
          o("WmiErrorReport").reportWmiError(
            o("MpsErrors").MpsErrors.classify(
              e,
              "process_ephemeral_settings",
              "infra",
            ),
          );
        }
        return (e || (e = n("Promise"))).resolve(new Map());
      },
    };
    l.MawMpsEphemeralSettingSyncPostprocessor = m;
  },
  98,
);
