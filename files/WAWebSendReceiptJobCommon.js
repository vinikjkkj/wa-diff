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
    "WAWebDeprecatedSendIqWorkerCompatible",
    "WAWebLidMigrationUtils",
    "WAWebMaibaWASSMigration",
    "WAWebPnlessStanzaMigration",
    "WAWebPrivacySettings",
    "WAWebSimpleSignalPNToFBIDMigration",
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
    function _(e) {
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
    async function f(e) {
      var t = e.groupedReceipt,
        n = e.isStatusReceipt,
        r = e.maxStsByAuthor,
        a = e.receiptClass,
        i = e.recipient,
        l = e.sendsGroupAgentDeliveryReceipt,
        u = e.t,
        c = e.threadId,
        m = e.to,
        f = e.type;
      if (m.isNewsletter() && f === s.DELIVERY) return p(m, t);
      var h =
        f === s.READ ||
        f === s.PLAYED ||
        f === s.READ_SELF ||
        f === s.PLAYED_SELF ||
        f === s.HISTORY_SYNC_COMPLETION;
      await Promise.all(
        Array.from(t.keys(), async function (e) {
          var p = t.get(e);
          if (!(!p || p.length === 0)) {
            var y = r == null ? void 0 : r.get(e),
              C = !m.isBot() && e.isBot();
            if (f === s.DELIVERY && C && l !== !0) {
              var b, v, S;
              (m.isUser() ? ((b = e), (v = m)) : ((b = m), (S = e)),
                _({ messageIds: p, participant: S, recipient: v, to: b }));
              return;
            }
            var R = m.isUser() || m.isNewsletter() ? null : e,
              L = o(
                "WAWebMaibaWASSMigration",
              ).maybeReplaceMaibaAiHubWidWithFbid(
                o(
                  "WAWebSimpleSignalPNToFBIDMigration",
                ).maybeReplaceDeprecatedBotPnWithFbid(m),
              ),
              E = i;
            E == null &&
              m.isUser() &&
              !m.isBot() &&
              e.isBot() &&
              ((L = e), (E = m));
            for (
              var k =
                  f === s.DELIVERY ||
                  f === s.SENDER ||
                  f === s.PEER_MSG ||
                  f === s.HISTORY_SYNC_COMPLETION,
                I = k
                  ? L
                  : await o("WAWebPnlessStanzaMigration").getStanzaToFromChatId(
                      L,
                      f,
                    ),
                T = [];
              p.length > 0;
            ) {
              var D = p.splice(0, d),
                x = null;
              D.length > 1 &&
                (x = o("WAWap").wap(
                  "list",
                  null,
                  D.slice(1).map(function (e) {
                    return o("WAWap").wap("item", {
                      id: o("WAWap").CUSTOM_STRING(e),
                    });
                  }),
                ));
              var $ = void 0,
                P = void 0;
              R != null &&
                (R.isPSA()
                  ? ($ = o("WAWebCommsWapMd").JID(R))
                  : R.isUser() &&
                    (($ = o("WAWebCommsWapMd").DEVICE_JID(R)),
                    o("WAWebABProps").getABPropConfigValue(
                      "lid_status_non_soaked_client_support_enabled",
                    ) &&
                      I.toString() === o("WAJids").STATUS_JID &&
                      R.isLid() &&
                      f === s.READ &&
                      (P = o("WAWebLidMigrationUtils").toPn(R))));
              var N = c == null ? void 0 : c.key.id,
                M =
                  N != null
                    ? o("WAWap").wap("bot", {
                        client_thread_id: o("WAWap").CUSTOM_STRING(N),
                      })
                    : null,
                w =
                  n === !0 || L.toString() === o("WAJids").STATUS_JID
                    ? "status"
                    : null,
                A = a != null ? a : w,
                F = o("WAWap").wap(
                  "receipt",
                  {
                    to: o("WAWebCommsWapMd").JID(I),
                    type: f === s.DELIVERY ? o("WAWap").DROP_ATTR : f,
                    class:
                      A != null
                        ? o("WAWap").CUSTOM_STRING(A)
                        : o("WAWap").DROP_ATTR,
                    id: o("WAWap").CUSTOM_STRING(D[0]),
                    t:
                      u != null
                        ? o("WAWap").CUSTOM_STRING(u)
                        : o("WAWap").DROP_ATTR,
                    participant: $ != null ? $ : o("WAWap").DROP_ATTR,
                    peer_participant_pn: P
                      ? o("WAWebCommsWapMd").USER_JID(P)
                      : o("WAWap").DROP_ATTR,
                    recipient: E
                      ? o("WAWebCommsWapMd").USER_JID(E)
                      : o("WAWap").DROP_ATTR,
                    sts:
                      y != null
                        ? o("WAWap").CUSTOM_STRING(String(y))
                        : o("WAWap").DROP_ATTR,
                  },
                  x,
                  M,
                );
              if (h) {
                var O = {
                  id: D[0],
                  from: I,
                  class: "receipt",
                  type: f,
                  participant: R,
                  recipient: E,
                };
                T.push(g(F, O));
              } else T.push(o("WADeprecatedSendIq").deprecatedCastStanza(F));
            }
            return Promise.all(T);
          }
        }),
      );
    }
    async function g(t, n) {
      var r = n.type;
      if (r === s.READ || r === s.READ_SELF) {
        var a = await o(
            "WAWebDeprecatedSendIqWorkerCompatible",
          ).deprecatedSendStanzaAndReturnAck(
            t,
            o("WAWebCommsAckParser").toCoreAckTemplate(n),
          ),
          i = m.parse(a);
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
        await o(
          "WAWebDeprecatedSendIqWorkerCompatible",
        ).deprecatedSendStanzaAndWaitForAck(
          t,
          o("WAWebCommsAckParser").toCoreAckTemplate(n),
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
