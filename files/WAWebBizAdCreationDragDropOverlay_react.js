__d(
  "WAWebBizAdCreationDragDropOverlay.react",
  [
    "fbt",
    "Promise",
    "WAWebBizAdCreationConfigContext",
    "WAWebBizAdCreationLWIMediaUpload",
    "WAWebBizAdCreationLinkWAMediaToStatus",
    "WAWebBizAdCreationStage1WAUploadUtils",
    "WAWebDataTransfer",
    "WAWebFlex.react",
    "WDSText.react",
    "err",
    "getWAWebBizAdCreationCreativeCarouselReducer",
    "react",
    "react-compiler-runtime",
    "useWAWebBizAdCreationSpecDispatcherContext",
    "waWebBizAdCreationMediaCollectionReducer",
    "withWAWebBizAdCreationSpecContext",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useContext,
      _ = d.useRef,
      f = d.useState,
      g = {
        overlayInner: {
          boxSizing: "x9f619",
          width: "xh8yej3",
          height: "x5yr21d",
          borderTopWidth: "xmn4e3e",
          borderInlineEndWidth: "x1if355w",
          borderBottomWidth: "x2x41l1",
          borderInlineStartWidth: "xct1zlm",
          borderTopStyle: "xlya59e",
          borderInlineEndStyle: "xwy3id5",
          borderBottomStyle: "xpvcztv",
          borderInlineStartStyle: "x11nt7xy",
          borderTopColor: "xx42vgk",
          borderInlineEndColor: "xbogo7e",
          borderBottomColor: "x120ee7l",
          borderInlineStartColor: "x1vb5itz",
          borderStartStartRadius: "x6nvzda",
          borderStartEndRadius: "x4i4b9w",
          borderEndEndRadius: "xhl9efl",
          borderEndStartRadius: "xj65ea0",
          backgroundColor: "x6egj2d",
          rowGap: "x129bwdz",
          columnGap: "x1trrmfo",
          $$css: !0,
        },
      };
    function h(t) {
      var a,
        i = o("react-compiler-runtime").c(24),
        l = t.adAccountID,
        u = t.children,
        d = t.currentLocallyUploadedMediaCollection,
        m = f(!1),
        h = m[0],
        C = m[1],
        b = f(!1),
        v = b[1],
        S = _(0),
        R = p(r("WAWebBizAdCreationConfigContext")),
        L = (a = R == null ? void 0 : R.pageID) != null ? a : "",
        E;
      i[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = [
            r("getWAWebBizAdCreationCreativeCarouselReducer"),
            r("waWebBizAdCreationMediaCollectionReducer"),
          ]),
          (i[0] = E))
        : (E = i[0]);
      var k = r("useWAWebBizAdCreationSpecDispatcherContext")(E),
        I;
      i[1] !== k
        ? ((I = function () {
            k({
              type: "media_collection_reducer.revert_to_last_successfully_uploaded_media_collection",
            });
          }),
          (i[1] = k),
          (i[2] = I))
        : (I = i[2]);
      var T = I,
        D;
      i[3] !== k
        ? ((D = function (t) {
            k({
              mediaCollection: t,
              type: "media_collection_reducer.update_media_collection",
            });
          }),
          (i[3] = k),
          (i[4] = D))
        : (D = i[4]);
      var x = D,
        $;
      i[5] !== l || i[6] !== k || i[7] !== T || i[8] !== L
        ? (($ = function (o) {
            (e || (e = n("Promise")))
              .all([
                r("WAWebBizAdCreationLWIMediaUpload")(o, L, l),
                r("WAWebBizAdCreationLinkWAMediaToStatus")(o),
              ])
              .then(function (e) {
                var t = e[0];
                k({
                  carouselCardsData: t,
                  type: "creative_carousel_reducer.set_carousel_cards",
                });
              })
              .catch(function (e) {
                throw (
                  T(),
                  r("err")(
                    "Media upload mutation failure: " +
                      e +
                      ". Please check LWI media upload and WA Media to Status link.",
                  )
                );
              });
          }),
          (i[5] = l),
          (i[6] = k),
          (i[7] = T),
          (i[8] = L),
          (i[9] = $))
        : ($ = i[9]);
      var P = $,
        N;
      i[10] !== d || i[11] !== P || i[12] !== T || i[13] !== x
        ? ((N = function (t) {
            (t.preventDefault(), t.stopPropagation(), (S.current = 0), C(!1));
            var e = new (r("WAWebDataTransfer"))(t.dataTransfer);
            e.hasType("Files") &&
              o("WAWebBizAdCreationStage1WAUploadUtils").handleFileDrop(
                t,
                d,
                P,
                T,
                x,
                v,
              );
          }),
          (i[10] = d),
          (i[11] = P),
          (i[12] = T),
          (i[13] = x),
          (i[14] = N))
        : (N = i[14]);
      var M = N,
        w = y,
        A;
      i[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = function (t) {
            (t.preventDefault(),
              t.stopPropagation(),
              (S.current = S.current + 1));
            var e = new (r("WAWebDataTransfer"))(t.dataTransfer);
            e.hasType("Files") && C(!0);
          }),
          (i[15] = A))
        : (A = i[15]);
      var F = A,
        O;
      i[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = function (t) {
            (t.preventDefault(),
              t.stopPropagation(),
              (S.current = S.current - 1),
              S.current === 0 && C(!1));
          }),
          (i[16] = O))
        : (O = i[16]);
      var B = O,
        W;
      i[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = s._(/*BTDS*/ "Drop zone for media files")), (i[17] = W))
        : (W = i[17]);
      var q;
      i[18] !== h
        ? ((q =
            h &&
            c.jsx("div", {
              className:
                "xixxii4 x1bkdxzg x13vifvy x1o0tod xh8yej3 x5yr21d x1280gxy x1sk1jro x1evaxtz x1ci70gm x1m4z3lf x9f619",
              children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
                align: "center",
                justify: "center",
                xstyle: g.overlayInner,
                children: [
                  c.jsx(r("WDSText.react"), {
                    type: "Headline1",
                    colorName: "contentDefault",
                    children: s._(/*BTDS*/ "Drag media here"),
                  }),
                  c.jsx(r("WDSText.react"), {
                    type: "Body2",
                    colorName: "contentDeemphasized",
                    children: s._(/*BTDS*/ "Up to 10 images or 1 video"),
                  }),
                ],
              }),
            })),
          (i[18] = h),
          (i[19] = q))
        : (q = i[19]);
      var U;
      return (
        i[20] !== u || i[21] !== M || i[22] !== q
          ? ((U = c.jsxs("div", {
              onDragEnter: F,
              onDragOver: w,
              onDragLeave: B,
              onDrop: M,
              role: "region",
              "aria-label": W,
              children: [u, q],
            })),
            (i[20] = u),
            (i[21] = M),
            (i[22] = q),
            (i[23] = U))
          : (U = i[23]),
        U
      );
    }
    function y(e) {
      (e.preventDefault(), e.stopPropagation());
    }
    var C = r("withWAWebBizAdCreationSpecContext")(h, function (e) {
      return {
        currentLocallyUploadedMediaCollection:
          e.currentLocallyUploadedMediaCollection,
        adAccountID: e.adAccountData.legacyAccountID,
      };
    });
    l.default = C;
  },
  226,
);
