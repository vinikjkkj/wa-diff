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
        i = t.adAccountID,
        l = t.children,
        u = t.currentLocallyUploadedMediaCollection,
        d = f(!1),
        h = d[0],
        y = d[1],
        C = f(!1),
        b = C[0],
        v = C[1],
        S = _(0),
        R = p(r("WAWebBizAdCreationConfigContext")),
        L = (a = R == null ? void 0 : R.pageID) != null ? a : "",
        E = r("useWAWebBizAdCreationSpecDispatcherContext")([
          r("getWAWebBizAdCreationCreativeCarouselReducer"),
          r("waWebBizAdCreationMediaCollectionReducer"),
        ]),
        k = m(
          function () {
            E({
              type: "media_collection_reducer.revert_to_last_successfully_uploaded_media_collection",
            });
          },
          [E],
        ),
        I = m(
          function (e) {
            E({
              mediaCollection: e,
              type: "media_collection_reducer.update_media_collection",
            });
          },
          [E],
        ),
        T = m(
          function (t) {
            (e || (e = n("Promise")))
              .all([
                r("WAWebBizAdCreationLWIMediaUpload")(t, L, i),
                r("WAWebBizAdCreationLinkWAMediaToStatus")(t),
              ])
              .then(function (e) {
                var t = e[0];
                E({
                  carouselCardsData: t,
                  type: "creative_carousel_reducer.set_carousel_cards",
                });
              })
              .catch(function (e) {
                throw (
                  k(),
                  r("err")(
                    "Media upload mutation failure: " +
                      e +
                      ". Please check LWI media upload and WA Media to Status link.",
                  )
                );
              });
          },
          [i, E, k, L],
        ),
        D = m(
          function (e) {
            (e.preventDefault(), e.stopPropagation(), (S.current = 0), y(!1));
            var t = new (r("WAWebDataTransfer"))(e.dataTransfer);
            t.hasType("Files") &&
              o("WAWebBizAdCreationStage1WAUploadUtils").handleFileDrop(
                e,
                u,
                T,
                k,
                I,
                v,
              );
          },
          [u, T, k, I],
        ),
        x = m(function (e) {
          (e.preventDefault(), e.stopPropagation());
        }, []),
        $ = m(function (e) {
          (e.preventDefault(), e.stopPropagation(), (S.current += 1));
          var t = new (r("WAWebDataTransfer"))(e.dataTransfer);
          t.hasType("Files") && y(!0);
        }, []),
        P = m(function (e) {
          (e.preventDefault(),
            e.stopPropagation(),
            (S.current -= 1),
            S.current === 0 && y(!1));
        }, []);
      return c.jsxs("div", {
        onDragEnter: $,
        onDragOver: x,
        onDragLeave: P,
        onDrop: D,
        role: "region",
        "aria-label": s._(/*BTDS*/ "Drop zone for media files"),
        children: [
          l,
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
            }),
        ],
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    var y = r("withWAWebBizAdCreationSpecContext")(h, function (e) {
      return {
        currentLocallyUploadedMediaCollection:
          e.currentLocallyUploadedMediaCollection,
        adAccountID: e.adAccountData.legacyAccountID,
      };
    });
    l.default = y;
  },
  226,
);
