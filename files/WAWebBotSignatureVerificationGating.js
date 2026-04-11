__d(
  "WAWebBotSignatureVerificationGating",
  ["$InternalEnum", "WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
      NONE: "none",
      LOG_ONLY: "log_only",
      ENFORCE_BLOCKING: "enforce_blocking",
    });
    function s() {
      var t,
        n = o("WAWebABProps").getABPropConfigValue(
          "ai_rich_response_forwarding_verification_enabled_v1",
        );
      return (t = e.cast(n)) != null ? t : e.NONE;
    }
    function u() {
      return s() !== e.NONE;
    }
    function c() {
      return s() === e.ENFORCE_BLOCKING;
    }
    ((l.BotSignatureVerificationEnforcementLevel = e),
      (l.getForwardVerificationEnforcementLevel = s),
      (l.isForwardVerificationEnabled = u),
      (l.shouldBlockOnVerificationFailure = c));
  },
  98,
);
