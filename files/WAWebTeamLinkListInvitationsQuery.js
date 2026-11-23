__d(
  "WAWebTeamLinkListInvitationsQuery",
  [
    "WAWebFetchWithAdAccountToken",
    "WAWebRelayClient",
    "WAWebTeamLinkErrorResult",
    "WAWebTeamLinkListInvitationsQuery.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0 ? e : (e = n("WAWebTeamLinkListInvitationsQuery.graphql"));
    async function u() {
      try {
        var e,
          t = await o("WAWebFetchWithAdAccountToken").fetchWithAdAccountToken(
            function (e) {
              return o("WAWebRelayClient").fetchQuery(
                s,
                {},
                { environmentType: "facebook", accessToken: e },
              );
            },
          ),
          n =
            (e =
              t == null
                ? void 0
                : t.whatsapp_teamlink_list_agent_invitations) != null
              ? e
              : [],
          r = n.map(function (e) {
            return {
              employeeLid: e.employee_lid,
              employeeName: e.employee_name,
              teamRole: e.team_role,
              invitationStatus: e.invitation_status,
              nonceCode: e.nonce_code,
              expiresAt: e.expires_at,
              offboardedAt: e.offboarded_at,
            };
          });
        return { type: "success", invitations: r };
      } catch (e) {
        return o("WAWebTeamLinkErrorResult").reportTeamLinkError(
          "list-invitations",
          e,
        );
      }
    }
    l.fetchTeamLinkInvitations = u;
  },
  98,
);
