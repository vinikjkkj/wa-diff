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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(59),
        n = e.colIndex,
        a = e.collection,
        i = e.msg,
        l = e.rowIndex,
        s = e.searchType,
        c = o("WAWebMediaHubContextProvider").useWAWebMediaHubContext(),
        d = c.contextMenuMsg,
        _ = c.getMultiSelection,
        f = c.isSelectMode,
        g = c.onMessageSelect,
        y = c.searchQuery,
        C = c.setContextMenuMsg,
        b = c.sortOrder,
        v = r("useHoverState")(),
        S = v.isHovered,
        R = v.onMouseEnter,
        L = v.onMouseLeave,
        E = v.setIsHovered,
        k = r("useWAWebFocusState")(),
        I = k[0],
        T = k[1],
        D = m(null),
        x;
      (t[0] !== a || t[1] !== i
        ? ((x = function () {
            a.remove(i);
          }),
          (t[0] = a),
          (t[1] = i),
          (t[2] = x))
        : (x = t[2]),
        o("useWAWebListener").useListener(i, "revoked", x));
      var $;
      t[3] !== f || t[4] !== i || t[5] !== g
        ? (($ = function () {
            if (f) g(i);
            else {
              var e;
              (e = D.current) == null || e.click();
            }
          }),
          (t[3] = f),
          (t[4] = i),
          (t[5] = g),
          (t[6] = $))
        : ($ = t[6]);
      var P = $,
        N;
      t[7] !== g
        ? ((N = function (t, n, r) {
            g(t, r);
          }),
          (t[7] = g),
          (t[8] = N))
        : (N = t[8]);
      var M = N,
        w;
      t[9] !== i.id
        ? ((w = i.id.toString()), (t[9] = i.id), (t[10] = w))
        : (w = t[10]);
      var A;
      t[11] !== i || t[12] !== s || t[13] !== C
        ? ((A = function (t) {
            (t.preventDefault(), C({ msg: i, searchType: s, event: t }));
          }),
          (t[11] = i),
          (t[12] = s),
          (t[13] = C),
          (t[14] = A))
        : (A = t[14]);
      var F;
      t[15] !== P
        ? ((F = { enter: P, space: P }), (t[15] = P), (t[16] = F))
        : (F = t[16]);
      var O;
      t[17] !== L
        ? ((O = function (t) {
            t.relatedTarget != null && L(t);
          }),
          (t[17] = L),
          (t[18] = O))
        : (O = t[18]);
      var B, W;
      t[19] !== E
        ? ((B = function () {
            return E(!0);
          }),
          (W = function (t) {
            var e,
              n = t.relatedTarget;
            (n instanceof HTMLElement &&
              (e = D.current) != null &&
              e.contains(n)) ||
              E(!1);
          }),
          (t[19] = E),
          (t[20] = B),
          (t[21] = W))
        : ((B = t[20]), (W = t[21]));
      var q = T ? h.focused : h.notFocused,
        U;
      t[22] !== q
        ? ((U = [o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, q]),
          (t[22] = q),
          (t[23] = U))
        : (U = t[23]);
      var V =
          S ||
          ((d == null ? void 0 : d.msg) === i &&
            (d == null ? void 0 : d.searchType) === s),
        H;
      t[24] !== i || t[25] !== s || t[26] !== E || t[27] !== V
        ? ((H = u.jsx(
            o("WAWebMediaHubMessageDropdownMenu.react")
              .WAWebMediaHubMessageDropdownMenu,
            { isHover: V, msg: i, isForMedia: !0, onHover: E, searchType: s },
          )),
          (t[24] = i),
          (t[25] = s),
          (t[26] = E),
          (t[27] = V),
          (t[28] = H))
        : (H = t[28]);
      var G;
      t[29] !== i.id
        ? ((G = i.id.toString()), (t[29] = i.id), (t[30] = G))
        : (G = t[30]);
      var z = f || void 0,
        j;
      t[31] !== _ ? ((j = _()), (t[31] = _), (t[32] = j)) : (j = t[32]);
      var K = b === "fileSizeDesc",
        Q;
      t[33] !== M ||
      t[34] !== S ||
      t[35] !== f ||
      t[36] !== i ||
      t[37] !== y ||
      t[38] !== G ||
      t[39] !== z ||
      t[40] !== j ||
      t[41] !== K
        ? ((Q = u.jsx(
            r("WAWebMediaGalleryMediaCanvas.react"),
            {
              refForMedia: D,
              shouldForceHover: S,
              aspectRatio: 1,
              msg: i,
              hoverEvent: z,
              selectable: f,
              selectedMessages: j,
              onMessageSelect: M,
              theme: "mediaHub",
              hideableSecondRow: !1,
              isRefreshed: !0,
              shouldShowSize: K,
              highlightText: y,
            },
            G,
          )),
          (t[33] = M),
          (t[34] = S),
          (t[35] = f),
          (t[36] = i),
          (t[37] = y),
          (t[38] = G),
          (t[39] = z),
          (t[40] = j),
          (t[41] = K),
          (t[42] = Q))
        : (Q = t[42]);
      var X;
      t[43] !== n ||
      t[44] !== I ||
      t[45] !== R ||
      t[46] !== l ||
      t[47] !== U ||
      t[48] !== H ||
      t[49] !== Q ||
      t[50] !== A ||
      t[51] !== F ||
      t[52] !== O ||
      t[53] !== B ||
      t[54] !== W
        ? ((X = u.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
            ref: I,
            role: "gridcell",
            "aria-colindex": n,
            "aria-rowindex": l,
            onContextMenu: A,
            handlers: F,
            onMouseEnter: R,
            onMouseLeave: O,
            onFocus: B,
            onBlur: W,
            "data-tab": o("WAWebTabOrder").TAB_ORDER.TAB_HEADER,
            xstyle: U,
            "data-focusid": "media-hub-cell-item",
            tabIndex: -1,
            children: [H, Q],
          })),
          (t[43] = n),
          (t[44] = I),
          (t[45] = R),
          (t[46] = l),
          (t[47] = U),
          (t[48] = H),
          (t[49] = Q),
          (t[50] = A),
          (t[51] = F),
          (t[52] = O),
          (t[53] = B),
          (t[54] = W),
          (t[55] = X))
        : (X = t[55]);
      var Y;
      return (
        t[56] !== X || t[57] !== w
          ? ((Y = u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
              name: "media-hub-list-item",
              children: u.jsx(
                r("WAWebBox.react"),
                { xstyle: p.item, testid: void 0, children: X },
                w,
              ),
            })),
            (t[56] = X),
            (t[57] = w),
            (t[58] = Y))
          : (Y = t[58]),
        Y
      );
    }
    l.default = g;
  },
  98,
);
