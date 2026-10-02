__d(
  "WAWebFetchWassBotProfileGQLQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "botFbid" },
          { defaultValue: null, kind: "LocalArgument", name: "groupJid" },
        ],
        t = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "bot_fbid", variableName: "botFbid" },
              { kind: "Variable", name: "group_jid", variableName: "groupJid" },
            ],
            concreteType: "WASSProfile",
            kind: "LinkedField",
            name: "get_wass_account_profile",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "name",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "product",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_deprecated",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "profile_pic_thumb_url",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "profile_pic_full_url",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "hca_entrypoint_id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "creator_lid",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "WASSTosRequirements",
                kind: "LinkedField",
                name: "tos",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "WASSTosRequirement",
                    kind: "LinkedField",
                    name: "group",
                    plural: !0,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "blocking",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebFetchWassBotProfileGQLQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebFetchWassBotProfileGQLQuery",
          selections: t,
        },
        params: {
          id: "38799514653026858",
          metadata: {},
          name: "WAWebFetchWassBotProfileGQLQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
