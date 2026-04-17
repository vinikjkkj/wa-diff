__d(
  "FDSProfilePhotoForActor_actor.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { kind: "Variable", name: "height", variableName: "height" },
          { kind: "Variable", name: "scale", variableName: "scale" },
          { kind: "Variable", name: "width", variableName: "width" },
        ],
        t = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "width",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "height",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "scale",
            storageKey: null,
          },
        ];
      return {
        argumentDefinitions: [
          {
            defaultValue: !0,
            kind: "LocalArgument",
            name: "displayAvailability",
          },
          { defaultValue: null, kind: "LocalArgument", name: "height" },
          {
            defaultValue: !1,
            kind: "LocalArgument",
            name: "isCommerceProfilePhoto",
          },
          {
            defaultValue: !0,
            kind: "LocalArgument",
            name: "linkToUnseenStory",
          },
          { defaultValue: null, kind: "LocalArgument", name: "scale" },
          { defaultValue: null, kind: "LocalArgument", name: "width" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "FDSProfilePhotoForActor_actor",
        selections: [
          {
            args: null,
            kind: "FragmentSpread",
            name: "ProfileCometProfileLink_actor",
          },
          {
            args: [
              {
                kind: "Variable",
                name: "enabled",
                variableName: "linkToUnseenStory",
              },
            ],
            kind: "FragmentSpread",
            name: "useActorStoryStatus_actor",
          },
          {
            kind: "InlineFragment",
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "url",
                storageKey: null,
              },
            ],
            type: "Entity",
            abstractKey: "__isEntity",
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__typename",
            storageKey: null,
          },
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
            name: "name",
            storageKey: null,
          },
          {
            alias: null,
            args: e,
            concreteType: "Image",
            kind: "LinkedField",
            name: "profile_picture",
            plural: !1,
            selections: t,
            storageKey: null,
          },
          {
            condition: "displayAvailability",
            kind: "Condition",
            passingValue: !0,
            selections: [
              {
                kind: "InlineFragment",
                selections: [
                  {
                    kind: "ClientExtension",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "availability",
                        storageKey: null,
                      },
                    ],
                  },
                ],
                type: "User",
                abstractKey: null,
              },
            ],
          },
          {
            condition: "isCommerceProfilePhoto",
            kind: "Condition",
            passingValue: !0,
            selections: [
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: e,
                    concreteType: "Image",
                    kind: "LinkedField",
                    name: "commerce_profile_picture",
                    plural: !1,
                    selections: t,
                    storageKey: null,
                  },
                ],
                type: "ActorWithCustomizableCommerceProfile",
                abstractKey: "__isActorWithCustomizableCommerceProfile",
              },
            ],
          },
        ],
        type: "Actor",
        abstractKey: "__isActor",
      };
    })();
    a.exports = e;
  },
  null,
);
