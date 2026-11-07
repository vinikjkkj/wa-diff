__d(
  "WAWebContactCell",
  [
    "WAWebBotUtils",
    "WAWebChatStatus",
    "WAWebChatTextStatusWrapper",
    "WAWebContactGetters",
    "WAWebContactImage.react",
    "WAWebMobilePlatforms",
    "WAWebName.react",
    "WAWebTextStatusGatingUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = s.jsx(o("WAWebName.react").Name, {
          contact: e,
          showBusinessCheckmark: o(
            "WAWebContactGetters",
          ).getShowBusinessCheckmarkAsPrimary(e),
          showLabelIcon: o("WAWebMobilePlatforms").isSMB(),
          titlify: !0,
          ellipsify: !0,
          you: !0,
        }),
        n = null;
      o("WAWebBotUtils").isMetaAiBot(e.id)
        ? (n = s.jsx(o("WAWebChatStatus").MetaAiSubtitle, {}))
        : e.id.isRegularUser() &&
          o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled() &&
          (n = s.jsx(o("WAWebChatTextStatusWrapper").TextStatus, {
            contactId: e.id,
            waitIdle: !0,
          }));
      var a = s.jsx(r("WAWebContactImage.react"), { contact: e, size: 40 });
      return { primary: t, secondary: n, detailLeft: a };
    }
    l.getContactCellContent = u;
  },
  98,
);
