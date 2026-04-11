__d(
  "WAWebCryptoLibrary",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "err",
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
      R,
      L = o("WAWebCryptoLibraryDbCallbacksApi").getCryptoDbCallbacks();
    function E() {
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
    function k(e, t, n, r) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "CryptoLibrarySignal::createSignalSession sessionScope=",
                  "",
                ])),
              n != null ? n : "default",
            );
            var i = yield L.getRegistrationInfo();
            if (!i) throw r("err")("No registration info found");
            return E()
              .establishOutgoingSession(
                {
                  handleNewSession:
                    n === o("WAWebSessionScope").SessionScope.STATUS
                      ? L.handleNewSessionStatusScope
                      : L.handleNewSession,
                },
                i,
                o("WAWebWidToJid").widToDeviceJid(e),
                t,
                void 0,
                a,
              )
              .then(function (e) {
                if (!e.success)
                  throw (
                    o("WALogger").WARN(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "CryptoLibrarySignal::createSignalSession failed with error ",
                          "",
                        ])),
                      e.error,
                    ),
                    r("err")(e.error)
                  );
              });
          },
        )),
        I.apply(this, arguments)
      );
    }
    function T(e, t, n, r, o) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l) {
            (i === void 0 && (i = !1),
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "CryptoLibrarySignal::decryptSignalProto sessionScope=",
                    "",
                  ])),
                l != null ? l : "default",
              ));
            var s =
                t === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
                  ? "pkmsg"
                  : "msg",
              u,
              c = yield L.getRegistrationInfo();
            if (!c)
              return (R || (R = n("Promise"))).reject(
                r("err")("No registration info found"),
              );
            var d = l === o("WAWebSessionScope").SessionScope.STATUS,
              m = d ? L.handleNewSessionStatusScope : L.handleNewSession;
            return E()
              .decryptContent(
                {
                  handleNewSession: function (t, n, r, o, a) {
                    return m(t, n, r, o, a, i);
                  },
                  loadOneTimePreKey: L.loadOneTimePreKey,
                  loadSession: d ? L.loadSessionStatusScope : L.loadSession,
                  loadSignedPreKey: L.loadSignedPreKey,
                },
                c,
                o("WAWebWidToJid").widToDeviceJid(e),
                { ciphertext: a, type: s },
                function (e) {
                  return (
                    (u = o("WAByteArray").uint8ArrayToBuffer(e)),
                    (R || (R = n("Promise"))).resolve()
                  );
                },
                {},
              )
              .then(function (e) {
                if (e.success) {
                  if (u == null)
                    throw new (o(
                      "WAWebSignalCommonErrors",
                    ).SignalDecryptionError)(
                      "Null result on successful decryption",
                    );
                  return u;
                }
                var t = e.error;
                throw (
                  o("WALogger").WARN(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "CryptoLibrarySignal::decryptMessage failed with error ",
                        "",
                      ])),
                    t,
                  ),
                  t === "errDuplicateMsg"
                    ? new (o(
                        "WAWebSignalCommonErrors",
                      ).SignalMessageCounterError)(t)
                    : new (o("WAWebSignalCommonErrors").SignalDecryptionError)(
                        t,
                      )
                );
              })
              .catch(function (e) {
                throw e instanceof
                  o("WAWebSignalCommonErrors").SignalDecryptionError ||
                  e instanceof
                    o("WAWebSignalCommonErrors").SignalMessageCounterError
                  ? e
                  : (o("WALogger")
                      .ERROR(
                        y ||
                          (y = babelHelpers.taggedTemplateLiteralLoose([
                            "CryptoLibrarySignal::decryptSignalProto failed to decrypt",
                          ])),
                      )
                      .catching(e),
                    new (o("WAWebSignalCommonErrors").SignalDecryptionError)(
                      "Unexpected decryption error",
                    ));
              });
          },
        )),
        D.apply(this, arguments)
      );
    }
    function x(t, n, a) {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "CryptoLibrarySignal::encryptSignalProto sessionScope=",
            "",
          ])),
        a != null ? a : "default",
      );
      var i = a === o("WAWebSessionScope").SessionScope.STATUS;
      return E()
        .encryptContent(
          {
            handleNewSession: i
              ? L.handleNewSessionStatusScope
              : L.handleNewSession,
            loadSession: i ? L.loadSessionStatusScope : L.loadSession,
          },
          o("WAWebWidToJid").widToDeviceJid(t),
          n,
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
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "CryptoLibrarySignal::encryptSignalProto:failed with error ",
                  "",
                ])),
              e.error,
            ),
            r("err")(e.error)
          );
        });
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebWidToJid").widToDeviceJid(e),
            n = yield L.loadSession(t);
          return n == null ? void 0 : n.remote;
        })),
        P.apply(this, arguments)
      );
    }
    function N(e, t, n) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
            c = yield E().encryptGroupContent(
              {
                loadSenderKeySession: L.loadSenderKeySession,
                saveSenderKeySession: L.saveSenderKeySession,
              },
              s,
              u,
              n,
            );
          if (!c.success && c.error === "errLoadSenderKeySession") {
            (c.error,
              o("WALogger").LOG(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "CryptoLibrarySignal::encryptGroupMessage no sender key, generating a new one",
                  ])),
              ));
            var d = yield o("WASignalKeys").makeKeyPair();
            (yield E().rotateGroupSenderKey(
              { saveSenderKeySession: L.saveSenderKeySession },
              s,
              u,
              d,
            ),
              (c = yield E().encryptGroupContent(
                {
                  loadSenderKeySession: L.loadSenderKeySession,
                  saveSenderKeySession: L.saveSenderKeySession,
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
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "CryptoLibrarySignal::encryptGroupMessage failed with error ",
                  "",
                ])),
              c.error,
            ),
            r("err")(c.error)
          );
        })),
        M.apply(this, arguments)
      );
    }
    function w(e, t, n) {
      return (
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "CryptoLibrarySignal::processSenderKeyDistributionMsg",
            ])),
        ),
        E()
          .saveSenderKeySession(
            {
              loadSenderKeySession: L.loadSenderKeySession,
              saveSenderKeySession: L.saveSenderKeySession,
            },
            e,
            o("WAWebWidToJid").widToDeviceJid(t),
            new Uint8Array(n),
          )
          .then(function (e) {
            if (!e.success)
              throw (
                o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
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
    function A(e, t, r) {
      o("WALogger").LOG(
        d ||
          (d = babelHelpers.taggedTemplateLiteralLoose([
            "CryptoLibrarySignal::decryptGroupSignalProto",
          ])),
      );
      var a = null;
      return E()
        .decryptGroupContent(
          {
            loadSenderKeySession: L.loadSenderKeySession,
            saveSenderKeySession: L.saveSenderKeySession,
          },
          o("WAWebWidToJid").widToMulticastJid(e),
          o("WAWebWidToJid").widToDeviceJid(t),
          r,
          function (e) {
            return (
              (a = o("WAByteArray").uint8ArrayToBuffer(e)),
              (R || (R = n("Promise"))).resolve()
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
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
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
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "CryptoLibrarySignal::decryptGroupSignalProto failed to decrypt",
                    ])),
                )
                .catching(e),
              new (o("WAWebSignalCommonErrors").SignalDecryptionError)(
                "Unexpected decryption error",
              ));
        });
    }
    function F(e, t) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          o("WALogger").LOG(
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
                "CryptoLibrarySignal::getGroupSenderKeyInfo",
              ])),
          );
          var n = yield r(
            "WAWebCryptoLibraryUtilsApi",
          ).createSenderKeyDistributionMsg(
            L.loadSenderKeySession,
            L.saveSenderKeySession,
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
        })),
        O.apply(this, arguments)
      );
    }
    ((l.getCryptoLibModule = E),
      (l.createSignalSession = k),
      (l.decryptSignalProto = T),
      (l.encryptSignalProto = x),
      (l.getRemoteRegId = $),
      (l.encryptSenderKeyMsgSignalProto = N),
      (l.processSenderKeyDistributionMsg = w),
      (l.decryptGroupSignalProto = A),
      (l.getGroupSenderKeyInfo = F));
  },
  98,
);
