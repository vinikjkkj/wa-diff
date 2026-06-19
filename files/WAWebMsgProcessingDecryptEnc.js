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
    function s(t, a, i, l, s) {
      var c = t.ciphertext,
        d = t.e2eType;
      return d === o("WAWebBackendJobs.flow").CiphertextType.Skmsg
        ? (function () {
            return a.isGroup() || a.isBroadcast()
              ? i
                ? o("WAWebSignal").Cipher.decryptGroupSignalProto(a, i, c)
                : (e || (e = n("Promise"))).reject(
                    r("err")(
                      "['messaging'] decryptEnc: receive msg from " +
                        a.toString() +
                        " without participant",
                    ),
                  )
              : (e || (e = n("Promise"))).reject(
                  r("err")(
                    "['messaging'] decryptEnc: Can not do skmsg for non group " +
                      a.toString(),
                  ),
                );
          })()
        : d === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg ||
            d === o("WAWebBackendJobs.flow").CiphertextType.Msg
          ? (function () {
              var u = a.isUser() ? a : i;
              if (!u)
                return (e || (e = n("Promise"))).reject(
                  r("err")(
                    "['messaging'] decryptEnc: receive msg from " +
                      a.toString() +
                      " without participant",
                  ),
                );
              var m = o(
                "WAWebMsgProcessingApiUtils",
              ).shouldOmitSessionPersistence(d, l, t);
              return o("WAWebSignal").Cipher.decryptSignalProto(u, d, c, m, s);
            })()
          : d === o("WAWebBackendJobs.flow").CiphertextType.Msmsg
            ? u(c, l)
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    d,
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
