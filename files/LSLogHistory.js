__d(
  "LSLogHistory",
  ["FBLogger", "getErrorSafe", "performanceAbsoluteNow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {},
      u = {
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
      c = 10;
    function d() {
      try {
        return Object.values(s)
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
      } catch (t) {
        return (
          r("FBLogger")("messenger_web")
            .catching(r("getErrorSafe")(t))
            .mustfix("getEntries failed"),
          [
            [
              (e || (e = r("performanceAbsoluteNow")))().toString(),
              "error",
              "general",
              "lightspeed_log_event",
              "cannot create entries",
            ].join(" | "),
          ]
        );
      }
    }
    function m() {
      s = {};
    }
    function p(t, n, o, a) {
      var i;
      (o === void 0 && (o = "general"),
        a === void 0 && (a = "lightspeed_log_event"));
      var l = (e || (e = r("performanceAbsoluteNow")))();
      (s[o] == null && (s[o] = []),
        s[o].length >= ((i = u[o]) != null ? i : c) && s[o].shift(),
        s[o].push({ args: t, category: o, date: l, event: a, level: n }));
    }
    ((l.MAX_LIMIT = u), (l.getEntries = d), (l.clearEntries = m), (l.log = p));
  },
  98,
);
