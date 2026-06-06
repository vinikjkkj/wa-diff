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
        r = t.msgs,
        a = t.range,
        i = t.serverIdsToSkip,
        l = i === void 0 ? new Set() : i;
      if (r.length < 2 && a == null) return r;
      var u = r[0].serverId,
        c = r[r.length - 1].serverId;
      if (u == null || c == null) return [];
      if (
        u >= o("WAWebNewsletterDBUtils").TEMPORARY_SERVER_ID_LOWER_BOUND ||
        c >= o("WAWebNewsletterDBUtils").TEMPORARY_SERVER_ID_LOWER_BOUND ||
        (c - u + 1 === r.length && a == null)
      )
        return r;
      var d;
      if (a != null) {
        var m = a.end,
          p = a.start,
          _ = { serverId: Math.min(p, m) - 1 },
          f = { serverId: Math.max(p, m) + 1 };
        d = s([_].concat(r).concat(f), l);
      } else d = s(r, l);
      if (d.length === 0) return r;
      var g = d.map(async function (e) {
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
        h = (await Promise.all(g)).flat().filter(Boolean);
      return (
        o("WAWebNewsletterUpdateMsgsRecordsJob")
          .addNewsletterMsgsRecordsJob(h)
          .fireAndForget(),
        r.concat(h).sort(e)
      );
    }
    ((l.identifyMsgGaps = s), (l.fillMsgHistoryGaps = u));
  },
  98,
);
