__d(
  "WAWebCopyMessageIdButton.react",
  [
    "WAWebCopyToClipboard",
    "WAWebDevOnlyBadge.react",
    "WAWebUnstyledButton.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.msg;
      return s.jsx(r("WAWebUnstyledButton.react"), {
        onClick: function () {
          return void o("WAWebCopyToClipboard").copyTextToClipboard(
            t.id.toString(),
          );
        },
        children: s.jsx("span", {
          className:
            "x78zum5 xl56j7k x10l6tqk xupqr0c xzi7r1p xh8yej3 x16ovd2e x1j8ymqv x12xbjc7 x4tra6z x190qgfh x1awj2ng xj4c5ne",
          children: s.jsx(o("WAWebDevOnlyBadge.react").DevOnlyBadge, {
            label: "Copy Msg ID",
          }),
        }),
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
