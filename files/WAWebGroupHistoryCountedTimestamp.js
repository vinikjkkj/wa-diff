__d(
  "WAWebGroupHistoryCountedTimestamp",
  [
    "WAWebDBMessageUtils",
    "WAWebGroupHistoryStoredHint",
    "WAWebRetrieveMessagesForBundle",
    "asyncToGeneratorRuntime",
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
    function m(e, t, n, r) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, r, a) {
            if ((a === void 0 && (a = e), a <= 0)) return null;
            var i = Math.min(s, a),
              l = yield t.between(
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
                ? o("WAWebGroupHistoryStoredHint")
                    .GROUP_HISTORY_NO_COUNTED_MESSAGES
                : m(t, n, l[l.length - 1].internalId, a - l.length);
          },
        )),
        p.apply(this, arguments)
      );
    }
    ((l.GROUP_HISTORY_COUNTED_SCAN_LIMIT = e),
      (l.isCountedGroupHistoryMessage = c),
      (l.countedGroupHistoryTimestamp = d),
      (l.getNewestCountedGroupHistoryTimestamp = m));
  },
  98,
);
