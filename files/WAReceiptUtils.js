__d(
  "WAReceiptUtils",
  [
    "WACryptoManagerUtils",
    "WADeprecatedSendIq",
    "WAPreKeysStanzaUtils",
    "WARequestPreKeyDigest",
    "WAWap",
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
          var n = e.retryCount,
            r = n + 1;
          r >= 3 &&
            (yield o("WARequestPreKeyDigest").requestPreKeyDigestFn(
              function (e) {
                return e(t);
              },
            ));
          var a = null;
          r >= 2 &&
            (a = yield o("WACryptoManagerUtils").getSignalInfoForRetry(
              t.cryptoManager,
            ));
          var i = t.cryptoManager.regInfo.regId;
          return d(e, r, i, a);
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = t.externalId,
            a = t.from,
            i = t.participant,
            l;
          (a.type === "group" ? (l = a.groupJid) : (a.type, (l = a.deviceJid)),
            yield o("WADeprecatedSendIq").deprecatedSendStanzaAndWaitForAck(
              yield e(t, n),
              { id: r, class: "receipt", from: l, participant: i },
            ));
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t, n, r) {
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
    ((l.makeRetryReceipt = e), (l.sendRetryReceipt = u));
  },
  98,
);
