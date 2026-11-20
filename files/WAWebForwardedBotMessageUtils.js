__d(
  "WAWebForwardedBotMessageUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e === "download_consent_accepted"
        ? "normal"
        : e === "failed" &&
            o("WAWebABProps").getABPropConfigValue(
              "ai_rich_response_unknown_sender_verification_masking_enabled",
            )
          ? "masked"
          : "normal";
    }
    function s(t) {
      var n = t.forwardedAiBotMessageInfo;
      return n != null && e(n.validationStatus) === "masked";
    }
    ((l.getForwardedBotDisplayMode = e), (l.isMaskedForwardedBotCopy = s));
  },
  98,
);
