__d(
  "WAWebPersistedQueueIds",
  ["WALogger", "WATimeUtils", "WAWebODS", "WAWormQueueDef", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 15,
      u = 6,
      c = Math.pow(10, u),
      d = 0.01,
      m = 0,
      p = 0,
      _ = new Map();
    function f() {
      var e = o("WATimeUtils").unixTimeMs();
      e > m ? ((m = e), (p = 0)) : p >= c && (m++, (p = 0));
      var t = String(m).padStart(s, "0"),
        n = String(p++).padStart(u, "0");
      return o("WAWormQueueDef").toWAWormQueueId(t + "-" + n);
    }
    function g(e, t) {
      t != null && _.set(e, t);
    }
    async function h(t, n, a) {
      var i = _.get(t);
      if (i != null) {
        var l = n.filter(function (e) {
          return e <= i;
        });
        if (l.length !== 0) {
          r("WAWebODS").incr(
            "web.persisted_queues.queue_id.behind_stored",
            l.length,
          );
          var s = await a(l).catch(function (t) {
            return (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[persisted-queues] queue id collision lookup failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("persisted-queue-collision-lookup-failed", {
                  sampling: d,
                }),
              0
            );
          });
          s > 0 &&
            r("WAWebODS").incr("web.persisted_queues.queue_id.collision", s);
        }
      }
    }
    ((l.nextPersistedQueueId = f),
      (l.recordNewestStoredQueueId = g),
      (l.countQueueIdCollisions = h));
  },
  98,
);
