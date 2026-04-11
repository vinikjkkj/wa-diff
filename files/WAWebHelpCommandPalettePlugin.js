__d(
  "WAWebHelpCommandPalettePlugin",
  [
    "WAWebCommandPaletteController",
    "WAWebDevOnlyBadge.react",
    "WAWebFlex.react",
    "WAWebLexicalWAWebMenu.react",
    "WAWebMenuItems.react",
    "WAWebToArray",
    "compactMap",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        trigger: {
          backgroundColor: "xyp3urf",
          color: "x14ug900",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          $$css: !0,
        },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.trigger,
        r;
      t[0] !== n
        ? ((r = o("WAWebToArray").toArray(n)), (t[0] = n), (t[1] = r))
        : (r = t[1]);
      var a = r,
        i;
      return (
        t[2] !== a[0]
          ? ((i = s.jsx(o("WAWebFlex.react").FlexRow, {
              justify: "center",
              align: "center",
              padding: 8,
              xstyle: u.trigger,
              children: a[0],
            })),
            (t[2] = a[0]),
            (t[3] = i))
          : (i = t[3]),
        i
      );
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.triggeredCommands,
        a = o("WAWebCommandPaletteController").useCommandPalette(),
        i;
      t[0] !== a
        ? ((i = function (t) {
            return t.doc != null
              ? s.jsx(
                  o("WAWebMenuItems.react").ActionMenuItem,
                  {
                    optionId: t.plugin.id,
                    detailRight: s.jsx(c, { trigger: t.trigger }),
                    primary:
                      t.doc.isDevOnly === !0
                        ? s.jsx(o("WAWebDevOnlyBadge.react").DevOnlyBadge, {
                            label: t.doc.name,
                          })
                        : t.doc.name,
                    secondary: t.doc.description,
                    onSelect: function () {
                      return a.replaceStack(t.plugin);
                    },
                  },
                  t.plugin.id,
                )
              : null;
          }),
          (t[0] = a),
          (t[1] = i))
        : (i = t[1]);
      var l;
      t[2] !== i || t[3] !== n
        ? ((l = r("compactMap")(n, i)), (t[2] = i), (t[3] = n), (t[4] = l))
        : (l = t[4]);
      var u;
      return (
        t[5] !== l
          ? ((u = s.jsx(o("WAWebLexicalWAWebMenu.react").LexicalWAWebMenu, {
              children: l,
            })),
            (t[5] = l),
            (t[6] = u))
          : (u = t[6]),
        u
      );
    }
    function m(e) {
      return {
        plugin: {
          id: "HelpCommandPalettePlugin",
          placeholder: "Search extra command palette functionality",
          shortName: "?",
          Component: function () {
            return s.jsx(d, { triggeredCommands: e });
          },
        },
        trigger: ["/?", "/help"],
        doc: {
          name: "Help",
          description: "Discover all of the things the Command Palette can do",
        },
      };
    }
    l.buildHelpCommand = m;
  },
  98,
);
