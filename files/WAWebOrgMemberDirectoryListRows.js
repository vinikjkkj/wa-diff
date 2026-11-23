__d(
  "WAWebOrgMemberDirectoryListRows",
  ["WAWebOrgMemberDirectoryPickerUtils"],
  function (t, n, r, o, a, i, l) {
    var e = 72,
      s = 66,
      u = 40;
    function c(t, n) {
      var r = [],
        a = null;
      for (var i of t) {
        var l = o(
          "WAWebOrgMemberDirectoryPickerUtils",
        ).getDirectoryMemberLetter(i.member);
        (l !== a &&
          (r.push({
            type: "letter",
            letter: l,
            height: u,
            itemKey: "letter_" + i.key,
          }),
          (a = l)),
          r.push({
            type: "member",
            row: i,
            height: n === "compact" ? s : e,
            itemKey: i.key,
          }));
      }
      return r;
    }
    l.toDirectoryRows = c;
  },
  98,
);
