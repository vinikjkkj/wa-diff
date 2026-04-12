__d(
  "WAWebContactViewer.react",
  [
    "fbt",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebVcardModalDetails.react",
    "WAWebVcardParsingUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.onSaveContact,
        n = e.username,
        a = e.vcard;
      return u.jsx(o("WAWebModal.react").Modal, {
        type: o("WAWebModal.react").ModalTheme.Box,
        tsNavigationData: {
          surface: "contact-viewer",
          viewName: "contact-viewer",
        },
        children: u.jsxs(
          r("WAWebDrawer.react"),
          {
            disableNavigationLogging: !0,
            children: [
              u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                title: s._(/*BTDS*/ "View contact"),
                type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
                onCancel: d,
              }),
              u.jsx(r("WAWebDrawerBody.react"), {
                children: u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
                  children: u.jsx(r("WAWebVcardModalDetails.react"), {
                    parsedVcard: a,
                    thumbnail: o("WAWebVcardParsingUtils").vcardThumbnail(a),
                    onSaveContact: t,
                    username: n,
                  }),
                }),
              }),
            ],
          },
          "vcard-modal",
        ),
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d() {
      o("WAWebModalManager").ModalManager.close();
    }
    l.default = c;
  },
  226,
);
