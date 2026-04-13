__d(
  "WAWebBizBroadcastsDialog.react",
  [
    "WAWebCloseRefreshedIcon.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WDSButton.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = { surface: "bb-imported-contact-wizard" },
      c = {
        body: { maxWidth: "x1kvbfxc", $$css: !0 },
        container: { marginInlineStart: "xm2jcoa", $$css: !0 },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(19),
        n = e.children,
        a = e.onClose,
        i = e.primaryAction,
        l = e.testid,
        d = e.title,
        m = l === void 0 ? "biz-broadcasts-dialog" : l,
        p;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = {
            className:
              "x6s0dn4 x78zum5 x1q0g3np x2lah0s x8a3fw1 x1aj3ljl x1peatla x1nhvcw1 xexx8yu x18d9i69 x1iw51ew xde1mab",
          }),
          (t[0] = p))
        : (p = t[0]);
      var _;
      t[1] !== a
        ? ((_ = s.jsx(r("WDSButton.react"), {
            size: "medium",
            variant: "borderless",
            Icon: o("WAWebCloseRefreshedIcon.react").CloseRefreshedIcon,
            onPress: a,
          })),
          (t[1] = a),
          (t[2] = _))
        : (_ = t[2]);
      var f;
      t[3] !== d
        ? ((f =
            d != null
              ? s.jsx("div", {
                  className: "x6s0dn4 x78zum5 x98rzlu",
                  children: s.jsx(r("WDSText.react"), {
                    type: "Body1",
                    colorName: "contentDefault",
                    children: d,
                  }),
                })
              : null),
          (t[3] = d),
          (t[4] = f))
        : (f = t[4]);
      var g;
      t[5] !== i
        ? ((g =
            i != null
              ? s.jsx("div", { className: "x2lah0s", children: i })
              : null),
          (t[5] = i),
          (t[6] = g))
        : (g = t[6]);
      var h;
      t[7] !== _ || t[8] !== f || t[9] !== g
        ? ((h = s.jsxs(
            "header",
            babelHelpers.extends({}, p, { children: [_, f, g] }),
          )),
          (t[7] = _),
          (t[8] = f),
          (t[9] = g),
          (t[10] = h))
        : (h = t[10]);
      var y, C;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = { className: "xw2csxc x1odjw0f xh8yej3" }),
          (C = { className: "x78zum5 xl56j7k" }),
          (t[11] = y),
          (t[12] = C))
        : ((y = t[11]), (C = t[12]));
      var b;
      t[13] !== n
        ? ((b = s.jsx(
            "div",
            babelHelpers.extends({}, y, {
              children: s.jsx(
                "div",
                babelHelpers.extends({}, C, {
                  children: s.jsx(r("WAWebDrawerBody.react"), {
                    xstyle: c.body,
                    children: n,
                  }),
                }),
              ),
            }),
          )),
          (t[13] = n),
          (t[14] = b))
        : (b = t[14]);
      var v;
      return (
        t[15] !== h || t[16] !== b || t[17] !== m
          ? ((v = s.jsxs(r("WAWebDrawer.react"), {
              testid: void 0,
              tsNavigationData: u,
              xstyle: c.container,
              children: [h, b],
            })),
            (t[15] = h),
            (t[16] = b),
            (t[17] = m),
            (t[18] = v))
          : (v = t[18]),
        v
      );
    }
    l.default = d;
  },
  98,
);
