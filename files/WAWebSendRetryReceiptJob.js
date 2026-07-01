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
    "WAWebKyberPreKeyStore",
    "WAWebPQGatingUtils",
    "WAWebSendReceiptJobCommon",
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
            _ = t.receiptModeBitmask,
            g = t.recipient,
            h = t.retryCount,
            y = t.retryReason,
            C = t.to;
          if (
            (r("gkx")("26258") ||
              n("cr:10198") == null ||
              n("cr:10198").injectDebug(
                C,
                "RetryReceiptSent",
                "externalId:" + a,
              ),
            !r("gkx")("26258"))
          ) {
            var b =
              n("cr:4533") == null
                ? void 0
                : n("cr:4533").getDebugDoNotSendRetryReceipt();
            if (b != null && b > 0)
              return (
                n("cr:4533") == null ||
                  n("cr:4533").setDebugDoNotSendRetryReceipt(b - 1),
                (c || (c = n("Promise"))).resolve()
              );
          }
          try {
            var v = o("WAWebSignalProtocolStore").getSignalProtocolStore(),
              S = yield (c || (c = n("Promise"))).all([
                v.getLocalRegistrationId(),
                v.getIdentityKeyPair(),
              ]),
              R = S[0],
              L = S[1];
            if (R == null || L == null)
              throw r("err")("No registration info found");
            var E =
                C.isUser() &&
                !C.isBot() &&
                !o("WAWebUserPrefsMeUser").isMeAccount(
                  o("WAWebWidFactory").asUserWidOrThrow(C),
                ),
              k;
            try {
              k = yield f(
                h,
                o("WAWebCryptoCurve25519").toCurveKeyPair(L),
                d,
                E,
              );
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
            var I = !C.isBot() && !!(m != null && m.isBot());
            if (I) return;
            var T = o("WAWap").DROP_ATTR,
              D = o("WAWap").DROP_ATTR,
              x = o("WAWap").DROP_ATTR,
              $,
              P = !1;
            if (C.isUser()) {
              if (
                (($ = o("WAWebCommsWapMd").DEVICE_JID(C)),
                o("WAWebUserPrefsMeUser").isMeAccount(
                  o("WAWebWidFactory").asUserWidOrThrow(C),
                ))
              )
                if (l) ((T = "peer"), (P = !0));
                else if (g) D = o("WAWebCommsWapMd").USER_JID(g);
                else
                  return (c || (c = n("Promise"))).reject(
                    r("err")(
                      "sendRetryReceipt: send retry to peer device without recipient",
                    ),
                  );
            } else
              (($ = o("WAWebCommsWapMd").CHAT_JID(C)),
                (x = m
                  ? o("WAWebCommsWapMd").DEVICE_JID(m)
                  : o("WAWap").DROP_ATTR));
            var N = P
                ? null
                : o("WAWebSendReceiptJobCommon").genReceiptMetaModeNode(
                    _ != null ? _ : 0,
                  ),
              M = o("WAWap").wap(
                "receipt",
                {
                  id: o("WAWap").CUSTOM_STRING(a),
                  to: $,
                  participant: x,
                  recipient: D,
                  type: "retry",
                  category: T,
                },
                o("WAWap").wap("retry", {
                  v: "1",
                  count: o("WAWap").INT(h),
                  id: o("WAWap").CUSTOM_STRING(a),
                  t: o("WAWap").CUSTOM_STRING(p),
                  error: y != null ? o("WAWap").INT(y) : o("WAWap").DROP_ATTR,
                }),
                o("WAWap").wap(
                  "registration",
                  null,
                  o("WAWap").BIG_ENDIAN_CONTENT(R),
                ),
                k,
                N,
              );
            return o("WADeprecatedSendIq").deprecatedSendStanzaAndWaitForAck(
              M,
              o("WAWebCommsAckParser").toCoreAckTemplate({
                id: a,
                class: "receipt",
                from: C,
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
    function f(e, t, n, r) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            (n === void 0 && (n = !1), r === void 0 && (r = !1));
            var a = yield h(e, t, n, r),
              i = a[0],
              l = a[1];
            return (
              l &&
                (yield o("WAWebSignalStoreApi").waSignalStore.markKeyAsUploaded(
                  l.keyId,
                ),
                yield o(
                  "WAWebSignalStoreApi",
                ).waSignalStore.markPreKeyAsDirectDistribution(l.keyId)),
              i
            );
          },
        )),
        g.apply(this, arguments)
      );
    }
    function h(e, t, n, r) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i) {
            (a === void 0 && (a = !1), i === void 0 && (i = !1));
            var l = a || e >= d;
            if (!l) return (c || (c = n("Promise"))).resolve([null, null]);
            try {
              var s = yield (c || (c = n("Promise"))).all([
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
                m = s[0],
                p = s[1],
                _ = s[2];
              if (!m) throw r("err")("Signed pre key is not available");
              var f = null;
              if (
                i &&
                o("WAWebPQGatingUtils").isPq1on1MessageEnabled() &&
                (yield o("WAWebKyberPreKeyStore").isPQMigrated())
              ) {
                var g = yield o(
                  "WAWebKyberPreKeyStore",
                ).loadLatestKyberLastResortKey();
                g != null && (f = o("WAWebSignalUtilsApi").xmppPqPreKey(g));
              }
              var h = o("WAWap").wap(
                "keys",
                null,
                o("WAWap").wap(
                  "type",
                  null,
                  r("WAWebConstantsDeprecated").KEY_BUNDLE_TYPE,
                ),
                o("WAWap").wap("identity", null, t.pubKey),
                o("WAWebSignalUtilsApi").xmppPreKey(p),
                o("WAWebSignalUtilsApi").xmppSignedPreKey(m),
                f,
                _,
              );
              return [h, p];
            } catch (e) {
              throw r("err")("Could not create keys section for retry");
            }
          },
        )),
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
