__d(
  "WAWebBizAILeadGenEditFieldsModal_flow.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "WAWebBizAILeadGenEditFieldsModal_flow",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "custom_moment",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "moment_type",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "XFBMetaAIBusinessAgentWhatsAppLeadGenFlowFields",
          kind: "LinkedField",
          name: "fields",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "label",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_enabled",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "XFBMetaAIBusinessAgentWhatsAppLeadGenFlow",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
