__d(
  "WAWebMediaHubAllDocs.react",
  [
    "WAWebAllDocsCollection",
    "WAWebAllMsgTypeCollectionUtils",
    "WAWebDocMsgIconAndName.react",
    "WAWebFlatList.react",
    "WAWebFlatListContainer.react",
    "WAWebFlatListController",
    "WAWebFlex.react",
    "WAWebMediaDocumentUtils",
    "WAWebMediaHubContextProvider",
    "WAWebMediaHubEmptyStates.react",
    "WAWebMediaHubFlatListUtils",
    "WAWebMediaHubListHeader.react",
    "WAWebMediaHubListMsg.react",
    "WAWebMediaHubLoadingSkeletons.react",
    "WAWebMediaHubLogger",
    "WAWebMediaHubSearchQuery.react",
    "WAWebMediaHubSearchUtils",
    "WAWebMediaHubViewMore.react",
    "WAWebMenuItems.react",
    "WAWebWamEnumActionCode",
    "WDSIconIcDownload.react",
    "WDSMenuBarItem.react",
    "WDSText.react",
    "fbs",
    "react",
    "stylex",
    "useWAWebFTS",
    "useWAWebFTSFilterer",
    "useWAWebGalleryScrollLimit",
    "useWAWebListener",
    "useWAWebMediaHubFTSLoad",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useMemo,
      d = {
        gallery: {
          display: "x1lliihq",
          flex: "x12lumcd",
          flexWrap: "x1a02dak",
          justifyContent: "x1qughib",
          alignContent: "x8gbvx8",
          height: "xbvatcl",
          overflowX: "xw2csxc",
          overflowY: "x1odjw0f",
          $$css: !0,
        },
        galleryWithSearch: { height: "xdmi676", $$css: !0 },
        date: {
          paddingInlineStart: "x1phvje8",
          paddingInlineEnd: "xcldk2z",
          paddingLeft: null,
          paddingRight: null,
          paddingTop: "x1sk1jro",
          paddingBottom: "x12xbjc7",
          $$css: !0,
        },
        firstListItem: { paddingTop: "x1xrf6ya", $$css: !0 },
      },
      m = new (r("WAWebFlatListController"))();
    function p(t) {
      "use no memo";
      var n = t.searchCb,
        a = t.searchType,
        i = o("WAWebMediaHubContextProvider").useWAWebMediaHubContext(),
        l = i.getMultiSelection,
        s = i.onMessageSelect,
        p = i.searchQuery,
        f = i.searchStatusCaption,
        g = i.setSearchQuery,
        h = i.sortOrder,
        y = i.tab,
        C = r("useWAWebFTS")(
          o("WAWebAllDocsCollection").AllDocsCollection,
          p,
          g,
          h === "fileSizeDesc"
            ? o("WAWebAllMsgTypeCollectionUtils").HARD_LIMIT_MAX_COUNT
            : o("WAWebAllMsgTypeCollectionUtils").CHUNKS_SIZE,
          h === "asc" ? "asc" : "desc",
          function () {
            o("WAWebAllDocsCollection").AllDocsCollection.sort({
              comparator: o(
                "WAWebAllMsgTypeCollectionUtils",
              ).sortMsgsByInputComparator(h),
            });
          },
        ),
        b = C[0],
        v = C[1],
        S = C[2],
        R = v(),
        L = o("WAWebMediaHubSearchUtils").useMediaHubFilterByWithMe(),
        E = o("useWAWebFTSFilterer").useWAWebFTSFilterer(
          o("WAWebAllDocsCollection").AllDocsCollection,
          p,
          n,
          L,
        ),
        k = o("WAWebMediaHubSearchUtils").useMediaHubSearchLimit(),
        I = k[0],
        T = k[1];
      (o("useWAWebMediaHubFTSLoad").useWAWebMediaHubFTSLoad(
        o("WAWebAllDocsCollection").AllDocsCollection,
        a,
        b,
        "docs",
      ),
        o("useWAWebMediaHubFTSLoad").useWAWebMediaHubFTSLoadMore(
          o("WAWebAllDocsCollection").AllDocsCollection,
          E.length < I,
          b,
        ),
        o("useWAWebListener").useListener(
          o("WAWebAllDocsCollection").AllDocsCollection,
          "remove",
          function (e) {
            l().isSelected(e) && s(e);
          },
        ));
      var D = o("WAWebMediaHubSearchUtils").mediaHubShouldSearch(p),
        x = r("useWAWebGalleryScrollLimit")(
          o("WAWebAllDocsCollection").AllDocsCollection,
          a === "sender" || y !== "docs" || R,
          D,
          b,
        ),
        $ = x[0],
        P = x[1],
        N = D ? I : $,
        M = o("WAWebMediaHubFlatListUtils").getMediaHubGroupedMsgs(
          E.slice(0, N),
          D || h === "fileSizeDesc",
        ),
        w = c(
          function () {
            return M.flatMap(function (e, t) {
              var n = e[0],
                r = e[1];
              return r.map(function (e, r) {
                var a = r === 0 && !D && n.title !== "",
                  i = t === 0 && r === 0 && n.title !== "";
                return {
                  msg: e,
                  itemKey: e.id.toString(),
                  dayKey: n,
                  height: o(
                    "WAWebMediaHubListMsg.react",
                  ).getMediaHubListRowHeight(a, i),
                  isGrouped: a,
                };
              });
            });
          },
          [M, D],
        ),
        A = D && w.length === 0;
      (o("WAWebMediaHubSearchUtils").useMediaHubSearchStatus(a, A, "docs"),
        o("WAWebMediaHubSearchUtils").useMediaHubSearchLog("docs"));
      var F = D && N < E.length;
      if (y !== "docs") return null;
      var O = D && w.length > 0;
      if (a === "sender" && (!D || A)) return null;
      var B = a === "sender" ? f === !1 : !0;
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx(o("WAWebFlex.react").FlexRow, {
            grow: 1,
            children:
              O &&
              u.jsx(r("WAWebMediaHubSearchQuery.react"), {
                tab: y,
                search: p,
                searchType: a,
              }),
          }),
          u.jsx(o("WAWebMediaHubEmptyStates.react").WAWebMediaHubEmptyMessage, {
            collection: o("WAWebAllDocsCollection").AllDocsCollection,
            filteredMsgs: E,
            noMsgsComponent: u.jsx(
              o("WAWebMediaHubEmptyStates.react").WAWebMediaHubNoDocs,
              {},
            ),
          }),
          !D &&
            u.jsx(r("WAWebMediaHubListHeader.react"), {
              firstColumnLabel: r("fbs")._(/*BTDS*/ "Doc"),
              secondColumnLabel: r("fbs")._(/*BTDS*/ "Caption"),
              thirdColumnLabel: r("fbs")._(/*BTDS*/ "Sent by"),
            }),
          R || S
            ? u.jsxs(o("WAWebFlex.react").FlexColumn, {
                gap: 8,
                grow: 0,
                children: [
                  u.jsx(
                    o("WAWebMediaHubLoadingSkeletons.react")
                      .WAWebMediaHubMediaListSkeletons,
                    {},
                  ),
                  u.jsx(
                    o("WAWebMediaHubLoadingSkeletons.react")
                      .WAWebMediaHubMediaListSkeletons,
                    { delay: 150 },
                  ),
                  u.jsx(
                    o("WAWebMediaHubLoadingSkeletons.react")
                      .WAWebMediaHubMediaListSkeletons,
                    { delay: 300 },
                  ),
                ],
              })
            : w.length > 0 &&
              u.jsxs(
                r("WAWebFlatListContainer.react"),
                {
                  direction: "vertical",
                  flatListControllers: [m],
                  onScroll: P,
                  className: (e || (e = r("stylex")))([
                    d.gallery,
                    D && d.galleryWithSearch,
                  ]),
                  children: [
                    u.jsx(o("WAWebFlatList.react").FlatList, {
                      extraItems: I,
                      flatListController: m,
                      direction: "vertical",
                      forceConsistentRenderCount: !1,
                      role: "list",
                      data: w,
                      handleKeyboardNavigation: !0,
                      focusableItemSelector:
                        "[data-focusid='media-hub-row-item']",
                      renderItem: function (t, n) {
                        var e,
                          i,
                          l = t.isGrouped,
                          s = t.msg,
                          c =
                            (e = (i = w[n]) == null ? void 0 : i.dayKey) != null
                              ? e
                              : { title: "", subtitle: "" };
                        return u.jsxs(
                          u.Fragment,
                          {
                            children: [
                              l &&
                                c.title !== "" &&
                                u.jsxs(o("WAWebFlex.react").FlexColumn, {
                                  xstyle: [d.date, n === 0 && d.firstListItem],
                                  children: [
                                    u.jsx(r("WDSText.react"), {
                                      type: "Body1Emphasized",
                                      colorName: "contentDefault",
                                      children: c.title,
                                    }),
                                    u.jsx(r("WDSText.react"), {
                                      type: "Body2",
                                      colorName: "contentDeemphasized",
                                      children: c.subtitle,
                                    }),
                                  ],
                                }),
                              u.jsx(
                                o("WAWebMediaHubListMsg.react")
                                  .WAWebMediaHubListMsg,
                                {
                                  msg: s,
                                  msgContent: u.jsx(
                                    r("WAWebDocMsgIconAndName.react"),
                                    { msg: s },
                                  ),
                                  shouldShowMsgBody: s.caption !== s.filename,
                                  endAction: u.jsx(_, { msg: s }),
                                  searchType: a,
                                  collection: o("WAWebAllDocsCollection")
                                    .AllDocsCollection,
                                },
                                s.id.toString(),
                              ),
                            ],
                          },
                          c.title + "-flatlist-" + n,
                        );
                      },
                      defaultItemHeight: 48,
                    }),
                    O && u.jsx(o("WAWebMenuItems.react").MenuSeparator, {}),
                    F &&
                      u.jsx(r("WAWebMediaHubViewMore.react"), {
                        onClick: T,
                        searchType: a,
                      }),
                    B &&
                      u.jsx(
                        o("WAWebMediaHubEmptyStates.react")
                          .WAWebMediaHubOnlyRecent,
                        {},
                      ),
                  ],
                },
                D ? "search" : "all",
              ),
        ],
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t,
        n = e.msg,
        a = o("WAWebMediaDocumentUtils").useMediaAction(n, {
          forceDownload: !0,
        }),
        i = a[0],
        l = i.onClick;
      return l == null
        ? null
        : u.jsx(r("WDSMenuBarItem.react"), {
            title: (t = i.title) != null ? t : "",
            buttonSize: "small",
            icon: r("WDSIconIcDownload.react"),
            onClick: function (t) {
              (t != null && l(t),
                o("WAWebMediaHubLogger").logMediaHubAction({
                  action: o("WAWebWamEnumActionCode").ACTION_CODE.DOWNLOAD,
                }));
            },
          });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
