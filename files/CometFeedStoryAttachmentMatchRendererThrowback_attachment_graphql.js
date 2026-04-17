__d(
  "CometFeedStoryAttachmentMatchRendererThrowback_attachment.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryAttachmentMatchRendererThrowback_attachment",
      selections: [
        {
          alias: "throwbackStyles",
          args: [
            {
              kind: "Variable",
              name: "render_location",
              variableName: "renderLocation",
            },
            { kind: "Literal", name: "supported", value: "3eKzDk" },
          ],
          concreteType: null,
          kind: "LinkedField",
          name: "style_type_renderer",
          plural: !1,
          selections: [
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRendererThrowback_attachment",
                  fragmentName:
                    "CometFeedStoryGoodwillSharedAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentGoodwillSharedStyleRenderer",
              abstractKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "StoryAttachment",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
