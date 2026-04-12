__d(
  "WAWebMediaHubAllMedia.react",
  [
    "WAWebAllMediaCollection",
    "WAWebAllMsgTypeCollectionUtils",
    "WAWebBox.react",
    "WAWebCmd",
    "WAWebErrorBoundary.react",
    "WAWebFlatList.react",
    "WAWebFlatListContainer.react",
    "WAWebFlatListController",
    "WAWebFlex.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebMediaGalleryMediaCanvas.react",
    "WAWebMediaHubContextProvider",
    "WAWebMediaHubEmptyStates.react",
    "WAWebMediaHubFlatListUtils",
    "WAWebMediaHubLoadingSkeletons.react",
    "WAWebMediaHubLogger",
    "WAWebMediaHubMessageDropdownMenu.react",
    "WAWebMediaHubMessageLightboxAction",
    "WAWebMediaHubSearchQuery.react",
    "WAWebMediaHubSearchUtils",
    "WAWebMediaHubViewMore.react",
    "WAWebMenuItems.react",
    "WAWebModalManager",
    "WAWebTabOrder",
    "WAWebWamEnumActionCode",
    "WDSFocusStateStyles",
    "WDSText.react",
    "chunkArray",
    "react",
    "stylex",
    "useHoverState",
    "useWAWebFTS",
    "useWAWebFTSFilterer",
    "useWAWebFocusState",
    "useWAWebGalleryScrollLimit",
    "useWAWebListener",
    "useWAWebMediaHubFTSLoad",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useMemo,
      m = c.useRef,
      p = {
        item: { flex: "x1cgt1ok", position: "x1n2onr6", $$css: !0 },
        gallery: {
          display: "x78zum5",
          flex: "x12lumcd",
          flexWrap: "x1a02dak",
          justifyContent: "x1qughib",
          height: "x5yr21d",
          width: "xh8yej3",
          overflowX: "xw2csxc",
          overflowY: "x1odjw0f",
          $$css: !0,
        },
        galleryWithSearch: { height: "xdmi676", $$css: !0 },
        verticalListViewport: { width: "xh8yej3", $$css: !0 },
        visible: { overflowY: "xryxfnj", overflowX: "x6ikm8r", $$css: !0 },
        block: { display: "x1lliihq", $$css: !0 },
        rowWidth: { width: "x1o2z316", $$css: !0 },
        date: {
          paddingInlineStart: "x12w63v0",
          paddingInlineEnd: "x1nzty39",
          paddingLeft: null,
          paddingRight: null,
          paddingTop: "x1sk1jro",
          paddingBottom: "x12xbjc7",
          $$css: !0,
        },
        firstListItem: { paddingTop: "x1xrf6ya", $$css: !0 },
      },
      _ = new (r("WAWebFlatListController"))(),
      f = "media";
    function g(t) {
      "use no memo";
      var n = t.searchCb,
        a = t.searchType,
        i = t.width,
        l = o("WAWebMediaHubContextProvider").useWAWebMediaHubContext(),
        s = l.getMultiSelection,
        c = l.onMessageSelect,
        m = l.searchQuery,
        g = l.searchStatusCaption,
        h = l.setSearchQuery,
        C = l.sortOrder,
        b = l.tab,
        v = r("useWAWebFTS")(
          o("WAWebAllMediaCollection").AllMediaCollection,
          m,
          h,
          C === "fileSizeDesc"
            ? o("WAWebAllMsgTypeCollectionUtils").HARD_LIMIT_MAX_COUNT
            : o("WAWebAllMsgTypeCollectionUtils").CHUNKS_SIZE,
          C === "asc" ? "asc" : "desc",
          function () {
            o("WAWebAllMediaCollection").AllMediaCollection.sort({
              comparator: o(
                "WAWebAllMsgTypeCollectionUtils",
              ).sortMsgsByInputComparator(C),
            });
          },
        ),
        S = v[0],
        R = v[1],
        L = v[2],
        E = R(),
        k = o("WAWebMediaHubSearchUtils").useMediaHubFilterByWithMe(),
        I = o("useWAWebFTSFilterer").useWAWebFTSFilterer(
          o("WAWebAllMediaCollection").AllMediaCollection,
          m,
          n,
          k,
        );
      o("useWAWebListener").useListener(
        o("WAWebAllMediaCollection").AllMediaCollection,
        "remove",
        function (e) {
          s().isSelected(e) && c(e);
        },
      );
      var T = r("useWAWebUIM")(),
        D = o("WAWebMediaHubMessageLightboxAction").handleMediaViewer(T);
      o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "media_viewer_modal",
        a !== "sender"
          ? function (e) {
              (o("WAWebModalManager").ModalManager.setForceRequestFocusMedia(
                !1,
                "modal",
              ),
                D(e),
                o("WAWebMediaHubLogger").logMediaHubAction({
                  action: o("WAWebWamEnumActionCode").ACTION_CODE.CLICK,
                }));
            }
          : void 0,
      );
      var x = o("WAWebMediaHubSearchUtils").mediaHubShouldSearch(m),
        $ = r("useWAWebGalleryScrollLimit")(
          o("WAWebAllMediaCollection").AllMediaCollection,
          a === "sender" || b !== f || E,
          x,
          S,
        ),
        P = $[0],
        N = $[1],
        M = o("WAWebMediaHubSearchUtils").useMediaHubSearchLimit(),
        w = M[0],
        A = M[1];
      (o("useWAWebMediaHubFTSLoad").useWAWebMediaHubFTSLoad(
        o("WAWebAllMediaCollection").AllMediaCollection,
        a,
        S,
        f,
      ),
        o("useWAWebMediaHubFTSLoad").useWAWebMediaHubFTSLoadMore(
          o("WAWebAllMediaCollection").AllMediaCollection,
          I.length < w,
          S,
        ));
      var F = x ? w : P,
        O = o("WAWebMediaHubFlatListUtils").getMediaHubGroupedMsgs(
          I.slice(0, F),
          x || C === "fileSizeDesc",
        ),
        B = d(
          function () {
            return O.flatMap(function (e, t) {
              var n = e[0],
                o = e[1];
              return r("chunkArray")(o, 5).map(function (e, r) {
                var o = C !== "fileSizeDesc" && r === 0 && n.title !== "",
                  a = o && !x,
                  l = t === 0 && o;
                return {
                  msgs: e,
                  isFirstRow: o,
                  itemKey: e
                    .map(function (e) {
                      return e.id.toString();
                    })
                    .join(""),
                  dayKey: a ? n : { title: "", subtitle: "" },
                  height: (i - 8) / 5 + (a ? 84 : 0) + (l ? -20 : 0) + 2,
                };
              });
            });
          },
          [O, i, C, x],
        ),
        W = x && F < I.length,
        q = x && B.length === 0;
      if (
        (o("WAWebMediaHubSearchUtils").useMediaHubSearchStatus(a, q, f),
        o("WAWebMediaHubSearchUtils").useMediaHubSearchLog(f),
        b !== f)
      )
        return null;
      var U = x && B.length > 0;
      if (a === "sender" && (!x || q)) return null;
      var V = a === "sender" ? g === !1 : !0;
      return E || L
        ? u.jsxs(u.Fragment, {
            children: [
              u.jsx(
                o("WAWebMediaHubLoadingSkeletons.react")
                  .WAWebMediaHubMediaSkeletons,
                {},
              ),
              u.jsx(
                o("WAWebMediaHubLoadingSkeletons.react")
                  .WAWebMediaHubMediaSkeletons,
                { delay: 300 },
              ),
              u.jsx(
                o("WAWebMediaHubLoadingSkeletons.react")
                  .WAWebMediaHubMediaSkeletons,
                { delay: 600 },
              ),
            ],
          })
        : u.jsxs(u.Fragment, {
            children: [
              u.jsx(o("WAWebFlex.react").FlexRow, {
                grow: 1,
                "data-tab": -1,
                children:
                  U &&
                  u.jsx(r("WAWebMediaHubSearchQuery.react"), {
                    search: m,
                    searchType: a,
                    tab: b,
                  }),
              }),
              u.jsx(
                o("WAWebMediaHubEmptyStates.react").WAWebMediaHubEmptyMessage,
                {
                  collection: o("WAWebAllMediaCollection").AllMediaCollection,
                  filteredMsgs: I,
                  noMsgsComponent: u.jsx(
                    o("WAWebMediaHubEmptyStates.react").WAWebMediaHubNoMedia,
                    {},
                  ),
                },
              ),
              B.length > 0 &&
                u.jsxs(
                  r("WAWebFlatListContainer.react"),
                  {
                    direction: "vertical",
                    flatListControllers: [_],
                    onScroll: N,
                    className: (e || (e = r("stylex")))([
                      p.gallery,
                      x && p.galleryWithSearch,
                    ]),
                    children: [
                      u.jsx(o("WAWebFlatList.react").FlatList, {
                        extraItems: w,
                        flatListController: _,
                        direction: "vertical",
                        forceConsistentRenderCount: !1,
                        data: B,
                        role: "grid",
                        handleKeyboardNavigation: !0,
                        focusableItemSelector:
                          "[data-focusid='media-hub-cell-item']",
                        "aria-rowcount": B.length,
                        "aria-colcount": 5,
                        renderItem: function (t, n) {
                          var e,
                            i,
                            l = t.msgs,
                            s =
                              (e = (i = B[n]) == null ? void 0 : i.dayKey) !=
                              null
                                ? e
                                : { title: "", subtitle: "" };
                          return u.jsxs(
                            u.Fragment,
                            {
                              children: [
                                s.title !== "" &&
                                  u.jsxs(o("WAWebFlex.react").FlexColumn, {
                                    xstyle: [
                                      p.date,
                                      n === 0 && p.firstListItem,
                                    ],
                                    children: [
                                      u.jsx(r("WDSText.react"), {
                                        type: "Body1Emphasized",
                                        colorName: "contentDefault",
                                        children: s.title,
                                      }),
                                      u.jsx(r("WDSText.react"), {
                                        type: "Body2",
                                        colorName: "contentDeemphasized",
                                        children: s.subtitle,
                                      }),
                                    ],
                                  }),
                                u.jsx(o("WAWebFlex.react").FlexRow, {
                                  gap: 2,
                                  justify: "start",
                                  "data-tab": -1,
                                  xstyle: p.rowWidth,
                                  children: l.map(function (e, t) {
                                    return u.jsx(
                                      y,
                                      {
                                        msg: e,
                                        collection: o("WAWebAllMediaCollection")
                                          .AllMediaCollection,
                                        colIndex: t,
                                        rowIndex: n,
                                        searchType: a,
                                      },
                                      e.id.toString(),
                                    );
                                  }),
                                }),
                              ],
                            },
                            s.title + "-flatlist-" + n,
                          );
                        },
                        viewportXstyles: p.visible,
                        containerXstyles: [p.verticalListViewport, p.visible],
                      }),
                      u.jsxs(o("WAWebFlex.react").FlexColumn, {
                        grow: 1,
                        xstyle: p.block,
                        children: [
                          U &&
                            u.jsx(o("WAWebMenuItems.react").MenuSeparator, {}),
                          W &&
                            u.jsx(r("WAWebMediaHubViewMore.react"), {
                              onClick: A,
                              searchType: a,
                            }),
                          V &&
                            u.jsx(
                              o("WAWebMediaHubEmptyStates.react")
                                .WAWebMediaHubOnlyRecent,
                              {},
                            ),
                        ],
                      }),
                    ],
                  },
                  x ? "search" : "all",
                ),
            ],
          });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    var h = {
      focused: { zIndex: "x16uhe5s", position: "x1n2onr6", $$css: !0 },
      notFocused: { position: "x1n2onr6", $$css: !0 },
    };
    function y(e) {
      var t = e.colIndex,
        n = e.collection,
        a = e.msg,
        i = e.rowIndex,
        l = e.searchType,
        s = o("WAWebMediaHubContextProvider").useWAWebMediaHubContext(),
        c = s.contextMenuMsg,
        d = s.getMultiSelection,
        _ = s.isSelectMode,
        f = s.onMessageSelect,
        g = s.searchQuery,
        y = s.setContextMenuMsg,
        C = s.sortOrder,
        b = r("useHoverState")(),
        v = b.isHovered,
        S = b.onMouseEnter,
        R = b.onMouseLeave,
        L = b.setIsHovered,
        E = r("useWAWebFocusState")(),
        k = E[0],
        I = E[1],
        T = m(null);
      o("useWAWebListener").useListener(a, "revoked", function () {
        n.remove(a);
      });
      var D = function () {
          if (_) f(a);
          else {
            var e;
            (e = T.current) == null || e.click();
          }
        },
        x = function (t, n, r) {
          f(t, r);
        };
      return u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
        name: "media-hub-list-item",
        children: u.jsx(
          r("WAWebBox.react"),
          {
            xstyle: p.item,
            testid: void 0,
            children: u.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
              ref: k,
              role: "gridcell",
              "aria-colindex": t,
              "aria-rowindex": i,
              onContextMenu: function (t) {
                (t.preventDefault(), y({ msg: a, searchType: l, event: t }));
              },
              handlers: { enter: D, space: D },
              onMouseEnter: S,
              onMouseLeave: function (t) {
                t.relatedTarget != null && R(t);
              },
              onFocus: function () {
                return L(!0);
              },
              onBlur: function (t) {
                var e,
                  n = t.relatedTarget;
                (n instanceof HTMLElement &&
                  (e = T.current) != null &&
                  e.contains(n)) ||
                  L(!1);
              },
              "data-tab": o("WAWebTabOrder").TAB_ORDER.TAB_HEADER,
              xstyle: [
                o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
                I ? h.focused : h.notFocused,
              ],
              "data-focusid": "media-hub-cell-item",
              tabIndex: -1,
              children: [
                u.jsx(
                  o("WAWebMediaHubMessageDropdownMenu.react")
                    .WAWebMediaHubMessageDropdownMenu,
                  {
                    isHover:
                      v ||
                      ((c == null ? void 0 : c.msg) === a &&
                        (c == null ? void 0 : c.searchType) === l),
                    msg: a,
                    isForMedia: !0,
                    onHover: L,
                    searchType: l,
                  },
                ),
                u.jsx(
                  r("WAWebMediaGalleryMediaCanvas.react"),
                  {
                    refForMedia: T,
                    shouldForceHover: v,
                    aspectRatio: 1,
                    msg: a,
                    hoverEvent: _ || void 0,
                    selectable: _,
                    selectedMessages: d(),
                    onMessageSelect: x,
                    theme: "mediaHub",
                    hideableSecondRow: !1,
                    isRefreshed: !0,
                    shouldShowSize: C === "fileSizeDesc",
                    highlightText: g,
                  },
                  a.id.toString(),
                ),
              ],
            }),
          },
          a.id.toString(),
        ),
      });
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = g));
  },
  98,
);
