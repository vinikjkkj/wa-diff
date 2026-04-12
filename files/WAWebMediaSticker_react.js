__d(
  "WAWebMediaSticker.react",
  [
    "fbt",
    "Promise",
    "WAWebFirstPartyStickerInfo.react",
    "WAWebFlex.react",
    "WAWebImg.react",
    "WAWebLottieSticker.react",
    "WAWebMediaUrlProvider",
    "WAWebMediaViewerStyles",
    "WAWebMediaZoomable.react",
    "WAWebNewsletterCollection",
    "WAWebNewsletterMembershipUtil",
    "WAWebNullFunc",
    "WAWebStickerDetailsStickerPackInfo.react",
    "WAWebStickerLikeMsgPlaceholder.react",
    "WAWebStickerModel",
    "WAWebStickerUtils",
    "WAWebWamEnumWebcRmrReasonCode",
    "react",
    "stylex",
    "useMergeRefs",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = d,
      _ = p.useEffect,
      f = p.useRef,
      g = 376,
      h = { container: { width: "xh8yej3", height: "x5yr21d", $$css: !0 } };
    function y(t) {
      var a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.msg,
        d = o("useWAWebModelValues").useModelValues(i.mediaData, [
          "encFilehash",
          "directPath",
          "filehash",
          "mediaKey",
          "mediaKeyTimestamp",
          "mediaStage",
          "mimetype",
          "fullWidth",
          "fullHeight",
          "isFirstParty",
          "isAvatar",
          "stickerPackId",
          "stickerPackName",
          "stickerPackPublisher",
          "extractedLottieSticker",
          "accessibilityLabel",
        ]),
        p = f(null),
        g = r("useMergeRefs")(a, p),
        y =
          o("WAWebStickerUtils").getStickerFileType(d.mimetype) ===
          o("WAWebStickerUtils").StickerFileType.LOTTIE,
        b = i.onLoad;
      _(
        function () {
          y && b != null && b();
        },
        [y, b],
      );
      var v = function (t) {
          var e;
          (e = p.current) == null || e.onClick(t);
        },
        S = function () {
          return l
            ? l.downloadMedia({
                downloadEvenIfExpensive: !1,
                rmrReason: o("WAWebWamEnumWebcRmrReasonCode")
                  .WEBC_RMR_REASON_CODE.MEDIA_VIEWER,
                isUserInitiated: !1,
              })
            : (c || (c = n("Promise"))).resolve();
        },
        R = r("WAWebNewsletterCollection").getActive(),
        L = o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(
          R == null ? void 0 : R.newsletterMetadata,
        ),
        E =
          d.isFirstParty === !0
            ? m.jsx(r("WAWebFirstPartyStickerInfo.react"), {
                stickerPackId: d.stickerPackId,
                onStickerPackView: i.onStickerPackView,
                stickerPackViewDelay: i.stickerPackViewDelay,
                showViewPackButton:
                  R != null ? d.isAvatar !== !0 && L : d.isAvatar !== !0,
                sticker: new (o("WAWebStickerModel").StickerModel)({
                  id: d.filehash,
                  mimetype: d.mimetype,
                  width: d.fullWidth,
                  height: d.fullHeight,
                  filehash: d.filehash,
                  encFilehash: d.encFilehash,
                  directPath: d.directPath,
                  mediaKey: d.mediaKey,
                  mediaKeyTimestamp: d.mediaKeyTimestamp,
                }),
              })
            : m.jsx(
                o("WAWebStickerDetailsStickerPackInfo.react")
                  .StickerDetailsStickerPackInfo,
                {
                  name: d.stickerPackName,
                  publisher: d.stickerPackPublisher,
                  theme: o("WAWebStickerDetailsStickerPackInfo.react").Theme
                    .MediaViewer,
                  sticker: new (o("WAWebStickerModel").StickerModel)({
                    id: d.filehash,
                    mimetype: d.mimetype,
                    width: d.fullWidth,
                    height: d.fullHeight,
                    filehash: d.filehash,
                    encFilehash: d.encFilehash,
                    directPath: d.directPath,
                    mediaKey: d.mediaKey,
                    mediaKeyTimestamp: d.mediaKeyTimestamp,
                  }),
                },
              ),
        k = m.jsx(r("WAWebMediaUrlProvider"), {
          mediaData: d,
          placeholderRenderer: C,
          downloadMedia: S,
          children: function (t) {
            return m.jsx(r("WAWebImg.react"), {
              className: (u || (u = r("stylex")))(
                r("WAWebMediaViewerStyles").content,
              ),
              onClick: v,
              src: t,
              onLoad: i.onLoad,
            });
          },
        });
      return (
        y &&
          (k = m.jsx(r("WAWebLottieSticker.react"), {
            className: "",
            mediaData: d,
            startAnimation: !0,
            onClick: v,
            placeholderRenderer: o("WAWebNullFunc").returnNull,
            downloadMedia: S,
          })),
        m.jsxs(o("WAWebFlex.react").FlexColumn, {
          align: "center",
          justify: "center",
          xstyle: h.container,
          children: [
            m.jsx("div", {
              className: "xh8yej3 x5yr21d xlnrm6 xjkwb7i x1iymm2a xupqr0c",
              "data-testid": void 0,
              children: m.jsx(r("WAWebMediaZoomable.react"), {
                ref: g,
                role: "button",
                tabIndex: 0,
                "aria-label":
                  d.accessibilityLabel != null
                    ? d.accessibilityLabel
                    : s._(/*BTDS*/ "Sticker"),
                width: d.fullWidth,
                height: d.fullHeight,
                onZoomIn: i.onImgZoomIn,
                msg: l,
                children: k,
              }),
            }),
            E,
          ],
        })
      );
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C() {
      return m.jsx(r("WAWebStickerLikeMsgPlaceholder.react"), { size: g });
    }
    ((C.displayName = C.name + " [from " + i.id + "]"), (l.default = y));
  },
  226,
);
