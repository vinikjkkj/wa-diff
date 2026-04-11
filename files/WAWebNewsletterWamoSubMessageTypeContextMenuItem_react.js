__d(
  "WAWebNewsletterWamoSubMessageTypeContextMenuItem.react",
  [
    "WAWebDropdownItem.react",
    "WAWebFlex.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        container: { cursor: "x1ypdohk", height: "xnnlda6", $$css: !0 },
        icon: { minWidth: "xt4ypqs", $$css: !0 },
        marginStart8: { marginInlineStart: "x150mmf0", $$css: !0 },
        marginEnd32: { marginInlineEnd: "x5jkbfu", $$css: !0 },
        marginStart12: { marginInlineStart: "x1uvdrpn", $$css: !0 },
        marginVert12: {
          marginTop: "x1de0gy",
          marginBottom: "xcytdqz",
          $$css: !0,
        },
        marginEnd24: { marginInlineEnd: "x7vsco6", $$css: !0 },
        paddingVert4: {
          paddingTop: "x1tiyuxx",
          paddingBottom: "x1nbhmlj",
          $$css: !0,
        },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.action,
        r = e.description,
        a = e.icon,
        i = e.testid,
        l = e.text,
        c;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = { className: "x150mmf0 xqf2s3x" }), (t[0] = c))
        : (c = t[0]);
      var d;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = [u.container, u.marginStart8, u.marginEnd32, u.paddingVert4]),
          (t[1] = d))
        : (d = t[1]);
      var m;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = [u.icon, u.marginStart12, u.marginVert12, u.marginEnd24]),
          (t[2] = m))
        : (m = t[2]);
      var p;
      t[3] !== a
        ? ((p = s.jsx(o("WAWebFlex.react").FlexRow, {
            justify: "center",
            xstyle: m,
            children: a,
          })),
          (t[3] = a),
          (t[4] = p))
        : (p = t[4]);
      var _;
      t[5] !== r || t[6] !== l
        ? ((_ =
            r != null
              ? s.jsxs(o("WAWebFlex.react").FlexColumn, {
                  children: [
                    s.jsx("span", {
                      className:
                        "x1fc57z9 x6prxxf x1iayye1 x14ug900 x6ikm8r x10wlt62 xlyipyv xuxw1ft",
                      children: l,
                    }),
                    s.jsx("span", {
                      className:
                        "x1f6kntn x1d3mw78 xf4yft xhslqc4 x6ikm8r x10wlt62 xlyipyv xuxw1ft",
                      children: r,
                    }),
                  ],
                })
              : s.jsx("span", {
                  className:
                    "x1fc57z9 x6prxxf x1iayye1 x14ug900 x6ikm8r x10wlt62 xlyipyv xuxw1ft",
                  children: l,
                })),
          (t[5] = r),
          (t[6] = l),
          (t[7] = _))
        : (_ = t[7]);
      var f;
      t[8] !== p || t[9] !== _
        ? ((f = s.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: d,
            children: [p, _],
          })),
          (t[8] = p),
          (t[9] = _),
          (t[10] = f))
        : (f = t[10]);
      var g;
      return (
        t[11] !== n || t[12] !== f || t[13] !== i
          ? ((g = s.jsx(
              "div",
              babelHelpers.extends({}, c, {
                children: s.jsx(o("WAWebDropdownItem.react").DropdownItem, {
                  testid: void 0,
                  action: n,
                  type: "newsletter-wamo-message-type",
                  children: f,
                }),
              }),
            )),
            (t[11] = n),
            (t[12] = f),
            (t[13] = i),
            (t[14] = g))
          : (g = t[14]),
        g
      );
    }
    l.default = c;
  },
  98,
);
