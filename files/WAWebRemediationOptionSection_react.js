__d(
  "WAWebRemediationOptionSection.react",
  [
    "fbt",
    "WAWebButton.react",
    "WAWebCommonNewsletterEnums",
    "WAWebRevokeMetricUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.buttonType,
        n = e.enforcementType,
        r = e.onClickSeeOptions,
        a = e.stretch,
        i = function (t) {
          (t.preventDefault(),
            t.stopPropagation(),
            r(),
            n ===
              o("WAWebCommonNewsletterEnums").EnforcementType.VIOLATING_MSG &&
              (o("WAWebRevokeMetricUtils").UiRevokeActionHelper.startSession(),
              o(
                "WAWebRevokeMetricUtils",
              ).UiRevokeActionHelper.messageSelected()));
        },
        l = s._(/*BTDS*/ "See options"),
        c =
          t === "primary"
            ? o("WAWebButton.react").WAWebButtonPrimary
            : o("WAWebButton.react").WAWebButtonSecondary;
      return u.jsx(c, { testid: void 0, onClick: i, stretch: a, children: l });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
