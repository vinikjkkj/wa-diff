__d(
  "CometFeedStoryEasyHideButtonMatchRenderer_story.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryEasyHideButtonMatchRenderer_story",
      selections: [
        {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "location",
              variableName: "renderLocation",
            },
          ],
          concreteType: "Story",
          kind: "LinkedField",
          name: "easy_hide_button_story",
          plural: !1,
          selections: [
            {
              args: null,
              documentName: "CometFeedStoryEasyHideButtonMatchRenderer_story",
              fragmentName: "CometFeedStoryMenuXoutSection_story",
              fragmentPropName: "story",
              kind: "ModuleImport",
            },
          ],
          storageKey: null,
        },
      ],
      type: "Story",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
