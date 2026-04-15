__d(
  "WAWebMediaHubAllLinks.react",
  [
    "WAWebAllLinksCollection",
    "WAWebAllMsgTypeCollectionUtils",
    "WAWebClickable.react",
    "WAWebCopyPasteSelectable.react",
    "WAWebEmojiText.react",
    "WAWebExternalLink.react",
    "WAWebFlatList.react",
    "WAWebFlatListContainer.react",
    "WAWebFlatListController",
    "WAWebFlex.react",
    "WAWebFormatConfiguration",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebLinkIconContained.react",
    "WAWebMediaHubContextProvider",
    "WAWebMediaHubEmptyStates.react",
    "WAWebMediaHubFlatListUtils",
    "WAWebMediaHubLinkFavicon.react",
    "WAWebMediaHubListHeader.react",
    "WAWebMediaHubListMsg.react",
    "WAWebMediaHubLoadingSkeletons.react",
    "WAWebMediaHubLogger",
    "WAWebMediaHubSearchQuery.react",
    "WAWebMediaHubSearchUtils",
    "WAWebMediaHubViewMore.react",
    "WAWebMediaLinkPreviewDescription.react",
    "WAWebMenuItems.react",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebURLUtils",
    "WAWebWamEnumActionCode",
    "WDSButton.react",
    "WDSIconIcOpenInNew.react",
    "WDSText.react",
    "WDSTooltip.react",
    "fbs",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebFTS",
    "useWAWebFTSFilterer",
    "useWAWebGalleryScrollLimit",
    "useWAWebListener",
    "useWAWebMediaHubFTSLoad",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useMemo,
      d = {
        text: { alignItems: "x6s0dn4", $$css: !0 },
        container: { display: "xjp7ctv", cursor: "x1ypdohk", $$css: !0 },
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
        captionText: {
          whiteSpace: "xuxw1ft",
          textOverflow: "xlyipyv",
          display: "x1lliihq",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        link: { color: "x14ug900", $$css: !0 },
        endAction: { color: "xhslqc4", $$css: !0 },
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
        bottom12: { marginBottom: "xcytdqz", $$css: !0 },
      },
      m = new (r("WAWebFlatListController"))();
    function p(t) {
      "use no memo";
      var n = t.searchCb,
        a = t.searchType,
        i = o("WAWebMediaHubContextProvider").useWAWebMediaHubContext(),
        l = i.getMultiSelection,
        s = i.isSelectMode,
        p = i.onMessageSelect,
        _ = i.searchQuery,
        f = i.setSearchQuery,
        y = i.sortOrder,
        C = i.tab,
        b = r("useWAWebFTS")(
          o("WAWebAllLinksCollection").AllLinksCollection,
          _,
          f,
          o("WAWebAllMsgTypeCollectionUtils").CHUNKS_SIZE,
          y === "asc" ? "asc" : "desc",
          function () {
            o("WAWebAllLinksCollection").AllLinksCollection.sort({
              comparator: o(
                "WAWebAllMsgTypeCollectionUtils",
              ).sortMsgsByInputComparator(y),
            });
          },
        ),
        v = b[0],
        S = b[1],
        R = b[2],
        L = S(),
        E = o("WAWebMediaHubSearchUtils").useMediaHubFilterByWithMe(),
        k = o("useWAWebFTSFilterer").useWAWebFTSFilterer(
          o("WAWebAllLinksCollection").AllLinksCollection,
          _,
          n,
          E,
        );
      o("useWAWebListener").useListener(
        o("WAWebAllLinksCollection").AllLinksCollection,
        "remove",
        function (e) {
          l().isSelected(e) && p(e);
        },
      );
      var I = o("WAWebMediaHubSearchUtils").mediaHubShouldSearch(_),
        T = r("useWAWebGalleryScrollLimit")(
          o("WAWebAllLinksCollection").AllLinksCollection,
          a === "sender" || C !== "links" || L,
          I,
          v,
        ),
        D = T[0],
        x = T[1],
        $ = o("WAWebMediaHubSearchUtils").useMediaHubSearchLimit(),
        P = $[0],
        N = $[1];
      (o("useWAWebMediaHubFTSLoad").useWAWebMediaHubFTSLoad(
        o("WAWebAllLinksCollection").AllLinksCollection,
        a,
        v,
        "links",
      ),
        o("useWAWebMediaHubFTSLoad").useWAWebMediaHubFTSLoadMore(
          o("WAWebAllLinksCollection").AllLinksCollection,
          k.length < P,
          v,
        ));
      var M = I ? P : D,
        w = o("WAWebMediaHubFlatListUtils").getMediaHubGroupedMsgs(
          k.slice(0, M),
          I || y === "fileSizeDesc",
        ),
        A = c(
          function () {
            return w.flatMap(function (e, t) {
              var n = e[0],
                r = e[1];
              return r.flatMap(function (e, r) {
                var a = o("WAWebMsgLinks").getGalleryLinks(e);
                return a.map(function (a, i) {
                  var l = r === 0 && i === 0 && !I && n.title !== "",
                    s = t === 0 && r === 0 && n.title !== "";
                  return {
                    msg: e,
                    link: a,
                    itemKey: e.id.toString() + a.href,
                    dayKey: n,
                    isGrouped: l,
                    height: o(
                      "WAWebMediaHubListMsg.react",
                    ).getMediaHubListRowHeight(l, s),
                  };
                });
              });
            });
          },
          [w, I],
        ),
        F = I && M < k.length,
        O = I && A.length === 0;
      if (
        (o("WAWebMediaHubSearchUtils").useMediaHubSearchStatus(a, O, "links"),
        o("WAWebMediaHubSearchUtils").useMediaHubSearchLog("links"),
        C !== "links")
      )
        return null;
      var B = I && A.length > 0;
      return a === "sender" && (!I || O)
        ? null
        : u.jsxs(u.Fragment, {
            children: [
              u.jsx(o("WAWebFlex.react").FlexRow, {
                grow: 1,
                children:
                  B &&
                  u.jsx(r("WAWebMediaHubSearchQuery.react"), {
                    tab: C,
                    search: _,
                    searchType: a,
                  }),
              }),
              u.jsx(
                o("WAWebMediaHubEmptyStates.react").WAWebMediaHubEmptyMessage,
                {
                  collection: o("WAWebAllLinksCollection").AllLinksCollection,
                  filteredMsgs: k,
                  noMsgsComponent: u.jsx(
                    o("WAWebMediaHubEmptyStates.react").WAWebMediaHubNoLinks,
                    {},
                  ),
                },
              ),
              !I &&
                u.jsx(r("WAWebMediaHubListHeader.react"), {
                  firstColumnLabel: r("fbs")._(/*BTDS*/ "Link"),
                  secondColumnLabel: r("fbs")._(/*BTDS*/ "Message"),
                  thirdColumnLabel: r("fbs")._(/*BTDS*/ "Sent by"),
                }),
              L || R
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
                : A.length > 0 &&
                  u.jsxs(
                    r("WAWebFlatListContainer.react"),
                    {
                      direction: "vertical",
                      flatListControllers: [m],
                      onScroll: x,
                      className: (e || (e = r("stylex")))([
                        d.gallery,
                        I && d.galleryWithSearch,
                      ]),
                      children: [
                        u.jsx(o("WAWebFlatList.react").FlatList, {
                          extraItems: P,
                          role: "list",
                          handleKeyboardNavigation: !0,
                          focusableItemSelector:
                            "[data-focusid='media-hub-row-item']",
                          flatListController: m,
                          direction: "vertical",
                          forceConsistentRenderCount: !1,
                          data: A,
                          renderItem: function (t, n) {
                            var e,
                              i,
                              l,
                              c = t.isGrouped,
                              m = t.link,
                              _ = t.msg;
                            function f(e) {
                              (s
                                ? p(_, e)
                                : (o(
                                    "WAWebExternalLink.react",
                                  ).openExternalLink(m.href),
                                  o("WAWebMediaHubLogger").logMediaHubAction({
                                    action: o("WAWebWamEnumActionCode")
                                      .ACTION_CODE.OPEN,
                                  })),
                                e.preventDefault(),
                                e.stopPropagation());
                            }
                            var y =
                              (e = (i = A[n]) == null ? void 0 : i.dayKey) !=
                              null
                                ? e
                                : { title: "", subtitle: "" };
                            return u.jsxs(
                              u.Fragment,
                              {
                                children: [
                                  c &&
                                    y.title !== "" &&
                                    u.jsxs(o("WAWebFlex.react").FlexColumn, {
                                      xstyle: [
                                        d.date,
                                        n === 0 && d.firstListItem,
                                      ],
                                      children: [
                                        u.jsx(r("WDSText.react"), {
                                          type: "Body1Emphasized",
                                          colorName: "contentDefault",
                                          children: y.title,
                                        }),
                                        u.jsx(r("WDSText.react"), {
                                          type: "Body2",
                                          colorName: "contentDeemphasized",
                                          children: y.subtitle,
                                        }),
                                      ],
                                    }),
                                  u.jsx(
                                    o("WAWebMediaHubListMsg.react")
                                      .WAWebMediaHubListMsg,
                                    {
                                      msg: _,
                                      onContentClick: f,
                                      searchType: a,
                                      msgContent: u.jsx(g, {
                                        msg: _,
                                        link: m,
                                        onPress: f,
                                      }),
                                      link: m,
                                      shouldShowMsgBody:
                                        m.url.trim() !==
                                        ((l = _.body) == null
                                          ? void 0
                                          : l.trim()),
                                      endAction: u.jsx(h, { onPress: f }),
                                      collection: o("WAWebAllLinksCollection")
                                        .AllLinksCollection,
                                    },
                                    m.href,
                                  ),
                                ],
                              },
                              y.title + "-flatlist-" + n,
                            );
                          },
                          defaultItemHeight: o("WAWebMediaHubListMsg.react")
                            .MEDIA_HUB_LIST_ROW_BASE_HEIGHT,
                          containerXstyles: d.bottom12,
                        }),
                        B && u.jsx(o("WAWebMenuItems.react").MenuSeparator, {}),
                        F &&
                          u.jsx(r("WAWebMediaHubViewMore.react"), {
                            onClick: N,
                            searchType: a,
                          }),
                      ],
                    },
                    I ? "search" : "all",
                  ),
            ],
          });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    var _ = {
      noUnderline: {
        ":hover_textDecoration": "x1lku1pv",
        ":focus-visible_textDecoration": "x1xirp8a",
        $$css: !0,
      },
      transparent: { backgroundColor: "xjbqb8w", $$css: !0 },
    };
    function f(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.link,
        a = e.msg,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = [
            o("WAWebMsgGetters").getThumbnail,
            o("WAWebMsgGetters").getThumbnailHQ,
          ]),
          (t[0] = i))
        : (i = t[0]);
      var l = o("useWAWebMsgValues").useMsgValues(a.id, i),
        s = l[0],
        c = l[1],
        d = c != null && c !== "" ? c : s,
        m = d != null && d !== "",
        p;
      return (
        t[1] !== m || t[2] !== n || t[3] !== a || t[4] !== d
          ? ((p = u.jsx(r("WAWebLinkIconContained.react"), {
              backgroundXstyle: _.transparent,
              icon: m
                ? u.jsx(o("WAWebCopyPasteSelectable.react").SelectableImg, {
                    selectable: !1,
                    "data-testid": void 0,
                    className:
                      "x1useyqa xsdox4t xbrszos xea3l6g x18isctg x2q3nzr xl1xv1r",
                    alt: "",
                    src: "data:image/jpeg;base64," + (d != null ? d : ""),
                  })
                : u.jsx(r("WAWebMediaHubLinkFavicon.react"), {
                    msg: a,
                    link: n,
                  }),
            })),
            (t[1] = m),
            (t[2] = n),
            (t[3] = a),
            (t[4] = d),
            (t[5] = p))
          : (p = t[5]),
        p
      );
    }
    function g(e) {
      var t = e.link,
        n = e.msg,
        a = e.onPress,
        i = o("WAWebMediaHubContextProvider").useWAWebMediaHubContext(),
        l = i.searchQuery,
        s = o("useWAWebMsgValues").useMsgValues(n.id, [
          o("WAWebMsgGetters").getTitle,
          o("WAWebMsgGetters").getDescription,
        ]),
        c = s[0],
        m = s[1],
        p = o("useWAWebMsgValues").useMsgValues(n.id, [
          o("WAWebFrontendMsgGetters").getRtl,
        ]),
        g = p[0],
        h = r("WAWebURLUtils").withoutWww(r("WAWebURLUtils").hostname(t.url)),
        y = c != null ? c : m,
        C = o("WAWebFormatConfiguration").SearchName({ terms: [l] });
      return u.jsx(o("WAWebFlex.react").FlexRow, {
        xstyle: d.text,
        gap: 8,
        children: u.jsxs(o("WAWebClickable.react").Clickable, {
          onClick: a,
          xstyle: d.container,
          children: [
            u.jsx(f, { msg: n, link: t }),
            u.jsx(r("WAWebMediaLinkPreviewDescription.react"), {
              isCompose: !1,
              isComposeHQPreview: !1,
              isFullPreview: !1,
              isHighQualityLayout: !1,
              isStatus: !1,
              useTextLimit: !1,
              children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
                gap: 2,
                children: [
                  u.jsx(r("WDSText.react"), {
                    type: "Body2Emphasized",
                    colorName: "contentDefault",
                    children: u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                      href: t.href,
                      xstyle: [d.link, d.captionText, _.noUnderline],
                      children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
                        direction: "auto",
                        dirMismatch: g !== r("WAWebL10N").isRTL(),
                        text: y != null ? y : t.url,
                        formatters: C,
                      }),
                    }),
                  }),
                  u.jsx(r("WDSText.react"), {
                    type: "Body3",
                    colorName: "contentDeemphasized",
                    children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
                      direction: "auto",
                      dirMismatch: g !== r("WAWebL10N").isRTL(),
                      text: h,
                      formatters: C,
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.onPress,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = r("fbs")._(/*BTDS*/ "Open in browser")), (t[0] = a))
        : (a = t[0]);
      var i;
      return (
        t[1] !== n
          ? ((i = u.jsx(r("WDSTooltip.react"), {
              label: a,
              children: u.jsx(r("WDSButton.react"), {
                size: "small",
                Icon: r("WDSIconIcOpenInNew.react"),
                variant: "borderless",
                xstyle: d.endAction,
                onPress: n,
              }),
            })),
            (t[1] = n),
            (t[2] = i))
          : (i = t[2]),
        i
      );
    }
    l.default = p;
  },
  226,
);
