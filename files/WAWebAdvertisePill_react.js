__d(
  "WAWebAdvertisePill.react",
  [
    "fbt",
    "WAWebAdCreationLogger",
    "WAWebBusinessAdvertiseOutlineIcon.react",
    "WAWebChatlistUtils",
    "WAWebListFilterButton.react",
    "WDSIconIcCampaignMegaphone.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect;
    function d(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.adCreationUrlInput,
        a = e.ctaText,
        i = e.disabled,
        l = e.lwiEntryPoint,
        d = n.activeAccountInfo,
        m,
        p;
      (t[0] !== d || t[1] !== l
        ? ((m = function () {
            o("WAWebAdCreationLogger").logAdCreationImpression(
              l,
              d !== "not-linked" && d.hasFacebookPage,
            );
          }),
          (p = [d, l]),
          (t[0] = d),
          (t[1] = l),
          (t[2] = m),
          (t[3] = p))
        : ((m = t[2]), (p = t[3])),
        c(m, p));
      var _;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = u.jsx(
            o("WAWebBusinessAdvertiseOutlineIcon.react")
              .BusinessAdvertiseOutlineIcon,
            {},
          )),
          (t[4] = _))
        : (_ = t[4]);
      var f = _,
        g;
      t[5] !== a
        ? ((g = a != null ? a : s._(/*BTDS*/ "Boost")), (t[5] = a), (t[6] = g))
        : (g = t[6]);
      var h = g,
        y;
      t[7] !== n || t[8] !== l
        ? ((y = function () {
            o("WAWebChatlistUtils").handleAdCreation({
              adCreationUrlInput: n,
              lwiEntryPoint: l,
            });
          }),
          (t[7] = n),
          (t[8] = l),
          (t[9] = y))
        : (y = t[9]);
      var C = y,
        b;
      return (
        t[10] !== i || t[11] !== C || t[12] !== h
          ? ((b = u.jsx(r("WAWebListFilterButton.react"), {
              label: h,
              selected: !1,
              disabled: i,
              onClick: C,
              startIcon: f,
              startWDSIcon: r("WDSIconIcCampaignMegaphone.react"),
              theme: "drawer-header",
            })),
            (t[10] = i),
            (t[11] = C),
            (t[12] = h),
            (t[13] = b))
          : (b = t[13]),
        b
      );
    }
    l.default = d;
  },
  226,
);
