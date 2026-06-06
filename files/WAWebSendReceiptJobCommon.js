__d(
  "WAWebSendReceiptJobCommon",
  [
    "$InternalEnum",
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
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = Object.freeze({
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
      u = n("$InternalEnum")({
        ORPHAN: 0,
        NO_CHECKMARK_UX: 1,
        HID_FAILED_DECRYPT: 2,
      });
    function c(e) {
      return e > 0 ? o("WAWap").wap("meta", { mode: o("WAWap").INT(e) }) : null;
    }
    var d = 256,
      m = new (r("WADeprecatedWapParser"))("readReceiptAckParser", function (
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
    function p(e, t) {
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
    function _(e, t, n, r) {
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
    async function f(t) {
      var n = t.groupedReceipt,
        r = t.isStatusReceipt,
        a = t.maxStsByAuthor,
        i = t.receiptClass,
        l = t.recipient,
        u = t.t,
        c = t.threadId,
        f = t.to,
        g = t.type;
      if (f.isNewsletter() && g === s.DELIVERY) return p(f, n);
      var h =
        g === s.READ ||
        g === s.PLAYED ||
        g === s.READ_SELF ||
        g === s.PLAYED_SELF ||
        g === s.HISTORY_SYNC_COMPLETION;
      await Promise.all(
        Array.from(n.keys(), async function (t) {
          var p = n.get(t);
          if (!(!p || p.length === 0)) {
            var y = a == null ? void 0 : a.get(t),
              C = !f.isBot() && t.isBot();
            if (g === s.DELIVERY && C) {
              var b, v, S;
              (f.isUser() ? ((b = t), (v = f)) : ((b = f), (S = t)),
                _(p, b, v, S));
              return;
            }
            var R = f.isUser() || f.isNewsletter() ? null : t,
              L = o(
                "WAWebSimpleSignalPNToFBIDMigration",
              ).maybeReplaceDeprecatedBotPnWithFbid(f),
              E = l;
            E == null &&
              f.isUser() &&
              !f.isBot() &&
              t.isBot() &&
              ((L = t), (E = f));
            for (
              var k =
                  g === s.DELIVERY ||
                  g === s.SENDER ||
                  g === s.PEER_MSG ||
                  g === s.HISTORY_SYNC_COMPLETION,
                I = k
                  ? L
                  : await o("WAWebPnlessStanzaMigration").getStanzaToFromChatId(
                      L,
                      g,
                    ),
                T = [],
                D = async function () {
                  var t = p.splice(0, d),
                    n = null;
                  t.length > 1 &&
                    (n = o("WAWap").wap(
                      "list",
                      null,
                      t.slice(1).map(function (e) {
                        return o("WAWap").wap("item", {
                          id: o("WAWap").CUSTOM_STRING(e),
                        });
                      }),
                    ));
                  var a, l;
                  R != null &&
                    (R.isPSA()
                      ? (a = o("WAWebCommsWapMd").JID(R))
                      : R.isUser() &&
                        ((a = o("WAWebCommsWapMd").DEVICE_JID(R)),
                        o("WAWebABProps").getABPropConfigValue(
                          "lid_status_non_soaked_client_support_enabled",
                        ) &&
                          I.toString() === o("WAJids").STATUS_JID &&
                          R.isLid() &&
                          g === s.READ &&
                          (l = o("WAWebLidMigrationUtils").toPn(R))));
                  var _ = c == null ? void 0 : c.key.id,
                    f =
                      _ != null
                        ? o("WAWap").wap("bot", {
                            client_thread_id: o("WAWap").CUSTOM_STRING(_),
                          })
                        : null,
                    C =
                      o("WAWebStatusGatingUtils").isStatusStanzaSendEnabled() &&
                      (r === !0 || L.toString() === o("WAJids").STATUS_JID)
                        ? o("WAWap").CUSTOM_STRING("status")
                        : o("WAWap").DROP_ATTR,
                    b = o("WAWap").wap(
                      "receipt",
                      {
                        to: o("WAWebCommsWapMd").JID(I),
                        type: g === s.DELIVERY ? o("WAWap").DROP_ATTR : g,
                        class:
                          i != null
                            ? o("WAWap").CUSTOM_STRING(i)
                            : o("WAWap").DROP_ATTR,
                        id: o("WAWap").CUSTOM_STRING(t[0]),
                        t:
                          u != null
                            ? o("WAWap").CUSTOM_STRING(u)
                            : o("WAWap").DROP_ATTR,
                        participant: a != null ? a : o("WAWap").DROP_ATTR,
                        peer_participant_pn: l
                          ? o("WAWebCommsWapMd").USER_JID(l)
                          : o("WAWap").DROP_ATTR,
                        recipient: E
                          ? o("WAWebCommsWapMd").USER_JID(E)
                          : o("WAWap").DROP_ATTR,
                        sts:
                          y != null
                            ? o("WAWap").CUSTOM_STRING(String(y))
                            : o("WAWap").DROP_ATTR,
                        context: C,
                      },
                      n,
                      f,
                    );
                  if (h) {
                    var v = async function () {
                      var n = {
                        id: t[0],
                        from: I,
                        class: "receipt",
                        type: g,
                        participant: R,
                        recipient: E,
                      };
                      if (g === s.READ || g === s.READ_SELF) {
                        var r = await o(
                            "WADeprecatedSendIq",
                          ).deprecatedSendStanzaAndReturnAck(
                            b,
                            o("WAWebCommsAckParser").toCoreAckTemplate(n),
                          ),
                          a = m.parse(r);
                        if (a.error)
                          o("WALogger")
                            .ERROR(
                              e ||
                                (e = babelHelpers.taggedTemplateLiteralLoose([
                                  "[messaging] sendAggregateReceipts: Invalid ack from server",
                                ])),
                            )
                            .sendLogs("Invalid-Receipt-Ack");
                        else {
                          var i = a.success.readReceipts;
                          i != null &&
                            o("WAWebUserPrefsGeneral").setUserPrivacySettings(
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
                          o("WAWebCommsAckParser").toCoreAckTemplate(n),
                        );
                    };
                    T.push(v());
                  } else
                    T.push(o("WADeprecatedSendIq").deprecatedCastStanza(b));
                };
              p.length > 0;
            )
              await D();
            return Promise.all(T);
          }
        }),
      );
    }
    ((l.RECEIPT_TYPE = s),
      (l.ReceiptModeBitPosition = u),
      (l.genReceiptMetaModeNode = c),
      (l.sendBotInvokeResponseAcks = _),
      (l.sendAggregateReceipts = f));
  },
  98,
);
