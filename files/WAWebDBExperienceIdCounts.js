__d(
  "WAWebDBExperienceIdCounts",
  [
    "WAWebParseMsgKeyString",
    "WAWebSchemaExperienceId",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebSchemaExperienceId")
            .getExperienceIdTable()
            .all();
          if (e.length === 0) return null;
          var t = new Map(),
            n = new Map(),
            r = [];
          for (var a of e) {
            r.push(a.msgKey);
            var i = c(a.msgKey);
            if (i != null)
              for (var l of new Set(a.experienceIds)) {
                var s, u;
                if (!(!Number.isInteger(l) || l <= 0)) {
                  var d = (s = t.get(l)) != null ? s : new Set();
                  (d.add(i),
                    t.set(l, d),
                    n.set(l, ((u = n.get(l)) != null ? u : 0) + 1));
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
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return o("WAWebSchemaExperienceId").getExperienceIdTable().bulkRemove(e);
    }
    function c(e) {
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
      (l.removeReportedExperienceIds = u));
  },
  98,
);
