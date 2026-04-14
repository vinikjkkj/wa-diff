__d(
  "WAWebViewOnceNux.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebText.react",
    "WAWebWdsIllViewOncePhotoIcon.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        graphic: {
          marginBottom: "xod5an3",
          paddingTop: "x1h678fw",
          paddingInlineEnd: "xcldk2z",
          paddingBottom: "xv6tirj",
          paddingInlineStart: "x1phvje8",
          $$css: !0,
        },
      };
    function d(e) {
      var t = e.onOkClick;
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: {
          surface: "unknown",
          viewName: "view-once-nux-media",
        },
        onOK: t,
        cancelText: s._(/*BTDS*/ "Learn more"),
        onCancel: m,
        children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
          children: [
            u.jsx(r("WAWebFlexItem.react"), {
              xstyle: c.graphic,
              align: "center",
              children: u.jsx(
                o("WAWebWdsIllViewOncePhotoIcon.react").WdsIllViewOncePhotoIcon,
                { width: 195 },
              ),
            }),
            u.jsx(o("WAWebText.react").WAWebTextLarge, {
              children: e.isPhoto
                ? s._(/*BTDS*/ "This photo is set to view once")
                : s._(/*BTDS*/ "This video is set to view once"),
            }),
            u.jsx(o("WAWebText.react").WAWebTextMuted, {
              children: e.isPhoto
                ? s._(
                    /*BTDS*/ "For more privacy, this photo will disappear after you close it.",
                  )
                : s._(
                    /*BTDS*/ "For more privacy, this video will disappear after you close it.",
                  ),
            }),
          ],
        }),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m() {
      o("WAWebExternalLink.react").openExternalLink(
        o("WAWebFaqUrl").getViewOnceFaqUrl(),
      );
    }
    l.default = d;
  },
  226,
);
