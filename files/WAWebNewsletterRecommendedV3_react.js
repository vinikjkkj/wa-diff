__d(
  "WAWebNewsletterRecommendedV3.react",
  [
    "WAWebButton.react",
    "WAWebChatEntryPoint",
    "WAWebCommonNewsletterStrings",
    "WAWebFlatList.react",
    "WAWebFlatListContainer.react",
    "WAWebFlatListController",
    "WAWebFlex.react",
    "WAWebFocusTracer",
    "WAWebIdGridViewIcon.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebNewsletterDirectoryCell.react",
    "WAWebNewsletterDirectoryShimmer.react",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterRecommendedBlockHeading.react",
    "WAWebNewsletterRecommendedUnit.flow",
    "WAWebSingleSelection",
    "WAWebStatusGatingUtils",
    "WAWebTabOrder",
    "WAWebUISpacing",
    "WAWebWamEnumChannelEventUnit",
    "WAWebWamEnumTsSurface",
    "WDSIconIcAdd.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useLazyRef",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useMemo,
      p = c.useRef,
      _ = {
        list: {
          width: "xh8yej3",
          overflowX: "x1plvlek",
          overflowY: "xryxfnj",
          $$css: !0,
        },
        header: { width: "xh8yej3", boxSizing: "x9f619", $$css: !0 },
      };
    function f(e) {
      var t = o("react-compiler-runtime").c(26),
        n = e.layout,
        r = e.loading,
        a = e.onCreateNewsletter,
        i = e.onDiscoverMoreClick,
        l = e.recommendedNewsletters,
        s;
      t[0] !== a
        ? ((s = o(
            "WAWebNewsletterGatingUtils",
          ).isChannelCreationFromUpdatesTabEnabled()
            ? u.jsx(C, { onClick: a })
            : null),
          (t[0] = a),
          (t[1] = s))
        : (s = t[1]);
      var c = s,
        d = c != null,
        m;
      t[2] !== i || t[3] !== d
        ? ((m = u.jsx(y, { shouldRenderUpdatedButton: d, onClick: i })),
          (t[2] = i),
          (t[3] = d),
          (t[4] = m))
        : (m = t[4]);
      var p = m,
        _;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = "xh8yej3 x1plvlek xryxfnj"), (t[5] = _))
        : (_ = t[5]);
      var f;
      t[6] !== n
        ? ((f = u.jsx(h, { layout: n })), (t[6] = n), (t[7] = f))
        : (f = t[7]);
      var b;
      t[8] !== r || t[9] !== l
        ? ((b = u.jsx(g, { items: l, loading: r })),
          (t[8] = r),
          (t[9] = l),
          (t[10] = b))
        : (b = t[10]);
      var v;
      t[11] !== c
        ? ((v = { 0: "", 1: "xh8yej3 x1plvlek xryxfnj" }[(c != null) << 0]),
          (t[11] = c),
          (t[12] = v))
        : (v = t[12]);
      var S;
      t[13] !== c
        ? ((S = {
            0: "",
            2: "xh8yej3 x1plvlek xryxfnj",
            1: "xh8yej3 x6ikm8r x10wlt62 x1lliihq",
            3: "xh8yej3 x6ikm8r x10wlt62 x1lliihq",
          }[((c != null) << 1) | ((c != null) << 0)]),
          (t[13] = c),
          (t[14] = S))
        : (S = t[14]);
      var R;
      t[15] !== c || t[16] !== p || t[17] !== S
        ? ((R = u.jsxs("div", { className: S, children: [p, c] })),
          (t[15] = c),
          (t[16] = p),
          (t[17] = S),
          (t[18] = R))
        : (R = t[18]);
      var L;
      t[19] !== v || t[20] !== R
        ? ((L = u.jsx(o("WAWebFlex.react").FlexColumn, {
            className: v,
            shrink: 0,
            align: "center",
            children: R,
          })),
          (t[19] = v),
          (t[20] = R),
          (t[21] = L))
        : (L = t[21]);
      var E;
      return (
        t[22] !== L || t[23] !== f || t[24] !== b
          ? ((E = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              className: _,
              shrink: 0,
              align: "center",
              testid: void 0,
              children: [f, b, L],
            })),
            (t[22] = L),
            (t[23] = f),
            (t[24] = b),
            (t[25] = E))
          : (E = t[25]),
        E
      );
    }
    function g(e) {
      var t = e.items,
        n = e.loading,
        a = o("WAWebNewsletterGatingUtils").getRecommendedUnitRowCount(),
        i = r("useLazyRef")(function () {
          return new (r("WAWebFlatListController"))();
        }),
        l = p(),
        s = p(),
        c = p(),
        d = r("useLazyRef")(function () {
          return new (r("WAWebSingleSelection"))([], function (e) {
            return e.itemKey;
          });
        }),
        f = m(
          function () {
            return t.slice(0, a).map(function (e, t) {
              return {
                newsletter: e,
                itemKey: "newsletter-" + e.id.toString(),
                index: t,
              };
            });
          },
          [t, a],
        );
      if (n)
        return u.jsx(r("WAWebNewsletterDirectoryShimmer.react"), { count: a });
      var g = d.current,
        h = g.list;
      (h.length === 0 || h !== f) && g.init(f);
      var y = function (t) {
          if (f.length !== 0) {
            (t == null || t.preventDefault(), t == null || t.stopPropagation());
            var e = d.current.prev();
            e > -1 && d.current.setPrev(!0);
          }
        },
        C = function (t) {
          if (f.length !== 0) {
            (t == null || t.preventDefault(), t == null || t.stopPropagation());
            var e = d.current.next();
            d.current.index !== e && d.current.setNext(!0);
          }
        },
        b = function () {
          if (d.current.value) {
            var e = d.current.index;
            d.current.setVal(f[e], !0);
          } else d.current.setFirst(!0);
        },
        v = { down: C, up: y };
      return u.jsx(r("WAWebFlatListContainer.react"), {
        ref: l,
        className: "xh8yej3 x1plvlek xryxfnj",
        flatListControllers: [i.current],
        children: u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
          ref: s,
          onFocus: function (t) {
            t.target === s.current && b();
          },
          role: "list",
          "data-tab":
            o("WAWebTabOrder").TAB_ORDER.NEWSLETTER_TAB_RECOMMENDED_LIST,
          handlers: v,
          children: u.jsx(o("WAWebFlatList.react").FlatList, {
            ref: c,
            data: f,
            viewportXstyles: _.list,
            flatListController: i.current,
            direction: "vertical",
            role: "navigation",
            renderItem: function (t) {
              var e = t.index,
                n = t.itemKey,
                a = t.newsletter;
              return u.jsx(
                r("WAWebNewsletterDirectoryCell.react"),
                {
                  active: d.current,
                  testid: void 0,
                  chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                    .NewsLetterRecommendation,
                  newsletter: a,
                  index: e,
                  onSelect: null,
                  bottomItem: e === f.length - 1,
                  discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE
                    .CHANNEL_UPDATES_HOME,
                  newsletterEventUnit: o("WAWebWamEnumChannelEventUnit")
                    .CHANNEL_EVENT_UNIT.RECOMMENDED_CHANNELS,
                },
                n,
              );
            },
          }),
        }),
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.layout;
      switch (n) {
        case o("WAWebNewsletterRecommendedUnit.flow").RecommendedUnitLayoutType
          .Block: {
          var a;
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = u.jsx(r("WAWebNewsletterRecommendedBlockHeading.react"), {
                  xstyle: o("WAWebUISpacing").uiMargin.bottom16,
                })),
                (t[0] = a))
              : (a = t[0]),
            a
          );
        }
        case o("WAWebNewsletterRecommendedUnit.flow").RecommendedUnitLayoutType
          .Row: {
          var i;
          t[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = [
                o("WAWebUISpacing").uiPadding.horiz20,
                o("WAWebUISpacing").uiPadding.top16,
                o("WAWebUISpacing").uiPadding.bottom4,
                _.header,
              ]),
              (t[1] = i))
            : (i = t[1]);
          var l;
          return (
            t[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((l = u.jsx(o("WAWebFlex.react").FlexRow, {
                  justify: "all",
                  align: "center",
                  xstyle: i,
                  children: u.jsx(r("WDSText.react"), {
                    type: "Body2",
                    colorName: "contentDeemphasized",
                    children: o(
                      "WAWebCommonNewsletterStrings",
                    ).getFindChannelsToFollowText(),
                  }),
                })),
                (t[2] = l))
              : (l = t[2]),
            l
          );
        }
      }
    }
    function y(t) {
      var n = o("react-compiler-runtime").c(8),
        a = t.onClick,
        i = t.shouldRenderUpdatedButton,
        l = p(null),
        s;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = function () {
            r("WAWebFocusTracer").focus(l.current);
          }),
          (n[0] = s))
        : (s = n[0]);
      var c = s,
        d;
      n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = o("WAWebStatusGatingUtils").isUpdatesTabInNavigationBarEnabled()
            ? o(
                "WAWebCommonNewsletterStrings",
              ).getNewsletterSimilarNewslettersTitle()
            : o("WAWebCommonNewsletterStrings").getDiscoverMoreText()),
          (n[1] = d))
        : (d = n[1]);
      var m = d,
        _;
      n[2] !== a || n[3] !== i
        ? ((_ = i
            ? u.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
                stretch: !0,
                onClick: a,
                testid: void 0,
                ref: l,
                icon: o("WAWebIdGridViewIcon.react").IdGridViewIcon,
                children: m,
              })
            : u.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
                onClick: a,
                testid: void 0,
                ref: l,
                children: m,
              })),
          (n[2] = a),
          (n[3] = i),
          (n[4] = _))
        : (_ = n[4]);
      var f = _,
        g;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = (e || (e = r("stylex")))(
            o("WAWebUISpacing").uiPadding.top20,
            o("WAWebUISpacing").uiPadding.bottom10,
            o("WAWebUISpacing").uiPadding.horiz10,
          )),
          (n[5] = g))
        : (g = n[5]);
      var h;
      return (
        n[6] !== f
          ? ((h = u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              onFocus: c,
              className: g,
              "data-tab":
                o("WAWebTabOrder").TAB_ORDER.NEWSLETTER_TAB_RECOMMENDED_BUTTON,
              children: f,
            })),
            (n[6] = f),
            (n[7] = h))
          : (h = n[7]),
        h
      );
    }
    function C(t) {
      var n = o("react-compiler-runtime").c(5),
        a = t.onClick,
        i = p(null),
        l;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = function () {
            r("WAWebFocusTracer").focus(i.current);
          }),
          (n[0] = l))
        : (l = n[0]);
      var s = l,
        c;
      n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = (e || (e = r("stylex")))(
            o("WAWebUISpacing").uiPadding.bottom20,
            o("WAWebUISpacing").uiPadding.horiz10,
          )),
          (n[1] = c))
        : (c = n[1]);
      var d;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = o("WAWebCommonNewsletterStrings").getCreateChannelText()),
          (n[2] = d))
        : (d = n[2]);
      var m;
      return (
        n[3] !== a
          ? ((m = u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              onFocus: s,
              className: c,
              "data-tab":
                o("WAWebTabOrder").TAB_ORDER
                  .NEWSLETTER_TAB_CREATE_CHANNEL_BUTTON,
              children: u.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
                stretch: !0,
                onClick: a,
                testid: void 0,
                ref: i,
                icon: r("WDSIconIcAdd.react"),
                children: d,
              }),
            })),
            (n[3] = a),
            (n[4] = m))
          : (m = n[4]),
        m
      );
    }
    l.default = f;
  },
  98,
);
