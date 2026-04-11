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
            u = t.participant,
            d = t.rawTs,
            m = t.recipient,
            p = t.retryCount,
            _ = t.retryReason,
            g = t.to;
          if (
            (r("gkx")("26258") ||
              n("cr:10198") == null ||
              n("cr:10198").injectDebug(
                g,
                "RetryReceiptSent",
                "externalId:" + a,
              ),
            !r("gkx")("26258"))
          ) {
            var h =
              n("cr:4533") == null
                ? void 0
                : n("cr:4533").getDebugDoNotSendRetryReceipt();
            if (h != null && h > 0)
              return (
                n("cr:4533") == null ||
                  n("cr:4533").setDebugDoNotSendRetryReceipt(h - 1),
                (c || (c = n("Promise"))).resolve()
              );
          }
          try {
            var y = o("WAWebSignalProtocolStore").getSignalProtocolStore(),
              C = yield (c || (c = n("Promise"))).all([
                y.getLocalRegistrationId(),
                y.getIdentityKeyPair(),
              ]),
              b = C[0],
              v = C[1];
            if (b == null || v == null)
              throw r("err")("No registration info found");
            var S;
            try {
              S = yield f(p, o("WAWebCryptoCurve25519").toCurveKeyPair(v));
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
            var R = !g.isBot() && !!(u != null && u.isBot());
            if (R) return;
            var L = o("WAWap").DROP_ATTR,
              E = o("WAWap").DROP_ATTR,
              k = o("WAWap").DROP_ATTR,
              I;
            if (g.isUser()) {
              if (
                ((I = o("WAWebCommsWapMd").DEVICE_JID(g)),
                o("WAWebUserPrefsMeUser").isMeAccount(
                  o("WAWebWidFactory").asUserWidOrThrow(g),
                ))
              )
                if (l) L = "peer";
                else if (m) E = o("WAWebCommsWapMd").USER_JID(m);
                else
                  return (c || (c = n("Promise"))).reject(
                    r("err")(
                      "sendRetryReceipt: send retry to peer device without recipient",
                    ),
                  );
            } else
              ((I = o("WAWebCommsWapMd").CHAT_JID(g)),
                (k = u
                  ? o("WAWebCommsWapMd").DEVICE_JID(u)
                  : o("WAWap").DROP_ATTR));
            var T = o("WAWap").wap(
              "receipt",
              {
                id: o("WAWap").CUSTOM_STRING(a),
                to: I,
                participant: k,
                recipient: E,
                type: "retry",
                category: L,
              },
              o("WAWap").wap("retry", {
                v: "1",
                count: o("WAWap").INT(p),
                id: o("WAWap").CUSTOM_STRING(a),
                t: o("WAWap").CUSTOM_STRING(d),
                error: _ != null ? o("WAWap").INT(_) : o("WAWap").DROP_ATTR,
              }),
              o("WAWap").wap(
                "registration",
                null,
                o("WAWap").BIG_ENDIAN_CONTENT(b),
              ),
              S,
            );
            return o("WADeprecatedSendIq").deprecatedSendStanzaAndWaitForAck(
              T,
              o("WAWebCommsAckParser").toCoreAckTemplate({
                id: a,
                class: "receipt",
                from: g,
                participant: u,
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
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield h(e, t),
            r = n[0],
            a = n[1];
          return (
            a &&
              (yield o("WAWebSignalStoreApi").waSignalStore.markKeyAsUploaded(
                a.keyId,
              ),
              yield o(
                "WAWebSignalStoreApi",
              ).waSignalStore.markPreKeyAsDirectDistribution(a.keyId)),
            r
          );
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (e < d) return (c || (c = n("Promise"))).resolve([null, null]);
          try {
            var a = yield (c || (c = n("Promise"))).all([
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
              i = a[0],
              l = a[1],
              s = a[2];
            if (!i) throw r("err")("Signed pre key is not available");
            var m = o("WAWap").wap(
              "keys",
              null,
              o("WAWap").wap(
                "type",
                null,
                r("WAWebConstantsDeprecated").KEY_BUNDLE_TYPE,
              ),
              o("WAWap").wap("identity", null, t.pubKey),
              o("WAWebSignalUtilsApi").xmppPreKey(l),
              o("WAWebSignalUtilsApi").xmppSignedPreKey(i),
              s,
            );
            return [m, l];
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
