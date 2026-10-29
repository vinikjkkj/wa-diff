__d(
  "WAWebP2PPillsContactCardUI",
  [
    "WAWebP2PPillsBusinessDetails.react",
    "WAWebP2PPillsContactCard.react",
    "WAWebP2PPillsGating",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.is1to1,
        n = e.isFromMe,
        a = e.pills,
        i = e.type;
      return o("WAWebP2PPillsGating").shouldRenderContactCardPills({
        businessInteractionPills: a,
        is1to1: t,
        isFromMe: n,
        type: i,
      })
        ? {
            BusinessDetails: r("WAWebP2PPillsBusinessDetails.react"),
            ContactCard: r("WAWebP2PPillsContactCard.react"),
            isFromMe: n,
            pills: a,
          }
        : null;
    }
    l.getContactCardPillsUI = e;
  },
  98,
);
