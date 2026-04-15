__d(
  "WAWebRichResponseTableFragment.react",
  ["WAWebText.react", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = 150,
      d = 4,
      m = {
        boxSizing: "x9f619",
        borderCollapse: "x1mwwwfo",
        tableLayout: "x140o2bo",
        $$css: !0,
      },
      p = {
        table: function (t) {
          return [
            m,
            { width: t != null ? "x5lhr3w" : t, $$css: !0 },
            {
              "--x-width": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t),
            },
          ];
        },
      };
    function _(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.children,
        r = e.isLast,
        a;
      t[0] !== r
        ? ((a = {
            0: {
              className:
                "x1yc453h x1xrf6ya x1nzty39 xscbp6u x12w63v0 x1h3rtpe xso031l x1q0q8m5 x120ee7l",
            },
            1: {
              className:
                "x1yc453h x1xrf6ya x1nzty39 xscbp6u x12w63v0 x1h3rtpe xso031l x1q0q8m5 x120ee7l x1lun4ml x18b5jzi xbogo7e",
            },
          }[!r << 0]),
          (t[0] = r),
          (t[1] = a))
        : (a = t[1]);
      var i;
      t[2] !== n
        ? ((i = u.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, {
            color: "primary",
            children: n,
          })),
          (t[2] = n),
          (t[3] = i))
        : (i = t[3]);
      var l;
      return (
        t[4] !== a || t[5] !== i
          ? ((l = u.jsx("th", babelHelpers.extends({}, a, { children: i }))),
            (t[4] = a),
            (t[5] = i),
            (t[6] = l))
          : (l = t[6]),
        l
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.children,
        r = e.isLast,
        a;
      t[0] !== r
        ? ((a = {
            0: {
              className:
                "x1yc453h x1awj2ng x16ovd2e x1nzty39 x12xbjc7 x12w63v0 xso031l x1q0q8m5 x120ee7l",
            },
            1: {
              className:
                "x1yc453h x1awj2ng x16ovd2e x1nzty39 x12xbjc7 x12w63v0 xso031l x1q0q8m5 x120ee7l x1lun4ml x18b5jzi xbogo7e",
            },
          }[!r << 0]),
          (t[0] = r),
          (t[1] = a))
        : (a = t[1]);
      var i;
      t[2] !== n
        ? ((i = u.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, {
            color: "primary",
            children: n,
          })),
          (t[2] = n),
          (t[3] = i))
        : (i = t[3]);
      var l;
      return (
        t[4] !== a || t[5] !== i
          ? ((l = u.jsx("td", babelHelpers.extends({}, a, { children: i }))),
            (t[4] = a),
            (t[5] = i),
            (t[6] = l))
          : (l = t[6]),
        l
      );
    }
    function g(e) {
      return e > d ? c * e + "px" : "100%";
    }
    function h(t) {
      var n = o("react-compiler-runtime").c(17),
        a = t.fragment,
        i,
        l,
        s,
        c;
      if (n[0] !== a.table) {
        var d,
          m = a.table.find(b),
          f = a.table.filter(C),
          h = (d = m == null ? void 0 : m.items.length) != null ? d : 0;
        (n[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((c =
              "xh8yej3 x9f619 x1lliihq xyi3aci xwf5gio x1p453bz x1suzm8a x1280gxy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz xw2csxc"),
            (n[5] = c))
          : (c = n[5]),
          (l = (e || (e = r("stylex"))).props(p.table(g(h)))));
        var v =
          m == null
            ? void 0
            : m.items.map(function (e, t) {
                var n = t === m.items.length - 1;
                return u.jsx(_, { isLast: n, children: e }, t);
              });
        (n[6] !== v
          ? ((s = u.jsx("thead", { children: v })), (n[6] = v), (n[7] = s))
          : (s = n[7]),
          (i = f.map(y)),
          (n[0] = a.table),
          (n[1] = i),
          (n[2] = l),
          (n[3] = s),
          (n[4] = c));
      } else ((i = n[1]), (l = n[2]), (s = n[3]), (c = n[4]));
      var S;
      n[8] !== i
        ? ((S = u.jsx("tbody", { children: i })), (n[8] = i), (n[9] = S))
        : (S = n[9]);
      var R;
      n[10] !== l || n[11] !== s || n[12] !== S
        ? ((R = u.jsxs(
            "table",
            babelHelpers.extends({}, l, { children: [s, S] }),
          )),
          (n[10] = l),
          (n[11] = s),
          (n[12] = S),
          (n[13] = R))
        : (R = n[13]);
      var L;
      return (
        n[14] !== c || n[15] !== R
          ? ((L = u.jsx("div", { className: c, children: R })),
            (n[14] = c),
            (n[15] = R),
            (n[16] = L))
          : (L = n[16]),
        L
      );
    }
    function y(e, t) {
      return u.jsx(
        "tr",
        {
          children: e.items.map(function (t, n) {
            var r = n === e.items.length - 1;
            return u.jsx(f, { isLast: r, children: t }, n);
          }),
        },
        t,
      );
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      return e.isHeading !== !0;
    }
    function b(e) {
      return e.isHeading === !0;
    }
    l.default = h;
  },
  98,
);
