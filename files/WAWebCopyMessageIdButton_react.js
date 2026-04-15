__d(
  "WAWebCopyMessageIdButton.react",
  [
    "WAWebCopyToClipboard",
    "WAWebDevOnlyBadge.react",
    "WAWebUnstyledButton.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.msg,
        a;
      t[0] !== n.id
        ? ((a = function () {
            return void o("WAWebCopyToClipboard").copyTextToClipboard(
              n.id.toString(),
            );
          }),
          (t[0] = n.id),
          (t[1] = a))
        : (a = t[1]);
      var i;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s.jsx("span", {
            className:
              "x78zum5 xl56j7k x10l6tqk xupqr0c xzi7r1p xh8yej3 x16ovd2e x1j8ymqv x12xbjc7 x4tra6z x190qgfh x1awj2ng xj4c5ne",
            children: s.jsx(o("WAWebDevOnlyBadge.react").DevOnlyBadge, {
              label: "Copy Msg ID",
            }),
          })),
          (t[2] = i))
        : (i = t[2]);
      var l;
      return (
        t[3] !== a
          ? ((l = s.jsx(r("WAWebUnstyledButton.react"), {
              onClick: a,
              children: i,
            })),
            (t[3] = a),
            (t[4] = l))
          : (l = t[4]),
        l
      );
    }
    l.default = u;
  },
  98,
);
