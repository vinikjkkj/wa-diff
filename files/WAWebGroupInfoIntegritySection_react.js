__d(
  "WAWebGroupInfoIntegritySection.react",
  [
    "fbt",
    "WAWebBlocklistUtils",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebChatInfoDrawerSection.react",
    "WAWebCheckmarkMediumIcon.react",
    "WAWebCmd",
    "WAWebCommunityRemoveSubgroup",
    "WAWebDrawerButton.react",
    "WAWebDrawerButtonRefreshed.react",
    "WAWebExitGroupAction",
    "WAWebExitIcon.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebFrontendChatGetters",
    "WAWebGroupAddPrivacyTipBanner.react",
    "WAWebGroupIntegrityUtils",
    "WAWebGroupMetadataCollection",
    "WAWebIconPopup.react",
    "WAWebLeaveCommunityModal.react",
    "WAWebMiscGatingUtils",
    "WAWebModalManager",
    "WAWebPrivacyTipActionWamEvent",
    "WAWebQuickPromotionGating",
    "WAWebReportGroupPopup.react",
    "WAWebReportSpamPopup.react",
    "WAWebSendSpamChatAction",
    "WAWebSpamConstants",
    "WAWebSuspendedGroupUtils",
    "WAWebThumbsDownIcon.react",
    "WAWebUserPrefsGeneral",
    "WAWebWamEnumPrivacyTipActionType",
    "WDSIconIcLogout.react",
    "WDSIconIcThumbDown.react",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebChatValues",
    "useWAWebCommunitySubgroups",
    "useWAWebEventTargetValue",
    "useWAWebIAmCommunityAdmin",
    "useWAWebModelValues",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useState;
    function p(e) {
      var t,
        n = e.chat,
        r = e.showDeleteOrExit,
        a = r === void 0 ? !0 : r,
        i =
          (t = o("useWAWebModelValues").useOptionalModelValues(
            n.groupMetadata,
            ["parentGroup", "participants"],
          )) != null
            ? t
            : {},
        l = i.parentGroup,
        s = i.participants,
        c =
          (s == null ? void 0 : s.iAmAdmin()) &&
          o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(n),
        d = a ? u.jsx(h, { chat: n, isRefresh: !0 }) : null,
        m = o("WAWebChatGroupUtils").isTerminatedGroup(n)
          ? null
          : u.jsx(g, { chat: n, showAdditionalAction: !c, isRefresh: !0 }),
        p;
      return (
        o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(n) ||
          l == null ||
          (p = u.jsx(y, { chat: n, parentGroup: l, isRefresh: !0 })),
        u.jsxs(
          o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerButtonsSection,
          { children: [p, d, m] },
        )
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = e.isExit;
      d(function () {
        new (o("WAWebPrivacyTipActionWamEvent").PrivacyTipActionWamEvent)({
          privacyTipActionType: o("WAWebWamEnumPrivacyTipActionType")
            .PRIVACY_TIP_ACTION_TYPE.VIEW,
        }).commit();
      }, []);
      var n = function () {
          (new (o("WAWebPrivacyTipActionWamEvent").PrivacyTipActionWamEvent)({
            privacyTipActionType: o("WAWebWamEnumPrivacyTipActionType")
              .PRIVACY_TIP_ACTION_TYPE.CLICK_PRIVACY_TIP,
          }).commit(),
            o("WAWebModalManager").ModalManager.close());
        },
        a = function () {
          new (o("WAWebPrivacyTipActionWamEvent").PrivacyTipActionWamEvent)({
            privacyTipActionType: o("WAWebWamEnumPrivacyTipActionType")
              .PRIVACY_TIP_ACTION_TYPE.CLICK_OK,
          }).commit();
        },
        i = function () {
          (new (o("WAWebPrivacyTipActionWamEvent").PrivacyTipActionWamEvent)({
            privacyTipActionType: o("WAWebWamEnumPrivacyTipActionType")
              .PRIVACY_TIP_ACTION_TYPE.CLICK_OUTSIDE,
          }).commit(),
            o("WAWebModalManager").ModalManager.close());
        };
      return u.jsx(r("WAWebIconPopup.react"), {
        icon: o("WAWebCheckmarkMediumIcon.react").CheckmarkMediumIcon,
        title: s._(/*BTDS*/ "Thank you for reporting"),
        description: u.jsx(u.Fragment, {
          children:
            t === !0
              ? s._(
                  /*BTDS*/ "You're no longer a member of this group. Reports are sent to WhatsApp. This helps keep WhatsApp safe for everyone.",
                )
              : s._(
                  /*BTDS*/ "Reports are sent to WhatsApp. This helps keep WhatsApp safe for everyone.",
                ),
        }),
        extraContent: u.jsx(o("WAWebFlex.react").FlexRow, {
          paddingTop: 40,
          children: u.jsx(r("WAWebGroupAddPrivacyTipBanner.react"), {
            onAction: n,
          }),
        }),
        onPrimaryActionClick: a,
        onOverlayClick: i,
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.isExit;
      if (o("WAWebQuickPromotionGating").groupsPrivacyTipsEnabled()) {
        var n = o("WAWebUserPrefsGeneral").getUserPrivacySettings();
        n.groupAdd === "all" &&
          o("WAWebModalManager").ModalManager.open(u.jsx(_, { isExit: t }));
      }
    }
    function g(e) {
      var t,
        a = e.chat,
        i = e.isRefresh,
        l = e.showAdditionalAction,
        c =
          o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(a) &&
          !o(
            "WAWebChatGroupUtils",
          ).isIntegrityDeactivatedCommunityAnnouncementGroup(a) &&
          !o("WAWebChatGroupUtils").isTerminatedGroup(a) &&
          ((t = a.groupMetadata) == null
            ? void 0
            : t.participants.iAmMember()) === !0,
        d = function () {
          var e = function () {
            (o("WAWebSendSpamChatAction").sendReport({
              chat: a,
              spamFlow: o("WAWebSpamConstants").SpamFlow.GroupInfoReport,
            }),
              o("WAWebModalManager").ModalManager.close(),
              f({ isExit: !1 }));
          };
          function t() {
            return i.apply(this, arguments);
          }
          function i() {
            return (
              (i = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                (yield o("WAWebSendSpamChatAction").sendReport({
                  chat: a,
                  spamFlow: o("WAWebSpamConstants").SpamFlow.GroupInfoReport,
                }),
                  o("WAWebExitGroupAction").sendExitGroup(a),
                  o("WAWebModalManager").ModalManager.close(),
                  f({ isExit: !0 }));
              })),
              i.apply(this, arguments)
            );
          }
          var s = function () {
            var e,
              t =
                (e = a.groupMetadata) == null ? void 0 : e.getParentGroupChat();
            c && t
              ? o("WAWebSendSpamChatAction")
                  .sendReport({
                    chat: a,
                    spamFlow: o("WAWebSpamConstants").SpamFlow.GroupInfoReport,
                  })
                  .then(function () {
                    o("WAWebModalManager").ModalManager.open(
                      u.jsx(r("WAWebLeaveCommunityModal.react"), { chat: t }),
                      { transition: "modal-flow" },
                    );
                  })
              : (o("WAWebSendSpamChatAction").sendSpamExitClear(
                  a,
                  o("WAWebSpamConstants").SpamFlow.GroupInfoReport,
                ),
                o("WAWebModalManager").ModalManager.close(),
                f({ isExit: !0 }));
          };
          o("WAWebChatGetters").getIsGroup(a) &&
          !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(a) &&
          o("WAWebBlocklistUtils").isRBIForGroupsEnabled()
            ? o("WAWebModalManager").ModalManager.open(
                u.jsx(r("WAWebReportGroupPopup.react"), {
                  onReportAndLeave: t,
                  onReport: e,
                  chat: a,
                }),
                { transition: "modal-flow" },
              )
            : o("WAWebModalManager").ModalManager.open(
                u.jsx(r("WAWebReportSpamPopup.react"), {
                  isMessage: !1,
                  isGroupChat: !0,
                  isCommunityAnnouncementGroup: c,
                  showAdditionalActionCheckbox: l,
                  onReport: e,
                  onReportExitClear: s,
                  onCancel: function () {
                    return o("WAWebModalManager").ModalManager.close();
                  },
                }),
              );
        },
        m = s._(/*BTDS*/ "Report announcements"),
        p = s._(/*BTDS*/ "Report group"),
        _ = c ? m : p;
      return i === !0
        ? u.jsx(r("WAWebDrawerButtonRefreshed.react"), {
            testid: void 0,
            danger: !0,
            icon: u.jsx(r("WDSIconIcThumbDown.react"), {}),
            onClick: d,
            children: _,
          })
        : u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
            testid: void 0,
            color: "danger",
            icon: u.jsx(o("WAWebThumbsDownIcon.react").ThumbsDownIcon, {}),
            theme: "chat-info",
            onClick: d,
            children: _,
          });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = e.chat,
        n = e.isRefresh,
        a = o("useWAWebChatValues").useChatValues(t.id, [
          o("WAWebChatGetters").getIsReadOnly,
          o("WAWebChatGetters").getIsNewsletter,
          o("WAWebChatGetters").getIsUser,
          o("WAWebFrontendChatGetters").getGroupMetadata,
        ]),
        i = a[0],
        l = a[1],
        c = a[2],
        d = a[3],
        m = function () {
          if (
            o("WAWebChatGroupUtils").shouldShowLeaveAndReportGroupModalForChat(
              t,
            )
          )
            o("WAWebSuspendedGroupUtils").openLeaveAndReportGroupModal(
              t,
              o("WAWebSpamConstants").SpamFlow.GroupInfoLeaveReportUpsell,
            );
          else {
            var e = d == null ? void 0 : d.getParentGroupChat();
            e != null &&
            o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(t)
              ? o("WAWebModalManager").ModalManager.open(
                  u.jsx(r("WAWebLeaveCommunityModal.react"), { chat: e }),
                )
              : o("WAWebCmd").Cmd.deleteOrExitChat(t);
          }
        },
        p = function () {
          o("WAWebSuspendedGroupUtils").openExitAndDeleteGroupModal(t);
        },
        _,
        f = m;
      return (
        i
          ? (_ = s._(/*BTDS*/ "Delete group"))
          : !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(t) &&
              o("WAWebChatGroupUtils").isSuspendedGroup(t) &&
              o("WAWebMiscGatingUtils").isGroupSuspendV2Enabled()
            ? ((_ = s._(/*BTDS*/ "Exit group and delete")), (f = p))
            : o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(t)
              ? (_ = r("WAWebFbtCommon")("Exit Community"))
              : (_ = o("WAWebGroupIntegrityUtils").getLeaveGroupString(t)),
        n === !0
          ? u.jsx(r("WAWebDrawerButtonRefreshed.react"), {
              testid: void 0,
              icon: u.jsx(r("WDSIconIcLogout.react"), { directional: !0 }),
              danger: !0,
              onClick: f,
              children: _,
            })
          : u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
              testid: void 0,
              icon: u.jsx(o("WAWebExitIcon.react").ExitIcon, {
                directional: !0,
              }),
              color: "danger",
              theme: "chat-info",
              onClick: f,
              children: _,
            })
      );
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = e.chat,
        n = e.isRefresh,
        a = e.parentGroup,
        i = r("useWAWebUnmountSignal")(),
        l = o("useWAWebModelValues").useModelValues(t, [
          "groupMetadata",
          "isReadOnly",
          "id",
          "formattedTitle",
        ]),
        c = l.formattedTitle,
        d = l.groupMetadata,
        p = l.id,
        _ = l.isReadOnly,
        f = r("WAWebGroupMetadataCollection").get(a.toString()),
        g = r("useWAWebIAmCommunityAdmin")(f),
        h = !!r("useWAWebEventTargetValue")(
          d == null ? void 0 : d.participants,
          ["bulk_add", "bulk_remove"],
          function () {
            return d == null ? void 0 : d.participants.iAmAdmin();
          },
        ),
        y = r("useWAWebCommunitySubgroups")(f),
        C = y.joinedSubgroups,
        b = y.unjoinedSubgroups,
        v = m(!1),
        S = v[0],
        R = v[1];
      if (_ || C == null || b == null || (!g && !h)) return null;
      var L = function () {
          S ||
            i.aborted ||
            (o("WAWebCommunityRemoveSubgroup").handleRemoveSubgroup({
              parentId: a,
              removedSubgroupWid: p,
              removedSubgroupTitle: c,
              setLoading: R,
              iAmCommunityAdmin: g,
            }),
            i.aborted);
        },
        E = s._(/*BTDS*/ "Remove from community"),
        k = "li-remove-group-from-community",
        I = function () {
          L();
        };
      return n === !0
        ? u.jsx(r("WAWebDrawerButtonRefreshed.react"), {
            testid: void 0,
            icon: u.jsx(r("WDSIconIcLogout.react"), { directional: !0 }),
            disabled: S,
            danger: !0,
            onClick: I,
            children: E,
          })
        : u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
            testid: void 0,
            icon: u.jsx(o("WAWebExitIcon.react").ExitIcon, { directional: !0 }),
            disabled: S,
            color: "danger",
            theme: "chat-info",
            onClick: I,
            children: E,
          });
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
