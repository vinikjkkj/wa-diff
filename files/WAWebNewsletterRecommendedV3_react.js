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
      var t = e.layout,
        n = e.loading,
        r = e.onCreateNewsletter,
        a = e.onDiscoverMoreClick,
        i = e.recommendedNewsletters,
        l = o(
          "WAWebNewsletterGatingUtils",
        ).isChannelCreationFromUpdatesTabEnabled()
          ? u.jsx(C, { onClick: r })
          : null,
        s = u.jsx(y, { shouldRenderUpdatedButton: l != null, onClick: a });
      return u.jsxs(o("WAWebFlex.react").FlexColumn, {
        className: "xh8yej3 x1plvlek xryxfnj",
        shrink: 0,
        align: "center",
        testid: void 0,
        children: [
          u.jsx(h, { layout: t }),
          u.jsx(g, { items: i, loading: n }),
          u.jsx(o("WAWebFlex.react").FlexColumn, {
            className: { 0: "", 1: "xh8yej3 x1plvlek xryxfnj" }[
              (l != null) << 0
            ],
            shrink: 0,
            align: "center",
            children: u.jsxs("div", {
              className: {
                0: "",
                2: "xh8yej3 x1plvlek xryxfnj",
                1: "xh8yej3 x6ikm8r x10wlt62 x1lliihq",
                3: "xh8yej3 x6ikm8r x10wlt62 x1lliihq",
              }[((l != null) << 1) | ((l != null) << 0)],
              children: [s, l],
            }),
          }),
        ],
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
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
      var t = e.layout;
      switch (t) {
        case o("WAWebNewsletterRecommendedUnit.flow").RecommendedUnitLayoutType
          .Block:
          return u.jsx(r("WAWebNewsletterRecommendedBlockHeading.react"), {
            xstyle: o("WAWebUISpacing").uiMargin.bottom16,
          });
        case o("WAWebNewsletterRecommendedUnit.flow").RecommendedUnitLayoutType
          .Row:
          return u.jsx(o("WAWebFlex.react").FlexRow, {
            justify: "all",
            align: "center",
            xstyle: [
              o("WAWebUISpacing").uiPadding.horiz20,
              o("WAWebUISpacing").uiPadding.top16,
              o("WAWebUISpacing").uiPadding.bottom4,
              _.header,
            ],
            children: u.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDeemphasized",
              children: o(
                "WAWebCommonNewsletterStrings",
              ).getFindChannelsToFollowText(),
            }),
          });
      }
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(t) {
      var n = t.onClick,
        a = t.shouldRenderUpdatedButton,
        i = p(null),
        l = d(function () {
          r("WAWebFocusTracer").focus(i.current);
        }, []),
        s = o("WAWebStatusGatingUtils").isUpdatesTabInNavigationBarEnabled()
          ? o(
              "WAWebCommonNewsletterStrings",
            ).getNewsletterSimilarNewslettersTitle()
          : o("WAWebCommonNewsletterStrings").getDiscoverMoreText(),
        c = a
          ? u.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
              stretch: !0,
              onClick: n,
              testid: void 0,
              ref: i,
              icon: o("WAWebIdGridViewIcon.react").IdGridViewIcon,
              children: s,
            })
          : u.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
              onClick: n,
              testid: void 0,
              ref: i,
              children: s,
            });
      return u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        onFocus: l,
        className: (e || (e = r("stylex")))(
          o("WAWebUISpacing").uiPadding.top20,
          o("WAWebUISpacing").uiPadding.bottom10,
          o("WAWebUISpacing").uiPadding.horiz10,
        ),
        "data-tab":
          o("WAWebTabOrder").TAB_ORDER.NEWSLETTER_TAB_RECOMMENDED_BUTTON,
        children: c,
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(t) {
      var n = t.onClick,
        a = p(null),
        i = d(function () {
          r("WAWebFocusTracer").focus(a.current);
        }, []);
      return u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        onFocus: i,
        className: (e || (e = r("stylex")))(
          o("WAWebUISpacing").uiPadding.bottom20,
          o("WAWebUISpacing").uiPadding.horiz10,
        ),
        "data-tab":
          o("WAWebTabOrder").TAB_ORDER.NEWSLETTER_TAB_CREATE_CHANNEL_BUTTON,
        children: u.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
          stretch: !0,
          onClick: n,
          testid: void 0,
          ref: a,
          icon: r("WDSIconIcAdd.react"),
          children: o("WAWebCommonNewsletterStrings").getCreateChannelText(),
        }),
      });
    }
    ((C.displayName = C.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
