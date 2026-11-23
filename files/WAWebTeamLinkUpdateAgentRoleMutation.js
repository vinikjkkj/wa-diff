__d(
  "WAWebTeamLinkUpdateAgentRoleMutation",
  [
    "WALogger",
    "WAWebFetchWithAdAccountToken",
    "WAWebRelayClient",
    "WAWebTeamLinkUpdateAgentRoleMutation.graphql",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d =
        e !== void 0
          ? e
          : (e = n("WAWebTeamLinkUpdateAgentRoleMutation.graphql"));
    async function m(e, t, n) {
      try {
        var a = await o("WAWebFetchWithAdAccountToken").fetchWithAdAccountToken(
            function (r) {
              return o("WAWebRelayClient").commitMutation(
                d,
                { lid: e, employeeName: t, teamRole: n },
                { environmentType: "facebook", accessToken: r },
              );
            },
          ),
          i = a == null ? void 0 : a.whatsapp_teamlink_update_agent_role;
        return i == null
          ? (o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "updateTeamLinkAgentRole: empty result",
                  ])),
              )
              .sendLogs("teamlink-update-agent-role-failed"),
            {
              type: "error",
              error: r("err")("update role returned no result"),
            })
          : i.employee == null
            ? { type: "not-found" }
            : { type: "success" };
      } catch (e) {
        return (
          e instanceof
          o("WAWebFetchWithAdAccountToken").FetchAdAccountTokenError
            ? o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "updateTeamLinkAgentRole: token unavailable, ",
                    "",
                  ])),
                e.tokenResult.type,
              )
            : o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "updateTeamLinkAgentRole: request failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("teamlink-update-agent-role-failed"),
          {
            type: "error",
            error:
              e instanceof Error
                ? e
                : r("err")("updateTeamLinkAgentRole failed"),
          }
        );
      }
    }
    l.updateTeamLinkAgentRole = m;
  },
  98,
);
