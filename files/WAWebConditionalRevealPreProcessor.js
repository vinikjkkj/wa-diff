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
      S,
      R,
      L,
      E = {
        decryptedProto: null,
        decryptedProtoBytes: null,
        isRevealPending: !1,
        revealKeyId: null,
        viewMode: null,
      };
    function k(e, t, n, r) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = !1;
            try {
              a = o(
                "WAWebScheduledMessagesGatingUtils",
              ).isScheduledMessagesReceiverEnabled();
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
                E
              );
            }
            if (!a)
              return (
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg] preProcess skipped: receiver gating disabled",
                    ])),
                ),
                E
              );
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg] preProcess: receiver gating enabled, validating conditionalRevealMessage",
                ])),
            );
            var i = o("WAWebScheduledMsgCrypto").parseConditionalRevealMessage(
              e,
            );
            if (i == null) return E;
            var l = i.encIv,
              R = i.encPayload,
              L = i.revealKeyId;
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg] ConditionalRevealMessage detected, revealKeyId=",
                  ", msgId=",
                  "",
                ])),
              L,
              t,
            );
            var k = null;
            try {
              ((k = yield T(L)),
                o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg] orphan key lookup completed, found=",
                      ", revealKeyId=",
                      "",
                    ])),
                  String(k != null),
                  L,
                ));
            } catch (e) {
              e instanceof Error
                ? o("WALogger")
                    .ERROR(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "[scheduled_msg] Failed to query orphan keys (DB may not be ready), will still store reveal-pending record",
                        ])),
                    )
                    .catching(e)
                : o("WALogger").ERROR(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[scheduled_msg] Failed to query orphan keys with non-Error throwable, will still store reveal-pending record",
                      ])),
                  );
            }
            if (k != null) {
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg] Found orphan RevealKey for revealKeyId=",
                    ", decrypting immediately",
                  ])),
                L,
              );
              try {
                var I = yield o("WAWebScheduledMsgCrypto").decryptWithRevealKey(
                    R,
                    l,
                    k.revealKey,
                  ),
                  D = new Uint8Array(I),
                  x = o("decodeProtobuf").decodeProtobuf(
                    o("WAWebProtobufsE2E.pb").MessageSpec,
                    D,
                  );
                return (
                  yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(
                    k.msgId,
                  ),
                  o("WALogger").LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "[scheduled_msg] orphan key decryption succeeded, revealKeyId=",
                        "",
                      ])),
                    L,
                  ),
                  {
                    decryptedProto: x,
                    decryptedProtoBytes: D,
                    isRevealPending: !1,
                    revealKeyId: L,
                    viewMode: null,
                  }
                );
              } catch (e) {
                e instanceof Error
                  ? o("WALogger")
                      .ERROR(
                        h ||
                          (h = babelHelpers.taggedTemplateLiteralLoose([
                            "[scheduled_msg] Failed to decrypt with orphan RevealKey, will store as reveal-pending",
                          ])),
                      )
                      .catching(e)
                  : o("WALogger").ERROR(
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
                          "[scheduled_msg] Failed to decrypt with orphan RevealKey (non-Error), will store as reveal-pending",
                        ])),
                    );
              }
            }
            o("WALogger").LOG(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg] storing as reveal-pending, revealKeyId=",
                  ", msgId=",
                  "",
                ])),
              L,
              t,
            );
            try {
              (yield o("WAWebScheduledMsgRevealKeyStore").storeRevealKey({
                msgId: t,
                chatId: n,
                revealKeyId: L,
                revealKey: new Uint8Array(0),
                encPayload: new Uint8Array(R),
                encIv: new Uint8Array(l),
                scheduledTimestampS: o("WATimeUtils").castToUnixTime(0),
                status: "PENDING",
                createdAt: o("WATimeUtils").unixTime(),
                isOrphan: 0,
                senderJid: r != null ? r : null,
              }),
                o("WALogger").LOG(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg] stored reveal-pending record, msgId=",
                      ", revealKeyId=",
                      ", chatId=",
                      "",
                    ])),
                  t,
                  L,
                  n,
                ));
            } catch (e) {
              return (
                e instanceof Error
                  ? o("WALogger")
                      .ERROR(
                        v ||
                          (v = babelHelpers.taggedTemplateLiteralLoose([
                            "[scheduled_msg] Failed to store reveal key (DB may not be ready)",
                          ])),
                      )
                      .catching(e)
                  : o("WALogger").ERROR(
                      S ||
                        (S = babelHelpers.taggedTemplateLiteralLoose([
                          "[scheduled_msg] Failed to store reveal key (non-Error throwable)",
                        ])),
                    ),
                E
              );
            }
            return {
              decryptedProto: null,
              decryptedProtoBytes: null,
              isRevealPending: !0,
              revealKeyId: L,
              viewMode: o("WAWebViewMode.flow").ViewModeType.SCHEDULED_MESSAGE,
            };
          },
        )),
        I.apply(this, arguments)
      );
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebScheduledMsgRevealKeyStore").getOrphanKeys();
          for (var n of t)
            if (n.revealKeyId === e)
              return { msgId: n.msgId, revealKey: n.revealKey };
          return null;
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t, n, r) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            try {
              var i = o("WAJids").validateChatJid(n);
              if (i != null) {
                var l = yield k(e, t, i, a),
                  s = l.isRevealPending === !0;
                return {
                  proto: l.decryptedProto,
                  protoBytes: l.decryptedProtoBytes,
                  isRevealPending: s,
                  scheduledMsgViewMode: s ? l.viewMode : null,
                };
              }
              o("WALogger").ERROR(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg] ConditionalReveal pre-processing skipped: invalid chat JID",
                  ])),
              );
            } catch (e) {
              o("WALogger")
                .ERROR(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
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
        $.apply(this, arguments)
      );
    }
    function P(t, n) {
      if (n == null) return t;
      var r = t.map(function (e) {
        return babelHelpers.extends({}, e, { viewMode: n });
      });
      return (
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[scheduled_msg] applied viewMode=",
              " to ",
              " msgs",
            ])),
          n,
          String(r.length),
        ),
        r
      );
    }
    ((l.preProcessConditionalRevealMessage = k),
      (l.maybePreProcessConditionalRevealForReceive = x),
      (l.applyScheduledMsgViewMode = P));
  },
  98,
);
