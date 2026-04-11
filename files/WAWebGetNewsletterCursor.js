__d(
  "WAWebGetNewsletterCursor",
  ["WAWebNewsletterSystemMessages"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r,
        o,
        a,
        i = n.length > 0 ? n : e.toArray(),
        l =
          t === "before"
            ? (r = i[0]) == null
              ? void 0
              : r.serverId
            : (o = i[i.length - 1]) == null
              ? void 0
              : o.serverId;
      return l == null ? null : ((a = {}), (a[t] = s(l)), a);
    }
    function s(e) {
      return Math.min(
        Math.max(
          e,
          o("WAWebNewsletterSystemMessages").EARLIEST_AVAILABLE_MESSAGE_ID - 1,
        ),
        o("WAWebNewsletterSystemMessages").LATEST_AVAILABLE_MESSAGE_ID,
      );
    }
    l.getNewsletterCursor = e;
  },
  98,
);
