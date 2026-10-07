__d(
  "WAWebDBGroupAgentRichResponseLinkBackfill",
  [
    "Promise",
    "WAWebBotGroupGatingUtils",
    "WAWebCommonTaskScheduler",
    "WAWebDBMessageSerialization",
    "WAWebDBMessageUtils",
    "WAWebGroupAgentRichResponseLinkIndex",
    "WAWebMsgType",
    "WAWebSchemaMessage",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 500,
      u = 1e4,
      c = new Set(),
      d = new Map();
    function m(t) {
      var r = t.toString();
      if (
        !t.isGroup() ||
        !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled() ||
        c.has(r)
      )
        return (e || (e = n("Promise"))).resolve([]);
      var a = d.get(r);
      if (a != null) return a;
      var i = _(t, o("WAWebDBMessageUtils").endOfChat(t), 0, [])
        .then(function (e) {
          return (c.add(r), e);
        })
        .finally(function () {
          d.delete(r);
        });
      return (d.set(r, i), i);
    }
    function p() {
      (c.clear(), d.clear());
    }
    function _(e, t, n, r) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            var i,
              l = yield o("WAWebSchemaMessage")
                .getMessageTable()
                .between(
                  ["internalId"],
                  o("WAWebDBMessageUtils").beginningOfChat(e),
                  t,
                  {
                    limit: Math.min(s, u - n),
                    lowerInclusive: !1,
                    reverse: !0,
                    upperInclusive: !1,
                  },
                ),
              c = [];
            for (var d of l) {
              var m = g(d, e.toString());
              m != null &&
                d.rowId != null &&
                (c.push({ id: d.id, hasLink: d.rowId }), a.push(m));
            }
            c.length > 0 &&
              (yield o("WAWebSchemaMessage")
                .getMessageTable()
                .bulkMergeOnly(c));
            var p = n + l.length,
              f = (i = l[l.length - 1]) == null ? void 0 : i.internalId;
            return l.length < s || p >= u || f == null
              ? a
              : (yield r("WAWebCommonTaskScheduler").yield(), _(e, f, p, a));
          },
        )),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      if (
        e.hasLink != null ||
        e.type !== o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE
      )
        return null;
      var n = o("WAWebDBMessageSerialization").messageFromDbRow(e);
      return o(
        "WAWebGroupAgentRichResponseLinkIndex",
      ).shouldIndexGroupAgentRichResponseLink(n, t)
        ? n
        : null;
    }
    ((l.LINK_BACKFILL_BATCH_SIZE = s),
      (l.LINK_BACKFILL_MAX_SCANNED_ROWS_PER_CHAT = u),
      (l.backfillGroupAgentRichResponseLinkIndex = m),
      (l.resetGroupAgentRichResponseLinkBackfillForTests = p));
  },
  98,
);
