__d(
  "WAWebNewsletterDirectoryListDrawerContent.react",
  [
    "fbt",
    "WAWebAccessibility.react",
    "WAWebCommonNewsletterStrings",
    "WAWebDrawerBody.react",
    "WAWebDrawerSection.react",
    "WAWebEmptyState.react",
    "WAWebFlatList.react",
    "WAWebFlatListController",
    "WAWebFocusTracer",
    "WAWebFrontendConstants",
    "WAWebKeyboardHotKeys.react",
    "WAWebNewsletterDirectoryCategoryUtils",
    "WAWebNewsletterDirectoryCell.react",
    "WAWebNewsletterDirectoryResultsLoader.react",
    "WAWebNewsletterDirectoryShimmer.react",
    "WAWebSingleSelection",
    "react",
    "react-compiler-runtime",
    "useLazyRef",
    "useWAWebNewsletterDirectoryResults",
    "useWAWebWindowSize",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useMemo,
      _ = c.useRef,
      f = { marginTop20: { marginTop: "x1nmyh1g", $$css: !0 } },
      g = 73,
      h = 2;
    function y() {
      var e = o("react-compiler-runtime").c(2),
        t = r("useWAWebWindowSize")(),
        n = t.height,
        a = Math.floor(n / g) - h,
        i;
      return (
        e[0] !== a
          ? ((i = u.jsx(r("WAWebNewsletterDirectoryShimmer.react"), {
              count: a,
            })),
            (e[0] = a),
            (e[1] = i))
          : (i = e[1]),
        i
      );
    }
    function C(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.country,
        a = e.data,
        i = e.discoverySurface,
        l = e.index,
        s = e.listView,
        c = e.newsletterCategory,
        d = e.onSelect,
        m = e.selectionRef,
        p;
      t[0] !== a || t[1] !== d
        ? ((p = function () {
            return d(a);
          }),
          (t[0] = a),
          (t[1] = d),
          (t[2] = p))
        : (p = t[2]);
      var _;
      t[3] !== c
        ? ((_ = c
            ? o(
                "WAWebNewsletterDirectoryCategoryUtils",
              ).getNewsletterSectionFromCategoryType(c)
            : "EXPLORE"),
          (t[3] = c),
          (t[4] = _))
        : (_ = t[4]);
      var f;
      return (
        t[5] !== n ||
        t[6] !== a.chatEntryPoint ||
        t[7] !== a.directoryFunnelLogger ||
        t[8] !== a.newsletter ||
        t[9] !== i ||
        t[10] !== l ||
        t[11] !== s ||
        t[12] !== m ||
        t[13] !== p ||
        t[14] !== _
          ? ((f = u.jsx(r("WAWebDrawerSection.react"), {
              animation: !1,
              children: u.jsx(r("WAWebNewsletterDirectoryCell.react"), {
                active: m,
                newsletter: a.newsletter,
                onSelect: p,
                chatEntryPoint: a.chatEntryPoint,
                index: l,
                directoryFunnelLogger: a.directoryFunnelLogger,
                discoverySurface: i,
                newsletterDirectorySectionName: _,
                country: n,
                listView: s,
              }),
            })),
            (t[5] = n),
            (t[6] = a.chatEntryPoint),
            (t[7] = a.directoryFunnelLogger),
            (t[8] = a.newsletter),
            (t[9] = i),
            (t[10] = l),
            (t[11] = s),
            (t[12] = m),
            (t[13] = p),
            (t[14] = _),
            (t[15] = f))
          : (f = t[15]),
        f
      );
    }
    function b(e) {
      var t = e.category,
        n = e.chatEntryPoint,
        a = e.countryCode,
        i = e.directorySurface,
        l = e.discoverySurface,
        c = e.focusOnMount,
        g = e.listView,
        h = e.newsletterDirectoryFunnelLogger,
        b = e.onLoadStateChange,
        v = e.searchText,
        S = _(),
        R = _(),
        L = r("useLazyRef")(function () {
          return new (r("WAWebSingleSelection"))([], function (e) {
            return e.itemKey;
          });
        }),
        E = p(function () {
          return new (r("WAWebFlatListController"))();
        }, []),
        k = _(),
        I = _(!1),
        T = d(function () {
          S.current && r("WAWebFocusTracer").focus(S.current);
        }, []),
        D = o(
          "useWAWebNewsletterDirectoryResults",
        ).useNewsletterDirectoryResults({
          countryCode: a,
          searchText: v,
          listView: g,
          newsletterDirectoryFunnelLogger: h,
          category: t,
          skipSubscribedNewsletters: !1,
          chatEntryPoint: n,
        }),
        x = D[0],
        $ = D[1],
        P = D[2],
        N = D[3],
        M = D[4],
        w = D[5],
        A = D[6],
        F = D[7],
        O = D[8],
        B = D[9];
      b(w);
      var W = p(
          function () {
            return M() ? x : [].concat(x, B);
          },
          [x, M, B],
        ),
        q = d(
          function () {
            return E.setScrollFromStart(0);
          },
          [E],
        );
      (m(
        function () {
          (P(), q());
        },
        [P, q],
      ),
        m(
          function () {
            L.current.list.length === 0 && L.current.init(W);
          },
          [L, W],
        ),
        m(
          function () {
            c && T();
          },
          [c, T],
        ),
        m(
          function () {
            W.length &&
              I.current === !1 &&
              (E.setScrollFromStart(0), (I.current = !0));
          },
          [W, E],
        ));
      var U = function () {
        if (R.current) {
          var e = L.current.value;
          if (e == null) return;
          var t = W.findIndex(function (t) {
            return t.itemKey === e.itemKey;
          });
          if (t !== -1) {
            var n;
            (n = R.current) == null || n.scrollIntoViewIfNeeded(t, 100);
          }
        }
      };
      m(
        function () {
          (h.setDirectorySurface(i), h.setPillSelected(g));
        },
        [h],
      );
      var V = function (t) {
          if (W.length !== 0) {
            (t == null || t.preventDefault(), t == null || t.stopPropagation());
            var e = L.current.prev();
            e > -1 && (L.current.setPrev(!0), U());
          }
        },
        H = function (t) {
          if (W.length !== 0) {
            (t == null || t.preventDefault(), t == null || t.stopPropagation());
            var e = L.current.next();
            L.current.index !== e && (L.current.setNext(!0), U());
          }
        },
        G = function (t) {
          return (
            t.scrollTop + o("WAWebFrontendConstants").SCROLL_FUDGE >=
            t.scrollHeight - t.clientHeight
          );
        },
        z = function () {
          k.current != null && G(k.current) && $() && N();
        },
        j = function (t) {
          L.current.setVal(t);
        },
        K = { down: H, up: V },
        Q =
          W.length > 0
            ? u.jsx(o("WAWebFlatList.react").FlatList, {
                ref: R,
                data: W,
                renderItem: function (n, r) {
                  return u.jsx(C, {
                    data: n,
                    index: r,
                    selectionRef: L.current,
                    onSelect: j,
                    discoverySurface: l,
                    newsletterCategory: t == null ? void 0 : t.type,
                    listView: g,
                    country: a,
                  });
                },
                flatListController: E,
                direction: "vertical",
                role: "navigation",
                "aria-label": s._(/*BTDS*/ "Channel list").toString(),
              })
            : u.jsx(o("WAWebEmptyState.react").NoSearchResults, {
                testid: void 0,
                xstyle: f.marginTop20,
                center: !1,
              });
      return u.jsx(r("WAWebDrawerBody.react"), {
        flatListControllers: [E],
        ref: k,
        onScroll: z,
        children: u.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
          ref: S,
          handlers: K,
          children: [
            u.jsx(r("WAWebNewsletterDirectoryResultsLoader.react"), {
              loadingShimmer: w ? u.jsx(y, {}) : null,
              onOfflineRetry: P,
              onServerErrorRetry: function () {
                return O(!1);
              },
              isLoadingMore: A,
              serverError: F,
              children: Q,
            }),
            u.jsx(o("WAWebAccessibility.react").InvisibleAnnouncement, {
              text: o(
                "WAWebCommonNewsletterStrings",
              ).getNewsletterResultsAnnouncementString({
                isLoading: w || A,
                resultCount: W.length,
                searchText: v,
              }),
            }),
          ],
        }),
      });
    }
    ((b.displayName = b.name + " [from " + i.id + "]"), (l.default = b));
  },
  226,
);
