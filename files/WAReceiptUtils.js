__d(
  "WAReceiptUtils",
  [
    "WACryptoManagerUtils",
    "WADeprecatedSendIq",
    "WAMapWithDefault",
    "WAMsg",
    "WAPreKeysStanzaUtils",
    "WARequestPreKeyDigest",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t) {
      var n = e.retryCount,
        r = n + 1;
      r >= 3 &&
        (await o("WARequestPreKeyDigest").requestPreKeyDigestFn(function (e) {
          return e(t);
        }));
      var a = null;
      r >= 2 &&
        (a = await o("WACryptoManagerUtils").getSignalInfoForRetry(
          t.cryptoManager,
        ));
      var i = t.cryptoManager.regInfo.regId;
      return u(e, r, i, a);
    }
    async function s(t, n) {
      var r = t.externalId,
        a = t.from,
        i = t.participant,
        l;
      (a.type === "group" ? (l = a.groupJid) : (a.type, (l = a.deviceJid)),
        await o("WADeprecatedSendIq").deprecatedSendStanzaAndWaitForAck(
          await e(t, n),
          { id: r, class: "receipt", from: l, participant: i },
        ));
    }
    function u(e, t, n, r) {
      var a = null;
      if (r != null) {
        var i = r.keyType,
          l = r.preKey,
          s = r.publicKey,
          u = r.signedPreKey,
          c =
            e.deviceIdentity != null
              ? o("WAWap").wap("device-identity", null, e.deviceIdentity)
              : null;
        a = o("WAWap").wap(
          "keys",
          null,
          o("WAWap").wap("type", null, o("WAWap").BIG_ENDIAN_CONTENT(i, 1)),
          o("WAWap").wap("identity", null, s),
          o("WAPreKeysStanzaUtils").xmppPreKey(l),
          o("WAPreKeysStanzaUtils").xmppSignedPreKey(u),
          c,
        );
      }
      var d;
      return (
        e.from.type === "group"
          ? (d = e.from.groupJid)
          : (e.from.type, (d = e.from.deviceJid)),
        o("WAWap").wap(
          "receipt",
          {
            category:
              e.category != null
                ? o("WAWap").CUSTOM_STRING(e.category)
                : o("WAWap").DROP_ATTR,
            id: o("WAWap").CUSTOM_STRING(e.externalId),
            participant:
              e.participant != null && e.participant.length > 0
                ? o("WAWap").DEVICE_JID(e.participant)
                : o("WAWap").DROP_ATTR,
            recipient:
              e.recipient != null && e.recipient.length > 0
                ? o("WAWap").USER_JID(e.recipient)
                : o("WAWap").DROP_ATTR,
            to: o("WAWap").JID(d),
            type: "retry",
          },
          o("WAWap").wap("retry", {
            count: o("WAWap").INT(t),
            id: o("WAWap").CUSTOM_STRING(e.externalId),
            t: o("WAWap").INT(e.ts),
            v: "1",
          }),
          o("WAWap").wap(
            "registration",
            null,
            o("WAWap").BIG_ENDIAN_CONTENT(n),
          ),
          a,
        )
      );
    }
    function c(e) {
      var t = new (o("WAMapWithDefault").MapWithDefault)(function (e) {
        return new Set();
      });
      for (var n of e) {
        var r = n.receipt;
        if (r.receiptType === "group" || r.receiptType === "user")
          for (var a of r.externalIds)
            t.get(
              o("WAMsg").craftWAMsgIdString({
                author: r.messageAuthor,
                chat: r.chat,
                externalId: a,
              }),
            ).add(r.from.author);
        else if (r.receiptType === "group-server-agg")
          for (var i of r.receivers)
            t.get(
              o("WAMsg").craftWAMsgIdString({
                author: r.messageAuthor,
                chat: r.chat,
                externalId: r.externalId,
              }),
            ).add(i.device);
      }
      return t.toMap();
    }
    ((l.makeRetryReceipt = e),
      (l.sendRetryReceipt = s),
      (l.calculateIdentitiesToDelete = c));
  },
  98,
);
