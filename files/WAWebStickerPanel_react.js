__d(
  "WAWebStickerPanel.react",
  [
    "fbt",
    "WAWebCircledPlusCustomIcon",
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebEmojiPickerConstants",
    "WAWebKeyboardTabUtils",
    "WAWebMiscGatingUtils",
    "WAWebPanelsDisplayLocation",
    "WAWebPanelsMenu.react",
    "WAWebPanelsMenuTab.react",
    "WAWebStickerGreetingIcon.react",
    "WAWebStickerPackCollectionMd",
    "WAWebStickerPanelContent.react",
    "WAWebStickerPanelGatingUtils",
    "WAWebStickerPickerOpenedWamEvent",
    "WAWebStickerStoreFlowLoadable",
    "WAWebStickerStoreOpenedWamEvent",
    "WAWebStopEvent",
    "WDSIconIcCake.react",
    "WDSIconIcFavorite.react",
    "WDSIconIcGrade.react",
    "WDSIconIcSchedule.react",
    "WDSIconIcSentimentDissatisfied.react",
    "WDSIconIcSentimentExcited.react",
    "WDSIconIcSentimentExtremelyDissatisfied.react",
    "react",
    "stylex",
    "useLazyRef",
    "useWAWebOnUnmount",
    "useWAWebUiIdle",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useEffect,
      _ = m.useImperativeHandle,
      f = m.useMemo,
      g = m.useRef,
      h = m.useState,
      y = {
        expressionsPanelContainer: {
          height: "x1wwgg98",
          maxHeight: "x3vt2i0",
          $$css: !0,
        },
        expressionsPanelContainerSmaller: { height: "x3g49sk", $$css: !0 },
        expressionsPanelContainerSmaller4x3: { height: "x15om8nw", $$css: !0 },
        panelContainer: {
          backgroundColor: "xhjsbib",
          height: "x11z7x2b",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          transform: "x17dzmu4",
          transformOrigin: "xm4efwp",
          width: "xh8yej3",
          $$css: !0,
        },
        panelContainerExpressionsPanel: {
          backgroundColor: "x1kapp2c",
          $$css: !0,
        },
        panelDropdown: {
          borderStartStartRadius: null,
          borderStartEndRadius: null,
          borderEndEndRadius: null,
          borderEndStartRadius: null,
          $$css: !0,
        },
      };
    function C(t) {
      var n,
        a,
        i = t.ref,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e),
        s = l.displayLocation,
        c =
          s === void 0
            ? o("WAWebPanelsDisplayLocation").DisplayLocation.Dropdown
            : s,
        m =
          c === o("WAWebPanelsDisplayLocation").DisplayLocation.ComposeBox ||
          c ===
            o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel,
        C = o("WAWebMiscGatingUtils").isFavoriteStickersEnabled(),
        L = f(
          function () {
            var e = [];
            return (
              e.push(o("WAWebEmojiPickerConstants").StickerTabs.RECENTS),
              C && e.push(o("WAWebEmojiPickerConstants").StickerTabs.FAVORITES),
              e.push(
                o("WAWebEmojiPickerConstants").StickerTabs.LOVE,
                o("WAWebEmojiPickerConstants").StickerTabs.GREETINGS,
                o("WAWebEmojiPickerConstants").StickerTabs.HAPPY,
                o("WAWebEmojiPickerConstants").StickerTabs.SAD,
                o("WAWebEmojiPickerConstants").StickerTabs.ANGRY,
                o("WAWebEmojiPickerConstants").StickerTabs.CELEBRATE,
              ),
              m && e.push(o("WAWebEmojiPickerConstants").StickerTabs.STORE),
              e
            );
          },
          [m, C],
        ),
        E = g(),
        k = g(),
        I = g(),
        T = r("useLazyRef")(function () {
          return new Map();
        }),
        D = h(
          ((n = l.displayCache) == null ? void 0 : n.selectedTab) ||
            o("WAWebEmojiPickerConstants").StickerTabs.RECENTS,
        ),
        x = D[0],
        $ = D[1],
        P = h(-1),
        N = P[0],
        M = P[1];
      r("useWAWebOnUnmount")(function () {
        l.onDisplayCache == null ||
          l.onDisplayCache({ scrollTop: k.current, selectedTab: x });
      });
      var w = r("useWAWebUiIdle")(),
        A = function () {
          return w(function () {
            var e = I.current;
            e && e.focus();
          });
        };
      _(i, function () {
        return {
          restoreFocus: A,
          getElement: function () {
            return E.current;
          },
        };
      });
      var F = function (t) {
          var e;
          (o("WAWebStopEvent").stopEvent(t),
            (e = T.current.get(x)) == null || e.focus(),
            M(L.indexOf(x)));
        },
        O = function (t) {
          (o("WAWebStopEvent").stopEvent(t), l.onFocusNext());
        },
        B = function (t) {
          (o("WAWebStopEvent").stopEvent(t), l.onFocusPrev());
        },
        W = r("useWAWebUiIdle")(),
        q = function () {
          var e = l.onStickerFromStore;
          e != null &&
            (new (o(
              "WAWebStickerStoreOpenedWamEvent",
            ).StickerStoreOpenedWamEvent)().commit(),
            o("WAWebCmd").Cmd.closeExpressionPanels(),
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              d.jsx(
                r("WAWebStickerStoreFlowLoadable").StickerStoreFlowLoadable,
                { onSticker: e },
              ),
              {
                transition: "slide-left",
                focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
              },
            ),
            W(function () {
              o("WAWebStickerPackCollectionMd").StickerPackCollectionMd.fetch();
            }));
        },
        U = function (t, n) {
          var e, r;
          if (
            (n == null || n.preventDefault(),
            t === o("WAWebEmojiPickerConstants").StickerTabs.STORE)
          ) {
            q();
            return;
          }
          ($(t),
            (e = I.current) == null || e.clearSearchText(),
            l.onChange == null || l.onChange(""),
            (r = I.current) == null || r.focus());
        },
        V = function (t) {
          (M(-1), U(L[N]));
        },
        H = function (t) {
          var e;
          o("WAWebStopEvent").stopEvent(t);
          var n = (L.length + N - 1) % L.length,
            r = L[n];
          ((e = T.current.get(r)) == null || e.focus(), M(n));
        },
        G = function (t) {
          var e;
          o("WAWebStopEvent").stopEvent(t);
          var n = (N + 1) % L.length,
            r = L[n];
          ((e = T.current.get(r)) == null || e.focus(), M(n));
        },
        z = function (t) {
          (o("WAWebStopEvent").stopEvent(t), A(), M(-1));
        };
      p(function () {
        (new (o(
          "WAWebStickerPickerOpenedWamEvent",
        ).StickerPickerOpenedWamEvent)().commit(),
          A());
      }, []);
      var j = function (t) {
          var e = t.scrollTop;
          k.current = e;
        },
        K = (u || (u = r("stylex")))(
          (c === o("WAWebPanelsDisplayLocation").DisplayLocation.Dropdown ||
            c ===
              o("WAWebPanelsDisplayLocation").DisplayLocation
                .ExpressionsPanel) &&
            y.panelDropdown,
          y.panelContainer,
          c ===
            o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel &&
            y.panelContainerExpressionsPanel,
          c ===
            o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel &&
            y.expressionsPanelContainer,
          c ===
            o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel &&
            o("WAWebStickerPanelGatingUtils").showLessStickersControlGroup &&
            y.expressionsPanelContainerSmaller,
          c ===
            o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel &&
            o("WAWebStickerPanelGatingUtils").showLessStickersTestGroup &&
            y.expressionsPanelContainerSmaller4x3,
        );
      return d.jsxs("div", {
        className: K,
        ref: E,
        children: [
          d.jsx(r("WAWebPanelsMenu.react"), {
            selectedSectionId: x,
            sectionIds: L,
            renderSectionTab: function (t, n) {
              var e = b(t),
                r =
                  c ===
                  o("WAWebPanelsDisplayLocation").DisplayLocation
                    .ExpressionsPanel
                    ? S(t)
                    : v(t),
                a = R(t),
                i = function (n) {
                  T.current.set(t, n);
                };
              return d.jsx(
                o("WAWebPanelsMenuTab.react").MenuTab,
                {
                  onClick: U,
                  sectionId: t,
                  selected: n,
                  showFocusIndicator: N !== -1,
                  title: e,
                  theme: o("WAWebPanelsMenuTab.react").THEMES.MENU,
                  testid: void 0,
                  onRef: i,
                  children: d.jsx("span", {
                    className:
                      "x1rg5ohu x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft",
                    children: r,
                  }),
                },
                t,
              );
            },
            showTabHighlight: !((a = l.defaultSearchText) != null && a.trim()),
            onFocusPrev: H,
            onFocusNext: G,
            onEnter: V,
            onFocusLeave: z,
            displayLocation: c,
          }),
          d.jsx(r("WAWebStickerPanelContent.react"), {
            ref: I,
            onFocusUp: F,
            onFocusNext: O,
            onFocusPrev: B,
            onScroll: j,
            onChange: l.onChange,
            onSticker: l.onSticker,
            defaultSearchText: l.defaultSearchText,
            selectedTab: x,
            displayLocation: c,
            openStickerStoreDrawer: q,
            isAvatarStickers: !1,
          }),
        ],
      });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      switch (e) {
        case o("WAWebEmojiPickerConstants").StickerTabs.FAVORITES:
          return s._(/*BTDS*/ "Favorite");
        case o("WAWebEmojiPickerConstants").StickerTabs.RECENTS:
          return s._(/*BTDS*/ "Recent");
        case o("WAWebEmojiPickerConstants").StickerTabs.LOVE:
          return s._(/*BTDS*/ "Love");
        case o("WAWebEmojiPickerConstants").StickerTabs.GREETINGS:
          return s._(/*BTDS*/ "Greetings");
        case o("WAWebEmojiPickerConstants").StickerTabs.HAPPY:
          return s._(/*BTDS*/ "Happy");
        case o("WAWebEmojiPickerConstants").StickerTabs.SAD:
          return s._(/*BTDS*/ "Sad");
        case o("WAWebEmojiPickerConstants").StickerTabs.ANGRY:
          return s._(/*BTDS*/ "Angry");
        case o("WAWebEmojiPickerConstants").StickerTabs.CELEBRATE:
          return s._(/*BTDS*/ "Celebrate");
        case o("WAWebEmojiPickerConstants").StickerTabs.STORE:
          return s._(/*BTDS*/ "WhatsApp Sticker Store");
      }
    }
    function v(e) {
      switch (e) {
        case o("WAWebEmojiPickerConstants").StickerTabs.FAVORITES:
          return d.jsx(r("WDSIconIcGrade.react"), {});
        case o("WAWebEmojiPickerConstants").StickerTabs.RECENTS:
          return d.jsx(r("WDSIconIcSchedule.react"), {});
        case o("WAWebEmojiPickerConstants").StickerTabs.STORE:
          return d.jsx(r("WAWebCircledPlusCustomIcon"), { height: 18 });
        default:
          return b(e);
      }
    }
    function S(e) {
      switch (e) {
        case o("WAWebEmojiPickerConstants").StickerTabs.RECENTS:
          return d.jsx(r("WDSIconIcSchedule.react"), {});
        case o("WAWebEmojiPickerConstants").StickerTabs.FAVORITES:
          return d.jsx(r("WDSIconIcGrade.react"), {});
        case o("WAWebEmojiPickerConstants").StickerTabs.LOVE:
          return d.jsx(r("WDSIconIcFavorite.react"), {});
        case o("WAWebEmojiPickerConstants").StickerTabs.GREETINGS:
          return d.jsx(
            o("WAWebStickerGreetingIcon.react").StickerGreetingIcon,
            {},
          );
        case o("WAWebEmojiPickerConstants").StickerTabs.HAPPY:
          return d.jsx(r("WDSIconIcSentimentExcited.react"), {});
        case o("WAWebEmojiPickerConstants").StickerTabs.SAD:
          return d.jsx(r("WDSIconIcSentimentDissatisfied.react"), {});
        case o("WAWebEmojiPickerConstants").StickerTabs.ANGRY:
          return d.jsx(r("WDSIconIcSentimentExtremelyDissatisfied.react"), {});
        case o("WAWebEmojiPickerConstants").StickerTabs.CELEBRATE:
          return d.jsx(r("WDSIconIcCake.react"), {});
        case o("WAWebEmojiPickerConstants").StickerTabs.STORE:
          return d.jsx(r("WAWebCircledPlusCustomIcon"), { height: 18 });
      }
    }
    function R(e) {
      switch (e) {
        case o("WAWebEmojiPickerConstants").StickerTabs.FAVORITES:
          return "panel-starred";
        case o("WAWebEmojiPickerConstants").StickerTabs.RECENTS:
          return "panel-recent";
        case o("WAWebEmojiPickerConstants").StickerTabs.STORE:
          return "sticker-store";
        case o("WAWebEmojiPickerConstants").StickerTabs.LOVE:
          return "sticker-love";
        default:
          return null;
      }
    }
    l.default = C;
  },
  226,
);
