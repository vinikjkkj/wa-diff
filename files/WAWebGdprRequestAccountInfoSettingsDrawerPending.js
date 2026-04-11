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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.gdprStatus,
        a = n.timestamp,
        i;
      t[0] !== a
        ? ((i = o("WAWebClock").Clock.daysDeltaAbs(
            o("WATimeUtils").unixTime(),
            a,
          )),
          (t[0] = a),
          (t[1] = i))
        : (i = t[1]);
      var l = i,
        c,
        d;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = "xt0e3qv x178xt8z x13fuv20 xx42vgk xso031l x1q0q8m5 x120ee7l"),
          (d = u.jsx(o("WAWebBusinessHoursIcon.react").BusinessHoursIcon, {})),
          (t[2] = c),
          (t[3] = d))
        : ((c = t[2]), (d = t[3]));
      var m;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = u.jsx(o("WAWebText.react").WAWebTextTitle, {
            testid: void 0,
            children: s._(/*BTDS*/ "Request sent"),
          })),
          (t[4] = m))
        : (m = t[4]);
      var p;
      t[5] !== a
        ? ((p = u.jsxs(o("WAWebDrawerButton.react").DrawerButtonSimple, {
            disabled: !0,
            color: "dark",
            className: c,
            icon: d,
            onClick: r("WAWebNoop"),
            children: [
              m,
              u.jsx(o("WAWebText.react").WAWebTextMuted, {
                children: s._(/*BTDS*/ "Ready by {availability_date}", [
                  s._param(
                    "availability_date",
                    r("WAWeb-moment").unix(a).format("MMMM D, YYYY"),
                  ),
                ]),
              }),
            ],
          })),
          (t[5] = a),
          (t[6] = p))
        : (p = t[6]);
      var _;
      t[7] !== l
        ? ((_ = u.jsx(r("WAWebGdprRequestAccountInfoSettingsFooterNotice"), {
            daysDelta: l,
            isPending: !0,
          })),
          (t[7] = l),
          (t[8] = _))
        : (_ = t[8]);
      var f;
      return (
        t[9] !== p || t[10] !== _
          ? ((f = u.jsxs(u.Fragment, { children: [p, _] })),
            (t[9] = p),
            (t[10] = _),
            (t[11] = f))
          : (f = t[11]),
        f
      );
    }
    l.default = c;
  },
  226,
);
