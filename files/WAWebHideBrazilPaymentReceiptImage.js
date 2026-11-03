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
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n) {
      o("WAWebBrazilPaymentStateUpdateMsgUtils").awaitBrazilPaymentReceipt(
        e,
        t,
        n,
      );
      var a = new (r("WAWebMsgKey"))({ fromMe: t, remote: e, id: n }),
        i = (await o("WAWebAddonQueryUtils").getParentMsgsByMsgKey([a])).get(
          a.toString(),
        );
      if (!(i == null || s(i))) {
        var l = await o("WAWebBrazilPaymentStateDb")
          .hideStoredReceiptImage(i.id)
          .finally(function () {
            return o(
              "WAWebBrazilPaymentStateUpdateMsgUtils",
            ).stopAwaitingBrazilPaymentReceipt(e, t, n);
          });
        l != null &&
          o("WAWebBackendApi").frontendFireAndForget("updateViewModeForMsgs", {
            msgIdsViewModeMap: new Map([
              [l.toString(), o("WAWebViewMode.flow").ViewModeType.HIDDEN],
            ]),
          });
      }
    }
    function s(e) {
      return (
        o("WAWebCommonMsgUtils").isPlaceholderMsg(e.type) ||
        o("WAWebCommonMsgUtils").isFutureproofMsg(e.type)
      );
    }
    l.hideBrazilPaymentReceiptImage = e;
  },
  98,
);
