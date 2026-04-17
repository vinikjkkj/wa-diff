__d(
  "CometFeedStoryCallToActionTriggerContextProvider_bumperData.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryCallToActionTriggerContextProvider_bumperData",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "triggered_bumpers",
          plural: !0,
          selections: [
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
              concreteType: null,
              kind: "LinkedField",
              name: "triggers",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "trigger_event",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "StoryBumperData",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
