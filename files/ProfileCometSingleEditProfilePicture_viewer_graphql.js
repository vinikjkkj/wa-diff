__d(
  "ProfileCometSingleEditProfilePicture_viewer.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        { kind: "RootArgument", name: "shouldUseFXIMProfilePicEditor" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "ProfileCometSingleEditProfilePicture_viewer",
      selections: [
        {
          condition: "shouldUseFXIMProfilePicEditor",
          kind: "Condition",
          passingValue: !0,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "useFXIMProfilePictureEditDialog_viewer",
            },
          ],
        },
      ],
      type: "Viewer",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
