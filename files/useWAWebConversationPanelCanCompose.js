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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(12),
        n;
      t[0] !== e
        ? ((n = function () {
            return S(e);
          }),
          (t[0] = e),
          (t[1] = n))
        : (n = t[1]);
      var r = m(n),
        a = r[0],
        i = r[1],
        l;
      t[2] !== e
        ? ((l = function () {
            return y(e);
          }),
          (t[2] = e),
          (t[3] = l))
        : (l = t[3]);
      var s = m(l),
        u = s[0],
        c = s[1],
        d;
      t[4] !== e
        ? ((d = function () {
            var t = S(e);
            (i(t), t || c(y(e)));
          }),
          (t[4] = e),
          (t[5] = d))
        : (d = t[5]);
      var p = d,
        f;
      (t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = ["change:canSend"]), (t[6] = f))
        : (f = t[6]),
        o("useWAWebListener").useListener(e, f, p));
      var g;
      (t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = [
            "change:suspended",
            "change:terminated",
            "change:participants",
          ]),
          (t[7] = g))
        : (g = t[7]),
        o("useWAWebListener").useListener(e.groupMetadata, g, p));
      var h;
      (t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = ["change:suspended", "change:terminated"]), (t[8] = h))
        : (h = t[8]),
        o("useWAWebListener").useListener(e.newsletterMetadata, h, p),
        o("useWAWebListener").useListener(
          o("WAWebTos").TosManager,
          "change",
          p,
        ),
        _(e, a));
      var C;
      return (
        t[9] !== u || t[10] !== a
          ? ((C = [a, u]), (t[9] = u), (t[10] = a), (t[11] = C))
          : (C = t[11]),
        C
      );
    }
    function _(e, t) {
      var n = o("react-compiler-runtime").c(5),
        a;
      n[0] !== e
        ? ((a = function () {
            if (o("WAWebTosCountryGating").shouldBlockByCountry(e.contact)) {
              o("WAWebModalManager").ModalManager.open(
                u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                  tsNavigationData: {
                    surface: "unknown",
                    viewName: "cannot-compose",
                  },
                  onOK: h,
                  okText: s._(/*BTDS*/ "OK, got it"),
                  children: s._(
                    /*BTDS*/ "This business can't chat with phone numbers with your country code.",
                  ),
                }),
                { transition: "modal-flow" },
              );
              var t = o("WAWebFrontendChatGetters").getPreviewMessage(e),
                n = t != null ? o("WAWebMsgGetters").getIsSentByMe(t) : !1,
                a = new (o(
                  "WAWebGatedChatOpenedWamEvent",
                ).GatedChatOpenedWamEvent)({
                  chatGatedReason: o("WAWebWamEnumChatGatedReason")
                    .CHAT_GATED_REASON.COUNTRY,
                  selfInitiated: n,
                });
              a.commit();
            } else if (o("WAWebTosGating").shouldBlockByTos(e.contact)) {
              o("WAWebModalManager").ModalManager.open(
                u.jsx(r("WAWebTosGatedModal.react"), { contact: e.contact }),
                { transition: "modal-flow" },
              );
              var i = new (o(
                "WAWebGatedChatOpenedWamEvent",
              ).GatedChatOpenedWamEvent)({
                chatGatedReason: o("WAWebWamEnumChatGatedReason")
                  .CHAT_GATED_REASON.TOS3,
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
                      entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT
                        .BB_THREAD,
                      onAccept: g,
                      onDismiss: f,
                    },
                  ),
                  { transition: "modal-flow" },
                );
          }),
          (n[0] = e),
          (n[1] = a))
        : (a = n[1]);
      var i = r("useWAWebStableCallback")(a),
        l;
      (n[2] !== t || n[3] !== i
        ? ((l = [i, t]), (n[2] = t), (n[3] = i), (n[4] = l))
        : (l = n[4]),
        d(i, l));
    }
    function f() {
      return o("WAWebModalManager").ModalManager.close();
    }
    function g() {
      return o("WAWebModalManager").ModalManager.close();
    }
    function h() {
      return o("WAWebModalManager").ModalManager.close();
    }
    function y(e) {
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
                                ? u.jsx(b, { contact: t })
                                : o("WAWebChatGetters").getIsIAS(e)
                                  ? u.jsx(v, { contact: t })
                                  : o(
                                        "WAWebBizAiAgentGating",
                                      ).isAiAgentAutoReplyEnabled() &&
                                      o(
                                        "WAWebBizAiAgentStatusUtils",
                                      ).shouldShowAiAgentBlockBar(e)
                                    ? u.jsx(r("WAWebBizAiBlockMsgBar.react"), {
                                        chat: e,
                                      })
                                    : u.jsx(C, { chat: e });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.chat,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [o("WAWebFrontendContactGetters").getIsContactBlocked]),
          (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebContactValues").useContactValues(n.contact.id, a),
        l = i[0];
      if (
        o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked() &&
        !o("WAWebReachoutTimelockUtils").canSendMsgWhileTimelocked({
          chat: n,
          contact: n.contact,
        }) &&
        !l
      ) {
        var s;
        return (
          t[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = u.jsx(
                o("WAWebReachoutTimelockRestrictedComposeBarLoadable")
                  .ReachoutTimelockComposeBarLoadable,
                {},
              )),
              (t[1] = s))
            : (s = t[1]),
          s
        );
      } else if (
        !o(
          "WAWebIndividualNewChatMessageCappingLimitUtils",
        ).canSendMsgWhileCapped({ chat: n, contact: n.contact }) &&
        !l &&
        o("WAWebIndividualNewChatMessageCappingLimitUtils").isUserCapped()
      ) {
        var c;
        return (
          t[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((c = u.jsx(
                o("WAWebIndividualNewChatCappedComposeBarLoadable")
                  .IndividualNewChatMessageCappedComposeBarLoadable,
                {},
              )),
              (t[2] = c))
            : (c = t[2]),
          c
        );
      }
      var d;
      return (
        t[3] !== n
          ? ((d = u.jsx(r("WAWebDeleteUnblockMsgBar.react"), { chat: n })),
            (t[3] = n),
            (t[4] = d))
          : (d = t[4]),
        d
      );
    }
    function b(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.contact,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = [o("WAWebFrontendContactGetters").getIsContactBlocked]),
          (t[0] = r))
        : (r = t[0]);
      var a = o("useWAWebContactValues").useContactValues(n.id, r),
        i = a[0];
      if (i) {
        var l;
        return (
          t[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = s._(/*BTDS*/ "You have blocked WhatsApp")), (t[1] = l))
            : (l = t[1]),
          l
        );
      }
      var u;
      return (
        t[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = s._(/*BTDS*/ "Only WhatsApp can send messages")), (t[2] = u))
          : (u = t[2]),
        u
      );
    }
    function v(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.contact,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = [o("WAWebFrontendContactGetters").getIsContactBlocked]),
          (t[0] = r))
        : (r = t[0]);
      var a = o("useWAWebContactValues").useContactValues(n.id, r),
        i = a[0];
      if (i) {
        var l;
        return (
          t[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = s._(/*BTDS*/ "You have blocked WhatsApp Surveys")),
              (t[1] = l))
            : (l = t[1]),
          l
        );
      }
      var u;
      return (
        t[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = s._(
              /*BTDS*/ "You can block this chat to opt out of receiving messages from WhatsApp Surveys",
            )),
            (t[2] = u))
          : (u = t[2]),
        u
      );
    }
    function S(e) {
      return o("WAWebChatGetters").getIsBroadcast(e)
        ? !1
        : e.canSend && !e.isSuspendedOrTerminated();
    }
    l.default = p;
  },
  226,
);
