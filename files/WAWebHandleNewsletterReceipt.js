__d(
  "WAWebHandleNewsletterReceipt",
  [
    "WAAckLevel",
    "WALogger",
    "WAWebAck",
    "WAWebHandleMsgReceiptCommon",
    "WAWebMessageReceiptBatcher",
    "WAWebMsgKey",
    "WAWebOfflineHandler",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.ack,
            a = t.ackString,
            i = t.externalIds,
            l = t.from,
            u = t.offline,
            c = t.participant,
            d = t.stanzaId,
            m = t.ts,
            p = "[receipt][newsletter][" + d + "]";
          if (a === "view")
            return o("WAWebHandleMsgReceiptCommon").updateMsgViewed(
              i.map(function (e) {
                return parseInt(e, 10);
              }),
              l,
            );
          if (
            n !== o("WAAckLevel").ACK.READ &&
            n !== o("WAAckLevel").ACK.PLAYED
          )
            throw (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " ACK should be READ or PLAYED, ",
                    " received instead",
                  ])),
                p,
                n,
              ),
              r("err")(
                "handleNewsletterSimpleReceipt: only READ/PLAYED ack for newsletters",
              )
            );
          var _ =
            (a === o("WAWebAck").ACK_STRING.READ_SELF ||
              a === o("WAWebAck").ACK_STRING.PLAYED_SELF) &&
            c != null &&
            o("WAWebWidFactory")
              .asUserWidOrThrow(c)
              .equals(
                o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
              );
          if (!_)
            throw (
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " only peer receipts are accepted",
                  ])),
                p,
              ),
              r("err")(
                "handleNewsletterSimpleReceipt: only peer receipts for newsletters",
              )
            );
          var f = i.map(function (e) {
              return new (r("WAWebMsgKey"))({ id: e, remote: l, fromMe: !1 });
            }),
            g = f.map(function (e) {
              return e.toString();
            });
          u != null &&
            o(
              "WAWebOfflineHandler",
            ).OfflineMessageHandler.offlineStanzaReceivedAfterComplete();
          var h =
              u != null &&
              !o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.isResumeFromRestartComplete(),
            y = o(
              "WAWebMessageReceiptBatcher",
            ).receiptBatcher.acceptPeerReceipt({
              isOffline: h,
              ack: n,
              ts: m,
              remote: l,
              msgKeys: g,
            });
          return (
            h ||
              (yield o(
                "WAWebMessageReceiptBatcher",
              ).receiptBatcher.runActiveBatches()),
            y
          );
        })),
        c.apply(this, arguments)
      );
    }
    l.handleNewsletterSimpleReceipt = u;
  },
  98,
);
