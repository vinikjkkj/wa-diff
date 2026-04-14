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
      var t = e.adAccountID,
        n = e.mediaCollection,
        a = e.onMediaUploadComplete,
        i = e.onMediaUploadFailure,
        l = e.onSelectedMediaSave,
        c = e.setMediaUploadFailed,
        f = p(null),
        g = _(!1),
        h = g[0],
        y = g[1],
        C = m(r("WAWebBizAdCreationLoggerContext")),
        b = function () {
          var e;
          (C != null &&
            r("WAWebBizAdLogger").logCritical({
              event: "new_carousel_add_media_click",
              loggerContext: C,
              adAccountID: t,
            }),
            c(!1),
            (e = f.current) == null || e.open());
        },
        v = d(
          function (e) {
            o("WAWebBizAdCreationStage1WAUploadUtils").handleMediaPick(
              e,
              n,
              a,
              i,
              l,
              y,
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
                onPress: b,
                "aria-label": s._(/*BTDS*/ "Add file"),
                loading: h,
              },
              "media-more",
            ),
          }),
          u.jsx(r("WAWebFilePicker.react"), {
            ref: f,
            mimes: o("WAWebBizAdCreationMediaValidationUtils")
              .ALLOWED_MIME_TYPES,
            onChange: v,
            multiple: !0,
          }),
        ],
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
