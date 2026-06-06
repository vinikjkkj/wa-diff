__d(
  "WAWebHandleMsgReceipt",
  [
    "WALogger",
    "WAWebAck",
    "WAWebCreateReceiptStanzaReceiveMetric",
    "WAWebHandleAckPeerSimpleReceipt",
    "WAWebHandleBotInvokeMsgReceipt",
    "WAWebHandleDirectChatReceipt",
    "WAWebHandleGroupChatReceipt",
    "WAWebHandleMsgReceiptParser",
    "WAWebHandleMsgReceiptUtils",
    "WAWebHandleNewsletterReceipt",
    "WAWebHandleStatusReceipt",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebReceiptAck",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "err",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h;
    async function y(t) {
      var n = o(
          "WAWebCreateReceiptStanzaReceiveMetric",
        ).createReceiptStanzaReceiveMetric(),
        a = o("WAWebHandleMsgReceiptParser").msgReceiptParser.parse(t);
      if (a.error)
        throw (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Parsing Error: ",
                "",
              ])),
            a.error.toString(),
          ),
          a.error
        );
      var i = a.success,
        l = i.ack,
        p = i.ackString,
        _ = i.from,
        f = i.offline,
        g = i.stanzaId,
        h;
      if (i.type === "simple")
        if (l === o("WAWebAck").ACK.CONTENT_GONE)
          h = o("WAWebReceiptAck").buildReceiptAck({
            ackString: p,
            from: _,
            participant: null,
            stanzaId: g,
          });
        else {
          try {
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  'handleSimpleReceipt: receipt "',
                  '" for msg: ',
                  "",
                ])),
              l,
              r("gkx")("26258") ? "..." : g,
            ),
              await C(i));
          } catch (e) {
            o("WALogger")
              .WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    'handleSimpleReceipt: receipt "',
                    '" for msg: ',
                    " failed: ",
                    "",
                  ])),
                l,
                r("gkx")("26258") ? "..." : g,
                r("gkx")("26258") ? "..." : e,
              )
              .tags("messaging");
          }
          h = o("WAWebReceiptAck").buildReceiptAck({
            ackString: p,
            from: _,
            participant: i.participant,
            stanzaId: g,
          });
        }
      else if (i.type === "aggregated_by_type") {
        try {
          (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "handleAggregateReceipt: ",
                ' receipt(s) "',
                '" for msg: ',
                "",
              ])),
            i.receipts.length,
            l,
            r("gkx")("26258") ? "..." : i.externalId,
          ),
            await b(i));
        } catch (e) {}
        h = o("WAWebReceiptAck").buildReceiptAck({
          ackString: p,
          from: _,
          participant: null,
          stanzaId: g,
        });
      } else if (i.type === "aggregated_by_message") {
        try {
          (o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "handleAggregateByMessageReceipt: ",
                " receipt(s) for msg: ",
                "",
              ])),
            i.receipts.length,
            r("gkx")("26258") ? "..." : i.externalId,
          ),
            await v(i));
        } catch (e) {
          o("WALogger")
            .ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "handleAggregateByMessageReceipt: failed: ",
                  "",
                ])),
              e,
            )
            .sendLogs("handle-aggregate-by-message-receipt-failed", {
              sampling: 0.001,
            });
        }
        h = o("WAWebReceiptAck").buildReceiptAck({
          ackString: p,
          from: _,
          participant: null,
          stanzaId: g,
        });
      } else i.type;
      return (f == null && n(i), h);
    }
    function C(e) {
      var t = e.ack,
        n = e.ackString,
        a = e.from,
        i = e.recipient;
      if (t === o("WAWebAck").ACK.PEER)
        return o("WAWebHandleAckPeerSimpleReceipt").handleAckPeerSimpleReceipt(
          e,
        );
      if (a.isNewsletter())
        return o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled()
          ? o("WAWebHandleNewsletterReceipt").handleNewsletterSimpleReceipt(e)
          : Promise.resolve();
      if (a.isBot() && i != null && n === o("WAWebAck").ACK_STRING.READ)
        return o(
          "WAWebHandleBotInvokeMsgReceipt",
        ).handleBotOneToOneInvokeSimpleReadReceipt(e);
      if (a.isStatus())
        return o("WAWebHandleStatusReceipt").handleStatusSimpleReceipt(e);
      if (a.isUser())
        return o("WAWebHandleDirectChatReceipt").handleChatSimpleReceipt(e);
      if (a.isGroup())
        return o("WAWebHandleGroupChatReceipt").handleGroupSimpleReceipt(e);
      if (a.isBroadcast()) {
        if (!e.participant)
          return (
            o("WALogger")
              .ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "error: missing participant for broadcast receipt ",
                    "",
                  ])),
                a.toString(),
              )
              .sendLogs("handleSimpleReceipt: failed"),
            Promise.reject(
              r("err")(
                "handleSimpleReceipt: missing participant for broadcast receipt " +
                  a.toString(),
              ),
            )
          );
        var l = o("WAWebWidFactory").asUserWidOrThrow(e.participant);
        if (o("WAWebUserPrefsMeUser").isMeAccount(l))
          return (
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "handleSimpleReceipt: skip broadcast receipt from self",
                ])),
            ),
            Promise.resolve()
          );
        var s = babelHelpers.extends({}, e, { from: l, participant: null });
        return o("WAWebHandleDirectChatReceipt").handleChatSimpleReceipt(s);
      }
      return (
        o("WALogger")
          .ERROR(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "error: unsupported type for ",
                "",
              ])),
            a.toString(),
          )
          .sendLogs("handleSimpleReceipt: failed"),
        Promise.reject(
          r("err")("handleSimpleReceipt: unsupported type for " + a.toString()),
        )
      );
    }
    function b(e) {
      var t = e.ack,
        n = e.from;
      return t === o("WAWebAck").ACK.CONTENT_GONE
        ? (o("WALogger")
            .ERROR(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "error: reupload receipts cannot be aggregated",
                ])),
            )
            .sendLogs("handleAggregateReceipt: failed"),
          Promise.reject(r("err")("handleAggregateReceipt: failed")))
        : !n.isGroup() && !n.isBroadcast()
          ? (o("WALogger")
              .ERROR(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "handleAggregateReceipt: only group/broadcast supported",
                  ])),
              )
              .sendLogs("handleAggregateReceipt: failed"),
            Promise.reject(r("err")("handleAggregateReceipt: failed")))
          : Promise.all(
              o("WAWebHandleMsgReceiptUtils")
                .deaggregateGroupedByTypeReceipt(e)
                .map(C),
            );
    }
    function v(e) {
      return Promise.all(
        o("WAWebHandleMsgReceiptUtils")
          .deaggregateGroupedByMessageReceipt(e)
          .map(C),
      );
    }
    l.default = y;
  },
  98,
);
