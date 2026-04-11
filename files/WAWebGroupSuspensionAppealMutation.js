__d(
  "WAWebGroupSuspensionAppealMutation",
  [
    "WAWebGroupSuspensionAppealMutation.graphql",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t, n) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a) {
          var i = yield o("WAWebRelayClient").commitMutation(
              e !== void 0
                ? e
                : (e = n("WAWebGroupSuspensionAppealMutation.graphql")),
              { input: { group_jid: t, appeal_reason: r, debug_info: a } },
              { environmentType: "whatsapp_web" },
            ),
            l = i == null ? void 0 : i.wa_create_group_suspension_appeal,
            s = l == null ? void 0 : l.response_code,
            u = s === "SUCCESS" || s === "APPEAL_ALREADY_EXISTS";
          return {
            success: u,
            appealCreationTime: l == null ? void 0 : l.appeal_creation_time,
            errorMessage: u ? null : l == null ? void 0 : l.error_message,
          };
        })),
        u.apply(this, arguments)
      );
    }
    l.submitGroupSuspensionAppeal = s;
  },
  98,
);
