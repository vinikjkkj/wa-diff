__d(
  "WAWebSagaMessageMarker.react",
  ["fbt", "WDSIconWdsIcAiFilled.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        icon: { verticalAlign: "xxymvpz", $$css: !0 },
        marginEnd2: { marginInlineEnd: "x16q7b9a", $$css: !0 },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.height,
        a = e.width,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = u.jsx("span", { children: s._(/*BTDS*/ "AI") })), (t[0] = i))
        : (i = t[0]);
      var l;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = [c.icon, c.marginEnd2]), (t[1] = l))
        : (l = t[1]);
      var d;
      return (
        t[2] !== n || t[3] !== a
          ? ((d = u.jsxs(u.Fragment, {
              children: [
                i,
                u.jsx(r("WDSIconWdsIcAiFilled.react"), {
                  xstyle: l,
                  displayInline: !0,
                  width: a,
                  height: n,
                }),
              ],
            })),
            (t[2] = n),
            (t[3] = a),
            (t[4] = d))
          : (d = t[4]),
        d
      );
    }
    l.default = d;
  },
  226,
);
