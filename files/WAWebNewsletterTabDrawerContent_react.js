__d(
  "WAWebNewsletterTabDrawerContent.react",
  [
    "fbt",
    "WAWebChatEntryPoint",
    "WAWebChatSearchQuery",
    "WAWebCommonNewsletterStrings",
    "WAWebFlatList.react",
    "WAWebFlatListContainer.react",
    "WAWebFlatListController",
    "WAWebKeyboardHotKeys.react",
    "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
    "WAWebNewsletterCollection",
    "WAWebNewsletterDirectoryFilterUtils",
    "WAWebNewsletterDirectoryFunnelLogging",
    "WAWebNewsletterDrawerListItem.react",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterInboxSearch.react",
    "WAWebNewsletterInboxSearchLogging",
    "WAWebNewsletterRecommendedUnit.flow",
    "WAWebNewsletterRecommendedUnitProvider.react",
    "WAWebNewsletterTabDrawerUtils",
    "WAWebSideNavButtonsActivityModel",
    "WAWebSingleSelection",
    "WAWebTabOrder",
    "WAWebTimeSpentLoggingNavigation",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumUpdateTabSearchEventType",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useLazyRef",
    "useWAWebDebouncedSearch",
    "useWAWebNewsletterDirectoryResults",
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
          overflowX: "x6ikm8r",
          overflowY: "x1odjw0f",
          $$css: !0,
        },
        flatListContainerRefreshed: {
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "xefzj8c",
          paddingInlineStart: "x1c1uobl",
          $$css: !0,
        },
        flatListViewport: { paddingTop: "x16ovd2e", $$css: !0 },
      };
    function h(t) {
      var n = t.initialScrollTop,
        a = t.newsletters,
        i = t.onCreateNewsletter,
        l = t.onNewsletterDirectorySearch,
        u = t.setScrollTop,
        d = a.length <= 0,
        h = o("useWAWebRecommendedNewsletters").useRecommendedNewsletters(),
        b = h[0],
        S = h[1],
        R = f([]),
        L = R[0],
        E = R[1],
        k = _(),
        I = _(),
        T = _(n != null ? n : 0),
        D = _(n != null ? n : 0),
        x = _(!1),
        $ = _(),
        P = _(),
        N = _(
          new (o(
            "WAWebNewsletterDirectoryFunnelLogging",
          ).NewsletterDirectoryFunnelLogger)(),
        ),
        M = r("useLazyRef")(function () {
          return new (r("WAWebFlatListController"))();
        }),
        w = r("useLazyRef")(function () {
          return new (r("WAWebSingleSelection"))([], function (e) {
            return e.itemKey;
          });
        }),
        A = w.current,
        F = A.list,
        O = A.value,
        B = p(
          function () {
            return L.filter(function (e) {
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
          [L],
        );
      (F.length === 0 || B !== F) && (A.init(B), O != null && A.setVal(O));
      var W = r("useWAWebDebouncedSearch")(
          o(
            "WAWebNewsletterGatingUtils",
          ).getNewsletterDirectorySearchDebounce(),
        ),
        q = W[0],
        U = W[1],
        V = f(0),
        H = V[0],
        G = V[1],
        z = _(new (o("WAWebChatSearchQuery").SearchQuery)()),
        j = q.trim(),
        K = o(
          "useWAWebNewsletterDirectoryResults",
        ).useNewsletterDirectoryResults({
          searchText: j,
          countryCode: o(
            "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
          ).getCountryCodeIso(
            o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE().user,
          ),
          listView: o("WAWebNewsletterDirectoryFilterUtils")
            .NewsletterDirectoryListView.Recommended,
          newsletterDirectoryFunnelLogger: N.current,
          skipSubscribedNewsletters: !0,
          chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
            .NewsletterUpdatesTab,
        }),
        Q = K[0],
        X = K[1],
        Y = K[2],
        J = K[3],
        Z = K[4],
        ee = K[5],
        te = o("useWAWebNewsletterInboxSearch").useNewsletterInboxSearch({
          filteredText: j,
        });
      (m(
        function () {
          var e = te(a);
          G(e.length);
          var t = v({
            subscribedNewsletters: e,
            directoryNewsletters: Q,
            trimmedSearchText: j,
            loadingDirectory: ee,
          });
          E(t);
        },
        [a, te, Q, j, ee],
      ),
        m(
          function () {
            j !== "" && Y();
          },
          [Y, j],
        ),
        m(
          function () {
            if (j === "") {
              var e;
              (e = M.current) == null || e.setScrollFromStart(D.current);
              return;
            }
            if (L.length > 0) {
              var t;
              (t = I.current) == null || t.scrollIntoViewIfNeeded(0);
            }
          },
          [j, M, L.length],
        ),
        m(
          function () {
            var e;
            if (!((e = P.current) != null && e.hasFocus())) {
              var t = r("WAWebNewsletterCollection").getActive(),
                n = L.find(function (e) {
                  return (
                    e.type ===
                      o("WAWebNewsletterDrawerListItem.react").TabCellDataType
                        .NEWSLETTER_CHAT_CELL && e.newsletter === t
                  );
                });
              n != null && w.current.setVal(n, !1);
            }
          },
          [L, w],
        ),
        m(
          function () {
            return (
              L.length &&
                x.current === !1 &&
                (M.current.setScrollFromStart(n != null ? n : 0),
                (x.current = !0)),
              function () {
                return u == null ? void 0 : u(T.current);
              }
            );
          },
          [L.length, n, u, M],
        ));
      var ne = function (t) {
          ((T.current = t.currentTarget.scrollTop),
            q.trim() === "" && (D.current = t.currentTarget.scrollTop));
          var e = k.current;
          e == null ||
            j === "" ||
            (o("WAWebNewsletterTabDrawerUtils").isScrollAtBottomOfList(e) &&
              X() &&
              J());
        },
        re = function () {
          var e = o("WAWebFlatList.react").DEFAULT_ITEM_HEIGHT;
          return e + 4;
        },
        oe = function (t) {
          switch (t.type) {
            case o("WAWebNewsletterDrawerListItem.react").TabCellDataType
              .NEWSLETTER_CHAT_CELL:
            case o("WAWebNewsletterDrawerListItem.react").TabCellDataType
              .NEWSLETTER_DIRECTORY_CELL:
              o(
                "WAWebSideNavButtonsActivityModel",
              ).setLastActiveNewsletterEntryPoint(t.chatEntryPoint);
              break;
          }
          if (j !== "")
            switch (t.type) {
              case o("WAWebNewsletterDrawerListItem.react").TabCellDataType
                .NEWSLETTER_CHAT_CELL:
                o(
                  "WAWebNewsletterInboxSearchLogging",
                ).logNewsletterInboxSearchEvent({
                  updateTabSearchEventType: o(
                    "WAWebWamEnumUpdateTabSearchEventType",
                  ).UPDATE_TAB_SEARCH_EVENT_TYPE.ITEM_TAP,
                });
                break;
              case o("WAWebNewsletterDrawerListItem.react").TabCellDataType
                .NEWSLETTER_DIRECTORY_CELL:
                o(
                  "WAWebNewsletterInboxSearchLogging",
                ).logNewsletterInboxSearchEvent({
                  updateTabSearchEventType: o(
                    "WAWebWamEnumUpdateTabSearchEventType",
                  ).UPDATE_TAB_SEARCH_EVENT_TYPE.ITEM_TAP,
                });
                break;
            }
          w.current.setVal(t);
        },
        ae = function () {
          if (I.current) {
            var e = w.current.value;
            if (e == null) return;
            var t = L.findIndex(function (t) {
              return t.itemKey === e.itemKey;
            });
            if (t !== -1) {
              var n;
              (n = I.current) == null || n.scrollIntoViewIfNeeded(t, 100);
            }
          }
        },
        ie = function (t) {
          if (a.length !== 0) {
            (t == null || t.preventDefault(), t == null || t.stopPropagation());
            var e = w.current.prev();
            e > -1 && (w.current.setPrev(!0), ae());
          }
        },
        le = function (t) {
          if (a.length !== 0) {
            (t == null || t.preventDefault(), t == null || t.stopPropagation());
            var e = w.current.next();
            w.current.index !== e && (w.current.setNext(!0), ae());
          }
        },
        se = function () {
          if (w.current.value) {
            var e = w.current.index;
            w.current.setVal(L[e], !0);
          } else w.current.setFirst(!0);
        },
        ue = { down: le, up: ie },
        ce = d
          ? null
          : c.jsx(r("WAWebNewsletterInboxSearch.react"), {
              ref: P,
              filteredText: j,
              handleSearchChange: U,
              handleSelectNewsletter: oe,
              listData: L,
              newsletters: a,
              searchQuery: z.current,
            }),
        de = j === "" && !d && (S.length > 0 || b),
        me = c.jsxs(r("WAWebFlatListContainer.react"), {
          className: (e || (e = r("stylex")))([
            g.flatListContainer,
            g.flatListContainerRefreshed,
          ]),
          ref: k,
          onScroll: ne,
          flatListControllers: [M.current],
          children: [
            c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              tabIndex: L.length === 0 ? -1 : 0,
              "data-tab": o("WAWebTabOrder").TAB_ORDER.NEWSLETTER_TAB_LIST,
              handlers: ue,
              onFocus: function (t) {
                t.target === $.current && se();
              },
              ref: $,
              children: c.jsx(o("WAWebFlatList.react").FlatList, {
                ref: I,
                data: L,
                className_DONOTUSE: "x1xzczws",
                flatListController: M.current,
                direction: "vertical",
                role: "navigation",
                "aria-label": s._(/*BTDS*/ "Channel list").toString(),
                defaultItemHeight: re(),
                viewportXstyles: g.flatListViewport,
                renderItem: function (t, n) {
                  return c.jsx(
                    o("WAWebNewsletterDrawerListItem.react")
                      .NewsletterDrawerListItem,
                    {
                      data: t,
                      selectionRef: w.current,
                      onSelect: oe,
                      onNewsletterDirectorySearch: l,
                      loading: b,
                      bottomDirectoryIndex: Q.length - 1,
                      firstCellInList:
                        t.type ===
                          o("WAWebNewsletterDrawerListItem.react")
                            .TabCellDataType.NEWSLETTER_CHAT_CELL &&
                        t.firstCellInList &&
                        j !== "",
                      searchQuery: z.current,
                      index: n,
                      subscribedNewslettersCount: H,
                    },
                  );
                },
              }),
            }),
            de &&
              c.jsx(r("WAWebNewsletterRecommendedUnitProvider.react"), {
                isLoading: b,
                layout: o("WAWebNewsletterRecommendedUnit.flow")
                  .RecommendedUnitLayoutType.Row,
                recommendedNewsletters: S,
                onSeeAllClick: l,
                onCreateNewsletter: i,
              }),
          ],
        });
      return c.jsxs(c.Fragment, {
        children: [
          ce,
          d &&
            c.jsx(r("WAWebNewsletterRecommendedUnitProvider.react"), {
              isLoading: b,
              layout: o("WAWebNewsletterRecommendedUnit.flow")
                .RecommendedUnitLayoutType.Block,
              recommendedNewsletters: S,
              onSeeAllClick: l,
              onCreateNewsletter: i,
            }),
          j !== "" ? c.jsx(C, { children: me }) : c.jsx(y, { children: me }),
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
    l.default = h;
  },
  226,
);
