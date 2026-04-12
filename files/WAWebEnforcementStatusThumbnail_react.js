__d(
  "WAWebEnforcementStatusThumbnail.react",
  ["WAWebStatusThumbnailComponents.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useCallback;
    function c(e) {
      var t = e.msg,
        n = e.onPress,
        r = u(
          function (e) {
            (e.stopPropagation(), n == null || n());
          },
          [n],
        ),
        a = s.jsx("div", {
          className:
            "xlr9sxt xvvg52n xwd4zgb xq8v1ta xqitzto x6ikm8r x10wlt62 x1n2onr6 xfj1xho",
          children: s.jsx(
            o("WAWebStatusThumbnailComponents.react").StatusMsgThumbnail,
            { msg: t, size: "large" },
          ),
        });
      return n != null
        ? s.jsx("button", {
            className:
              "x78zum5 xl56j7k x16ovd2e x12xbjc7 xjbqb8w x1ejq31n x18oe1m7 x1sy0etr xstzfhl x972fbf x10w94by x1qhh985 x14e42zd x1ypdohk x1c1uobl xyri2b xh8yej3",
            onClick: r,
            type: "button",
            children: a,
          })
        : s.jsx("div", {
            className: "x78zum5 xl56j7k x16ovd2e x12xbjc7",
            children: a,
          });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
