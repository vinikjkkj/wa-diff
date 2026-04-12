__d(
  "WAWebBusinessProfilePhoneSection.react",
  [
    "fbt",
    "WAWebBusinessProfileIconSection.react",
    "WAWebCopyPasteSelectable.react",
    "WAWebFlex.react",
    "WAWebUserPrefsMeUser",
    "WAWebWidFormat",
    "WDSIconIcCall.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { marginTop20: { marginTop: "x1nmyh1g", $$css: !0 } };
    function d(e) {
      var t = e.isProfileLocked,
        n = t === void 0 ? !1 : t;
      return u.jsx(o("WAWebBusinessProfileIconSection.react").IconSection, {
        Icon: r("WDSIconIcCall.react"),
        type: "container",
        disabled: n,
        content: u.jsxs("div", {
          children: [
            u.jsx(o("WAWebCopyPasteSelectable.react").SelectableDiv, {
              selectable: !0,
              children: o("WAWebWidFormat").widToFormattedUser(
                o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE(),
              ),
            }),
            n === !0
              ? null
              : u.jsx(o("WAWebFlex.react").FlexRow, {
                  xstyle: c.marginTop20,
                  className: "xhslqc4 x1pg5gke x37zpob",
                  children: s._(
                    /*BTDS*/ "Name and phone number will be visible to your WhatsApp customers and can be edited from the app on your mobile device.",
                  ),
                }),
          ],
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
