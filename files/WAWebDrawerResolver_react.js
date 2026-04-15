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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u =
        n("cr:37104") == null
          ? void 0
          : n("cr:37104").UpdatesDrawerFlowLoadable;
    function c(e) {
      var t = o("react-compiler-runtime").c(50),
        n = e.descriptor;
      switch (n.descriptorType) {
        case "archived": {
          var a;
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = s.jsx(
                  o("WAWebArchivedFlowLoadable").ArchivedFlowLoadable,
                  { onEnd: o("WAWebDrawerManager").closeDrawerLeft },
                )),
                (t[0] = a))
              : (a = t[0]),
            a
          );
        }
        case "calls_tab": {
          var i;
          return (
            t[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((i = s.jsx(
                  o("WAWebVoipCallsTabDrawerFlowLoadable")
                    .VoipCallsTabDrawerFlowLoadable,
                  { onBack: o("WAWebDrawerManager").closeDrawerLeft },
                )),
                (t[1] = i))
              : (i = t[1]),
            i
          );
        }
        case "chat_search": {
          var l;
          return (
            t[2] !== n.chat || t[3] !== n.threadId
              ? ((l = s.jsx(
                  o("WAWebChatSearchDrawerLoadable").ChatSearchDrawerLoadable,
                  { chat: n.chat, threadId: n.threadId },
                )),
                (t[2] = n.chat),
                (t[3] = n.threadId),
                (t[4] = l))
              : (l = t[4]),
            l
          );
        }
        case "community_flow": {
          var c;
          return (
            t[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((c = s.jsx(
                  o("WAWebCommunityFlowLoadable").CommunityFlowLoadable,
                  {},
                )),
                (t[5] = c))
              : (c = t[5]),
            c
          );
        }
        case "contact_msg_info": {
          var m;
          return (
            t[6] !== n.msg
              ? ((m = s.jsx(
                  o("WAWebContactMsgInfoFlowLoadable")
                    .ContactMsgInfoFlowLoadable,
                  { msg: n.msg },
                )),
                (t[6] = n.msg),
                (t[7] = m))
              : (m = t[7]),
            m
          );
        }
        case "deactivate_community": {
          var p;
          return (
            t[8] !== n.chat
              ? ((p = s.jsx(
                  o("WAWebDeactivateCommunityDrawerLoadable")
                    .DeactivateCommunityDrawerLoadable,
                  {
                    chat: n.chat,
                    onBack: o("WAWebDrawerManager").closeDrawerRight,
                  },
                )),
                (t[8] = n.chat),
                (t[9] = p))
              : (p = t[9]),
            p
          );
        }
        case "event_info": {
          var _;
          return (
            t[10] !== n.chat || t[11] !== n.msg
              ? ((_ = s.jsx(
                  o("WAWebEventInfoFlowLoadable").EventInfoFlowLoadable,
                  {
                    chat: n.chat,
                    msg: n.msg,
                    onEnd: o("WAWebDrawerManager").closeDrawerRight,
                  },
                )),
                (t[10] = n.chat),
                (t[11] = n.msg),
                (t[12] = _))
              : (_ = t[12]),
            _
          );
        }
        case "existing_group_permissions": {
          var f;
          return (
            t[13] !== n.chat || t[14] !== n.groupMetadata
              ? ((f = s.jsx(
                  o("WAWebExistingGroupPermissionsDrawerLoadable")
                    .ExistingGroupPermissionsDrawerLoadable,
                  {
                    chat: n.chat,
                    groupMetadata: n.groupMetadata,
                    onClose: o("WAWebDrawerManager").closeDrawerRight,
                  },
                )),
                (t[13] = n.chat),
                (t[14] = n.groupMetadata),
                (t[15] = f))
              : (f = t[15]),
            f
          );
        }
        case "group_membership_approval_requests": {
          var g;
          return (
            t[16] !== n.chat
              ? ((g = s.jsx(
                  o("WAWebGroupMembershipApprovalRequestsFlowLoadable")
                    .GroupMembershipApprovalRequestsFlowLoadable,
                  {
                    chat: n.chat,
                    onBack: o("WAWebDrawerManager").closeDrawerRight,
                  },
                )),
                (t[16] = n.chat),
                (t[17] = g))
              : (g = t[17]),
            g
          );
        }
        case "group_msg_info": {
          var h;
          return (
            t[18] !== n.msg
              ? ((h = s.jsx(
                  o("WAWebGroupMsgInfoFlowLoadable").GroupMsgInfoFlowLoadable,
                  { msg: n.msg },
                )),
                (t[18] = n.msg),
                (t[19] = h))
              : (h = t[19]),
            h
          );
        }
        case "info_flow": {
          var y;
          return (
            t[20] !== n.chat ||
            t[21] !== n.contactProp ||
            t[22] !== n.displayName ||
            t[23] !== n.focusGroupDescriptionOnMount ||
            t[24] !== n.focusGroupSubjectOnMount ||
            t[25] !== n.focusNewsletterDescriptionOnMount ||
            t[26] !== n.initialStep ||
            t[27] !== n.newsletterLinkShareScreenEntryPoint ||
            t[28] !== n.profileEntryPoint ||
            t[29] !== n.scrollToParticipantList ||
            t[30] !== n.showFullGroupDescription ||
            t[31] !== n.sourceGroupChatOrNewsletter ||
            t[32] !== n.threadId
              ? ((y = s.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
                  chat: n.chat,
                  initialStep: n.initialStep,
                  showFullGroupDescription: n.showFullGroupDescription,
                  scrollToParticipantList: n.scrollToParticipantList,
                  profileEntryPoint: n.profileEntryPoint,
                  sourceGroupChatOrNewsletter: n.sourceGroupChatOrNewsletter,
                  focusNewsletterDescriptionOnMount:
                    n.focusNewsletterDescriptionOnMount,
                  focusGroupSubjectOnMount: n.focusGroupSubjectOnMount,
                  focusGroupDescriptionOnMount: n.focusGroupDescriptionOnMount,
                  newsletterLinkShareScreenEntryPoint:
                    n.newsletterLinkShareScreenEntryPoint,
                  threadId: n.threadId,
                  contactProp: n.contactProp,
                  displayName: n.displayName,
                  onEnd: o("WAWebDrawerManager").closeDrawerRight,
                })),
                (t[20] = n.chat),
                (t[21] = n.contactProp),
                (t[22] = n.displayName),
                (t[23] = n.focusGroupDescriptionOnMount),
                (t[24] = n.focusGroupSubjectOnMount),
                (t[25] = n.focusNewsletterDescriptionOnMount),
                (t[26] = n.initialStep),
                (t[27] = n.newsletterLinkShareScreenEntryPoint),
                (t[28] = n.profileEntryPoint),
                (t[29] = n.scrollToParticipantList),
                (t[30] = n.showFullGroupDescription),
                (t[31] = n.sourceGroupChatOrNewsletter),
                (t[32] = n.threadId),
                (t[33] = y))
              : (y = t[33]),
            y
          );
        }
        case "mid_drawer_empty_state": {
          var C;
          return (
            t[34] !== n.navBarItem
              ? ((C = s.jsx(
                  o("WAWebMidDrawerEmptyStateLoadable")
                    .MidDrawerEmptyStateLoadable,
                  { type: n.navBarItem },
                )),
                (t[34] = n.navBarItem),
                (t[35] = C))
              : (C = t[35]),
            C
          );
        }
        case "new_chat": {
          var b;
          return (
            t[36] === Symbol.for("react.memo_cache_sentinel")
              ? ((b = s.jsx(o("WAWebNewChatFlowLoadable").NewChatFlowLoadable, {
                  onEnd: o("WAWebDrawerManager").closeDrawerLeft,
                })),
                (t[36] = b))
              : (b = t[36]),
            b
          );
        }
        case "new_group": {
          var v;
          return (
            t[37] !== n.isSubFlow
              ? ((v = s.jsx(
                  o("WAWebNewGroupFlowLoadable").NewGroupFlowLoadable,
                  {
                    isSubFlow: n.isSubFlow,
                    onEnd: o("WAWebDrawerManager").closeDrawerLeft,
                    onCreateGroup: d,
                  },
                )),
                (t[37] = n.isSubFlow),
                (t[38] = v))
              : (v = t[38]),
            v
          );
        }
        case "newsletter_tab": {
          var S;
          return (
            t[39] === Symbol.for("react.memo_cache_sentinel")
              ? ((S = s.jsx(
                  o("WAWebNewsletterTabFlowLoadable").NewsletterTabFlowLoadable,
                  {},
                )),
                (t[39] = S))
              : (S = t[39]),
            S
          );
        }
        case "notifications": {
          var R;
          return (
            t[40] === Symbol.for("react.memo_cache_sentinel")
              ? ((R = s.jsx(
                  o("WAWebNotificationsFlowLoadable").NotificationsFlowLoadable,
                  { onEnd: o("WAWebDrawerManager").closeDrawerLeft },
                )),
                (t[40] = R))
              : (R = t[40]),
            R
          );
        }
        case "profile": {
          var L;
          return (
            t[41] === Symbol.for("react.memo_cache_sentinel")
              ? ((L = s.jsx(o("WAWebMeTabFlowLoadable").MeTabFlowLoadable, {
                  onEnd: o("WAWebDrawerManager").closeDrawerLeft,
                })),
                (t[41] = L))
              : (L = t[41]),
            L
          );
        }
        case "settings": {
          var E;
          return (
            t[42] !== n.initialStep
              ? ((E = s.jsx(
                  o("WAWebSettingsFlowLoadable").SettingsFlowLoadable,
                  {
                    onEnd: o("WAWebDrawerManager").closeDrawerLeft,
                    initialStep: n.initialStep,
                  },
                )),
                (t[42] = n.initialStep),
                (t[43] = E))
              : (E = t[43]),
            E
          );
        }
        case "status": {
          var k;
          return (
            t[44] === Symbol.for("react.memo_cache_sentinel")
              ? ((k = s.jsx(
                  o("WAWebStatusDrawerFlowLoadable").StatusDrawerFlowLoadable,
                  { onBack: o("WAWebDrawerManager").closeDrawerLeft },
                )),
                (t[44] = k))
              : (k = t[44]),
            k
          );
        }
        case "updates_tab": {
          var I;
          return (
            t[45] === Symbol.for("react.memo_cache_sentinel")
              ? ((I =
                  u != null
                    ? s.jsx(u, {
                        onBack: o("WAWebDrawerManager").closeDrawerLeft,
                      })
                    : null),
                (t[45] = I))
              : (I = t[45]),
            I
          );
        }
        case "verification": {
          var T;
          return (
            t[46] !== n.contact || t[47] !== n.isFirstLevel || t[48] !== n.lid
              ? ((T = s.jsx(
                  r("WAWebVerificationDrawerLoadable")
                    .VerificationDrawerLoadable,
                  {
                    lid: n.lid,
                    contact: n.contact,
                    isFirstLevel: n.isFirstLevel,
                  },
                )),
                (t[46] = n.contact),
                (t[47] = n.isFirstLevel),
                (t[48] = n.lid),
                (t[49] = T))
              : (T = t[49]),
            T
          );
        }
        default:
          return null;
      }
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (yield e, o("WAWebDrawerManager").closeDrawerLeft());
        })),
        m.apply(this, arguments)
      );
    }
    l.default = c;
  },
  98,
);
