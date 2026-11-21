__d(
  "WAWebLogBizBroadcastAudienceDuplicateCheck",
  ["WALogger", "WAWebBusinessBroadcastUserJourneyLogger"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = new Set(),
      c = new Set();
    function d(t, n, r) {
      n.catch(function (n) {
        return (
          u.has(t) ||
            (u.add(t),
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:audience] Duplicate audience check failed at ",
                  ": ",
                  "",
                ])),
              t,
              m(n),
            )),
          { status: "unavailable" }
        );
      })
        .then(function (e) {
          return o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.coreAudienceDuplicateCheck(
            t,
            e,
            r,
          );
        })
        .catch(function (e) {
          c.has(t) ||
            (c.add(t),
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:audience] Could not log the duplicate audience check at ",
                  ": ",
                  "",
                ])),
              t,
              m(e),
            ));
        });
    }
    function m(e) {
      if (e instanceof DOMException) {
        var t = e.name;
        return t === "AbortError" ||
          t === "InvalidStateError" ||
          t === "NotFoundError" ||
          t === "QuotaExceededError" ||
          t === "TransactionInactiveError"
          ? t
          : "DOMException";
      }
      return e instanceof TypeError ? "TypeError" : "unknown";
    }
    l.logCoreAudienceDuplicateCheck = d;
  },
  98,
);
