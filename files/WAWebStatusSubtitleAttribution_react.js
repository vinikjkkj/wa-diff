__d(
  "WAWebStatusSubtitleAttribution.react",
  [
    "WAWebChevronIcon.react",
    "WAWebClickable.react",
    "WAWebFlex.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useLayoutEffect,
      d = u.useRef,
      m = 4e3,
      p = {
        marginEnd2: {
          marginInlineEnd: "x16q7b9a",
          flexShrink: "x2lah0s",
          $$css: !0,
        },
        truncateText: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          textOverflow: "xlyipyv",
          whiteSpace: "xuxw1ft",
          $$css: !0,
        },
        centerIcon: { display: "x78zum5", alignItems: "x6s0dn4", $$css: !0 },
      };
    function _(e, t) {
      c(
        function () {
          var n = e.current,
            r = t.current;
          if (!(n == null || r == null)) {
            var o = null,
              a = function () {
                var e = n.scrollWidth - n.clientWidth;
                if ((o != null && (o.cancel(), (o = null)), e > 0)) {
                  var t = window.getComputedStyle(n).direction === "rtl",
                    a = t ? e : -e;
                  o = r.animate(
                    [
                      { transform: "translateX(0)", offset: 0 },
                      { transform: "translateX(0)", offset: 0.15 },
                      { transform: "translateX(" + a + "px)", offset: 0.85 },
                      { transform: "translateX(" + a + "px)", offset: 1 },
                    ],
                    { duration: m, iterations: 1 / 0, easing: "linear" },
                  );
                }
              };
            a();
            var i = new MutationObserver(a);
            return (
              i.observe(n, { childList: !0, subtree: !0, characterData: !0 }),
              function () {
                (i.disconnect(), o != null && o.cancel());
              }
            );
          }
        },
        [e, t],
      );
    }
    function f(e) {
      var t = e.children,
        n = e.enableChevronIcon,
        a = e.icon,
        i = e.isCloseFriends,
        l = e.onClick,
        u = d(null),
        c = d(null);
      _(u, c);
      var m = s.jsxs(s.Fragment, {
        children: [
          s.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: p.marginEnd2,
            children: a,
          }),
          s.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: p.truncateText,
            testid: void 0,
            children: s.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "persistentAlwaysWhite",
              maxLines: 1,
              children: t,
            }),
          }),
          n &&
            s.jsx(o("WAWebFlex.react").FlexItem, {
              shrink: 0,
              xstyle: p.centerIcon,
              children: s.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
                directional: !0,
                height: 18,
                width: 18,
              }),
            }),
        ],
      });
      return s.jsx(o("WAWebFlex.react").FlexRow, {
        align: "center",
        justify: "start",
        className: "xeuugli",
        children: i
          ? s.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "start",
              className: "xeuugli x6ikm8r x10wlt62",
              children: [
                s.jsx(o("WAWebFlex.react").FlexItem, {
                  className: "x1wbi8v6 x7g7pl8",
                  children: "\u2022",
                }),
                s.jsx(o("WAWebClickable.react").Clickable, {
                  onClick: l,
                  className: "xeuugli",
                  children: s.jsx("div", {
                    ref: u,
                    className: "x6ikm8r x10wlt62",
                    children: s.jsx("div", {
                      ref: c,
                      className: "x3nfvp2 x6s0dn4 xuxw1ft",
                      children: m,
                    }),
                  }),
                }),
              ],
            })
          : s.jsxs(s.Fragment, {
              children: [
                s.jsx(o("WAWebFlex.react").FlexItem, {
                  className: "x1wbi8v6 x7g7pl8",
                  children: "\u2022",
                }),
                s.jsx(o("WAWebClickable.react").Clickable, {
                  onClick: l,
                  className: "xeuugli",
                  children: s.jsx(o("WAWebFlex.react").FlexRow, {
                    align: "center",
                    className: "xeuugli",
                    children: m,
                  }),
                }),
              ],
            }),
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
