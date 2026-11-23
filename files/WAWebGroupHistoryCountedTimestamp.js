__d(
  "WAWebGroupHistoryCountedTimestamp",
  [
    "WAWebDBMessageUtils",
    "WAWebGroupHistoryStoredHint",
    "WAWebRetrieveMessagesForBundle",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 2048,
      s = 50,
      u = -1 / 0;
    function c(e) {
      return o(
        "WAWebRetrieveMessagesForBundle",
      ).isValidMessageForGroupHistoryBundle(e, u, null);
    }
    function d(e) {
      var t = e.t;
      return t != null && Number.isSafeInteger(t) && t > 0 ? t : null;
    }
    async function m(t, n, r, a) {
      if ((a === void 0 && (a = e), a <= 0)) return null;
      var i = Math.min(s, a),
        l = await t.between(
          ["internalId"],
          o("WAWebDBMessageUtils").beginningOfChat(n),
          r != null ? r : o("WAWebDBMessageUtils").endOfChat(n),
          {
            lowerInclusive: !0,
            upperInclusive: r == null,
            reverse: !0,
            limit: i,
          },
        ),
        u = l.find(c);
      return u != null
        ? d(u)
        : l.length < i
          ? o("WAWebGroupHistoryStoredHint").GROUP_HISTORY_NO_COUNTED_MESSAGES
          : m(t, n, l[l.length - 1].internalId, a - l.length);
    }
    ((l.GROUP_HISTORY_COUNTED_SCAN_LIMIT = e),
      (l.isCountedGroupHistoryMessage = c),
      (l.countedGroupHistoryTimestamp = d),
      (l.getNewestCountedGroupHistoryTimestamp = m));
  },
  98,
);
