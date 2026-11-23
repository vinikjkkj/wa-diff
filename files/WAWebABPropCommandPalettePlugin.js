__d(
  "WAWebABPropCommandPalettePlugin",
  [
    "WAWebABPropSearchModel",
    "WAWebCellV2.react",
    "WAWebCommandPaletteController",
    "WAWebCopiableText.react",
    "WAWebDebug",
    "WAWebFlex.react",
    "WAWebHighlightedText.react",
    "WAWebLexicalMenuPaginationFooter",
    "WAWebLexicalWAWebMenu.react",
    "WAWebMenuItems.react",
    "WAWebNoop",
    "WAWebText.react",
    "WDSIconIcEdit.react",
    "WDSIconIcRefresh.react",
    "WDSIconIcScience.react",
    "react",
    "useWAWebABPropConfigValue",
    "useWAWebLexicalSearchModelQuery",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.abProp,
        n = e.highlightText,
        a = e.onEdit,
        i = e.onSelect,
        l = e.onToggle,
        u = o("useWAWebABPropConfigValue").useABPropConfigValue(t.name),
        c = s.jsx(r("WAWebCopiableText.react"), {
          text: t.name,
          showOnHover: !0,
          children: n
            ? s.jsx(o("WAWebHighlightedText.react").HighlightedStreaks, {
                highlightText: n,
                sourceText: t.name,
              })
            : t.name,
        });
      return t.type === "bool"
        ? s.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
            optionId: t.name,
            initialState: !!u,
            primary: c,
            onSelect: function (n) {
              (i == null || i(t), l == null || l(t, n));
            },
          })
        : s.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
            optionId: t.name,
            primary: c,
            secondary: String(u),
            onSelect: function () {
              (i == null || i(t), a == null || a(t));
            },
            detailRight: s.jsx(r("WDSIconIcEdit.react"), {}),
          });
    }
    u.displayName = u.name + " [from " + i.id + "]";
    function c(e) {
      var t = e.abProp,
        n = o("WAWebCommandPaletteController").useCommandPalette(),
        a = async function (o) {
          (await r("WAWebDebug").overrideABProp(t.name, o), n.popPlugin());
        },
        i = async function () {
          (await r("WAWebDebug").resetABProp(t.name), n.popPlugin());
        };
      return s.jsx(o("WAWebLexicalWAWebMenu.react").LexicalWAWebMenu, {
        children: s.jsxs(o("WAWebFlex.react").FlexColumn, {
          padding: [0, 16, 16, 16],
          children: [
            s.jsx(r("WAWebCellV2.react"), {
              primary: s.jsx(o("WAWebText.react").WAWebTextTitle, {
                children: t.name,
              }),
              secondary: t.value,
              interactive: !1,
              colorScheme: "lighter",
              size: "medium",
            }),
            s.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
              optionId: "edit",
              primary: "New Value",
              secondary:
                n.input || "Type your new value into the command palette",
              detailLeft: s.jsx(r("WDSIconIcEdit.react"), {}),
              onSelect: function () {
                return a(n.input);
              },
            }),
            t.overridden === !0 &&
              s.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
                optionId: "reset",
                primary: "Reset",
                secondary: s.jsxs("span", {
                  children: ["Set the value back to ", t.originalValue],
                }),
                detailLeft: s.jsx(r("WDSIconIcRefresh.react"), {
                  width: 24,
                  height: 24,
                }),
                onSelect: i,
              }),
          ],
        }),
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      var t = e.colorScheme,
        n = e.onEdit,
        a = e.onSelect,
        i = e.onToggle,
        l = o("useWAWebLexicalSearchModelQuery").useLexicalSearchModelQuery(
          function () {
            return new (o("WAWebABPropSearchModel").ABPropSearch)({
              maxPageLength: 8,
            });
          },
        ),
        c = l.next,
        d = l.previous,
        m = l.results;
      return m == null || m.results.length === 0
        ? null
        : s.jsxs(o("WAWebLexicalWAWebMenu.react").LexicalWAWebMenu, {
            colorScheme: t,
            children: [
              m.results.map(function (e) {
                return s.jsx(
                  u,
                  {
                    abProp: e.data,
                    onSelect: a,
                    onToggle: i,
                    onEdit: n,
                    highlightText: m.query.searchText,
                  },
                  e.id,
                );
              }),
              m.pagination != null &&
                s.jsx(r("WAWebLexicalMenuPaginationFooter"), {
                  page: m.pagination.page,
                  totalPages: m.pagination.totalPages,
                  onDown: m.pagination.next ? c : null,
                  onUp: m.pagination.previous ? d : null,
                }),
            ],
          });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m() {
      var e = o("WAWebCommandPaletteController").useCommandPalette(),
        t = function (n) {
          e.pushPlugin({
            id: "ABPropEditAction",
            placeholder: "Enter new value",
            shortName: n.name,
            forceMenuSelection: !0,
            Component: function () {
              return s.jsx(c, { abProp: n });
            },
          });
        },
        n = function (t, n) {
          r("WAWebDebug").overrideABProp(t.name, n).catch(r("WAWebNoop"));
        };
      return s.jsx(d, { onEdit: t, onToggle: n });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    var p = {
      plugin: {
        id: "ABPropCommandPaletteAction",
        placeholder: "Search AB Props",
        shortName: s.jsx(r("WDSIconIcScience.react"), {
          width: 16,
          height: 16,
        }),
        Component: m,
        restoreInputOnBack: !0,
      },
      trigger: "/ab",
      doc: {
        isDevOnly: !0,
        name: "AB Props",
        description: "Filter through and edit development AB Props",
      },
    };
    ((l.ABPropMenuItem = u), (l.ABPropPlugin = p));
  },
  98,
);
