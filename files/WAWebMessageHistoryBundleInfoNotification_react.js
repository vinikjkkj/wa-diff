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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(18),
        n = e.authorName,
        a = e.firstBundleMsgElement,
        i = _(!1),
        l = i[0],
        c = i[1],
        h = p(null),
        C = d(
          o("WAWebGroupHistoryBundleInfoContext")
            .WAWebGroupHistoryBundleInfoContext,
        ),
        b = C.setVisibleGroupHistoryBundleSenders,
        v,
        S;
      (t[0] !== n || t[1] !== a || t[2] !== b
        ? ((v = function () {
            var e = h.current;
            if (e != null) {
              var t = !1,
                r = !1,
                o = !1,
                i = function () {
                  var e = r && !o,
                    a = t || e;
                  (c(e),
                    b(function (e) {
                      var t = e.has(n);
                      if (a === t) return e;
                      var r = new Set(e);
                      return (a ? r.add(n) : r.delete(n), r);
                    }));
                },
                l = y,
                s = new IntersectionObserver(function (e) {
                  var n = e[e.length - 1];
                  ((t = n.intersectionRatio > 0), (r = l(n)), i());
                }),
                u = new IntersectionObserver(function (e) {
                  var t = e[e.length - 1];
                  ((o = l(t)), i());
                });
              return (
                s.observe(e),
                a != null && u.observe(a),
                function () {
                  (s.disconnect(),
                    u.disconnect(),
                    b(function (e) {
                      if (!e.has(n)) return e;
                      var t = new Set(e);
                      return (t.delete(n), t);
                    }));
                }
              );
            }
          }),
          (S = [n, a, b]),
          (t[0] = n),
          (t[1] = a),
          (t[2] = b),
          (t[3] = v),
          (t[4] = S))
        : ((v = t[3]), (S = t[4])),
        m(v, S));
      var R;
      t[5] !== n
        ? ((R = s._(/*BTDS*/ "Message history sent by {authorName}", [
            s._param("authorName", n),
          ])),
          (t[5] = n),
          (t[6] = R))
        : (R = t[6]);
      var L;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = u.jsx(r("WDSTextualLink.react"), {
            href: g,
            children: s._(/*BTDS*/ "Learn more"),
          })),
          (t[7] = L))
        : (L = t[7]);
      var E;
      t[8] !== R
        ? ((E = u.jsx(r("WAWebWrapperSystemBubble.react"), {
            testid: void 0,
            ref: h,
            isFocusable: !1,
            groupHistoryBackground: !0,
            xstyle: f.staticBundleInfo,
            children: u.jsxs(r("WDSText.react"), {
              type: "Body3Emphasized",
              xstyle: f.historyInfoBubble,
              colorName: "contentDefault",
              children: [R, ".", " ", L],
            }),
          })),
          (t[8] = R),
          (t[9] = E))
        : (E = t[9]);
      var k;
      t[10] !== n || t[11] !== l
        ? ((k = l
            ? u.jsx(r("WAWebWrapperSystemBubble.react"), {
                isFocusable: !1,
                children: u.jsxs(r("WDSText.react"), {
                  type: "Body3Emphasized",
                  xstyle: f.historyInfoBubble,
                  colorName: "contentDefault",
                  children: [
                    s._(/*BTDS*/ "Message history sent by {authorName}", [
                      s._param("authorName", n),
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
            : null),
          (t[10] = n),
          (t[11] = l),
          (t[12] = k))
        : (k = t[12]);
      var I;
      t[13] !== k
        ? ((I = u.jsx(r("WAWebVelocityTransitionGroup"), {
            xstyle: f.transitionGroup,
            transitionName: "group-history-info",
            children: k,
          })),
          (t[13] = k),
          (t[14] = I))
        : (I = t[14]);
      var T;
      return (
        t[15] !== E || t[16] !== I
          ? ((T = u.jsxs(u.Fragment, { children: [E, I] })),
            (t[15] = E),
            (t[16] = I),
            (t[17] = T))
          : (T = t[17]),
        T
      );
    }
    function y(e) {
      var t,
        n,
        r =
          (t = (n = e.rootBounds) == null ? void 0 : n.height) != null ? t : 0;
      return e.intersectionRatio === 0 && e.boundingClientRect.top > r / 2;
    }
    l.default = h;
  },
  226,
);
