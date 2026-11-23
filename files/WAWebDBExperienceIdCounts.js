__d(
  "WAWebDBExperienceIdCounts",
  ["WAWebParseMsgKeyString", "WAWebSchemaExperienceId"],
  function (t, n, r, o, a, i, l) {
    async function e() {
      var e = await o("WAWebSchemaExperienceId").getExperienceIdTable().all();
      if (e.length === 0) return null;
      var t = new Map(),
        n = new Map(),
        r = [];
      for (var a of e) {
        r.push(a.msgKey);
        var i = u(a.msgKey);
        if (i != null)
          for (var l of new Set(a.experienceIds)) {
            var s, c;
            if (!(!Number.isInteger(l) || l <= 0)) {
              var d = (s = t.get(l)) != null ? s : new Set();
              (d.add(i),
                t.set(l, d),
                n.set(l, ((c = n.get(l)) != null ? c : 0) + 1));
            }
          }
      }
      return {
        aggregates: Array.from(t, function (e) {
          var t,
            r = e[0],
            o = e[1];
          return {
            experienceId: r,
            uniqueMessageCount: (t = n.get(r)) != null ? t : 0,
            uniqueSenderCount: o.size,
          };
        }),
        msgKeys: r,
      };
    }
    function s(e) {
      return o("WAWebSchemaExperienceId").getExperienceIdTable().bulkRemove(e);
    }
    function u(e) {
      try {
        var t = r("WAWebParseMsgKeyString")(e),
          n = t.fromMe,
          o = t.participant,
          a = t.remote;
        return n === !0 ? null : o != null ? o : a;
      } catch (e) {
        return null;
      }
    }
    ((l.getReceivedExperienceIdCounts = e),
      (l.removeReportedExperienceIds = s));
  },
  98,
);
