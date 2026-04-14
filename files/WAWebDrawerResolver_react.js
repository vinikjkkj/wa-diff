__d(
  "WAWebDrawerResolver.react",
  [
    "WAWebArchivedFlowLoadable",
    "WAWebChatSearchDrawerLoadable",
    "WAWebCommunityFlowLoadable",
    "WAWebContactMsgInfoFlowLoadable",
    "WAWebDeactivateCommunityDrawerLoadable",
    "WAWebDrawerManager",
    "WAWebEventInfoFlowLoadable",
    "WAWebExistingGroupPermissionsDrawerLoadable",
    "WAWebGroupMembershipApprovalRequestsFlowLoadable",
    "WAWebGroupMsgInfoFlowLoadable",
    "WAWebInfoFlowLoadable",
    "WAWebMeTabFlowLoadable",
    "WAWebMidDrawerEmptyStateLoadable",
    "WAWebNewChatFlowLoadable",
    "WAWebNewGroupFlowLoadable",
    "WAWebNewsletterTabFlowLoadable",
    "WAWebNotificationsFlowLoadable",
    "WAWebSettingsFlowLoadable",
    "WAWebStatusDrawerFlowLoadable",
    "WAWebVerificationDrawerLoadable",
    "WAWebVoipCallsTabDrawerFlowLoadable",
    "asyncToGeneratorRuntime",
    "cr:37104",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u =
        n("cr:37104") == null
          ? void 0
          : n("cr:37104").UpdatesDrawerFlowLoadable;
    function c(e) {
      var t = e.descriptor;
      switch (t.descriptorType) {
        case "archived":
          return s.jsx(o("WAWebArchivedFlowLoadable").ArchivedFlowLoadable, {
            onEnd: o("WAWebDrawerManager").closeDrawerLeft,
          });
        case "calls_tab":
          return s.jsx(
            o("WAWebVoipCallsTabDrawerFlowLoadable")
              .VoipCallsTabDrawerFlowLoadable,
            { onBack: o("WAWebDrawerManager").closeDrawerLeft },
          );
        case "chat_search":
          return s.jsx(
            o("WAWebChatSearchDrawerLoadable").ChatSearchDrawerLoadable,
            { chat: t.chat, threadId: t.threadId },
          );
        case "community_flow":
          return s.jsx(
            o("WAWebCommunityFlowLoadable").CommunityFlowLoadable,
            {},
          );
        case "contact_msg_info":
          return s.jsx(
            o("WAWebContactMsgInfoFlowLoadable").ContactMsgInfoFlowLoadable,
            { msg: t.msg },
          );
        case "deactivate_community":
          return s.jsx(
            o("WAWebDeactivateCommunityDrawerLoadable")
              .DeactivateCommunityDrawerLoadable,
            { chat: t.chat, onBack: o("WAWebDrawerManager").closeDrawerRight },
          );
        case "event_info":
          return s.jsx(o("WAWebEventInfoFlowLoadable").EventInfoFlowLoadable, {
            chat: t.chat,
            msg: t.msg,
            onEnd: o("WAWebDrawerManager").closeDrawerRight,
          });
        case "existing_group_permissions":
          return s.jsx(
            o("WAWebExistingGroupPermissionsDrawerLoadable")
              .ExistingGroupPermissionsDrawerLoadable,
            {
              chat: t.chat,
              groupMetadata: t.groupMetadata,
              onClose: o("WAWebDrawerManager").closeDrawerRight,
            },
          );
        case "group_membership_approval_requests":
          return s.jsx(
            o("WAWebGroupMembershipApprovalRequestsFlowLoadable")
              .GroupMembershipApprovalRequestsFlowLoadable,
            { chat: t.chat, onBack: o("WAWebDrawerManager").closeDrawerRight },
          );
        case "group_msg_info":
          return s.jsx(
            o("WAWebGroupMsgInfoFlowLoadable").GroupMsgInfoFlowLoadable,
            { msg: t.msg },
          );
        case "info_flow":
          return s.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
            chat: t.chat,
            initialStep: t.initialStep,
            showFullGroupDescription: t.showFullGroupDescription,
            scrollToParticipantList: t.scrollToParticipantList,
            profileEntryPoint: t.profileEntryPoint,
            sourceGroupChatOrNewsletter: t.sourceGroupChatOrNewsletter,
            focusNewsletterDescriptionOnMount:
              t.focusNewsletterDescriptionOnMount,
            focusGroupSubjectOnMount: t.focusGroupSubjectOnMount,
            focusGroupDescriptionOnMount: t.focusGroupDescriptionOnMount,
            newsletterLinkShareScreenEntryPoint:
              t.newsletterLinkShareScreenEntryPoint,
            threadId: t.threadId,
            contactProp: t.contactProp,
            displayName: t.displayName,
            onEnd: o("WAWebDrawerManager").closeDrawerRight,
          });
        case "mid_drawer_empty_state":
          return s.jsx(
            o("WAWebMidDrawerEmptyStateLoadable").MidDrawerEmptyStateLoadable,
            { type: t.navBarItem },
          );
        case "new_chat":
          return s.jsx(o("WAWebNewChatFlowLoadable").NewChatFlowLoadable, {
            onEnd: o("WAWebDrawerManager").closeDrawerLeft,
          });
        case "new_group":
          return s.jsx(o("WAWebNewGroupFlowLoadable").NewGroupFlowLoadable, {
            isSubFlow: t.isSubFlow,
            onEnd: o("WAWebDrawerManager").closeDrawerLeft,
            onCreateGroup: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  (yield e, o("WAWebDrawerManager").closeDrawerLeft());
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          });
        case "newsletter_tab":
          return s.jsx(
            o("WAWebNewsletterTabFlowLoadable").NewsletterTabFlowLoadable,
            {},
          );
        case "notifications":
          return s.jsx(
            o("WAWebNotificationsFlowLoadable").NotificationsFlowLoadable,
            { onEnd: o("WAWebDrawerManager").closeDrawerLeft },
          );
        case "profile":
          return s.jsx(o("WAWebMeTabFlowLoadable").MeTabFlowLoadable, {
            onEnd: o("WAWebDrawerManager").closeDrawerLeft,
          });
        case "settings":
          return s.jsx(o("WAWebSettingsFlowLoadable").SettingsFlowLoadable, {
            onEnd: o("WAWebDrawerManager").closeDrawerLeft,
            initialStep: t.initialStep,
          });
        case "status":
          return s.jsx(
            o("WAWebStatusDrawerFlowLoadable").StatusDrawerFlowLoadable,
            { onBack: o("WAWebDrawerManager").closeDrawerLeft },
          );
        case "updates_tab":
          return u != null
            ? s.jsx(u, { onBack: o("WAWebDrawerManager").closeDrawerLeft })
            : null;
        case "verification":
          return s.jsx(
            r("WAWebVerificationDrawerLoadable").VerificationDrawerLoadable,
            { lid: t.lid, contact: t.contact, isFirstLevel: t.isFirstLevel },
          );
        default:
          return (t.descriptorType, null);
      }
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
