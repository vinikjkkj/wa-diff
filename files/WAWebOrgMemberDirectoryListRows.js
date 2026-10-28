__d(
  "WAWebOrgMemberDirectoryListRows",
  ["WAWebOrgMemberDirectoryPickerUtils"],
  function (t, n, r, o, a, i, l) {
    var e = 72,
      s = 40;
    function u(t) {
      var n = [],
        r = null;
      for (var a of t) {
        var i = o(
          "WAWebOrgMemberDirectoryPickerUtils",
        ).getDirectoryMemberLetter(a.member);
        (i !== r &&
          (n.push({
            type: "letter",
            letter: i,
            height: s,
            itemKey: "letter_" + i,
          }),
          (r = i)),
          n.push({ type: "member", row: a, height: e, itemKey: a.member.id }));
      }
      return n;
    }
    l.toDirectoryRows = u;
  },
  98,
);
