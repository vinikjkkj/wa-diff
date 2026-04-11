__d(
  "WAWebStatusButton.react",
  [
    "WAWebExternalLink.react",
    "WAWebUnstyledButton.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = "x1ahdber-B",
      c = "x93upt8-B",
      d = {
        button: {
          display: "x78zum5",
          borderStartStartRadius: "x1g83kfv",
          borderStartEndRadius: "x3qq2k7",
          borderEndEndRadius: "x2x8art",
          borderEndStartRadius: "x1qor8vf",
          width: "xeq5yr9",
          paddingTop: "x1xrf6ya",
          paddingInlineEnd: "xvtqlqk",
          paddingBottom: "xscbp6u",
          paddingInlineStart: "xdx6fka",
          maxWidth: "x1lr1uin",
          fontSize: "x1jchvi3",
          height: "xqvfhly",
          lineHeight: "xdod15v",
          transform: "x1eu86dj",
          opacity: "xg01cxk",
          backgroundColor: "x6n7w7t",
          color: "xzqyxu6",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          animationName: "x1l9ybt0",
          animationFillMode: "x10e4vud",
          animationDuration: "x2h4a58",
          animationDelay: "x5m6rv0",
          ":hover_backgroundColor": "x1ulvavg",
          $$css: !0,
        },
      };
    function m(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.text,
        a = e.url,
        i;
      t[0] !== a
        ? ((i = function () {
            o("WAWebExternalLink.react").openExternalLink(a);
          }),
          (t[0] = a),
          (t[1] = i))
        : (i = t[1]);
      var l = i,
        u;
      return (
        t[2] !== l || t[3] !== n
          ? ((u = s.jsx(r("WAWebUnstyledButton.react"), {
              xstyle: d.button,
              onClick: l,
              children: n,
            })),
            (t[2] = l),
            (t[3] = n),
            (t[4] = u))
          : (u = t[4]),
        u
      );
    }
    l.default = m;
  },
  98,
);
