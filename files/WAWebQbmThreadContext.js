__d(
  "WAWebQbmThreadContext",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebDBMessageUtils",
    "WAWebSchemaMessage",
    "WAWebWamEnumThreadCreationTime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 86400,
      u = new Map();
    async function c(t, n) {
      var a;
      try {
        a = await p(t);
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
      return d(i == null ? null : o("WATimeUtils").unixTime() - i);
    }
    function d(e) {
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
    function m() {
      u.clear();
    }
    async function p(e) {
      var t = e.id.toString(),
        n = u.get(t);
      if (n != null) return n;
      var r = await o("WAWebSchemaMessage")
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
    }
    ((l.getThreadCreationTime = c),
      (l.getThreadCreationTimeFromAge = d),
      (l.clearThreadCreationTimeCache = m));
  },
  98,
);
