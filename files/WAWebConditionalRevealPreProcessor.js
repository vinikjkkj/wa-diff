__d(
  "WAWebConditionalRevealPreProcessor",
  [
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebScheduledMessagesGatingUtils",
    "WAWebScheduledMsgCrypto",
    "WAWebScheduledMsgRevealKeyStore",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
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
      S = {
        decryptedProto: null,
        decryptedProtoBytes: null,
        isRevealPending: !1,
        revealKeyId: null,
        viewMode: null,
      };
    function R(e, t, n) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = null;
          try {
            ((a = yield x(n)),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg] orphan key lookup completed",
                  ])),
              ));
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg] Failed to query orphan keys (DB may not be ready), will still store reveal-pending record",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              null
            );
          }
          if (a == null) return null;
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg] Found orphan RevealKey, decrypting immediately",
              ])),
          );
          try {
            var i = yield o("WAWebScheduledMsgCrypto").decryptWithRevealKey(
                e,
                t,
                a.revealKey,
              ),
              l = new Uint8Array(i),
              s = o("decodeProtobuf").decodeProtobuf(
                o("WAWebProtobufsE2E.pb").MessageSpec,
                l,
              );
            return (
              yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(
                a.msgId,
              ),
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg] orphan key decryption succeeded",
                  ])),
              ),
              { proto: s, protoBytes: l }
            );
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg] Failed to decrypt with orphan RevealKey, will store as reveal-pending",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              null
            );
          }
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chatId,
            n = e.encIv,
            a = e.encPayload,
            i = e.msgId,
            l = e.revealKeyId,
            s = e.senderJid;
          try {
            return (
              yield o("WAWebScheduledMsgRevealKeyStore").storeRevealKey({
                msgId: i,
                chatId: t,
                revealKeyId: l,
                revealKey: new Uint8Array(0),
                encPayload: new Uint8Array(a),
                encIv: new Uint8Array(n),
                scheduledTimestampS: o("WATimeUtils").castToUnixTime(0),
                status: "PENDING",
                createdAt: o("WATimeUtils").unixTime(),
                isOrphan: 0,
                senderJid: s != null ? s : null,
              }),
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg] stored reveal-pending record",
                  ])),
              ),
              !0
            );
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg] Failed to store reveal key (DB may not be ready)",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              !1
            );
          }
        })),
        k.apply(this, arguments)
      );
    }
    function I(e, t, n, r) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            if (!D()) return S;
            o("WALogger").LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg] preProcess: receiver gating enabled, validating conditionalRevealMessage",
                ])),
            );
            var a = o("WAWebScheduledMsgCrypto").parseConditionalRevealMessage(
              e,
            );
            if (a == null) return S;
            var i = a.encIv,
              l = a.encPayload,
              s = a.revealKeyId;
            o("WALogger").LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg] ConditionalRevealMessage detected",
                ])),
            );
            var u = yield R(l, i, s);
            if (u != null)
              return {
                decryptedProto: u.proto,
                decryptedProtoBytes: u.protoBytes,
                isRevealPending: !1,
                revealKeyId: s,
                viewMode: null,
              };
            o("WALogger").LOG(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg] storing as reveal-pending",
                ])),
            );
            var c = yield E({
              chatId: n,
              encIv: i,
              encPayload: l,
              msgId: t,
              revealKeyId: s,
              senderJid: r,
            });
            return c
              ? {
                  decryptedProto: null,
                  decryptedProtoBytes: null,
                  isRevealPending: !0,
                  revealKeyId: s,
                  viewMode:
                    o("WAWebViewMode.flow").ViewModeType.SCHEDULED_MESSAGE,
                }
              : S;
          },
        )),
        T.apply(this, arguments)
      );
    }
    function D() {
      try {
        return o(
          "WAWebScheduledMessagesGatingUtils",
        ).isScheduledMessagesReceiverEnabled()
          ? !0
          : (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg] preProcess skipped: receiver gating disabled",
                ])),
            ),
            !1);
      } catch (e) {
        return (
          e instanceof Error &&
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg] preProcess: gating check threw",
                  ])),
              )
              .catching(e),
          !1
        );
      }
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebScheduledMsgRevealKeyStore").getOrphanKeys();
          for (var n of t)
            if (n.revealKeyId === e)
              return { msgId: n.msgId, revealKey: n.revealKey };
          return null;
        })),
        $.apply(this, arguments)
      );
    }
    function P(e, t, n, r) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            try {
              var i = o("WAJids").validateChatJid(n);
              if (i != null) {
                var l = yield I(e, t, i, a),
                  s = l.isRevealPending === !0;
                return {
                  proto: l.decryptedProto,
                  protoBytes: l.decryptedProtoBytes,
                  isRevealPending: s,
                  scheduledMsgViewMode: s ? l.viewMode : null,
                };
              }
              o("WALogger").ERROR(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg] ConditionalReveal pre-processing skipped: invalid chat JID",
                  ])),
              );
            } catch (e) {
              o("WALogger")
                .ERROR(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg] ConditionalReveal pre-processing failed, continuing with original proto",
                    ])),
                )
                .catching(r("getErrorSafe")(e));
            }
            return {
              proto: null,
              protoBytes: null,
              isRevealPending: !1,
              scheduledMsgViewMode: null,
            };
          },
        )),
        N.apply(this, arguments)
      );
    }
    function M(e, t) {
      if (t == null) return e;
      var n = e.map(function (e) {
        return babelHelpers.extends({}, e, { viewMode: t });
      });
      return (
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[scheduled_msg] applied viewMode=",
              " to ",
              " msgs",
            ])),
          t,
          String(n.length),
        ),
        n
      );
    }
    ((l.preProcessConditionalRevealMessage = I),
      (l.maybePreProcessConditionalRevealForReceive = P),
      (l.applyScheduledMsgViewMode = M));
  },
  98,
);
