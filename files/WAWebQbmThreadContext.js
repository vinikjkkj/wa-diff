__d(
  "WAWebQbmThreadContext",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebDBMessageUtils",
    "WAWebSchemaMessage",
    "WAWebWamEnumThreadCreationTime",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 86400,
      u = new Map();
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a;
          try {
            a = yield _(t);
          } catch (t) {
            return (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[qbm] oldest message lookup failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("qbm-oldest-msg-lookup-failed"),
              null
            );
          }
          var i = a != null ? a : n;
          return m(i == null ? null : o("WATimeUtils").unixTime() - i);
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return e == null
        ? null
        : e < s
          ? o("WAWebWamEnumThreadCreationTime").THREAD_CREATION_TIME
              .LESS_THAN_1_DAY_AGO
          : e < 7 * s
            ? o("WAWebWamEnumThreadCreationTime").THREAD_CREATION_TIME
                .LESS_THAN_7_DAYS_AGO
            : e < 30 * s
              ? o("WAWebWamEnumThreadCreationTime").THREAD_CREATION_TIME
                  .LESS_THAN_30_DAYS_AGO
              : o("WAWebWamEnumThreadCreationTime").THREAD_CREATION_TIME
                  .MORE_THAN_30_DAYS_AGO;
    }
    function p() {
      u.clear();
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.id.toString(),
            n = u.get(t);
          if (n != null) return n;
          var r = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .between(
                ["internalId"],
                o("WAWebDBMessageUtils").beginningOfChat(e.id),
                o("WAWebDBMessageUtils").endOfChat(e.id),
                { limit: 1, reverse: !1, shouldDecrypt: !1 },
              ),
            a = r[0],
            i = a == null ? void 0 : a.t;
          return i == null
            ? null
            : (o("WATimeUtils").unixTime() - i >= 30 * s && u.set(t, i), i);
        })),
        f.apply(this, arguments)
      );
    }
    ((l.getThreadCreationTime = c),
      (l.getThreadCreationTimeFromAge = m),
      (l.clearThreadCreationTimeCache = p));
  },
  98,
);
