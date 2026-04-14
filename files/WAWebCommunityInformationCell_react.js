__d(
  "WAWebCommunityInformationCell.react",
  ["WAWebText.react", "WAWebText_DONOTUSE.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        title: { color: "x14ug900", lineHeight: "x37zpob", $$css: !0 },
        iconColor: { color: "xhslqc4", $$css: !0 },
        subText: { paddingTop: "x16ovd2e", $$css: !0 },
      };
    function c(e) {
      var t = e.Icon,
        n = e.description,
        r = e.title;
      return s.jsxs("div", {
        className: "x78zum5 xw7yly9 x1yztbdb xh8yej3",
        children: [
          s.jsx("div", {
            className: "x1gxa6cn xvy4d1p xxk0z11",
            children: s.jsx(t, {
              width: 24,
              height: 24,
              iconXstyle: u.iconColor,
            }),
          }),
          s.jsxs("div", {
            className: "x1iyjqo2 xyqm7xq x1ys307a",
            children: [
              s.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
                xstyle: u.title,
                children: r,
              }),
              s.jsx(o("WAWebText.react").WAWebTextMuted, {
                as: "p",
                xstyle: u.subText,
                children: n,
              }),
            ],
          }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
