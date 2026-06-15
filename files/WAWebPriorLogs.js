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
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          try {
            (yield g(t),
              yield o("WAWebSchemaSyncdLogs")
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
        })),
        C.apply(this, arguments)
      );
    }
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = r("compactMap")(
            [].concat(Array.from(m.members()), [""]),
            function (e) {
              return m.cast(e);
            },
          );
          return S(e);
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = e.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = yield o("WAWebSchemaSyncdLogs")
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
                          "\r\n"
                        );
                      });
                    o("WALogger").LOG(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose(
                          ["\r\n\r\nprior logs: category ", ": \r\n\r\n"],
                          [
                            "\\r\\n\\r\\nprior logs: category ",
                            ": \\r\\n\\r\\n",
                          ],
                        )),
                      e,
                    );
                    for (var a = 20, i = 0; i < r.length; i += a)
                      o("WALogger").LOG(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            "",
                          ])),
                        r.slice(i, i + a),
                      );
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            );
            yield (d || (d = n("Promise"))).all(t != null ? t : []);
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
        })),
        R.apply(this, arguments)
      );
    }
    ((l.WAWebLogCategory = m),
      (l.writePriorLog = y),
      (l.printAllPriorLogs = b),
      (l.printPriorLogs = S));
  },
  98,
);
