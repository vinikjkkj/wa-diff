__d(
  "TwoStepVerificationUpdateLogin_data.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "TwoStepVerificationUpdateLogin_data",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            concreteType: "XFBTwoStepVerificationAFADPollingInterval",
            kind: "LinkedField",
            name: "xfb_two_step_verification_afad_polling_interval",
            plural: !1,
            selections: [
              {
                kind: "RequiredField",
                field: {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "polling_interval",
                  storageKey: null,
                },
                action: "THROW",
                path: "xfb_two_step_verification_afad_polling_interval.polling_interval",
              },
            ],
            storageKey: null,
          },
          action: "THROW",
          path: "xfb_two_step_verification_afad_polling_interval",
        },
      ],
      type: "Query",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
