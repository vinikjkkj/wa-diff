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
      var t = e.adAccountID,
        n = e.mediaCollection,
        a = e.onMediaUploadComplete,
        i = e.onMediaUploadFailure,
        l = e.onSelectedMediaSave,
        c = e.setMediaUploadFailed,
        g = _(null),
        h = f(!1),
        y = h[0],
        C = h[1],
        b = m(r("WAWebBizAdCreationLoggerContext")),
        v = r("justknobx")._("3528"),
        S = p(
          function () {
            return v
              ? o(
                  "WAWebBizAdCreationMediaValidationUtils",
                ).getAllowedMimeTypesForCollection(n)
              : o("WAWebBizAdCreationMediaValidationUtils").ALLOWED_MIME_TYPES;
          },
          [v, n],
        ),
        R = function () {
          var e;
          (b != null &&
            r("WAWebBizAdLogger").logCritical({
              event: "new_carousel_add_media_click",
              loggerContext: b,
              adAccountID: t,
            }),
            c(!1),
            (e = g.current) == null || e.open());
        },
        L = d(
          function (e) {
            o("WAWebBizAdCreationStage1WAUploadUtils").handleMediaPick(
              e,
              n,
              a,
              i,
              l,
              C,
            );
          },
          [n, a, i, l],
        );
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx("div", {
            className:
              "x6s0dn4 x9f619 x78zum5 x2lah0s x7kvr32 xl56j7k x1lzt3e6",
            children: u.jsx(
              r("WDSButton.react"),
              {
                Icon: o("WAWebPlusIcon.react").PlusIcon,
                variant: "tonal",
                size: "large",
                type: "default",
                onPress: R,
                "aria-label": s._(/*BTDS*/ "Add file"),
                loading: y,
              },
              "media-more",
            ),
          }),
          u.jsx(r("WAWebFilePicker.react"), {
            ref: g,
            mimes: S,
            onChange: L,
            multiple: !0,
          }),
        ],
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
