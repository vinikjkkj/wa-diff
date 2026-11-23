__d(
  "WAWebWorkDirectoryMemberUtils",
  ["WAWebContactComparator", "WAWebL10NAccentFold"],
  function (t, n, r, o, a, i, l) {
    var e = "#",
      s = /^[A-Z]$/;
    function u(e, t) {
      var n = o("WAWebL10NAccentFold").accentFold(t.trim());
      return n === ""
        ? e
        : e.filter(function (e) {
            return [e.name, e.designation, e.team].some(function (e) {
              return (
                e != null && o("WAWebL10NAccentFold").accentFold(e).includes(n)
              );
            });
          });
    }
    function c(e) {
      var t = o("WAWebContactComparator").getCollator();
      return e.toSorted(function (e, n) {
        return (
          Number(n.isEnrolled) - Number(e.isEnrolled) ||
          t.compare(e.name, n.name)
        );
      });
    }
    function d(t) {
      var n = o("WAWebContactComparator").getCollator(),
        r = new Map(),
        a = t.toSorted(function (e, t) {
          return n.compare(e.name, t.name);
        });
      for (var i of a) {
        var l = m(i),
          s = r.get(l);
        s == null ? r.set(l, [i]) : s.push(i);
      }
      return Array.from(r, function (e) {
        var t = e[0],
          n = e[1];
        return { initial: t, members: n };
      }).toSorted(function (t, r) {
        return (
          +(t.initial === e) - +(r.initial === e) ||
          n.compare(t.initial, r.initial)
        );
      });
    }
    function m(t) {
      var n = o("WAWebL10NAccentFold")
        .accentFold(t.name.trim())
        .charAt(0)
        .toUpperCase();
      return s.test(n) ? n : e;
    }
    function p(e) {
      var t = [];
      return (
        e.designation != null && t.push(e.designation),
        e.team != null && t.push(e.team),
        t.length === 0 ? null : t.join(" \xB7 ")
      );
    }
    function _(e) {
      return e.isEnrolled && e.lid != null;
    }
    ((l.filterWorkDirectoryMembers = u),
      (l.sortWorkDirectoryMembers = c),
      (l.groupWorkDirectoryMembersByInitial = d),
      (l.getWorkDirectoryMemberDetails = p),
      (l.canSelectWorkDirectoryMember = _));
  },
  98,
);
