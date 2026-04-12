__d(
  "WAWebNewsletterWamoSubMessageTypeContextMenu.react",
  [
    "fbt",
    "WAWebNewsletterWamoSubMessageType",
    "WAWebNewsletterWamoSubMessageTypeContextMenuItem.react",
    "WAWebPremiumChannelIcon.react",
    "WDSIconIcPublic.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.onSelect;
      return u.jsxs("div", {
        children: [u.jsx(d, { onSelect: t }), u.jsx(m, { onSelect: t })],
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      var t = e.onSelect,
        n = function (n) {
          (n.preventDefault(),
            t(
              o("WAWebNewsletterWamoSubMessageType")
                .NewsletterWamoSubMessageType.Public,
            ));
        };
      return u.jsx(
        r("WAWebNewsletterWamoSubMessageTypeContextMenuItem.react"),
        {
          testid: void 0,
          action: n,
          icon: u.jsx(r("WDSIconIcPublic.react"), {}),
          text: s._(/*BTDS*/ "Public"),
          description: s._(/*BTDS*/ "Anyone can view"),
        },
      );
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.onSelect,
        n = function (n) {
          (n.preventDefault(),
            t(
              o("WAWebNewsletterWamoSubMessageType")
                .NewsletterWamoSubMessageType.WamoSub,
            ));
        };
      return u.jsx(
        r("WAWebNewsletterWamoSubMessageTypeContextMenuItem.react"),
        {
          testid: void 0,
          action: n,
          icon: u.jsx(
            o("WAWebPremiumChannelIcon.react").PremiumChannelIcon,
            {},
          ),
          text: s._(/*BTDS*/ "Subscribers"),
          description: s._(/*BTDS*/ "Only subscribers can view"),
        },
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
