__d(
  "WAWebMultiVcardModal.react",
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
        n = e.usernames,
        a = e.vcards;
      return u.jsx(o("WAWebModal.react").Modal, {
        type: o("WAWebModal.react").ModalTheme.Box,
        children: u.jsxs(r("WAWebDrawer.react"), {
          tsNavigationData: {
            surface: "unknown",
            viewName: "multi-contact-viewer",
          },
          children: [
            u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              title: s._(
                /*BTDS*/ '_j{"*":"{count} contacts","_1":"1 contact"}',
                [s._plural(a.length, "count")],
              ),
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
              onCancel: d,
            }),
            u.jsx(r("WAWebDrawerBody.react"), {
              children: u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
                children: u.jsx("div", {
                  className: "x889kno",
                  children: a.map(function (e, a) {
                    if (!e) return null;
                    var i = o("WAWebVcardParsingUtils").vcardLidWid(e),
                      l = i && n ? n.get(i.toString()) : null;
                    return u.jsx(
                      "div",
                      {
                        className: "x1n2onr6 xyorhqc x1280gxy x1bnvlk4",
                        children: u.jsx(r("WAWebVcardModalDetails.react"), {
                          parsedVcard: e,
                          thumbnail: o("WAWebVcardParsingUtils").vcardThumbnail(
                            e,
                          ),
                          onSaveContact: t,
                          username: l,
                        }),
                      },
                      a,
                    );
                  }),
                }),
              }),
            }),
          ],
        }),
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
