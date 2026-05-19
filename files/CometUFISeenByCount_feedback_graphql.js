__d(
  "CometUFISeenByCount_feedback.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFISeenByCount_feedback",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "can_show_seen_by",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "Feedback",
          kind: "LinkedField",
          name: "if_viewer_can_see_seen_by_member_list",
          plural: !1,
          selections: [
            {
              args: null,
              documentName:
                "CometUFISeenByCount_feedback__if_viewer_can_see_seen_by_member_list",
              fragmentName: "CometUFISeenByCountButton_feedback",
              fragmentPropName: "feedback",
              kind: "ModuleImport",
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "Feedback",
          kind: "LinkedField",
          name: "if_viewer_cannot_see_seen_by_member_list",
          plural: !1,
          selections: [
            {
              args: null,
              documentName:
                "CometUFISeenByCount_feedback__if_viewer_cannot_see_seen_by_member_list",
              fragmentName: "CometUFISeenByCountText_feedback",
              fragmentPropName: "feedback",
              kind: "ModuleImport",
            },
          ],
          storageKey: null,
        },
      ],
      type: "Feedback",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
