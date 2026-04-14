__d(
  "useWAWebNavigatableList",
  ["WAWebNavigatableList", "WAWebSingleSelection", "react", "useWAWebListener"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState;
    function d(e) {
      var t = c(null),
        n = t[0],
        a = t[1],
        i = c(new (r("WAWebSingleSelection"))(e)),
        l = i[0],
        s = i[1];
      return (
        u(
          function () {
            s(new (r("WAWebSingleSelection"))(e));
          },
          [e],
        ),
        u(
          function () {
            a(l.getVal());
          },
          [e, l],
        ),
        o("useWAWebListener").useListener(l, "change", function (e) {
          var t = e.current;
          a(t);
        }),
        {
          activeItem: n,
          listSelection: l,
          NavigatableList: r("WAWebNavigatableList"),
        }
      );
    }
    l.useNavigatableList = d;
  },
  98,
);
