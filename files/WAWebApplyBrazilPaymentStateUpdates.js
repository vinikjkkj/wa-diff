__d(
  "WAWebApplyBrazilPaymentStateUpdates",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebBrazilPaymentReceiptAddedNoticeMsg",
    "WAWebBrazilPaymentStateDb",
    "WAWebBrazilPaymentStateUpdatePayload",
    "WAWebBrazilPaymentStateUpdateRules",
    "WAWebFindBrazilPaymentRequestMsg",
    "WAWebHandleSingleMsg",
    "WAWebHideBrazilPaymentReceiptImage",
    "WAWebLidMigrationUtils",
    "WAWebModelStorageUtils",
    "WAWebSchemaMessage",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
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
      f = 1e3;
    function g(t) {
      return t.reduce(
        function (t, n) {
          return t.then(function (t) {
            return h(n)
              .catch(function (t) {
                return (
                  o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[br-payment-state] failed to apply an update",
                        ])),
                    )
                    .catching(r("getErrorSafe")(t))
                    .sendLogs("br-payment-state-apply-failed"),
                  !1
                );
              })
              .then(function (e) {
                return (
                  e &&
                    o(
                      "WAWebBrazilPaymentReceiptAddedNoticeMsg",
                    ).stopAwaitingHistorySyncReceiptNotice(n),
                  t && e
                );
              });
          });
        },
        (_ || (_ = n("Promise"))).resolve(!0),
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
            "WAWebBrazilPaymentStateUpdatePayload",
          ).getBrazilPaymentStateUpdate(e);
          if (t == null) return !0;
          var n = yield o(
              "WAWebFindBrazilPaymentRequestMsg",
            ).findBrazilPaymentRequestMsg(e.id.remote, t.paymentMsgId),
            r = n.paymentMsg;
          if (r == null) return !n.isPending;
          var a = e.id.fromMe === r.id.fromMe;
          if (
            !o("WAWebBrazilPaymentStateUpdateRules").isAllowedStatusUpdate(t, a)
          )
            return (
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[br-payment-state] rejecting a status only the requester can set",
                  ])),
              ),
              !0
            );
          var i = o(
              "WAWebBrazilPaymentStateUpdateRules",
            ).hasAcceptedReceiptUpdate(t, a),
            l = o("WAWebBrazilPaymentStateUpdateRules").getUpdateTimestampMs(
              t,
              D(e) * f,
            ),
            c = yield o(
              "WAWebBrazilPaymentStateDb",
            ).updateStoredBrazilPaymentState(r.id, function (e) {
              return o(
                "WAWebBrazilPaymentStateUpdateRules",
              ).getNextBrazilPaymentState(e, t, a, l);
            });
          return c == null
            ? (o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[br-payment-state] could not write the update to the payment message",
                    ])),
                )
                .sendLogs("br-payment-state-write-failed"),
              !1)
            : (C(r.id, c.updatedPayload),
              i
                ? b({ paymentMsgKey: r.id, update: t, updateMsg: e, write: c })
                : !0);
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      t != null &&
        o("WAWebBackendApi").frontendFireAndForget(
          "updateBrazilPaymentStateMsgs",
          { updates: [{ msgKey: e, interactivePayload: t }] },
        );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.paymentMsgKey,
            n = e.update,
            r = e.updateMsg,
            a = e.write,
            i = n.receiptMsgId;
          return i == null ||
            (yield o(
              "WAWebHideBrazilPaymentReceiptImage",
            ).hideBrazilPaymentReceiptImage(r.id.remote, r.id.fromMe, i),
            !T(r, a, i))
            ? !0
            : S({
                chatId: r.id.remote,
                isAwaitingHistorySync: o(
                  "WAWebBrazilPaymentReceiptAddedNoticeMsg",
                ).isAwaitingHistorySyncReceiptNotice(r),
                paymentMsgKey: t,
                receiptMsgId: i,
                t: D(r),
              });
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chatId,
            n = e.isAwaitingHistorySync,
            a = e.paymentMsgKey,
            i = e.receiptMsgId,
            l = e.t,
            s = o(
              "WAWebBrazilPaymentReceiptAddedNoticeMsg",
            ).getReceiptAddedNoticeKey(t, i);
          try {
            if ((yield L(s)) || (yield k(s))) return !0;
            if (n)
              return (
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[br-payment-state] waiting for history sync to store the receipt notice",
                    ])),
                ),
                !1
              );
            if (
              (yield o("WAWebHandleSingleMsg").handleSingleMsgImpl({
                chatId: t,
                newMsg: o(
                  "WAWebBrazilPaymentReceiptAddedNoticeMsg",
                ).genReceiptAddedNotice({
                  chatId: t,
                  paymentMsgKey: a,
                  receiptMsgId: i,
                  t: l,
                }),
                handleSingleMsgOrigin: "brazilPaymentReceiptAdded",
              }),
              !(yield k(s)))
            )
              return (
                o("WALogger")
                  .WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[br-payment-state] the receipt notice was not stored",
                      ])),
                  )
                  .sendLogs("br-payment-state-receipt-notice-not-stored"),
                !0
              );
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[br-payment-state] added the receipt notice",
                ])),
            );
          } catch (e) {
            o("WALogger")
              .ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[br-payment-state] could not add the receipt notice",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("br-payment-state-receipt-notice-failed");
          }
          return !0;
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              ["message"],
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    var n = t[0],
                      r = yield n.bulkGet(
                        [e, o("WAWebLidMigrationUtils").getAlternateMsgKey(e)]
                          .filter(Boolean)
                          .map(String),
                        !1,
                      ),
                      a = r.find(function (e) {
                        return (
                          (e == null ? void 0 : e.viewMode) ===
                          o("WAWebViewMode.flow").ViewModeType.HIDDEN
                        );
                      });
                    return a == null
                      ? null
                      : (yield n.bulkCreateOrMerge([
                          {
                            id: a.id,
                            viewMode:
                              o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                          },
                        ]),
                        a.id);
                  },
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
            );
          return t == null
            ? !1
            : (o("WAWebBackendApi").frontendFireAndForget(
                "updateViewModeForMsgs",
                {
                  msgIdsViewModeMap: new Map([
                    [t, o("WAWebViewMode.flow").ViewModeType.VISIBLE],
                  ]),
                },
              ),
              !0);
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSchemaMessage")
            .getMessageTable()
            .bulkGet(
              [e, o("WAWebLidMigrationUtils").getAlternateMsgKey(e)]
                .filter(Boolean)
                .map(String),
              !1,
            );
          return t.some(Boolean);
        })),
        I.apply(this, arguments)
      );
    }
    function T(e, t, n) {
      var r = t.next;
      return (
        !e.id.fromMe &&
        r.receiptMsgId === n &&
        o("WAWebBrazilPaymentReceiptAddedNoticeMsg").isAnnouncedReceipt(n)
      );
    }
    function D(e) {
      var t;
      return (t = e.t) != null ? t : o("WATimeUtils").unixTime();
    }
    l.applyBrazilPaymentStateUpdates = g;
  },
  98,
);
