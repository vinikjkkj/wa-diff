__d(
  "WAWebCanonicalHatchIdentityGetQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "includeVideoVariants",
          },
        ],
        t = [
          {
            alias: null,
            args: null,
            concreteType: "WAGenAIHatchChannelMetadata",
            kind: "LinkedField",
            name: "wa_genai_hatch_channel_metadata",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "WAGenAIHatchIdentityGetResponse",
                kind: "LinkedField",
                name: "identity",
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
                    concreteType: "WAGenAIHatchIdentityAvatarInfo",
                    kind: "LinkedField",
                    name: "avatar",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "image_url",
                        storageKey: null,
                      },
                      {
                        condition: "includeVideoVariants",
                        kind: "Condition",
                        passingValue: !0,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType:
                              "WAGenAIHatchIdentityAvatarVideoVariant",
                            kind: "LinkedField",
                            name: "video_variants",
                            plural: !0,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "variant",
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "video_url",
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                        ],
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
          name: "WAWebCanonicalHatchIdentityGetQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebCanonicalHatchIdentityGetQuery",
          selections: t,
        },
        params: {
          id: "27212676201730096",
          metadata: {},
          name: "WAWebCanonicalHatchIdentityGetQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
