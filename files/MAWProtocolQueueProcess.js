__d(
  "MAWProtocolQueueProcess",
  [
    "MAWCOPReceiptsHandler",
    "MAWCOPRetryHandler",
    "MAWSharedCOPLogger",
    "MAWSplitProtocolEntityByType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          var n;
          t.set(e.type, ((n = t.get(e.type)) != null ? n : 0) + 1);
        }),
        Array.from(t, function (e) {
          var t = e[0],
            n = e[1];
          return t + ":" + n;
        }).join(" ")
      );
    }
    async function c(t) {
      var n = r("MAWSplitProtocolEntityByType")(t);
      (r("MAWSharedCOPLogger").DEBUG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "COP handler for ",
            " receipts, ",
            " retries, ",
            " unhandled",
          ])),
        n.receipts.length,
        n.retries.length,
        n.unhandled.length,
      ),
        n.unhandled.length > 0 &&
          r("MAWSharedCOPLogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Acking ",
                " unhandled stanzas: ",
                "",
              ])),
            n.unhandled.length,
            u(n.unhandled),
          ));
      var a = (
        await Promise.all([
          o("MAWCOPReceiptsHandler").copIncomingReceiptsHandler(n.receipts),
          o("MAWCOPRetryHandler").copIncomingRetryHandler(n.retries),
        ])
      ).flat();
      return a.concat(
        n.unhandled.map(function (e) {
          return e.stanzaQueueId;
        }),
      );
    }
    l.processProtocolQueueEntries = c;
  },
  98,
);
