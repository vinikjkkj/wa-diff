__d(
  "WAWebMsgProcessingDecryptEnc",
  [
    "Promise",
    "WALogger",
    "WAWebBackendJobs.flow",
    "WAWebBotMessageSecret",
    "WAWebBotUtils",
    "WAWebCoexV2BotSecretLifecycle",
    "WAWebMsgProcessingApiUtils",
    "WAWebOrphanBotMsgError",
    "WAWebSignal",
    "WAWebWasaRootSecretWriter",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      var t = e.enc,
        a = e.from,
        i = e.parsedMsgPayload,
        l = e.participant,
        u = e.sessionScope,
        d = t.ciphertext,
        m = t.e2eType;
      return m === o("WAWebBackendJobs.flow").CiphertextType.Skmsg
        ? (function () {
            return a.isGroup() || a.isBroadcast()
              ? l
                ? o("WAWebSignal").Cipher.decryptGroupSignalProto({
                    ciphertext: d,
                    sender: l,
                    target: a,
                  })
                : (s || (s = n("Promise"))).reject(
                    r("err")(
                      "['messaging'] decryptEnc: receive msg from " +
                        a.toString() +
                        " without participant",
                    ),
                  )
              : (s || (s = n("Promise"))).reject(
                  r("err")(
                    "['messaging'] decryptEnc: Can not do skmsg for non group " +
                      a.toString(),
                  ),
                );
          })()
        : m === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg ||
            m === o("WAWebBackendJobs.flow").CiphertextType.Msg
          ? (function () {
              var e = a.isUser() ? a : l;
              if (!e)
                return (s || (s = n("Promise"))).reject(
                  r("err")(
                    "['messaging'] decryptEnc: receive msg from " +
                      a.toString() +
                      " without participant",
                  ),
                );
              var c = o(
                "WAWebMsgProcessingApiUtils",
              ).shouldOmitSessionPersistence(m, i, t, e);
              return o("WAWebSignal").Cipher.decryptSignalProto(e, m, d, c, u);
            })()
          : m === o("WAWebBackendJobs.flow").CiphertextType.Msmsg
            ? c(d, i)
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    m,
                );
              })();
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            return yield o("WAWebBotMessageSecret").decryptMsmsgBotMessage(
              e,
              t,
            );
          } catch (i) {
            var n = m(i);
            if (
              n != null &&
              o(
                "WAWebCoexV2BotSecretLifecycle",
              ).isRetainedCoexV2BotMessageSecretRecoveryApplicable(t)
            )
              return p(e, t, n);
            if (!(i instanceof r("WAWebOrphanBotMsgError"))) throw i;
            var a = yield f(t);
            if (a === "recovered")
              return o("WAWebBotMessageSecret").decryptMsmsgBotMessage(e, t);
            throw a === "unrecovered"
              ? new (r("WAWebOrphanBotMsgError"))(
                  i.targetMsgKey,
                  "wasa-root-secret-missing",
                )
              : i;
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return e instanceof
        o("WAWebBotMessageSecret").RetainedBotMessageSecretLookupError ||
        (e instanceof r("WAWebOrphanBotMsgError") &&
          (e.reason === "no-target-row" ||
            e.reason === "placeholder-target-row"))
        ? e
        : null;
    }
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          var i;
          try {
            i = yield o(
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
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.msgInfo,
            r = e.msgMeta,
            a = r.targetId;
          if (a == null) return "not-wasa";
          var i = (t = r.targetChatJid) != null ? t : n.chat;
          return o("WAWebBotUtils").isHatchBot(i)
            ? (yield o(
                "WAWebWasaRootSecretWriter",
              ).maybeRecoverWasaRootSecretFromStore(i, a))
              ? "recovered"
              : "unrecovered"
            : "not-wasa";
        })),
        g.apply(this, arguments)
      );
    }
    l.decryptEnc = u;
  },
  98,
);
