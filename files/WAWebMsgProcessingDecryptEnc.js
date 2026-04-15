__d(
  "WAWebMsgProcessingDecryptEnc",
  [
    "Promise",
    "WAWebBackendJobs.flow",
    "WAWebBotMessageSecret",
    "WAWebMsgProcessingApiUtils",
    "WAWebSignal",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, a, i, l, s) {
      var u = t.ciphertext,
        c = t.e2eType;
      return c === o("WAWebBackendJobs.flow").CiphertextType.Skmsg
        ? (function () {
            return a.isGroup() || a.isBroadcast()
              ? i
                ? o("WAWebSignal").Cipher.decryptGroupSignalProto(a, i, u)
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
        : c === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg ||
            c === o("WAWebBackendJobs.flow").CiphertextType.Msg
          ? (function () {
              var d = a.isUser() ? a : i;
              if (!d)
                return (e || (e = n("Promise"))).reject(
                  r("err")(
                    "['messaging'] decryptEnc: receive msg from " +
                      a.toString() +
                      " without participant",
                  ),
                );
              var m = o(
                "WAWebMsgProcessingApiUtils",
              ).shouldOmitSessionPersistence(c, l, t);
              return o("WAWebSignal").Cipher.decryptSignalProto(d, c, u, m, s);
            })()
          : c === o("WAWebBackendJobs.flow").CiphertextType.Msmsg
            ? o("WAWebBotMessageSecret").decryptMsmsgBotMessage(u, l)
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    c,
                );
              })();
    }
    l.decryptEnc = s;
  },
  98,
);
