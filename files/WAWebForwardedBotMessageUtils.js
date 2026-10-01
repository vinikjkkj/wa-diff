__d(
  "WAWebForwardedBotMessageUtils",
  ["WAWebABProps", "WAWebUnifiedResponseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return e === "download_consent_accepted"
        ? "normal"
        : e === "failed" &&
            o("WAWebABProps").getABPropConfigValue(
              "ai_rich_response_unknown_sender_verification_masking_enabled",
            )
          ? "masked"
          : o("WAWebUnifiedResponseUtils").unifiedResponseHasMediaContent(n) &&
              !t &&
              o("WAWebABProps").getABPropConfigValue(
                "ai_rich_response_unknown_sender_preview_enabled",
              )
            ? "preview"
            : "normal";
    }
    l.getForwardedBotDisplayMode = e;
  },
  98,
);
