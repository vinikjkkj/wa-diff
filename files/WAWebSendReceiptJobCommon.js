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
    "getErrorSafe",
    "justknobx",
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
    async function g(e) {
      var t = e.groupedReceipt,
        n = e.isStatusReceipt,
        r = e.maxStsByAuthor,
        a = e.readOrigin,
        i = e.receiptClass,
        l = e.recipient,
        s = e.sendsGroupAgentDeliveryReceipt,
        c = e.t,
        d = e.threadId,
        p = e.to,
        g = e.type;
      if (p.isNewsletter() && g === u.DELIVERY) return _(p, t);
      var y =
          g === u.READ ||
          g === u.PLAYED ||
          g === u.READ_SELF ||
          g === u.PLAYED_SELF ||
          g === u.HISTORY_SYNC_COMPLETION,
        S = await Promise.allSettled(
          Array.from(t.keys(), async function (e) {
            var _ = t.get(e);
            if (!_ || _.length === 0) return [];
            var b = r == null ? void 0 : r.get(e),
              S = !p.isBot() && e.isBot();
            if (g === u.DELIVERY && S && s !== !0) {
              var R, L, E;
              return (
                p.isUser() ? ((R = e), (L = p)) : ((R = p), (E = e)),
                f({ messageIds: _, participant: E, recipient: L, to: R }),
                []
              );
            }
            var k = p.isUser() || p.isNewsletter() ? null : e,
              I = o(
                "WAWebMaibaWASSMigration",
              ).maybeReplaceMaibaAiHubWidWithFbid(
                o(
                  "WAWebSimpleSignalPNToFBIDMigration",
                ).maybeReplaceDeprecatedBotPnWithFbid(p),
              ),
              T = l;
            T == null &&
              p.isUser() &&
              !p.isBot() &&
              e.isBot() &&
              ((I = e), (T = p));
            for (
              var D =
                  g === u.DELIVERY ||
                  g === u.SENDER ||
                  g === u.PEER_MSG ||
                  g === u.HISTORY_SYNC_COMPLETION,
                x = D
                  ? I
                  : await o("WAWebPnlessStanzaMigration").getStanzaToFromChatId(
                      I,
                      g,
                    ),
                $ = [];
              _.length > 0;
            ) {
              var P = _.splice(0, m),
                N = null;
              P.length > 1 &&
                (N = o("WAWap").wap(
                  "list",
                  null,
                  P.slice(1).map(function (e) {
                    return o("WAWap").wap("item", {
                      id: o("WAWap").CUSTOM_STRING(e),
                    });
                  }),
                ));
              var M = void 0,
                w = void 0;
              k != null &&
                (k.isPSA()
                  ? (M = o("WAWebCommsWapMd").JID(k))
                  : k.isUser() &&
                    ((M = o("WAWebCommsWapMd").DEVICE_JID(k)),
                    o("WAWebABProps").getABPropConfigValue(
                      "lid_status_non_soaked_client_support_enabled",
                    ) &&
                      x.toString() === o("WAJids").STATUS_JID &&
                      k.isLid() &&
                      g === u.READ &&
                      (w = o("WAWebLidMigrationUtils").toPn(k))));
              var A = d == null ? void 0 : d.key.id,
                F =
                  A != null
                    ? o("WAWap").wap("bot", {
                        client_thread_id: o("WAWap").CUSTOM_STRING(A),
                      })
                    : null,
                O =
                  n === !0 || I.toString() === o("WAJids").STATUS_JID
                    ? "status"
                    : null,
                B = i != null ? i : O,
                W = o("WAWap").wap(
                  "receipt",
                  {
                    to: o("WAWebCommsWapMd").JID(x),
                    type: g === u.DELIVERY ? o("WAWap").DROP_ATTR : g,
                    class:
                      B != null
                        ? o("WAWap").CUSTOM_STRING(B)
                        : o("WAWap").DROP_ATTR,
                    id: o("WAWap").CUSTOM_STRING(P[0]),
                    t:
                      c != null
                        ? o("WAWap").CUSTOM_STRING(c)
                        : o("WAWap").DROP_ATTR,
                    participant: M != null ? M : o("WAWap").DROP_ATTR,
                    peer_participant_pn: w
                      ? o("WAWebCommsWapMd").USER_JID(w)
                      : o("WAWap").DROP_ATTR,
                    recipient: T
                      ? o("WAWebCommsWapMd").USER_JID(T)
                      : o("WAWap").DROP_ATTR,
                    subtype: v(g, a),
                    sts:
                      b != null
                        ? o("WAWap").CUSTOM_STRING(String(b))
                        : o("WAWap").DROP_ATTR,
                  },
                  N,
                  F,
                );
              if (y) {
                var q = {
                  id: P[0],
                  from: x,
                  class: "receipt",
                  type: g,
                  participant: k,
                  recipient: T,
                };
                $.push(h(W, q));
              } else
                $.push(
                  Promise.resolve(
                    o("WADeprecatedSendIq").deprecatedCastStanza(W),
                  ),
                );
            }
            return C($);
          }),
        );
      b(
        S.flatMap(function (e) {
          return e.status === "rejected" ? [e.reason] : e.value;
        }),
      );
    }
    async function h(t, n) {
      var r = n.type;
      if (r === u.READ || r === u.READ_SELF) {
        var a = await o(
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
        await o(
          "WAWebDeprecatedSendIqWorkerCompatible",
        ).deprecatedSendStanzaAndWaitForAck(
          t,
          o("WAWebCommsAckParser").toCoreAckTemplate(n),
        );
    }
    async function y(e) {
      b(await C(e));
    }
    async function C(e) {
      var t = await Promise.allSettled(e);
      return t.flatMap(function (e) {
        return e.status === "rejected" ? [e.reason] : [];
      });
    }
    function b(e) {
      if (e.length !== 0)
        throw (
          e.length > 1 &&
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[messaging] waitForReceiptSends: ",
                    " more receipt sends failed",
                  ])),
                e.length - 1,
              )
              .catching(r("getErrorSafe")(e[1]))
              .sendLogs("receipt-send-multiple-failures"),
          e[0]
        );
    }
    function v(e, t) {
      return t == null || (e !== u.READ && e !== u.READ_SELF)
        ? o("WAWap").DROP_ATTR
        : r("justknobx")._("2962")
          ? o("WAWap").CUSTOM_STRING(t)
          : o("WAWap").DROP_ATTR;
    }
    ((l.RECEIPT_TYPE = u),
      (l.ReceiptModeBitPosition = c),
      (l.genReceiptMetaModeNode = d),
      (l.sendBotInvokeResponseAcks = f),
      (l.sendAggregateReceipts = g),
      (l.waitForReceiptSends = y));
  },
  98,
);
