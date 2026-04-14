__d(
  "WAWebBar.react",
  ["react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        barContainer: {
          width: "xh8yej3",
          height: "xdk7pt",
          borderStartStartRadius: "xbrszos",
          borderStartEndRadius: "xea3l6g",
          borderEndEndRadius: "x18isctg",
          borderEndStartRadius: "x2q3nzr",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        bar: {
          height: "x5yr21d",
          borderStartStartRadius: "xbrszos",
          borderStartEndRadius: "xea3l6g",
          borderEndEndRadius: "x18isctg",
          borderEndStartRadius: "x2q3nzr",
          transitionProperty: "xx99ppg",
          transitionDuration: "x1d8287x",
          $$css: !0,
        },
        marginTop4: { marginTop: "xav9cv8", $$css: !0 },
      };
    function d(t) {
      var n = t.barXStyle,
        o = t.containerXStyle,
        a = t.percentage,
        i = t.ref,
        l = a * 100 + "%";
      return u.jsx(
        "div",
        babelHelpers.extends(
          { ref: i },
          (e || (e = r("stylex"))).props(c.barContainer, c.marginTop4, o),
          {
            children: u.jsx("div", {
              className: e(c.bar, n),
              style: { width: l },
            }),
          },
        ),
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
