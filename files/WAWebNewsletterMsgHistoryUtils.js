__d(
  "WAWebNewsletterMsgHistoryUtils",
  [
    "Promise",
    "WAWebBackendApi",
    "WAWebNewsletterBackendAddOnsUtils",
    "WAWebNewsletterDBUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterGetMessagesJob",
    "WAWebNewsletterSystemMessages",
    "WAWebNewsletterUpdateMsgsRecordsJob",
    "WAWebNewsletterValidationUtils",
    "WAWebNullFunc",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      return e.serverId == null
        ? t.serverId == null
          ? 0
          : 1
        : t.serverId == null
          ? -1
          : e.serverId - t.serverId;
    }
    function u(e, t) {
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
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t.jid,
            a = t.msgs,
            i = t.range,
            l = t.serverIdsToSkip,
            c = l === void 0 ? new Set() : l;
          if (a.length < 2 && i == null) return a;
          var d = a[0].serverId,
            m = a[a.length - 1].serverId;
          if (d == null || m == null) return [];
          if (
            d >= o("WAWebNewsletterDBUtils").TEMPORARY_SERVER_ID_LOWER_BOUND ||
            m >= o("WAWebNewsletterDBUtils").TEMPORARY_SERVER_ID_LOWER_BOUND ||
            (m - d + 1 === a.length && i == null)
          )
            return a;
          var p;
          if (i != null) {
            var _ = i.end,
              f = i.start,
              g = { serverId: Math.min(f, _) - 1 },
              h = { serverId: Math.max(f, _) + 1 };
            p = u([g].concat(a).concat(h), c);
          } else p = u(a, c);
          if (p.length === 0) return a;
          var y = p.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = yield o("WAWebNewsletterGetMessagesJob")
                      .getNewsletterMessages(
                        o(
                          "WAWebNewsletterValidationUtils",
                        ).toNewsletterJidOrThrow(String(r)),
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
                        yield o(
                          "WAWebNewsletterBackendAddOnsUtils",
                        ).updateAddOnDbRecords(t),
                        t.msgs
                      );
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
            C = (yield (e || (e = n("Promise"))).all(y)).flat().filter(Boolean);
          return (
            o("WAWebNewsletterUpdateMsgsRecordsJob")
              .addNewsletterMsgsRecordsJob(C)
              .fireAndForget(),
            a.concat(C).sort(s)
          );
        })),
        d.apply(this, arguments)
      );
    }
    ((l.identifyMsgGaps = u), (l.fillMsgHistoryGaps = c));
  },
  98,
);
