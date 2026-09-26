__d(
  "GroupsCometAdminToolsLeftRailSimpleItem_simpleGroupToolWithCometSupport.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ kind: "Variable", name: "scale", variableName: "scale" }],
        t = [
          {
            args: null,
            kind: "FragmentSpread",
            name: "useCoerceRelayImage_image",
          },
        ];
      return {
        argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
        kind: "Fragment",
        metadata: null,
        name: "GroupsCometAdminToolsLeftRailSimpleItem_simpleGroupToolWithCometSupport",
        selections: [
          {
            args: null,
            kind: "FragmentSpread",
            name: "GroupsCometAdminToolsLeftRailSimpleItemBody_simpleGroupToolWithCometSupport",
          },
          {
            alias: null,
            args: null,
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "badge_number",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "text",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            kind: "RequiredField",
            field: {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "content",
              storageKey: null,
            },
            action: "THROW",
            path: "content",
          },
          {
            kind: "RequiredField",
            field: {
              alias: null,
              args: e,
              concreteType: "Image",
              kind: "LinkedField",
              name: "icon",
              plural: !1,
              selections: t,
              storageKey: null,
            },
            action: "THROW",
            path: "icon",
          },
          {
            kind: "RequiredField",
            field: {
              alias: null,
              args: e,
              concreteType: "Image",
              kind: "LinkedField",
              name: "icon_outline",
              plural: !1,
              selections: t,
              storageKey: null,
            },
            action: "THROW",
            path: "icon_outline",
          },
          {
            kind: "RequiredField",
            field: {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "url",
              storageKey: null,
            },
            action: "THROW",
            path: "url",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "GroupsCometAdminToolsLeftRailGroupToolItem_groupTool",
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "render_as_disabled",
            storageKey: null,
          },
          {
            kind: "RequiredField",
            field: {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "id",
              storageKey: null,
            },
            action: "THROW",
            path: "id",
          },
          {
            kind: "RequiredField",
            field: {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "section",
              storageKey: null,
            },
            action: "THROW",
            path: "section",
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "trace_policy",
            storageKey: null,
          },
        ],
        type: "SimpleGroupToolWithCometSupport",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
