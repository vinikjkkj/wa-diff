__d(
  "useWAWebSplitCommunityParticipants",
  ["WAWebCommunityParticipantsUtils", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useMemo;
    function u(e, t, n) {
      return s(
        function () {
          if (e) {
            var r = o(
              "WAWebCommunityParticipantsUtils",
            ).splitCommunityParticipants(t, n);
            return {
              members: r.membersInCAG,
              membersNotInCAG: r.membersNotInCAG,
            };
          }
          return { members: n, membersNotInCAG: [] };
        },
        [t, e, n],
      );
    }
    l.default = u;
  },
  98,
);
