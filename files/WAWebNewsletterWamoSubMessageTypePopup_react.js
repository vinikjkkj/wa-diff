__d(
  "WAWebNewsletterWamoSubMessageTypePopup.react",
  [
    "WAWebDropdown.react",
    "WAWebL10N",
    "WAWebNewsletterWamoSubMessageTypeContextMenu.react",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "react",
    "react-compiler-runtime",
    "useWAWebIsKeyboardUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.handleSelect,
        a = e.onDismiss,
        i = e.popupAnchorEl,
        l = r("useWAWebIsKeyboardUser")(),
        u = l.isKeyboardUser;
      if (i == null) return null;
      var c;
      t[0] !== n
        ? ((c = s.jsx(r("WAWebNewsletterWamoSubMessageTypeContextMenu.react"), {
            onSelect: n,
          })),
          (t[0] = n),
          (t[1] = c))
        : (c = t[1]);
      var d;
      t[2] !== u || t[3] !== i || t[4] !== c
        ? ((d = {
            menu: c,
            dirY: o("WAWebDropdown.react").DirY.TOP,
            dirX: r("WAWebL10N").isRTL()
              ? o("WAWebDropdown.react").DirX.RIGHT
              : o("WAWebDropdown.react").DirX.LEFT,
            type: o("WAWebDropdown.react").MenuType
              .NewsletterWamoSubMessageTypePopup,
            flipOnRTL: !0,
            testid: "newsletter-wamo-message-type-popup",
            anchor: i,
            autoFocus: u,
          }),
          (t[2] = u),
          (t[3] = i),
          (t[4] = c),
          (t[5] = d))
        : (d = t[5]);
      var m = d,
        p;
      t[6] !== m
        ? ((p = s.jsx(r("WAWebUimUieMenu.react"), { contextMenu: m })),
          (t[6] = m),
          (t[7] = p))
        : (p = t[7]);
      var _;
      return (
        t[8] !== a || t[9] !== p
          ? ((_ = s.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "NewsletterWamoSubMessageTypePopup",
              escapable: !0,
              popable: !0,
              dismissOnWindowResize: !0,
              requestDismiss: a,
              children: p,
            })),
            (t[8] = a),
            (t[9] = p),
            (t[10] = _))
          : (_ = t[10]),
        _
      );
    }
    l.default = u;
  },
  98,
);
