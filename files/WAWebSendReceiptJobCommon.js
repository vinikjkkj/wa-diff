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
    "WAWebLidMigrationUtils",
    "WAWebPnlessStanzaMigration",
    "WAWebPrivacySettings",
    "WAWebSimpleSignalPNToFBIDMigration",
    "WAWebStatusGatingUtils",
    "WAWebUserPrefsGeneral",
    "asyncToGeneratorRuntime",
    "lodash",
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
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t.groupedReceipt,
            a = t.isStatusReceipt,
            i = t.maxStsByAuthor,
            l = t.receiptClass,
            c = t.recipient,
            d = t.t,
            g = t.threadId,
            h = t.to,
            y = t.type;
          if (h.isNewsletter() && y === u.DELIVERY) return _(h, r);
          var C =
            y === u.READ ||
            y === u.PLAYED ||
            y === u.READ_SELF ||
            y === u.PLAYED_SELF ||
            y === u.HISTORY_SYNC_COMPLETION;
          yield (s || (s = n("Promise"))).all(
            Array.from(
              r.keys(),
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    var _ = r.get(t);
                    if (!(!_ || _.length === 0)) {
                      var b = i == null ? void 0 : i.get(t),
                        v = !h.isBot() && t.isBot();
                      if (y === u.DELIVERY && v) {
                        var S, R, L;
                        (h.isUser() ? ((S = t), (R = h)) : ((S = h), (L = t)),
                          f(_, S, R, L));
                        return;
                      }
                      var E = h.isUser() || h.isNewsletter() ? null : t,
                        k = o(
                          "WAWebSimpleSignalPNToFBIDMigration",
                        ).maybeReplaceDeprecatedBotPnWithFbid(h),
                        I = c;
                      I == null &&
                        h.isUser() &&
                        !h.isBot() &&
                        t.isBot() &&
                        ((k = t), (I = h));
                      for (
                        var T =
                            y === u.DELIVERY ||
                            y === u.SENDER ||
                            y === u.PEER_MSG ||
                            y === u.HISTORY_SYNC_COMPLETION,
                          D = T
                            ? k
                            : yield o(
                                "WAWebPnlessStanzaMigration",
                              ).getStanzaToFromChatId(k, y),
                          x = [],
                          $ = function* () {
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
                            E != null &&
                              (E.isPSA()
                                ? (i = o("WAWebCommsWapMd").JID(E))
                                : E.isUser() &&
                                  ((i = o("WAWebCommsWapMd").DEVICE_JID(E)),
                                  o("WAWebABProps").getABPropConfigValue(
                                    "lid_status_non_soaked_client_support_enabled",
                                  ) &&
                                    D.toString() === o("WAJids").STATUS_JID &&
                                    E.isLid() &&
                                    y === u.READ &&
                                    (s = o("WAWebLidMigrationUtils").toPn(E))));
                            var c = g == null ? void 0 : g.key.id,
                              f =
                                c != null
                                  ? o("WAWap").wap("bot", {
                                      client_thread_id:
                                        o("WAWap").CUSTOM_STRING(c),
                                    })
                                  : null,
                              h =
                                o(
                                  "WAWebStatusGatingUtils",
                                ).isStatusStanzaSendEnabled() &&
                                (a === !0 ||
                                  k.toString() === o("WAJids").STATUS_JID)
                                  ? o("WAWap").CUSTOM_STRING("status")
                                  : o("WAWap").DROP_ATTR,
                              v = o("WAWap").wap(
                                "receipt",
                                {
                                  to: o("WAWebCommsWapMd").JID(D),
                                  type:
                                    y === u.DELIVERY ? o("WAWap").DROP_ATTR : y,
                                  class:
                                    l != null
                                      ? o("WAWap").CUSTOM_STRING(l)
                                      : o("WAWap").DROP_ATTR,
                                  id: o("WAWap").CUSTOM_STRING(t[0]),
                                  t:
                                    d != null
                                      ? o("WAWap").CUSTOM_STRING(d)
                                      : o("WAWap").DROP_ATTR,
                                  participant:
                                    i != null ? i : o("WAWap").DROP_ATTR,
                                  peer_participant_pn: s
                                    ? o("WAWebCommsWapMd").USER_JID(s)
                                    : o("WAWap").DROP_ATTR,
                                  recipient: I
                                    ? o("WAWebCommsWapMd").USER_JID(I)
                                    : o("WAWap").DROP_ATTR,
                                  sts:
                                    b != null
                                      ? o("WAWap").CUSTOM_STRING(String(b))
                                      : o("WAWap").DROP_ATTR,
                                  context: h,
                                },
                                r,
                                f,
                              );
                            if (C) {
                              var S = (function () {
                                var r = n(
                                  "asyncToGeneratorRuntime",
                                ).asyncToGenerator(function* () {
                                  var n = {
                                    id: t[0],
                                    from: D,
                                    class: "receipt",
                                    type: y,
                                    participant: E,
                                    recipient: I,
                                  };
                                  if (y === u.READ || y === u.READ_SELF) {
                                    var r = yield o(
                                        "WADeprecatedSendIq",
                                      ).deprecatedSendStanzaAndReturnAck(
                                        v,
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
                                      "WADeprecatedSendIq",
                                    ).deprecatedSendStanzaAndWaitForAck(
                                      v,
                                      o(
                                        "WAWebCommsAckParser",
                                      ).toCoreAckTemplate(n),
                                    );
                                });
                                return function () {
                                  return r.apply(this, arguments);
                                };
                              })();
                              x.push(S());
                            } else
                              x.push(
                                o("WADeprecatedSendIq").deprecatedCastStanza(v),
                              );
                          };
                        _.length > 0;
                      )
                        yield* $();
                      return (s || (s = n("Promise"))).all(x);
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
