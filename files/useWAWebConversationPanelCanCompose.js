__d(
  "useWAWebConversationPanelCanCompose",
  [
    "fbt",
    "WAWebAnnouncementsOnlyMsgBar.react",
    "WAWebBizAiAgentGating",
    "WAWebBizAiAgentStatusUtils",
    "WAWebBizAiBlockMsgBar.react",
    "WAWebBizBroadcastTos",
    "WAWebBizBroadcastTosModalLoadable",
    "WAWebBizBroadcastTosReviewBannerLoadable",
    "WAWebBlocklistUtils",
    "WAWebBotBaseGating",
    "WAWebBotGating",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebCommunityAnnouncementsMsgBar.react",
    "WAWebConfirmPopup.react",
    "WAWebDeleteUnblockMsgBar.react",
    "WAWebFrontendChatGetters",
    "WAWebFrontendContactGetters",
    "WAWebGatedChatOpenedWamEvent",
    "WAWebGroupType",
    "WAWebIndividualNewChatCappedComposeBarLoadable",
    "WAWebIndividualNewChatMessageCappingLimitUtils",
    "WAWebMiscGatingUtils",
    "WAWebModalManager",
    "WAWebMsgBarDeactivateCommunityMessageBar",
    "WAWebMsgGetters",
    "WAWebNewsletterMembershipUtil",
    "WAWebNewsletterSuspendedMessageBar.react",
    "WAWebNonMemberGroupMsgBar.react",
    "WAWebReachoutTimelockRestrictedComposeBarLoadable",
    "WAWebReachoutTimelockUtils",
    "WAWebSuspendedCommunityMsgBar.react",
    "WAWebSuspendedGroupMsgBar.react",
    "WAWebSuspendedOrTerminatedGroupMsgBarV2.react",
    "WAWebTerminatedCommunityMsgBar",
    "WAWebTerminatedGroupMsgBar.react",
    "WAWebTos",
    "WAWebTosCountryGating",
    "WAWebTosGatedModal.react",
    "WAWebTosGating",
    "WAWebWamEnumChatGatedReason",
    "WAWebWamEnumEntryPoint",
    "react",
    "useWAWebContactValues",
    "useWAWebListener",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useState;
    function p(e) {
      var t,
        n = m(function () {
          return C(e);
        }),
        r = n[0],
        a = n[1],
        i = m(function () {
          return f(e);
        }),
        l = i[0],
        s = i[1],
        u = function () {
          var t = C(e);
          (a(t), t || s(f(e)));
        };
      return (
        (t = o("useWAWebListener")).useListener(e, ["change:canSend"], u),
        t.useListener(
          e.groupMetadata,
          ["change:suspended", "change:terminated", "change:participants"],
          u,
        ),
        t.useListener(
          e.newsletterMetadata,
          ["change:suspended", "change:terminated"],
          u,
        ),
        t.useListener(o("WAWebTos").TosManager, "change", u),
        _(e, r),
        [r, l]
      );
    }
    function _(e, t) {
      var n = r("useWAWebStableCallback")(function () {
        if (o("WAWebTosCountryGating").shouldBlockByCountry(e.contact)) {
          o("WAWebModalManager").ModalManager.open(
            u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: {
                surface: "unknown",
                viewName: "cannot-compose",
              },
              onOK: function () {
                return o("WAWebModalManager").ModalManager.close();
              },
              okText: s._(/*BTDS*/ "OK, got it"),
              children: s._(
                /*BTDS*/ "This business can't chat with phone numbers with your country code.",
              ),
            }),
            { transition: "modal-flow" },
          );
          var t = o("WAWebFrontendChatGetters").getPreviewMessage(e),
            n = t != null ? o("WAWebMsgGetters").getIsSentByMe(t) : !1,
            a = new (o("WAWebGatedChatOpenedWamEvent").GatedChatOpenedWamEvent)(
              {
                chatGatedReason: o("WAWebWamEnumChatGatedReason")
                  .CHAT_GATED_REASON.COUNTRY,
                selfInitiated: n,
              },
            );
          a.commit();
        } else if (o("WAWebTosGating").shouldBlockByTos(e.contact)) {
          o("WAWebModalManager").ModalManager.open(
            u.jsx(r("WAWebTosGatedModal.react"), { contact: e.contact }),
            { transition: "modal-flow" },
          );
          var i = new (o(
            "WAWebGatedChatOpenedWamEvent",
          ).GatedChatOpenedWamEvent)({
            chatGatedReason: o("WAWebWamEnumChatGatedReason").CHAT_GATED_REASON
              .TOS3,
            selfInitiated: !0,
          });
          i.commit();
        } else
          o("WAWebChatGetters").getIsBroadcast(e) &&
            !o("WAWebBizBroadcastTos").isBizBroadcastTosAccepted() &&
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebBizBroadcastTosModalLoadable")
                  .WAWebBizBroadcastTosModalLoadable,
                {
                  entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD,
                  onAccept: function () {
                    return o("WAWebModalManager").ModalManager.close();
                  },
                  onDismiss: function () {
                    return o("WAWebModalManager").ModalManager.close();
                  },
                },
              ),
              { transition: "modal-flow" },
            );
      });
      d(n, [n, t]);
    }
    function f(e) {
      if (o("WAWebChatGetters").getIsBroadcast(e))
        return o("WAWebBizBroadcastTos").isBizBroadcastTosAccepted()
          ? null
          : u.jsx(
              o("WAWebBizBroadcastTosReviewBannerLoadable")
                .WAWebBizBroadcastTosReviewBannerLoadable,
              {},
            );
      var t = e.contact,
        n = e.groupMetadata,
        a = e.isAnnounceGrpRestrict,
        i = e.isReadOnly,
        l = e.mute;
      if (!o("WAWebBotBaseGating").isBotEnabled() && e.id.isBot()) return "";
      if (!o("WAWebBotGating").isFbidBotEnabled() && e.id.isFbidBot())
        return s._(
          /*BTDS*/ "AI is not available for current version. Please update the app.",
        );
      if (o("WAWebChatGetters").getIsNewsletter(e)) {
        var c;
        return (c = e.newsletterMetadata) != null &&
          c.suspended &&
          o("WAWebNewsletterMembershipUtil").iAmOwner(e.newsletterMetadata)
          ? u.jsx(r("WAWebNewsletterSuspendedMessageBar.react"), { chat: e })
          : null;
      }
      return o("WAWebTosCountryGating").shouldBlockByCountry(t)
        ? s._(
            /*BTDS*/ "This business can't chat with phone numbers with your country code.",
          )
        : o("WAWebTosGating").shouldBlockByTos(t)
          ? s._(
              /*BTDS*/ "To chat with {contact}, review and accept WhatsApp's updated terms and privacy policy on your phone.",
              [
                s._param(
                  "contact",
                  o("WAWebFrontendContactGetters").getFormattedName(t),
                ),
              ],
            )
          : o("WAWebTosGating").shouldBlockByBotTos(t)
            ? s._(
                /*BTDS*/ "To chat with {contact}, review and accept WhatsApp's terms and privacy policy on your phone.",
                [
                  s._param(
                    "contact",
                    o("WAWebFrontendContactGetters").getFormattedName(t),
                  ),
                ],
              )
            : o(
                  "WAWebChatGroupUtils",
                ).isIntegrityDeactivatedCommunityAnnouncementGroup(e)
              ? u.jsx(r("WAWebTerminatedCommunityMsgBar"), {})
              : o(
                    "WAWebChatGroupUtils",
                  ).isDeactivatedCommunityAnnouncementGroup(e) && n
                ? u.jsx(r("WAWebMsgBarDeactivateCommunityMessageBar"), {
                    groupMetadata: n,
                  })
                : o(
                      "WAWebChatGroupUtils",
                    ).isSuspendedCommunityAnnouncementGroup(e) &&
                    n != null &&
                    n.participants.iAmMember()
                  ? u.jsx(r("WAWebSuspendedCommunityMsgBar.react"), { chat: e })
                  : o("WAWebChatGroupUtils").isTerminatedGroup(e)
                    ? o("WAWebChatGroupUtils").isSupportGroup(e)
                      ? s._(/*BTDS*/ "This chat has been closed.")
                      : o("WAWebMiscGatingUtils").isGroupSuspendV2Enabled()
                        ? u.jsx(
                            r("WAWebSuspendedOrTerminatedGroupMsgBarV2.react"),
                            { chat: e },
                          )
                        : u.jsx(r("WAWebTerminatedGroupMsgBar.react"), {})
                    : o("WAWebChatGetters").getIsGroup(e) &&
                        !(n != null && n.participants.iAmMember())
                      ? (n == null ? void 0 : n.groupType) ===
                        o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
                        ? s._(/*BTDS*/ "You're no longer a member.")
                        : o("WAWebBlocklistUtils").isRBIForGroupsEnabled()
                          ? u.jsx(r("WAWebNonMemberGroupMsgBar.react"), {
                              chat: e,
                            })
                          : s._(
                              /*BTDS*/ "You can't send messages to this group because you're no longer a member.",
                            )
                      : o("WAWebChatGroupUtils").isSuspendedGroup(e)
                        ? o("WAWebMiscGatingUtils").isGroupSuspendV2Enabled()
                          ? u.jsx(
                              r(
                                "WAWebSuspendedOrTerminatedGroupMsgBarV2.react",
                              ),
                              { chat: e },
                            )
                          : u.jsx(r("WAWebSuspendedGroupMsgBar.react"), {
                              entityId:
                                o(
                                  "WAWebChatGroupUtils",
                                ).shouldIncludeEntityIdInAppealRequest() === !0
                                  ? e.id.user.toString()
                                  : null,
                            })
                        : o("WAWebChatGetters").getIsGroup(e) &&
                            n &&
                            (n == null ? void 0 : n.groupType) ===
                              o("WAWebGroupType").GroupType
                                .LINKED_ANNOUNCEMENT_GROUP &&
                            !(n != null && n.participants.iAmAdmin())
                          ? u.jsx(
                              r("WAWebCommunityAnnouncementsMsgBar.react"),
                              { groupMetadata: n },
                            )
                          : o("WAWebChatGetters").getIsGroup(e) &&
                              !i &&
                              a === !0 &&
                              n
                            ? u.jsx(r("WAWebAnnouncementsOnlyMsgBar.react"), {
                                chat: e,
                                groupMetadata: n,
                                mute: l,
                              })
                            : o("WAWebChatGetters").getIsGroup(e) &&
                                n != null &&
                                n.support
                              ? s._(
                                  /*BTDS*/ "You can't send messages to this group because you're no longer a member.",
                                )
                              : o("WAWebChatGetters").getIsPSA(e)
                                ? u.jsx(h, { contact: t })
                                : o("WAWebChatGetters").getIsIAS(e)
                                  ? u.jsx(y, { contact: t })
                                  : o(
                                        "WAWebBizAiAgentGating",
                                      ).isAiAgentAutoReplyEnabled() &&
                                      o(
                                        "WAWebBizAiAgentStatusUtils",
                                      ).shouldShowAiAgentBlockBar(e)
                                    ? u.jsx(r("WAWebBizAiBlockMsgBar.react"), {
                                        chat: e,
                                      })
                                    : u.jsx(g, { chat: e });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = e.chat,
        n = o("useWAWebContactValues").useContactValues(t.contact.id, [
          o("WAWebFrontendContactGetters").getIsContactBlocked,
        ]),
        a = n[0];
      return o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked() &&
        !o("WAWebReachoutTimelockUtils").canSendMsgWhileTimelocked({
          chat: t,
          contact: t.contact,
        }) &&
        !a
        ? u.jsx(
            o("WAWebReachoutTimelockRestrictedComposeBarLoadable")
              .ReachoutTimelockComposeBarLoadable,
            {},
          )
        : !o(
              "WAWebIndividualNewChatMessageCappingLimitUtils",
            ).canSendMsgWhileCapped({ chat: t, contact: t.contact }) &&
            !a &&
            o("WAWebIndividualNewChatMessageCappingLimitUtils").isUserCapped()
          ? u.jsx(
              o("WAWebIndividualNewChatCappedComposeBarLoadable")
                .IndividualNewChatMessageCappedComposeBarLoadable,
              {},
            )
          : u.jsx(r("WAWebDeleteUnblockMsgBar.react"), { chat: t });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = e.contact,
        n = o("useWAWebContactValues").useContactValues(t.id, [
          o("WAWebFrontendContactGetters").getIsContactBlocked,
        ]),
        r = n[0];
      return r
        ? s._(/*BTDS*/ "You have blocked WhatsApp")
        : s._(/*BTDS*/ "Only WhatsApp can send messages");
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = e.contact,
        n = o("useWAWebContactValues").useContactValues(t.id, [
          o("WAWebFrontendContactGetters").getIsContactBlocked,
        ]),
        r = n[0];
      return r
        ? s._(/*BTDS*/ "You have blocked WhatsApp Surveys")
        : s._(
            /*BTDS*/ "You can block this chat to opt out of receiving messages from WhatsApp Surveys",
          );
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      return o("WAWebChatGetters").getIsBroadcast(e)
        ? !1
        : e.canSend && !e.isSuspendedOrTerminated();
    }
    l.default = p;
  },
  226,
);
