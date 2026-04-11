__d(
  "WAWebUsernameChangedModal.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebDrawerManager",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "WAWebUsernameManagementDrawer.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { content: { marginTop: "xevwqry", $$css: !0 } };
    function d(e) {
      var t = e.contactId,
        n = e.username,
        a = u.jsx(r("WDSText.react"), {
          type: "Headline1",
          colorName: "contentDefault",
          textAlign: "center",
          children: s._(
            /*BTDS*/ "You changed your username to \u0040{username}",
            [s._param("username", n)],
          ),
        }),
        i = s._(
          /*BTDS*/ "People who saved you as a contact or have your username will see this update.",
        ),
        l = r("WAWebFbtCommon")("Continue"),
        d = function () {
          (o("WAWebModalManager").ModalManager.close(),
            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
              u.jsx(r("WAWebUsernameManagementDrawer.react"), {
                contactId: t,
                username: n,
              }),
            ));
        };
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: { surface: "unknown", viewName: "username-changed" },
        title: a,
        okButtonType: "secondary",
        onOK: d,
        okText: l,
        children: u.jsx(r("WDSText.react"), {
          type: "Body2",
          textAlign: "start",
          colorName: "contentDeemphasized",
          xstyle: c.content,
          children: i,
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
