__d(
  "WAWebStickerPanelContent.react",
  [
    "cx",
    "fbt",
    "WALogger",
    "WAWebEmojiPickerConstants",
    "WAWebKeyboardHotKeys.react",
    "WAWebPanelsDisplayLocation",
    "WAWebStickerPanelContentStickerPackStickersFavorite.react",
    "WAWebStickerPanelContentStickerPackStickersRecentMd.react",
    "WAWebStickerPanelContentStickerSearchResultsScrollGrid.react",
    "WAWebStickerSearchCollection",
    "WAWebStopEvent",
    "WAWebUISpacing",
    "WAWebWamEnumStickerSendOriginType",
    "WDSSearchBar.react",
    "asyncToGeneratorRuntime",
    "filterNullsObjectMap",
    "react",
    "useWAWebDebouncedCallback",
    "useWAWebThrottledCallback",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e = ["ref"],
      c,
      d,
      m,
      p = m || (m = o("react")),
      _ = m,
      f = _.useEffect,
      g = _.useImperativeHandle,
      h = _.useRef,
      y = _.useState,
      C = 250;
    function b(e) {
      var t = e.displayLocation,
        n = e.isAvatarStickers,
        a = n === void 0 ? !1 : n,
        i = e.onDownloadEnd,
        l = e.onDownloadStart,
        s = e.onFocusPrev,
        u = e.onStickerClick,
        d = e.ref,
        m = e.resetScroll,
        _ = e.searchText,
        f = e.selectedTab;
      if (_)
        return p.jsx(
          r("WAWebStickerPanelContentStickerSearchResultsScrollGrid.react"),
          {
            ref: d,
            onFocusPrev: s,
            onStickerClick: u,
            searchText: _,
            resetScroll: m,
            displayLocation: t,
          },
        );
      if (f === o("WAWebEmojiPickerConstants").StickerTabs.FAVORITES)
        return p.jsx(
          r("WAWebStickerPanelContentStickerPackStickersFavorite.react"),
          {
            ref: d,
            onFocusPrev: s,
            onStickerClick: u,
            resetScroll: m,
            displayLocation: t,
            onDownloadStart: function () {
              l == null ||
                l(o("WAWebEmojiPickerConstants").StickerTabs.FAVORITES);
            },
            onDownloadEnd: function () {
              i == null ||
                i(o("WAWebEmojiPickerConstants").StickerTabs.FAVORITES);
            },
          },
        );
      if (f === o("WAWebEmojiPickerConstants").StickerTabs.RECENTS)
        return p.jsx(
          o("WAWebStickerPanelContentStickerPackStickersRecentMd.react")
            .StickerPackStickersRecent,
          {
            ref: d,
            onFocusPrev: s,
            onStickerClick: u,
            resetScroll: m,
            displayLocation: t,
            onDownloadStart: function () {
              l == null ||
                l(o("WAWebEmojiPickerConstants").StickerTabs.RECENTS);
            },
            onDownloadEnd: function () {
              i == null ||
                i(o("WAWebEmojiPickerConstants").StickerTabs.RECENTS);
            },
            isAvatarStickers: a,
          },
        );
      var g = o("WAWebEmojiPickerConstants").convertTabToMood(f);
      return g != null
        ? p.jsx(
            r("WAWebStickerPanelContentStickerSearchResultsScrollGrid.react"),
            {
              ref: d,
              selectedTab: f,
              onFocusPrev: s,
              onStickerClick: u,
              searchText: _,
              resetScroll: m,
              displayLocation: t,
            },
          )
        : (o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[_renderStickerScrollGrid] invalid tab: ",
                  "",
                ])),
              f,
            )
            .sendLogs("_renderStickerScrollGrid invalid tab"),
          null);
    }
    b.displayName = b.name + " [from " + i.id + "]";
    var v = {
      searchBarWrapper: {
        paddingTop: "x1y1aw1k",
        paddingBottom: "xwib8y2",
        paddingInlineStart: "xf7dkkf",
        paddingInlineEnd: "xv54qhq",
        $$css: !0,
      },
      containerSearch: {
        boxSizing: "x9f619",
        height: "x1avzhq7",
        backgroundColor: "xhjsbib",
        $$css: !0,
      },
      containerSearchExpressionsPanel: {
        backgroundColor: "xjbqb8w",
        $$css: !0,
      },
      contentAvatar: { height: "x5yr21d", $$css: !0 },
    };
    function S(t) {
      var a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.defaultSearchText,
        s = i.selectedTab,
        c = h(!1),
        m = h(),
        _ = h(0),
        S = h(0),
        R = h(),
        L = y(!0),
        E = L[0],
        k = L[1],
        I = function () {
          var e = m.current;
          e != null &&
            ((e.scrollTop = 0), (S.current = 0), (_.current = 0), k(!0));
        },
        T = y(l || ""),
        D = T[0],
        x = T[1],
        $ = h(!1);
      f(
        function () {
          $.current ? x("") : ($.current = !0);
        },
        [s],
      );
      var P = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            I();
            try {
              yield o(
                "WAWebStickerSearchCollection",
              ).StickerSearchCollection.search(e);
            } catch (e) {
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "Sticker search promise failed",
                    ])),
                )
                .sendLogs(e);
            }
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        N = r("useWAWebDebouncedCallback")(P, C),
        M = function (t) {
          (i.onChange == null || i.onChange(t),
            x(t),
            t !== "" ? N(t) : N.cancel());
        },
        w = function () {
          var e = R.current;
          if (!e) {
            ((c.current = !0), k(!0));
            return;
          }
          e.focus();
        },
        A = function (t) {
          (o("WAWebStopEvent").stopEvent(t), w());
        };
      (f(function () {
        (w(), l != null && l !== "" && P(l));
      }, []),
        g(a, function () {
          return {
            focus: function () {
              var e;
              (e = R.current) == null || e.focus();
            },
            clearSearchText: function () {
              x("");
            },
          };
        }));
      var F = r("useWAWebThrottledCallback")(function () {
          var e = m.current;
          if (e) {
            i.onScroll == null || i.onScroll(e);
            var t = e.scrollTop,
              n = S.current - t;
            if (n === o("WAWebEmojiPickerConstants").INPUT_BAR_TOTAL_HEIGHT) {
              ((_.current = n), (S.current = t));
              return;
            }
            var r =
              Math.abs(n) >
              o("WAWebEmojiPickerConstants").INPUT_BAR_SCROLL_SENSITIVITY;
            if (
              ((c.current =
                Math.abs(n) >
                o("WAWebEmojiPickerConstants").INPUT_BAR_SCROLL_FAST),
              n < 0)
            )
              E &&
                ((t > o("WAWebEmojiPickerConstants").INPUT_HIDE_POINT && r) ||
                  (S.current <
                    o("WAWebEmojiPickerConstants").INPUT_HIDE_POINT &&
                    t >= o("WAWebEmojiPickerConstants").INPUT_HIDE_POINT)) &&
                k(!1);
            else if (!E) {
              var a,
                l =
                  ((a = document.activeElement) == null
                    ? void 0
                    : a.classList.contains("_ahra")) === !0;
              !l &&
                (r || t < o("WAWebEmojiPickerConstants").INPUT_SHOW_POINT) &&
                k(!0);
            }
            ((S.current = t), (_.current = n));
          }
        }, o("WAWebEmojiPickerConstants").SCROLL_THROTTLE_TIME),
        O = function (t, n) {
          var e;
          if (
            (D
              ? (e = o("WAWebWamEnumStickerSendOriginType")
                  .STICKER_SEND_ORIGIN_TYPE.STICKER_SEARCH)
              : s === o("WAWebEmojiPickerConstants").StickerTabs.RECENTS
                ? (e = o("WAWebWamEnumStickerSendOriginType")
                    .STICKER_SEND_ORIGIN_TYPE.STICKER_PICKER_TAB_RECENTS)
                : s === o("WAWebEmojiPickerConstants").StickerTabs.FAVORITES
                  ? (e = o("WAWebWamEnumStickerSendOriginType")
                      .STICKER_SEND_ORIGIN_TYPE.STICKER_PICKER_TAB_FAVORITES)
                  : (e = o("WAWebWamEnumStickerSendOriginType")
                      .STICKER_SEND_ORIGIN_TYPE.STICKER_PICKER_TAB_EMOTION),
            i.onSticker(t, e, n),
            D)
          ) {
            var r;
            (r = R.current) == null || r.focus();
          }
        },
        B = h(),
        W = function () {
          var e;
          (e = B.current) == null || e.focus();
        },
        q = h(null),
        U = function (t) {
          q.current = t;
        },
        V = function (t) {
          t === q.current && (q.current = null);
        },
        H = function (t) {
          if (t.key === "ArrowUp") return (i.onFocusUp(), !1);
          if (t.key === "ArrowDown") return (W(), !1);
        },
        G = i.isAvatarStickers
          ? null
          : p.jsx(r("WDSSearchBar.react"), {
              hintText: u._(/*BTDS*/ "Search via WhatsApp sticker store"),
              onValueChange: M,
              value: D || "",
              ref: R,
              onKeyDown: H,
              xstyle: v.searchBarWrapper,
              testid: void 0,
            });
      return p.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        xstyle: [
          v.containerSearch,
          i.displayLocation ===
          o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel
            ? o("WAWebUISpacing").uiPadding.bottom0
            : o("WAWebUISpacing").uiPadding.bottom8,
          i.isAvatarStickers && v.contentAvatar,
          i.displayLocation ===
            o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel &&
            v.containerSearchExpressionsPanel,
        ],
        handlers: r("filterNullsObjectMap")({
          "shift+tab": i.onFocusPrev,
          tab: i.onFocusNext,
        }),
        onClick: A,
        children: p.jsxs(
          "div",
          babelHelpers.extends(
            {},
            {
              0: { className: "x1n2onr6 x1280gxy x5yr21d" },
              2: { className: "x1n2onr6 x5yr21d x1kapp2c" },
              1: { className: "x1n2onr6 x1280gxy x5yr21d xfl633f" },
              3: { className: "x1n2onr6 x5yr21d x1kapp2c xfl633f" },
            }[
              ((i.displayLocation ===
                o("WAWebPanelsDisplayLocation").DisplayLocation
                  .ExpressionsPanel) <<
                1) |
                ((i.displayLocation ===
                  o("WAWebPanelsDisplayLocation").DisplayLocation
                    .ExpressionsPanel) <<
                  0)
            ],
            {
              children: [
                G,
                p.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    {
                      0: {
                        className:
                          "x1n2onr6 x9f619 x1dbpiyn x16lop4 x1raw695 x1rife3k",
                      },
                      2: {
                        className:
                          "x1n2onr6 x9f619 x16lop4 x1raw695 x1rife3k x5yr21d",
                      },
                      1: {
                        className:
                          "x1n2onr6 x9f619 x1dbpiyn x16lop4 x1raw695 x1rife3k x1kapp2c",
                      },
                      3: {
                        className:
                          "x1n2onr6 x9f619 x16lop4 x1raw695 x1rife3k x5yr21d x1kapp2c",
                      },
                    }[
                      (!!i.isAvatarStickers << 1) |
                        ((i.displayLocation ===
                          o("WAWebPanelsDisplayLocation").DisplayLocation
                            .ExpressionsPanel) <<
                          0)
                    ],
                    {
                      onScroll: F,
                      ref: m,
                      children: p.jsx(b, {
                        ref: B,
                        onFocusPrev: w,
                        onStickerClick: O,
                        searchText: D.trim(),
                        selectedTab: i.selectedTab,
                        resetScroll: I,
                        displayLocation: i.displayLocation,
                        onDownloadStart: U,
                        onDownloadEnd: V,
                        isAvatarStickers: i.isAvatarStickers,
                      }),
                    },
                  ),
                ),
              ],
            },
          ),
        ),
      });
    }
    ((S.displayName = S.name + " [from " + i.id + "]"), (l.default = S));
  },
  226,
);
