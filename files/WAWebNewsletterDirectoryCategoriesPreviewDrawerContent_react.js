__d(
  "WAWebNewsletterDirectoryCategoriesPreviewDrawerContent.react",
  [
    "fbt",
    "WAWebDrawerBody.react",
    "WAWebDrawerSection.react",
    "WAWebEmptyState.react",
    "WAWebFlatList.react",
    "WAWebFlatListController",
    "WAWebFocusTracer",
    "WAWebKeyboardHotKeys.react",
    "WAWebNewsletterDirectoryCategoriesShimmer.react",
    "WAWebNewsletterDirectoryCategoryUtils",
    "WAWebNewsletterDirectoryCell.react",
    "WAWebNewsletterDirectoryEntrySectionHeader.react",
    "WAWebNewsletterDirectoryResultsLoader.react",
    "WAWebNewsletterTabDrawerUtils",
    "WAWebSingleSelection",
    "WAWebTimeSpentLoggingNavigation",
    "WAWebWamEnumChannelDirectoryEntryPoint",
    "WAWebWamEnumThreadType",
    "WAWebWamEnumTsSurface",
    "react",
    "useLazyRef",
    "useWAWebNewsletterDirectorySections",
    "useWAWebWindowSize",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useMemo,
      _ = c.useRef,
      f = 130,
      g = 220,
      h = {
        sectionHeader: {
          paddingInlineEnd: "xvtqlqk",
          paddingInlineStart: "x1phvje8",
          paddingTop: "x1p57kb1",
          $$css: !0,
        },
        marginTop20: { marginTop: "x1nmyh1g", $$css: !0 },
      };
    function y() {
      var e = r("useWAWebWindowSize")();
      return u.jsx(r("WAWebNewsletterDirectoryCategoriesShimmer.react"), {
        height: e.height - f - g,
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = e.countrySelector,
        n = e.data,
        a = e.onSeeAllNewsletters,
        i = e.onSelect,
        l = e.selectionRef;
      switch (n.type) {
        case o("useWAWebNewsletterDirectorySections").TabCellDataType
          .NEWSLETTER_DIRECTORY_SECTION_HEADER:
          return u.jsx(r("WAWebDrawerSection.react"), {
            animation: !1,
            children: u.jsx(
              r("WAWebNewsletterDirectoryEntrySectionHeader.react"),
              {
                active: l,
                xstyle: h.sectionHeader,
                title: n.title,
                onSeeAllNewsletters: function () {
                  var e;
                  a({
                    entryPoint: o("WAWebWamEnumChannelDirectoryEntryPoint")
                      .CHANNEL_DIRECTORY_ENTRY_POINT.FIND_CHANNELS_BUTTON,
                    category:
                      (e = o(
                        "WAWebNewsletterDirectoryCategoryUtils",
                      ).getNewsletterCategoryFromSection(n.section)) != null
                        ? e
                        : void 0,
                    sectionName: n.section,
                    sectionIndex: n.sectionIndex,
                  });
                },
                subtitle: n.subtitle,
              },
            ),
          });
        case o("useWAWebNewsletterDirectorySections").TabCellDataType
          .NEWSLETTER_DIRECTORY_CELL:
          return u.jsx(r("WAWebDrawerSection.react"), {
            animation: !1,
            children: u.jsx(r("WAWebNewsletterDirectoryCell.react"), {
              active: l,
              onSelect: function () {
                return i(n);
              },
              newsletter: n.newsletter,
              chatEntryPoint: n.chatEntryPoint,
              directoryFunnelLogger: n.directoryFunnelLogger,
              discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE
                .CHANNEL_DIRECTORY_CATEGORIES,
              index: n.index,
              country: t,
              newsletterDirectorySectionName: n.section,
              newsletterDirectorySectionIndex: n.sectionIndex,
              testid: void 0,
            }),
          });
        default:
          return (n.type, null);
      }
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t = e.countryCode,
        n = e.newsletterDirectoryFunnelLogger,
        a = e.onCategoriesLoad,
        i = e.onSeeAllNewsletters,
        l = _(),
        c = r("useLazyRef")(function () {
          return new (r("WAWebSingleSelection"))([], function (e) {
            return e.itemKey;
          });
        });
      o("WAWebTimeSpentLoggingNavigation").useTsNavigation({
        surface: "channel-directory-categories-home",
        extras: { threadType: o("WAWebWamEnumThreadType").THREAD_TYPE.CHANNEL },
      });
      var f = _(),
        g = p(function () {
          return new (r("WAWebFlatListController"))();
        }, []),
        b = _(),
        v = _(!1),
        S = o(
          "useWAWebNewsletterDirectorySections",
        ).useNewsletterDirectorySections({
          countryCode: t,
          newsletterDirectoryFunnelLogger: n,
          onCategoriesLoad: a,
        }),
        R = S[0],
        L = S[1],
        E = S[2],
        k = S[3],
        I = S[4],
        T = S[5],
        D = S[6],
        x = S[7],
        $ = function (t) {
          c.current.setVal(t);
        },
        P = d(function () {
          f.current && r("WAWebFocusTracer").focus(f.current);
        }, []);
      m(
        function () {
          R.length &&
            v.current === !1 &&
            (g.setScrollFromStart(0), (v.current = !0));
        },
        [R, g],
      );
      var N = function () {
          if (b.current) {
            var e = c.current.value;
            if (e == null) return;
            var t = R.findIndex(function (t) {
              return t.itemKey === e.itemKey;
            });
            if (t !== -1) {
              var n;
              (n = b.current) == null || n.scrollIntoViewIfNeeded(t, 100);
            }
          }
        },
        M = function (t) {
          if (R.length !== 0) {
            (t == null || t.preventDefault(), t == null || t.stopPropagation());
            var e = c.current.prev();
            e > -1 && (c.current.setPrev(!0), N());
          }
        },
        w = function (t) {
          if (R.length !== 0) {
            (t == null || t.preventDefault(), t == null || t.stopPropagation());
            var e = c.current.next();
            c.current.index !== e && (c.current.setNext(!0), N());
          }
        },
        A = { down: w, up: M };
      (m(
        function () {
          c.current.list.length === 0 && c.current.init(R);
        },
        [c, R],
      ),
        m(
          function () {
            E();
          },
          [E],
        ),
        m(
          function () {
            P();
          },
          [P],
        ));
      var F = function (t) {
          var e = t.category,
            n = t.entryPoint,
            r = t.sectionIndex,
            o = t.sectionName;
          i({ entryPoint: n, category: e, sectionName: o, sectionIndex: r });
        },
        O = function () {
          l.current != null &&
            o("WAWebNewsletterTabDrawerUtils").isScrollAtBottomOfList(
              l.current,
            ) &&
            L() &&
            k();
        },
        B =
          R.length > 0
            ? u.jsx(o("WAWebFlatList.react").FlatList, {
                ref: b,
                data: R,
                renderItem: function (n) {
                  return u.jsx(C, {
                    data: n,
                    onSeeAllNewsletters: F,
                    onSelect: $,
                    selectionRef: c.current,
                    countrySelector: t,
                  });
                },
                flatListController: g,
                direction: "vertical",
                role: "navigation",
                "aria-label": s
                  ._(/*BTDS*/ "Channel Directory Categories list")
                  .toString(),
              })
            : u.jsx(o("WAWebEmptyState.react").NoSearchResults, {
                testid: void 0,
                xstyle: h.marginTop20,
                center: !1,
              });
      return u.jsx(r("WAWebDrawerBody.react"), {
        ref: l,
        flatListControllers: [g],
        onScroll: O,
        children: u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
          ref: f,
          handlers: A,
          "aria-label": s._(/*BTDS*/ "Channel Directory Categories Drawer"),
          children: u.jsx(r("WAWebNewsletterDirectoryResultsLoader.react"), {
            onOfflineRetry: E,
            onServerErrorRetry: function () {
              return x(!1);
            },
            loadingShimmer: I ? u.jsx(y, {}) : null,
            isLoadingMore: T,
            serverError: D,
            children: B,
          }),
        }),
      });
    }
    ((b.displayName = b.name + " [from " + i.id + "]"), (l.default = b));
  },
  226,
);
