__d(
  "WAWebHandleMsgReceipt",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "err",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y;
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
              "WAWebCreateReceiptStanzaReceiveMetric",
            ).createReceiptStanzaReceiveMetric(),
            n = o("WAWebHandleMsgReceiptParser").msgReceiptParser.parse(e);
          if (n.error)
            throw (
              o("WALogger").ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "Parsing Error: ",
                    "",
                  ])),
                n.error.toString(),
              ),
              n.error
            );
          var a = n.success,
            i = a.ack,
            l = a.ackString,
            s = a.from,
            u = a.offline,
            c = a.stanzaId,
            d;
          if (a.type === "simple")
            if (i === o("WAWebAck").ACK.CONTENT_GONE)
              d = o("WAWebReceiptAck").buildReceiptAck(s, c, l, null);
            else {
              try {
                (o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      'handleSimpleReceipt: receipt "',
                      '" for msg: ',
                      "",
                    ])),
                  i,
                  r("gkx")("26258") ? "..." : c,
                ),
                  yield v(a));
              } catch (e) {
                o("WALogger")
                  .WARN(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        'handleSimpleReceipt: receipt "',
                        '" for msg: ',
                        " failed: ",
                        "",
                      ])),
                    i,
                    r("gkx")("26258") ? "..." : c,
                    r("gkx")("26258") ? "..." : e,
                  )
                  .tags("messaging");
              }
              d = o("WAWebReceiptAck").buildReceiptAck(s, c, l, a.participant);
            }
          else if (a.type === "aggregated_by_type") {
            try {
              (o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "handleAggregateReceipt: ",
                    ' receipt(s) "',
                    '" for msg: ',
                    "",
                  ])),
                a.receipts.length,
                i,
                r("gkx")("26258") ? "..." : a.externalId,
              ),
                yield S(a));
            } catch (e) {}
            d = o("WAWebReceiptAck").buildReceiptAck(s, c, l, null);
          } else if (a.type === "aggregated_by_message") {
            try {
              (o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "handleAggregateByMessageReceipt: ",
                    " receipt(s) for msg: ",
                    "",
                  ])),
                a.receipts.length,
                r("gkx")("26258") ? "..." : a.externalId,
              ),
                yield R(a));
            } catch (e) {
              o("WALogger")
                .ERROR(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "handleAggregateByMessageReceipt: failed: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("handle-aggregate-by-message-receipt-failed", {
                  sampling: 0.001,
                });
            }
            d = o("WAWebReceiptAck").buildReceiptAck(s, c, l, null);
          } else a.type;
          return (u == null && t(a), d);
        })),
        b.apply(this, arguments)
      );
    }
    function v(t) {
      var a = t.ack,
        i = t.ackString,
        l = t.from,
        c = t.recipient;
      if (a === o("WAWebAck").ACK.PEER)
        return o("WAWebHandleAckPeerSimpleReceipt").handleAckPeerSimpleReceipt(
          t,
        );
      if (l.isNewsletter())
        return o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled()
          ? o("WAWebHandleNewsletterReceipt").handleNewsletterSimpleReceipt(t)
          : (y || (y = n("Promise"))).resolve();
      if (l.isBot() && c != null && i === o("WAWebAck").ACK_STRING.READ)
        return o(
          "WAWebHandleBotInvokeMsgReceipt",
        ).handleBotOneToOneInvokeSimpleReadReceipt(t);
      if (l.isStatus())
        return o("WAWebHandleStatusReceipt").handleStatusSimpleReceipt(t);
      if (l.isUser())
        return o("WAWebHandleDirectChatReceipt").handleChatSimpleReceipt(t);
      if (l.isGroup())
        return o("WAWebHandleGroupChatReceipt").handleGroupSimpleReceipt(t);
      if (l.isBroadcast()) {
        if (!t.participant)
          return (
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "error: missing participant for broadcast receipt ",
                    "",
                  ])),
                l.toString(),
              )
              .sendLogs("handleSimpleReceipt: failed"),
            (y || (y = n("Promise"))).reject(
              r("err")(
                "handleSimpleReceipt: missing participant for broadcast receipt " +
                  l.toString(),
              ),
            )
          );
        var d = o("WAWebWidFactory").asUserWidOrThrow(t.participant);
        if (o("WAWebUserPrefsMeUser").isMeAccount(d))
          return (
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "handleSimpleReceipt: skip broadcast receipt from self",
                ])),
            ),
            (y || (y = n("Promise"))).resolve()
          );
        var m = babelHelpers.extends({}, t, { from: d, participant: null });
        return o("WAWebHandleDirectChatReceipt").handleChatSimpleReceipt(m);
      }
      return (
        o("WALogger")
          .ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "error: unsupported type for ",
                "",
              ])),
            l.toString(),
          )
          .sendLogs("handleSimpleReceipt: failed"),
        (y || (y = n("Promise"))).reject(
          r("err")("handleSimpleReceipt: unsupported type for " + l.toString()),
        )
      );
    }
    function S(e) {
      var t = e.ack,
        a = e.from;
      return t === o("WAWebAck").ACK.CONTENT_GONE
        ? (o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "error: reupload receipts cannot be aggregated",
                ])),
            )
            .sendLogs("handleAggregateReceipt: failed"),
          (y || (y = n("Promise"))).reject(
            r("err")("handleAggregateReceipt: failed"),
          ))
        : !a.isGroup() && !a.isBroadcast()
          ? (o("WALogger")
              .ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "handleAggregateReceipt: only group/broadcast supported",
                  ])),
              )
              .sendLogs("handleAggregateReceipt: failed"),
            (y || (y = n("Promise"))).reject(
              r("err")("handleAggregateReceipt: failed"),
            ))
          : (y || (y = n("Promise"))).all(
              o("WAWebHandleMsgReceiptUtils")
                .deaggregateGroupedByTypeReceipt(e)
                .map(v),
            );
    }
    function R(e) {
      return (y || (y = n("Promise"))).all(
        o("WAWebHandleMsgReceiptUtils")
          .deaggregateGroupedByMessageReceipt(e)
          .map(v),
      );
    }
    l.default = C;
  },
  98,
);
