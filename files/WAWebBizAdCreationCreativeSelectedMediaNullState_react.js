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
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(22),
        a = t.adAccountID,
        i = t.mediaCollection,
        l = t.onMediaUploadComplete,
        u = t.onMediaUploadFailure,
        d = t.onSelectedMediaSave,
        m = t.setMediaUploadFailed,
        h = _(null),
        y = f(!1),
        C = y[0],
        b = y[1],
        v = p(r("WAWebBizAdCreationLoggerContext")),
        S;
      n[0] !== i || n[1] !== l || n[2] !== u || n[3] !== d
        ? ((S = function (t) {
            o("WAWebBizAdCreationStage1WAUploadUtils").handleMediaPick(
              t,
              i,
              l,
              u,
              d,
              b,
            );
          }),
          (n[0] = i),
          (n[1] = l),
          (n[2] = u),
          (n[3] = d),
          (n[4] = S))
        : (S = n[4]);
      var R = S,
        L;
      n[5] !== a || n[6] !== v || n[7] !== m
        ? ((L = function () {
            var e;
            (v != null &&
              r("WAWebBizAdLogger").logCritical({
                event: "open_select_media_dialog",
                loggerContext: v,
                adAccountID: a,
              }),
              m(!1),
              (e = h.current) == null || e.open());
          }),
          (n[5] = a),
          (n[6] = v),
          (n[7] = m),
          (n[8] = L))
        : (L = n[8]);
      var E = L,
        k;
      n[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = (e || (e = r("stylex"))).props(
            g.container,
            o("WDSColorStyles.stylex").WDSBackgroundColorStyles
              .backgroundWashInset,
          )),
          (n[9] = k))
        : (k = n[9]);
      var I;
      n[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = s._(/*BTDS*/ "Add media")), (n[10] = I))
        : (I = n[10]);
      var T;
      n[11] !== C || n[12] !== E
        ? ((T = c.jsx(r("WDSButton.react"), {
            Icon: r("WDSIconIcAddPhotoAlternate.react"),
            label: I,
            onPress: E,
            size: "small",
            type: "default",
            loading: C,
          })),
          (n[11] = C),
          (n[12] = E),
          (n[13] = T))
        : (T = n[13]);
      var D;
      n[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = c.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDeemphasized",
            children: s._(
              /*BTDS*/ "Select up to 10 photos or 1 video for your ad.",
            ),
          })),
          (n[14] = D))
        : (D = n[14]);
      var x;
      n[15] !== T
        ? ((x = c.jsxs(
            "div",
            babelHelpers.extends({}, k, { children: [T, D] }),
          )),
          (n[15] = T),
          (n[16] = x))
        : (x = n[16]);
      var $;
      n[17] !== R
        ? (($ = c.jsx(r("WAWebFilePicker.react"), {
            ref: h,
            mimes: o("WAWebBizAdCreationMediaValidationUtils")
              .ALLOWED_MIME_TYPES,
            onChange: R,
            multiple: !0,
          })),
          (n[17] = R),
          (n[18] = $))
        : ($ = n[18]);
      var P;
      return (
        n[19] !== x || n[20] !== $
          ? ((P = c.jsxs(c.Fragment, { children: [x, $] })),
            (n[19] = x),
            (n[20] = $),
            (n[21] = P))
          : (P = n[21]),
        P
      );
    }
    l.default = h;
  },
  226,
);
