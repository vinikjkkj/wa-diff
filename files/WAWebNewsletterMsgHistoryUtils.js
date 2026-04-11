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
    "lodash",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
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
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.jid,
            i = t.msgs,
            l = t.range,
            u = t.serverIdsToSkip,
            c = u === void 0 ? new Set() : u;
          if (i.length < 2 && l == null) return i;
          var d = i[0].serverId,
            m = i[i.length - 1].serverId;
          if (d == null || m == null) return [];
          if (
            d >= o("WAWebNewsletterDBUtils").TEMPORARY_SERVER_ID_LOWER_BOUND ||
            m >= o("WAWebNewsletterDBUtils").TEMPORARY_SERVER_ID_LOWER_BOUND ||
            (m - d + 1 === i.length && l == null)
          )
            return i;
          var p;
          if (l != null) {
            var _ = l.end,
              f = l.start,
              g = { serverId: Math.min(f, _) - 1 },
              h = { serverId: Math.max(f, _) + 1 };
            p = s([g].concat(i).concat(h), c);
          } else p = s(i, c);
          if (p.length === 0) return i;
          var y = p.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = yield o("WAWebNewsletterGetMessagesJob")
                      .getNewsletterMessages(
                        o(
                          "WAWebNewsletterValidationUtils",
                        ).toNewsletterJidOrThrow(String(a)),
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
            C = r("lodash")
              .flatten(yield (e || (e = n("Promise"))).all(y))
              .filter(Boolean);
          return (
            o("WAWebNewsletterUpdateMsgsRecordsJob")
              .addNewsletterMsgsRecordsJob(C)
              .fireAndForget(),
            r("lodash").sortBy(i.concat(C), "serverId")
          );
        })),
        c.apply(this, arguments)
      );
    }
    ((l.identifyMsgGaps = s), (l.fillMsgHistoryGaps = u));
  },
  98,
);
