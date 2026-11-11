__d(
  "WAWebSendReceiptJobCommon",
  [
    "$InternalEnum",
    "Promise",
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WAJids",
    "WALogger",
    "WAWap",
    "WAWebABProps",
    "WAWebCommsAckParser",
    "WAWebCommsWapMd",
    "WAWebDeprecatedSendIqWorkerCompatible",
    "WAWebLidMigrationUtils",
    "WAWebMaibaWASSMigration",
    "WAWebPnlessStanzaMigration",
    "WAWebPrivacySettings",
    "WAWebSimpleSignalPNToFBIDMigration",
    "WAWebUserPrefsGeneral",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = Object.freeze({
        INACTIVE: "inactive",
        SENDER: "sender",
        DELIVERY: "delivery",
        READ: "read",
        READ_SELF: "read-self",
        PLAYED: "played",
        PLAYED_SELF: "played-self",
        HISTORY_SYNC_COMPLETION: "hist_sync",
        SERVER_ERROR: "server-error",
        PEER_MSG: "peer_msg",
      }),
      c = n("$InternalEnum")({
        ORPHAN: 0,
        NO_CHECKMARK_UX: 1,
        HID_FAILED_DECRYPT: 2,
      });
    function d(e) {
      return e > 0 ? o("WAWap").wap("meta", { mode: o("WAWap").INT(e) }) : null;
    }
    var m = 256,
      p = new (r("WADeprecatedWapParser"))("readReceiptAckParser", function (
        e,
      ) {
        return (
          e.assertTag("ack"),
          {
            readReceipts: e.hasAttr("readreceipts")
              ? e.attrEnum("readreceipts", o("WAWebPrivacySettings").ALL_NONE)
              : null,
          }
        );
      });
    function _(e, t) {
      var n = Array.from(t.values()).flat(),
        r = n[0],
        a = babelHelpers.arrayLikeToArray(n).slice(1),
        i =
          a.length > 0
            ? o("WAWap").wap(
                "list",
                null,
                a.map(function (e) {
                  return o("WAWap").wap("item", {
                    id: o("WAWap").CUSTOM_STRING(e),
                  });
                }),
              )
            : null,
        l = o("WAWap").wap(
          "ack",
          {
            id: o("WAWap").CUSTOM_STRING(r),
            to: o("WAWebCommsWapMd").JID(e),
            class: "message",
            type: "text",
          },
          i,
        );
      return o("WADeprecatedSendIq").deprecatedCastStanza(l);
    }
    function f(e) {
      var t = e.messageIds,
        n = e.participant,
        r = e.recipient,
        a = e.to,
        i = t[0],
        l = babelHelpers.arrayLikeToArray(t).slice(1),
        s =
          l.length > 0
            ? o("WAWap").wap(
                "list",
                null,
                l.map(function (e) {
                  return o("WAWap").wap("item", {
                    id: o("WAWap").CUSTOM_STRING(e),
                  });
                }),
              )
            : null,
        u = o("WAWap").wap(
          "ack",
          {
            id: o("WAWap").CUSTOM_STRING(i),
            to: o("WAWebCommsWapMd").JID(a),
            recipient:
              r != null
                ? o("WAWebCommsWapMd").USER_JID(r)
                : o("WAWap").DROP_ATTR,
            participant:
              n != null
                ? o("WAWebCommsWapMd").USER_JID(n)
                : o("WAWap").DROP_ATTR,
            class: "message",
            type: "text",
          },
          s,
        );
      return o("WADeprecatedSendIq").deprecatedCastStanza(u);
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.groupedReceipt,
            r = e.isStatusReceipt,
            a = e.maxStsByAuthor,
            i = e.receiptClass,
            l = e.recipient,
            c = e.sendsGroupAgentDeliveryReceipt,
            d = e.t,
            p = e.threadId,
            g = e.to,
            h = e.type;
          if (g.isNewsletter() && h === u.DELIVERY) return _(g, t);
          var C =
            h === u.READ ||
            h === u.PLAYED ||
            h === u.READ_SELF ||
            h === u.PLAYED_SELF ||
            h === u.HISTORY_SYNC_COMPLETION;
          yield (s || (s = n("Promise"))).all(
            Array.from(
              t.keys(),
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var _ = t.get(e);
                    if (!(!_ || _.length === 0)) {
                      var b = a == null ? void 0 : a.get(e),
                        v = !g.isBot() && e.isBot();
                      if (h === u.DELIVERY && v && c !== !0) {
                        var S, R, L;
                        (g.isUser() ? ((S = e), (R = g)) : ((S = g), (L = e)),
                          f({
                            messageIds: _,
                            participant: L,
                            recipient: R,
                            to: S,
                          }));
                        return;
                      }
                      var E = g.isUser() || g.isNewsletter() ? null : e,
                        k = o(
                          "WAWebMaibaWASSMigration",
                        ).maybeReplaceMaibaAiHubWidWithFbid(
                          o(
                            "WAWebSimpleSignalPNToFBIDMigration",
                          ).maybeReplaceDeprecatedBotPnWithFbid(g),
                        ),
                        I = l;
                      I == null &&
                        g.isUser() &&
                        !g.isBot() &&
                        e.isBot() &&
                        ((k = e), (I = g));
                      for (
                        var T =
                            h === u.DELIVERY ||
                            h === u.SENDER ||
                            h === u.PEER_MSG ||
                            h === u.HISTORY_SYNC_COMPLETION,
                          D = T
                            ? k
                            : yield o(
                                "WAWebPnlessStanzaMigration",
                              ).getStanzaToFromChatId(k, h),
                          x = [];
                        _.length > 0;
                      ) {
                        var $ = _.splice(0, m),
                          P = null;
                        $.length > 1 &&
                          (P = o("WAWap").wap(
                            "list",
                            null,
                            $.slice(1).map(function (e) {
                              return o("WAWap").wap("item", {
                                id: o("WAWap").CUSTOM_STRING(e),
                              });
                            }),
                          ));
                        var N = void 0,
                          M = void 0;
                        E != null &&
                          (E.isPSA()
                            ? (N = o("WAWebCommsWapMd").JID(E))
                            : E.isUser() &&
                              ((N = o("WAWebCommsWapMd").DEVICE_JID(E)),
                              o("WAWebABProps").getABPropConfigValue(
                                "lid_status_non_soaked_client_support_enabled",
                              ) &&
                                D.toString() === o("WAJids").STATUS_JID &&
                                E.isLid() &&
                                h === u.READ &&
                                (M = o("WAWebLidMigrationUtils").toPn(E))));
                        var w = p == null ? void 0 : p.key.id,
                          A =
                            w != null
                              ? o("WAWap").wap("bot", {
                                  client_thread_id: o("WAWap").CUSTOM_STRING(w),
                                })
                              : null,
                          F =
                            r === !0 || k.toString() === o("WAJids").STATUS_JID
                              ? "status"
                              : null,
                          O = i != null ? i : F,
                          B = o("WAWap").wap(
                            "receipt",
                            {
                              to: o("WAWebCommsWapMd").JID(D),
                              type: h === u.DELIVERY ? o("WAWap").DROP_ATTR : h,
                              class:
                                O != null
                                  ? o("WAWap").CUSTOM_STRING(O)
                                  : o("WAWap").DROP_ATTR,
                              id: o("WAWap").CUSTOM_STRING($[0]),
                              t:
                                d != null
                                  ? o("WAWap").CUSTOM_STRING(d)
                                  : o("WAWap").DROP_ATTR,
                              participant: N != null ? N : o("WAWap").DROP_ATTR,
                              peer_participant_pn: M
                                ? o("WAWebCommsWapMd").USER_JID(M)
                                : o("WAWap").DROP_ATTR,
                              recipient: I
                                ? o("WAWebCommsWapMd").USER_JID(I)
                                : o("WAWap").DROP_ATTR,
                              sts:
                                b != null
                                  ? o("WAWap").CUSTOM_STRING(String(b))
                                  : o("WAWap").DROP_ATTR,
                            },
                            P,
                            A,
                          );
                        if (C) {
                          var W = {
                            id: $[0],
                            from: D,
                            class: "receipt",
                            type: h,
                            participant: E,
                            recipient: I,
                          };
                          x.push(y(B, W));
                        } else
                          x.push(
                            o("WADeprecatedSendIq").deprecatedCastStanza(B),
                          );
                      }
                      return (s || (s = n("Promise"))).all(x);
                    }
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = n.type;
          if (r === u.READ || r === u.READ_SELF) {
            var a = yield o(
                "WAWebDeprecatedSendIqWorkerCompatible",
              ).deprecatedSendStanzaAndReturnAck(
                t,
                o("WAWebCommsAckParser").toCoreAckTemplate(n),
              ),
              i = p.parse(a);
            if (i.error)
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[messaging] sendAggregateReceipts: Invalid ack from server",
                    ])),
                )
                .sendLogs("Invalid-Receipt-Ack");
            else {
              var l = i.success.readReceipts;
              l != null &&
                o("WAWebUserPrefsGeneral").setUserPrivacySettings(
                  babelHelpers.extends(
                    {},
                    o("WAWebUserPrefsGeneral").getUserPrivacySettings(),
                    { readReceipts: l },
                  ),
                );
            }
          } else
            yield o(
              "WAWebDeprecatedSendIqWorkerCompatible",
            ).deprecatedSendStanzaAndWaitForAck(
              t,
              o("WAWebCommsAckParser").toCoreAckTemplate(n),
            );
        })),
        C.apply(this, arguments)
      );
    }
    ((l.RECEIPT_TYPE = u),
      (l.ReceiptModeBitPosition = c),
      (l.genReceiptMetaModeNode = d),
      (l.sendBotInvokeResponseAcks = f),
      (l.sendAggregateReceipts = g));
  },
  98,
);
