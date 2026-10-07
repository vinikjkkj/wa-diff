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
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t.groupedReceipt,
            a = t.isStatusReceipt,
            i = t.maxStsByAuthor,
            l = t.receiptClass,
            c = t.recipient,
            d = t.sendsGroupAgentDeliveryReceipt,
            g = t.t,
            h = t.threadId,
            y = t.to,
            C = t.type;
          if (y.isNewsletter() && C === u.DELIVERY) return _(y, r);
          var b =
            C === u.READ ||
            C === u.PLAYED ||
            C === u.READ_SELF ||
            C === u.PLAYED_SELF ||
            C === u.HISTORY_SYNC_COMPLETION;
          yield (s || (s = n("Promise"))).all(
            Array.from(
              r.keys(),
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    var _ = r.get(t);
                    if (!(!_ || _.length === 0)) {
                      var v = i == null ? void 0 : i.get(t),
                        S = !y.isBot() && t.isBot();
                      if (C === u.DELIVERY && S && d !== !0) {
                        var R, L, E;
                        (y.isUser() ? ((R = t), (L = y)) : ((R = y), (E = t)),
                          f({
                            messageIds: _,
                            participant: E,
                            recipient: L,
                            to: R,
                          }));
                        return;
                      }
                      var k = y.isUser() || y.isNewsletter() ? null : t,
                        I = o(
                          "WAWebMaibaWASSMigration",
                        ).maybeReplaceMaibaAiHubWidWithFbid(
                          o(
                            "WAWebSimpleSignalPNToFBIDMigration",
                          ).maybeReplaceDeprecatedBotPnWithFbid(y),
                        ),
                        T = c;
                      T == null &&
                        y.isUser() &&
                        !y.isBot() &&
                        t.isBot() &&
                        ((I = t), (T = y));
                      for (
                        var D =
                            C === u.DELIVERY ||
                            C === u.SENDER ||
                            C === u.PEER_MSG ||
                            C === u.HISTORY_SYNC_COMPLETION,
                          x = D
                            ? I
                            : yield o(
                                "WAWebPnlessStanzaMigration",
                              ).getStanzaToFromChatId(I, C),
                          $ = [],
                          P = function* () {
                            var t = _.splice(0, m),
                              r = null;
                            t.length > 1 &&
                              (r = o("WAWap").wap(
                                "list",
                                null,
                                t.slice(1).map(function (e) {
                                  return o("WAWap").wap("item", {
                                    id: o("WAWap").CUSTOM_STRING(e),
                                  });
                                }),
                              ));
                            var i, s;
                            k != null &&
                              (k.isPSA()
                                ? (i = o("WAWebCommsWapMd").JID(k))
                                : k.isUser() &&
                                  ((i = o("WAWebCommsWapMd").DEVICE_JID(k)),
                                  o("WAWebABProps").getABPropConfigValue(
                                    "lid_status_non_soaked_client_support_enabled",
                                  ) &&
                                    x.toString() === o("WAJids").STATUS_JID &&
                                    k.isLid() &&
                                    C === u.READ &&
                                    (s = o("WAWebLidMigrationUtils").toPn(k))));
                            var c = h == null ? void 0 : h.key.id,
                              d =
                                c != null
                                  ? o("WAWap").wap("bot", {
                                      client_thread_id:
                                        o("WAWap").CUSTOM_STRING(c),
                                    })
                                  : null,
                              f =
                                a === !0 ||
                                I.toString() === o("WAJids").STATUS_JID
                                  ? "status"
                                  : null,
                              y = l != null ? l : f,
                              S = o("WAWap").wap(
                                "receipt",
                                {
                                  to: o("WAWebCommsWapMd").JID(x),
                                  type:
                                    C === u.DELIVERY ? o("WAWap").DROP_ATTR : C,
                                  class:
                                    y != null
                                      ? o("WAWap").CUSTOM_STRING(y)
                                      : o("WAWap").DROP_ATTR,
                                  id: o("WAWap").CUSTOM_STRING(t[0]),
                                  t:
                                    g != null
                                      ? o("WAWap").CUSTOM_STRING(g)
                                      : o("WAWap").DROP_ATTR,
                                  participant:
                                    i != null ? i : o("WAWap").DROP_ATTR,
                                  peer_participant_pn: s
                                    ? o("WAWebCommsWapMd").USER_JID(s)
                                    : o("WAWap").DROP_ATTR,
                                  recipient: T
                                    ? o("WAWebCommsWapMd").USER_JID(T)
                                    : o("WAWap").DROP_ATTR,
                                  sts:
                                    v != null
                                      ? o("WAWap").CUSTOM_STRING(String(v))
                                      : o("WAWap").DROP_ATTR,
                                },
                                r,
                                d,
                              );
                            if (b) {
                              var R = (function () {
                                var r = n(
                                  "asyncToGeneratorRuntime",
                                ).asyncToGenerator(function* () {
                                  var n = {
                                    id: t[0],
                                    from: x,
                                    class: "receipt",
                                    type: C,
                                    participant: k,
                                    recipient: T,
                                  };
                                  if (C === u.READ || C === u.READ_SELF) {
                                    var r = yield o(
                                        "WAWebDeprecatedSendIqWorkerCompatible",
                                      ).deprecatedSendStanzaAndReturnAck(
                                        S,
                                        o(
                                          "WAWebCommsAckParser",
                                        ).toCoreAckTemplate(n),
                                      ),
                                      a = p.parse(r);
                                    if (a.error)
                                      o("WALogger")
                                        .ERROR(
                                          e ||
                                            (e =
                                              babelHelpers.taggedTemplateLiteralLoose(
                                                [
                                                  "[messaging] sendAggregateReceipts: Invalid ack from server",
                                                ],
                                              )),
                                        )
                                        .sendLogs("Invalid-Receipt-Ack");
                                    else {
                                      var i = a.success.readReceipts;
                                      i != null &&
                                        o(
                                          "WAWebUserPrefsGeneral",
                                        ).setUserPrivacySettings(
                                          babelHelpers.extends(
                                            {},
                                            o(
                                              "WAWebUserPrefsGeneral",
                                            ).getUserPrivacySettings(),
                                            { readReceipts: i },
                                          ),
                                        );
                                    }
                                  } else
                                    return o(
                                      "WAWebDeprecatedSendIqWorkerCompatible",
                                    ).deprecatedSendStanzaAndWaitForAck(
                                      S,
                                      o(
                                        "WAWebCommsAckParser",
                                      ).toCoreAckTemplate(n),
                                    );
                                });
                                return function () {
                                  return r.apply(this, arguments);
                                };
                              })();
                              $.push(R());
                            } else
                              $.push(
                                o("WADeprecatedSendIq").deprecatedCastStanza(S),
                              );
                          };
                        _.length > 0;
                      )
                        yield* P();
                      return (s || (s = n("Promise"))).all($);
                    }
                  },
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
            ),
          );
        })),
        h.apply(this, arguments)
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
