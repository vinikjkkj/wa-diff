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
    "justknobx",
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
      p = c.useMemo,
      _ = c.useRef,
      f = c.useState;
    function g(e) {
      var t = o("react-compiler-runtime").c(23),
        n = e.adAccountID,
        a = e.mediaCollection,
        i = e.onMediaUploadComplete,
        l = e.onMediaUploadFailure,
        c = e.onSelectedMediaSave,
        d = e.setMediaUploadFailed,
        p = _(null),
        g = f(!1),
        h = g[0],
        y = g[1],
        C = m(r("WAWebBizAdCreationLoggerContext")),
        b;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = r("justknobx")._("3528")), (t[0] = b))
        : (b = t[0]);
      var v = b,
        S;
      t[1] !== a
        ? ((S = v
            ? o(
                "WAWebBizAdCreationMediaValidationUtils",
              ).getAllowedMimeTypesForCollection(a)
            : o("WAWebBizAdCreationMediaValidationUtils").ALLOWED_MIME_TYPES),
          (t[1] = a),
          (t[2] = S))
        : (S = t[2]);
      var R = S,
        L;
      t[3] !== n || t[4] !== C || t[5] !== d
        ? ((L = function () {
            var e;
            (C != null &&
              r("WAWebBizAdLogger").logCritical({
                event: "new_carousel_add_media_click",
                loggerContext: C,
                adAccountID: n,
              }),
              d(!1),
              (e = p.current) == null || e.open());
          }),
          (t[3] = n),
          (t[4] = C),
          (t[5] = d),
          (t[6] = L))
        : (L = t[6]);
      var E = L,
        k;
      t[7] !== a || t[8] !== i || t[9] !== l || t[10] !== c
        ? ((k = function (t) {
            o("WAWebBizAdCreationStage1WAUploadUtils").handleMediaPick(
              t,
              a,
              i,
              l,
              c,
              y,
            );
          }),
          (t[7] = a),
          (t[8] = i),
          (t[9] = l),
          (t[10] = c),
          (t[11] = k))
        : (k = t[11]);
      var I = k,
        T;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = {
            className:
              "x6s0dn4 x9f619 x78zum5 x2lah0s x7kvr32 xl56j7k x1lzt3e6",
          }),
          (t[12] = T))
        : (T = t[12]);
      var D;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = s._(/*BTDS*/ "Add file")), (t[13] = D))
        : (D = t[13]);
      var x;
      t[14] !== h || t[15] !== E
        ? ((x = u.jsx(
            "div",
            babelHelpers.extends({}, T, {
              children: u.jsx(
                r("WDSButton.react"),
                {
                  Icon: o("WAWebPlusIcon.react").PlusIcon,
                  variant: "tonal",
                  size: "large",
                  type: "default",
                  onPress: E,
                  "aria-label": D,
                  loading: h,
                },
                "media-more",
              ),
            }),
          )),
          (t[14] = h),
          (t[15] = E),
          (t[16] = x))
        : (x = t[16]);
      var $;
      t[17] !== R || t[18] !== I
        ? (($ = u.jsx(r("WAWebFilePicker.react"), {
            ref: p,
            mimes: R,
            onChange: I,
            multiple: !0,
          })),
          (t[17] = R),
          (t[18] = I),
          (t[19] = $))
        : ($ = t[19]);
      var P;
      return (
        t[20] !== x || t[21] !== $
          ? ((P = u.jsxs(u.Fragment, { children: [x, $] })),
            (t[20] = x),
            (t[21] = $),
            (t[22] = P))
          : (P = t[22]),
        P
      );
    }
    l.default = g;
  },
  226,
);
