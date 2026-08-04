__d(
  "WAWebTeamLinkRemoveInvitationMutation",
  [
    "WAWebFetchAdAccountToken",
    "WAWebRelayClient",
    "WAWebTeamLinkRemoveInvitationMutation.graphql",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebTeamLinkRemoveInvitationMutation.graphql"));
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebFetchAdAccountToken").fetchToken();
          if (t.type !== "success")
            return {
              type: "error",
              error: r("err")("fetchToken failed: " + t.type),
            };
          try {
            var n = yield o("WAWebRelayClient").commitMutation(
                s,
                { lid: e },
                { environmentType: "facebook", accessToken: t.token },
              ),
              a =
                n == null
                  ? void 0
                  : n.whatsapp_teamlink_remove_agent_invitation;
            return a == null
              ? {
                  type: "error",
                  error: r("err")("remove invitation returned no result"),
                }
              : {
                  type: "success",
                  removed: a.removed === !0,
                  wasOnboarded: a.was_onboarded === !0,
                };
          } catch (e) {
            return {
              type: "error",
              error:
                e instanceof Error
                  ? e
                  : r("err")("removeTeamLinkInvitation failed"),
            };
          }
        })),
        c.apply(this, arguments)
      );
    }
    l.removeTeamLinkInvitation = u;
  },
  98,
);
