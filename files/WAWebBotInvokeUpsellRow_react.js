__d(
  "WAWebBotInvokeUpsellRow.react",
  [
    "fbt",
    "WAWebBotProfileCollection",
    "WAWebDefaultUserColorIcon.react",
    "WAWebDetailImage.react",
    "WAWebUISpacing",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        item: { flexShrink: "xs83m0k", flexBasis: "x1r8uery", $$css: !0 },
        text: {
          flexGrow: "x1c4vz4f",
          flexBasis: "x19l4sor",
          display: "x78zum5",
          alignItems: "x1cy8zhl",
          fontSize: "x1nxh6w3",
          $$css: !0,
        },
        subtext: {
          flexGrow: "x1iyjqo2",
          display: "x78zum5",
          alignItems: "x1cy8zhl",
          color: "xib33u6",
          fontSize: "x1pg5gke",
          $$css: !0,
        },
      };
    function m(t) {
      var n,
        a = t.onMouseDown,
        i = t.onMouseEnter,
        l = t.onMouseUp,
        u = t.selected,
        m = o("WAWebBotProfileCollection").BotProfileCollection.getDefaultBot();
      return c.jsxs(
        "div",
        babelHelpers.extends(
          {},
          {
            0: {
              className:
                "x78zum5 x1qughib x6s0dn4 x889kno xl3akx1 x1a8lsjc x11ahuha",
            },
            1: {
              className:
                "x78zum5 x1qughib x6s0dn4 x889kno xl3akx1 x1a8lsjc x11ahuha x1ru9bj0",
            },
          }[(u === !0) << 0],
          {
            "data-testid": void 0,
            onMouseDown: a,
            onMouseUp: l,
            onMouseEnter: i,
            children: [
              c.jsx("div", {
                className: "xs83m0k x1c4vz4f x1sx8fc2",
                children:
                  m != null
                    ? c.jsx(o("WAWebDetailImage.react").DetailImage, {
                        id: m.id,
                        size: 32,
                      })
                    : c.jsx(
                        o("WAWebDefaultUserColorIcon.react")
                          .DefaultUserColorIcon,
                        { width: 32, height: 32 },
                      ),
              }),
              c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(
                    d.item,
                    d.text,
                    o("WAWebUISpacing").uiMargin.horiz10,
                  ),
                  {
                    children:
                      (n = m == null ? void 0 : m.name) != null
                        ? n
                        : s._(/*BTDS*/ "Meta AI"),
                  },
                ),
              ),
              c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  e.props(
                    d.item,
                    d.subtext,
                    o("WAWebUISpacing").uiMargin.horiz10,
                  ),
                  {
                    children: s._(
                      /*BTDS*/ "You can mention the assistant to ask a question",
                    ),
                  },
                ),
              ),
            ],
          },
        ),
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
