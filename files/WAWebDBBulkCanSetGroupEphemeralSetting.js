__d(
  "WAWebDBBulkCanSetGroupEphemeralSetting",
  [
    "Promise",
    "WAWebGroupUtils",
    "WAWebGroupsParticipantsApi",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t, n) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, o) {
          var a = new Set();
          if (o.length === 0) return a;
          var i = yield (e || (e = n("Promise"))).all([
              t.anyOf(["id"], o, { shouldDecrypt: !1 }),
              r.anyOf(["groupId"], o, { shouldDecrypt: !1 }),
            ]),
            l = i[0],
            s = i[1],
            u = new Map();
          for (var d of l) u.set(d.id, d);
          var m = new Map();
          for (var p of s) m.set(p.groupId, p);
          for (var _ of o) {
            var f = u.get(_);
            f != null && c(f, m.get(_)) && a.add(_);
          }
          return a;
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t) {
      var n,
        r = !e.support;
      return e.suspended ||
        e.terminated ||
        !o("WAWebGroupsParticipantsApi").checkMyMembershipForParticipantRecord(
          t,
        )
        ? !1
        : o("WAWebGroupUtils").amIGroupAdmin(
              (n = t == null ? void 0 : t.admins) != null ? n : [],
            )
          ? r
          : e.restrict || e.defaultSubgroup === !0
            ? !1
            : r;
    }
    l.bulkCanSetGroupEphemeralSetting = s;
  },
  98,
);
