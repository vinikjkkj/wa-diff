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
    "react-compiler-runtime",
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
      var a = o("react-compiler-runtime").c(54),
        i,
        l;
      a[0] !== t
        ? ((l = t.ref),
          (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (a[0] = t),
          (a[1] = i),
          (a[2] = l))
        : ((i = a[1]), (l = a[2]));
      var d = i,
        p = d.msg,
        g;
      a[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = [
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
          (a[3] = g))
        : (g = a[3]);
      var y = o("useWAWebModelValues").useModelValues(i.mediaData, g),
        b = f(null),
        v = r("useMergeRefs")(l, b),
        S;
      a[4] !== y.mimetype
        ? ((S = o("WAWebStickerUtils").getStickerFileType(y.mimetype)),
          (a[4] = y.mimetype),
          (a[5] = S))
        : (S = a[5]);
      var R = S === o("WAWebStickerUtils").StickerFileType.LOTTIE,
        L = i,
        E = L.onLoad,
        k,
        I;
      (a[6] !== R || a[7] !== E
        ? ((k = function () {
            R && E != null && E();
          }),
          (I = [R, E]),
          (a[6] = R),
          (a[7] = E),
          (a[8] = k),
          (a[9] = I))
        : ((k = a[8]), (I = a[9])),
        _(k, I));
      var T;
      a[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = function (t) {
            var e;
            (e = b.current) == null || e.onClick(t);
          }),
          (a[10] = T))
        : (T = a[10]);
      var D = T,
        x;
      a[11] !== p
        ? ((x = function () {
            return p
              ? p.downloadMedia({
                  downloadEvenIfExpensive: !1,
                  rmrReason: o("WAWebWamEnumWebcRmrReasonCode")
                    .WEBC_RMR_REASON_CODE.MEDIA_VIEWER,
                  isUserInitiated: !1,
                })
              : (c || (c = n("Promise"))).resolve();
          }),
          (a[11] = p),
          (a[12] = x))
        : (x = a[12]);
      var $ = x,
        P,
        N;
      if (a[13] === Symbol.for("react.memo_cache_sentinel")) {
        var M;
        ((P = r("WAWebNewsletterCollection").getActive()),
          (N = o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(
            (M = P) == null ? void 0 : M.newsletterMetadata,
          )),
          (a[13] = P),
          (a[14] = N));
      } else ((P = a[13]), (N = a[14]));
      var w = N,
        A;
      a[15] !== y.directPath ||
      a[16] !== y.encFilehash ||
      a[17] !== y.filehash ||
      a[18] !== y.fullHeight ||
      a[19] !== y.fullWidth ||
      a[20] !== y.isAvatar ||
      a[21] !== y.isFirstParty ||
      a[22] !== y.mediaKey ||
      a[23] !== y.mediaKeyTimestamp ||
      a[24] !== y.mimetype ||
      a[25] !== y.stickerPackId ||
      a[26] !== y.stickerPackName ||
      a[27] !== y.stickerPackPublisher ||
      a[28] !== i.onStickerPackView ||
      a[29] !== i.stickerPackViewDelay
        ? ((A =
            y.isFirstParty === !0
              ? m.jsx(r("WAWebFirstPartyStickerInfo.react"), {
                  stickerPackId: y.stickerPackId,
                  onStickerPackView: i.onStickerPackView,
                  stickerPackViewDelay: i.stickerPackViewDelay,
                  showViewPackButton:
                    P != null ? y.isAvatar !== !0 && w : y.isAvatar !== !0,
                  sticker: new (o("WAWebStickerModel").StickerModel)({
                    id: y.filehash,
                    mimetype: y.mimetype,
                    width: y.fullWidth,
                    height: y.fullHeight,
                    filehash: y.filehash,
                    encFilehash: y.encFilehash,
                    directPath: y.directPath,
                    mediaKey: y.mediaKey,
                    mediaKeyTimestamp: y.mediaKeyTimestamp,
                  }),
                })
              : m.jsx(
                  o("WAWebStickerDetailsStickerPackInfo.react")
                    .StickerDetailsStickerPackInfo,
                  {
                    name: y.stickerPackName,
                    publisher: y.stickerPackPublisher,
                    theme: o("WAWebStickerDetailsStickerPackInfo.react").Theme
                      .MediaViewer,
                    sticker: new (o("WAWebStickerModel").StickerModel)({
                      id: y.filehash,
                      mimetype: y.mimetype,
                      width: y.fullWidth,
                      height: y.fullHeight,
                      filehash: y.filehash,
                      encFilehash: y.encFilehash,
                      directPath: y.directPath,
                      mediaKey: y.mediaKey,
                      mediaKeyTimestamp: y.mediaKeyTimestamp,
                    }),
                  },
                )),
          (a[15] = y.directPath),
          (a[16] = y.encFilehash),
          (a[17] = y.filehash),
          (a[18] = y.fullHeight),
          (a[19] = y.fullWidth),
          (a[20] = y.isAvatar),
          (a[21] = y.isFirstParty),
          (a[22] = y.mediaKey),
          (a[23] = y.mediaKeyTimestamp),
          (a[24] = y.mimetype),
          (a[25] = y.stickerPackId),
          (a[26] = y.stickerPackName),
          (a[27] = y.stickerPackPublisher),
          (a[28] = i.onStickerPackView),
          (a[29] = i.stickerPackViewDelay),
          (a[30] = A))
        : (A = a[30]);
      var F = A,
        O;
      a[31] !== i.onLoad
        ? ((O = function (t) {
            return m.jsx(r("WAWebImg.react"), {
              className: (u || (u = r("stylex")))(
                r("WAWebMediaViewerStyles").content,
              ),
              onClick: D,
              src: t,
              onLoad: i.onLoad,
            });
          }),
          (a[31] = i.onLoad),
          (a[32] = O))
        : (O = a[32]);
      var B;
      a[33] !== $ || a[34] !== y || a[35] !== O
        ? ((B = m.jsx(r("WAWebMediaUrlProvider"), {
            mediaData: y,
            placeholderRenderer: C,
            downloadMedia: $,
            children: O,
          })),
          (a[33] = $),
          (a[34] = y),
          (a[35] = O),
          (a[36] = B))
        : (B = a[36]);
      var W = B;
      if (R) {
        var q;
        (a[37] !== $ || a[38] !== y
          ? ((q = m.jsx(r("WAWebLottieSticker.react"), {
              className: "",
              mediaData: y,
              startAnimation: !0,
              onClick: D,
              placeholderRenderer: o("WAWebNullFunc").returnNull,
              downloadMedia: $,
            })),
            (a[37] = $),
            (a[38] = y),
            (a[39] = q))
          : (q = a[39]),
          (W = q));
      }
      var U;
      a[40] === Symbol.for("react.memo_cache_sentinel")
        ? ((U = {
            className: "xh8yej3 x5yr21d xlnrm6 xjkwb7i x1iymm2a xupqr0c",
          }),
          (a[40] = U))
        : (U = a[40]);
      var V;
      a[41] !== y.accessibilityLabel
        ? ((V =
            y.accessibilityLabel != null
              ? y.accessibilityLabel
              : s._(/*BTDS*/ "Sticker")),
          (a[41] = y.accessibilityLabel),
          (a[42] = V))
        : (V = a[42]);
      var H;
      a[43] !== y.fullHeight ||
      a[44] !== y.fullWidth ||
      a[45] !== v ||
      a[46] !== p ||
      a[47] !== i.onImgZoomIn ||
      a[48] !== W ||
      a[49] !== V
        ? ((H = m.jsx(
            "div",
            babelHelpers.extends({}, U, {
              "data-testid": void 0,
              children: m.jsx(r("WAWebMediaZoomable.react"), {
                ref: v,
                role: "button",
                tabIndex: 0,
                "aria-label": V,
                width: y.fullWidth,
                height: y.fullHeight,
                onZoomIn: i.onImgZoomIn,
                msg: p,
                children: W,
              }),
            }),
          )),
          (a[43] = y.fullHeight),
          (a[44] = y.fullWidth),
          (a[45] = v),
          (a[46] = p),
          (a[47] = i.onImgZoomIn),
          (a[48] = W),
          (a[49] = V),
          (a[50] = H))
        : (H = a[50]);
      var G;
      return (
        a[51] !== F || a[52] !== H
          ? ((G = m.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              justify: "center",
              xstyle: h.container,
              children: [H, F],
            })),
            (a[51] = F),
            (a[52] = H),
            (a[53] = G))
          : (G = a[53]),
        G
      );
    }
    function C() {
      return m.jsx(r("WAWebStickerLikeMsgPlaceholder.react"), { size: g });
    }
    ((C.displayName = C.name + " [from " + i.id + "]"), (l.default = y));
  },
  226,
);
