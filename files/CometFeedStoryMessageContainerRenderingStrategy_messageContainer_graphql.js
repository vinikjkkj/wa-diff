__d(
  "CometFeedStoryMessageContainerRenderingStrategy_messageContainer.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryMessageContainerRenderingStrategy_messageContainer",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "useCometFeedStoryMatchDebugger_iCometStorySection",
        },
        {
          alias: null,
          args: null,
          concreteType: "Story",
          kind: "LinkedField",
          name: "story",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "TextWithEntities",
              kind: "LinkedField",
              name: "message",
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
              alias: null,
              args: null,
              concreteType: "Sticker",
              kind: "LinkedField",
              name: "referenced_sticker",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "id",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "StoryAttachment",
              kind: "LinkedField",
              name: "attachments",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "style_list",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "TextFormatMetadata",
              kind: "LinkedField",
              name: "text_format_metadata",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "preset_id",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: [
                {
                  kind: "Variable",
                  name: "location",
                  variableName: "renderLocation",
                },
              ],
              concreteType: "CometStorySections",
              kind: "LinkedField",
              name: "comet_sections",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: [
                    { kind: "Literal", name: "supported", value: "1XdQZk" },
                  ],
                  concreteType: null,
                  kind: "LinkedField",
                  name: "message",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "__typename",
                      storageKey: null,
                    },
                  ],
                  storageKey: 'message(supported:"1XdQZk")',
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "CometFeedStoryMessageContainerRenderingStrategy",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
