__d(
  "WAWebSendRetryReceiptJob",
  [
    "$InternalEnum",
    "WALogger",
    "WAWap",
    "WAWebAdvSignatureApi",
    "WAWebCoexV2BotWid",
    "WAWebCoexV2GatingUtils",
    "WAWebCoexV2ReceiptRecipient",
    "WAWebCommsAckParser",
    "WAWebCommsWapMd",
    "WAWebCryptoCurve25519",
    "WAWebDeprecatedSendIqWorkerCompatible",
    "WAWebEphemeralDecodeBroadcastSetting",
    "WAWebGroupAgentReceipts",
    "WAWebHandleMsgError",
    "WAWebKyberPreKeyStore",
    "WAWebPQGatingUtils",
    "WAWebSendReceiptJobCommon",
    "WAWebSignalCommonErrors",
    "WAWebSignalConst",
    "WAWebSignalKeyApi",
    "WAWebSignalProtocolStore",
    "WAWebSignalStoreApi",
    "WAWebSignalUtilsApi",
    "WAWebUserUtils",
    "WAWebWidFactory",
    "cr:10198",
    "cr:17674",
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
        i = t.failedEncType,
        l = t.isPeer,
        u = l === void 0 ? !1 : l,
        c = t.isStateless,
        d = c === void 0 ? !1 : c,
        m = t.participant,
        _ = t.rawTs,
        f = t.receiptModeBitmask,
        g = t.recipient,
        h = t.retryCount,
        y = t.retryReason,
        C = t.to;
      if (
        (r("gkx")("16539") &&
          (n("cr:10198") == null ||
            n("cr:10198").injectDebug(
              C,
              "RetryReceiptSent",
              "externalId:" + a,
            )),
        r("gkx")("16539"))
      ) {
        var b =
          n("cr:17674") == null
            ? void 0
            : n("cr:17674").getDebugDoNotSendRetryReceipt();
        if (b != null && b > 0)
          return (
            n("cr:17674") == null ||
              n("cr:17674").setDebugDoNotSendRetryReceipt(b - 1),
            Promise.resolve()
          );
      }
      try {
        var v = o("WAWebSignalProtocolStore").getSignalProtocolStore(),
          S = await Promise.all([
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
            !o("WAWebUserUtils").isMeAccount(
              o("WAWebWidFactory").asUserWidOrThrow(C),
            ),
          k;
        try {
          k = await p({
            identityKeyPair: o("WAWebCryptoCurve25519").toCurveKeyPair(L),
            is1on1: E,
            isStateless: d,
            retryCount: h,
          });
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
        var I = !C.isBot() && !!(m != null && m.isBot());
        if (
          I &&
          !o("WAWebGroupAgentReceipts").shouldSendGroupAgentRetryReceipt(
            C,
            m,
            i,
          )
        )
          return;
        var T = o("WAWap").DROP_ATTR,
          D = o("WAWap").DROP_ATTR,
          x = o("WAWap").DROP_ATTR,
          $,
          P = !1;
        if (
          C.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) &&
          o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled()
        ) {
          $ = o("WAWebCommsWapMd").USER_JID(C);
          var N =
            g != null
              ? o("WAWebCoexV2ReceiptRecipient").toCoexV2ReceiptRecipient(g)
              : null;
          N != null && (D = o("WAWebCommsWapMd").USER_JID(N));
        } else if (C.isUser()) {
          if (
            (($ = o("WAWebCommsWapMd").DEVICE_JID(C)),
            o("WAWebUserUtils").isMeAccount(
              o("WAWebWidFactory").asUserWidOrThrow(C),
            ))
          )
            if (u) ((T = "peer"), (P = !0));
            else if (g) D = o("WAWebCommsWapMd").USER_JID(g);
            else
              return Promise.reject(
                r("err")(
                  "sendRetryReceipt: send retry to peer device without recipient",
                ),
              );
        } else
          (($ = o("WAWebCommsWapMd").CHAT_JID(C)),
            (x = m
              ? o("WAWebCommsWapMd").DEVICE_JID(m)
              : o("WAWap").DROP_ATTR));
        var M = P
            ? null
            : o("WAWebSendReceiptJobCommon").genReceiptMetaModeNode(
                f != null ? f : 0,
              ),
          w = o("WAWap").wap(
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
              t: o("WAWap").CUSTOM_STRING(_),
              error: y != null ? o("WAWap").INT(y) : o("WAWap").DROP_ATTR,
            }),
            o("WAWap").wap(
              "registration",
              null,
              o("WAWap").BIG_ENDIAN_CONTENT(R),
            ),
            k,
            M,
          );
        return o(
          "WAWebDeprecatedSendIqWorkerCompatible",
        ).deprecatedSendStanzaAndWaitForAck(
          w,
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
            s || (s = babelHelpers.taggedTemplateLiteralLoose(["error: ", ""])),
            e,
          )
          .sendLogs(
            "sendRetryReceipt: error while creating or sending the retry message",
          );
      }
    }
    async function p(e) {
      var t = e.identityKeyPair,
        n = e.is1on1,
        r = n === void 0 ? !1 : n,
        a = e.isStateless,
        i = a === void 0 ? !1 : a,
        l = e.retryCount,
        s = await _({
          identityKeyPair: t,
          is1on1: r,
          isStateless: i,
          retryCount: l,
        }),
        u = s[0],
        c = s[1];
      return (
        c &&
          (await o("WAWebSignalStoreApi").waSignalStore.markKeyAsUploaded(
            c.keyId,
          ),
          await o(
            "WAWebSignalStoreApi",
          ).waSignalStore.markPreKeyAsDirectDistribution(c.keyId)),
        u
      );
    }
    async function _(e) {
      var t = e.identityKeyPair,
        n = e.is1on1,
        a = n === void 0 ? !1 : n,
        i = e.isStateless,
        l = i === void 0 ? !1 : i,
        s = e.retryCount,
        d = l || s >= c;
      if (!d) return Promise.resolve([null, null]);
      try {
        var m = await Promise.all([
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
                        { sampling: r("gkx")("9092") ? 1 : 0.1 },
                      ),
                  o("WAWap").wap("device-identity", null, e)
                );
              }),
          ]),
          p = m[0],
          _ = m[1],
          f = m[2];
        if (!p) throw r("err")("Signed pre key is not available");
        var g = null;
        if (
          a &&
          o("WAWebPQGatingUtils").isPq1on1MessageEnabled() &&
          (await o("WAWebKyberPreKeyStore").isPQMigrated())
        ) {
          var h = await o(
            "WAWebKyberPreKeyStore",
          ).loadLatestKyberLastResortKey();
          h != null && (g = o("WAWebSignalUtilsApi").xmppPqPreKey(h));
        }
        var y = o("WAWap").wap(
          "keys",
          null,
          o("WAWap").wap("type", null, o("WAWebSignalConst").KEY_BUNDLE_TYPE),
          o("WAWap").wap("identity", null, t.pubKey),
          o("WAWebSignalUtilsApi").xmppPreKey(_),
          o("WAWebSignalUtilsApi").xmppSignedPreKey(p),
          g,
          f,
        );
        return [y, _];
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
