__d(
  "SecuredActionChallengeDialogBase_actor.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        { defaultValue: null, kind: "LocalArgument", name: "height" },
        { defaultValue: null, kind: "LocalArgument", name: "scale" },
        { defaultValue: null, kind: "LocalArgument", name: "width" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "SecuredActionChallengeDialogBase_actor",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        {
          args: [
            { kind: "Variable", name: "height", variableName: "height" },
            { kind: "Variable", name: "scale", variableName: "scale" },
            { kind: "Variable", name: "width", variableName: "width" },
          ],
          kind: "FragmentSpread",
          name: "FDSProfilePhotoForActor_actor",
        },
      ],
      type: "Actor",
      abstractKey: "__isActor",
    };
    a.exports = e;
  },
  null,
);
