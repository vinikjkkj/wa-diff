__d(
  "WAWebGroupAddPrivacyTipBanner.react",
  [
    "fbt",
    "WAWebPrivacyTipBanner.react",
    "WAWebSettingsConst",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.onAction,
        a,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = s._(/*BTDS*/ "Control who can add you to groups.")),
          (i = s._(/*BTDS*/ "Review privacy settings")),
          (t[0] = a),
          (t[1] = i))
        : ((a = t[0]), (i = t[1]));
      var l;
      return (
        t[2] !== n
          ? ((l = u.jsx(r("WAWebPrivacyTipBanner.react"), {
              text: a,
              actionText: i,
              settingStep:
                o("WAWebSettingsConst").SettingsSteps
                  .PrivacyVisiblityEditGroupAdd,
              onAction: n,
            })),
            (t[2] = n),
            (t[3] = l))
          : (l = t[3]),
        l
      );
    }
    l.default = c;
  },
  226,
);
