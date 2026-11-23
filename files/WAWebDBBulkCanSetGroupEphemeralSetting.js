__d(
  "WAWebDBBulkCanSetGroupEphemeralSetting",
  ["WAWebGroupUtils", "WAWebGroupsParticipantsApi"],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n) {
      var r = new Set();
      if (n.length === 0) return r;
      var o = await Promise.all([
          e.anyOf(["id"], n, { shouldDecrypt: !1 }),
          t.anyOf(["groupId"], n, { shouldDecrypt: !1 }),
        ]),
        a = o[0],
        i = o[1],
        l = new Map();
      for (var u of a) l.set(u.id, u);
      var c = new Map();
      for (var d of i) c.set(d.groupId, d);
      for (var m of n) {
        var p = l.get(m);
        p != null && s(p, c.get(m)) && r.add(m);
      }
      return r;
    }
    function s(e, t) {
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
    l.bulkCanSetGroupEphemeralSetting = e;
  },
  98,
);
