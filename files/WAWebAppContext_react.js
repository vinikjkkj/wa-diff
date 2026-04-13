__d(
  "WAWebAppContext.react",
  ["WALogger", "WAWebNavBarTypes", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.createContext,
      m = c.useContext,
      p = c.useEffect,
      _ = {
        rightDrawerOpen: !1,
        activeNavBarItem: o("WAWebNavBarTypes").NavBarItems.Chats,
      },
      f = d(_);
    function g(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.activeNavBarItem,
        r = e.children,
        a = e.rightDrawerOpen,
        i;
      t[0] !== n || t[1] !== a
        ? ((i = { rightDrawerOpen: a, activeNavBarItem: n }),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i))
        : (i = t[2]);
      var l = i,
        s;
      return (
        t[3] !== r || t[4] !== l
          ? ((s = u.jsx(f.Provider, { value: l, children: r })),
            (t[3] = r),
            (t[4] = l),
            (t[5] = s))
          : (s = t[5]),
        s
      );
    }
    function h() {
      var t = m(f);
      return (
        p(function () {
          t === _ &&
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[AppContext] useAppContext requires AppContext provider",
                ])),
            );
        }, []),
        t
      );
    }
    ((l.AppContextProvider = g), (l.useAppContext = h));
  },
  98,
);
