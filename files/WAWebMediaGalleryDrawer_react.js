__d(
  "WAWebMediaGalleryDrawer.react",
  [
    "fbt",
    "$InternalEnum",
    "WAWebActionToast.react",
    "WAWebDocGallery.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebLinkGallery.react",
    "WAWebMediaGallery.react",
    "WAWebMiscGatingUtils",
    "WAWebMultiSelectBar.react",
    "WAWebMultiSelection",
    "WAWebProductGallery.react",
    "WAWebTabs.react",
    "WAWebUimUie.react",
    "react",
    "react-compiler-runtime",
    "useLazyRef",
    "useWAWebDebouncedSearch",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useMemo,
      _ = d.useRef,
      f = d.useState,
      g = {
        tabs: {
          backgroundColor: "x1c7u0tx",
          borderBottomWidth: "x1co6499",
          borderBottomStyle: "x1q0q8m5",
          borderBottomColor: "xkveyfu",
          $$css: !0,
        },
        tabXStyle: {
          borderBottomColor: "x16stqrj",
          borderBottomStyle: "x1q0q8m5",
          borderBottomWidth: "xv7zg05",
          $$css: !0,
        },
        tabHovered: { borderBottomColor: "xhl97hz", $$css: !0 },
        tabSelected: {
          borderBottomColor: "x1rrvw3c",
          paddingTop: "xexx8yu",
          $$css: !0,
        },
      },
      h = { surface: "media-drawer" },
      y = n("$InternalEnum")({
        MEDIA: "media",
        DOCS: "docs",
        LINKS: "links",
        PRODUCTS: "products",
      }),
      C = [y.MEDIA, y.DOCS];
    function b(e) {
      var t = o("react-compiler-runtime").c(44);
      switch (e.selectedTab) {
        case y.MEDIA: {
          var n = e.chat,
            a;
          t[0] !== e.chat
            ? ((a = e.chat.getMediaMsgs()), (t[0] = e.chat), (t[1] = a))
            : (a = t[1]);
          var i;
          return (
            t[2] !== e.chat ||
            t[3] !== e.filterText ||
            t[4] !== e.isFilterEnabled ||
            t[5] !== e.onMessageSelect ||
            t[6] !== e.selectable ||
            t[7] !== e.selectedMessages ||
            t[8] !== e.threadId ||
            t[9] !== a
              ? ((i = c.jsx(r("WAWebMediaGallery.react"), {
                  chat: n,
                  mediaMsgs: a,
                  selectable: e.selectable,
                  onMessageSelect: e.onMessageSelect,
                  selectedMessages: e.selectedMessages,
                  fullCollection: !0,
                  isFilterEnabled: e.isFilterEnabled,
                  filterText: e.filterText,
                  threadId: e.threadId,
                })),
                (t[2] = e.chat),
                (t[3] = e.filterText),
                (t[4] = e.isFilterEnabled),
                (t[5] = e.onMessageSelect),
                (t[6] = e.selectable),
                (t[7] = e.selectedMessages),
                (t[8] = e.threadId),
                (t[9] = a),
                (t[10] = i))
              : (i = t[10]),
            i
          );
        }
        case y.LINKS: {
          var l = e.chat,
            s;
          t[11] !== e.chat
            ? ((s = e.chat.getLinkMsgs()), (t[11] = e.chat), (t[12] = s))
            : (s = t[12]);
          var u;
          return (
            t[13] !== e.chat ||
            t[14] !== e.filterText ||
            t[15] !== e.isFilterEnabled ||
            t[16] !== e.onMessageSelect ||
            t[17] !== e.selectable ||
            t[18] !== e.selectedMessages ||
            t[19] !== e.threadId ||
            t[20] !== s
              ? ((u = c.jsx(r("WAWebLinkGallery.react"), {
                  chat: l,
                  linkMsgs: s,
                  selectable: e.selectable,
                  onMessageSelect: e.onMessageSelect,
                  selectedMessages: e.selectedMessages,
                  isFilterEnabled: e.isFilterEnabled,
                  filterText: e.filterText,
                  threadId: e.threadId,
                })),
                (t[13] = e.chat),
                (t[14] = e.filterText),
                (t[15] = e.isFilterEnabled),
                (t[16] = e.onMessageSelect),
                (t[17] = e.selectable),
                (t[18] = e.selectedMessages),
                (t[19] = e.threadId),
                (t[20] = s),
                (t[21] = u))
              : (u = t[21]),
            u
          );
        }
        case y.DOCS: {
          var d = e.chat,
            m;
          t[22] !== e.chat
            ? ((m = e.chat.getDocMsgs()), (t[22] = e.chat), (t[23] = m))
            : (m = t[23]);
          var p;
          return (
            t[24] !== e.chat ||
            t[25] !== e.filterText ||
            t[26] !== e.isFilterEnabled ||
            t[27] !== e.onMessageSelect ||
            t[28] !== e.selectable ||
            t[29] !== e.selectedMessages ||
            t[30] !== e.threadId ||
            t[31] !== m
              ? ((p = c.jsx(r("WAWebDocGallery.react"), {
                  chat: d,
                  docMsgs: m,
                  selectable: e.selectable,
                  onMessageSelect: e.onMessageSelect,
                  selectedMessages: e.selectedMessages,
                  isFilterEnabled: e.isFilterEnabled,
                  filterText: e.filterText,
                  threadId: e.threadId,
                })),
                (t[24] = e.chat),
                (t[25] = e.filterText),
                (t[26] = e.isFilterEnabled),
                (t[27] = e.onMessageSelect),
                (t[28] = e.selectable),
                (t[29] = e.selectedMessages),
                (t[30] = e.threadId),
                (t[31] = m),
                (t[32] = p))
              : (p = t[32]),
            p
          );
        }
        case y.PRODUCTS: {
          var _ = e.chat,
            f;
          t[33] !== e.chat
            ? ((f = e.chat.getProductMsgs()), (t[33] = e.chat), (t[34] = f))
            : (f = t[34]);
          var g;
          return (
            t[35] !== e.chat ||
            t[36] !== e.onMessageSelect ||
            t[37] !== e.onProductDetail ||
            t[38] !== e.scrollOffset ||
            t[39] !== e.selectable ||
            t[40] !== e.selectedMessages ||
            t[41] !== e.setScrollOffset ||
            t[42] !== f
              ? ((g = c.jsx(r("WAWebProductGallery.react"), {
                  chat: _,
                  productMsgs: f,
                  selectable: e.selectable,
                  onMessageSelect: e.onMessageSelect,
                  selectedMessages: e.selectedMessages,
                  onProductDetail: e.onProductDetail,
                  setScrollOffset: e.setScrollOffset,
                  scrollOffset: e.scrollOffset,
                })),
                (t[35] = e.chat),
                (t[36] = e.onMessageSelect),
                (t[37] = e.onProductDetail),
                (t[38] = e.scrollOffset),
                (t[39] = e.selectable),
                (t[40] = e.selectedMessages),
                (t[41] = e.setScrollOffset),
                (t[42] = f),
                (t[43] = g))
              : (g = t[43]),
            g
          );
        }
      }
    }
    function v(e) {
      switch (e) {
        case y.MEDIA:
          return o("WAWebMultiSelectBar.react").MultiSelectBarEntryPoint.MEDIA;
        case y.DOCS:
          return o("WAWebMultiSelectBar.react").MultiSelectBarEntryPoint.DOCS;
        case y.LINKS:
          return o("WAWebMultiSelectBar.react").MultiSelectBarEntryPoint.LINKS;
        case y.PRODUCTS:
          return o("WAWebMultiSelectBar.react").MultiSelectBarEntryPoint
            .PRODUCTS;
      }
    }
    function S(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.chat,
        l = a.onProductDetail,
        u = a.setProductsScrollOffset,
        d = a.initialTab,
        S = d === void 0 ? y.MEDIA : d,
        R = a.productsScrollOffset,
        L = R === void 0 ? 0 : R,
        E = a.threadId,
        k = f(S),
        I = k[0],
        T = k[1],
        D = f(!1),
        x = D[0],
        $ = D[1],
        P = r("useWAWebDebouncedSearch")(),
        N = P[0],
        M = P[1],
        w = o("WAWebMiscGatingUtils").mediaLinksDocsFilteringEnabled(),
        A = r("useLazyRef")(function () {
          return new (r("WAWebMultiSelection"))([], function (e) {
            return e.id.toString();
          });
        }),
        F = _(null),
        O = function () {
          x || $(!0);
        },
        B = function () {
          x && (A.current.unsetAll(), (F.current = null), $(!1));
        },
        W = m(
          function (e, t, n) {
            var r =
                I === y.MEDIA
                  ? i.getMediaMsgs()
                  : I === y.LINKS
                    ? i.getLinkMsgs()
                    : I === y.DOCS
                      ? i.getDocMsgs()
                      : I === y.PRODUCTS
                        ? i.getProductMsgs()
                        : (function () {
                            throw Error(
                              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                I,
                            );
                          })(),
              o = r.indexOf(e),
              a = r.indexOf(t);
            if (!(o < 0 || a < 0))
              for (
                var l = Math.min(o, a), s = Math.max(o, a), u = l;
                u <= s;
                u++
              ) {
                var c = r.at(u);
                c != null && A.current.setVal(c, n);
              }
          },
          [I, i, A],
        ),
        q = function (t, n, r) {
          O();
          var e = F.current,
            o = (r == null ? void 0 : r.shiftKey) === !0;
          (A.current.setVal(t, n),
            o && e != null && W(e, t, n),
            (F.current = t),
            A.current.getSelected().length === 0 && B());
        },
        U = m(
          function (e) {
            var t = y.cast(e);
            if (t != null) {
              var n = Array.from(y.members()),
                r = n.indexOf(I),
                o = n.indexOf(t);
              (r !== o && A.current.unsetAll(), T(t), $(!1));
            }
          },
          [A, I],
        ),
        V = p(
          function () {
            var e = [
              { id: y.MEDIA, title: s._(/*BTDS*/ "Media") },
              { id: y.DOCS, title: s._(/*BTDS*/ "Docs") },
              { id: y.LINKS, title: s._(/*BTDS*/ "Links") },
            ];
            return (
              i.getProductMsgs().length > 0 &&
                e.push({ id: y.PRODUCTS, title: s._(/*BTDS*/ "Products") }),
              c.jsx(r("WAWebTabs.react"), {
                tabConfigs: e,
                selectedId: I,
                onSelect: U,
                testIdPrefix: "gallery-tab",
                xstyle: g.tabs,
                tabXstyle: g.tabXStyle,
                hoveredXStyle: g.tabHovered,
                selectedXStyle: g.tabSelected,
                getTitleProps: function (t, n) {
                  return {
                    color:
                      t || n ? "wdsContentDefault" : "wdsContentDeemphasized",
                    weight: t || n ? "medium" : void 0,
                  };
                },
              })
            );
          },
          [I, U, i],
        ),
        H = v(I),
        G = C.includes(I),
        z = x
          ? c.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "MediaMultiSelect",
              escapable: !0,
              requestDismiss: B,
              children: c.jsx(o("WAWebMultiSelectBar.react").MultiSelectBar, {
                chat: i,
                noSortOnForward: !0,
                theme: "mediaGallery",
                toastPosition: o("WAWebActionToast.react").ToastPosition.RIGHT,
                downloadButton: G,
                selectedMessages: A.current,
                onCancel: B,
                entryPoint: H,
                mode: o("WAWebMultiSelectBar.react").MultiSelectMode.DEFAULT,
              }),
            })
          : null;
      return c.jsxs(r("WAWebDrawer.react"), {
        ref: n,
        theme: "gallery",
        testid: void 0,
        tsNavigationData: h,
        children: [
          c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: " ",
            onBack: a.onBack,
            rtlFixIfOnDarwin: !0,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            focusBackOrCancel: !0,
          }),
          z,
          V,
          c.jsx(r("WAWebDrawerBody.react"), {
            "data-list-scroll-container": !0,
            children: c.jsx("div", {
              className: "x78zum5 x1iyjqo2 xs83m0k x1r8uery xdt5ytf x5yr21d",
              children: c.jsx(b, {
                chat: i,
                selectable: x,
                onMessageSelect: q,
                selectedMessages: A.current,
                fullCollection: !0,
                isFilterEnabled: w,
                filterText: N,
                onProductDetail: l,
                setScrollOffset: u,
                scrollOffset: L,
                selectedTab: I,
                mediaMsgs: i.getMediaMsgs(),
                linkMsgs: i.getLinkMsgs(),
                docMsgs: i.getDocMsgs(),
                productMsgs: i.getProductMsgs(),
                threadId: E,
              }),
            }),
          }),
        ],
      });
    }
    ((S.displayName = S.name + " [from " + i.id + "]"),
      (l.GalleryDrawerTabs = y),
      (l.MediaGalleryDrawer = S));
  },
  226,
);
