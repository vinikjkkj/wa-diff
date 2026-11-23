__d(
  "MAWSharedCOPHandleBatch",
  [
    "MAWIsQuotaExceededError",
    "MAWSharedCOPLogger",
    "WALogger",
    "WAProtocolQueue",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p;
    async function _(t, n, a) {
      var i = await a(t)
          .then(function (e) {
            return [e, null, !1];
          })
          .catch(function (t) {
            var n = r("getErrorSafe")(t);
            return o("MAWIsQuotaExceededError").isQuotaExceededError(n)
              ? (r("MAWSharedCOPLogger")
                  .catching(n)
                  .MUSTFIX(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Quota exceeded while processing stanzas batch.",
                      ])),
                  ),
                [[], null, !0])
              : (r("MAWSharedCOPLogger")
                  .catching(n)
                  .MUSTFIX(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Runtime error while processing stanzas batch",
                      ])),
                  ),
                [[], n, !1]);
          }),
        l = i[0],
        m = i[1],
        p = i[2];
      if (p) return { entriesLeft: [], exhausted: !0, handled: 0 };
      if (
        (await o("WAProtocolQueue")
          .protocolQueue()
          .ack(l)
          .catch(function (e) {
            return r("MAWSharedCOPLogger")
              .catching(r("getErrorSafe")(e))
              .MUSTFIX(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[ackProtocols] Cannot ack from MAWConsumer",
                  ])),
              );
          }),
        l.length >= t.length)
      )
        return { entriesLeft: [], exhausted: !1, handled: l.length };
      if (
        (r("MAWSharedCOPLogger").WARN(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "Failed processing ",
              " items",
            ])),
          t.length - l.length,
        ),
        n === 1)
      ) {
        if (
          (t.length > 1 &&
            r("MAWSharedCOPLogger").MUSTFIX(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "Received more than 1 entry, despite having limit === 1",
                ])),
            ),
          t.length === 0)
        )
          return { entriesLeft: [], exhausted: !1, handled: 0 };
        var _ = t[0];
        return (
          await o("WAProtocolQueue").protocolQueue().delete([_.stanzaQueueId]),
          { entriesLeft: [], exhausted: !1, handled: 1 }
        );
      }
      var f = new Map(
        t.map(function (e) {
          return [e.stanzaQueueId, e];
        }),
      );
      return (
        l.forEach(function (e) {
          return f.delete(e);
        }),
        {
          entriesLeft: Array.from(f.values()),
          error: !0,
          exhausted: !1,
          handled: l.length,
        }
      );
    }
    async function f(e, t, n) {
      var a = await e(t);
      if ((t.order === "desc" && (a = a.toReversed()), a.length === 0))
        return { exhausted: !0, handled: 0 };
      r("MAWSharedCOPLogger").DEBUG(
        m ||
          (m = babelHelpers.taggedTemplateLiteralLoose([
            "",
            " stanzas. limit:",
            " order:",
            "",
          ])),
        a.length,
        t.limit,
        t.order,
      );
      var i = await _(a, t.limit, n);
      if (i.error == null)
        return { exhausted: i.exhausted, handled: i.handled };
      o("WALogger").LOG(
        p || (p = babelHelpers.taggedTemplateLiteralLoose(["Linear COP v2"])),
      );
      var l = 0;
      for (var s of i.entriesLeft) {
        var u = await _([s], 1, n);
        if (((l += u.handled), u.exhausted))
          return { exhausted: !0, handled: l + i.handled };
      }
      return { exhausted: !1, handled: l + i.handled };
    }
    l.copHandleBatch = f;
  },
  98,
);
