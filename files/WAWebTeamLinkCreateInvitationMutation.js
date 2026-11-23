__d(
  "WAWebTeamLinkCreateInvitationMutation",
  [
    "WAWebFetchAdAccountToken",
    "WAWebFetchWithAdAccountToken",
    "WAWebGraphQLServerError",
    "WAWebRelayClient",
    "WAWebTeamLinkCreateInvitationMutation.graphql",
    "WAWebTeamLinkErrorResult",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebTeamLinkCreateInvitationMutation.graphql"));
    async function u(e, t, n) {
      try {
        var a = await c(function (r) {
            return o("WAWebRelayClient").commitMutation(
              s,
              { lid: e, employeeName: t, teamRole: n },
              { environmentType: "facebook", accessToken: r },
            );
          }),
          i = a == null ? void 0 : a.whatsapp_teamlink_create_agent_invitation;
        return i == null
          ? o("WAWebTeamLinkErrorResult").reportTeamLinkError(
              "create-invitation",
              r("err")("create invitation returned no result"),
            )
          : {
              type: "success",
              invitation: {
                employeeLid: i.employee_lid,
                employeeName: i.employee_name,
                teamRole: i.team_role,
                invitationStatus: i.invitation_status,
                nonceCode: i.nonce_code,
                expiresAt: i.expires_at,
              },
            };
      } catch (e) {
        return o("WAWebTeamLinkErrorResult").reportTeamLinkError(
          "create-invitation",
          e,
        );
      }
    }
    async function c(e) {
      var t = await o("WAWebFetchAdAccountToken").fetchToken();
      if (t.type !== "success")
        throw new (o("WAWebFetchWithAdAccountToken").FetchAdAccountTokenError)(
          t,
        );
      try {
        return await e(t.token);
      } catch (r) {
        if (!d(r)) throw r;
        var n = await o("WAWebFetchAdAccountToken").refreshRejectedToken(
          t.token,
        );
        if (n.type !== "success")
          throw new (o(
            "WAWebFetchWithAdAccountToken",
          ).FetchAdAccountTokenError)(n);
        return e(n.token);
      }
    }
    function d(e) {
      return (
        e instanceof o("WAWebGraphQLServerError").GraphQLServerError &&
        e.source.errors.some(function (e) {
          var t = e.code;
          return (
            o("WAWebGraphQLServerError").GraphQLErrorCode.cast(t) ===
            o("WAWebGraphQLServerError").GraphQLErrorCode.INVALID_ACCESS_TOKEN
          );
        })
      );
    }
    l.createTeamLinkInvitation = u;
  },
  98,
);
