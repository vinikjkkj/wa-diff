__d(
  "WAWebGdprRequestAccountInfoSettingsDrawerPending",
  [
    "fbt",
    "WATimeUtils",
    "WAWeb-moment",
    "WAWebBusinessHoursIcon.react",
    "WAWebClock",
    "WAWebDrawerButton.react",
    "WAWebGdprRequestAccountInfoSettingsFooterNotice",
    "WAWebNoop",
    "WAWebText.react",
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
            icon: u.jsx(
              o("WAWebBusinessHoursIcon.react").BusinessHoursIcon,
              {},
            ),
            onClick: r("WAWebNoop"),
            children: [
              u.jsx(o("WAWebText.react").WAWebTextTitle, {
                testid: void 0,
                children: s._(/*BTDS*/ "Request sent"),
              }),
              u.jsx(o("WAWebText.react").WAWebTextMuted, {
                children: s._(/*BTDS*/ "Ready by {availability_date}", [
                  s._param(
                    "availability_date",
                    r("WAWeb-moment").unix(t).format("MMMM D, YYYY"),
                  ),
                ]),
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
