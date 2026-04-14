__d(
  "WAWebDeveloperMenuGroupAbPropsDrawer.react",
  [
    "fbt",
    "invariant",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebConfirmPopup.react",
    "WAWebDebug",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDropdownV2.react",
    "WAWebFlex.react",
    "WAWebGroupABPropSearchModel",
    "WAWebLexicalWAWebMenu.react",
    "WAWebMenuIcon.react",
    "WAWebMenuItems.react",
    "WAWebModalManager",
    "WAWebRefreshIcon.react",
    "WAWebRichTextField.react",
    "WAWebSearchInput",
    "WAWebSelect.react",
    "WAWebSelectMenuItem.react",
    "WAWebUnstyledButton.react",
    "WAWebXIcon.react",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebListener",
    "useWAWebSearchModel",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e = ["ref"],
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useCallback,
      _ = m.useEffect,
      f = m.useRef,
      g = m.useState;
    function h(e) {
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
                      t.data.type === "bool" || String(t.data.value) === ""
                        ? 42
                        : 58,
                    data: { abProp: t.data, isHeading: !1 },
                  };
                return (t.data.overridden ? n.push(o) : r.push(o), [n, r]);
              },
              [[], []],
            )) != null
        ? t
        : [[], []];
    }
    function y(e) {
      var t = e.name,
        n = e.onChange,
        r = e.type,
        a = e.value,
        i = g(a),
        l = i[0],
        s = i[1],
        u = g(null),
        c = u[0],
        m = u[1],
        p = function () {
          (n(l), o("WAWebModalManager").ModalManager.close());
        };
      return d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        title: 'Edit "' + t + '"',
        onOK: p,
        children: d.jsx(o("WAWebRichTextField.react").RichTextField, {
          value: String(l),
          placeholder: "Enter a new value",
          onEnter: p,
          managed: !0,
          selectOnMount: !0,
          maxVisibleLines: 8,
          error: c,
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
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = e.abProp,
        n = e.onEdit,
        r = e.onToggle,
        a = t.name;
      return t.type === "bool"
        ? d.jsx(
            o("WAWebMenuItems.react").SwitchMenuItem,
            {
              optionId: t.name,
              initialState: !!t.value,
              primary: a,
              onSelect: function (n) {
                r == null || r(t, n);
              },
            },
            t.name + "-" + String(t.value),
          )
        : d.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
            optionId: t.name,
            primary: a,
            secondary: String(t.value),
            onSelect: function () {
              n == null || n(t);
            },
          });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(t) {
      var a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.onBack,
        c = p(function () {
          return o("WAWebChatCollection")
            .ChatCollection.filter(function (e) {
              return o("WAWebChatGetters").getIsGroup(e);
            })
            .map(function (e) {
              return { jid: e.id.toString(), name: e.formattedTitle };
            })
            .sort(function (e, t) {
              return e.name.localeCompare(t.name);
            });
        }, []),
        m = g(c),
        b = m[0],
        v = m[1];
      o("useWAWebListener").useListener(
        o("WAWebChatCollection").ChatCollection,
        "add remove reset",
        function () {
          v(c());
        },
      );
      var S = g(null),
        R = S[0],
        L = S[1],
        E = o("useWAWebSearchModel").useSearchModel(function () {
          return new (o("WAWebGroupABPropSearchModel").GroupABPropSearch)();
        }),
        k = E.query,
        I = E.results,
        T = E.searchInstance,
        D = g(h),
        x = D[0],
        $ = x[0],
        P = x[1],
        N = D[1];
      _(
        function () {
          N(h(I == null ? void 0 : I.results));
        },
        [I],
      );
      var M = function (t) {
          (L(t), T.updateGroupJid(t), k(""));
        },
        w = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              (R != null || u(0, 136815),
                yield r("WAWebDebug").overrideGroupABProp(R, e.name, t),
                yield F());
            },
          );
          return function (n, r) {
            return e.apply(this, arguments);
          };
        })(),
        A = function (t) {
          R != null || u(0, 136815);
          var e = t.type;
          e !== "bool" || u(0, 74916);
          var a = R;
          o("WAWebModalManager").ModalManager.open(
            d.jsx(y, {
              name: t.name,
              value: String(t.value),
              type: e,
              onChange: (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    (yield r("WAWebDebug").overrideGroupABProp(a, t.name, e),
                      yield F());
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            }),
          );
        },
        F = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e;
            (T.preloadData(),
              yield k(
                (e = I == null ? void 0 : I.query.searchText) != null ? e : "",
              ));
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        O = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            (R != null || u(0, 136815),
              yield r("WAWebDebug").resetGroupABProp(R, e.name),
              yield F());
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        B = [];
      ($.length &&
        B.push.apply(
          B,
          [
            {
              itemKey: "#HEADING_OVERRIDDEN",
              height: 56,
              data: { title: "Overridden Group AB Props", isHeading: !0 },
              static: !0,
            },
          ].concat($),
        ),
        P.length &&
          B.push.apply(
            B,
            [
              {
                itemKey: "#HEADING_ALL",
                height: 56,
                data: { title: "Available Group AB Props", isHeading: !0 },
                static: !0,
              },
            ].concat(P),
          ));
      var W = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            R != null && (yield r("WAWebDebug").syncGroupABProps(R), yield F());
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        q = f(null),
        U = d.jsx(o("WAWebFlex.react").FlexItem, {
          marginStart: 8,
          children: d.jsxs(r("WAWebUnstyledButton.react"), {
            ref: q,
            children: [
              d.jsx(o("WAWebMenuIcon.react").MenuIcon, {}),
              d.jsx(o("WAWebDropdownV2.react").DropdownV2Menu, {
                material: !0,
                target: q,
                position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
                alignment: o("WAWebDropdownV2.react").PopoverAlignment.End,
                children: d.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
                  optionId: "fetch",
                  detailLeft: d.jsx(
                    o("WAWebRefreshIcon.react").RefreshIcon,
                    {},
                  ),
                  secondary: "Fetch all from server",
                  onSelect: W,
                }),
              }),
            ],
          }),
        }),
        V = d.jsx(o("WAWebFlex.react").FlexColumn, {
          paddingTop: 8,
          paddingBottom: 8,
          paddingStart: 16,
          paddingEnd: 16,
          children: d.jsx(o("WAWebSelect.react").Select, {
            width: 300,
            menuMaxHeight: 300,
            ariaRoleDescription: "",
            defaultLabel: s._(/*BTDS*/ "Select a group"),
            includeSearchInput: !0,
            onChange: M,
            children: b.map(function (e) {
              return d.jsx(
                o("WAWebSelectMenuItem.react").SelectMenuItem,
                {
                  optionId: e.jid,
                  primary: e.name,
                  secondary: e.jid,
                  searchCriteria: e.name + " " + e.jid,
                },
                e.jid,
              );
            }),
          }),
        });
      return d.jsxs(r("WAWebDrawer.react"), {
        ref: a,
        theme: "settings",
        testid: void 0,
        children: [
          d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: s._(/*BTDS*/ "Group AB Props"),
            onBack: l,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          }),
          d.jsxs(r("WAWebDrawerBody.react"), {
            children: [
              V,
              R != null
                ? d.jsx(o("WAWebSearchInput").DrawerSearchInput, {
                    focusOnMount: !1,
                    placeholder: "Search Group AB Props",
                    detailRight: U,
                    onSearch: k,
                    children: d.jsx(
                      o("WAWebLexicalWAWebMenu.react")
                        .LexicalWAWebPerformantMenu,
                      {
                        material: !0,
                        colorScheme: "lightest",
                        data: B,
                        renderItem: function (t) {
                          if (t.data.isHeading)
                            return d.jsx(o("WAWebFlex.react").FlexColumn, {
                              paddingTop: 16,
                              children: d.jsx(
                                o("WAWebMenuItems.react").MenuHeading,
                                { children: t.data.title },
                              ),
                            });
                          var e = t.data.abProp;
                          return d.jsxs(o("WAWebFlex.react").FlexRow, {
                            align: "center",
                            children: [
                              d.jsx(o("WAWebFlex.react").FlexItem, {
                                isFlexContainer: !0,
                                grow: 1,
                                children: d.jsx(
                                  C,
                                  { abProp: e, onToggle: w, onEdit: A },
                                  e.name,
                                ),
                              }),
                              e.overridden
                                ? d.jsx(r("WAWebUnstyledButton.react"), {
                                    title: "Reset",
                                    onClick: function () {
                                      return O(e);
                                    },
                                    children: d.jsx(
                                      o("WAWebXIcon.react").XIcon,
                                      {},
                                    ),
                                  })
                                : null,
                            ],
                          });
                        },
                      },
                    ),
                  })
                : null,
            ],
          }),
        ],
      });
    }
    ((b.displayName = b.name + " [from " + i.id + "]"), (l.default = b));
  },
  226,
);
