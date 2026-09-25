__d(
  "WAWebGetNewsletterCursor",
  ["WAWebNewsletterSystemMessages"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r,
        o,
        a = n.length > 0 ? n : e.toArray(),
        i =
          t === "before"
            ? (r = a[0]) == null
              ? void 0
              : r.serverId
            : (o = a[a.length - 1]) == null
              ? void 0
              : o.serverId;
      return i == null
        ? null
        : t === "before"
          ? { before: s(i) }
          : { after: s(i) };
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
