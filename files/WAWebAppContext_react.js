__d(
  "WAWebAppContext.react",
  ["WALogger", "WAWebNavBarTypes", "react"],
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
      var t = e.activeNavBarItem,
        n = e.children,
        r = e.rightDrawerOpen,
        o = { rightDrawerOpen: r, activeNavBarItem: t };
      return u.jsx(f.Provider, { value: o, children: n });
    }
    g.displayName = g.name + " [from " + i.id + "]";
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
