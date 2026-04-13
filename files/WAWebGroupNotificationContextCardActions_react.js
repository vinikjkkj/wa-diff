__d(
  "WAWebGroupNotificationContextCardActions.react",
  [
    "fbt",
    "WAWebAddUserIcon.react",
    "WAWebButton.react",
    "WAWebGroupGatingUtils",
    "WAWebGroupMemberLinkMode",
    "WAWebGroupMemberTagUpdateLogger",
    "WAWebGroupNotificationContextCardActionsUtils",
    "WAWebIcAddCircleIcon.react",
    "WAWebMemberLabelCreateUpdateModal.react",
    "WAWebMemberLabelGating",
    "WAWebMemberLabelHooks",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebPencilIcon.react",
    "WAWebWamEnumTsSurface",
    "WDSButtonGroup.react",
    "WDSIconIcInfo.react",
    "WDSIconIcLink.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useCallback;
    function d(e) {
      var t = o("react-compiler-runtime").c(3),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = { x: 0, y: 0, width: 24, height: 24 }), (t[0] = n))
        : (n = t[0]);
      var r;
      return (
        t[1] !== e
          ? ((r = u.jsx(
              o("WAWebIcAddCircleIcon.react").IcAddCircleIcon,
              babelHelpers.extends({ viewBox: n }, e),
            )),
            (t[1] = e),
            (t[2] = r))
          : (r = t[2]),
        r
      );
    }
    var m = {
      buttonGroupContainer: {
        minWidth: "x5w4yej",
        columnGap: "xfex06f",
        rowGap: "x3pnbk8",
        $$css: !0,
      },
    };
    function p(e) {
      var t = o("react-compiler-runtime").c(34),
        n = e.canAddParticipants,
        a = e.chat,
        i = e.groupMetadata,
        l = e.isUnnamed,
        c = e.onAddGroupMembersClick,
        p = e.onAddNameClick,
        f = e.onGroupInfoClick,
        g = e.onInviteViaLinkClick,
        h;
      t[0] !== a
        ? ((h = function () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebMemberLabelCreateUpdateModal.react")
                  .MemberLabelCreateUpdateModal,
                {
                  chat: a,
                  entryPoint: o("WAWebGroupMemberTagUpdateLogger")
                    .GroupMemberTagUpdateLogger.ENTRY_POINT.NEW_MEMBER_PROMPT,
                  uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_THREAD,
                },
              ),
            );
          }),
          (t[0] = a),
          (t[1] = h))
        : (h = t[1]);
      var y = h,
        C = o("WAWebMemberLabelHooks").useHasSelfMemberLabelForChat(a),
        b,
        v,
        S,
        R,
        L,
        E,
        k,
        I,
        T,
        D;
      if (
        t[2] !== n ||
        t[3] !== i ||
        t[4] !== y ||
        t[5] !== C ||
        t[6] !== l ||
        t[7] !== c ||
        t[8] !== p ||
        t[9] !== f ||
        t[10] !== g
      ) {
        v = Symbol.for("react.early_return_sentinel");
        e: {
          var x =
              !C && o("WAWebMemberLabelGating").isMemberLabelSenderEnabled(),
            $ = n && !i.support,
            P;
          t[21] !== i || t[22] !== l
            ? ((P = i.canSetSubject() && l),
              (t[21] = i),
              (t[22] = l),
              (t[23] = P))
            : (P = t[23]);
          var N = P,
            M =
              i.memberLinkMode ===
                o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK &&
              o("WAWebGroupGatingUtils").isAnyoneCanLinkToGroupsM2Enabled(),
            w = {
              name: {
                available: N,
                onPress: p,
                icon: o("WAWebPencilIcon.react").PencilIcon,
                testid: "group-notification-context-card-add-name-button",
                label: s._(/*BTDS*/ "Name this group"),
                shadowOnHover: !1,
              },
              addMembers: {
                available: $,
                onPress: c,
                icon: o("WAWebAddUserIcon.react").AddUserIcon,
                testid: "group-notification-context-card-add-members-button",
                label: s._(/*BTDS*/ "Add members"),
              },
              memberTag: {
                available: x,
                onPress: y,
                icon: d,
                testid: "group-notification-context-card-add-member-tag-button",
                label: s._(/*BTDS*/ "Add your member tag"),
              },
              groupInfo: {
                available: !0,
                onPress: f,
                icon: r("WDSIconIcInfo.react"),
                testid: "group-notification-context-card-group-info-button",
                label: s._(/*BTDS*/ "Group info"),
              },
              inviteViaLink: {
                available: M,
                onPress: g != null ? g : r("WAWebNoop"),
                icon: r("WDSIconIcLink.react"),
                testid:
                  "group-notification-context-card-invite-via-link-button",
                label: s._(/*BTDS*/ "Invite via link or QR code"),
                useVerticalLayout: !0,
              },
            },
            A = o(
              "WAWebGroupNotificationContextCardActionsUtils",
            ).getGroupNotificationButtonConfig(w),
            F = A.firstConfig,
            O = A.secondConfig,
            B = A.useVerticalLayout;
          if (O != null) {
            var W = F != null ? F : O,
              q = { variant: "outline", type: "default" },
              U = B ? [W, O] : [O, W],
              V = U[0],
              H = U[1];
            v = u.jsx(
              "div",
              babelHelpers.extends(
                {},
                {
                  0: {
                    className:
                      "x78zum5 x1q0g3np x1qjc9v5 xl56j7k x1a02dak xyamay9 x5w4yej xfex06f x3pnbk8",
                  },
                  1: {
                    className:
                      "x78zum5 xdt5ytf x6s0dn4 xl56j7k xyamay9 x5w4yej x3pnbk8 xh8yej3",
                  },
                }[!!B << 0],
                {
                  children: u.jsx(r("WDSButtonGroup.react"), {
                    width: B ? "fill" : "hug",
                    orientation: "horizontal",
                    primaryButtonProps: babelHelpers.extends({}, q, {
                      onPress: V.onPress,
                      Icon: V.icon,
                      testid: V.testid,
                      label: V.label,
                    }),
                    secondaryButtonProps: babelHelpers.extends({}, q, {
                      onPress: H.onPress,
                      Icon: H.icon,
                      testid: H.testid,
                      label: H.label,
                    }),
                  }),
                },
              ),
            );
            break e;
          }
          var G = _;
          ((b = o("WAWebButton.react").ButtonGroup),
            (S = B ? "vertical" : "horizontal"),
            (R = "stretch"),
            (L = "center"),
            (E = "wrap"),
            (k = 16),
            (I = m.buttonGroupContainer),
            (T = G(F)),
            (D = G(O)));
        }
        ((t[2] = n),
          (t[3] = i),
          (t[4] = y),
          (t[5] = C),
          (t[6] = l),
          (t[7] = c),
          (t[8] = p),
          (t[9] = f),
          (t[10] = g),
          (t[11] = b),
          (t[12] = v),
          (t[13] = S),
          (t[14] = R),
          (t[15] = L),
          (t[16] = E),
          (t[17] = k),
          (t[18] = I),
          (t[19] = T),
          (t[20] = D));
      } else
        ((b = t[11]),
          (v = t[12]),
          (S = t[13]),
          (R = t[14]),
          (L = t[15]),
          (E = t[16]),
          (k = t[17]),
          (I = t[18]),
          (T = t[19]),
          (D = t[20]));
      if (v !== Symbol.for("react.early_return_sentinel")) return v;
      var z;
      return (
        t[24] !== b ||
        t[25] !== S ||
        t[26] !== R ||
        t[27] !== L ||
        t[28] !== E ||
        t[29] !== k ||
        t[30] !== I ||
        t[31] !== T ||
        t[32] !== D
          ? ((z = u.jsxs(b, {
              direction: S,
              align: R,
              justify: L,
              wrap: E,
              paddingTop: k,
              xstyle: I,
              children: [T, D],
            })),
            (t[24] = b),
            (t[25] = S),
            (t[26] = R),
            (t[27] = L),
            (t[28] = E),
            (t[29] = k),
            (t[30] = I),
            (t[31] = T),
            (t[32] = D),
            (t[33] = z))
          : (z = t[33]),
        z
      );
    }
    function _(e) {
      return (
        e != null &&
        u.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
          onClick: e.onPress,
          icon: e.icon,
          shadowOnHover: e.shadowOnHover,
          testid: void 0,
          children: e.label,
        })
      );
    }
    l.GroupNotificationContextCardActions = p;
  },
  226,
);
