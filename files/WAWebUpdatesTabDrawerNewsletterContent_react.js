__d(
  "WAWebUpdatesTabDrawerNewsletterContent.react",
  [
    "fbt",
    "WAWebChatEntryPoint",
    "WAWebChatSearchQuery",
    "WAWebCommonNewsletterStrings",
    "WAWebFlatList.react",
    "WAWebFlatListContainer.react",
    "WAWebFlatListController",
    "WAWebKeyboardHotKeys.react",
    "WAWebNewsletterCollection",
    "WAWebNewsletterDrawerListItem.react",
    "WAWebNewsletterRecommendedUnit.flow",
    "WAWebNewsletterRecommendedUnitProvider.react",
    "WAWebTabOrder",
    "WAWebTimeSpentLoggingNavigation",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebNewsletterInboxSearch",
    "useWAWebRecommendedNewsletters",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useMemo,
      _ = d.useRef,
      f = d.useState,
      g = {
        flatListContainer: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          height: "x5yr21d",
          overflowY: "x1odjw0f",
          $$css: !0,
        },
        flatListContainerRefreshed: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          alignSelf: "xkh2ocl",
          height: "xg7h5cd",
          overflowY: "xryxfnj",
          $$css: !0,
        },
        otherChannelsSearchHeader: {
          paddingInlineStart: "x1phvje8",
          paddingTop: "x1h678fw",
          $$css: !0,
        },
      };
    function h(t) {
      var n = t.directoryNewsletters,
        a = t.handleSelectNewsletter,
        i = t.listData,
        l = t.loadingDirectory,
        u = t.newsletters,
        d = t.onCreateNewsletter,
        h = t.onNewsletterDirectorySearch,
        b = t.scrollListIntoFocusedItem,
        S = t.searchText,
        R = t.selectionRef,
        L = t.setListData,
        E = t.tryFetchDirectoryNewsletters,
        k = o("useWAWebRecommendedNewsletters").useRecommendedNewsletters(),
        I = k[0],
        T = k[1],
        D = _(),
        x = _(),
        $ = R.current,
        P = $.list,
        N = $.value,
        M = p(
          function () {
            return i.filter(function (e) {
              return (
                e.type ===
                  o("WAWebNewsletterDrawerListItem.react").TabCellDataType
                    .NEWSLETTER_CHAT_CELL ||
                e.type ===
                  o("WAWebNewsletterDrawerListItem.react").TabCellDataType
                    .NEWSLETTER_DIRECTORY_CELL
              );
            });
          },
          [i],
        );
      (P.length === 0 || M !== P) && ($.init(M), N != null && $.setVal(N));
      var w = f(0),
        A = w[0],
        F = w[1],
        O = _(new (o("WAWebChatSearchQuery").SearchQuery)()),
        B = S.trim(),
        W = o("useWAWebNewsletterInboxSearch").useNewsletterInboxSearch({
          filteredText: B,
        }),
        q = _(new (r("WAWebFlatListController"))());
      (m(
        function () {
          var e = W(u);
          F(e.length);
          var t = v({
            subscribedNewsletters: e,
            directoryNewsletters: n,
            trimmedSearchText: B,
            loadingDirectory: l,
          });
          L(t);
        },
        [u, W, n, B, L, l],
      ),
        m(
          function () {
            B !== "" && E();
          },
          [E, B],
        ),
        m(
          function () {
            var e;
            if (!((e = x.current) != null && e.hasFocus())) {
              var t = r("WAWebNewsletterCollection").getActive(),
                n = i.find(function (e) {
                  return (
                    e.type ===
                      o("WAWebNewsletterDrawerListItem.react").TabCellDataType
                        .NEWSLETTER_CHAT_CELL && e.newsletter === t
                  );
                });
              n != null && R.current.setVal(n, !1);
            }
          },
          [i, R],
        ));
      var U = function () {
          var e = o("WAWebFlatList.react").DEFAULT_ITEM_HEIGHT;
          return e + 4;
        },
        V = function (t) {
          if (u.length !== 0) {
            (t == null || t.preventDefault(), t == null || t.stopPropagation());
            var e = R.current.prev();
            e > -1 && (R.current.setPrev(!0), b());
          }
        },
        H = function (t) {
          if (u.length !== 0) {
            (t == null || t.preventDefault(), t == null || t.stopPropagation());
            var e = R.current.next();
            R.current.index !== e && (R.current.setNext(!0), b());
          }
        },
        G = function () {
          if (R.current.value) {
            var e = R.current.index;
            R.current.setVal(i[e], !0);
          } else R.current.setFirst(!0);
        },
        z = { down: H, up: V },
        j = B === "" && u.length <= 0,
        K = B === "" && u.length > 0 && (T.length > 0 || I),
        Q = c.jsxs(r("WAWebFlatListContainer.react"), {
          className: (e || (e = r("stylex")))([
            g.flatListContainer,
            g.flatListContainerRefreshed,
          ]),
          flatListControllers: [q.current],
          children: [
            c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              tabIndex: i.length === 0 ? -1 : 0,
              "data-tab": o("WAWebTabOrder").TAB_ORDER.NEWSLETTER_TAB_LIST,
              handlers: z,
              onFocus: function (t) {
                t.target === D.current && G();
              },
              ref: D,
              children: c.jsx(o("WAWebFlatList.react").FlatList, {
                data: i,
                className_DONOTUSE: "x1xzczws",
                flatListController: q.current,
                direction: "vertical",
                role: "navigation",
                "aria-label": s._(/*BTDS*/ "Channel list").toString(),
                defaultItemHeight: U(),
                renderItem: function (t, r) {
                  return c.jsx(
                    o("WAWebNewsletterDrawerListItem.react")
                      .NewsletterDrawerListItem,
                    {
                      data: t,
                      selectionRef: R.current,
                      onSelect: a,
                      onNewsletterDirectorySearch: h,
                      loading: I,
                      bottomDirectoryIndex: n.length - 1,
                      firstCellInList:
                        t.type ===
                          o("WAWebNewsletterDrawerListItem.react")
                            .TabCellDataType.NEWSLETTER_CHAT_CELL &&
                        t.firstCellInList &&
                        B !== "",
                      searchQuery: O.current,
                      index: r,
                      subscribedNewslettersCount: A,
                    },
                  );
                },
              }),
            }),
            K &&
              c.jsx(r("WAWebNewsletterRecommendedUnitProvider.react"), {
                isLoading: I,
                layout: o("WAWebNewsletterRecommendedUnit.flow")
                  .RecommendedUnitLayoutType.Row,
                recommendedNewsletters: T,
                onSeeAllClick: h,
                onCreateNewsletter: d,
              }),
          ],
        });
      return c.jsxs(c.Fragment, {
        children: [
          j &&
            c.jsx(r("WAWebNewsletterRecommendedUnitProvider.react"), {
              isLoading: I,
              layout: o("WAWebNewsletterRecommendedUnit.flow")
                .RecommendedUnitLayoutType.Block,
              recommendedNewsletters: T,
              onSeeAllClick: h,
              onCreateNewsletter: d,
            }),
          B !== "" ? c.jsx(C, { children: Q }) : c.jsx(y, { children: Q }),
        ],
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = o("react-compiler-runtime").c(1),
        n = e.children,
        r;
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = { surface: "channel-updates-home" }), (t[0] = r))
          : (r = t[0]),
        o("WAWebTimeSpentLoggingNavigation").useTsNavigation(r),
        n
      );
    }
    function C(e) {
      var t = o("react-compiler-runtime").c(1),
        n = e.children,
        r;
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = { surface: "channel-updates-home-search" }), (t[0] = r))
          : (r = t[0]),
        o("WAWebTimeSpentLoggingNavigation").useTsNavigation(r),
        n
      );
    }
    var b = 58;
    function v(e) {
      var t = e.directoryNewsletters,
        n = e.loadingDirectory,
        r = e.subscribedNewsletters,
        a = e.trimmedSearchText,
        i = [],
        l = a !== "";
      return (
        l &&
          r.length > 0 &&
          i.push({
            type: o("WAWebNewsletterDrawerListItem.react").TabCellDataType
              .NEWSLETTER_CELL_HEADER,
            itemKey: "followed_channels_search_header",
            title: o(
              "WAWebCommonNewsletterStrings",
            ).getFollowedChannelsSearchHeader(),
            height: b,
            hasTopBorder: !1,
          }),
        r.forEach(function (e, t) {
          i.push({
            itemKey: "newsletter-local-" + e.id.toString(),
            type: o("WAWebNewsletterDrawerListItem.react").TabCellDataType
              .NEWSLETTER_CHAT_CELL,
            newsletter: e,
            index: t,
            firstCellInList: t === 0,
            chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
              .NewsletterChatlist,
          });
        }),
        l &&
          !n &&
          (t.length > 0
            ? (i.push({
                type: o("WAWebNewsletterDrawerListItem.react").TabCellDataType
                  .NEWSLETTER_CELL_HEADER,
                itemKey: "other_channels_search_header",
                title: o(
                  "WAWebCommonNewsletterStrings",
                ).getOtherChannelsSearchHeader(),
                height: b,
                hasTopBorder: !0,
                xstyle: g.otherChannelsSearchHeader,
              }),
              i.push.apply(i, t))
            : r.length === 0 &&
              i.push({
                type: o("WAWebNewsletterDrawerListItem.react").TabCellDataType
                  .NEWSLETTER_DIRECTORY_NO_RESULTS,
                itemKey: "no_results_found",
                height: 120,
              }),
          i.push({
            itemKey: "search-footer",
            type: o("WAWebNewsletterDrawerListItem.react").TabCellDataType
              .SEARCH_FOOTER,
          })),
        i
      );
    }
    l.WAWebUpdatesTabDrawerNewsletterContent = h;
  },
  226,
);
