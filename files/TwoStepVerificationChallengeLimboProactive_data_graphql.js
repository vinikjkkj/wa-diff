__d(
  "TwoStepVerificationChallengeLimboProactive_data.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "TwoStepVerificationChallengeLimboProactive_data",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            concreteType: "XFBTwoStepVerificationContent",
            kind: "LinkedField",
            name: "xfb_two_factor_login_content",
            plural: !1,
            selections: [
              {
                kind: "RequiredField",
                field: {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "limbo_proactive_top_text",
                  storageKey: null,
                },
                action: "THROW",
                path: "xfb_two_factor_login_content.limbo_proactive_top_text",
              },
              {
                kind: "RequiredField",
                field: {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "limbo_proactive_no_device_header",
                  storageKey: null,
                },
                action: "THROW",
                path: "xfb_two_factor_login_content.limbo_proactive_no_device_header",
              },
              {
                kind: "RequiredField",
                field: {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "limbo_proactive_no_device_body",
                  storageKey: null,
                },
                action: "THROW",
                path: "xfb_two_factor_login_content.limbo_proactive_no_device_body",
              },
            ],
            storageKey: null,
          },
          action: "THROW",
          path: "xfb_two_factor_login_content",
        },
      ],
      type: "Query",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
