__d(
  "WAWebTeamLinkCreateInvitationMutation",
  [
    "WAWebFetchAdAccountToken",
    "WAWebRelayClient",
    "WAWebTeamLinkCreateInvitationMutation.graphql",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebTeamLinkCreateInvitationMutation.graphql"));
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebFetchAdAccountToken").fetchToken();
          if (n.type !== "success")
            return {
              type: "error",
              error: r("err")("fetchToken failed: " + n.type),
            };
          try {
            var a = yield o("WAWebRelayClient").commitMutation(
                s,
                { lid: e, employeeName: t },
                { environmentType: "facebook", accessToken: n.token },
              ),
              i =
                a == null
                  ? void 0
                  : a.whatsapp_teamlink_create_agent_invitation;
            return i == null
              ? {
                  type: "error",
                  error: r("err")("create invitation returned no result"),
                }
              : {
                  type: "success",
                  invitation: {
                    employeeLid: i.employee_lid,
                    employeeName: i.employee_name,
                    invitationStatus: i.invitation_status,
                    nonceCode: i.nonce_code,
                    expiresAt: i.expires_at,
                  },
                };
          } catch (e) {
            return {
              type: "error",
              error:
                e instanceof Error
                  ? e
                  : r("err")("createTeamLinkInvitation failed"),
            };
          }
        })),
        c.apply(this, arguments)
      );
    }
    l.createTeamLinkInvitation = u;
  },
  98,
);
