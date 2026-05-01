__d(
  "WAWebConditionalRevealPreProcessor",
  [
    "WACryptoPkcs7",
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
    function k(e, t, n) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = !1;
          try {
            r = o(
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
          if (!r)
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
          var a = o("WAWebScheduledMsgCrypto").parseConditionalRevealMessage(e);
          if (a == null) return E;
          var i = a.encIv,
            l = a.encPayload,
            R = a.revealKeyId;
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg] ConditionalRevealMessage detected, revealKeyId=",
                ", msgId=",
                "",
              ])),
            R,
            t,
          );
          var L = null;
          try {
            ((L = yield T(R)),
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg] orphan key lookup completed, found=",
                    ", revealKeyId=",
                    "",
                  ])),
                String(L != null),
                R,
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
          if (L != null) {
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg] Found orphan RevealKey for revealKeyId=",
                  ", decrypting immediately",
                ])),
              R,
            );
            try {
              var k = yield o("WAWebScheduledMsgCrypto").decryptWithRevealKey(
                  l,
                  i,
                  L.revealKey,
                ),
                I = o("WACryptoPkcs7").unpadPkcs7(new Uint8Array(k)),
                D = o("decodeProtobuf").decodeProtobuf(
                  o("WAWebProtobufsE2E.pb").MessageSpec,
                  I,
                );
              return (
                yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(
                  L.msgId,
                ),
                o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg] orphan key decryption succeeded, revealKeyId=",
                      "",
                    ])),
                  R,
                ),
                {
                  decryptedProto: D,
                  decryptedProtoBytes: I,
                  isRevealPending: !1,
                  revealKeyId: R,
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
            R,
            t,
          );
          try {
            (yield o("WAWebScheduledMsgRevealKeyStore").storeRevealKey({
              msgId: t,
              chatId: n,
              revealKeyId: R,
              revealKey: new Uint8Array(0),
              encPayload: new Uint8Array(l),
              encIv: new Uint8Array(i),
              scheduledTimestampS: o("WATimeUtils").castToUnixTime(0),
              status: "PENDING",
              createdAt: o("WATimeUtils").unixTime(),
              isOrphan: 0,
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
                R,
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
            revealKeyId: R,
            viewMode: o("WAWebViewMode.flow").ViewModeType.SCHEDULED_MESSAGE,
          };
        })),
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
    function x(e, t, n) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          try {
            var a = o("WAJids").validateChatJid(n);
            if (a != null) {
              var i = yield k(e, t, a);
              return {
                proto: i.decryptedProto,
                protoBytes: i.decryptedProtoBytes,
                scheduledMsgViewMode:
                  i.isRevealPending === !0 ? i.viewMode : null,
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
          return { proto: null, protoBytes: null, scheduledMsgViewMode: null };
        })),
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
