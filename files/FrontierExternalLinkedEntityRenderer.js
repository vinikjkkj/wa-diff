__d(
  "FrontierExternalLinkedEntityRenderer",
  ["FrontierInlinePressableText.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.entity,
        a = e.node;
      if (n.url == null) return a;
      var i;
      t[0] !== n.url
        ? ((i = { target: "_blank", url: n.url }), (t[0] = n.url), (t[1] = i))
        : (i = t[1]);
      var l;
      return (
        t[2] !== a || t[3] !== i
          ? ((l = s.jsx(r("FrontierInlinePressableText.react"), {
              linkProps: i,
              children: a,
            })),
            (t[2] = a),
            (t[3] = i),
            (t[4] = l))
          : (l = t[4]),
        l
      );
    }
    var c = function (t, n) {
      return s.jsx(u, { entity: n, node: t });
    };
    l.default = c;
  },
  98,
);
