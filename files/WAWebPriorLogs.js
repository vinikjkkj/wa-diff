__d(
  "WAWebPriorLogs",
  [
    "$InternalEnum",
    "WALogger",
    "WATimeUtils",
    "WAWebSchemaSyncdLogs",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = n("$InternalEnum")({
        Empty: "",
        Regular: "regular",
        RegularLow: "regular_low",
        RegularHigh: "regular_high",
        CriticalBlock: "critical_block",
        CriticalUnblockLow: "critical_unblock_low",
      }),
      m = new Map(),
      p = 210,
      _ = 200;
    async function f(e) {
      var t,
        n = (t = m.get(e)) != null ? t : 0;
      if ((m.set(e, n + 1), n % p === 0)) {
        var r = await o("WAWebSchemaSyncdLogs")
          .getSyncdLogsTable()
          .equals(["collection"], e);
        if (r.length < _) return;
        var a = r
          .sort(function (e, t) {
            return e.ts - t.ts;
          })
          .slice(0, r.length - _)
          .map(function (e) {
            return e.id;
          });
        await o("WAWebSchemaSyncdLogs").getSyncdLogsTable().bulkRemove(a);
      }
    }
    async function g(t, n) {
      try {
        (await f(t),
          await o("WAWebSchemaSyncdLogs")
            .getSyncdLogsTable()
            .bulkCreate([
              { collection: t, log: n, ts: o("WATimeUtils").unixTimeMs() },
            ]));
      } catch (t) {
        o("WALogger").ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "prior logs: error while writing to prior logs: ",
              "",
            ])),
          t,
        );
      }
    }
    var h = async function () {
        var e = r("compactMap")(
          [].concat(Array.from(d.members()), [""]),
          function (e) {
            return d.cast(e);
          },
        );
        return y(e);
      },
      y = async function (t) {
        try {
          var e = t.map(async function (e) {
            var t = await o("WAWebSchemaSyncdLogs")
                .getSyncdLogsTable()
                .equals(["collection"], e),
              n = t.filter(function (e) {
                return o("WATimeUtils").happenedWithin(
                  o("WATimeUtils").castMilliSecondsToUnixTime(e.ts),
                  o("WATimeUtils").DAY_MILLISECONDS * 60,
                );
              }),
              r = n.map(function (e) {
                return (
                  o("WATimeUtils").toHttpHeaderDate(
                    o("WATimeUtils").castMilliSecondsToUnixTime(e.ts),
                  ) +
                  ": " +
                  e.log +
                  `\r
`
                );
              });
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose(
                  [
                    `\r
\r
prior logs: category `,
                    `: \r
\r
`,
                  ],
                  ["\\r\\n\\r\\nprior logs: category ", ": \\r\\n\\r\\n"],
                )),
              e,
            );
            for (var a = 20, i = 0; i < r.length; i += a)
              o("WALogger").LOG(
                u || (u = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                r.slice(i, i + a),
              );
          });
          await Promise.all(e != null ? e : []);
        } catch (e) {
          o("WALogger").ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "prior logs: error while printing fatal logs: ",
                "",
              ])),
            e,
          );
        }
      };
    ((l.WAWebLogCategory = d),
      (l.writePriorLog = g),
      (l.printAllPriorLogs = h),
      (l.printPriorLogs = y));
  },
  98,
);
