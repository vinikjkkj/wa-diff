__d(
  "WAWebStickersDetailsDrawerModal.react",
  [
    "fbt",
    "WAWebABProps",
    "WAWebChatInfoActionButton.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebFlatListController",
    "WAWebInMemoryLottieStickerCache",
    "WAWebNewsletterCollection",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterWamoSubMessageType",
    "WAWebNewsletterWamoSubMessageTypePopup.react",
    "WAWebNewsletterWamoSubUtils",
    "WAWebStickerDetailsStickerPackInfo.react",
    "WAWebStickerOverlayAnimation.react",
    "WAWebStickerPanelContentStickerItem.react",
    "WAWebStickerUtils",
    "WAWebWdsIcSendFilledIcon.react",
    "react",
    "useLazyRef",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useRef,
      _ = d.useState,
      f = {
        controlsButton: {
          marginInlineStart: "xyqm7xq",
          marginInlineEnd: "x1ys307a",
          $$css: !0,
        },
      };
    function g(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = r("useLazyRef")(function () {
          return new (r("WAWebFlatListController"))();
        }),
        l = a.onBack,
        u = a.onSend,
        d = a.sticker,
        g = a.stickerPack,
        h = d.mediaData,
        y =
          o("WAWebStickerUtils").getStickerFileType(h.mimetype) ===
          o("WAWebStickerUtils").StickerFileType.LOTTIE,
        C = o("WAWebABProps").getABPropConfigValue(
          "aura_stickers_overlay_animation_enabled",
        ),
        b =
          C &&
          y &&
          o(
            "WAWebInMemoryLottieStickerCache",
          ).InMemorySecondaryLottieStickerCache.has(h.filehash),
        v = _(y && C),
        S = v[0],
        R = v[1],
        L = m(
          function (e, t) {
            b && R(!0);
          },
          [b],
        ),
        E = m(function () {
          R(!1);
        }, []),
        k = _(null),
        I = k[0],
        T = k[1],
        D = p(),
        x = function (t, n) {
          u(
            t,
            n ===
              o("WAWebNewsletterWamoSubMessageType")
                .NewsletterWamoSubMessageType.WamoSub,
          );
        },
        $ = function () {
          var e = r("WAWebNewsletterCollection").getActive();
          if (e != null) {
            var t = e.newsletterMetadata;
            if (
              o("WAWebNewsletterWamoSubUtils").newsletterSupportsSubscriptions(
                t,
              ) &&
              D.current &&
              o(
                "WAWebNewsletterGatingUtils",
              ).isWamoSubCreatorExperienceSupported()
            ) {
              var n = function (t) {
                x(d, t);
              };
              T({ popupAnchorEl: D.current, handleSelect: n });
              return;
            }
          }
          x(d);
        };
      return c.jsxs(
        r("WAWebDrawer.react"),
        {
          theme: "sticker-store",
          ref: n,
          testid: void 0,
          children: [
            c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              title: s._(/*BTDS*/ "Sticker details"),
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
              onBack: l,
              focusBackOrCancel: !0,
            }),
            c.jsx(r("WAWebDrawerBody.react"), {
              flatListControllers: [i.current],
              children: c.jsxs(r("WAWebDrawerSection.react"), {
                animation: !1,
                theme: "padding-no-margin",
                children: [
                  c.jsxs("div", {
                    className:
                      "x78zum5 xl56j7k x1plvlek xryxfnj x1vjgj0v xya0cws x1c436fg xh8yej3",
                    children: [
                      c.jsx(
                        r("WAWebStickerPanelContentStickerItem.react"),
                        { sticker: d, theme: "stickerDetails", onClick: L },
                        d.id,
                      ),
                      S &&
                        c.jsx(r("WAWebStickerOverlayAnimation.react"), {
                          mediaData: h,
                          onClose: E,
                        }),
                    ],
                  }),
                  c.jsx(
                    o("WAWebStickerDetailsStickerPackInfo.react")
                      .StickerDetailsStickerPackInfo,
                    {
                      isPremium: g.premium > 0,
                      name: g.name,
                      publisher: g.publisher,
                      theme: o("WAWebStickerDetailsStickerPackInfo.react").Theme
                        .StickerStore,
                    },
                  ),
                  c.jsx("div", {
                    className: "x78zum5 xl56j7k x14ler8",
                    children: c.jsx(r("WAWebChatInfoActionButton.react"), {
                      ref: D,
                      Icon: o("WAWebWdsIcSendFilledIcon.react")
                        .WdsIcSendFilledIcon,
                      label: s._(/*BTDS*/ "Send to this chat"),
                      testid: void 0,
                      xstyle: f.controlsButton,
                      onClick: $,
                    }),
                  }),
                  I != null &&
                    c.jsx(r("WAWebNewsletterWamoSubMessageTypePopup.react"), {
                      handleSelect: I.handleSelect,
                      popupAnchorEl: I.popupAnchorEl,
                      onDismiss: function () {
                        return T(null);
                      },
                    }),
                ],
              }),
            }),
          ],
        },
        "sticker-details-modal",
      );
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
