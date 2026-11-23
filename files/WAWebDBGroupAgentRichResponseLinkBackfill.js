__d(
  "WAWebDBGroupAgentRichResponseLinkBackfill",
  [
    "WAWebBotGroupGatingUtils",
    "WAWebCommonTaskScheduler",
    "WAWebDBMessageSerialization",
    "WAWebDBMessageUtils",
    "WAWebGroupAgentRichResponseLinkIndex",
    "WAWebMsgType",
    "WAWebSchemaMessage",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 500,
      s = 1e4,
      u = new Set(),
      c = new Map();
    function d(e) {
      var t = e.toString();
      if (
        !e.isGroup() ||
        !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled() ||
        u.has(t)
      )
        return Promise.resolve([]);
      var n = c.get(t);
      if (n != null) return n;
      var r = m(e, o("WAWebDBMessageUtils").endOfChat(e), 0, [])
        .then(function (e) {
          return (u.add(t), e);
        })
        .finally(function () {
          c.delete(t);
        });
      return (c.set(t, r), r);
    }
    async function m(t, n, a, i) {
      var l,
        u = await o("WAWebSchemaMessage")
          .getMessageTable()
          .between(
            ["internalId"],
            o("WAWebDBMessageUtils").beginningOfChat(t),
            n,
            {
              limit: Math.min(e, s - a),
              lowerInclusive: !1,
              reverse: !0,
              upperInclusive: !1,
            },
          ),
        c = [];
      for (var d of u) {
        var _ = p(d, t.toString());
        _ != null &&
          d.rowId != null &&
          (c.push({ id: d.id, hasLink: d.rowId }), i.push(_));
      }
      c.length > 0 &&
        (await o("WAWebSchemaMessage").getMessageTable().bulkMergeOnly(c));
      var f = a + u.length,
        g = (l = u[u.length - 1]) == null ? void 0 : l.internalId;
      return u.length < e || f >= s || g == null
        ? i
        : (await r("WAWebCommonTaskScheduler").yield(), m(t, g, f, i));
    }
    function p(e, t) {
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
    ((l.LINK_BACKFILL_BATCH_SIZE = e),
      (l.backfillGroupAgentRichResponseLinkIndex = d));
  },
  98,
);
