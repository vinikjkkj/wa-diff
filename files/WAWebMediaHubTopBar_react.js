__d(
  "WAWebMediaHubTopBar.react",
  [
    "fbt",
    "WAWebCheckRefreshedIcon.react",
    "WAWebClickable.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebMediaHubContextProvider",
    "WAWebMediaHubLogger",
    "WAWebMediaHubSortIcon.react",
    "WAWebModalManager",
    "WAWebTabs.react",
    "WAWebUISpacing",
    "WAWebWamEnumActionCode",
    "WDSFlex.stylex",
    "WDSIconIcClose.react",
    "WDSIconIcSearch.react",
    "WDSMenuBarItem.react",
    "WDSSearchBar.react",
    "WDSText.react",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useRef,
      _ = d.useState,
      f = {
        search: {
          height: "x1peatla",
          width: "xh8yej3",
          alignSelf: "xamitd3",
          borderBottomWidth: "x1co6499",
          borderBottomStyle: "x1q0q8m5",
          borderBottomColor: "x120ee7l",
          $$css: !0,
        },
        cancelText: {
          minWidth: "xwrg52n",
          textAlign: "x2b8uid",
          display: "x78zum5",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
        select: { alignContent: "xc26acl", $$css: !0 },
        actionRow: { width: "xh8yej3", $$css: !0 },
        actionEnd: { paddingInlineEnd: "xde1mab", $$css: !0 },
        action: {
          alignContent: "xc26acl",
          justifyItems: "x1o2pa38",
          placeSelf: "x1q46pyc",
          $$css: !0,
        },
        tabRoot: { width: "xh8yej3", $$css: !0 },
        tabs: { backgroundColor: "xjbqb8w", $$css: !0 },
        tabHovered: {
          borderBottomWidth: "xv7zg05",
          borderBottomStyle: "x1q0q8m5",
          borderBottomColor: "xhl97hz",
          $$css: !0,
        },
        tabXStyle: {
          borderBottomWidth: "xv7zg05",
          borderBottomStyle: "x1q0q8m5",
          borderBottomColor: "x16stqrj",
          flex: "x1u8qi29",
          height: "x1peatla",
          $$css: !0,
        },
        tabSelected: {
          paddingTop: "xexx8yu",
          borderBottomColor: "x1rrvw3c",
          $$css: !0,
        },
        hidden: { display: "x1s85apg", $$css: !0 },
      },
      g = function (t) {
        return t === "media"
          ? s._(/*BTDS*/ "Media")
          : t === "docs"
            ? s._(/*BTDS*/ "Docs")
            : t === "links"
              ? s._(/*BTDS*/ "Links")
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      t,
                  );
                })();
      },
      h = ["media", "docs", "links"],
      y = h.map(function (e) {
        return { id: e, title: g(e) };
      });
    function C(e) {
      return e === "media"
        ? s._(/*BTDS*/ "Media from all chats")
        : e === "docs"
          ? s._(/*BTDS*/ "Docs from all chats")
          : e === "links"
            ? s._(/*BTDS*/ "Links from all chats")
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function b() {
      var t = o("WAWebMediaHubContextProvider").useWAWebMediaHubContext(),
        n = t.isSelectMode,
        a = t.searchQuery,
        i = t.setIsSelectMode,
        l = t.setSearchQuery,
        u = t.setSortOrder,
        d = t.setTab,
        g = t.sortOrder,
        h = t.tab,
        b = _(!1),
        S = b[0],
        R = b[1],
        L = _(!1),
        E = L[0],
        k = L[1],
        I = S || a !== "" || E,
        T = p(null);
      m(
        function () {
          S && T.current && T.current.focus();
        },
        [S],
      );
      var D = s._(/*BTDS*/ "Search by sender, caption or filename"),
        x = s._(/*BTDS*/ "Search by sender or caption"),
        $ = s._(/*BTDS*/ "Select"),
        P = s._(/*BTDS*/ "Search"),
        N;
      return (
        I
          ? (N = c.jsx(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(
                  o("WDSFlex.stylex").wdsFlex.flexGrow1,
                  o("WDSFlex.stylex").wdsFlex.flexShrink1,
                ),
                {
                  children: c.jsx(r("WDSSearchBar.react"), {
                    value: a,
                    hintText: h === "docs" ? D : x,
                    onValueChange: function (t) {
                      (l(t),
                        t === ""
                          ? (k(!0), T.current && T.current.focus())
                          : k(!1));
                    },
                    onBlur: function () {
                      (R(!1), k(!1));
                    },
                    onFocus: function () {
                      (R(!0),
                        k(!1),
                        o("WAWebMediaHubLogger").logMediaHubAction({
                          action: o("WAWebWamEnumActionCode").ACTION_CODE
                            .SEARCH,
                        }));
                    },
                    ref: T,
                  }),
                },
              ),
            ))
          : (N = c.jsx(r("WDSMenuBarItem.react"), {
              testid: void 0,
              title: P,
              icon: r("WDSIconIcSearch.react"),
              onClick: function () {
                (R(!S),
                  o("WAWebMediaHubLogger").logMediaHubAction({
                    action: o("WAWebWamEnumActionCode").ACTION_CODE.SEARCH,
                  }));
              },
            })),
        c.jsxs(o("WAWebFlex.react").FlexRow, {
          xstyle: f.search,
          justify: "all",
          align: "end",
          children: [
            c.jsx(o("WAWebFlex.react").FlexRow, {
              grow: 2,
              xstyle: [
                f.actionRow,
                o("WAWebUISpacing").uiMargin.start20,
                o("WAWebUISpacing").uiMargin.top10,
                o("WAWebUISpacing").uiMargin.bottom10,
              ],
              children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
                children: [
                  c.jsx(r("WDSText.react"), {
                    type: "Body1Emphasized",
                    colorName: "contentDefault",
                    children: s._(/*BTDS*/ "Media"),
                  }),
                  c.jsx(r("WDSText.react"), {
                    type: "Body2",
                    colorName: "contentDeemphasized",
                    children: C(h),
                  }),
                ],
              }),
            }),
            c.jsx(r("WAWebTabs.react"), {
              getTitleProps: v,
              selectedId: h,
              wrapperXstyle: [f.tabRoot, I && f.hidden],
              xstyle: f.tabs,
              onSelect: d,
              tabConfigs: y,
              hoveredXStyle: f.tabHovered,
              selectedXStyle: f.tabSelected,
              tabXstyle: f.tabXStyle,
            }),
            c.jsxs(o("WAWebFlex.react").FlexRow, {
              grow: 1,
              xstyle: [f.actionRow, f.actionEnd],
              justify: "end",
              alignSelf: "center",
              gap: 8,
              children: [
                N,
                c.jsx(r("WAWebMediaHubSortIcon.react"), {
                  setSortOrder: u,
                  sortOrder: g,
                }),
                n
                  ? c.jsx(o("WAWebClickable.react").Clickable, {
                      onClick: function () {
                        return i(!1);
                      },
                      xstyle: [f.select, f.action, f.cancelText],
                      children: c.jsx(r("WDSText.react"), {
                        type: "Body1",
                        colorName: "contentDeemphasized",
                        children: r("WAWebFbtCommon")("Cancel"),
                      }),
                    })
                  : c.jsxs(c.Fragment, {
                      children: [
                        c.jsx(r("WDSMenuBarItem.react"), {
                          testid: void 0,
                          title: $,
                          icon: o("WAWebCheckRefreshedIcon.react")
                            .CheckRefreshedIcon,
                          onClick: function () {
                            return i(!0);
                          },
                        }),
                        c.jsx(r("WDSMenuBarItem.react"), {
                          testid: void 0,
                          title: r("WAWebFbtCommon")("Close"),
                          icon: r("WDSIconIcClose.react"),
                          onClick: o("WAWebModalManager").closeModalManager,
                        }),
                      ],
                    }),
              ],
            }),
          ],
        })
      );
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e, t) {
      return {
        color: e || t ? "wdsContentDefault" : "wdsContentDeemphasized",
        weight: e || t ? "medium" : void 0,
      };
    }
    l.default = b;
  },
  226,
);
