__d(
  "WAWebRemediationOptionSection.react",
  [
    "fbt",
    "WAWebButton.react",
    "WAWebCommonNewsletterEnums",
    "WAWebRevokeMetricUtils",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.buttonType,
        r = e.enforcementType,
        a = e.onClickSeeOptions,
        i = e.stretch,
        l;
      t[0] !== r || t[1] !== a
        ? ((l = function (t) {
            (t.preventDefault(),
              t.stopPropagation(),
              a(),
              r ===
                o("WAWebCommonNewsletterEnums").EnforcementType.VIOLATING_MSG &&
                (o(
                  "WAWebRevokeMetricUtils",
                ).UiRevokeActionHelper.startSession(),
                o(
                  "WAWebRevokeMetricUtils",
                ).UiRevokeActionHelper.messageSelected()));
          }),
          (t[0] = r),
          (t[1] = a),
          (t[2] = l))
        : (l = t[2]);
      var c = l,
        d;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = s._(/*BTDS*/ "See options")), (t[3] = d))
        : (d = t[3]);
      var m = d,
        p =
          n === "primary"
            ? o("WAWebButton.react").WAWebButtonPrimary
            : o("WAWebButton.react").WAWebButtonSecondary,
        _;
      return (
        t[4] !== p || t[5] !== c || t[6] !== i
          ? ((_ = u.jsx(p, {
              testid: void 0,
              onClick: c,
              stretch: i,
              children: m,
            })),
            (t[4] = p),
            (t[5] = c),
            (t[6] = i),
            (t[7] = _))
          : (_ = t[7]),
        _
      );
    }
    l.default = c;
  },
  226,
);
