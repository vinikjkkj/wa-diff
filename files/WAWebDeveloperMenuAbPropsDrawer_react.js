__d(
  "WAWebDeveloperMenuAbPropsDrawer.react",
  [
    "invariant",
    "WAWebABPropCommandPalettePlugin",
    "WAWebABPropSearchModel",
    "WAWebConfirmPopup.react",
    "WAWebDebug",
    "WAWebDrawer.react",
    "WAWebDrawerHeader.react",
    "WAWebDropdownV2.react",
    "WAWebFlex.react",
    "WAWebLexicalWAWebMenu.react",
    "WAWebMenuIcon.react",
    "WAWebMenuItems.react",
    "WAWebModalManager",
    "WAWebRefreshIcon.react",
    "WAWebRichTextField.react",
    "WAWebSearchInput",
    "WAWebSettingsFBT",
    "WAWebUnstyledButton.react",
    "WAWebXIcon.react",
    "asyncToGeneratorRuntime",
    "cr:21223",
    "react",
    "useWAWebSearchModel",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useRef,
      _ = d.useState;
    function f(e) {
      var t;
      return (t =
        e == null
          ? void 0
          : e.reduce(
              function (e, t) {
                var n = e[0],
                  r = e[1],
                  o = {
                    itemKey: t.id,
                    height:
                      t.data.type === "bool" || t.data.value === "" ? 42 : 58,
                    data: { abProp: t.data, isHeading: !1 },
                  };
                return (t.data.overridden ? n.push(o) : r.push(o), [n, r]);
              },
              [[], []],
            )) != null
        ? t
        : [[], []];
    }
    function g(e) {
      var t = e.name,
        n = e.onChange,
        r = e.type,
        a = e.value,
        i = _(a),
        l = i[0],
        s = i[1],
        u = _(null),
        d = u[0],
        m = u[1],
        p = function () {
          (n(l), o("WAWebModalManager").ModalManager.close());
        };
      return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: { surface: "unknown", viewName: "dev-ab-props" },
        title: 'Edit "' + t + '"',
        onOK: p,
        children: c.jsx(o("WAWebRichTextField.react").RichTextField, {
          value: String(l),
          placeholder: "Enter a new value",
          onEnter: p,
          managed: !0,
          selectOnMount: !0,
          maxVisibleLines: 8,
          error: d,
          onChange: function (t) {
            var e = t.text;
            s(e);
            var n = !Number.isNaN(Number(e));
            if (r === "int" && (!n || Number(e) % 1 !== 0)) {
              m("This value must be an int");
              return;
            } else if (r === "float" && !n) {
              m("This value must be a float");
              return;
            }
            m("");
          },
        }),
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(t) {
      var a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.onBack,
        u = o("useWAWebSearchModel").useSearchModel(function () {
          return new (o("WAWebABPropSearchModel").ABPropSearch)();
        }),
        d = u.query,
        h = u.results,
        y = u.searchInstance,
        C = _(f),
        b = C[0],
        v = b[0],
        S = b[1],
        R = C[1];
      m(
        function () {
          R(f(h == null ? void 0 : h.results));
        },
        [h],
      );
      var L = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              (yield r("WAWebDebug").overrideABProp(e.name, t), yield k());
            },
          );
          return function (n, r) {
            return e.apply(this, arguments);
          };
        })(),
        E = function (t) {
          var e = t.type;
          (e !== "bool" || s(0, 74916),
            o("WAWebModalManager").ModalManager.open(
              c.jsx(g, {
                name: t.name,
                value: String(t.value),
                type: e,
                onChange: (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      (yield r("WAWebDebug").overrideABProp(t.name, e),
                        yield k());
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              }),
            ));
        },
        k = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e;
            (y.preloadData(),
              yield d(
                (e = h == null ? void 0 : h.query.searchText) != null ? e : "",
              ));
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        I = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            (yield r("WAWebDebug").resetABProp(e.name), yield k());
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        T = [];
      (v.length &&
        T.push.apply(
          T,
          [
            {
              itemKey: "#HEADING_OVERRIDDEN",
              height: 56,
              data: { title: "Overridden AB Props", isHeading: !0 },
              static: !0,
            },
          ].concat(v),
        ),
        S.length &&
          T.push.apply(
            T,
            [
              {
                itemKey: "#HEADING_ALL",
                height: 56,
                data: { title: "Available AB Props", isHeading: !0 },
                static: !0,
              },
            ].concat(S),
          ));
      var D = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (yield r("WAWebDebug").syncABProps(!1), yield k());
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        x = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e,
              t =
                n("cr:21223") == null
                  ? void 0
                  : n("cr:21223").getABPropDebugLog(),
              r = window.open("", "_blank");
            (r.document.write(
              (e = t == null ? void 0 : t.replaceAll("\n", "<br />")) != null
                ? e
                : "[empty]",
            ),
              r.document.close());
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        $ = p(null),
        P = c.jsx(o("WAWebFlex.react").FlexItem, {
          marginStart: 8,
          children: c.jsxs(r("WAWebUnstyledButton.react"), {
            ref: $,
            children: [
              c.jsx(o("WAWebMenuIcon.react").MenuIcon, {}),
              c.jsxs(o("WAWebDropdownV2.react").DropdownV2Menu, {
                material: !0,
                target: $,
                position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
                alignment: o("WAWebDropdownV2.react").PopoverAlignment.End,
                children: [
                  c.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
                    optionId: "fetch",
                    detailLeft: c.jsx(
                      o("WAWebRefreshIcon.react").RefreshIcon,
                      {},
                    ),
                    secondary: "Fetch all from server",
                    onSelect: D,
                  }),
                  c.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
                    optionId: "changelog",
                    secondary: "Show ABProp Changelog",
                    onSelect: x,
                  }),
                ],
              }),
            ],
          }),
        });
      return c.jsxs(r("WAWebDrawer.react"), {
        ref: a,
        theme: "settings",
        testid: void 0,
        children: [
          c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: o("WAWebSettingsFBT").developerABPropsTitle(),
            onBack: l,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          }),
          c.jsx(o("WAWebSearchInput").DrawerSearchInput, {
            focusOnMount: !0,
            placeholder: "Search AB Props",
            detailRight: P,
            onSearch: d,
            children: c.jsx(
              o("WAWebLexicalWAWebMenu.react").LexicalWAWebPerformantMenu,
              {
                material: !0,
                colorScheme: "lightest",
                data: T,
                renderItem: function (t) {
                  var e;
                  if (t.data.isHeading)
                    return c.jsx(o("WAWebFlex.react").FlexColumn, {
                      paddingTop: 16,
                      children: c.jsx(o("WAWebMenuItems.react").MenuHeading, {
                        children: t.data.title,
                      }),
                    });
                  var n = t.data.abProp;
                  return c.jsxs(o("WAWebFlex.react").FlexRow, {
                    align: "center",
                    children: [
                      c.jsx(o("WAWebFlex.react").FlexItem, {
                        isFlexContainer: !0,
                        grow: 1,
                        children: c.jsx(
                          o("WAWebABPropCommandPalettePlugin").ABPropMenuItem,
                          {
                            abProp: n,
                            onToggle: L,
                            onEdit: E,
                            highlightText:
                              (e = h == null ? void 0 : h.query.searchText) !=
                              null
                                ? e
                                : "",
                          },
                          n.name,
                        ),
                      }),
                      n.overridden
                        ? c.jsx(r("WAWebUnstyledButton.react"), {
                            title: "Reset",
                            onClick: function () {
                              return I(n);
                            },
                            children: c.jsx(o("WAWebXIcon.react").XIcon, {}),
                          })
                        : null,
                    ],
                  });
                },
              },
            ),
          }),
        ],
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  98,
);
