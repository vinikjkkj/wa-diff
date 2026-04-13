__d(
  "WAWebBizAdCreationSelectMediaButton.react",
  [
    "fbt",
    "WAWebBizAdCreationLoggerContext",
    "WAWebBizAdCreationMediaValidationUtils",
    "WAWebBizAdCreationStage1WAUploadUtils",
    "WAWebBizAdLogger",
    "WAWebFilePicker.react",
    "WAWebPlusIcon.react",
    "WDSButton.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useContext,
      p = c.useRef,
      _ = c.useState;
    function f(e) {
      var t = o("react-compiler-runtime").c(19),
        n = e.adAccountID,
        a = e.mediaCollection,
        i = e.onMediaUploadComplete,
        l = e.onMediaUploadFailure,
        c = e.onSelectedMediaSave,
        d = e.setMediaUploadFailed,
        f = p(null),
        g = _(!1),
        h = g[0],
        y = g[1],
        C = m(r("WAWebBizAdCreationLoggerContext")),
        b;
      t[0] !== n || t[1] !== C || t[2] !== d
        ? ((b = function () {
            var e;
            (C != null &&
              r("WAWebBizAdLogger").logCritical({
                event: "new_carousel_add_media_click",
                loggerContext: C,
                adAccountID: n,
              }),
              d(!1),
              (e = f.current) == null || e.open());
          }),
          (t[0] = n),
          (t[1] = C),
          (t[2] = d),
          (t[3] = b))
        : (b = t[3]);
      var v = b,
        S;
      t[4] !== a || t[5] !== i || t[6] !== l || t[7] !== c
        ? ((S = function (t) {
            o("WAWebBizAdCreationStage1WAUploadUtils").handleMediaPick(
              t,
              a,
              i,
              l,
              c,
              y,
            );
          }),
          (t[4] = a),
          (t[5] = i),
          (t[6] = l),
          (t[7] = c),
          (t[8] = S))
        : (S = t[8]);
      var R = S,
        L;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = {
            className:
              "x6s0dn4 x9f619 x78zum5 x2lah0s x7kvr32 xl56j7k x1lzt3e6",
          }),
          (t[9] = L))
        : (L = t[9]);
      var E;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = s._(/*BTDS*/ "Add file")), (t[10] = E))
        : (E = t[10]);
      var k;
      t[11] !== h || t[12] !== v
        ? ((k = u.jsx(
            "div",
            babelHelpers.extends({}, L, {
              children: u.jsx(
                r("WDSButton.react"),
                {
                  Icon: o("WAWebPlusIcon.react").PlusIcon,
                  variant: "tonal",
                  size: "large",
                  type: "default",
                  onPress: v,
                  "aria-label": E,
                  loading: h,
                },
                "media-more",
              ),
            }),
          )),
          (t[11] = h),
          (t[12] = v),
          (t[13] = k))
        : (k = t[13]);
      var I;
      t[14] !== R
        ? ((I = u.jsx(r("WAWebFilePicker.react"), {
            ref: f,
            mimes: o("WAWebBizAdCreationMediaValidationUtils")
              .ALLOWED_MIME_TYPES,
            onChange: R,
            multiple: !0,
          })),
          (t[14] = R),
          (t[15] = I))
        : (I = t[15]);
      var T;
      return (
        t[16] !== k || t[17] !== I
          ? ((T = u.jsxs(u.Fragment, { children: [k, I] })),
            (t[16] = k),
            (t[17] = I),
            (t[18] = T))
          : (T = t[18]),
        T
      );
    }
    l.default = f;
  },
  226,
);
