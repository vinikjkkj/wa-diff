__d(
  "WAWebCustomerProfileDateField.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WDSIconIcEdit.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useRef,
      p = {
        row: {
          paddingTop: "x16ovd2e",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x12w63v0",
          paddingInlineEnd: "xvtqlqk",
          $$css: !0,
        },
        editButtonContainer: {
          flexShrink: "x2lah0s",
          opacity: "xg01cxk x5b7970",
          $$css: !0,
        },
        iconContainer: {
          color: "xhslqc4",
          height: "x1nqnulx",
          paddingTop: "x16ovd2e",
          paddingInlineEnd: "x1nzty39",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x12w63v0",
          width: "x1xvr5cs",
          $$css: !0,
        },
      };
    function _(e) {
      var t = e.getUTCFullYear(),
        n = String(e.getUTCMonth() + 1).padStart(2, "0"),
        r = String(e.getUTCDate()).padStart(2, "0");
      return t + "-" + n + "-" + r;
    }
    function f(e) {
      return e.toLocaleDateString(void 0, {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
      });
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(30),
        n = e.icon,
        a = e.label,
        i = e.onSave,
        l = e.placeholder,
        c = e.value,
        d = m(null),
        g;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = function () {
            var e;
            (e = d.current) == null || e.showPicker();
          }),
          (t[0] = g))
        : (g = t[0]);
      var h = g,
        y;
      t[1] !== i
        ? ((y = function (t) {
            var e = t.target.value;
            if (e !== "") {
              var n = e.split("-").map(Number),
                r = n[0],
                o = n[1],
                a = n[2],
                l = new Date(Date.UTC(r, o - 1, a));
              i(l);
            } else i(null);
          }),
          (t[1] = i),
          (t[2] = y))
        : (y = t[2]);
      var C = y,
        b;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = {
            className:
              "xlr9sxt xvvg52n xwd4zgb xq8v1ta x150mmf0 xqf2s3x x1ubxc9n x-default-marker",
          }),
          (t[3] = b))
        : (b = t[3]);
      var v;
      t[4] !== n
        ? ((v = u.jsx(o("WAWebFlex.react").FlexItem, {
            align: "center",
            justify: "center",
            xstyle: p.iconContainer,
            children: n,
          })),
          (t[4] = n),
          (t[5] = v))
        : (v = t[5]);
      var S;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = { className: "x98rzlu xeuugli x6ikm8r x10wlt62" }), (t[6] = S))
        : (S = t[6]);
      var R;
      t[7] !== a || t[8] !== l || t[9] !== c
        ? ((R = u.jsx(
            "div",
            babelHelpers.extends({}, S, {
              children:
                c != null
                  ? u.jsxs(u.Fragment, {
                      children: [
                        u.jsx(r("WDSText.react"), {
                          type: "Body3",
                          colorName: "contentDeemphasized",
                          children: a,
                        }),
                        u.jsx(r("WDSText.react"), {
                          type: "Body2",
                          colorName: "contentDefault",
                          maxLines: 1,
                          children: f(c),
                        }),
                      ],
                    })
                  : u.jsx(r("WDSText.react"), {
                      type: "Body2",
                      colorName: "contentDeemphasized",
                      maxLines: 1,
                      children: l,
                    }),
            }),
          )),
          (t[7] = a),
          (t[8] = l),
          (t[9] = c),
          (t[10] = R))
        : (R = t[10]);
      var L;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = {
            className:
              "x6s0dn4 x11g6tue x1v8p93f x16stqrj x1ejq31n x1sy0etr x972fbf x1qhh985 xv5lvn5 x1o3jo1z xstzfhl x18oe1m7 x14e42zd x10w94by xt8t1vi x1xc408v x129tdwq x15urzxu xhslqc4 x1ypdohk x78zum5 xzpcc6d xl56j7k xexx8yu xyri2b x18d9i69 x1c1uobl x1xephfl x1nsvvxn",
          }),
          (t[11] = L))
        : (L = t[11]);
      var E;
      t[12] !== a
        ? ((E = s._(/*BTDS*/ "Edit {fieldLabel}", [s._param("fieldLabel", a)])),
          (t[12] = a),
          (t[13] = E))
        : (E = t[13]);
      var k;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = u.jsx(r("WDSIconIcEdit.react"), { width: 20, height: 20 })),
          (t[14] = k))
        : (k = t[14]);
      var I;
      t[15] !== E
        ? ((I = u.jsx(o("WAWebFlex.react").FlexItem, {
            align: "center",
            justify: "center",
            xstyle: p.editButtonContainer,
            children: u.jsx(
              "button",
              babelHelpers.extends({}, L, {
                onClick: h,
                "aria-label": E,
                children: k,
              }),
            ),
          })),
          (t[15] = E),
          (t[16] = I))
        : (I = t[16]);
      var T;
      t[17] !== I || t[18] !== v || t[19] !== R
        ? ((T = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            gap: 12,
            xstyle: p.row,
            children: [v, R, I],
          })),
          (t[17] = I),
          (t[18] = v),
          (t[19] = R),
          (t[20] = T))
        : (T = t[20]);
      var D;
      t[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = {
            className: "xqtp20y xg01cxk x6ikm8r x10wlt62 x10l6tqk xnalus7",
          }),
          (t[21] = D))
        : (D = t[21]);
      var x;
      t[22] !== c
        ? ((x = c != null ? _(c) : ""), (t[22] = c), (t[23] = x))
        : (x = t[23]);
      var $;
      t[24] !== C || t[25] !== x
        ? (($ = u.jsx(
            "input",
            babelHelpers.extends({}, D, {
              ref: d,
              type: "date",
              value: x,
              onChange: C,
              tabIndex: -1,
            }),
          )),
          (t[24] = C),
          (t[25] = x),
          (t[26] = $))
        : ($ = t[26]);
      var P;
      return (
        t[27] !== T || t[28] !== $
          ? ((P = u.jsxs(
              "div",
              babelHelpers.extends({ role: "group" }, b, { children: [T, $] }),
            )),
            (t[27] = T),
            (t[28] = $),
            (t[29] = P))
          : (P = t[29]),
        P
      );
    }
    l.default = g;
  },
  226,
);
