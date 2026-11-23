__d(
  "WAWebTeamLinkRemoveInvitationMutation",
  [
    "WAWebFetchWithAdAccountToken",
    "WAWebRelayClient",
    "WAWebTeamLinkErrorResult",
    "WAWebTeamLinkRemoveInvitationMutation.graphql",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebTeamLinkRemoveInvitationMutation.graphql"));
    async function u(e) {
      try {
        var t = await o("WAWebFetchWithAdAccountToken").fetchWithAdAccountToken(
            function (t) {
              return o("WAWebRelayClient").commitMutation(
                s,
                { lid: e },
                { environmentType: "facebook", accessToken: t },
              );
            },
          ),
          n = t == null ? void 0 : t.whatsapp_teamlink_remove_agent_invitation;
        return n == null
          ? o("WAWebTeamLinkErrorResult").reportTeamLinkError(
              "remove-invitation",
              r("err")("remove invitation returned no result"),
            )
          : {
              type: "success",
              removed: n.removed === !0,
              wasOnboarded: n.was_onboarded === !0,
            };
      } catch (e) {
        return o("WAWebTeamLinkErrorResult").reportTeamLinkError(
          "remove-invitation",
          e,
        );
      }
    }
    l.removeTeamLinkInvitation = u;
  },
  98,
);
