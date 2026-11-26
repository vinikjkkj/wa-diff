__d(
  "WAWebCryptoLibrary",
  [
    "WAByteArray",
    "WACryptoLibrary",
    "WACryptoLibraryConfig",
    "WACryptoPQSession",
    "WAJids",
    "WALogger",
    "WAResultOrError",
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
      R,
      L,
      E,
      k,
      I = o("WAWebCryptoLibraryDbCallbacksApi").getCryptoDbCallbacks();
    function T(e) {
      return {
        handleNewSession: o(
          "WAWebCryptoLibraryDbCallbacksApi",
        ).selectHandleNewSession(I, e),
        loadSession: o("WAWebCryptoLibraryDbCallbacksApi").selectLoadSession(
          I,
          e,
        ),
      };
    }
    function D() {
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
    async function x(t) {
      var n = t.deviceId,
        a = t.sessionInfo,
        i = t.sessionScope;
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "CryptoLibrarySignal::createSignalSession sessionScope=",
            "",
          ])),
        i != null ? i : "default",
      );
      var l = await I.getRegistrationInfo();
      if (!l) throw r("err")("No registration info found");
      var d =
        i === o("WAWebSessionScope").SessionScope.STATUS
          ? I.handleNewSessionStatusScope
          : I.handleNewSession;
      if (
        i === o("WAWebSessionScope").SessionScope.PQ &&
        o("WACryptoLibraryConfig").getCryptoLibraryConfig()
          .isPq1on1MessageEnabled === !0 &&
        a.kyberKey != null
      )
        try {
          var m = await o("WACryptoPQSession").createOutgoingSessionPQ(l, a);
          if (m.success) {
            await I.handleNewSessionPqScope(
              o("WAWebWidToJid").widToDeviceJid(n),
              m.value.session,
              m.value.session.remote.pubKey,
              null,
              void 0,
            );
            return;
          }
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[pq] createSignalSession: PQXDH failed, falling back to empty PQ slot",
                ])),
            )
            .sendLogs("createSignalSession-pqxdh-failed");
        } catch (e) {
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[pq] createSignalSession: PQXDH threw",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("createSignalSession-pqxdh-threw");
        }
      if (i !== o("WAWebSessionScope").SessionScope.PQ)
        return D()
          .establishOutgoingSession(
            { handleNewSession: d },
            l,
            o("WAWebWidToJid").widToDeviceJid(n),
            a,
            void 0,
          )
          .then(function (e) {
            if (!e.success)
              throw (
                o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "CryptoLibrarySignal::createSignalSession failed with error ",
                      "",
                    ])),
                  e.error,
                ),
                r("err")(e.error)
              );
          });
    }
    async function $(e, t, n, a, i) {
      (a === void 0 && (a = !1),
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
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
        u = await I.getRegistrationInfo();
      if (!u) return Promise.reject(r("err")("No registration info found"));
      var c = T(i),
        _ = c.handleNewSession,
        f = c.loadSession;
      return D()
        .decryptContent(
          {
            deleteKyberPreKey: I.deleteKyberPreKey,
            handleNewSession: function (t, n, r, o, i) {
              return _(t, n, r, o, i, a);
            },
            loadKyberPreKey: I.loadKyberPreKey,
            loadOneTimePreKey: I.loadOneTimePreKey,
            loadSession: f,
            loadSignedPreKey: I.loadSignedPreKey,
          },
          u,
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
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
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
          if (
            e instanceof o("WAWebSignalCommonErrors").SignalDecryptionError ||
            e instanceof o("WAWebSignalCommonErrors").SignalMessageCounterError
          )
            throw e;
          var t = r("getErrorSafe")(e);
          throw (
            o("WALogger")
              .ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
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
    }
    async function P(e, t, n, a) {
      try {
        var i = T(n),
          l = i.loadSession,
          s = await o("WACryptoLibrary").decryptMsgWithoutSaving(
            l,
            o("WAWebWidToJid").widToDeviceJid(e),
            t,
            a,
          );
        return (
          s.success ||
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "CryptoLibrarySignal::decryptSignalMsgWithoutSaving failed with error ",
                  "",
                ])),
              s.error,
            ),
          s
        );
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "CryptoLibrarySignal::decryptSignalMsgWithoutSaving threw",
                ])),
            )
            .catching(r("getErrorSafe")(e)),
          o("WAResultOrError").makeError("errUnexpected")
        );
      }
    }
    function N(e, t, n, a) {
      (a === void 0 && (a = !1),
        o("WALogger").LOG(
          g ||
            (g = babelHelpers.taggedTemplateLiteralLoose([
              "CryptoLibrarySignal::encryptSignalProto sessionScope=",
              " omitSessionPersistence=",
              "",
            ])),
          n != null ? n : "default",
          String(a),
        ));
      var i = T(n),
        l = i.handleNewSession,
        s = i.loadSession,
        u = a
          ? function (e, t, n, r, o) {
              return l(e, t, n, r, o, !0);
            }
          : l;
      return D()
        .encryptContent(
          { handleNewSession: u, loadSession: s },
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
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "CryptoLibrarySignal::encryptSignalProto:failed with error ",
                  "",
                ])),
              e.error,
            ),
            r("err")(e.error)
          );
        });
    }
    async function M(e, t) {
      var n = o("WAWebWidToJid").widToDeviceJid(e),
        r = T(t),
        a = r.loadSession,
        i = await a(n);
      return i == null ? void 0 : i.remote;
    }
    async function w(e, t, n) {
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
        c = await D().encryptGroupContent(
          {
            loadSenderKeySession: I.loadSenderKeySession,
            saveSenderKeySession: I.saveSenderKeySession,
          },
          s,
          u,
          n,
        );
      if (!c.success && c.error === "errLoadSenderKeySession") {
        (c.error,
          o("WALogger").LOG(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "CryptoLibrarySignal::encryptGroupMessage no sender key, generating a new one",
              ])),
          ));
        var d = await o("WASignalKeys").makeKeyPair();
        (await D().rotateGroupSenderKey(
          { saveSenderKeySession: I.saveSenderKeySession },
          s,
          u,
          d,
        ),
          (c = await D().encryptGroupContent(
            {
              loadSenderKeySession: I.loadSenderKeySession,
              saveSenderKeySession: I.saveSenderKeySession,
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
          C ||
            (C = babelHelpers.taggedTemplateLiteralLoose([
              "CryptoLibrarySignal::encryptGroupMessage failed with error ",
              "",
            ])),
          c.error,
        ),
        r("err")(c.error)
      );
    }
    function A(e, t, n) {
      return (
        o("WALogger").LOG(
          b ||
            (b = babelHelpers.taggedTemplateLiteralLoose([
              "CryptoLibrarySignal::processSenderKeyDistributionMsg",
            ])),
        ),
        D()
          .saveSenderKeySession(
            {
              loadSenderKeySession: I.loadSenderKeySession,
              saveSenderKeySession: I.saveSenderKeySession,
            },
            e,
            o("WAWebWidToJid").widToDeviceJid(t),
            new Uint8Array(n),
          )
          .then(function (e) {
            if (!e.success)
              throw (
                o("WALogger").WARN(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
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
    function F(e) {
      var t = e.author,
        n = e.ciphertext,
        a = e.groupId;
      o("WALogger").LOG(
        S ||
          (S = babelHelpers.taggedTemplateLiteralLoose([
            "CryptoLibrarySignal::decryptGroupSignalProto",
          ])),
      );
      var i = null;
      return D()
        .decryptGroupContent(
          {
            loadSenderKeySession: I.loadSenderKeySession,
            saveSenderKeySession: I.saveSenderKeySession,
          },
          o("WAWebWidToJid").widToMulticastJid(a),
          o("WAWebWidToJid").widToDeviceJid(t),
          n,
          function (e) {
            return (
              (i = o("WAByteArray").uint8ArrayToBuffer(e)),
              Promise.resolve()
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
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
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
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
                      "CryptoLibrarySignal::decryptGroupSignalProto failed to decrypt",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              new (o("WAWebSignalCommonErrors").SignalDecryptionError)(
                "Unexpected decryption error",
              ));
        });
    }
    async function O(e, t) {
      o("WALogger").LOG(
        E ||
          (E = babelHelpers.taggedTemplateLiteralLoose([
            "CryptoLibrarySignal::getGroupSenderKeyInfo",
          ])),
      );
      var n = await r(
        "WAWebCryptoLibraryUtilsApi",
      ).createSenderKeyDistributionMsg({
        author: o("WAWebWidToJid").widToDeviceJid(t),
        groupJid: o("WAJids").toGroupJid(e.toString({ legacy: !0 })),
        loadSenderKeySession: I.loadSenderKeySession,
        saveSenderKeySession: I.saveSenderKeySession,
      });
      if (n.success) return o("WAByteArray").uint8ArrayToBuffer(n.value);
      throw (
        o("WALogger").WARN(
          k ||
            (k = babelHelpers.taggedTemplateLiteralLoose([
              "CryptoLibrarySignal::getGroupSenderKeyInfo failed with error ",
              "",
            ])),
          n.error,
        ),
        r("err")(n.error)
      );
    }
    ((l.getCryptoLibModule = D),
      (l.createSignalSession = x),
      (l.decryptSignalProto = $),
      (l.decryptSignalMsgWithoutSaving = P),
      (l.encryptSignalProto = N),
      (l.getRemoteRegId = M),
      (l.encryptSenderKeyMsgSignalProto = w),
      (l.processSenderKeyDistributionMsg = A),
      (l.decryptGroupSignalProto = F),
      (l.getGroupSenderKeyInfo = O));
  },
  98,
);
