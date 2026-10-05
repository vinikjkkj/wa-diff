__d(
  "WAWebEmailInviteSendGroupMutation",
  [
    "WAWebEmailInviteSendGroupMutation.graphql",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0 ? e : (e = n("WAWebEmailInviteSendGroupMutation.graphql"));
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebRelayClient").commitMutation(
            s,
            {
              input: {
                emails: [].concat(t),
                source: "GROUP_INFO_PANEL",
                target_id: e,
                target_type: "GROUP",
              },
            },
            { environmentType: "whatsapp_web" },
          );
          return r("nullthrows")(
            n == null ? void 0 : n.xwa_send_email_invites,
            "sendGroupEmailInvites: empty response",
          );
        })),
        c.apply(this, arguments)
      );
    }
    l.sendGroupEmailInvites = u;
  },
  98,
);
