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
    "react-compiler-runtime",
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
      var e = o("react-compiler-runtime").c(2),
        t = r("useWAWebWindowSize")(),
        n = t.height - f - g,
        a;
      return (
        e[0] !== n
          ? ((a = u.jsx(r("WAWebNewsletterDirectoryCategoriesShimmer.react"), {
              height: n,
            })),
            (e[0] = n),
            (e[1] = a))
          : (a = e[1]),
        a
      );
    }
    function C(e) {
      var t = o("react-compiler-runtime").c(23),
        n = e.countrySelector,
        a = e.data,
        i = e.onSeeAllNewsletters,
        l = e.onSelect,
        s = e.selectionRef;
      switch (a.type) {
        case o("useWAWebNewsletterDirectorySections").TabCellDataType
          .NEWSLETTER_DIRECTORY_SECTION_HEADER: {
          var c;
          t[0] !== a.section || t[1] !== a.sectionIndex || t[2] !== i
            ? ((c = function () {
                var e;
                i({
                  entryPoint: o("WAWebWamEnumChannelDirectoryEntryPoint")
                    .CHANNEL_DIRECTORY_ENTRY_POINT.FIND_CHANNELS_BUTTON,
                  category:
                    (e = o(
                      "WAWebNewsletterDirectoryCategoryUtils",
                    ).getNewsletterCategoryFromSection(a.section)) != null
                      ? e
                      : void 0,
                  sectionName: a.section,
                  sectionIndex: a.sectionIndex,
                });
              }),
              (t[0] = a.section),
              (t[1] = a.sectionIndex),
              (t[2] = i),
              (t[3] = c))
            : (c = t[3]);
          var d;
          return (
            t[4] !== a.subtitle || t[5] !== a.title || t[6] !== s || t[7] !== c
              ? ((d = u.jsx(r("WAWebDrawerSection.react"), {
                  animation: !1,
                  children: u.jsx(
                    r("WAWebNewsletterDirectoryEntrySectionHeader.react"),
                    {
                      active: s,
                      xstyle: h.sectionHeader,
                      title: a.title,
                      onSeeAllNewsletters: c,
                      subtitle: a.subtitle,
                    },
                  ),
                })),
                (t[4] = a.subtitle),
                (t[5] = a.title),
                (t[6] = s),
                (t[7] = c),
                (t[8] = d))
              : (d = t[8]),
            d
          );
        }
        case o("useWAWebNewsletterDirectorySections").TabCellDataType
          .NEWSLETTER_DIRECTORY_CELL: {
          var m;
          t[9] !== a || t[10] !== l
            ? ((m = function () {
                return l(a);
              }),
              (t[9] = a),
              (t[10] = l),
              (t[11] = m))
            : (m = t[11]);
          var p =
              "newsletter-directory-section-" +
              a.sectionIndex +
              "-cell-" +
              a.index,
            _;
          return (
            t[12] !== n ||
            t[13] !== a.chatEntryPoint ||
            t[14] !== a.directoryFunnelLogger ||
            t[15] !== a.index ||
            t[16] !== a.newsletter ||
            t[17] !== a.section ||
            t[18] !== a.sectionIndex ||
            t[19] !== s ||
            t[20] !== m ||
            t[21] !== p
              ? ((_ = u.jsx(r("WAWebDrawerSection.react"), {
                  animation: !1,
                  children: u.jsx(r("WAWebNewsletterDirectoryCell.react"), {
                    active: s,
                    onSelect: m,
                    newsletter: a.newsletter,
                    chatEntryPoint: a.chatEntryPoint,
                    directoryFunnelLogger: a.directoryFunnelLogger,
                    discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE
                      .CHANNEL_DIRECTORY_CATEGORIES,
                    index: a.index,
                    country: n,
                    newsletterDirectorySectionName: a.section,
                    newsletterDirectorySectionIndex: a.sectionIndex,
                    testid: void 0,
                  }),
                })),
                (t[12] = n),
                (t[13] = a.chatEntryPoint),
                (t[14] = a.directoryFunnelLogger),
                (t[15] = a.index),
                (t[16] = a.newsletter),
                (t[17] = a.section),
                (t[18] = a.sectionIndex),
                (t[19] = s),
                (t[20] = m),
                (t[21] = p),
                (t[22] = _))
              : (_ = t[22]),
            _
          );
        }
        default:
          return null;
      }
    }
    function b(e) {
      var t = o("react-compiler-runtime").c(66),
        n = e.countryCode,
        a = e.newsletterDirectoryFunnelLogger,
        i = e.onCategoriesLoad,
        l = e.onSeeAllNewsletters,
        c = _(),
        d = r("useLazyRef")(v),
        p;
      (t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = {
            surface: "channel-directory-categories-home",
            extras: {
              threadType: o("WAWebWamEnumThreadType").THREAD_TYPE.CHANNEL,
            },
          }),
          (t[0] = p))
        : (p = t[0]),
        o("WAWebTimeSpentLoggingNavigation").useTsNavigation(p));
      var f = _(),
        g;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = new (r("WAWebFlatListController"))()), (t[1] = g))
        : (g = t[1]);
      var b = g,
        S = _(),
        R = _(!1),
        L;
      t[2] !== n || t[3] !== a || t[4] !== i
        ? ((L = {
            countryCode: n,
            newsletterDirectoryFunnelLogger: a,
            onCategoriesLoad: i,
          }),
          (t[2] = n),
          (t[3] = a),
          (t[4] = i),
          (t[5] = L))
        : (L = t[5]);
      var E = o(
          "useWAWebNewsletterDirectorySections",
        ).useNewsletterDirectorySections(L),
        k = E[0],
        I = E[1],
        T = E[2],
        D = E[3],
        x = E[4],
        $ = E[5],
        P = E[6],
        N = E[7],
        M;
      t[6] !== d
        ? ((M = function (t) {
            d.current.setVal(t);
          }),
          (t[6] = d),
          (t[7] = M))
        : (M = t[7]);
      var w = M,
        A;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = function () {
            f.current && r("WAWebFocusTracer").focus(f.current);
          }),
          (t[8] = A))
        : (A = t[8]);
      var F = A,
        O;
      t[9] !== k.length
        ? ((O = function () {
            k.length &&
              R.current === !1 &&
              (b.setScrollFromStart(0), (R.current = !0));
          }),
          (t[9] = k.length),
          (t[10] = O))
        : (O = t[10]);
      var B;
      (t[11] !== k ? ((B = [k, b]), (t[11] = k), (t[12] = B)) : (B = t[12]),
        m(O, B));
      var W;
      t[13] !== k || t[14] !== d
        ? ((W = function () {
            if (S.current) {
              var e = d.current.value;
              if (e == null) return;
              var t = k.findIndex(function (t) {
                return t.itemKey === e.itemKey;
              });
              if (t !== -1) {
                var n;
                (n = S.current) == null || n.scrollIntoViewIfNeeded(t, 100);
              }
            }
          }),
          (t[13] = k),
          (t[14] = d),
          (t[15] = W))
        : (W = t[15]);
      var q = W,
        U;
      t[16] !== k.length || t[17] !== q || t[18] !== d
        ? ((U = function (t) {
            if (k.length !== 0) {
              (t == null || t.preventDefault(),
                t == null || t.stopPropagation());
              var e = d.current.prev();
              e > -1 && (d.current.setPrev(!0), q());
            }
          }),
          (t[16] = k.length),
          (t[17] = q),
          (t[18] = d),
          (t[19] = U))
        : (U = t[19]);
      var V = U,
        H;
      t[20] !== k.length || t[21] !== q || t[22] !== d
        ? ((H = function (t) {
            if (k.length !== 0) {
              (t == null || t.preventDefault(),
                t == null || t.stopPropagation());
              var e = d.current.next();
              d.current.index !== e && (d.current.setNext(!0), q());
            }
          }),
          (t[20] = k.length),
          (t[21] = q),
          (t[22] = d),
          (t[23] = H))
        : (H = t[23]);
      var G = H,
        z;
      t[24] !== G || t[25] !== V
        ? ((z = { down: G, up: V }), (t[24] = G), (t[25] = V), (t[26] = z))
        : (z = t[26]);
      var j = z,
        K,
        Q;
      (t[27] !== k || t[28] !== d
        ? ((K = function () {
            d.current.list.length === 0 && d.current.init(k);
          }),
          (Q = [d, k]),
          (t[27] = k),
          (t[28] = d),
          (t[29] = K),
          (t[30] = Q))
        : ((K = t[29]), (Q = t[30])),
        m(K, Q));
      var X, Y;
      (t[31] !== T
        ? ((X = function () {
            T();
          }),
          (Y = [T]),
          (t[31] = T),
          (t[32] = X),
          (t[33] = Y))
        : ((X = t[32]), (Y = t[33])),
        m(X, Y));
      var J, Z;
      (t[34] === Symbol.for("react.memo_cache_sentinel")
        ? ((J = function () {
            F();
          }),
          (Z = [F]),
          (t[34] = J),
          (t[35] = Z))
        : ((J = t[34]), (Z = t[35])),
        m(J, Z));
      var ee;
      t[36] !== l
        ? ((ee = function (t) {
            var e = t.category,
              n = t.entryPoint,
              r = t.sectionIndex,
              o = t.sectionName;
            l({ entryPoint: n, category: e, sectionName: o, sectionIndex: r });
          }),
          (t[36] = l),
          (t[37] = ee))
        : (ee = t[37]);
      var te = ee,
        ne;
      t[38] !== D || t[39] !== I
        ? ((ne = function () {
            c.current != null &&
              o("WAWebNewsletterTabDrawerUtils").isScrollAtBottomOfList(
                c.current,
              ) &&
              I() &&
              D();
          }),
          (t[38] = D),
          (t[39] = I),
          (t[40] = ne))
        : (ne = t[40]);
      var re = ne,
        oe;
      t[41] !== n || t[42] !== te || t[43] !== w || t[44] !== k || t[45] !== d
        ? ((oe =
            k.length > 0
              ? u.jsx(o("WAWebFlatList.react").FlatList, {
                  ref: S,
                  data: k,
                  renderItem: function (t) {
                    return u.jsx(C, {
                      data: t,
                      onSeeAllNewsletters: te,
                      onSelect: w,
                      selectionRef: d.current,
                      countrySelector: n,
                    });
                  },
                  flatListController: b,
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
                })),
          (t[41] = n),
          (t[42] = te),
          (t[43] = w),
          (t[44] = k),
          (t[45] = d),
          (t[46] = oe))
        : (oe = t[46]);
      var ae = oe,
        ie;
      t[47] === Symbol.for("react.memo_cache_sentinel")
        ? ((ie = [b]), (t[47] = ie))
        : (ie = t[47]);
      var le;
      t[48] === Symbol.for("react.memo_cache_sentinel")
        ? ((le = s._(/*BTDS*/ "Channel Directory Categories Drawer")),
          (t[48] = le))
        : (le = t[48]);
      var se;
      t[49] !== N
        ? ((se = function () {
            return N(!1);
          }),
          (t[49] = N),
          (t[50] = se))
        : (se = t[50]);
      var ue;
      t[51] !== x
        ? ((ue = x ? u.jsx(y, {}) : null), (t[51] = x), (t[52] = ue))
        : (ue = t[52]);
      var ce;
      t[53] !== ae ||
      t[54] !== $ ||
      t[55] !== P ||
      t[56] !== se ||
      t[57] !== ue ||
      t[58] !== T
        ? ((ce = u.jsx(r("WAWebNewsletterDirectoryResultsLoader.react"), {
            onOfflineRetry: T,
            onServerErrorRetry: se,
            loadingShimmer: ue,
            isLoadingMore: $,
            serverError: P,
            children: ae,
          })),
          (t[53] = ae),
          (t[54] = $),
          (t[55] = P),
          (t[56] = se),
          (t[57] = ue),
          (t[58] = T),
          (t[59] = ce))
        : (ce = t[59]);
      var de;
      t[60] !== j || t[61] !== ce
        ? ((de = u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
            ref: f,
            handlers: j,
            "aria-label": le,
            children: ce,
          })),
          (t[60] = j),
          (t[61] = ce),
          (t[62] = de))
        : (de = t[62]);
      var me;
      return (
        t[63] !== re || t[64] !== de
          ? ((me = u.jsx(r("WAWebDrawerBody.react"), {
              ref: c,
              flatListControllers: ie,
              onScroll: re,
              children: de,
            })),
            (t[63] = re),
            (t[64] = de),
            (t[65] = me))
          : (me = t[65]),
        me
      );
    }
    function v() {
      return new (r("WAWebSingleSelection"))([], S);
    }
    function S(e) {
      return e.itemKey;
    }
    l.default = b;
  },
  226,
);
