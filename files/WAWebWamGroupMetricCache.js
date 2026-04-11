__d(
  "WAWebWamGroupMetricCache",
  ["Promise", "WALogger", "WAWebSchemaParticipant", "WAWebWamGroupMetricUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = new Map();
    function c(e) {
      if (!e.isGroup()) return (s || (s = n("Promise"))).resolve(null);
      var t = e.toString();
      return (
        u.has(t) || u.set(t, d(t)),
        u.get(t) || (s || (s = n("Promise"))).resolve(null)
      );
    }
    function d(t) {
      return o("WAWebSchemaParticipant")
        .getParticipantTable()
        .get(t)
        .then(function (e) {
          return (
            e && o("WAWebWamGroupMetricUtils").getGroupMetricsFromDbRecord(e)
          );
        })
        .catch(function (n) {
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "_getGroupMetricsFromDb: failed to get for ",
                ": ",
                "",
              ])),
            t,
            n,
          );
        });
    }
    function m(e) {
      e.participants == null ||
        e.senderKey == null ||
        u.set(
          e.groupId,
          (s || (s = n("Promise"))).resolve(
            o("WAWebWamGroupMetricUtils").getGroupMetricsFromDbRecord(e),
          ),
        );
    }
    ((l.getGroupMetrics = c), (l.cacheGroupMetrics = m));
  },
  98,
);
