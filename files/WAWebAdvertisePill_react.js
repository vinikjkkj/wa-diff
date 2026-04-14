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
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect;
    function d(e) {
      var t = e.adCreationUrlInput,
        n = e.ctaText,
        a = e.disabled,
        i = e.lwiEntryPoint,
        l = t.activeAccountInfo;
      c(
        function () {
          o("WAWebAdCreationLogger").logAdCreationImpression(
            i,
            l !== "not-linked" && l.hasFacebookPage,
          );
        },
        [l, i],
      );
      var d = u.jsx(
          o("WAWebBusinessAdvertiseOutlineIcon.react")
            .BusinessAdvertiseOutlineIcon,
          {},
        ),
        m = n != null ? n : s._(/*BTDS*/ "Boost"),
        p = function () {
          o("WAWebChatlistUtils").handleAdCreation({
            adCreationUrlInput: t,
            lwiEntryPoint: i,
          });
        };
      return u.jsx(r("WAWebListFilterButton.react"), {
        label: m,
        selected: !1,
        disabled: a,
        onClick: p,
        startIcon: d,
        startWDSIcon: r("WDSIconIcCampaignMegaphone.react"),
        theme: "drawer-header",
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
