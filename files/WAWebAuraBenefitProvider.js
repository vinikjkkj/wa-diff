__d(
  "WAWebAuraBenefitProvider",
  ["WAWebAuraBenefitTypes", "WAWebPinChatLimits"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return e === o("WAWebAuraBenefitTypes").AuraBenefitId.PINNED_CHATS && t
        ? o("WAWebPinChatLimits").MAX_PINNED_CHATS_PREMIUM
        : null;
    }
    l.auraBenefitLimit = e;
  },
  98,
);
