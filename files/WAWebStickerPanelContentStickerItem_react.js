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
    "react-compiler-runtime",
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
      var a = o("react-compiler-runtime").c(58),
        i,
        l;
      a[0] !== t
        ? ((l = t.ref),
          (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (a[0] = t),
          (a[1] = i),
          (a[2] = l))
        : ((i = a[1]), (l = a[2]));
      var s = i,
        c = s.downloadErrorShouldThrow,
        m = s.onDownload,
        h = s.selected,
        y = s.theme,
        C = y === void 0 ? "stickerPanel" : y,
        b;
      a[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = [
            "id",
            "filehash",
            "mediaData",
            "isPlaceholder",
            "isCreateButton",
            "mimetype",
          ]),
          (a[3] = b))
        : (b = a[3]);
      var v = o("useWAWebModelValues").useModelValues(i.sticker, b),
        S;
      (a[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = ["stickerPremiumStatus"]), (a[4] = S))
        : (S = a[4]),
        o("useWAWebModelValues").useModelValues(v.mediaData, S));
      var R = f(null),
        L;
      a[5] !== c || a[6] !== m || a[7] !== v
        ? ((L = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (yield v.downloadMedia(c), m == null || m(v.id));
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (a[5] = c),
          (a[6] = m),
          (a[7] = v),
          (a[8] = L))
        : (L = a[8]);
      var E = r("useWAWebCallbackOnce")(L),
        k = g(),
        I = k[0],
        T = k[1],
        D;
      a[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = function () {
            return R.current ? R.current === document.activeElement : !1;
          }),
          (a[9] = D))
        : (D = a[9]);
      var x = D,
        $;
      a[10] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = function () {
            R.current && (x() || r("WAWebFocusTracer").focus(R.current));
          }),
          (a[10] = $))
        : ($ = a[10]);
      var P = $,
        N;
      a[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = function () {
            return R.current ? R.current.offsetTop : 0;
          }),
          (a[11] = N))
        : (N = a[11]);
      var M = N,
        w;
      (a[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = function () {
            return { hasFocus: x, focus: P, getOffsetTop: M };
          }),
          (a[12] = w))
        : (w = a[12]),
        _(l, w));
      var A;
      a[13] !== i.onClick || a[14] !== v
        ? ((A = i.onClick
            ? function (e) {
                var t = i.onClick;
                t && t(o("WAWebStateUtils").unproxy(v), e);
              }
            : void 0),
          (a[13] = i.onClick),
          (a[14] = v),
          (a[15] = A))
        : (A = a[15]);
      var F = A,
        O;
      a[16] !== i.onEnter || a[17] !== v
        ? ((O = function (t) {
            var e = i.onEnter;
            e && e(o("WAWebStateUtils").unproxy(v), t);
          }),
          (a[16] = i.onEnter),
          (a[17] = v),
          (a[18] = O))
        : (O = a[18]);
      var B = O,
        W;
      a[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = { root: null, rootMargin: "10px", threshold: 0 }), (a[19] = W))
        : (W = a[19]);
      var q = r("useWAWebIntersection")(W),
        U = q[0],
        V = q[1],
        H = V.isIntersecting,
        G,
        z;
      (a[20] !== E || a[21] !== H
        ? ((G = function () {
            H && E();
          }),
          (z = [H, E]),
          (a[20] = E),
          (a[21] = H),
          (a[22] = G),
          (a[23] = z))
        : ((G = a[22]), (z = a[23])),
        p(G, z));
      var j = r("useMergeRefs")(R, U),
        K,
        Q;
      if (C !== "stickerDetails") {
        var X;
        if (
          (a[24] !== i ||
          a[25] !== v.filehash ||
          a[26] !== v.isCreateButton ||
          a[27] !== v.isPlaceholder ||
          a[28] !== v.mediaData ||
          a[29] !== v.mimetype
            ? ((X = function (t) {
                var e = [];
                if (!(v.isPlaceholder || v.isCreateButton)) {
                  (t.preventDefault(),
                    t.stopPropagation(),
                    o("WAWebMiscGatingUtils").isFavoriteStickersEnabled() &&
                      (o(
                        "WAWebFavoriteStickerAction",
                      ).isStickerFilehashFavorited(v.filehash) &&
                      i.selectedTab ===
                        o("WAWebEmojiPickerConstants").StickerTabs.FAVORITES
                        ? e.push(
                            d.jsx(
                              o("WAWebDropdownItem.react").DropdownItem,
                              {
                                testid: void 0,
                                action: function () {
                                  o(
                                    "WAWebFavoriteStickerAction",
                                  ).removeStickerFromFavorites(i.sticker);
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
                          ).isStickerFilehashFavorited(v.filehash) &&
                          r("WAWebAuraGating").canUsePremiumSticker(
                            v.mediaData.stickerPremiumStatus,
                          ) &&
                          e.push(
                            d.jsx(
                              o("WAWebDropdownItem.react").DropdownItem,
                              {
                                testid: void 0,
                                action: function () {
                                  o(
                                    "WAWebFavoriteStickerAction",
                                  ).addStickerToFavorites(i.sticker);
                                },
                                icon: d.jsx(r("WDSIconIcFavorite.react"), {}),
                                children: u._(/*BTDS*/ "Add to Favorites"),
                              },
                              "add-favorite-sticker",
                            ),
                          )));
                  var n = o(
                    "WAWebMediaInMemoryBlobCache",
                  ).InMemoryMediaBlobCache.get(i.sticker.filehash);
                  if (
                    o("WAWebStickerUtils").getStickerFileType(v.mimetype) ===
                    o("WAWebStickerUtils").StickerFileType.LOTTIE
                  ) {
                    var a = o(
                      "WAWebInMemoryLottieStickerCache",
                    ).InMemoryLottieStickerCache.get(v.filehash);
                    a != null &&
                      o(
                        "WAWebCopyToClipboard",
                      ).supportsCopyImageToClipboard() &&
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
                      o(
                        "WAWebCopyToClipboard",
                      ).supportsCopyImageToClipboard() &&
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
                    i.selectedTab ===
                      o("WAWebEmojiPickerConstants").StickerTabs.RECENTS &&
                    o("WAWebRecentStickerAction").isStickerIdInRecent(
                      i.sticker,
                    ) &&
                    e.push(
                      d.jsx(
                        o("WAWebDropdownItem.react").DropdownItem,
                        {
                          testid: void 0,
                          action: function () {
                            o(
                              "WAWebRecentStickerAction",
                            ).removeStickerFromRecent(i.sticker);
                          },
                          icon: d.jsx(
                            o("WAWebClearRefreshedIcon.react")
                              .ClearRefreshedIcon,
                            {},
                          ),
                          children: u._(/*BTDS*/ "Remove from recents"),
                        },
                        "remove-recent-sticker",
                      ),
                    );
                  var l = v.mediaData,
                    s = l.isFirstParty,
                    c = l.stickerPackId,
                    m = i,
                    p = m.dontShowViewPack,
                    _ = p === void 0 ? !1 : p;
                  (_ === !1 &&
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
                              o(
                                "WAWebMediaStickerUtils",
                              ).requestStickerReupload([i.sticker]);
                            },
                            icon: d.jsx(r("WAWebUploadRefreshedIcon"), {}),
                            children: "[INTERNAL] Request Sticker Reupload",
                          },
                          "request-sticker-reupload",
                        ),
                      ),
                    T({ menu: e, event: t }));
                }
              }),
              (a[24] = i),
              (a[25] = v.filehash),
              (a[26] = v.isCreateButton),
              (a[27] = v.isPlaceholder),
              (a[28] = v.mediaData),
              (a[29] = v.mimetype),
              (a[30] = X))
            : (X = a[30]),
          (K = X),
          I)
        ) {
          var Y;
          a[31] === Symbol.for("react.memo_cache_sentinel")
            ? ((Y = function () {
                return T(null);
              }),
              (a[31] = Y))
            : (Y = a[31]);
          var J;
          (a[32] !== I
            ? ((J = d.jsx(o("WAWebUimUie.react").UIE, {
                displayName: "ChatContextMenu",
                escapable: !0,
                popable: !0,
                dismissOnWindowResize: !0,
                requestDismiss: Y,
                children: d.jsx(r("WAWebUimUieMenu.react"), { contextMenu: I }),
              })),
              (a[32] = I),
              (a[33] = J))
            : (J = a[33]),
            (Q = J));
        }
      }
      var Z = C === "stickerPanel",
        ee = C === "stickerExpressionsPanel",
        te = h === !0,
        ne =
          C === "stickerExpressionsPanel" &&
          o("WAWebStickerPanelGatingUtils").showLessStickersTestGroup,
        re = C === "stickerExpressionsPanel",
        oe;
      if (
        a[34] !== Z ||
        a[35] !== ee ||
        a[36] !== te ||
        a[37] !== ne ||
        a[38] !== re
      ) {
        var ae;
        ((oe = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((ae = {}),
          (ae._ahrb = Z),
          (ae._alpu = ee),
          (ae._ahra = !0),
          (ae._aotx = te),
          (ae["x9daxre x450l9j xjp8j0k"] = ne),
          (ae._asaf = re),
          ae),
        )),
          (a[34] = Z),
          (a[35] = ee),
          (a[36] = te),
          (a[37] = ne),
          (a[38] = re),
          (a[39] = oe));
      } else oe = a[39];
      var ie;
      a[40] !== B
        ? ((ie = { enter: B }), (a[40] = B), (a[41] = ie))
        : (ie = a[41]);
      var le;
      a[42] !== E ||
      a[43] !== F ||
      a[44] !== H ||
      a[45] !== v.isCreateButton ||
      a[46] !== v.mediaData ||
      a[47] !== C
        ? ((le =
            H &&
            d.jsx(r("WAWebSticker.react"), {
              mediaData: v.mediaData,
              onClick: F,
              theme: C,
              loopAnimation: !0,
              downloadMedia: E,
              isCreateButton: v.isCreateButton,
            })),
          (a[42] = E),
          (a[43] = F),
          (a[44] = H),
          (a[45] = v.isCreateButton),
          (a[46] = v.mediaData),
          (a[47] = C),
          (a[48] = le))
        : (le = a[48]);
      var se;
      a[49] !== le
        ? ((se = d.jsx("div", {
            className: "_ahrc",
            "data-testid": void 0,
            children: le,
          })),
          (a[49] = le),
          (a[50] = se))
        : (se = a[50]);
      var ue;
      return (
        a[51] !== K ||
        a[52] !== j ||
        a[53] !== oe ||
        a[54] !== ie ||
        a[55] !== se ||
        a[56] !== Q
          ? ((ue = d.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
              role: "button",
              ref: j,
              className: oe,
              onContextMenu: K,
              handlers: ie,
              children: [se, Q],
            })),
            (a[51] = K),
            (a[52] = j),
            (a[53] = oe),
            (a[54] = ie),
            (a[55] = se),
            (a[56] = Q),
            (a[57] = ue))
          : (ue = a[57]),
        ue
      );
    }
    l.default = h;
  },
  226,
);
