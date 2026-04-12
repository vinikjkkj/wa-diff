__d(
  "WAWebMessageHistoryBundleInfoNotification.react",
  [
    "fbt",
    "WAWebFaqUrl",
    "WAWebGroupHistoryBundleInfoContext",
    "WAWebVelocityTransitionGroup",
    "WAWebWrapperSystemBubble.react",
    "WDSText.react",
    "WDSTextualLink.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.use,
      m = c.useEffect,
      p = c.useRef,
      _ = c.useState,
      f = {
        historyInfoBubble: {
          backgroundColor: "x1k43qru",
          paddingTop: "x1tiyuxx",
          paddingBottom: "x1nbhmlj",
          $$css: !0,
        },
        transitionGroup: {
          display: "x78zum5",
          justifyContent: "xl56j7k",
          position: "x7wzq59",
          bottom: "x1ey2m1c",
          zIndex: "x12xzxwr",
          $$css: !0,
        },
        staticBundleInfo: { marginBottom: "xcytdqz", $$css: !0 },
      },
      g = o("WAWebFaqUrl").getGroupHistoryFAQUrl();
    function h(e) {
      var t = e.authorName,
        n = e.firstBundleMsgElement,
        a = _(!1),
        i = a[0],
        l = a[1],
        c = p(null),
        h = d(
          o("WAWebGroupHistoryBundleInfoContext")
            .WAWebGroupHistoryBundleInfoContext,
        ),
        y = h.setVisibleGroupHistoryBundleSenders;
      return (
        m(
          function () {
            var e = c.current;
            if (e != null) {
              var r = !1,
                o = !1,
                a = !1,
                i = function () {
                  var e = o && !a,
                    n = r || e;
                  (l(e),
                    y(function (e) {
                      var r = e.has(t);
                      if (n === r) return e;
                      var o = new Set(e);
                      return (n ? o.add(t) : o.delete(t), o);
                    }));
                },
                s = function (t) {
                  var e,
                    n,
                    r =
                      (e = (n = t.rootBounds) == null ? void 0 : n.height) !=
                      null
                        ? e
                        : 0;
                  return (
                    t.intersectionRatio === 0 &&
                    t.boundingClientRect.top > r / 2
                  );
                },
                u = new IntersectionObserver(function (e) {
                  var t = e[e.length - 1];
                  ((r = t.intersectionRatio > 0), (o = s(t)), i());
                }),
                d = new IntersectionObserver(function (e) {
                  var t = e[e.length - 1];
                  ((a = s(t)), i());
                });
              return (
                u.observe(e),
                n != null && d.observe(n),
                function () {
                  (u.disconnect(),
                    d.disconnect(),
                    y(function (e) {
                      if (!e.has(t)) return e;
                      var n = new Set(e);
                      return (n.delete(t), n);
                    }));
                }
              );
            }
          },
          [t, n, y],
        ),
        u.jsxs(u.Fragment, {
          children: [
            u.jsx(r("WAWebWrapperSystemBubble.react"), {
              testid: void 0,
              ref: c,
              isFocusable: !1,
              groupHistoryBackground: !0,
              xstyle: f.staticBundleInfo,
              children: u.jsxs(r("WDSText.react"), {
                type: "Body3Emphasized",
                xstyle: f.historyInfoBubble,
                colorName: "contentDefault",
                children: [
                  s._(/*BTDS*/ "Message history sent by {authorName}", [
                    s._param("authorName", t),
                  ]),
                  ".",
                  " ",
                  u.jsx(r("WDSTextualLink.react"), {
                    href: g,
                    children: s._(/*BTDS*/ "Learn more"),
                  }),
                ],
              }),
            }),
            u.jsx(r("WAWebVelocityTransitionGroup"), {
              xstyle: f.transitionGroup,
              transitionName: "group-history-info",
              children: i
                ? u.jsx(r("WAWebWrapperSystemBubble.react"), {
                    isFocusable: !1,
                    children: u.jsxs(r("WDSText.react"), {
                      type: "Body3Emphasized",
                      xstyle: f.historyInfoBubble,
                      colorName: "contentDefault",
                      children: [
                        s._(/*BTDS*/ "Message history sent by {authorName}", [
                          s._param("authorName", t),
                        ]),
                        ".",
                        " ",
                        u.jsx(r("WDSTextualLink.react"), {
                          href: g,
                          children: s._(/*BTDS*/ "Learn more"),
                        }),
                      ],
                    }),
                  })
                : null,
            }),
          ],
        })
      );
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);
