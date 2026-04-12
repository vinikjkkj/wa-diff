__d(
  "WAWebSuspendedGroupModalV2.react",
  [
    "fbt",
    "WAWebABPropsSaga",
    "WAWebClickableLink.react",
    "WAWebConfirmPopup.react",
    "WAWebContactFormWrapper.react",
    "WAWebExternalLink.react",
    "WAWebFlex.react",
    "WAWebGroupIntegrityUtils",
    "WAWebIcHelpFilledIcon.react",
    "WAWebModalManager",
    "WAWebPeopleIcon.react",
    "WAWebRoundShape.react",
    "WAWebSettingsBlockedIcon.react",
    "WAWebSupportAiSessionWamEvent",
    "WAWebSuspendedGroupDeleteWamEvent",
    "WAWebSuspendedGroupUtils",
    "WAWebText_DONOTUSE.react",
    "WAWebWamEnumDeleteSuspendedGroupBtn",
    "WAWebWamEnumGroupSuspensionAppealUiAction",
    "WAWebWamEnumGroupSuspensionAppealUiSurface",
    "WAWebWamEnumSupportAiEventType",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect;
    function d(e) {
      c(
        function () {
          o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent(
            e,
            o("WAWebWamEnumGroupSuspensionAppealUiAction")
              .GROUP_SUSPENSION_APPEAL_UI_ACTION
              .SUSPENSION_BOTTOM_SHEET_IMPRESSION,
            o("WAWebWamEnumGroupSuspensionAppealUiSurface")
              .GROUP_SUSPENSION_APPEAL_UI_SURFACE.GROUP_SUSPENSION_BOTTOM_SHEET,
          );
        },
        [e],
      );
    }
    var m = {
      mainPic: {
        width: "x1exxlbk",
        height: "xpyat2d",
        backgroundColor: "x63rzfj",
        $$css: !0,
      },
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
      marginAll20: {
        marginTop: "x1nmyh1g",
        marginInlineEnd: "xd6izgl",
        marginBottom: "xdqhqc9",
        marginInlineStart: "x6pxu1d",
        $$css: !0,
      },
    };
    function p(e) {
      var t,
        n,
        a = e.chat;
      d(a);
      var i = function () {
          var e;
          (o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent(
            a,
            o("WAWebWamEnumGroupSuspensionAppealUiAction")
              .GROUP_SUSPENSION_APPEAL_UI_ACTION.CONTACT_SUPPORT_CLICK,
            o("WAWebWamEnumGroupSuspensionAppealUiSurface")
              .GROUP_SUSPENSION_APPEAL_UI_SURFACE.GROUP_SUSPENSION_BOTTOM_SHEET,
          ),
            o("WAWebModalManager").ModalManager.close(),
            o("WAWebABPropsSaga").getIsSagaV1Enabled() &&
              new (o("WAWebSupportAiSessionWamEvent").SupportAiSessionWamEvent)(
                {
                  supportAiEventType: o("WAWebWamEnumSupportAiEventType")
                    .SUPPORT_AI_EVENT_TYPE.CONTACT_US_CLICKED,
                },
              ).commit(),
            o("WAWebModalManager").ModalManager.open(
              u.jsx(r("WAWebContactFormWrapper.react"), {
                supportTag: o("WAWebSuspendedGroupUtils")
                  .SUSPENDED_GROUP_SUPPORT_TAG,
                entityId: (e = a.groupMetadata) == null ? void 0 : e.id.user,
              }),
              { transition: "modal-flow" },
            ));
        },
        l = function () {
          (o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent(
            a,
            o("WAWebWamEnumGroupSuspensionAppealUiAction")
              .GROUP_SUSPENSION_APPEAL_UI_ACTION.SEE_GROUP_CLICK,
            o("WAWebWamEnumGroupSuspensionAppealUiSurface")
              .GROUP_SUSPENSION_APPEAL_UI_SURFACE.GROUP_SUSPENSION_BOTTOM_SHEET,
          ),
            o("WAWebModalManager").ModalManager.close());
        },
        c = function () {
          (o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent(
            a,
            o("WAWebWamEnumGroupSuspensionAppealUiAction")
              .GROUP_SUSPENSION_APPEAL_UI_ACTION.DELETE_GROUP_CLICK,
            o("WAWebWamEnumGroupSuspensionAppealUiSurface")
              .GROUP_SUSPENSION_APPEAL_UI_SURFACE.GROUP_SUSPENSION_BOTTOM_SHEET,
          ),
            new (o(
              "WAWebSuspendedGroupDeleteWamEvent",
            ).SuspendedGroupDeleteWamEvent)({
              deleteBtnSource: o("WAWebWamEnumDeleteSuspendedGroupBtn")
                .DELETE_SUSPENDED_GROUP_BTN.BOTTOM_SHEET_BTN,
            }).commit(),
            o("WAWebSuspendedGroupUtils").openExitAndDeleteGroupModal(a));
        },
        p = s._(/*BTDS*/ "See group"),
        _ = s._(/*BTDS*/ "Delete group for me"),
        f = u.jsxs(o("WAWebFlex.react").FlexRow, {
          justify: "center",
          align: "center",
          children: [
            u.jsx(r("WAWebRoundShape.react"), {
              xstyle: m.mainPic,
              children: u.jsx(o("WAWebPeopleIcon.react").PeopleIcon, {
                width: 60,
                height: 60,
              }),
            }),
            u.jsx(o("WAWebSettingsBlockedIcon.react").SettingsBlockedIcon, {
              width: 36,
              height: 36,
              xstyle: m.badge,
            }),
          ],
        }),
        g = u.jsx(o("WAWebFlex.react").FlexRow, {
          justify: "center",
          children: u.jsx(o("WAWebText_DONOTUSE.react").TextHeader, {
            xstyle: m.marginAll20,
            size: "18",
            children: s._(/*BTDS*/ "This group is no longer available"),
          }),
        }),
        h = u.jsx(o("WAWebFlex.react").FlexRow, {
          justify: "center",
          children: u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
            children: s._(/*BTDS*/ "{=m0}", [
              s._implicitParam(
                "=m0",
                u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebSuspendedGroupUtils").getSuspendedFaqUrl(),
                  children: s._(/*BTDS*/ "Why am I seeing this?"),
                }),
              ),
            ]),
          }),
        }),
        y = [];
      return (
        !((t = a.groupMetadata) != null && t.terminated) &&
          (n = a.groupMetadata) != null &&
          n.participants.iAmAdmin() &&
          y.push({
            testId: "suspended-group-appeal-row",
            icon: o("WAWebIcHelpFilledIcon.react").IcHelpFilledIcon,
            content: s._(/*BTDS*/ "Request a review through {=m2}.", [
              s._implicitParam(
                "=m2",
                u.jsx(r("WAWebClickableLink.react"), {
                  onClick: i,
                  children: s._(/*BTDS*/ "WhatsApp Support"),
                }),
              ),
            ]),
          }),
        y.push({
          testId: "suspended-group-operations-restricted-row",
          icon: o("WAWebSettingsBlockedIcon.react").SettingsBlockedIcon,
          content: s._(
            /*BTDS*/ "No messaging, adding members, downloading or forwarding media.",
          ),
        }),
        u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
          tsNavigationData: {
            surface: "unknown",
            viewName: "suspended-group-v2",
          },
          onOK: c,
          okText: _,
          cancelText: p,
          onCancel: l,
          children: [
            f,
            g,
            h,
            u.jsx(o("WAWebFlex.react").FlexColumn, {
              children: y.map(function (e) {
                var t = e.content,
                  n = e.icon,
                  r = e.testId;
                return u.jsx(
                  o("WAWebGroupIntegrityUtils").SuspendedModalBodyParagraph,
                  { testId: r, icon: u.jsx(n, { xstyle: m.icon }), content: t },
                  r,
                );
              }),
            }),
          ],
        })
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
