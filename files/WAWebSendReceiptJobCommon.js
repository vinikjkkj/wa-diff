__d(
  "WAWebSendReceiptJobCommon",
  [
    "Promise",
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WAJids",
    "WALogger",
    "WAWap",
    "WAWebABProps",
    "WAWebCommsAckParser",
    "WAWebCommsWapMd",
    "WAWebCurrentUser",
    "WAWebLidMigrationUtils",
    "WAWebPnlessStanzaMigration",
    "WAWebPrivacySettings",
    "WAWebSimpleSignalPNToFBIDMigration",
    "WAWebUserPrefsGeneral",
    "asyncToGeneratorRuntime",
    "lodash",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = Object.freeze({
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
      m = 256,
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
      var n = r("lodash").flatten(Array.from(t.values())),
        a = n[0],
        i = babelHelpers.arrayLikeToArray(n).slice(1),
        l =
          i.length > 0
            ? o("WAWap").wap(
                "list",
                null,
                i.map(function (e) {
                  return o("WAWap").wap("item", {
                    id: o("WAWap").CUSTOM_STRING(e),
                  });
                }),
              )
            : null,
        s = o("WAWap").wap(
          "ack",
          {
            id: o("WAWap").CUSTOM_STRING(a),
            to: o("WAWebCommsWapMd").JID(e),
            class: "message",
            type: "text",
          },
          l,
        );
      return o("WADeprecatedSendIq").deprecatedCastStanza(s);
    }
    function f(e, t, n, r) {
      var a = e[0],
        i = babelHelpers.arrayLikeToArray(e).slice(1),
        l =
          i.length > 0
            ? o("WAWap").wap(
                "list",
                null,
                i.map(function (e) {
                  return o("WAWap").wap("item", {
                    id: o("WAWap").CUSTOM_STRING(e),
                  });
                }),
              )
            : null,
        s = o("WAWap").wap(
          "ack",
          {
            id: o("WAWap").CUSTOM_STRING(a),
            to: o("WAWebCommsWapMd").JID(t),
            recipient:
              n != null
                ? o("WAWebCommsWapMd").USER_JID(n)
                : o("WAWap").DROP_ATTR,
            participant:
              r != null
                ? o("WAWebCommsWapMd").USER_JID(r)
                : o("WAWap").DROP_ATTR,
            class: "message",
            type: "text",
          },
          l,
        );
      return o("WADeprecatedSendIq").deprecatedCastStanza(s);
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.groupedReceipt,
            r = e.receiptClass,
            a = e.recipient,
            i = e.t,
            l = e.threadId,
            s = e.to,
            g = e.type;
          if (s.isNewsletter() && g === d.DELIVERY) return _(s, t);
          var h =
            g === d.READ ||
            g === d.PLAYED ||
            g === d.READ_SELF ||
            g === d.PLAYED_SELF ||
            g === d.HISTORY_SYNC_COMPLETION;
          yield (c || (c = n("Promise"))).all(
            Array.from(
              t.keys(),
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var _ = t.get(e);
                    if (!(!_ || _.length === 0)) {
                      var C = !s.isBot() && e.isBot();
                      if (g === d.DELIVERY && C) {
                        var b, v, S;
                        (s.isUser() ? ((b = e), (v = s)) : ((b = s), (S = e)),
                          f(_, b, v, S));
                        return;
                      }
                      var R = s.isUser() || s.isNewsletter() ? null : e,
                        L = o(
                          "WAWebSimpleSignalPNToFBIDMigration",
                        ).maybeReplaceDeprecatedBotPnWithFbid(s),
                        E = a;
                      E == null &&
                        s.isUser() &&
                        !s.isBot() &&
                        e.isBot() &&
                        ((L = e), (E = s));
                      for (
                        var k =
                            g === d.DELIVERY ||
                            g === d.SENDER ||
                            g === d.PEER_MSG ||
                            g === d.HISTORY_SYNC_COMPLETION,
                          I = k
                            ? L
                            : yield o(
                                "WAWebPnlessStanzaMigration",
                              ).getStanzaToFromChatId(L, g),
                          T = [],
                          D = function* () {
                            var e = _.splice(0, m),
                              t = null;
                            e.length > 1 &&
                              (t = o("WAWap").wap(
                                "list",
                                null,
                                e.slice(1).map(function (e) {
                                  return o("WAWap").wap("item", {
                                    id: o("WAWap").CUSTOM_STRING(e),
                                  });
                                }),
                              ));
                            var a, s;
                            (R != null &&
                              (R.isPSA()
                                ? (a = o("WAWebCommsWapMd").JID(R))
                                : R.isUser() &&
                                  ((a = o("WAWebCommsWapMd").DEVICE_JID(R)),
                                  o("WAWebABProps").getABPropConfigValue(
                                    "lid_status_non_soaked_client_support_enabled",
                                  ) &&
                                    I.toString() === o("WAJids").STATUS_JID &&
                                    R.isLid() &&
                                    g === d.READ &&
                                    (s = o("WAWebLidMigrationUtils").toPn(R)))),
                              E && y(E, L));
                            var c = l == null ? void 0 : l.key.id,
                              f =
                                c != null
                                  ? o("WAWap").wap("bot", {
                                      client_thread_id:
                                        o("WAWap").CUSTOM_STRING(c),
                                    })
                                  : null,
                              C = o("WAWap").wap(
                                "receipt",
                                {
                                  to: o("WAWebCommsWapMd").JID(I),
                                  type:
                                    g === d.DELIVERY ? o("WAWap").DROP_ATTR : g,
                                  class:
                                    r != null
                                      ? o("WAWap").CUSTOM_STRING(r)
                                      : o("WAWap").DROP_ATTR,
                                  id: o("WAWap").CUSTOM_STRING(e[0]),
                                  t:
                                    i != null
                                      ? o("WAWap").CUSTOM_STRING(i)
                                      : o("WAWap").DROP_ATTR,
                                  participant:
                                    a != null ? a : o("WAWap").DROP_ATTR,
                                  peer_participant_pn: s
                                    ? o("WAWebCommsWapMd").USER_JID(s)
                                    : o("WAWap").DROP_ATTR,
                                  recipient: E
                                    ? o("WAWebCommsWapMd").USER_JID(E)
                                    : o("WAWap").DROP_ATTR,
                                },
                                t,
                                f,
                              );
                            if (h) {
                              var b = (function () {
                                var t = n(
                                  "asyncToGeneratorRuntime",
                                ).asyncToGenerator(function* () {
                                  var t = {
                                    id: e[0],
                                    from: I,
                                    class: "receipt",
                                    type: g,
                                    participant: R,
                                    recipient: E,
                                  };
                                  if (g === d.READ || g === d.READ_SELF) {
                                    var n = yield o(
                                        "WADeprecatedSendIq",
                                      ).deprecatedSendStanzaAndReturnAck(
                                        C,
                                        o(
                                          "WAWebCommsAckParser",
                                        ).toCoreAckTemplate(t),
                                      ),
                                      r = p.parse(n);
                                    if (r.error)
                                      o("WALogger")
                                        .ERROR(
                                          u ||
                                            (u =
                                              babelHelpers.taggedTemplateLiteralLoose(
                                                [
                                                  "[messaging] sendAggregateReceipts: Invalid ack from server",
                                                ],
                                              )),
                                        )
                                        .sendLogs("Invalid-Receipt-Ack");
                                    else {
                                      var a = r.success.readReceipts;
                                      a != null &&
                                        o(
                                          "WAWebUserPrefsGeneral",
                                        ).setUserPrivacySettings(
                                          babelHelpers.extends(
                                            {},
                                            o(
                                              "WAWebUserPrefsGeneral",
                                            ).getUserPrivacySettings(),
                                            { readReceipts: a },
                                          ),
                                        );
                                    }
                                  } else
                                    return o(
                                      "WADeprecatedSendIq",
                                    ).deprecatedSendStanzaAndWaitForAck(
                                      C,
                                      o(
                                        "WAWebCommsAckParser",
                                      ).toCoreAckTemplate(t),
                                    );
                                });
                                return function () {
                                  return t.apply(this, arguments);
                                };
                              })();
                              T.push(b());
                            } else
                              T.push(
                                o("WADeprecatedSendIq").deprecatedCastStanza(C),
                              );
                          };
                        _.length > 0;
                      )
                        yield* D();
                      return (c || (c = n("Promise"))).all(T);
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
    function y(t, n) {
      if (t) {
        var r = C(t) && b(n),
          a = b(t) && C(n);
        (r || a) &&
          (o("WAWebCurrentUser").isEmployee()
            ? o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[sendDeliveryReceipt] mixed sender receipt (employee) ",
                      " ",
                      "",
                    ])),
                  t.toLogString(),
                  n.toLogString(),
                )
                .sendLogs("mixed-sender-receipt")
            : o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[sendDeliveryReceipt] will send mixed sender receipt. ",
                      " ",
                      "",
                    ])),
                  t.toLogString(),
                  n.toLogString(),
                )
                .sendLogs("mixed-sender-receipt"));
      }
    }
    function C(e) {
      return e.isLid() || e.isHostedLid();
    }
    function b(e) {
      return e.isRegularUser() && !C(e);
    }
    ((l.RECEIPT_TYPE = d),
      (l.sendBotInvokeResponseAcks = f),
      (l.sendAggregateReceipts = g),
      (l.logMixedSenderReceipt = y));
  },
  98,
);
