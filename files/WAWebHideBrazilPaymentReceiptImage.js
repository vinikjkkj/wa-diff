__d(
  "WAWebHideBrazilPaymentReceiptImage",
  [
    "WAWebAddonQueryUtils",
    "WAWebBackendApi",
    "WAWebBrazilPaymentStateDb",
    "WAWebBrazilPaymentStateUpdateMsgUtils",
    "WAWebCommonMsgUtils",
    "WAWebMsgKey",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          o("WAWebBrazilPaymentStateUpdateMsgUtils").awaitBrazilPaymentReceipt(
            e,
            t,
            n,
          );
          var a = new (r("WAWebMsgKey"))({ fromMe: t, remote: e, id: n }),
            i = (yield o("WAWebAddonQueryUtils").getParentMsgsByMsgKey([
              a,
            ])).get(a.toString());
          if (!(i == null || u(i))) {
            var l = yield o("WAWebBrazilPaymentStateDb")
              .hideStoredReceiptImage(i.id)
              .finally(function () {
                return o(
                  "WAWebBrazilPaymentStateUpdateMsgUtils",
                ).stopAwaitingBrazilPaymentReceipt(e, t, n);
              });
            l != null &&
              o("WAWebBackendApi").frontendFireAndForget(
                "updateViewModeForMsgs",
                {
                  msgIdsViewModeMap: new Map([
                    [l.toString(), o("WAWebViewMode.flow").ViewModeType.HIDDEN],
                  ]),
                },
              );
          }
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return (
        o("WAWebCommonMsgUtils").isPlaceholderMsg(e.type) ||
        o("WAWebCommonMsgUtils").isFutureproofMsg(e.type)
      );
    }
    l.hideBrazilPaymentReceiptImage = e;
  },
  98,
);
