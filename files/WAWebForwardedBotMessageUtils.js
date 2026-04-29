__d(
  "WAWebForwardedBotMessageUtils",
  ["WAWebBotSignatureVerificationGating", "WAWebUnifiedResponseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return e === "download_consent_accepted"
        ? "normal"
        : e === "failed" &&
            o(
              "WAWebBotSignatureVerificationGating",
            ).isVerificationMaskingEnabled()
          ? "masked"
          : o("WAWebUnifiedResponseUtils").unifiedResponseHasMediaContent(n) &&
              !t &&
              o(
                "WAWebBotSignatureVerificationGating",
              ).isUnknownSenderPreviewEnabled()
            ? "preview"
            : "normal";
    }
    l.getForwardedBotDisplayMode = e;
  },
  98,
);
