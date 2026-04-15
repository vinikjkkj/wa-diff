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
    "react-compiler-runtime",
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
        n = o("react-compiler-runtime").c(16),
        r = e.chat,
        a = e.showDeleteOrExit,
        i = a === void 0 ? !0 : a,
        l =
          (t = o("useWAWebModelValues").useOptionalModelValues(
            r.groupMetadata,
            ["parentGroup", "participants"],
          )) != null
            ? t
            : {},
        s = l.parentGroup,
        c = l.participants,
        d;
      n[0] !== r || n[1] !== c
        ? ((d =
            (c == null ? void 0 : c.iAmAdmin()) &&
            o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(r)),
          (n[0] = r),
          (n[1] = c),
          (n[2] = d))
        : (d = n[2]);
      var m = d,
        p;
      n[3] !== r || n[4] !== i
        ? ((p = i ? u.jsx(S, { chat: r, isRefresh: !0 }) : null),
          (n[3] = r),
          (n[4] = i),
          (n[5] = p))
        : (p = n[5]);
      var _ = p,
        f;
      n[6] !== r || n[7] !== m
        ? ((f = o("WAWebChatGroupUtils").isTerminatedGroup(r)
            ? null
            : u.jsx(b, { chat: r, showAdditionalAction: !m, isRefresh: !0 })),
          (n[6] = r),
          (n[7] = m),
          (n[8] = f))
        : (f = n[8]);
      var g = f,
        h;
      if (
        !(o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(r) || s == null)
      ) {
        var y;
        (n[9] !== r || n[10] !== s
          ? ((y = u.jsx(R, { chat: r, parentGroup: s, isRefresh: !0 })),
            (n[9] = r),
            (n[10] = s),
            (n[11] = y))
          : (y = n[11]),
          (h = y));
      }
      var C;
      return (
        n[12] !== _ || n[13] !== g || n[14] !== h
          ? ((C = u.jsxs(
              o("WAWebChatInfoDrawerSection.react")
                .ChatInfoDrawerButtonsSection,
              { children: [h, _, g] },
            )),
            (n[12] = _),
            (n[13] = g),
            (n[14] = h),
            (n[15] = C))
          : (C = n[15]),
        C
      );
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.isExit,
        a;
      (t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = []), (t[0] = a))
        : (a = t[0]),
        d(y, a));
      var i = h,
        l = g,
        c = f,
        m;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = s._(/*BTDS*/ "Thank you for reporting")), (t[1] = m))
        : (m = t[1]);
      var p;
      t[2] !== n
        ? ((p = u.jsx(u.Fragment, {
            children:
              n === !0
                ? s._(
                    /*BTDS*/ "You're no longer a member of this group. Reports are sent to WhatsApp. This helps keep WhatsApp safe for everyone.",
                  )
                : s._(
                    /*BTDS*/ "Reports are sent to WhatsApp. This helps keep WhatsApp safe for everyone.",
                  ),
          })),
          (t[2] = n),
          (t[3] = p))
        : (p = t[3]);
      var _;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = u.jsx(o("WAWebFlex.react").FlexRow, {
            paddingTop: 40,
            children: u.jsx(r("WAWebGroupAddPrivacyTipBanner.react"), {
              onAction: i,
            }),
          })),
          (t[4] = _))
        : (_ = t[4]);
      var C;
      return (
        t[5] !== p
          ? ((C = u.jsx(r("WAWebIconPopup.react"), {
              icon: o("WAWebCheckmarkMediumIcon.react").CheckmarkMediumIcon,
              title: m,
              description: p,
              extraContent: _,
              onPrimaryActionClick: l,
              onOverlayClick: c,
            })),
            (t[5] = p),
            (t[6] = C))
          : (C = t[6]),
        C
      );
    }
    function f() {
      (new (o("WAWebPrivacyTipActionWamEvent").PrivacyTipActionWamEvent)({
        privacyTipActionType: o("WAWebWamEnumPrivacyTipActionType")
          .PRIVACY_TIP_ACTION_TYPE.CLICK_OUTSIDE,
      }).commit(),
        o("WAWebModalManager").ModalManager.close());
    }
    function g() {
      new (o("WAWebPrivacyTipActionWamEvent").PrivacyTipActionWamEvent)({
        privacyTipActionType: o("WAWebWamEnumPrivacyTipActionType")
          .PRIVACY_TIP_ACTION_TYPE.CLICK_OK,
      }).commit();
    }
    function h() {
      (new (o("WAWebPrivacyTipActionWamEvent").PrivacyTipActionWamEvent)({
        privacyTipActionType: o("WAWebWamEnumPrivacyTipActionType")
          .PRIVACY_TIP_ACTION_TYPE.CLICK_PRIVACY_TIP,
      }).commit(),
        o("WAWebModalManager").ModalManager.close());
    }
    function y() {
      new (o("WAWebPrivacyTipActionWamEvent").PrivacyTipActionWamEvent)({
        privacyTipActionType: o("WAWebWamEnumPrivacyTipActionType")
          .PRIVACY_TIP_ACTION_TYPE.VIEW,
      }).commit();
    }
    function C(e) {
      var t = e.isExit;
      if (o("WAWebQuickPromotionGating").groupsPrivacyTipsEnabled()) {
        var n = o("WAWebUserPrefsGeneral").getUserPrivacySettings();
        n.groupAdd === "all" &&
          o("WAWebModalManager").ModalManager.open(u.jsx(_, { isExit: t }));
      }
    }
    function b(e) {
      var t = o("react-compiler-runtime").c(12),
        a = e.chat,
        i = e.isRefresh,
        l = e.showAdditionalAction,
        c;
      if (t[0] !== a) {
        var d;
        ((c =
          o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(a) &&
          !o(
            "WAWebChatGroupUtils",
          ).isIntegrityDeactivatedCommunityAnnouncementGroup(a) &&
          !o("WAWebChatGroupUtils").isTerminatedGroup(a) &&
          ((d = a.groupMetadata) == null
            ? void 0
            : d.participants.iAmMember()) === !0),
          (t[0] = a),
          (t[1] = c));
      } else c = t[1];
      var m = c,
        p;
      t[2] !== a || t[3] !== m || t[4] !== l
        ? ((p = function () {
            var e = function () {
                (o("WAWebSendSpamChatAction").sendReport({
                  chat: a,
                  spamFlow: o("WAWebSpamConstants").SpamFlow.GroupInfoReport,
                }),
                  o("WAWebModalManager").ModalManager.close(),
                  C({ isExit: !1 }));
              },
              t = (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    (yield o("WAWebSendSpamChatAction").sendReport({
                      chat: a,
                      spamFlow:
                        o("WAWebSpamConstants").SpamFlow.GroupInfoReport,
                    }),
                      o("WAWebExitGroupAction").sendExitGroup(a),
                      o("WAWebModalManager").ModalManager.close(),
                      C({ isExit: !0 }));
                  },
                );
                function t() {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
              i = function () {
                var e,
                  t =
                    (e = a.groupMetadata) == null
                      ? void 0
                      : e.getParentGroupChat();
                m && t
                  ? o("WAWebSendSpamChatAction")
                      .sendReport({
                        chat: a,
                        spamFlow:
                          o("WAWebSpamConstants").SpamFlow.GroupInfoReport,
                      })
                      .then(function () {
                        o("WAWebModalManager").ModalManager.open(
                          u.jsx(r("WAWebLeaveCommunityModal.react"), {
                            chat: t,
                          }),
                          { transition: "modal-flow" },
                        );
                      })
                  : (o("WAWebSendSpamChatAction").sendSpamExitClear(
                      a,
                      o("WAWebSpamConstants").SpamFlow.GroupInfoReport,
                    ),
                    o("WAWebModalManager").ModalManager.close(),
                    C({ isExit: !0 }));
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
                    isCommunityAnnouncementGroup: m,
                    showAdditionalActionCheckbox: l,
                    onReport: e,
                    onReportExitClear: i,
                    onCancel: v,
                  }),
                );
          }),
          (t[2] = a),
          (t[3] = m),
          (t[4] = l),
          (t[5] = p))
        : (p = t[5]);
      var _ = p,
        f;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = s._(/*BTDS*/ "Report announcements")), (t[6] = f))
        : (f = t[6]);
      var g = f,
        h;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = s._(/*BTDS*/ "Report group")), (t[7] = h))
        : (h = t[7]);
      var y = h,
        b = m ? g : y,
        S;
      return (
        t[8] !== b || t[9] !== _ || t[10] !== i
          ? ((S =
              i === !0
                ? u.jsx(r("WAWebDrawerButtonRefreshed.react"), {
                    testid: void 0,
                    danger: !0,
                    icon: u.jsx(r("WDSIconIcThumbDown.react"), {}),
                    onClick: _,
                    children: b,
                  })
                : u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
                    testid: void 0,
                    color: "danger",
                    icon: u.jsx(
                      o("WAWebThumbsDownIcon.react").ThumbsDownIcon,
                      {},
                    ),
                    theme: "chat-info",
                    onClick: _,
                    children: b,
                  })),
            (t[8] = b),
            (t[9] = _),
            (t[10] = i),
            (t[11] = S))
          : (S = t[11]),
        S
      );
    }
    function v() {
      return o("WAWebModalManager").ModalManager.close();
    }
    function S(e) {
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
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e) {
      var t = o("react-compiler-runtime").c(20),
        n = e.chat,
        a = e.isRefresh,
        i = e.parentGroup,
        l = r("useWAWebUnmountSignal")(),
        c;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = ["groupMetadata", "isReadOnly", "id", "formattedTitle"]),
          (t[0] = c))
        : (c = t[0]);
      var d = o("useWAWebModelValues").useModelValues(n, c),
        p = d.formattedTitle,
        _ = d.groupMetadata,
        f = d.id,
        g = d.isReadOnly,
        h;
      t[1] !== i
        ? ((h = r("WAWebGroupMetadataCollection").get(i.toString())),
          (t[1] = i),
          (t[2] = h))
        : (h = t[2]);
      var y = h,
        C = r("useWAWebIAmCommunityAdmin")(y),
        b;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = ["bulk_add", "bulk_remove"]), (t[3] = b))
        : (b = t[3]);
      var v;
      t[4] !== (_ == null ? void 0 : _.participants)
        ? ((v = function () {
            return _ == null ? void 0 : _.participants.iAmAdmin();
          }),
          (t[4] = _ == null ? void 0 : _.participants),
          (t[5] = v))
        : (v = t[5]);
      var S = !!r("useWAWebEventTargetValue")(
          _ == null ? void 0 : _.participants,
          b,
          v,
        ),
        R = r("useWAWebCommunitySubgroups")(y),
        L = R.joinedSubgroups,
        E = R.unjoinedSubgroups,
        k = m(!1),
        I = k[0],
        T = k[1];
      if (g || L == null || E == null || (!C && !S)) return null;
      var D;
      t[6] !== I ||
      t[7] !== C ||
      t[8] !== l ||
      t[9] !== i ||
      t[10] !== p ||
      t[11] !== f
        ? ((D = function () {
            I ||
              l.aborted ||
              (o("WAWebCommunityRemoveSubgroup").handleRemoveSubgroup({
                parentId: i,
                removedSubgroupWid: f,
                removedSubgroupTitle: p,
                setLoading: T,
                iAmCommunityAdmin: C,
              }),
              l.aborted);
          }),
          (t[6] = I),
          (t[7] = C),
          (t[8] = l),
          (t[9] = i),
          (t[10] = p),
          (t[11] = f),
          (t[12] = D))
        : (D = t[12]);
      var x = D,
        $;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = s._(/*BTDS*/ "Remove from community")), (t[13] = $))
        : ($ = t[13]);
      var P = $,
        N;
      t[14] !== x
        ? ((N = function () {
            x();
          }),
          (t[14] = x),
          (t[15] = N))
        : (N = t[15]);
      var M = N,
        w;
      return (
        t[16] !== I || t[17] !== M || t[18] !== a
          ? ((w =
              a === !0
                ? u.jsx(r("WAWebDrawerButtonRefreshed.react"), {
                    testid: void 0,
                    icon: u.jsx(r("WDSIconIcLogout.react"), {
                      directional: !0,
                    }),
                    disabled: I,
                    danger: !0,
                    onClick: M,
                    children: P,
                  })
                : u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
                    testid: void 0,
                    icon: u.jsx(o("WAWebExitIcon.react").ExitIcon, {
                      directional: !0,
                    }),
                    disabled: I,
                    color: "danger",
                    theme: "chat-info",
                    onClick: M,
                    children: P,
                  })),
            (t[16] = I),
            (t[17] = M),
            (t[18] = a),
            (t[19] = w))
          : (w = t[19]),
        w
      );
    }
    l.default = p;
  },
  226,
);
