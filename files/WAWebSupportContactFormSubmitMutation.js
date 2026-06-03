__d(
  "WAWebSupportContactFormSubmitMutation",
  [
    "WAWebRelayClient",
    "WAWebSupportContactFormSubmitMutation.graphql",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = yield o("WAWebRelayClient").commitMutation(
              e !== void 0
                ? e
                : (e = n("WAWebSupportContactFormSubmitMutation.graphql")),
              { input: t },
              { environmentType: "whatsapp_web" },
            ),
            a = r == null ? void 0 : r.xwa_wa_support_contact_form_submit;
          return a == null
            ? {
                success: !1,
                error_code: 500,
                error_message: "Empty response from contact form mutation",
                ticket_id: null,
                support_phone_number_jid: null,
              }
            : {
                success: a.success,
                error_code: a.error_code,
                error_message: a.error_message,
                ticket_id: a.ticket_id,
                support_phone_number_jid: a.support_phone_number_jid,
              };
        })),
        u.apply(this, arguments)
      );
    }
    l.submitContactFormGraphQL = s;
  },
  98,
);
