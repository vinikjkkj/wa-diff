__d(
  "WAWebPanelsMenuContainer.react",
  [
    "$InternalEnum",
    "WAWebPanelsMenuContainerStyles",
    "WAWebStopEvent",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = n("$InternalEnum").Mirrored([
        "REACTIONS_CONTAINER",
        "TAB_MARKER_SEPARATOR",
        "SHADOW",
      ]);
    function d(t) {
      var n = o("react-compiler-runtime").c(6),
        a = t.children,
        i = t.role,
        l = t.theme,
        s;
      n[0] !== l
        ? ((s = (e || (e = r("stylex"))).props(
            o("WAWebPanelsMenuContainerStyles").panelsMenuContainerStyles
              .container,
            l === c.REACTIONS_CONTAINER &&
              o("WAWebPanelsMenuContainerStyles").panelsMenuContainerStyles
                .reactionsContainer,
            l === c.TAB_MARKER_SEPARATOR &&
              o("WAWebPanelsMenuContainerStyles").panelsMenuContainerStyles
                .menuTabMakerReactions,
            l === c.SHADOW &&
              o("WAWebPanelsMenuContainerStyles").panelsMenuContainerStyles
                .shadow,
          )),
          (n[0] = l),
          (n[1] = s))
        : (s = n[1]);
      var d;
      return (
        n[2] !== a || n[3] !== i || n[4] !== s
          ? ((d = u.jsx(
              "div",
              babelHelpers.extends({ role: i }, s, {
                onMouseDown: o("WAWebStopEvent").stopPropagation,
                children: a,
              }),
            )),
            (n[2] = a),
            (n[3] = i),
            (n[4] = s),
            (n[5] = d))
          : (d = n[5]),
        d
      );
    }
    ((l.MenuContainerTheme = c), (l.MenuContainer = d));
  },
  98,
);
