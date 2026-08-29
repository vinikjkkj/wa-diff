__d(
  "WAWebCryptoLibrary",
  [
    "Promise",
    "WAByteArray",
    "WACryptoLibrary",
    "WACryptoLibraryConfig",
    "WACryptoPQSession",
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
      R,
      L,
      E,
      k = o("WAWebCryptoLibraryDbCallbacksApi").getCryptoDbCallbacks();
    function I(e) {
      return {
        handleNewSession: o(
          "WAWebCryptoLibraryDbCallbacksApi",
        ).selectHandleNewSession(k, e),
        loadSession: o("WAWebCryptoLibraryDbCallbacksApi").selectLoadSession(
          k,
          e,
        ),
      };
    }
    function T() {
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
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.deviceId,
            n = e.sessionInfo,
            a = e.sessionScope;
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "CryptoLibrarySignal::createSignalSession sessionScope=",
                "",
              ])),
            a != null ? a : "default",
          );
          var i = yield k.getRegistrationInfo();
          if (!i) throw r("err")("No registration info found");
          var l =
            a === o("WAWebSessionScope").SessionScope.STATUS
              ? k.handleNewSessionStatusScope
              : k.handleNewSession;
          if (
            a === o("WAWebSessionScope").SessionScope.PQ &&
            o("WACryptoLibraryConfig").getCryptoLibraryConfig()
              .isPq1on1MessageEnabled === !0 &&
            n.kyberKey != null
          )
            try {
              var s = yield o("WACryptoPQSession").createOutgoingSessionPQ(
                i,
                n,
              );
              if (s.success) {
                yield k.handleNewSessionPqScope(
                  o("WAWebWidToJid").widToDeviceJid(t),
                  s.value.session,
                  s.value.session.remote.pubKey,
                  null,
                  void 0,
                );
                return;
              }
              o("WALogger")
                .WARN(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[pq] createSignalSession: PQXDH failed, falling back to empty PQ slot",
                    ])),
                )
                .sendLogs("createSignalSession-pqxdh-failed");
            } catch (e) {
              o("WALogger")
                .WARN(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "[pq] createSignalSession: PQXDH threw",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("createSignalSession-pqxdh-threw");
            }
          if (a !== o("WAWebSessionScope").SessionScope.PQ)
            return T()
              .establishOutgoingSession(
                { handleNewSession: l },
                i,
                o("WAWebWidToJid").widToDeviceJid(t),
                n,
                void 0,
              )
              .then(function (e) {
                if (!e.success)
                  throw (
                    o("WALogger").WARN(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
                          "CryptoLibrarySignal::createSignalSession failed with error ",
                          "",
                        ])),
                      e.error,
                    ),
                    r("err")(e.error)
                  );
              });
        })),
        x.apply(this, arguments)
      );
    }
    function $(e, t, n, r, o) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l) {
            (i === void 0 && (i = !1),
              o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
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
              c = yield k.getRegistrationInfo();
            if (!c)
              return (E || (E = n("Promise"))).reject(
                r("err")("No registration info found"),
              );
            var d = I(l),
              m = d.handleNewSession,
              p = d.loadSession;
            return T()
              .decryptContent(
                {
                  deleteKyberPreKey: k.deleteKyberPreKey,
                  handleNewSession: function (t, n, r, o, a) {
                    return m(t, n, r, o, a, i);
                  },
                  loadKyberPreKey: k.loadKyberPreKey,
                  loadOneTimePreKey: k.loadOneTimePreKey,
                  loadSession: p,
                  loadSignedPreKey: k.loadSignedPreKey,
                },
                c,
                o("WAWebWidToJid").widToDeviceJid(e),
                { ciphertext: a, type: s },
                function (e) {
                  return (
                    (u = o("WAByteArray").uint8ArrayToBuffer(e)),
                    (E || (E = n("Promise"))).resolve()
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
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
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
                if (
                  e instanceof
                    o("WAWebSignalCommonErrors").SignalDecryptionError ||
                  e instanceof
                    o("WAWebSignalCommonErrors").SignalMessageCounterError
                )
                  throw e;
                var t = r("getErrorSafe")(e);
                throw (
                  o("WALogger")
                    .ERROR(
                      b ||
                        (b = babelHelpers.taggedTemplateLiteralLoose([
                          "CryptoLibrarySignal::decryptSignalProto failed to decrypt: ",
                          "",
                        ])),
                      t,
                    )
                    .catching(t),
                  new (o("WAWebSignalCommonErrors").SignalDecryptionError)(
                    "Unexpected decryption error: " + t.message,
                  )
                );
              });
          },
        )),
        P.apply(this, arguments)
      );
    }
    function N(t, n, a, i) {
      (i === void 0 && (i = !1),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "CryptoLibrarySignal::encryptSignalProto sessionScope=",
              " omitSessionPersistence=",
              "",
            ])),
          a != null ? a : "default",
          String(i),
        ));
      var l = I(a),
        u = l.handleNewSession,
        c = l.loadSession,
        d = i
          ? function (e, t, n, r, o) {
              return u(e, t, n, r, o, !0);
            }
          : u;
      return T()
        .encryptContent(
          { handleNewSession: d, loadSession: c },
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
    function M(e, t) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebWidToJid").widToDeviceJid(e),
            r = I(t),
            a = r.loadSession,
            i = yield a(n);
          return i == null ? void 0 : i.remote;
        })),
        w.apply(this, arguments)
      );
    }
    function A(e, t, n) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
            c = yield T().encryptGroupContent(
              {
                loadSenderKeySession: k.loadSenderKeySession,
                saveSenderKeySession: k.saveSenderKeySession,
              },
              s,
              u,
              n,
            );
          if (!c.success && c.error === "errLoadSenderKeySession") {
            (c.error,
              o("WALogger").LOG(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "CryptoLibrarySignal::encryptGroupMessage no sender key, generating a new one",
                  ])),
              ));
            var d = yield o("WASignalKeys").makeKeyPair();
            (yield T().rotateGroupSenderKey(
              { saveSenderKeySession: k.saveSenderKeySession },
              s,
              u,
              d,
            ),
              (c = yield T().encryptGroupContent(
                {
                  loadSenderKeySession: k.loadSenderKeySession,
                  saveSenderKeySession: k.saveSenderKeySession,
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
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "CryptoLibrarySignal::encryptGroupMessage failed with error ",
                  "",
                ])),
              c.error,
            ),
            r("err")(c.error)
          );
        })),
        F.apply(this, arguments)
      );
    }
    function O(e, t, n) {
      return (
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "CryptoLibrarySignal::processSenderKeyDistributionMsg",
            ])),
        ),
        T()
          .saveSenderKeySession(
            {
              loadSenderKeySession: k.loadSenderKeySession,
              saveSenderKeySession: k.saveSenderKeySession,
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
    function B(e, t, a) {
      o("WALogger").LOG(
        d ||
          (d = babelHelpers.taggedTemplateLiteralLoose([
            "CryptoLibrarySignal::decryptGroupSignalProto",
          ])),
      );
      var i = null;
      return T()
        .decryptGroupContent(
          {
            loadSenderKeySession: k.loadSenderKeySession,
            saveSenderKeySession: k.saveSenderKeySession,
          },
          o("WAWebWidToJid").widToMulticastJid(e),
          o("WAWebWidToJid").widToDeviceJid(t),
          a,
          function (e) {
            return (
              (i = o("WAByteArray").uint8ArrayToBuffer(e)),
              (E || (E = n("Promise"))).resolve()
            );
          },
        )
        .then(function (e) {
          if (e.success) {
            if (i == null)
              throw new (o("WAWebSignalCommonErrors").SignalDecryptionError)(
                "Null result on successful decryption of group msg",
              );
            return i;
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
                .catching(r("getErrorSafe")(e)),
              new (o("WAWebSignalCommonErrors").SignalDecryptionError)(
                "Unexpected decryption error",
              ));
        });
    }
    function W(e, t) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          o("WALogger").LOG(
            R ||
              (R = babelHelpers.taggedTemplateLiteralLoose([
                "CryptoLibrarySignal::getGroupSenderKeyInfo",
              ])),
          );
          var n = yield r(
            "WAWebCryptoLibraryUtilsApi",
          ).createSenderKeyDistributionMsg({
            author: o("WAWebWidToJid").widToDeviceJid(t),
            groupJid: o("WAJids").toGroupJid(e.toString({ legacy: !0 })),
            loadSenderKeySession: k.loadSenderKeySession,
            saveSenderKeySession: k.saveSenderKeySession,
          });
          if (n.success) return o("WAByteArray").uint8ArrayToBuffer(n.value);
          throw (
            o("WALogger").WARN(
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
                  "CryptoLibrarySignal::getGroupSenderKeyInfo failed with error ",
                  "",
                ])),
              n.error,
            ),
            r("err")(n.error)
          );
        })),
        q.apply(this, arguments)
      );
    }
    ((l.getCryptoLibModule = T),
      (l.createSignalSession = D),
      (l.decryptSignalProto = $),
      (l.encryptSignalProto = N),
      (l.getRemoteRegId = M),
      (l.encryptSenderKeyMsgSignalProto = A),
      (l.processSenderKeyDistributionMsg = O),
      (l.decryptGroupSignalProto = B),
      (l.getGroupSenderKeyInfo = W));
  },
  98,
);
