__d(
  "WAWebForwardMediaWithCaptionPopupNux.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebText_DONOTUSE.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        featureDescriptionParagraph: { textAlign: "x2b8uid", $$css: !0 },
        marginTop16: { marginTop: "x98l61r", $$css: !0 },
        marginBottom32: { marginBottom: "xg6s713", $$css: !0 },
      };
    function d(e) {
      var t = e.onOk,
        n = function () {
          t();
        },
        a = s._(
          /*BTDS*/ "Media and captions are now forwarded together. You can always remove the caption before you forward.",
        );
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: {
          surface: "unknown",
          viewName: "forward-media-with-caption-nux",
        },
        okText: r("WAWebFbtCommon")("OK"),
        onOK: n,
        type: o("WAWebModal.react").ModalTheme.ForwardMediaWithCaption,
        children: u.jsx(o("WAWebFlex.react").FlexRow, {
          align: "center",
          justify: "center",
          children: u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
            xstyle: [
              c.featureDescriptionParagraph,
              c.marginTop16,
              c.marginBottom32,
            ],
            children: a,
          }),
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
