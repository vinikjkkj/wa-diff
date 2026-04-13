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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect;
    function d(e) {
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
                .GROUP_SUSPENSION_BOTTOM_SHEET,
            );
          }),
          (r = [e]),
          (t[0] = e),
          (t[1] = n),
          (t[2] = r))
        : ((n = t[1]), (r = t[2])),
        c(n, r));
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
        a = o("react-compiler-runtime").c(25),
        i = e.chat;
      d(i);
      var l;
      a[0] !== i
        ? ((l = function () {
            var e;
            (o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent(
              i,
              o("WAWebWamEnumGroupSuspensionAppealUiAction")
                .GROUP_SUSPENSION_APPEAL_UI_ACTION.CONTACT_SUPPORT_CLICK,
              o("WAWebWamEnumGroupSuspensionAppealUiSurface")
                .GROUP_SUSPENSION_APPEAL_UI_SURFACE
                .GROUP_SUSPENSION_BOTTOM_SHEET,
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
                  supportTag: o("WAWebSuspendedGroupUtils")
                    .SUSPENDED_GROUP_SUPPORT_TAG,
                  entityId: (e = i.groupMetadata) == null ? void 0 : e.id.user,
                }),
                { transition: "modal-flow" },
              ));
          }),
          (a[0] = i),
          (a[1] = l))
        : (l = a[1]);
      var c = l,
        p;
      a[2] !== i
        ? ((p = function () {
            (o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent(
              i,
              o("WAWebWamEnumGroupSuspensionAppealUiAction")
                .GROUP_SUSPENSION_APPEAL_UI_ACTION.SEE_GROUP_CLICK,
              o("WAWebWamEnumGroupSuspensionAppealUiSurface")
                .GROUP_SUSPENSION_APPEAL_UI_SURFACE
                .GROUP_SUSPENSION_BOTTOM_SHEET,
            ),
              o("WAWebModalManager").ModalManager.close());
          }),
          (a[2] = i),
          (a[3] = p))
        : (p = a[3]);
      var f = p,
        g;
      a[4] !== i
        ? ((g = function () {
            (o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent(
              i,
              o("WAWebWamEnumGroupSuspensionAppealUiAction")
                .GROUP_SUSPENSION_APPEAL_UI_ACTION.DELETE_GROUP_CLICK,
              o("WAWebWamEnumGroupSuspensionAppealUiSurface")
                .GROUP_SUSPENSION_APPEAL_UI_SURFACE
                .GROUP_SUSPENSION_BOTTOM_SHEET,
            ),
              new (o(
                "WAWebSuspendedGroupDeleteWamEvent",
              ).SuspendedGroupDeleteWamEvent)({
                deleteBtnSource: o("WAWebWamEnumDeleteSuspendedGroupBtn")
                  .DELETE_SUSPENDED_GROUP_BTN.BOTTOM_SHEET_BTN,
              }).commit(),
              o("WAWebSuspendedGroupUtils").openExitAndDeleteGroupModal(i));
          }),
          (a[4] = i),
          (a[5] = g))
        : (g = a[5]);
      var h = g,
        y;
      a[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = s._(/*BTDS*/ "See group")), (a[6] = y))
        : (y = a[6]);
      var C = y,
        b;
      a[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = s._(/*BTDS*/ "Delete group for me")), (a[7] = b))
        : (b = a[7]);
      var v = b,
        S;
      a[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = u.jsxs(o("WAWebFlex.react").FlexRow, {
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
          })),
          (a[8] = S))
        : (S = a[8]);
      var R = S,
        L;
      a[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = u.jsx(o("WAWebFlex.react").FlexRow, {
            justify: "center",
            children: u.jsx(o("WAWebText_DONOTUSE.react").TextHeader, {
              xstyle: m.marginAll20,
              size: "18",
              children: s._(/*BTDS*/ "This group is no longer available"),
            }),
          })),
          (a[9] = L))
        : (L = a[9]);
      var E = L,
        k;
      a[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = u.jsx(o("WAWebFlex.react").FlexRow, {
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
          })),
          (a[10] = k))
        : (k = a[10]);
      var I = k,
        T;
      if (
        a[11] !== ((t = i.groupMetadata) == null ? void 0 : t.participants) ||
        a[12] !== ((n = i.groupMetadata) == null ? void 0 : n.terminated) ||
        a[13] !== c
      ) {
        var D, x, $, P;
        if (
          ((T = []),
          !((D = i.groupMetadata) != null && D.terminated) &&
            (x = i.groupMetadata) != null &&
            x.participants.iAmAdmin())
        ) {
          var N;
          (a[15] !== c
            ? ((N = {
                testId: "suspended-group-appeal-row",
                icon: o("WAWebIcHelpFilledIcon.react").IcHelpFilledIcon,
                content: s._(/*BTDS*/ "Request a review through {=m2}.", [
                  s._implicitParam(
                    "=m2",
                    u.jsx(r("WAWebClickableLink.react"), {
                      onClick: c,
                      children: s._(/*BTDS*/ "WhatsApp Support"),
                    }),
                  ),
                ]),
              }),
              (a[15] = c),
              (a[16] = N))
            : (N = a[16]),
            T.push(N));
        }
        var M;
        (a[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((M = {
              testId: "suspended-group-operations-restricted-row",
              icon: o("WAWebSettingsBlockedIcon.react").SettingsBlockedIcon,
              content: s._(
                /*BTDS*/ "No messaging, adding members, downloading or forwarding media.",
              ),
            }),
            (a[17] = M))
          : (M = a[17]),
          T.push(M),
          (a[11] = ($ = i.groupMetadata) == null ? void 0 : $.participants),
          (a[12] = (P = i.groupMetadata) == null ? void 0 : P.terminated),
          (a[13] = c),
          (a[14] = T));
      } else T = a[14];
      var w;
      a[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = { surface: "unknown", viewName: "suspended-group-v2" }),
          (a[18] = w))
        : (w = a[18]);
      var A;
      a[19] !== T
        ? ((A = u.jsx(o("WAWebFlex.react").FlexColumn, { children: T.map(_) })),
          (a[19] = T),
          (a[20] = A))
        : (A = a[20]);
      var F;
      return (
        a[21] !== f || a[22] !== h || a[23] !== A
          ? ((F = u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: w,
              onOK: h,
              okText: v,
              cancelText: C,
              onCancel: f,
              children: [R, E, I, A],
            })),
            (a[21] = f),
            (a[22] = h),
            (a[23] = A),
            (a[24] = F))
          : (F = a[24]),
        F
      );
    }
    function _(e) {
      var t = e.content,
        n = e.icon,
        r = e.testId;
      return u.jsx(
        o("WAWebGroupIntegrityUtils").SuspendedModalBodyParagraph,
        { testId: r, icon: u.jsx(n, { xstyle: m.icon }), content: t },
        r,
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
