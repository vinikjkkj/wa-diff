__d(
  "WAWebBizAdCreationCreativeSection.react",
  [
    "fbt",
    "WAWebBizAdCard.react",
    "WAWebBizAdCreationCreativeDescriptionTextField.react",
    "WAWebBizAdCreationCreativeInfoModal.react",
    "WAWebBizAdCreationLoggerContext",
    "WAWebBizAdCreationSectionNotices.react",
    "WAWebBizAdCreationSelectedMediaFilmstrip.react",
    "WAWebBizAdCreationValidateSpecContext",
    "WAWebBizAdLogger",
    "WAWebFlex.react",
    "WDSButton.react",
    "WDSText.react",
    "getWAWebBizAdCreationCreativeCarouselReducer",
    "react",
    "useWAWebBizAdCreationSpecDispatcherContext",
    "useWAWebForceUpdate",
    "useWAWebInfoButtonUtil",
    "useWAWebListener",
    "withWAWebBizAdCreationSpecContext",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useContext,
      p = c.useEffect,
      _ = c.useRef,
      f = c.useState;
    function g(e) {
      "use no forget";
      var t = e.adAccountID,
        n = e.currentLocallyUploadedMediaCollection,
        a = e.lastSuccessfullyUploadedMediaCollection,
        i = f(!1),
        l = i[0],
        c = i[1],
        g = f(new Set()),
        h = g[0],
        y = g[1],
        C = h.size > 0,
        b = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        v = m(r("WAWebBizAdCreationValidateSpecContext")),
        S = m(r("WAWebBizAdCreationLoggerContext")),
        R = _(null);
      p(
        function () {
          if (S != null) {
            var e = n.getPreviewableMedias().length,
              o = R.current,
              a = o == null,
              i = a || o !== e;
            i &&
              ((R.current = e),
              r("WAWebBizAdLogger").logCritical({
                event: "creative_section_impression",
                loggerContext: S,
                adAccountID: t,
                extra: { total_number_media_selected: e, initial_load: a },
              }));
          }
        },
        [t, n, S],
      );
      var L = v == null ? void 0 : v.setSpecElementClientSideNotices;
      o("useWAWebListener").useListener(n, ["remove", "reset"], b);
      var E = r("useWAWebBizAdCreationSpecDispatcherContext")([
          r("getWAWebBizAdCreationCreativeCarouselReducer"),
        ]),
        k = d(
          function () {
            (S != null &&
              r("WAWebBizAdLogger").log({
                event: "creative_clear_all_click",
                loggerContext: S,
                adAccountID: t,
              }),
              n.delete(),
              a.delete(),
              E({ type: "creative_carousel_reducer.clear_carousel_cards" }),
              E({
                type: "creative_carousel_reducer.update_body_text",
                bodyText: "",
              }));
          },
          [t, n, E, a, S],
        ),
        I = n.getPreviewableMedias();
      p(
        function () {
          L != null &&
            (I.length === 0
              ? L("CREATIVE_IMAGE", [
                  {
                    severity: "BLOCKING_TIP",
                    title: s._(/*BTDS*/ "Add media"),
                  },
                ])
              : C
                ? L("CREATIVE_IMAGE", [
                    {
                      severity: "BLOCKING_TIP",
                      title: s._(/*BTDS*/ "Uploading media..."),
                    },
                  ])
                : L("CREATIVE_IMAGE", []));
        },
        [I.length, C, L],
      );
      var T = r("useWAWebInfoButtonUtil")(
          r("WAWebBizAdCreationCreativeInfoModal.react"),
        ),
        D =
          I.length > 0
            ? u.jsx(r("WDSButton.react"), {
                label: s._(/*BTDS*/ "Clear all"),
                onPress: k,
                size: "medium",
                variant: "borderless",
              })
            : null;
      return u.jsx(r("WAWebBizAdCard.react"), {
        header: s._(/*BTDS*/ "Ad creative"),
        subtitle: s._(
          /*BTDS*/ "Select multiple photos to create a carousel ad.",
        ),
        titleAccessory: T,
        ctaButton: D,
        children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
          gap: 16,
          align: "stretch",
          children: [
            u.jsx(r("WAWebBizAdCreationSectionNotices.react"), {
              specElement: "CREATIVE",
            }),
            u.jsx(r("WAWebBizAdCreationSelectedMediaFilmstrip.react"), {
              adAccountID: t,
              uploadingMediaIds: h,
              mediaCollection: n,
              setMediaUploadFailed: c,
              setUploadingMediaIds: y,
            }),
            l === !0 &&
              u.jsx(r("WDSText.react"), {
                type: "Body3",
                colorName: "secondaryNegativeEmphasized",
                children: s._(/*BTDS*/ "Something went wrong uploading media"),
              }),
            u.jsx(
              r("WAWebBizAdCreationCreativeDescriptionTextField.react"),
              {},
            ),
          ],
        }),
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    var h = r("withWAWebBizAdCreationSpecContext")(g, function (e) {
      return {
        currentLocallyUploadedMediaCollection:
          e.currentLocallyUploadedMediaCollection,
        lastSuccessfullyUploadedMediaCollection:
          e.lastSuccessfullyUploadedMediaCollection,
        adAccountID: e.adAccountData.legacyAccountID,
      };
    });
    l.default = h;
  },
  226,
);
