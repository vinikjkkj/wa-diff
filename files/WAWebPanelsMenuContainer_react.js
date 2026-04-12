__d(
  "WAWebPanelsMenuContainer.react",
  [
    "$InternalEnum",
    "WAWebPanelsMenuContainerStyles",
    "WAWebStopEvent",
    "react",
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
      var n = t.children,
        a = t.role,
        i = t.theme;
      return u.jsx(
        "div",
        babelHelpers.extends(
          { role: a },
          (e || (e = r("stylex"))).props(
            o("WAWebPanelsMenuContainerStyles").panelsMenuContainerStyles
              .container,
            i === c.REACTIONS_CONTAINER &&
              o("WAWebPanelsMenuContainerStyles").panelsMenuContainerStyles
                .reactionsContainer,
            i === c.TAB_MARKER_SEPARATOR &&
              o("WAWebPanelsMenuContainerStyles").panelsMenuContainerStyles
                .menuTabMakerReactions,
            i === c.SHADOW &&
              o("WAWebPanelsMenuContainerStyles").panelsMenuContainerStyles
                .shadow,
          ),
          { onMouseDown: o("WAWebStopEvent").stopPropagation, children: n },
        ),
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"),
      (l.MenuContainerTheme = c),
      (l.MenuContainer = d));
  },
  98,
);
