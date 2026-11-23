__d(
  "WAWebEmailInviteSendGroupMutation",
  [
    "WAWebEmailInviteSendGroupMutation.graphql",
    "WAWebRelayClient",
    "WAWebUserPrefsGeneral",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "web_group_email_invite",
      u =
        e !== void 0 ? e : (e = n("WAWebEmailInviteSendGroupMutation.graphql"));
    async function c(e, t) {
      var n = await o("WAWebRelayClient").commitMutation(
        u,
        {
          input: {
            emails: [].concat(t),
            inviter_name: o("WAWebUserPrefsGeneral").getPushname(),
            source: "GROUP_INFO_PANEL",
            target_id: e,
            target_type: "GROUP",
            utm_campaign: s,
          },
        },
        { environmentType: "whatsapp_web" },
      );
      return r("nullthrows")(
        n == null ? void 0 : n.xwa_send_email_invites,
        "sendGroupEmailInvites: empty response",
      );
    }
    l.sendGroupEmailInvites = c;
  },
  98,
);
