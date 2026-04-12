__d(
  "WAWebSectionHeaderWithAction.react",
  [
    "WAWebFlex.react",
    "WAWebFocusTracer",
    "WAWebText.react",
    "WDSButton.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useRef;
    function m(e) {
      var t = e.actionText,
        n = e.active,
        a = e.onClick,
        i = e.subtitle,
        l = e.title,
        u = e.xstyle,
        c = function (t) {
          return t.toString().toLowerCase().replaceAll(" ", "-");
        };
      return s.jsxs(o("WAWebFlex.react").FlexRow, {
        align: "center",
        justify: "all",
        xstyle: u,
        children: [
          s.jsxs(o("WAWebFlex.react").FlexColumn, {
            children: [
              s.jsx(r("WDSText.react"), {
                type: "Body1Emphasized",
                colorName: "contentDefault",
                children: l,
              }),
              s.jsx(o("WAWebText.react").WAWebTextSmall, { children: i }),
            ],
          }),
          s.jsx(p, { active: n, onClick: a, testid: void 0, text: t }),
        ],
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.active,
        n = e.onClick,
        o = e.testid,
        a = e.text,
        i = d();
      return (
        c(
          function () {
            t && r("WAWebFocusTracer").focus(i.current);
          },
          [t],
        ),
        s.jsx(r("WDSButton.react"), {
          ref: i,
          variant: "borderless",
          label: a,
          onPress: function () {
            return n(void 0);
          },
          testid: void 0,
        })
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
