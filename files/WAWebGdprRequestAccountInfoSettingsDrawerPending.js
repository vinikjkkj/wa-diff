__d(
  "WAWebGdprRequestAccountInfoSettingsDrawerPending",
  [
    "fbt",
    "WATimeUtils",
    "WAWeb-moment",
    "WAWebClock",
    "WAWebDrawerButton.react",
    "WAWebGdprRequestAccountInfoSettingsFooterNotice",
    "WAWebNoop",
    "WDSIconIcSchedule.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.gdprStatus.timestamp,
        n = o("WAWebClock").Clock.daysDeltaAbs(o("WATimeUtils").unixTime(), t);
      return u.jsxs(u.Fragment, {
        children: [
          u.jsxs(o("WAWebDrawerButton.react").DrawerButtonSimple, {
            disabled: !0,
            color: "dark",
            className:
              "xt0e3qv x178xt8z x13fuv20 xx42vgk xso031l x1q0q8m5 x120ee7l",
            icon: u.jsx(r("WDSIconIcSchedule.react"), {}),
            onClick: r("WAWebNoop"),
            children: [
              u.jsx("div", {
                children: u.jsx(r("WDSText.react"), {
                  type: "Body1",
                  colorName: "contentDefault",
                  testid: "gdpr-pending-request",
                  children: s._(/*BTDS*/ ""),
                }),
              }),
              u.jsx("div", {
                children: u.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDeemphasized",
                  children: s._(/*BTDS*/ "", [
                    s._param(
                      "availability_date",
                      r("WAWeb-moment").unix(t).format("MMMM D, YYYY"),
                    ),
                  ]),
                }),
              }),
            ],
          }),
          u.jsx(r("WAWebGdprRequestAccountInfoSettingsFooterNotice"), {
            daysDelta: n,
            isPending: !0,
          }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
