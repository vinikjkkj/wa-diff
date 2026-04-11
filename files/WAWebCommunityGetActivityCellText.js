__d(
  "WAWebCommunityGetActivityCellText",
  ["fbt", "WAWebCommunityActivityModel"],
  function (t, n, r, o, a, i, l, s) {
    var e = "...",
      u = 37,
      c = function (n) {
        return n.length > u ? n.substr(0, u) + e : n;
      };
    function d(e) {
      if (e.length === 0) return null;
      var t = e.filter(function (e) {
        return (
          e.type ===
          o("WAWebCommunityActivityModel").ActivityTypeType.SUB_GROUP_LINK
        );
      });
      if (t.length === e.length) return m(t).toString();
    }
    function m(e) {
      if (e.length === 1) {
        var t = e[0],
          n = c(t.subgroupName);
        return s._(/*BTDS*/ 'New group "{subgroup_name_first}" added', [
          s._param("subgroup_name_first", n),
        ]);
      } else if (e.length === 2) {
        var r = e[0],
          o = e[1],
          a = c(r.subgroupName),
          i = c(o.subgroupName);
        return s._(
          /*BTDS*/ 'New groups "{subgroup_name_first}" and "{subgroup_name_second}" added',
          [
            s._param("subgroup_name_first", a),
            s._param("subgroup_name_second", i),
          ],
        );
      }
      var l = e[0],
        u = e[1],
        d = c(l.subgroupName),
        m = c(u.subgroupName),
        p = e.length - 2;
      return s._(
        /*BTDS*/ '_j{"*":"New groups \\"{subgroup_name_first}\\", \\"{subgroup_name_second}\\", and {leftover_subgroup_activity} more","_1":"New groups \\"{subgroup_name_first}\\", \\"{subgroup_name_second}\\", and 1 more"}',
        [
          s._plural(p, "leftover_subgroup_activity"),
          s._param("subgroup_name_first", d),
          s._param("subgroup_name_second", m),
        ],
      );
    }
    l.getActivityCellText = d;
  },
  226,
);
