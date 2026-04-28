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
      c = 256,
      d = new (r("WADeprecatedWapParser"))("readReceiptAckParser", function (
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
    function m(e, t) {
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
    function p(e, t, n, r) {
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
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t.groupedReceipt,
            a = t.isStatusReceipt,
            i = t.receiptClass,
            l = t.recipient,
            _ = t.t,
            f = t.threadId,
            g = t.to,
            h = t.type;
          if (g.isNewsletter() && h === u.DELIVERY) return m(g, r);
          var y =
            h === u.READ ||
            h === u.PLAYED ||
            h === u.READ_SELF ||
            h === u.PLAYED_SELF ||
            h === u.HISTORY_SYNC_COMPLETION;
          yield (s || (s = n("Promise"))).all(
            Array.from(
              r.keys(),
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    var m = r.get(t);
                    if (!(!m || m.length === 0)) {
                      var C = !g.isBot() && t.isBot();
                      if (h === u.DELIVERY && C) {
                        var b, v, S;
                        (g.isUser() ? ((b = t), (v = g)) : ((b = g), (S = t)),
                          p(m, b, v, S));
                        return;
                      }
                      var R = g.isUser() || g.isNewsletter() ? null : t,
                        L = o(
                          "WAWebSimpleSignalPNToFBIDMigration",
                        ).maybeReplaceDeprecatedBotPnWithFbid(g),
                        E = l;
                      E == null &&
                        g.isUser() &&
                        !g.isBot() &&
                        t.isBot() &&
                        ((L = t), (E = g));
                      for (
                        var k =
                            h === u.DELIVERY ||
                            h === u.SENDER ||
                            h === u.PEER_MSG ||
                            h === u.HISTORY_SYNC_COMPLETION,
                          I = k
                            ? L
                            : yield o(
                                "WAWebPnlessStanzaMigration",
                              ).getStanzaToFromChatId(L, h),
                          T = [],
                          D = function* () {
                            var t = m.splice(0, c),
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
                            var l, s;
                            R != null &&
                              (R.isPSA()
                                ? (l = o("WAWebCommsWapMd").JID(R))
                                : R.isUser() &&
                                  ((l = o("WAWebCommsWapMd").DEVICE_JID(R)),
                                  o("WAWebABProps").getABPropConfigValue(
                                    "lid_status_non_soaked_client_support_enabled",
                                  ) &&
                                    I.toString() === o("WAJids").STATUS_JID &&
                                    R.isLid() &&
                                    h === u.READ &&
                                    (s = o("WAWebLidMigrationUtils").toPn(R))));
                            var p = f == null ? void 0 : f.key.id,
                              g =
                                p != null
                                  ? o("WAWap").wap("bot", {
                                      client_thread_id:
                                        o("WAWap").CUSTOM_STRING(p),
                                    })
                                  : null,
                              C =
                                o(
                                  "WAWebStatusGatingUtils",
                                ).isStatusStanzaSendEnabled() &&
                                (a === !0 ||
                                  L.toString() === o("WAJids").STATUS_JID)
                                  ? o("WAWap").CUSTOM_STRING("status")
                                  : o("WAWap").DROP_ATTR,
                              b = o("WAWap").wap(
                                "receipt",
                                {
                                  to: o("WAWebCommsWapMd").JID(I),
                                  type:
                                    h === u.DELIVERY ? o("WAWap").DROP_ATTR : h,
                                  class:
                                    i != null
                                      ? o("WAWap").CUSTOM_STRING(i)
                                      : o("WAWap").DROP_ATTR,
                                  id: o("WAWap").CUSTOM_STRING(t[0]),
                                  t:
                                    _ != null
                                      ? o("WAWap").CUSTOM_STRING(_)
                                      : o("WAWap").DROP_ATTR,
                                  participant:
                                    l != null ? l : o("WAWap").DROP_ATTR,
                                  peer_participant_pn: s
                                    ? o("WAWebCommsWapMd").USER_JID(s)
                                    : o("WAWap").DROP_ATTR,
                                  recipient: E
                                    ? o("WAWebCommsWapMd").USER_JID(E)
                                    : o("WAWap").DROP_ATTR,
                                  context: C,
                                },
                                r,
                                g,
                              );
                            if (y) {
                              var v = (function () {
                                var r = n(
                                  "asyncToGeneratorRuntime",
                                ).asyncToGenerator(function* () {
                                  var n = {
                                    id: t[0],
                                    from: I,
                                    class: "receipt",
                                    type: h,
                                    participant: R,
                                    recipient: E,
                                  };
                                  if (h === u.READ || h === u.READ_SELF) {
                                    var r = yield o(
                                        "WADeprecatedSendIq",
                                      ).deprecatedSendStanzaAndReturnAck(
                                        b,
                                        o(
                                          "WAWebCommsAckParser",
                                        ).toCoreAckTemplate(n),
                                      ),
                                      a = d.parse(r);
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
                                      b,
                                      o(
                                        "WAWebCommsAckParser",
                                      ).toCoreAckTemplate(n),
                                    );
                                });
                                return function () {
                                  return r.apply(this, arguments);
                                };
                              })();
                              T.push(v());
                            } else
                              T.push(
                                o("WADeprecatedSendIq").deprecatedCastStanza(b),
                              );
                          };
                        m.length > 0;
                      )
                        yield* D();
                      return (s || (s = n("Promise"))).all(T);
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
        f.apply(this, arguments)
      );
    }
    ((l.RECEIPT_TYPE = u),
      (l.sendBotInvokeResponseAcks = p),
      (l.sendAggregateReceipts = _));
  },
  98,
);
