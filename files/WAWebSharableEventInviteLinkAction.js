__d(
  "WAWebSharableEventInviteLinkAction",
  [
    "WAWebSharableEventFailureLogger",
    "WAWebSharableEventInviteLinkJob",
    "WAWebSharableEventLinkUrl",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield o(
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
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            return o("WAWebSharableEventLinkUrl").getSharableEventLinkUrl(
              yield o(
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
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            return o("WAWebSharableEventLinkUrl").getSharableEventLinkUrl(
              yield o(
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
        })),
        m.apply(this, arguments)
      );
    }
    ((l.getStoredSharableEventInviteLink = e),
      (l.getSharableEventInviteLink = u),
      (l.resetSharableEventInviteLink = d));
  },
  98,
);
