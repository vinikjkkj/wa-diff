__d(
  "WAWebRichResponseTableFragment.react",
  ["WAWebText.react", "react", "stylex"],
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
      var t = e.children,
        n = e.isLast;
      return u.jsx(
        "th",
        babelHelpers.extends(
          {},
          {
            0: {
              className:
                "x1yc453h x1xrf6ya x1nzty39 xscbp6u x12w63v0 x1h3rtpe xso031l x1q0q8m5 x120ee7l",
            },
            1: {
              className:
                "x1yc453h x1xrf6ya x1nzty39 xscbp6u x12w63v0 x1h3rtpe xso031l x1q0q8m5 x120ee7l x1lun4ml x18b5jzi xbogo7e",
            },
          }[!n << 0],
          {
            children: u.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, {
              color: "primary",
              children: t,
            }),
          },
        ),
      );
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.children,
        n = e.isLast;
      return u.jsx(
        "td",
        babelHelpers.extends(
          {},
          {
            0: {
              className:
                "x1yc453h x1awj2ng x16ovd2e x1nzty39 x12xbjc7 x12w63v0 xso031l x1q0q8m5 x120ee7l",
            },
            1: {
              className:
                "x1yc453h x1awj2ng x16ovd2e x1nzty39 x12xbjc7 x12w63v0 xso031l x1q0q8m5 x120ee7l x1lun4ml x18b5jzi xbogo7e",
            },
          }[!n << 0],
          {
            children: u.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, {
              color: "primary",
              children: t,
            }),
          },
        ),
      );
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      return e > d ? c * e + "px" : "100%";
    }
    function h(t) {
      var n,
        o = t.fragment,
        a = o.table.find(function (e) {
          return e.isHeading === !0;
        }),
        i = o.table.filter(function (e) {
          return e.isHeading !== !0;
        }),
        l = (n = a == null ? void 0 : a.items.length) != null ? n : 0;
      return u.jsx("div", {
        className:
          "xh8yej3 x9f619 x1lliihq xyi3aci xwf5gio x1p453bz x1suzm8a x1280gxy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz xw2csxc",
        children: u.jsxs(
          "table",
          babelHelpers.extends(
            {},
            (e || (e = r("stylex"))).props(p.table(g(l))),
            {
              children: [
                u.jsx("thead", {
                  children:
                    a == null
                      ? void 0
                      : a.items.map(function (e, t) {
                          var n = t === a.items.length - 1;
                          return u.jsx(_, { isLast: n, children: e }, t);
                        }),
                }),
                u.jsx("tbody", {
                  children: i.map(function (e, t) {
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
                  }),
                }),
              ],
            },
          ),
        ),
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  98,
);
