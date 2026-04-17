__d(
  "CometFeedStoryAttachmentDisclaimerFooterSection_attachment.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryAttachmentDisclaimerFooterSection_attachment",
      selections: [
        {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "location",
              variableName: "renderLocation",
            },
            { kind: "Literal", name: "supported", value: "47T0PR" },
          ],
          concreteType: null,
          kind: "LinkedField",
          name: "comet_footer_disclaimer_renderer",
          plural: !1,
          selections: [
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentDisclaimerFooterSection_attachment",
                  fragmentName:
                    "CometStoryAttachmentDisclaimerFooterDynamicAdContextStrategy_attachmentFooterDisclaimer",
                  fragmentPropName: "attachmentFooterDisclaimer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometStoryAttachmentDisclaimerFooterDynamicAdContextStrategy",
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
