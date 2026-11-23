__d(
  "WAWebMsgProcessingDecryptEnc",
  [
    "WALogger",
    "WAWebBackendJobs.flow",
    "WAWebBotMessageSecret",
    "WAWebBotUtils",
    "WAWebCoexV2BotSecretLifecycle",
    "WAWebMsgProcessingApiUtils",
    "WAWebOrphanBotMsgError",
    "WAWebSignal",
    "WAWebWasaRootSecretWriter",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      var t = e.enc,
        n = e.from,
        a = e.parsedMsgPayload,
        i = e.participant,
        l = e.sessionScope,
        s = t.ciphertext,
        c = t.e2eType;
      return c === o("WAWebBackendJobs.flow").CiphertextType.Skmsg
        ? (function () {
            return n.isGroup() || n.isBroadcast()
              ? i
                ? o("WAWebSignal").Cipher.decryptGroupSignalProto({
                    ciphertext: s,
                    sender: i,
                    target: n,
                  })
                : Promise.reject(
                    r("err")(
                      "['messaging'] decryptEnc: receive msg from " +
                        n.toString() +
                        " without participant",
                    ),
                  )
              : Promise.reject(
                  r("err")(
                    "['messaging'] decryptEnc: Can not do skmsg for non group " +
                      n.toString(),
                  ),
                );
          })()
        : c === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg ||
            c === o("WAWebBackendJobs.flow").CiphertextType.Msg
          ? (function () {
              var e = n.isUser() ? n : i;
              if (!e)
                return Promise.reject(
                  r("err")(
                    "['messaging'] decryptEnc: receive msg from " +
                      n.toString() +
                      " without participant",
                  ),
                );
              var u = o(
                "WAWebMsgProcessingApiUtils",
              ).shouldOmitSessionPersistence(c, a, t, e);
              return o("WAWebSignal").Cipher.decryptSignalProto(e, c, s, u, l);
            })()
          : c === o("WAWebBackendJobs.flow").CiphertextType.Msmsg
            ? u(s, a)
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    c,
                );
              })();
    }
    async function u(e, t) {
      try {
        return await o("WAWebBotMessageSecret").decryptMsmsgBotMessage(e, t);
      } catch (i) {
        var n = c(i);
        if (
          n != null &&
          o(
            "WAWebCoexV2BotSecretLifecycle",
          ).isRetainedCoexV2BotMessageSecretRecoveryApplicable(t)
        )
          return d(e, t, n);
        if (!(i instanceof r("WAWebOrphanBotMsgError"))) throw i;
        var a = await m(t);
        if (a === "recovered")
          return o("WAWebBotMessageSecret").decryptMsmsgBotMessage(e, t);
        throw a === "unrecovered"
          ? new (r("WAWebOrphanBotMsgError"))(
              i.targetMsgKey,
              "wasa-root-secret-missing",
            )
          : i;
      }
    }
    function c(e) {
      return e instanceof
        o("WAWebBotMessageSecret").RetainedBotMessageSecretLookupError ||
        (e instanceof r("WAWebOrphanBotMsgError") &&
          (e.reason === "no-target-row" ||
            e.reason === "placeholder-target-row"))
        ? e
        : null;
    }
    async function d(t, n, a) {
      var i;
      try {
        i = await o(
          "WAWebCoexV2BotSecretLifecycle",
        ).getRetainedCoexV2BotMessageSecret(n);
      } catch (t) {
        throw (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] retained bot-secret lookup failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("coexv2-retained-secret-recovery-failed"),
          a
        );
      }
      if (i == null) throw a;
      return o(
        "WAWebBotMessageSecret",
      ).decryptMsmsgFbidBotMessageWithBotMessageSecret(t, n, i);
    }
    async function m(e) {
      var t,
        n = e.msgInfo,
        r = e.msgMeta,
        a = r.targetId;
      if (a == null) return "not-wasa";
      var i = (t = r.targetChatJid) != null ? t : n.chat;
      return o("WAWebBotUtils").isHatchBot(i)
        ? (await o(
            "WAWebWasaRootSecretWriter",
          ).maybeRecoverWasaRootSecretFromStore(i, a))
          ? "recovered"
          : "unrecovered"
        : "not-wasa";
    }
    l.decryptEnc = s;
  },
  98,
);
