__d(
  "WAWebConversationSpam.react",
  [
    "fbt",
    "WAWebBlockContactUtils",
    "WAWebBlockContants",
    "WAWebBlocklistCollection",
    "WAWebBox.react",
    "WAWebBusinessProfileTypes",
    "WAWebButton.react",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebCheckmarkIcon.react",
    "WAWebClickableLink.react",
    "WAWebCmd",
    "WAWebContactGetters",
    "WAWebConversationNewBanner.react",
    "WAWebExitIcon.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFrontendChatGetters",
    "WAWebFrontendContactGetters",
    "WAWebGroupHistoryBundleInfoContext",
    "WAWebGroupSafetyToolsModal.react",
    "WAWebLeaveCommunityModal.react",
    "WAWebMiscGatingUtils",
    "WAWebModalManager",
    "WAWebReportContactPopup.react",
    "WAWebReportSpamPopup.react",
    "WAWebSendSpamChatAction",
    "WAWebSettingsBlockedIcon.react",
    "WAWebSpamConstants",
    "WAWebSuspendedGroupUtils",
    "WAWebThumbsDownIcon.react",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "WAWebXIcon.react",
    "WDSText.react",
    "WDSTextualLink.react",
    "fbs",
    "react",
    "useWAWebChatValues",
    "useWAWebContactValues",
    "useWAWebForceUpdate",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.use,
      d = o("WAWebFaqUrl").getGroupHistoryFAQUrl(),
      m = {
        link: { display: "xt0psk2", $$css: !0 },
        groupHistorySecondaryText: { paddingInlineEnd: "x1uc92m", $$css: !0 },
        grayLighterColor: { color: "xpteuj8", $$css: !0 },
      };
    function p(e) {
      "use no forget";
      var t,
        n,
        a,
        i = e.chat,
        l = e.onClickDismissSpam,
        p = e.onClickNotSpam,
        f = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        g = o("useWAWebChatValues").useChatValues(i.id, [
          (t = o("WAWebChatGetters")).getId,
          t.getIsPSA,
          t.getIsIAS,
          (n = o("WAWebFrontendChatGetters")).getShouldAppearInList,
          n.getTrusted,
          t.getIsGroup,
          n.getContact,
          n.getGroupMetadata,
        ]),
        h = g[0],
        y = g[1],
        C = g[2],
        b = g[3],
        v = g[4],
        S = g[5],
        R = g[6],
        L = g[7],
        E = o("useWAWebContactValues").useContactValues(i.contact.id, [
          (a = o("WAWebContactGetters")).getId,
          a.getIsBusiness,
          a.getIsSupportAccount,
          a.getVerifiedLevel,
          o("WAWebFrontendContactGetters").getFormattedName,
          a.getIsMe,
          o("WAWebFrontendContactGetters").getBusinessProfile,
          o("WAWebFrontendContactGetters").getIsMyContact,
        ]),
        k = E[0],
        I = E[1],
        T = E[2],
        D = E[3],
        x = E[4],
        $ = E[5],
        P = E[6],
        N = E[7];
      o("useWAWebListener").useListener(
        o("WAWebBlocklistCollection").BlocklistCollection,
        ["add", "remove", "reset"],
        f,
      );
      var M = c(
          o("WAWebGroupHistoryBundleInfoContext")
            .WAWebGroupHistoryBundleInfoContext,
        ),
        w = M.earliestVisibleBundleSender,
        A = function () {
          (o("WAWebSendSpamChatAction").sendReport({
            chat: i,
            spamFlow:
              S === !0
                ? o("WAWebSpamConstants").SpamFlow.GroupSpamBannerReport
                : o("WAWebSpamConstants").SpamFlow.OneToOneChatSpamBannerReport,
          }),
            o("WAWebModalManager").ModalManager.close());
        },
        F = function () {
          (o("WAWebSendSpamChatAction").sendSpamExitClear(
            i,
            o("WAWebSpamConstants").SpamFlow.GroupSpamBannerReport,
          ),
            o("WAWebModalManager").ModalManager.close());
        },
        O = function () {
          var e = L == null ? void 0 : L.getParentGroupChat();
          e != null && o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(i)
            ? o("WAWebModalManager").ModalManager.open(
                u.jsx(r("WAWebLeaveCommunityModal.react"), {
                  chat: e,
                  enableDeactivateIfSuperAdmin: !0,
                  spamFlow:
                    o("WAWebSpamConstants").SpamFlow.GroupSpamBannerReport,
                }),
              )
            : o(
                  "WAWebChatGroupUtils",
                ).shouldShowLeaveAndReportGroupModalForChat(i)
              ? o("WAWebSuspendedGroupUtils").openLeaveAndReportGroupModal(
                  i,
                  o("WAWebSpamConstants").SpamFlow.GroupSpamBannerReport,
                )
              : o("WAWebCmd").Cmd.deleteOrExitChat(i);
        },
        B = function () {
          if (!S) {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(r("WAWebReportContactPopup.react"), {
                chat: i,
                spamFlow:
                  o("WAWebSpamConstants").SpamFlow.OneToOneChatSpamBannerReport,
              }),
            );
            return;
          }
          o("WAWebModalManager").ModalManager.open(
            u.jsx(r("WAWebReportSpamPopup.react"), {
              isGroupChat: !0,
              isMessage: !1,
              onCancel: o("WAWebModalManager").closeModalManager,
              onReport: A,
              onReportExitClear: F,
            }),
          );
        },
        W = function () {
          o("WAWebGroupSafetyToolsModal.react").displayGroupSafetyToolsModal();
        };
      if (y || C || !b || v || T || $) return null;
      var q = o("WAWebBlocklistCollection").BlocklistCollection.get(h),
        U = o("WAWebButton.react").WAWebButtonSecondary,
        V = o("WAWebButton.react").WAWebButtonSecondaryDestructive,
        H = s._(/*BTDS*/ "Stay"),
        G = u.jsxs(
          U,
          {
            onClick: p,
            testid: void 0,
            children: [
              u.jsx("span", {
                className:
                  "x1rg5ohu xt8t1vi x1xc408v x129tdwq x15urzxu xjbqb8w x5see2y x16hg961 x1pzews7 x1x3agtl x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1whkhu0 x3emv5x x1ydeqjr xyg86qh x1120s5i",
                children: u.jsx(o("WAWebCheckmarkIcon.react").CheckmarkIcon, {
                  height: 12,
                  width: 14,
                }),
              }),
              H,
            ],
          },
          "not_spam",
        ),
        z = u.jsx(
          r("WAWebUnstyledButton.react"),
          {
            onClick: l,
            role: "button",
            testid: void 0,
            xstyle: [
              o("WAWebUISpacing").uiMargin.topAuto,
              o("WAWebUISpacing").uiMargin.bottomAuto,
            ],
            children: u.jsx(o("WAWebXIcon.react").XIcon, {
              iconXstyle: m.grayLighterColor,
              height: 24,
              width: 24,
            }),
          },
          "dismiss_spam",
        ),
        j = u.jsx(
          V,
          {
            icon: o("WAWebThumbsDownIcon.react").ThumbsDownIcon,
            onClick: B,
            testid: void 0,
            children: s._(/*BTDS*/ "Report"),
          },
          "report_spam",
        ),
        K = u.jsx(
          V,
          {
            icon: o("WAWebExitIcon.react").ExitIcon,
            onClick: O,
            testid: void 0,
            children: _(i),
          },
          "exit_group",
        ),
        Q,
        X,
        Y = [];
      S
        ? (w != null
            ? (Q = s._(
                /*BTDS*/ "Message history sent by {group_history_bundle_sender}, someone not in your contacts. {=m4}{link_to_group_history_faq}",
                [
                  s._param("group_history_bundle_sender", w),
                  s._param(
                    "link_to_group_history_faq",
                    u.jsx(r("WDSTextualLink.react"), {
                      href: d,
                      children: s._(/*BTDS*/ "Learn more"),
                    }),
                  ),
                  s._implicitParam(
                    "=m4",
                    u.jsx(r("WDSText.react"), {
                      xstyle: m.groupHistorySecondaryText,
                      colorName: "contentDeemphasized",
                      type: "Body1",
                      children: s._(
                        /*BTDS*/ "History may not always be accurate or complete.",
                      ),
                    }),
                  ),
                ],
              ))
            : (Q = s._(
                /*BTDS*/ "You were added by someone not in your contacts. See {safety_tools}.",
                [
                  s._param(
                    "safety_tools",
                    u.jsx(r("WAWebClickableLink.react"), {
                      onClick: W,
                      xstyle: m.link,
                      children: r("fbs")._(/*BTDS*/ "safety tools"),
                    }),
                  ),
                ],
              )),
          Y.push(j),
          Y.push(K),
          Y.push(G))
        : ((Q = u.jsx(r("WAWebBox.react"), {
            xstyle: o("WAWebUISpacing").uiPadding.end15,
            children: s._(
              /*BTDS*/ "The sender won't see if you read their messages until you reply or add them as a contact.",
            ),
          })),
          I &&
            (D !== o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH
              ? (Q = s._(
                  /*BTDS*/ "This business won't see if you read their messages until you reply or add them as a contact.",
                ))
              : D === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH
                ? (Q = o("WAWebMiscGatingUtils").isBlueStringsEnabled()
                    ? s._(
                        /*BTDS*/ "This verified account is not in your contact list.",
                      )
                    : s._(
                        /*BTDS*/ "This official business account is not in your contact list.",
                      ))
                : (Q = s._(
                    /*BTDS*/ "This business account is not in your contact list.",
                  ))),
          q
            ? (X = u.jsx(
                U,
                {
                  grow: 1,
                  onClick: function () {
                    return o("WAWebBlockContactUtils").handleUnblock(
                      i.contact,
                      I
                        ? o("WAWebBlockContants").BlockEntryPoint
                            .BizSpamBannerBlock
                        : o("WAWebBlockContants").BlockEntryPoint
                            .OneToOneOldSpamBannerBlock,
                    );
                  },
                  testid: void 0,
                  children: r("WAWebFbtCommon")("Unblock"),
                },
                "unblock",
              ))
            : (X = u.jsx(
                V,
                {
                  grow: 1,
                  icon: o("WAWebSettingsBlockedIcon.react").SettingsBlockedIcon,
                  onClick: function () {
                    return o("WAWebBlockContactUtils").handleBlock(
                      i,
                      I
                        ? o("WAWebBlockContants").BlockEntryPoint
                            .BizSpamBannerBlock
                        : o("WAWebBlockContants").BlockEntryPoint
                            .OneToOneOldSpamBannerBlock,
                    );
                  },
                  testid: void 0,
                  children: r("WAWebFbtCommon")("Block"),
                },
                "block",
              )),
          Y.push(j, X, G));
      var J;
      return (
        S ? (J = [K, G]) : I ? (J = [X, G]) : (J = [X, z]),
        u.jsx(r("WAWebConversationNewBanner.react"), {
          buttons: J,
          primaryText: Q,
        })
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      return o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(e)
        ? r("WAWebFbtCommon")("Exit Community")
        : r("WAWebFbtCommon")("Exit Group");
    }
    l.default = p;
  },
  226,
);
