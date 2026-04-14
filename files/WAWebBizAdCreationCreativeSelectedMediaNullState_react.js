__d(
  "WAWebBizAdCreationCreativeSelectedMediaNullState.react",
  [
    "fbt",
    "WAWebBizAdCreationLoggerContext",
    "WAWebBizAdCreationMediaValidationUtils",
    "WAWebBizAdCreationStage1WAUploadUtils",
    "WAWebBizAdLogger",
    "WAWebFilePicker.react",
    "WDSButton.react",
    "WDSColorStyles.stylex",
    "WDSIconIcAddPhotoAlternate.react",
    "WDSText.react",
    "react",
    "stylex",
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
        container: {
          alignItems: "x6s0dn4",
          borderStartStartRadius: "x6nvzda",
          borderStartEndRadius: "x4i4b9w",
          borderEndEndRadius: "xhl9efl",
          borderEndStartRadius: "xj65ea0",
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          rowGap: "x1qvou4u",
          columnGap: "x1s70e7g",
          justifyContent: "x1nhvcw1",
          paddingTop: "xl7twdi",
          paddingBottom: "xvg22vi",
          paddingInlineStart: "x1iw51ew",
          paddingInlineEnd: "xde1mab",
          $$css: !0,
        },
      };
    function h(t) {
      var n = t.adAccountID,
        a = t.mediaCollection,
        i = t.onMediaUploadComplete,
        l = t.onMediaUploadFailure,
        u = t.onSelectedMediaSave,
        d = t.setMediaUploadFailed,
        h = _(null),
        y = f(!1),
        C = y[0],
        b = y[1],
        v = p(r("WAWebBizAdCreationLoggerContext")),
        S = m(
          function (e) {
            o("WAWebBizAdCreationStage1WAUploadUtils").handleMediaPick(
              e,
              a,
              i,
              l,
              u,
              b,
            );
          },
          [a, i, l, u],
        ),
        R = function () {
          var e;
          (v != null &&
            r("WAWebBizAdLogger").logCritical({
              event: "open_select_media_dialog",
              loggerContext: v,
              adAccountID: n,
            }),
            d(!1),
            (e = h.current) == null || e.open());
        };
      return c.jsxs(c.Fragment, {
        children: [
          c.jsxs(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                g.container,
                o("WDSColorStyles.stylex").WDSBackgroundColorStyles
                  .backgroundWashInset,
              ),
              {
                children: [
                  c.jsx(r("WDSButton.react"), {
                    Icon: r("WDSIconIcAddPhotoAlternate.react"),
                    label: s._(/*BTDS*/ "Add media"),
                    onPress: R,
                    size: "small",
                    type: "default",
                    loading: C,
                  }),
                  c.jsx(r("WDSText.react"), {
                    type: "Body2",
                    colorName: "contentDeemphasized",
                    children: s._(
                      /*BTDS*/ "Select up to 10 photos or 1 video for your ad.",
                    ),
                  }),
                ],
              },
            ),
          ),
          c.jsx(r("WAWebFilePicker.react"), {
            ref: h,
            mimes: o("WAWebBizAdCreationMediaValidationUtils")
              .ALLOWED_MIME_TYPES,
            onChange: S,
            multiple: !0,
          }),
        ],
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);
