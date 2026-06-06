__d(
  "WAWebSendRetryReceiptJob",
  [
    "$InternalEnum",
    "WADeprecatedSendIq",
    "WALogger",
    "WAWap",
    "WAWebAdvSignatureApi",
    "WAWebCommsAckParser",
    "WAWebCommsWapMd",
    "WAWebConstantsDeprecated",
    "WAWebCryptoCurve25519",
    "WAWebEphemeralDecodeBroadcastSetting",
    "WAWebHandleMsgError",
    "WAWebSendReceiptJobCommon",
    "WAWebSignalCommonErrors",
    "WAWebSignalKeyApi",
    "WAWebSignalProtocolStore",
    "WAWebSignalStoreApi",
    "WAWebSignalUtilsApi",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "cr:10198",
    "cr:4533",
    "err",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 2,
      d = n("$InternalEnum")({
        UnknownError: 0,
        SignalErrorNoSession: 1,
        SignalErrorInvalidKey: 2,
        SignalErrorInvalidKeyId: 3,
        SignalErrorInvalidMessage: 4,
        SignalErrorInvalidSignature: 5,
        SignalErrorFutureMessage: 6,
        SignalErrorBadMac: 7,
        SignalErrorInvalidSession: 8,
        SignalErrorInvalidMsgKey: 9,
        BadBroadcastEphemeralSetting: 10,
        UnknownCompanionNoPrekey: 11,
        AdvFailure: 12,
        StatusRevokeDelay: 13,
      });
    async function m(t) {
      var a = t.externalId,
        i = t.isPeer,
        l = i === void 0 ? !1 : i,
        u = t.isStateless,
        c = u === void 0 ? !1 : u,
        d = t.participant,
        m = t.rawTs,
        _ = t.receiptModeBitmask,
        f = t.recipient,
        g = t.retryCount,
        h = t.retryReason,
        y = t.to;
      if (
        (r("gkx")("26258") ||
          n("cr:10198") == null ||
          n("cr:10198").injectDebug(y, "RetryReceiptSent", "externalId:" + a),
        !r("gkx")("26258"))
      ) {
        var C =
          n("cr:4533") == null
            ? void 0
            : n("cr:4533").getDebugDoNotSendRetryReceipt();
        if (C != null && C > 0)
          return (
            n("cr:4533") == null ||
              n("cr:4533").setDebugDoNotSendRetryReceipt(C - 1),
            Promise.resolve()
          );
      }
      try {
        var b = o("WAWebSignalProtocolStore").getSignalProtocolStore(),
          v = await Promise.all([
            b.getLocalRegistrationId(),
            b.getIdentityKeyPair(),
          ]),
          S = v[0],
          R = v[1];
        if (S == null || R == null)
          throw r("err")("No registration info found");
        var L;
        try {
          L = await p(g, o("WAWebCryptoCurve25519").toCurveKeyPair(R), c);
        } catch (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose(["error: ", ""])),
              t,
            )
            .sendLogs(
              "sendRetryReceipt: error while creating key section in retry receipt",
            );
        }
        var E = !y.isBot() && !!(d != null && d.isBot());
        if (E) return;
        var k = o("WAWap").DROP_ATTR,
          I = o("WAWap").DROP_ATTR,
          T = o("WAWap").DROP_ATTR,
          D;
        if (y.isUser()) {
          if (
            ((D = o("WAWebCommsWapMd").DEVICE_JID(y)),
            o("WAWebUserPrefsMeUser").isMeAccount(
              o("WAWebWidFactory").asUserWidOrThrow(y),
            ))
          )
            if (l) k = "peer";
            else if (f) I = o("WAWebCommsWapMd").USER_JID(f);
            else
              return Promise.reject(
                r("err")(
                  "sendRetryReceipt: send retry to peer device without recipient",
                ),
              );
        } else
          ((D = o("WAWebCommsWapMd").CHAT_JID(y)),
            (T = d
              ? o("WAWebCommsWapMd").DEVICE_JID(d)
              : o("WAWap").DROP_ATTR));
        var x = o("WAWebSendReceiptJobCommon").genReceiptMetaModeNode(
            _ != null ? _ : 0,
          ),
          $ = o("WAWap").wap(
            "receipt",
            {
              id: o("WAWap").CUSTOM_STRING(a),
              to: D,
              participant: T,
              recipient: I,
              type: "retry",
              category: k,
            },
            o("WAWap").wap("retry", {
              v: "1",
              count: o("WAWap").INT(g),
              id: o("WAWap").CUSTOM_STRING(a),
              t: o("WAWap").CUSTOM_STRING(m),
              error: h != null ? o("WAWap").INT(h) : o("WAWap").DROP_ATTR,
            }),
            o("WAWap").wap(
              "registration",
              null,
              o("WAWap").BIG_ENDIAN_CONTENT(S),
            ),
            L,
            x,
          );
        return o("WADeprecatedSendIq").deprecatedSendStanzaAndWaitForAck(
          $,
          o("WAWebCommsAckParser").toCoreAckTemplate({
            id: a,
            class: "receipt",
            from: y,
            participant: d,
            type: "retry",
          }),
        );
      } catch (e) {
        o("WALogger")
          .ERROR(
            s || (s = babelHelpers.taggedTemplateLiteralLoose(["error: ", ""])),
            e,
          )
          .sendLogs(
            "sendRetryReceipt: error while creating or sending the retry message",
          );
      }
    }
    async function p(e, t, n) {
      n === void 0 && (n = !1);
      var r = await _(e, t, n),
        a = r[0],
        i = r[1];
      return (
        i &&
          (await o("WAWebSignalStoreApi").waSignalStore.markKeyAsUploaded(
            i.keyId,
          ),
          await o(
            "WAWebSignalStoreApi",
          ).waSignalStore.markPreKeyAsDirectDistribution(i.keyId)),
        a
      );
    }
    async function _(e, t, n) {
      n === void 0 && (n = !1);
      var a = n || e >= c;
      if (!a) return Promise.resolve([null, null]);
      try {
        var i = await Promise.all([
            o("WAWebSignalStoreApi").waSignalStore.getSignedPreKey(),
            o("WAWebSignalStoreApi").waSignalStore.getOrGenSinglePreKey(
              o("WAWebSignalKeyApi").generatePreKeyPair,
            ),
            o("WAWebAdvSignatureApi")
              .getADVEncodedIdentity()
              .then(function (e) {
                return (
                  (e == null || e.byteLength === 0) &&
                    o("WALogger")
                      .ERROR(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "getADVEncodedIdentity: sending empty device-identity",
                          ])),
                      )
                      .sendLogs(
                        "sending-retry-response-with-empty-device-identity",
                        { sampling: r("gkx")("26259") ? 1 : 0.1 },
                      ),
                  o("WAWap").wap("device-identity", null, e)
                );
              }),
          ]),
          l = i[0],
          s = i[1],
          d = i[2];
        if (!l) throw r("err")("Signed pre key is not available");
        var m = o("WAWap").wap(
          "keys",
          null,
          o("WAWap").wap(
            "type",
            null,
            r("WAWebConstantsDeprecated").KEY_BUNDLE_TYPE,
          ),
          o("WAWap").wap("identity", null, t.pubKey),
          o("WAWebSignalUtilsApi").xmppPreKey(s),
          o("WAWebSignalUtilsApi").xmppSignedPreKey(l),
          d,
        );
        return [m, s];
      } catch (e) {
        throw r("err")("Could not create keys section for retry");
      }
    }
    function f(e) {
      if (e instanceof o("WAWebHandleMsgError").UnknownDeviceMessageError)
        return d.UnknownCompanionNoPrekey;
      if (e instanceof o("WAWebSignalCommonErrors").SignalDecryptionError)
        return e.message === "errSignalNoSession" ||
          e.message === "errLoadSenderKeySession"
          ? d.SignalErrorNoSession
          : e.message === "errSignalInvalidMsg"
            ? d.SignalErrorInvalidMessage
            : e.message === "errSignalInvalidKey"
              ? d.SignalErrorInvalidKey
              : e.message === "errSignalTooManyMessagesInFuture" ||
                  e.message === "errSignalGrpTooManyMessagesInFuture"
                ? d.SignalErrorFutureMessage
                : e.message === "errInvalidMacWithDecryptedPlaintext" ||
                    e.message === "errInvalidMacInvalidCipherKey" ||
                    e.message === "errInvalidMacInvalidCipherKeyNewChain"
                  ? d.SignalErrorBadMac
                  : void 0;
      if (
        e instanceof
        o("WAWebEphemeralDecodeBroadcastSetting").BroadcastEphSettingsError
      )
        return d.BadBroadcastEphemeralSetting;
    }
    ((l.RetryReason = d),
      (l.sendRetryReceipt = m),
      (l.getRetryReasonFromError = f));
  },
  98,
);
