__d(
  "WAMsgLogger",
  [
    "WAGetPlatformFromStanzaId",
    "WAGetStorageQplAnnotations",
    "WAGlobals",
    "WAJids",
    "WAMapContentTypeToFbType",
    "WAMessageLoggingPublisher",
    "WATagsLogger",
    "WATimeUtils",
    "WAUserHash",
    "WMIQplFlow",
    "getSafeQplErrorMessage",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 15,
      u = 16,
      c = r("justknobx")._("1889"),
      d = o("WATagsLogger").TAGS(["waMsg"]);
    function m(e, t) {
      e.endFail("runtime_error", {
        string: {
          errorDescription: o("getSafeQplErrorMessage").getSafeQPLErrorMessage(
            t,
          ),
          result: "runtime_error",
        },
      });
    }
    function p(e, t, n) {
      var r = s;
      return (
        o("WAJids").switchOnMsgrChatJidType(t.chat, {
          group: function () {
            r = u;
          },
          user: function () {
            r = s;
          },
        }),
        {
          int: {
            messageAge: o("WATimeUtils").unixTime() - e.serverTs,
            msgId: n,
            offlineDelivery: e.offline,
            threadType: r,
            retryCount: t.retryCount,
            deviceId: o("WAJids").extractDeviceId(
              o("WAGlobals").getMyDeviceJid(),
            ),
          },
          bool: { isPeerDevice: o("WAJids").isAuthorMe(t.author) },
          string: {
            senderDeviceJid: t.from,
            receiverDeviceJid: o("WAGlobals").getMyDeviceJid(),
            offlineThreadingId: e.stanzaId,
            e2eePlatform: o(
              "WAGetPlatformFromStanzaId",
            ).getPlatformFromStanzaId(e.stanzaId),
            jid: t.chat,
            msgType: o("WAMapContentTypeToFbType").mapContentTypeToFbType(
              t.contentType,
            ),
            queueType: e.offline != null ? "offline" : "online",
            userHash: o("WAUserHash").getUserHash(
              o("WAJids").extractUserId(o("WAGlobals").getMyUserJid()),
            ),
          },
        }
      );
    }
    function _(e) {
      e.addPoint("drop_franking_invalid_msg", {
        string: { result: "franking_invalid_msg" },
      });
    }
    function f(e) {
      e.endSuccess();
    }
    function g(e, t) {
      e.endFail(t);
    }
    function h(e) {
      e.addPoint("invisible_msg");
    }
    function y(e) {
      e.addPoint("process_retries");
    }
    function C(e, t) {
      var n = t.error,
        r = t.payload;
      (e.addPoint("decrypt_failure", {
        string: {
          decryptResult: "error",
          result: n,
          payload: r
            ? o("getSafeQplErrorMessage").getSafeQPLErrorMessage(r)
            : "",
        },
      }),
        e.addPoint("decrypt_end"));
    }
    function b(e) {
      e.addPoint("decrypt_end", {
        string: { decryptResult: "SUCCESS", result: "SUCCESS" },
      });
    }
    function v(e, t, n) {
      var r = {
        bool: { skdmSuccess: t },
        string: { skdmError: n != null ? n : "" },
      };
      e.addPoint("skdm-done", r);
    }
    function S(t, n) {
      (d.DEV(
        e || (e = babelHelpers.taggedTemplateLiteralLoose(["start decrypt"])),
      ),
        t.addPoint("decrypt_start", { bool: { hideDecryptError: n } }));
    }
    function R(e) {
      var t = e.commonMessageBase,
        n = e.msg,
        r = o("WAMessageLoggingPublisher").getWAIncomingMsgLoggingId(
          t.stanzaId,
        ),
        a = o("WAGlobals").getWaQpl(),
        i = o("WMIQplFlow").startQplFlow(a.messageReceiveReliability, {
          annotations: p(t, n, r),
          timeoutInMs: c,
        });
      o("WAGetStorageQplAnnotations")
        .getStorageQplAnnotations()
        .then(function (e) {
          i.addAnnotations(e);
        });
      var l = [];
      return (
        n.type === "Available"
          ? l.push(n.encType)
          : n.type === "SingleEnc"
            ? l.push(n.enc.encType)
            : n.type === "DualEnc" &&
              l.push(
                n.senderKeyDistributionEnc.encType,
                n.senderKeyMessageEnc.encType,
              ),
        i.addAnnotations({ string_array: { encTypes: l } }),
        n.type === "Unavailable" && L(i),
        i
      );
    }
    function L(e) {
      e.addPoint("unavailable-message", {
        string: {
          decryptedMsgType: "UnavailableMsg",
          decryptResult: "SUCCESS",
          result: "unavailable-msg",
        },
      });
    }
    ((l.endWAMessageReceiveRuntimeError = m),
      (l.logFrankingDrop = _),
      (l.endWAMessageReceiveSuccess = f),
      (l.endWAMessageReceiveFailure = g),
      (l.logInvisibleMsg = h),
      (l.logRetryIssued = y),
      (l.logDecryptFailure = C),
      (l.logDecryptEnd = b),
      (l.logSkdmDecryptionResult = v),
      (l.logStartDecryption = S),
      (l.startNewWAMessageLogger = R));
  },
  98,
);
