__d(
  "WAWebMsgProcessingDecryptEnc",
  [
    "Promise",
    "WAWebBackendJobs.flow",
    "WAWebBotMessageSecret",
    "WAWebMsgProcessingApiUtils",
    "WAWebOrphanBotMsgError",
    "WAWebSignal",
    "WAWebWasaRootSecretWriter",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      var a = t.enc,
        i = t.from,
        l = t.parsedMsgPayload,
        s = t.participant,
        c = t.sessionScope,
        d = a.ciphertext,
        m = a.e2eType;
      return m === o("WAWebBackendJobs.flow").CiphertextType.Skmsg
        ? (function () {
            return i.isGroup() || i.isBroadcast()
              ? s
                ? o("WAWebSignal").Cipher.decryptGroupSignalProto({
                    ciphertext: d,
                    sender: s,
                    target: i,
                  })
                : (e || (e = n("Promise"))).reject(
                    r("err")(
                      "['messaging'] decryptEnc: receive msg from " +
                        i.toString() +
                        " without participant",
                    ),
                  )
              : (e || (e = n("Promise"))).reject(
                  r("err")(
                    "['messaging'] decryptEnc: Can not do skmsg for non group " +
                      i.toString(),
                  ),
                );
          })()
        : m === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg ||
            m === o("WAWebBackendJobs.flow").CiphertextType.Msg
          ? (function () {
              var t = i.isUser() ? i : s;
              if (!t)
                return (e || (e = n("Promise"))).reject(
                  r("err")(
                    "['messaging'] decryptEnc: receive msg from " +
                      i.toString() +
                      " without participant",
                  ),
                );
              var u = o(
                "WAWebMsgProcessingApiUtils",
              ).shouldOmitSessionPersistence(m, l, a, t);
              return o("WAWebSignal").Cipher.decryptSignalProto(t, m, d, u, c);
            })()
          : m === o("WAWebBackendJobs.flow").CiphertextType.Msmsg
            ? u(d, l)
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    m,
                );
              })();
    }
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            return yield o("WAWebBotMessageSecret").decryptMsmsgBotMessage(
              e,
              t,
            );
          } catch (a) {
            if (!(a instanceof r("WAWebOrphanBotMsgError"))) throw a;
            var n = yield d(t);
            if (n)
              return o("WAWebBotMessageSecret").decryptMsmsgBotMessage(e, t);
            throw a;
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.msgInfo,
            r = e.msgMeta,
            a = r.targetId;
          if (a == null) return !1;
          var i = (t = r.targetChatJid) != null ? t : n.chat;
          return o(
            "WAWebWasaRootSecretWriter",
          ).maybeRecoverWasaRootSecretFromStore(i, a);
        })),
        m.apply(this, arguments)
      );
    }
    l.decryptEnc = s;
  },
  98,
);
