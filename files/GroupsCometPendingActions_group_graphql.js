__d(
  "GroupsCometPendingActions_group.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        { kind: "RootArgument", name: "inviteShortLinkKey" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "GroupsCometPendingActions_group",
      selections: [
        {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "invite_short_link_key",
              variableName: "inviteShortLinkKey",
            },
            { kind: "Literal", name: "supported", value: "3Wiim1" },
          ],
          concreteType: null,
          kind: "LinkedField",
          name: "group_pending_action_card_renderer",
          plural: !1,
          selections: [
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometPendingActions_group",
                  fragmentName:
                    "CometGroupHeaderPendingActionsArchivedCardRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometGroupHeaderPendingActionsArchivedCardRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometPendingActions_group",
                  fragmentName:
                    "CometGroupHeaderPendingActionsPausedCardRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometGroupHeaderPendingActionsPausedCardRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometPendingActions_group",
                  fragmentName:
                    "CometGroupHeaderPendingActionsFrozenNoticeCardRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometGroupHeaderPendingActionsFrozenNoticeCardRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometPendingActions_group",
                  fragmentName:
                    "CometGroupHeaderPendingActionsAdminInviteCardRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometGroupHeaderPendingActionsAdminInviteCardRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometPendingActions_group",
                  fragmentName:
                    "GroupsCometHeaderPendingActionsRequestCardRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometGroupHeaderPendingActionsRequestCardRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometPendingActions_group",
                  fragmentName:
                    "GroupsCometHeaderPendingActionsInvitationCardRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometGroupHeaderPendingActionsInvitationCardRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometPendingActions_group",
                  fragmentName:
                    "CometGroupHeaderPendingActionsMutedCardRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometGroupHeaderPendingActionsMutedCardRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometPendingActions_group",
                  fragmentName:
                    "GroupsCometHeaderPendingActionsAppealCardRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "GroupsCometHeaderPendingActionsAppealCardRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometPendingActions_group",
                  fragmentName:
                    "GroupsCometHeaderPendingActionsExpertInviteCardRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "GroupsCometHeaderPendingActionsExpertInviteCardRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometPendingActions_group",
                  fragmentName:
                    "GroupsCometHeaderPendingActionsTaskSetInviteCardRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "GroupsCometHeaderPendingActionsTaskSetInviteCardRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometPendingActions_group",
                  fragmentName:
                    "GroupsCometHeaderPendingActionsRequestCardTrustedParticipantRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometGroupHeaderPendingActionsTrustedParticipantCardRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometPendingActions_group",
                  fragmentName:
                    "CometGroupHeaderPendingActionsPostRateLimitedCardRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometGroupHeaderPendingActionsPostRateLimitedCardRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometPendingActions_group",
                  fragmentName:
                    "GroupsCometHeaderPendingActionsInviteLinkCardRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "XFBGroupsCometHeaderPendingActionsInviteLinkCardRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometPendingActions_group",
                  fragmentName:
                    "GroupsCometHeaderPendingActionsRequestCardContentRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometGroupHeaderPendingActionsContentCardRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometPendingActions_group",
                  fragmentName:
                    "GroupsCometHeaderPendingActionsChatHostInviteCardRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "XFBCometGroupHeaderPendingActionsChatHostInviteCardRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometPendingActions_group",
                  fragmentName:
                    "CometGroupHeaderPendingActionsSelfClaimAdminCardRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometGroupHeaderPendingActionsSelfClaimAdminCardRenderer",
              abstractKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "Group",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
