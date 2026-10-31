__d(
  "WAWebWODirectoryMemberUtils",
  ["WAWebContactComparator", "WAWebL10NAccentFold"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
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
    function s(e) {
      var t = o("WAWebContactComparator").getCollator();
      return e.toSorted(function (e, n) {
        return (
          Number(n.isEnrolled) - Number(e.isEnrolled) ||
          t.compare(e.name, n.name)
        );
      });
    }
    function u(e) {
      var t = [];
      return (
        e.designation != null && t.push(e.designation),
        e.team != null && t.push(e.team),
        t.length === 0 ? null : t.join(" \xB7 ")
      );
    }
    function c(e) {
      return e.isEnrolled && e.lid != null;
    }
    ((l.filterWODirectoryMembers = e),
      (l.sortWODirectoryMembers = s),
      (l.getWODirectoryMemberDetails = u),
      (l.canSelectWODirectoryMember = c));
  },
  98,
);
