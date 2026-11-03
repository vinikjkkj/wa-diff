__d(
  "ProfileCometHovercardActionBar_actor.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          kind: "Variable",
          name: "associated_entity_id",
          variableName: "entityID",
        },
        t = {
          kind: "Variable",
          name: "render_location",
          variableName: "userActionBarRenderLocation",
        };
      return {
        argumentDefinitions: [
          { defaultValue: null, kind: "LocalArgument", name: "entityID" },
          {
            defaultValue: "WWW_COMET_HOVERCARD",
            kind: "LocalArgument",
            name: "userActionBarRenderLocation",
          },
        ],
        kind: "Fragment",
        metadata: null,
        name: "ProfileCometHovercardActionBar_actor",
        selections: [
          {
            alias: "primaryActions",
            args: [
              e,
              t,
              {
                kind: "Literal",
                name: "subsurface_type",
                value: "PRIMARY_SURFACE",
              },
            ],
            concreteType: null,
            kind: "LinkedField",
            name: "profile_actions",
            plural: !0,
            selections: [
              {
                args: null,
                kind: "FragmentSpread",
                name: "ProfileCometHeaderActionBarButton_action",
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "ProfileCometActionTrigger_action",
              },
            ],
            storageKey: null,
          },
          {
            alias: "secondaryActions",
            args: [
              e,
              t,
              {
                kind: "Literal",
                name: "subsurface_type",
                value: "SECONDARY_SURFACE",
              },
            ],
            concreteType: null,
            kind: "LinkedField",
            name: "profile_actions",
            plural: !0,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "__typename",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            args: [
              { kind: "Variable", name: "entityID", variableName: "entityID" },
              {
                kind: "Variable",
                name: "userActionBarRenderLocation",
                variableName: "userActionBarRenderLocation",
              },
            ],
            kind: "FragmentSpread",
            name: "ProfileCometHeaderMoreActionButton_actor",
          },
        ],
        type: "ActorWithActionBar",
        abstractKey: "__isActorWithActionBar",
      };
    })();
    a.exports = e;
  },
  null,
);
