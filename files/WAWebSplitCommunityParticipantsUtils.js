__d(
  "WAWebSplitCommunityParticipantsUtils",
  ["WAWebUserPrefsMeUser"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (e == null) return { membersInCAG: [], membersNotInCAG: t };
      var n = [];
      t == null ||
        t.forEach(function (t) {
          var r = t.id;
          if (r.isUser()) {
            var o = e.isParticipantWidOrAlternateWidValid(r, function (e) {
              return e != null;
            });
            o || n.push(t);
          }
        });
      var r,
        a = (e != null ? e : [])
          .map(function (e) {
            return e.contact;
          })
          .filter(function (e) {
            var t = o("WAWebUserPrefsMeUser").isMeAccount(e.id);
            return (t && (r = e), !t);
          }),
        i = r ? [r].concat(a) : a;
      return { membersInCAG: i, membersNotInCAG: n };
    }
    l.splitCommunityParticipants = e;
  },
  98,
);
