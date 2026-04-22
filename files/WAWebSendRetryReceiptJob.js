__d(
  "WAWebSendRetryReceiptJob",
  [
    "$InternalEnum",
    "Promise",
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
    "WAWebSignalCommonErrors",
    "WAWebSignalKeyApi",
    "WAWebSignalProtocolStore",
    "WAWebSignalStoreApi",
    "WAWebSignalUtilsApi",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "cr:10198",
    "cr:4533",
    "err",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 2,
      m = n("$InternalEnum")({
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
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.externalId,
            i = t.isPeer,
            l = i === void 0 ? !1 : i,
            u = t.isStateless,
            d = u === void 0 ? !1 : u,
            m = t.participant,
            p = t.rawTs,
            _ = t.recipient,
            g = t.retryCount,
            h = t.retryReason,
            y = t.to;
          if (
            (r("gkx")("26258") ||
              n("cr:10198") == null ||
              n("cr:10198").injectDebug(
                y,
                "RetryReceiptSent",
                "externalId:" + a,
              ),
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
                (c || (c = n("Promise"))).resolve()
              );
          }
          try {
            var b = o("WAWebSignalProtocolStore").getSignalProtocolStore(),
              v = yield (c || (c = n("Promise"))).all([
                b.getLocalRegistrationId(),
                b.getIdentityKeyPair(),
              ]),
              S = v[0],
              R = v[1];
            if (S == null || R == null)
              throw r("err")("No registration info found");
            var L;
            try {
              L = yield f(g, o("WAWebCryptoCurve25519").toCurveKeyPair(R), d);
            } catch (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "error: ",
                      "",
                    ])),
                  t,
                )
                .sendLogs(
                  "sendRetryReceipt: error while creating key section in retry receipt",
                );
            }
            var E = !y.isBot() && !!(m != null && m.isBot());
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
                else if (_) I = o("WAWebCommsWapMd").USER_JID(_);
                else
                  return (c || (c = n("Promise"))).reject(
                    r("err")(
                      "sendRetryReceipt: send retry to peer device without recipient",
                    ),
                  );
            } else
              ((D = o("WAWebCommsWapMd").CHAT_JID(y)),
                (T = m
                  ? o("WAWebCommsWapMd").DEVICE_JID(m)
                  : o("WAWap").DROP_ATTR));
            var x = o("WAWap").wap(
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
                t: o("WAWap").CUSTOM_STRING(p),
                error: h != null ? o("WAWap").INT(h) : o("WAWap").DROP_ATTR,
              }),
              o("WAWap").wap(
                "registration",
                null,
                o("WAWap").BIG_ENDIAN_CONTENT(S),
              ),
              L,
            );
            return o("WADeprecatedSendIq").deprecatedSendStanzaAndWaitForAck(
              x,
              o("WAWebCommsAckParser").toCoreAckTemplate({
                id: a,
                class: "receipt",
                from: y,
                participant: m,
                type: "retry",
              }),
            );
          } catch (e) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "error: ",
                    "",
                  ])),
                e,
              )
              .sendLogs(
                "sendRetryReceipt: error while creating or sending the retry message",
              );
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          n === void 0 && (n = !1);
          var r = yield h(e, t, n),
            a = r[0],
            i = r[1];
          return (
            i &&
              (yield o("WAWebSignalStoreApi").waSignalStore.markKeyAsUploaded(
                i.keyId,
              ),
              yield o(
                "WAWebSignalStoreApi",
              ).waSignalStore.markPreKeyAsDirectDistribution(i.keyId)),
            a
          );
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t, n) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          a === void 0 && (a = !1);
          var i = a || e >= d;
          if (!i) return (c || (c = n("Promise"))).resolve([null, null]);
          try {
            var l = yield (c || (c = n("Promise"))).all([
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
              s = l[0],
              m = l[1],
              p = l[2];
            if (!s) throw r("err")("Signed pre key is not available");
            var _ = o("WAWap").wap(
              "keys",
              null,
              o("WAWap").wap(
                "type",
                null,
                r("WAWebConstantsDeprecated").KEY_BUNDLE_TYPE,
              ),
              o("WAWap").wap("identity", null, t.pubKey),
              o("WAWebSignalUtilsApi").xmppPreKey(m),
              o("WAWebSignalUtilsApi").xmppSignedPreKey(s),
              p,
            );
            return [_, m];
          } catch (e) {
            throw r("err")("Could not create keys section for retry");
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      if (e instanceof o("WAWebHandleMsgError").UnknownDeviceMessageError)
        return m.UnknownCompanionNoPrekey;
      if (e instanceof o("WAWebSignalCommonErrors").SignalDecryptionError)
        return e.message === "errSignalNoSession" ||
          e.message === "errLoadSenderKeySession"
          ? m.SignalErrorNoSession
          : e.message === "errSignalInvalidMsg"
            ? m.SignalErrorInvalidMessage
            : e.message === "errSignalInvalidKey"
              ? m.SignalErrorInvalidKey
              : e.message === "errSignalTooManyMessagesInFuture" ||
                  e.message === "errSignalGrpTooManyMessagesInFuture"
                ? m.SignalErrorFutureMessage
                : e.message === "errInvalidMacWithDecryptedPlaintext" ||
                    e.message === "errInvalidMacInvalidCipherKey" ||
                    e.message === "errInvalidMacInvalidCipherKeyNewChain"
                  ? m.SignalErrorBadMac
                  : void 0;
      if (
        e instanceof
        o("WAWebEphemeralDecodeBroadcastSetting").BroadcastEphSettingsError
      )
        return m.BadBroadcastEphemeralSetting;
    }
    ((l.RetryReason = m),
      (l.sendRetryReceipt = p),
      (l.getRetryReasonFromError = C));
  },
  98,
);
