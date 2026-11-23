__d(
  "WAWebSharableEventInviteLinkAction",
  [
    "WAWebSharableEventFailureLogger",
    "WAWebSharableEventInviteLinkJob",
    "WAWebSharableEventLinkUrl",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      try {
        var t = await o(
          "WAWebSharableEventInviteLinkJob",
        ).getStoredSharableEventInviteLinkToken(e);
        return t == null
          ? null
          : o("WAWebSharableEventLinkUrl").getSharableEventLinkUrl(t);
      } catch (e) {
        return (
          o("WAWebSharableEventFailureLogger").logSharableEventFailure(
            "invite-link",
            e,
          ),
          null
        );
      }
    }
    async function s(e) {
      try {
        return o("WAWebSharableEventLinkUrl").getSharableEventLinkUrl(
          await o(
            "WAWebSharableEventInviteLinkJob",
          ).getOrCreateSharableEventInviteLinkToken(e),
        );
      } catch (e) {
        throw (
          o("WAWebSharableEventFailureLogger").logSharableEventFailure(
            "invite-link",
            e,
          ),
          e
        );
      }
    }
    async function u(e) {
      try {
        return o("WAWebSharableEventLinkUrl").getSharableEventLinkUrl(
          await o(
            "WAWebSharableEventInviteLinkJob",
          ).rotateSharableEventInviteLinkToken(e),
        );
      } catch (e) {
        throw (
          o("WAWebSharableEventFailureLogger").logSharableEventFailure(
            "reset-invite-link",
            e,
          ),
          e
        );
      }
    }
    ((l.getStoredSharableEventInviteLink = e),
      (l.getSharableEventInviteLink = s),
      (l.resetSharableEventInviteLink = u));
  },
  98,
);
