__d(
  "WAWebOpenHatchSpace",
  [
    "fbt",
    "WAWebDrawerManager",
    "WAWebExternalLink.react",
    "WAWebHatchFrontendGating",
    "WAWebHatchSpaceViewerDrawerLoadable",
    "WAWebToast.react",
    "WAWebToastManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e, t) {
      (t === void 0 && (t = o("WAWebDrawerManager").closeDrawerRight),
        e.kind === "url"
          ? o("WAWebExternalLink.react").openExternalLink(e.url, {
              noApiCmdHandling: !0,
            })
          : e.kind === "host" &&
              o("WAWebHatchFrontendGating").isHatchSpaceEnabled()
            ? o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                u.jsx(
                  o("WAWebHatchSpaceViewerDrawerLoadable")
                    .WAWebHatchSpaceViewerDrawerLoadable,
                  {
                    onBack: t,
                    onClose: o("WAWebDrawerManager").closeDrawerRight,
                    slug: e.slug,
                    title: e.title,
                  },
                ),
              )
            : e.kind !== "none" &&
              o("WAWebToastManager").ToastManager.open(
                u.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "Can't open this yet"),
                }),
              ));
    }
    l.openHatchSpace = c;
  },
  226,
);
