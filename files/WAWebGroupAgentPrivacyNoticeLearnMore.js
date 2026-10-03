__d(
  "WAWebGroupAgentPrivacyNoticeLearnMore",
  [
    "WAWebBotGroupGatingUtils",
    "WAWebGroupAgentPrivacyNoticeKind",
    "WAWebGroupAgentSecurityDialog.react",
    "WAWebGroupAgentSecurityVariant",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return (
        o("WAWebGroupAgentPrivacyNoticeKind").getGroupAgentPrivacyNotice(e)
          .kind !==
        o("WAWebGroupAgentPrivacyNoticeKind").GroupAgentPrivacyNoticeKind
          .THIRD_PARTY
      );
    }
    function s(e) {
      var t = (function (e) {
        if (
          e ===
          o("WAWebGroupAgentPrivacyNoticeKind").GroupAgentPrivacyNoticeKind
            .META_AI
        )
          return o("WAWebGroupAgentSecurityVariant").GroupAgentSecurityVariant
            .META_AI;
        if (
          e ===
          o("WAWebGroupAgentPrivacyNoticeKind").GroupAgentPrivacyNoticeKind.MUSE
        )
          return o(
            "WAWebBotGroupGatingUtils",
          ).isMuseGroupAgentRenderingEnabled()
            ? o("WAWebGroupAgentSecurityVariant").GroupAgentSecurityVariant.MUSE
            : o("WAWebGroupAgentSecurityVariant").GroupAgentSecurityVariant
                .GENERIC;
        if (
          e ===
          o("WAWebGroupAgentPrivacyNoticeKind").GroupAgentPrivacyNoticeKind
            .GENERIC
        )
          return o("WAWebGroupAgentSecurityVariant").GroupAgentSecurityVariant
            .GENERIC;
        if (
          e ===
          o("WAWebGroupAgentPrivacyNoticeKind").GroupAgentPrivacyNoticeKind
            .THIRD_PARTY
        )
          return null;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(
        o("WAWebGroupAgentPrivacyNoticeKind").getGroupAgentPrivacyNotice(e)
          .kind,
      );
      t != null &&
        o("WAWebGroupAgentSecurityDialog.react").openGroupAgentSecurityDialog(
          t,
        );
    }
    ((l.hasGroupTransitionToBotGroupLearnMore = e),
      (l.openGroupTransitionToBotGroupLearnMore = s));
  },
  98,
);
