__d(
  "WAWebBaseShimmerComponents.react",
  ["react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = "x9hsi78-B",
      d = {
        background: { backgroundColor: "x4wrhlh", $$css: !0 },
        container: {
          position: "x1n2onr6",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
      },
      m = {
        container: {
          position: "x1n2onr6",
          borderStartStartRadius: "xbrszos",
          borderStartEndRadius: "xea3l6g",
          borderEndEndRadius: "x18isctg",
          borderEndStartRadius: "x2q3nzr",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          backgroundColor: "x4wrhlh",
          $$css: !0,
        },
      };
    function p(t) {
      var n = t.diameter,
        o = t.xstyle;
      return u.jsx("div", {
        className: (e || (e = r("stylex")))([d.container, d.background, o]),
        style: { height: n + "px", width: n + "px" },
        children: u.jsx("div", {
          className:
            "x1n8ec5w x11mqxog xvjg3zp x1esw782 xa4qsjk x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x47corl",
        }),
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(t) {
      var n = t.height,
        o = t.width,
        a = t.xstyle,
        i = { height: n + "px", width: o === "100%" ? o : o + "px" };
      return u.jsx("div", {
        className: (e || (e = r("stylex")))([m.container, a]),
        style: i,
        children: u.jsx("div", {
          className:
            "x1n8ec5w x11mqxog xvjg3zp x1esw782 xa4qsjk x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x47corl",
        }),
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e, t) {
      return Array(t)
        .fill(null)
        .map(function (t, n) {
          return u.jsx(e, {}, n);
        });
    }
    ((l.CircleShimmer = p), (l.RectangleShimmer = _), (l.times = f));
  },
  98,
);
