__d(
  "WAWebNewsletterWamoSubMessageTypePopup.react",
  [
    "WAWebDropdown.react",
    "WAWebL10N",
    "WAWebNewsletterWamoSubMessageTypeContextMenu.react",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "react",
    "useWAWebIsKeyboardUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.handleSelect,
        n = e.onDismiss,
        a = e.popupAnchorEl,
        i = r("useWAWebIsKeyboardUser")(),
        l = i.isKeyboardUser;
      if (a == null) return null;
      var u = {
        menu: s.jsx(r("WAWebNewsletterWamoSubMessageTypeContextMenu.react"), {
          onSelect: t,
        }),
        dirY: o("WAWebDropdown.react").DirY.TOP,
        dirX: r("WAWebL10N").isRTL()
          ? o("WAWebDropdown.react").DirX.RIGHT
          : o("WAWebDropdown.react").DirX.LEFT,
        type: o("WAWebDropdown.react").MenuType
          .NewsletterWamoSubMessageTypePopup,
        flipOnRTL: !0,
        testid: "newsletter-wamo-message-type-popup",
        anchor: a,
        autoFocus: l,
      };
      return s.jsx(o("WAWebUimUie.react").UIE, {
        displayName: "NewsletterWamoSubMessageTypePopup",
        escapable: !0,
        popable: !0,
        dismissOnWindowResize: !0,
        requestDismiss: n,
        children: s.jsx(r("WAWebUimUieMenu.react"), { contextMenu: u }),
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
