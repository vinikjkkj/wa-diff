__d(
  "useWAWebSplitCommunityParticipants",
  ["WAWebCommunityParticipantsUtils", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useMemo;
    function u(e, t, n) {
      var r = o("react-compiler-runtime").c(9),
        a;
      e: {
        if (e) {
          var i;
          r[0] !== t || r[1] !== n
            ? ((i = o(
                "WAWebCommunityParticipantsUtils",
              ).splitCommunityParticipants(t, n)),
              (r[0] = t),
              (r[1] = n),
              (r[2] = i))
            : (i = r[2]);
          var l = i,
            s;
          (r[3] !== l.membersInCAG || r[4] !== l.membersNotInCAG
            ? ((s = {
                members: l.membersInCAG,
                membersNotInCAG: l.membersNotInCAG,
              }),
              (r[3] = l.membersInCAG),
              (r[4] = l.membersNotInCAG),
              (r[5] = s))
            : (s = r[5]),
            (a = s));
          break e;
        }
        var u;
        r[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = []), (r[6] = u))
          : (u = r[6]);
        var c;
        (r[7] !== n
          ? ((c = { members: n, membersNotInCAG: u }), (r[7] = n), (r[8] = c))
          : (c = r[8]),
          (a = c));
      }
      return a;
    }
    l.default = u;
  },
  98,
);
