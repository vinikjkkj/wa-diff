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
      var t = e.trigger,
        n = o("WAWebToArray").toArray(t);
      return s.jsx(o("WAWebFlex.react").FlexRow, {
        justify: "center",
        align: "center",
        padding: 8,
        xstyle: u.trigger,
        children: n[0],
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      var t = e.triggeredCommands,
        n = o("WAWebCommandPaletteController").useCommandPalette();
      return s.jsx(o("WAWebLexicalWAWebMenu.react").LexicalWAWebMenu, {
        children: r("compactMap")(t, function (e) {
          return e.doc != null
            ? s.jsx(
                o("WAWebMenuItems.react").ActionMenuItem,
                {
                  optionId: e.plugin.id,
                  detailRight: s.jsx(c, { trigger: e.trigger }),
                  primary:
                    e.doc.isDevOnly === !0
                      ? s.jsx(o("WAWebDevOnlyBadge.react").DevOnlyBadge, {
                          label: e.doc.name,
                        })
                      : e.doc.name,
                  secondary: e.doc.description,
                  onSelect: function () {
                    return n.replaceStack(e.plugin);
                  },
                },
                e.plugin.id,
              )
            : null;
        }),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
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
