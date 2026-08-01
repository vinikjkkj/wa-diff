__d(
  "WAWebTeamLinkListInvitationsQuery",
  [
    "WAWebFetchAdAccountToken",
    "WAWebRelayClient",
    "WAWebTeamLinkListInvitationsQuery.graphql",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0 ? e : (e = n("WAWebTeamLinkListInvitationsQuery.graphql"));
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebFetchAdAccountToken").fetchToken();
          if (e.type !== "success")
            return {
              type: "error",
              error: r("err")("fetchToken failed: " + e.type),
            };
          try {
            var t,
              n = yield o("WAWebRelayClient").fetchQuery(
                s,
                {},
                { environmentType: "facebook", accessToken: e.token },
              ),
              a =
                (t =
                  n == null
                    ? void 0
                    : n.whatsapp_teamlink_list_agent_invitations) != null
                  ? t
                  : [],
              i = a.map(function (e) {
                return {
                  employeeLid: e.employee_lid,
                  employeeName: e.employee_name,
                  invitationStatus: e.invitation_status,
                  nonceCode: e.nonce_code,
                  expiresAt: e.expires_at,
                };
              });
            return { type: "success", invitations: i };
          } catch (e) {
            return {
              type: "error",
              error:
                e instanceof Error
                  ? e
                  : r("err")("fetchTeamLinkInvitations failed"),
            };
          }
        })),
        c.apply(this, arguments)
      );
    }
    l.fetchTeamLinkInvitations = u;
  },
  98,
);
