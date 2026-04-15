__d(
  "WAWebBizAdManagementConversationsCell.react",
  ["WAWebL10N", "WDSText.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.conversations,
        a;
      t[0] !== n
        ? ((a = r("WAWebL10N").d(n)), (t[0] = n), (t[1] = a))
        : (a = t[1]);
      var i;
      return (
        t[2] !== a
          ? ((i = s.jsx(r("WDSText.react"), {
              type: "Body1",
              colorName: "contentDefault",
              maxLines: 1,
              children: a,
            })),
            (t[2] = a),
            (t[3] = i))
          : (i = t[3]),
        i
      );
    }
    l.default = u;
  },
  98,
);
