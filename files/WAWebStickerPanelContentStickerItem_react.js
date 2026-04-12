__d(
  "WAWebStickerPanelContentStickerItem.react",
  [
    "cx",
    "fbt",
    "WAWebAuraGating",
    "WAWebClassnames",
    "WAWebClearRefreshedIcon.react",
    "WAWebCmd",
    "WAWebCopyStickerToClipboard",
    "WAWebCopyToClipboard",
    "WAWebDropdownItem.react",
    "WAWebEmojiPickerConstants",
    "WAWebFavoriteStickerAction",
    "WAWebFocusTracer",
    "WAWebInMemoryLottieStickerCache",
    "WAWebKeyboardHotKeys.react",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaStickerUtils",
    "WAWebMiscGatingUtils",
    "WAWebRecentStickerAction",
    "WAWebStateUtils",
    "WAWebSticker.react",
    "WAWebStickerPanelGatingUtils",
    "WAWebStickerUtils",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebUnfavoriteRefreshedIcon.react",
    "WAWebUploadRefreshedIcon",
    "WDSIconIcContentCopy.react",
    "WDSIconIcFavorite.react",
    "WDSIconWdsIcSticker.react",
    "asyncToGeneratorRuntime",
    "gkx",
    "react",
    "useMergeRefs",
    "useWAWebCallbackOnce",
    "useWAWebIntersection",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e = ["ref"],
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useEffect,
      _ = m.useImperativeHandle,
      f = m.useRef,
      g = m.useState;
    function h(t) {
      var a,
        i = t.ref,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e),
        s = l.downloadErrorShouldThrow,
        c = l.onDownload,
        m = l.selected,
        h = l.theme,
        y = h === void 0 ? "stickerPanel" : h,
        C = o("useWAWebModelValues").useModelValues(l.sticker, [
          "id",
          "filehash",
          "mediaData",
          "isPlaceholder",
          "isCreateButton",
          "mimetype",
        ]);
      o("useWAWebModelValues").useModelValues(C.mediaData, [
        "stickerPremiumStatus",
      ]);
      var b = f(null),
        v = r("useWAWebCallbackOnce")(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (yield C.downloadMedia(s), c == null || c(C.id));
          }),
        ),
        S = g(),
        R = S[0],
        L = S[1],
        E = function () {
          return b.current ? b.current === document.activeElement : !1;
        },
        k = function () {
          b.current && (E() || r("WAWebFocusTracer").focus(b.current));
        },
        I = function () {
          return b.current ? b.current.offsetTop : 0;
        };
      _(i, function () {
        return { hasFocus: E, focus: k, getOffsetTop: I };
      });
      var T = l.onClick
          ? function (e) {
              var t = l.onClick;
              t && t(o("WAWebStateUtils").unproxy(C), e);
            }
          : void 0,
        D = function (t) {
          var e = l.onEnter;
          e && e(o("WAWebStateUtils").unproxy(C), t);
        },
        x = r("useWAWebIntersection")({
          root: null,
          rootMargin: "10px",
          threshold: 0,
        }),
        $ = x[0],
        P = x[1].isIntersecting;
      p(
        function () {
          P && v();
        },
        [P, v],
      );
      var N = r("useMergeRefs")(b, $),
        M,
        w;
      return (
        y !== "stickerDetails" &&
          ((M = function (t) {
            var e = [];
            if (!(C.isPlaceholder || C.isCreateButton)) {
              (t.preventDefault(),
                t.stopPropagation(),
                o("WAWebMiscGatingUtils").isFavoriteStickersEnabled() &&
                  (o("WAWebFavoriteStickerAction").isStickerFilehashFavorited(
                    C.filehash,
                  ) &&
                  l.selectedTab ===
                    o("WAWebEmojiPickerConstants").StickerTabs.FAVORITES
                    ? e.push(
                        d.jsx(
                          o("WAWebDropdownItem.react").DropdownItem,
                          {
                            testid: void 0,
                            action: function () {
                              o(
                                "WAWebFavoriteStickerAction",
                              ).removeStickerFromFavorites(l.sticker);
                            },
                            icon: d.jsx(
                              o("WAWebUnfavoriteRefreshedIcon.react")
                                .UnfavoriteRefreshedIcon,
                              {},
                            ),
                            children: u._(/*BTDS*/ "Remove from Favorites"),
                          },
                          "remove-favorite-sticker",
                        ),
                      )
                    : !o(
                        "WAWebFavoriteStickerAction",
                      ).isStickerFilehashFavorited(C.filehash) &&
                      r("WAWebAuraGating").canUsePremiumSticker(
                        C.mediaData.stickerPremiumStatus,
                      ) &&
                      e.push(
                        d.jsx(
                          o("WAWebDropdownItem.react").DropdownItem,
                          {
                            testid: void 0,
                            action: function () {
                              o(
                                "WAWebFavoriteStickerAction",
                              ).addStickerToFavorites(l.sticker);
                            },
                            icon: d.jsx(r("WDSIconIcFavorite.react"), {}),
                            children: u._(/*BTDS*/ "Add to Favorites"),
                          },
                          "add-favorite-sticker",
                        ),
                      )));
              var n = o(
                "WAWebMediaInMemoryBlobCache",
              ).InMemoryMediaBlobCache.get(l.sticker.filehash);
              if (
                o("WAWebStickerUtils").getStickerFileType(C.mimetype) ===
                o("WAWebStickerUtils").StickerFileType.LOTTIE
              ) {
                var a = o(
                  "WAWebInMemoryLottieStickerCache",
                ).InMemoryLottieStickerCache.get(C.filehash);
                a != null &&
                  o("WAWebCopyToClipboard").supportsCopyImageToClipboard() &&
                  e.push(
                    d.jsx(
                      o("WAWebDropdownItem.react").DropdownItem,
                      {
                        testid: void 0,
                        action: function () {
                          o(
                            "WAWebCopyStickerToClipboard",
                          ).copyLottieStickerToClipboard(a);
                        },
                        icon: d.jsx(r("WDSIconIcContentCopy.react"), {}),
                        children: u._(/*BTDS*/ "Copy sticker image"),
                      },
                      "copy-favorite-sticker",
                    ),
                  );
              } else
                n != null &&
                  o("WAWebCopyToClipboard").supportsCopyImageToClipboard() &&
                  e.push(
                    d.jsx(
                      o("WAWebDropdownItem.react").DropdownItem,
                      {
                        testid: void 0,
                        action: function () {
                          o("WAWebCopyToClipboard").copyImageToClipboard(n);
                        },
                        icon: d.jsx(r("WDSIconIcContentCopy.react"), {}),
                        children: u._(/*BTDS*/ "Copy sticker image"),
                      },
                      "copy-favorite-sticker",
                    ),
                  );
              o("WAWebMiscGatingUtils").isRecentStickersMDEnabled() &&
                l.selectedTab ===
                  o("WAWebEmojiPickerConstants").StickerTabs.RECENTS &&
                o("WAWebRecentStickerAction").isStickerIdInRecent(l.sticker) &&
                e.push(
                  d.jsx(
                    o("WAWebDropdownItem.react").DropdownItem,
                    {
                      testid: void 0,
                      action: function () {
                        o("WAWebRecentStickerAction").removeStickerFromRecent(
                          l.sticker,
                        );
                      },
                      icon: d.jsx(
                        o("WAWebClearRefreshedIcon.react").ClearRefreshedIcon,
                        {},
                      ),
                      children: u._(/*BTDS*/ "Remove from recents"),
                    },
                    "remove-recent-sticker",
                  ),
                );
              var i = C.mediaData,
                s = i.isFirstParty,
                c = i.stickerPackId,
                m = l.dontShowViewPack,
                p = m === void 0 ? !1 : m;
              (p === !1 &&
                c &&
                s === !0 &&
                e.push(
                  d.jsx(
                    o("WAWebDropdownItem.react").DropdownItem,
                    {
                      testid: void 0,
                      action: function () {
                        return o("WAWebCmd").Cmd.openStickerPack(c);
                      },
                      icon: d.jsx(r("WDSIconWdsIcSticker.react"), {}),
                      children: u._(/*BTDS*/ "View pack"),
                    },
                    "open-sticker-pack",
                  ),
                ),
                r("gkx")("26258") ||
                  e.push(
                    d.jsx(
                      o("WAWebDropdownItem.react").DropdownItem,
                      {
                        testid: void 0,
                        action: function () {
                          o("WAWebMediaStickerUtils").requestStickerReupload([
                            l.sticker,
                          ]);
                        },
                        icon: d.jsx(r("WAWebUploadRefreshedIcon"), {}),
                        children: "[INTERNAL] Request Sticker Reupload",
                      },
                      "request-sticker-reupload",
                    ),
                  ),
                L({ menu: e, event: t }));
            }
          }),
          R &&
            (w = d.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "ChatContextMenu",
              escapable: !0,
              popable: !0,
              dismissOnWindowResize: !0,
              requestDismiss: function () {
                return L(null);
              },
              children: d.jsx(r("WAWebUimUieMenu.react"), { contextMenu: R }),
            }))),
        d.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
          role: "button",
          ref: N,
          className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            ((a = {}),
            (a._ahrb = y === "stickerPanel"),
            (a._alpu = y === "stickerExpressionsPanel"),
            (a._ahra = !0),
            (a._aotx = m === !0),
            (a["x9daxre x450l9j xjp8j0k"] =
              y === "stickerExpressionsPanel" &&
              o("WAWebStickerPanelGatingUtils").showLessStickersTestGroup),
            (a._asaf = y === "stickerExpressionsPanel"),
            a),
          ),
          onContextMenu: M,
          handlers: { enter: D },
          children: [
            d.jsx("div", {
              className: "_ahrc",
              "data-testid": void 0,
              children:
                P &&
                d.jsx(r("WAWebSticker.react"), {
                  mediaData: C.mediaData,
                  onClick: T,
                  theme: y,
                  loopAnimation: !0,
                  downloadMedia: v,
                  isCreateButton: C.isCreateButton,
                }),
            }),
            w,
          ],
        })
      );
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);
