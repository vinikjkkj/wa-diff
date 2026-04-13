__d(
  "WAWebSuspendedCommunityModal.react",
  [
    "fbt",
    "WAWebABPropsSaga",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebChatCommunityUtils",
    "WAWebClickableLink.react",
    "WAWebCommunitySquircleIcon.react",
    "WAWebConfirmPopup.react",
    "WAWebContactFormWrapper.react",
    "WAWebCxtUrl",
    "WAWebDeactivateCommunityDrawerLoadable",
    "WAWebDrawerManager",
    "WAWebExternalLink.react",
    "WAWebFlex.react",
    "WAWebGroupIntegrityUtils",
    "WAWebIcHelpFilledIcon.react",
    "WAWebLeaveCommunityModal.react",
    "WAWebModalManager",
    "WAWebSettingsBlockedIcon.react",
    "WAWebSupportAiSessionWamEvent",
    "WAWebSuspendedCommunityUtils",
    "WAWebSuspendedGroupUtils",
    "WAWebText.react",
    "WAWebWamEnumGroupSuspensionAppealUiAction",
    "WAWebWamEnumGroupSuspensionAppealUiSurface",
    "WAWebWamEnumSupportAiEventType",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect,
      d = {
        community: { color: "x17k9de1", $$css: !0 },
        icon: {
          color: "x1tvajsz",
          display: "x78zum5",
          justifyContent: "xl56j7k",
          alignItems: "x6s0dn4",
          minWidth: "x1hxoosp",
          $$css: !0,
        },
        badge: {
          zIndex: "x12xzxwr",
          bottom: "x1c56n8",
          insetInlineEnd: "xptjn4f",
          left: null,
          right: null,
          position: "x1n2onr6",
          marginInlineEnd: "xhg6vv5",
          color: "x30a034",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          backgroundColor: "x1hqk2wv",
          $$css: !0,
        },
        marginTop20: { marginTop: "x1nmyh1g", $$css: !0 },
      };
    function m(e) {
      var t = o("react-compiler-runtime").c(3),
        n,
        r;
      (t[0] !== e
        ? ((n = function () {
            o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent(
              e,
              o("WAWebWamEnumGroupSuspensionAppealUiAction")
                .GROUP_SUSPENSION_APPEAL_UI_ACTION
                .SUSPENSION_BOTTOM_SHEET_IMPRESSION,
              o("WAWebWamEnumGroupSuspensionAppealUiSurface")
                .GROUP_SUSPENSION_APPEAL_UI_SURFACE
                .COMMUNITY_SUSPENSION_BOTTOM_SHEET,
            );
          }),
          (r = [e]),
          (t[0] = e),
          (t[1] = n),
          (t[2] = r))
        : ((n = t[1]), (r = t[2])),
        c(n, r));
    }
    function p(e) {
      var t,
        n = o("react-compiler-runtime").c(33),
        a = e.community;
      m(a);
      var i;
      n[0] !== a
        ? ((i = function () {
            var e;
            (o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent(
              a,
              o("WAWebWamEnumGroupSuspensionAppealUiAction")
                .GROUP_SUSPENSION_APPEAL_UI_ACTION.CONTACT_SUPPORT_CLICK,
              o("WAWebWamEnumGroupSuspensionAppealUiSurface")
                .GROUP_SUSPENSION_APPEAL_UI_SURFACE
                .COMMUNITY_SUSPENSION_BOTTOM_SHEET,
            ),
              o("WAWebModalManager").ModalManager.close(),
              o("WAWebABPropsSaga").getIsSagaV1Enabled() &&
                new (o(
                  "WAWebSupportAiSessionWamEvent",
                ).SupportAiSessionWamEvent)({
                  supportAiEventType: o("WAWebWamEnumSupportAiEventType")
                    .SUPPORT_AI_EVENT_TYPE.CONTACT_US_CLICKED,
                }).commit(),
              o("WAWebModalManager").ModalManager.open(
                u.jsx(r("WAWebContactFormWrapper.react"), {
                  supportTag: o("WAWebSuspendedCommunityUtils")
                    .SUSPENDED_COMMUNITY_SUPPORT_TAG,
                  entityId: (e = a.groupMetadata) == null ? void 0 : e.id.user,
                }),
                { transition: "modal-flow" },
              ));
          }),
          (n[0] = a),
          (n[1] = i))
        : (i = n[1]);
      var l = i,
        c;
      n[2] !== a
        ? ((c = function () {
            (o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent(
              a,
              o("WAWebWamEnumGroupSuspensionAppealUiAction")
                .GROUP_SUSPENSION_APPEAL_UI_ACTION.DEACTIVATE_COMMUNITY,
              o("WAWebWamEnumGroupSuspensionAppealUiSurface")
                .GROUP_SUSPENSION_APPEAL_UI_SURFACE
                .COMMUNITY_SUSPENSION_BOTTOM_SHEET,
            ),
              o("WAWebModalManager").ModalManager.close(),
              o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
                  ? { descriptorType: "deactivate_community", chat: a }
                  : u.jsx(
                      o("WAWebDeactivateCommunityDrawerLoadable")
                        .DeactivateCommunityDrawerLoadable,
                      {
                        onBack: o("WAWebDrawerManager").closeDrawerRight,
                        chat: a,
                      },
                    ),
              ));
          }),
          (n[2] = a),
          (n[3] = c))
        : (c = n[3]);
      var p = c,
        f;
      n[4] !== a
        ? ((f = function () {
            (o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent(
              a,
              o("WAWebWamEnumGroupSuspensionAppealUiAction")
                .GROUP_SUSPENSION_APPEAL_UI_ACTION.LEAVE_COMMUNITY_CLICK,
              o("WAWebWamEnumGroupSuspensionAppealUiSurface")
                .GROUP_SUSPENSION_APPEAL_UI_SURFACE
                .COMMUNITY_SUSPENSION_BOTTOM_SHEET,
            ),
              o("WAWebModalManager").ModalManager.open(
                u.jsx(r("WAWebLeaveCommunityModal.react"), { chat: a }),
                { transition: "modal-flow" },
              ));
          }),
          (n[4] = a),
          (n[5] = f))
        : (f = n[5]);
      var g = f,
        h;
      n[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = u.jsxs(o("WAWebFlex.react").FlexRow, {
            justify: "center",
            align: "center",
            children: [
              u.jsx(
                o("WAWebCommunitySquircleIcon.react").CommunitySquircleIcon,
                { width: 100, height: 100, iconXstyle: d.community },
              ),
              u.jsx(o("WAWebSettingsBlockedIcon.react").SettingsBlockedIcon, {
                width: 42,
                height: 42,
                xstyle: d.badge,
                directional: !0,
              }),
            ],
          })),
          (n[6] = h))
        : (h = n[6]);
      var y = h,
        C;
      n[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = u.jsx(o("WAWebFlex.react").FlexRow, {
            justify: "center",
            children: u.jsx(o("WAWebText.react").WAWebTextLarge, {
              xstyle: d.marginTop20,
              children: s._(/*BTDS*/ "This community is no longer available"),
            }),
          })),
          (n[7] = C))
        : (C = n[7]);
      var b = C,
        v;
      n[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = u.jsx(o("WAWebFlex.react").FlexRow, {
            justify: "center",
            margin: 16,
            children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
              children: s._(/*BTDS*/ "{=m0}", [
                s._implicitParam(
                  "=m0",
                  u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                    href: o("WAWebCxtUrl").getCommunityNotAvailableFaqUrl(),
                    children: s._(/*BTDS*/ "Why am I seeing this?"),
                  }),
                ),
              ]),
            }),
          })),
          (n[8] = v))
        : (v = n[8]);
      var S = v,
        R;
      if (
        n[9] !== ((t = a.groupMetadata) == null ? void 0 : t.participants) ||
        n[10] !== l
      ) {
        var L, E;
        if (
          ((R = []), (L = a.groupMetadata) != null && L.participants.iAmAdmin())
        ) {
          var k;
          (n[12] !== l
            ? ((k = {
                testId: "suspended-community-appeal-row",
                icon: o("WAWebIcHelpFilledIcon.react").IcHelpFilledIcon,
                content: s._(/*BTDS*/ "Request a review through {=m2}.", [
                  s._implicitParam(
                    "=m2",
                    u.jsx(r("WAWebClickableLink.react"), {
                      onClick: l,
                      children: s._(/*BTDS*/ "WhatsApp Support"),
                    }),
                  ),
                ]),
              }),
              (n[12] = l),
              (n[13] = k))
            : (k = n[13]),
            R.push(k));
        }
        var I;
        (n[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = {
              testId: "suspended-community-operations-restricted-row",
              icon: o("WAWebSettingsBlockedIcon.react").SettingsBlockedIcon,
              content: s._(
                /*BTDS*/ "No messaging, adding members, downloading or forwarding media.",
              ),
            }),
            (n[14] = I))
          : (I = n[14]),
          R.push(I),
          (n[9] = (E = a.groupMetadata) == null ? void 0 : E.participants),
          (n[10] = l),
          (n[11] = R));
      } else R = n[11];
      var T;
      n[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = s._(/*BTDS*/ "See community")), (n[15] = T))
        : (T = n[15]);
      var D = T,
        x;
      n[16] !== a
        ? ((x = o("WAWebChatCommunityUtils").isCommunitySuperAdmin(a)
            ? s._(/*BTDS*/ "Deactivate community")
            : s._(/*BTDS*/ "Exit community")),
          (n[16] = a),
          (n[17] = x))
        : (x = n[17]);
      var $ = x,
        P;
      n[18] !== a
        ? ((P = function () {
            (o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent(
              a,
              o("WAWebWamEnumGroupSuspensionAppealUiAction")
                .GROUP_SUSPENSION_APPEAL_UI_ACTION.SEE_GROUP_CLICK,
              o("WAWebWamEnumGroupSuspensionAppealUiSurface")
                .GROUP_SUSPENSION_APPEAL_UI_SURFACE
                .COMMUNITY_SUSPENSION_BOTTOM_SHEET,
            ),
              o("WAWebModalManager").closeModalManager());
          }),
          (n[18] = a),
          (n[19] = P))
        : (P = n[19]);
      var N = P,
        M;
      n[20] !== a || n[21] !== p || n[22] !== g
        ? ((M = o("WAWebChatCommunityUtils").isCommunitySuperAdmin(a) ? p : g),
          (n[20] = a),
          (n[21] = p),
          (n[22] = g),
          (n[23] = M))
        : (M = n[23]);
      var w = M,
        A = o("WAWebChatCommunityUtils").isCommunitySuperAdmin(a)
          ? "solid-warning"
          : "primary",
        F;
      n[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = { surface: "unknown", viewName: "suspended-community" }),
          (n[24] = F))
        : (F = n[24]);
      var O;
      n[25] !== R
        ? ((O = u.jsx(o("WAWebFlex.react").FlexColumn, { children: R.map(_) })),
          (n[25] = R),
          (n[26] = O))
        : (O = n[26]);
      var B;
      return (
        n[27] !== N || n[28] !== w || n[29] !== A || n[30] !== $ || n[31] !== O
          ? ((B = u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: F,
              onOK: w,
              okText: $,
              cancelText: D,
              onCancel: N,
              okButtonType: A,
              children: [y, b, O, S],
            })),
            (n[27] = N),
            (n[28] = w),
            (n[29] = A),
            (n[30] = $),
            (n[31] = O),
            (n[32] = B))
          : (B = n[32]),
        B
      );
    }
    function _(e) {
      var t = e.content,
        n = e.icon,
        r = e.testId;
      return u.jsx(
        o("WAWebGroupIntegrityUtils").SuspendedModalBodyParagraph,
        {
          testId: r,
          icon: u.jsx(n, { xstyle: d.icon, directional: !0 }),
          content: t,
        },
        r,
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"),
      (l.SuspendedCommunityModal = p));
  },
  226,
);
