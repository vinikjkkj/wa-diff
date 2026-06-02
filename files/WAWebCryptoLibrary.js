__d(
  "WAWebCryptoLibrary",
  [
    "WAByteArray",
    "WACryptoLibrary",
    "WAJids",
    "WALogger",
    "WASignalKeys",
    "WAWebBackendJobs.flow",
    "WAWebCryptoLibraryDbCallbacksApi",
    "WAWebCryptoLibraryUtilsApi",
    "WAWebSessionScope",
    "WAWebSignalCommonErrors",
    "WAWebWidToJid",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R = o("WAWebCryptoLibraryDbCallbacksApi").getCryptoDbCallbacks();
    function L() {
      var e;
      return {
        establishOutgoingSession: (e = o("WACryptoLibrary"))
          .establishOutgoingSession,
        decryptContent: e.decryptContent,
        encryptContent: e.encryptContent,
        encryptGroupContent: e.encryptGroupContent,
        decryptGroupContent: e.decryptGroupContent,
        saveSenderKeySession: e.saveSenderKeySession,
        rotateGroupSenderKey: e.rotateGroupSenderKey,
      };
    }
    async function E(t, n, a, i) {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "CryptoLibrarySignal::createSignalSession sessionScope=",
            "",
          ])),
        a != null ? a : "default",
      );
      var l = await R.getRegistrationInfo();
      if (!l) throw r("err")("No registration info found");
      return L()
        .establishOutgoingSession(
          {
            handleNewSession:
              a === o("WAWebSessionScope").SessionScope.STATUS
                ? R.handleNewSessionStatusScope
                : R.handleNewSession,
          },
          l,
          o("WAWebWidToJid").widToDeviceJid(t),
          n,
          void 0,
          i,
        )
        .then(function (e) {
          if (!e.success)
            throw (
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "CryptoLibrarySignal::createSignalSession failed with error ",
                    "",
                  ])),
                e.error,
              ),
              r("err")(e.error)
            );
        });
    }
    async function k(e, t, n, a, i) {
      (a === void 0 && (a = !1),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "CryptoLibrarySignal::decryptSignalProto sessionScope=",
              "",
            ])),
          i != null ? i : "default",
        ));
      var l =
          t === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
            ? "pkmsg"
            : "msg",
        s,
        m = await R.getRegistrationInfo();
      if (!m) return Promise.reject(r("err")("No registration info found"));
      var p = i === o("WAWebSessionScope").SessionScope.STATUS,
        _ = p ? R.handleNewSessionStatusScope : R.handleNewSession;
      return L()
        .decryptContent(
          {
            handleNewSession: function (t, n, r, o, i) {
              return _(t, n, r, o, i, a);
            },
            loadOneTimePreKey: R.loadOneTimePreKey,
            loadSession: p ? R.loadSessionStatusScope : R.loadSession,
            loadSignedPreKey: R.loadSignedPreKey,
          },
          m,
          o("WAWebWidToJid").widToDeviceJid(e),
          { ciphertext: n, type: l },
          function (e) {
            return (
              (s = o("WAByteArray").uint8ArrayToBuffer(e)),
              Promise.resolve()
            );
          },
          {},
        )
        .then(function (e) {
          if (e.success) {
            if (s == null)
              throw new (o("WAWebSignalCommonErrors").SignalDecryptionError)(
                "Null result on successful decryption",
              );
            return s;
          }
          var t = e.error;
          throw (
            o("WALogger").WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "CryptoLibrarySignal::decryptMessage failed with error ",
                  "",
                ])),
              t,
            ),
            t === "errDuplicateMsg"
              ? new (o("WAWebSignalCommonErrors").SignalMessageCounterError)(t)
              : new (o("WAWebSignalCommonErrors").SignalDecryptionError)(t)
          );
        })
        .catch(function (e) {
          throw e instanceof
            o("WAWebSignalCommonErrors").SignalDecryptionError ||
            e instanceof o("WAWebSignalCommonErrors").SignalMessageCounterError
            ? e
            : (o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "CryptoLibrarySignal::decryptSignalProto failed to decrypt",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              new (o("WAWebSignalCommonErrors").SignalDecryptionError)(
                "Unexpected decryption error",
              ));
        });
    }
    function I(e, t, n, a) {
      (a === void 0 && (a = !1),
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "CryptoLibrarySignal::encryptSignalProto sessionScope=",
              " omitSessionPersistence=",
              "",
            ])),
          n != null ? n : "default",
          String(a),
        ));
      var i = n === o("WAWebSessionScope").SessionScope.STATUS,
        l = i ? R.handleNewSessionStatusScope : R.handleNewSession,
        s = a
          ? function (e, t, n, r, o) {
              return l(e, t, n, r, o, !0);
            }
          : l;
      return L()
        .encryptContent(
          {
            handleNewSession: s,
            loadSession: i ? R.loadSessionStatusScope : R.loadSession,
          },
          o("WAWebWidToJid").widToDeviceJid(e),
          t,
          null,
        )
        .then(function (e) {
          if (e.success) {
            var t,
              n = e.value,
              a = n.ciphertext,
              i = n.type;
            return {
              type:
                (t = o("WAWebBackendJobs.flow").CiphertextType.cast(i)) != null
                  ? t
                  : o("WAWebBackendJobs.flow").CiphertextType.Msg,
              ciphertext: o("WAByteArray").uint8ArrayToBuffer(a),
            };
          }
          throw (
            o("WALogger").WARN(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "CryptoLibrarySignal::encryptSignalProto:failed with error ",
                  "",
                ])),
              e.error,
            ),
            r("err")(e.error)
          );
        });
    }
    async function T(e) {
      var t = o("WAWebWidToJid").widToDeviceJid(e),
        n = await R.loadSession(t);
      return n == null ? void 0 : n.remote;
    }
    async function D(e, t, n) {
      var a,
        i,
        l = o("WAWebWidToJid").widToMulticastJid(e),
        s =
          (a =
            (i = o("WAJids").validateGroupJid(l)) != null
              ? i
              : o("WAJids").validateStatusJid(l)) != null
            ? a
            : o("WAJids").validateBroadcastJid(l);
      if (s == null) throw r("err")("Invalid multicast JID");
      var u = o("WAWebWidToJid").widToDeviceJid(t),
        c = await L().encryptGroupContent(
          {
            loadSenderKeySession: R.loadSenderKeySession,
            saveSenderKeySession: R.saveSenderKeySession,
          },
          s,
          u,
          n,
        );
      if (!c.success && c.error === "errLoadSenderKeySession") {
        (c.error,
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "CryptoLibrarySignal::encryptGroupMessage no sender key, generating a new one",
              ])),
          ));
        var d = await o("WASignalKeys").makeKeyPair();
        (await L().rotateGroupSenderKey(
          { saveSenderKeySession: R.saveSenderKeySession },
          s,
          u,
          d,
        ),
          (c = await L().encryptGroupContent(
            {
              loadSenderKeySession: R.loadSenderKeySession,
              saveSenderKeySession: R.saveSenderKeySession,
            },
            s,
            u,
            n,
          )));
      }
      if (c.success) {
        var m = c.value.ciphertext.ciphertext,
          p = c.value.senderKeyDistributionProto;
        return {
          ciphertext: o("WAByteArray").uint8ArrayToBuffer(m),
          senderKeyBytes: o("WAByteArray").uint8ArrayToBuffer(p),
        };
      }
      throw (
        o("WALogger").WARN(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
              "CryptoLibrarySignal::encryptGroupMessage failed with error ",
              "",
            ])),
          c.error,
        ),
        r("err")(c.error)
      );
    }
    function x(e, t, n) {
      return (
        o("WALogger").LOG(
          g ||
            (g = babelHelpers.taggedTemplateLiteralLoose([
              "CryptoLibrarySignal::processSenderKeyDistributionMsg",
            ])),
        ),
        L()
          .saveSenderKeySession(
            {
              loadSenderKeySession: R.loadSenderKeySession,
              saveSenderKeySession: R.saveSenderKeySession,
            },
            e,
            o("WAWebWidToJid").widToDeviceJid(t),
            new Uint8Array(n),
          )
          .then(function (e) {
            if (!e.success)
              throw (
                o("WALogger").WARN(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "CryptoLibrarySignal::processSenderKeyDistributionMsg failed with error ",
                      "",
                    ])),
                  e.error,
                ),
                r("err")(e.error)
              );
          })
      );
    }
    function $(e, t, n) {
      o("WALogger").LOG(
        y ||
          (y = babelHelpers.taggedTemplateLiteralLoose([
            "CryptoLibrarySignal::decryptGroupSignalProto",
          ])),
      );
      var a = null;
      return L()
        .decryptGroupContent(
          {
            loadSenderKeySession: R.loadSenderKeySession,
            saveSenderKeySession: R.saveSenderKeySession,
          },
          o("WAWebWidToJid").widToMulticastJid(e),
          o("WAWebWidToJid").widToDeviceJid(t),
          n,
          function (e) {
            return (
              (a = o("WAByteArray").uint8ArrayToBuffer(e)),
              Promise.resolve()
            );
          },
        )
        .then(function (e) {
          if (e.success) {
            if (a == null)
              throw new (o("WAWebSignalCommonErrors").SignalDecryptionError)(
                "Null result on successful decryption of group msg",
              );
            return a;
          }
          var t = e.error;
          throw (
            o("WALogger").WARN(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "CryptoLibrarySignal::decryptGroupMessage failed ",
                  "",
                ])),
              t,
            ),
            t === "errDuplicateMsg"
              ? new (o("WAWebSignalCommonErrors").SignalMessageCounterError)(t)
              : new (o("WAWebSignalCommonErrors").SignalDecryptionError)(t)
          );
        })
        .catch(function (e) {
          throw e instanceof
            o("WAWebSignalCommonErrors").SignalDecryptionError ||
            e instanceof o("WAWebSignalCommonErrors").SignalMessageCounterError
            ? e
            : (o("WALogger")
                .ERROR(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "CryptoLibrarySignal::decryptGroupSignalProto failed to decrypt",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              new (o("WAWebSignalCommonErrors").SignalDecryptionError)(
                "Unexpected decryption error",
              ));
        });
    }
    async function P(e, t) {
      o("WALogger").LOG(
        v ||
          (v = babelHelpers.taggedTemplateLiteralLoose([
            "CryptoLibrarySignal::getGroupSenderKeyInfo",
          ])),
      );
      var n = await r(
        "WAWebCryptoLibraryUtilsApi",
      ).createSenderKeyDistributionMsg(
        R.loadSenderKeySession,
        R.saveSenderKeySession,
        o("WAJids").toGroupJid(e.toString({ legacy: !0 })),
        o("WAWebWidToJid").widToDeviceJid(t),
      );
      if (n.success) return o("WAByteArray").uint8ArrayToBuffer(n.value);
      throw (
        o("WALogger").WARN(
          S ||
            (S = babelHelpers.taggedTemplateLiteralLoose([
              "CryptoLibrarySignal::getGroupSenderKeyInfo failed with error ",
              "",
            ])),
          n.error,
        ),
        r("err")(n.error)
      );
    }
    ((l.getCryptoLibModule = L),
      (l.createSignalSession = E),
      (l.decryptSignalProto = k),
      (l.encryptSignalProto = I),
      (l.getRemoteRegId = T),
      (l.encryptSenderKeyMsgSignalProto = D),
      (l.processSenderKeyDistributionMsg = x),
      (l.decryptGroupSignalProto = $),
      (l.getGroupSenderKeyInfo = P));
  },
  98,
);
