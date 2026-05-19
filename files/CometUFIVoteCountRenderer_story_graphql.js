__d(
  "CometUFIVoteCountRenderer_story.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFIVoteCountRenderer_story",
      selections: [
        {
          alias: "vote_attachments",
          args: [{ kind: "Literal", name: "if_style", value: "question" }],
          concreteType: "StoryAttachment",
          kind: "LinkedField",
          name: "attachments",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "target",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "id",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: [
                        {
                          kind: "Literal",
                          name: "orderby",
                          value: ["creation_time"],
                        },
                      ],
                      concreteType: "QuestionOptionsConnection",
                      kind: "LinkedField",
                      name: "options",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "QuestionOption",
                          kind: "LinkedField",
                          name: "nodes",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "QuestionOptionVotersConnection",
                              kind: "LinkedField",
                              name: "voters",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "count",
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: 'options(orderby:["creation_time"])',
                    },
                  ],
                  type: "Question",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: 'attachments(if_style:"question")',
        },
      ],
      type: "Story",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
