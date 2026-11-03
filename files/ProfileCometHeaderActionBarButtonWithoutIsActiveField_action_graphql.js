__d(
  "ProfileCometHeaderActionBarButtonWithoutIsActiveField_action.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: null,
          args: null,
          concreteType: "MetaLocalEngagementMetadataEntry",
          kind: "LinkedField",
          name: "meta_local_engagement_metadata",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "key",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "value",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ];
      return {
        argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
        kind: "Fragment",
        metadata: null,
        name: "ProfileCometHeaderActionBarButtonWithoutIsActiveField_action",
        selections: [
          {
            kind: "RequiredField",
            field: {
              alias: null,
              args: null,
              concreteType: "TextWithEntities",
              kind: "LinkedField",
              name: "title",
              plural: !1,
              selections: [
                {
                  kind: "RequiredField",
                  field: {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "text",
                    storageKey: null,
                  },
                  action: "THROW",
                },
              ],
              storageKey: null,
            },
            action: "THROW",
          },
          {
            kind: "RequiredField",
            field: {
              alias: "primary_icon",
              args: [
                { kind: "Literal", name: "icon_color", value: "fds-black" },
                { kind: "Literal", name: "icon_size", value: "16" },
                { kind: "Literal", name: "icon_variant", value: "filled" },
                { kind: "Variable", name: "scale", variableName: "scale" },
              ],
              concreteType: "Image",
              kind: "LinkedField",
              name: "icon_image",
              plural: !1,
              selections: [
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
              ],
              storageKey: null,
            },
            action: "THROW",
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "profile_action_type",
            storageKey: null,
          },
          {
            kind: "InlineFragment",
            selections: e,
            type: "ProfileActionOrderFood",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: e,
            type: "ProfileActionBookNow",
            abstractKey: null,
          },
          {
            kind: "ClientExtension",
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_optimistic_update",
                storageKey: null,
              },
            ],
          },
        ],
        type: "ProfileAction",
        abstractKey: "__isProfileAction",
      };
    })();
    a.exports = e;
  },
  null,
);
