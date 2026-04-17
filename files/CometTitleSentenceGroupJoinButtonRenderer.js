__d(
  "CometTitleSentenceGroupJoinButtonRenderer",
  [
    "CometRelay",
    "CometTitleSentenceGroupJoinButtonRenderer_entity.graphql",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c =
        e !== void 0
          ? e
          : (e = n("CometTitleSentenceGroupJoinButtonRenderer_entity.graphql"));
    function d(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.entity,
        r = o("CometRelay").useFragment(c, n);
      if (r.target_group == null) return null;
      var a;
      t[0] !== r.target_group
        ? ((a = { group$key: r.target_group }),
          (t[0] = r.target_group),
          (t[1] = a))
        : (a = t[1]);
      var i;
      return (
        t[2] !== r.target_group || t[3] !== a
          ? ((i = u.jsx(o("CometRelay").MatchContainer, {
              match: r.target_group,
              props: a,
            })),
            (t[2] = r.target_group),
            (t[3] = a),
            (t[4] = i))
          : (i = t[4]),
        i
      );
    }
    var m = function (t, n) {
      return u.jsx(d, { entity: n });
    };
    l.default = m;
  },
  98,
);
