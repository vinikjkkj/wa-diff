__d(
  "WAWebSuspendInformStatusMsgDataModelUtils",
  [
    "WAWebDBMessageUtils",
    "WAWebNewsletterDBUtils",
    "WAWebNewsletterGetStatusesJob",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n) {
      if (e.length === 0) return new Map();
      var r = await o("WAWebNewsletterDBUtils").bulkGetMessagesByServerIds(
          e,
          t,
          o("WAWebDBMessageUtils").InternalIdPrefix.NewsletterStatus,
        ),
        a = [],
        i = new Map();
      if (
        (e.forEach(function (e) {
          var t = r.get(e);
          t != null ? i.set(e, t) : a.push(e);
        }),
        a.length > 0)
      ) {
        var l,
          s = Math.min.apply(Math, a),
          u = await o("WAWebNewsletterGetStatusesJob").getNewsletterStatuses(
            t,
            n,
            { afterServerId: s - 1 },
          ),
          c = i.size;
        u == null ||
          (l = u.msgs) == null ||
          l.forEach(function (e) {
            (e == null ? void 0 : e.serverId) != null && i.set(e.serverId, e);
          });
        var d = i.size - c;
      }
      return i;
    }
    l.populateStatusMsgModels = e;
  },
  98,
);
