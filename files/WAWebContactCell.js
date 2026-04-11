__d(
  "WAWebContactCell",
  [
    "WAWebBizGatingUtils",
    "WAWebChatStatus",
    "WAWebChatTextStatusWrapper",
    "WAWebContactGetters",
    "WAWebContactImage.react",
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
          showLabelIcon: o("WAWebBizGatingUtils").canDisplayLabel(),
          titlify: !0,
          ellipsify: !0,
          you: !0,
        }),
        n;
      o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()
        ? (n = s.jsx(o("WAWebChatTextStatusWrapper").TextStatus, {
            contactId: e.id,
          }))
        : (n = s.jsx(o("WAWebChatStatus").StatusWrapper, { id: e.id }));
      var a = s.jsx(r("WAWebContactImage.react"), { contact: e, size: 40 });
      return { primary: t, secondary: n, detailLeft: a };
    }
    l.getContactCellContent = u;
  },
  98,
);
