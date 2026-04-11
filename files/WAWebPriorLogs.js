__d(
  "WAWebPriorLogs",
  [
    "$InternalEnum",
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebSchemaSyncdLogs",
    "asyncToGeneratorRuntime",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = n("$InternalEnum")({
        Empty: "",
        Regular: "regular",
        RegularLow: "regular_low",
        RegularHigh: "regular_high",
        CriticalBlock: "critical_block",
        CriticalUnblockLow: "critical_unblock_low",
      }),
      p = new Map(),
      _ = 210,
      f = 200;
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = (t = p.get(e)) != null ? t : 0;
          if ((p.set(e, n + 1), n % _ === 0)) {
            var r = yield o("WAWebSchemaSyncdLogs")
              .getSyncdLogsTable()
              .equals(["collection"], e);
            if (r.length < f) return;
            var a = r
              .sort(function (e, t) {
                return e.ts - t.ts;
              })
              .slice(0, r.length - f)
              .map(function (e) {
                return e.id;
              });
            yield o("WAWebSchemaSyncdLogs").getSyncdLogsTable().bulkRemove(a);
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            (yield g(e),
              yield o("WAWebSchemaSyncdLogs")
                .getSyncdLogsTable()
                .bulkCreate([
                  { collection: e, log: t, ts: o("WATimeUtils").unixTimeMs() },
                ]));
          } catch (e) {
            o("WALogger").ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "prior logs: error while writing to prior logs: ",
                  "",
                ])),
              e,
            );
          }
        })),
        C.apply(this, arguments)
      );
    }
    var b = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = r("compactMap")(
            [].concat(Array.from(m.members()), [""]),
            function (e) {
              return m.cast(e);
            },
          );
          return v(e);
        });
        return function () {
          return e.apply(this, arguments);
        };
      })(),
      v = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var r = t.map(
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    var n = yield o("WAWebSchemaSyncdLogs")
                        .getSyncdLogsTable()
                        .equals(["collection"], t),
                      r = n.filter(function (e) {
                        return o("WATimeUtils").happenedWithin(
                          o("WATimeUtils").castMilliSecondsToUnixTime(e.ts),
                          o("WATimeUtils").DAY_MILLISECONDS * 60,
                        );
                      }),
                      a = r.map(function (e) {
                        return (
                          o("WATimeUtils").toHttpHeaderDate(
                            o("WATimeUtils").castMilliSecondsToUnixTime(e.ts),
                          ) +
                          ": " +
                          e.log +
                          "\r\n"
                        );
                      });
                    o("WALogger").LOG(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose(
                          ["\r\n\r\nprior logs: category ", ": \r\n\r\n"],
                          [
                            "\\r\\n\\r\\nprior logs: category ",
                            ": \\r\\n\\r\\n",
                          ],
                        )),
                      t,
                    );
                    for (var i = 20, l = 0; l < a.length; l += i)
                      o("WALogger").LOG(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            "",
                          ])),
                        a.slice(l, l + i),
                      );
                  },
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
            );
            yield (d || (d = n("Promise"))).all(r != null ? r : []);
          } catch (e) {
            o("WALogger").ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "prior logs: error while printing fatal logs: ",
                  "",
                ])),
              e,
            );
          }
        });
        return function (n) {
          return t.apply(this, arguments);
        };
      })();
    ((l.WAWebLogCategory = m),
      (l.writePriorLog = y),
      (l.printAllPriorLogs = b),
      (l.printPriorLogs = v));
  },
  98,
);
