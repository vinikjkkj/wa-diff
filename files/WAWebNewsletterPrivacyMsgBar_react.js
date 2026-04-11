__d(
  "WAWebNewsletterPrivacyMsgBar.react",
  [
    "fbt",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebNewsletterPhoneNumberPrivacyNux.react",
    "WDSButton.react",
    "WDSIconIcClose.react",
    "WDSTextualLink.react",
    "WDSTooltip.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useCallback;
    function d(e) {
      var t = e.onDismiss,
        n = c(function () {
          o("WAWebModalManager").ModalManager.open(
            u.jsx(r("WAWebNewsletterPhoneNumberPrivacyNux.react"), {}),
          );
        }, []);
      return u.jsxs(o("WAWebFlex.react").FlexRow, {
        align: "center",
        gap: 8,
        children: [
          u.jsx(o("WAWebFlex.react").FlexItem, {
            children: u.jsxs("span", {
              className: "x126k92a",
              "data-testid": void 0,
              children: [
                s._(
                  /*BTDS*/ "This channel has added privacy for your profile and phone number.",
                ),
                " ",
                u.jsx(r("WDSTextualLink.react"), {
                  onClick: n,
                  children: r("WAWebFbtCommon")("Learn more"),
                }),
              ],
            }),
          }),
          u.jsx(o("WAWebFlex.react").FlexItem, {
            grow: 0,
            align: "center",
            children: u.jsx(r("WDSTooltip.react"), {
              label: r("WAWebFbtCommon")("Close"),
              children: u.jsx(r("WDSButton.react"), {
                variant: "borderless",
                type: "default",
                size: "medium",
                onPress: t,
                Icon: r("WDSIconIcClose.react"),
                "aria-label": r("WAWebFbtCommon")("Close"),
              }),
            }),
          }),
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
