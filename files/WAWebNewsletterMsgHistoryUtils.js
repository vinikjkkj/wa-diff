__d(
  "WAWebNewsletterMsgHistoryUtils",
  [
    "WAWebBackendApi",
    "WAWebNewsletterBackendAddOnsUtils",
    "WAWebNewsletterDBUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterGetMessagesJob",
    "WAWebNewsletterSystemMessages",
    "WAWebNewsletterUpdateMsgsRecordsJob",
    "WAWebNewsletterValidationUtils",
    "WAWebNullFunc",
    "lodash",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return e.serverId == null
        ? t.serverId == null
          ? 0
          : 1
        : t.serverId == null
          ? -1
          : e.serverId - t.serverId;
    }
    function s(e, t) {
      t === void 0 && (t = new Set());
      for (
        var n = [],
          r = function () {
            var r = e[i - 1].serverId,
              a = e[i].serverId;
            if (a == null || r == null) return 0;
            var l = a - r;
            if (l <= 1) return 0;
            var s = Array.from({ length: l - 1 }, function (e, t) {
              return t + r + 1;
            }).filter(function (e) {
              return (
                e >=
                  o("WAWebNewsletterSystemMessages")
                    .EARLIEST_AVAILABLE_MESSAGE_ID && !t.has(e)
              );
            });
            if (s.length <= 0) return 0;
            for (; s.length > 0; )
              n.push(
                s.splice(
                  0,
                  o("WAWebNewsletterGatingUtils").getMaxMsgCountFromServer(),
                ),
              );
          },
          a,
          i = 1;
        i < e.length;
        i++
      )
        a = r();
      return n;
    }
    async function u(t) {
      var n = t.jid,
        a = t.msgs,
        i = t.range,
        l = t.serverIdsToSkip,
        u = l === void 0 ? new Set() : l;
      if (a.length < 2 && i == null) return a;
      var c = a[0].serverId,
        d = a[a.length - 1].serverId;
      if (c == null || d == null) return [];
      if (
        c >= o("WAWebNewsletterDBUtils").TEMPORARY_SERVER_ID_LOWER_BOUND ||
        d >= o("WAWebNewsletterDBUtils").TEMPORARY_SERVER_ID_LOWER_BOUND ||
        (d - c + 1 === a.length && i == null)
      )
        return a;
      var m;
      if (i != null) {
        var p = i.end,
          _ = i.start,
          f = { serverId: Math.min(_, p) - 1 },
          g = { serverId: Math.max(_, p) + 1 };
        m = s([f].concat(a).concat(g), u);
      } else m = s(a, u);
      if (m.length === 0) return a;
      var h = m.map(async function (e) {
          var t = await o("WAWebNewsletterGetMessagesJob")
            .getNewsletterMessages(
              o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(
                String(n),
              ),
              e.length,
              { after: e[0] - 1 },
            )
            .catch(o("WAWebNullFunc").returnNull);
          if (t != null)
            return (
              o("WAWebBackendApi").frontendFireAndForget(
                "updateNewsletterMessages",
                t,
              ),
              await o("WAWebNewsletterBackendAddOnsUtils").updateAddOnDbRecords(
                t,
              ),
              t.msgs
            );
        }),
        y = r("lodash")
          .flatten(await Promise.all(h))
          .filter(Boolean);
      return (
        o("WAWebNewsletterUpdateMsgsRecordsJob")
          .addNewsletterMsgsRecordsJob(y)
          .fireAndForget(),
        a.concat(y).sort(e)
      );
    }
    ((l.identifyMsgGaps = s), (l.fillMsgHistoryGaps = u));
  },
  98,
);
