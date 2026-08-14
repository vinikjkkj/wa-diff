__d(
  "LSLogHistory",
  ["FBLogger", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {},
      s = {
        client_init: 100,
        client_sync: 50,
        client_task: 20,
        db_dump: 200,
        db_init: 100,
        general: 50,
        ls: 50,
        maw_setup: 10,
        user_experience: 200,
      },
      u = 10;
    function c() {
      try {
        return Object.values(e)
          .reduce(function (e, t) {
            return e.concat(t);
          }, [])
          .sort(function (e, t) {
            return e.date - t.date;
          })
          .map(function (e) {
            return [
              e.date.toString(),
              e.level,
              e.category,
              e.event,
              e.args,
            ].join(" | ");
          });
      } catch (e) {
        return (
          r("FBLogger")("messenger_web")
            .catching(r("getErrorSafe")(e))
            .mustfix("getEntries failed"),
          [
            [
              Date.now().toString(),
              "error",
              "general",
              "lightspeed_log_event",
              "cannot create entries",
            ].join(" | "),
          ]
        );
      }
    }
    function d() {
      e = {};
    }
    function m(t, n, r, o) {
      var a;
      (r === void 0 && (r = "general"),
        o === void 0 && (o = "lightspeed_log_event"));
      var i = Date.now();
      (e[r] == null && (e[r] = []),
        e[r].length >= ((a = s[r]) != null ? a : u) && e[r].shift(),
        e[r].push({ args: t, category: r, date: i, event: o, level: n }));
    }
    ((l.MAX_LIMIT = s), (l.getEntries = c), (l.clearEntries = d), (l.log = m));
  },
  98,
);
