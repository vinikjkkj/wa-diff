__d(
  "WAWebGroupInviteLinkDrawer.react",
  [
    "fbt",
    "WAAbortError",
    "WAFilteredCatch",
    "WALogger",
    "WAPromiseDelays",
    "WAPromiseRaceAbort",
    "WAWebBackendErrors",
    "WAWebCommunityGatingUtils",
    "WAWebCommunityRestrictedGroupActionModal.react",
    "WAWebCopyLinkButton.react",
    "WAWebCopyPasteSelectable.react",
    "WAWebDetailImage.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerButton.react",
    "WAWebDrawerHeader.react",
    "WAWebEmojiText.react",
    "WAWebEmptyState.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFocusTracer",
    "WAWebGroupInviteAction",
    "WAWebGroupInviteRevokeModal.react",
    "WAWebGroupInviteUtils.react",
    "WAWebGroupMemberLinkMode",
    "WAWebGroupQueryJob",
    "WAWebGroupType",
    "WAWebMiscErrors",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebPendingParticipantsIcon.react",
    "WAWebRevokeIcon.react",
    "WAWebSendGroupInviteFlowLoadable",
    "WAWebSendLinkButton.react",
    "WAWebText_DONOTUSE.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "react",
    "useWAWebFocusOnMount",
    "useWAWebListener",
    "useWAWebModelValues",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = ["ref"],
      d,
      m = d || (d = o("react")),
      p = d,
      _ = p.useEffect,
      f = p.useState,
      g = {
        groupInfo: {
          backgroundColor: "x1280gxy",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          $$css: !0,
        },
        groupInfoAvatar: { minWidth: "x900493", $$css: !0 },
        groupInfoName: {
          fontSize: "x1jchvi3",
          lineHeight: "x1xet1wb",
          color: "x14ug900",
          $$css: !0,
        },
        groupInfoLink: { maxWidth: "x193iq5w", $$css: !0 },
        descText: { fontSize: "x1f6kntn", lineHeight: "x37zpob", $$css: !0 },
        icon: { color: "xhslqc4", $$css: !0 },
        iconContainer: { minWidth: "xnei2rj", $$css: !0 },
        linkButton: { color: "x1v5yvga", $$css: !0 },
      },
      h = "group-invite-link-anchor",
      y = { LOADING: 0, REVOKING: 1, SUCCESS: 2 };
    function C(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, c),
        i = a.chat,
        l = a.isCommunity,
        d = a.onBack,
        p = a.onGroupSettings,
        C = f(y.LOADING),
        b = C[0],
        v = C[1],
        S = r("useWAWebUnmountSignal")(),
        R = r("useWAWebFocusOnMount")();
      o("useWAWebListener").useListener(
        o("WAWebModalManager").ModalManager,
        ["close_modal"],
        function () {
          return r("WAWebFocusTracer").focus(R.current);
        },
      );
      var L = o("useWAWebModelValues").useModelValues(a.groupMetadata, [
        "inviteCode",
        "groupInviteLink",
        "groupType",
        "membershipApprovalMode",
        "participants",
        "memberLinkMode",
      ]);
      l &&
        L.groupType !== o("WAWebGroupType").GroupType.COMMUNITY &&
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[GroupInviteLinkDrawer] expected community, got: ",
                "",
              ])),
            L.groupType,
          )
          .sendLogs("group-invite-link-drawer-invalid-group-type");
      var E = function (t) {
          switch (t) {
            case 401:
              return s._(
                /*BTDS*/ "You can't view this group's invite link because you're not an admin.",
              );
            case 403:
              return s._(
                /*BTDS*/ "You can't view this group's invite link because you're no longer a participant.",
              );
            case 404:
              return s._(
                /*BTDS*/ "You can't view this group's invite link because this group has ended.",
              );
            case 416:
              return s._(/*BTDS*/ "This action is not available");
            case 436:
              return s._(
                /*BTDS*/ "Invite via link is temporarily unavailable for this group.",
              );
            default:
              return s._(
                /*BTDS*/ "This invite link doesn't match any WhatsApp groups.",
              );
          }
        },
        k = function (t) {
          var e = E(t);
          (d(),
            t === 436
              ? (o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({
                  id: i.id,
                }),
                o("WAWebGroupInviteUtils.react").openGrowthLockedModal(!0))
              : t === 416 &&
                o(
                  "WAWebCommunityGatingUtils",
                ).isCommunitySuspendAppealEnabled() &&
                o("WAWebModalManager").ModalManager.open(
                  m.jsx(r("WAWebCommunityRestrictedGroupActionModal.react"), {
                    chat: i,
                  }),
                ),
            o("WAWebToastManager").ToastManager.open(
              m.jsx(o("WAWebToast.react").Toast, { msg: e }),
            ));
        };
      _(function () {
        if (
          !L.participants.iAmAdmin() &&
          L.memberLinkMode !==
            o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK
        ) {
          o("WALogger")
            .LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "GroupInviteLinkDrawer: expected admin",
                ])),
            )
            .sendLogs("group-invite-link-drawer-user-not-admin");
          var e = 401;
          k(e, i);
          return;
        }
        r("WAPromiseRaceAbort")(
          o("WAWebGroupInviteAction").queryGroupInviteCode(L),
          S,
        )
          .then(function () {
            v(y.SUCCESS);
          })
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              function (e) {
                k(e.statusCode, i);
              },
            ),
          )
          .catch(o("WAAbortError").catchAbort(r("WAWebNoop")));
      }, []);
      var I = function (t) {
          var e = E(t);
          (d(),
            o("WAWebToastManager").ToastManager.open(
              m.jsx(o("WAWebToast.react").Toast, { msg: e }),
            ));
        },
        T = function () {
          v(y.REVOKING);
          var e = o("WAWebGroupInviteAction").revokeGroupInvite(L);
          o("WAPromiseDelays")
            .delayMs(500)
            .then(function () {
              return e;
            })
            .then(function () {
              (o("WAWebToastManager").ToastManager.open(
                m.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(
                    /*BTDS*/ "The previous invite link is now reset and a new invite link has been created.",
                  ),
                }),
              ),
                v(y.SUCCESS));
            })
            .catch(
              o("WAFilteredCatch").filteredCatch(
                o("WAWebBackendErrors").ServerStatusCodeError,
                function (e) {
                  I(e.statusCode);
                },
              ),
            )
            .catch(
              o("WAFilteredCatch").filteredCatch(
                o("WAWebMiscErrors").Unmount,
                r("WAWebNoop"),
              ),
            );
        },
        D = function () {
          o("WAWebModalManager").ModalManager.open(
            m.jsx(r("WAWebGroupInviteRevokeModal.react"), {
              chat: i,
              onConfirm: T,
            }),
            { transition: "modal-flow" },
          );
        },
        x = function () {
          o("WAWebModalManager").ModalManager.open(
            m.jsx(
              o("WAWebSendGroupInviteFlowLoadable").SendGroupInviteFlowLoadable,
              { chat: i },
            ),
            { transition: "modal-flow" },
          );
        },
        $ =
          L.groupType === o("WAWebGroupType").GroupType.COMMUNITY
            ? s._(/*BTDS*/ "Invite to community via link")
            : s._(/*BTDS*/ "Invite to group via link"),
        P;
      if (b === y.LOADING)
        P = m.jsx(o("WAWebEmptyState.react").LoadingWithText, {
          text: s._(/*BTDS*/ "Checking invite link"),
        });
      else if (b === y.REVOKING)
        P = m.jsx(o("WAWebEmptyState.react").LoadingWithText, {
          text: s._(/*BTDS*/ "Resetting the invite link for {groupName}.", [
            s._param("groupName", i.contact.name),
          ]),
        });
      else {
        var N = L.groupInviteLink,
          M = null;
        document.queryCommandSupported("copy") &&
          (M = m.jsx(r("WAWebCopyLinkButton.react"), {
            elementId: h,
            divider: !1,
          }));
        var w =
            L.groupType === o("WAWebGroupType").GroupType.COMMUNITY ||
            L.groupType ===
              o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP,
          A = m.jsx(o("WAWebDetailImage.react").DetailImage, {
            id: i.id,
            size: 48,
            quality: o("WAWebDetailImage.react").DetailImageQuality.High,
            shape: w
              ? o("WAWebDetailImage.react").DetailImageShape.Squircle
              : o("WAWebDetailImage.react").DetailImageShape.Circle,
          }),
          F = m.jsx("span", {
            className: "x1vvkbs xeaf4i8",
            children: m.jsx(
              o("WAWebCopyPasteSelectable.react").SelectableLink,
              {
                id: h,
                href: N,
                selectable: !0,
                children: m.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
                  xstyle: !1,
                  size: "13",
                  color: "link",
                  children: N,
                }),
              },
            ),
          }),
          O = m.jsxs(o("WAWebFlex.react").FlexRow, {
            xstyle: [
              g.groupInfo,
              o("WAWebUISpacing").uiMargin.top16,
              o("WAWebUISpacing").uiMargin.horiz16,
              o("WAWebUISpacing").uiPadding.vert12,
              o("WAWebUISpacing").uiPadding.horiz8,
            ],
            align: "center",
            children: [
              m.jsx(r("WAWebFlexItem.react"), {
                xstyle: [
                  g.groupInfoAvatar,
                  o("WAWebUISpacing").uiPadding.horiz8,
                ],
                children: A,
              }),
              m.jsx(r("WAWebFlexItem.react"), {
                xstyle: o("WAWebUISpacing").uiPadding.horiz8,
                children: m.jsxs(o("WAWebFlex.react").FlexColumn, {
                  justify: "start",
                  children: [
                    m.jsx(r("WAWebFlexItem.react"), {
                      children: m.jsx(o("WAWebEmojiText.react").EmojiText, {
                        text: i.contact.name,
                        direction: "auto",
                        xstyle: g.groupInfoName,
                      }),
                    }),
                    m.jsx(r("WAWebFlexItem.react"), {
                      xstyle: g.groupInfoLink,
                      children: F,
                    }),
                  ],
                }),
              }),
            ],
          }),
          B,
          W;
        if (w)
          B = m.jsx("div", {
            className: "xevwqry x7vsco6 xdqhqc9 xoud76o x1f6kntn x37zpob",
            children: s._(
              /*BTDS*/ "Anyone with WhatsApp can follow this link to join this community. Only share it with people you trust.",
            ),
          });
        else {
          var q,
            U = L.participants.iAmAdmin(),
            V = (function (e) {
              if (
                Array.isArray(e) &&
                e.length === 2 &&
                e[0] === !0 &&
                e[1] === !0
              )
                return s._(
                  /*BTDS*/ "Members need approval from an admin to join this group. Edit in {=m2}",
                  [
                    s._implicitParam(
                      "=m2",
                      m.jsx(r("WAWebUnstyledButton.react"), {
                        onClick: p,
                        xstyle: g.linkButton,
                        children: s._(/*BTDS*/ "group permissions."),
                      }),
                    ),
                  ],
                );
              if (
                Array.isArray(e) &&
                e.length === 2 &&
                e[0] === !0 &&
                e[1] === !1
              )
                return s._(
                  /*BTDS*/ "Members need approval from an admin to join this group.",
                );
              if (
                Array.isArray(e) &&
                e.length === 2 &&
                e[0] === !1 &&
                e[1] === !0
              )
                return s._(
                  /*BTDS*/ "Members do not need approval from an admin to join this group. Edit in {=m2}",
                  [
                    s._implicitParam(
                      "=m2",
                      m.jsx(r("WAWebUnstyledButton.react"), {
                        onClick: p,
                        xstyle: g.linkButton,
                        children: s._(/*BTDS*/ "group permissions."),
                      }),
                    ),
                  ],
                );
              if (
                Array.isArray(e) &&
                e.length === 2 &&
                e[0] === !1 &&
                e[1] === !1
              )
                return s._(
                  /*BTDS*/ "Members do not need approval from an admin to join this group.",
                );
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })([L.membershipApprovalMode, U]);
          ((B = m.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: (q = o("WAWebUISpacing")).uiPadding.vert16,
            children: [
              m.jsx(r("WAWebFlexItem.react"), {
                xstyle: [g.iconContainer, q.uiPadding.horiz25],
                children: m.jsx(
                  o("WAWebPendingParticipantsIcon.react")
                    .PendingParticipantsIcon,
                  { xstyle: g.icon },
                ),
              }),
              m.jsx(r("WAWebFlexItem.react"), {
                xstyle: q.uiPadding.end24,
                children: m.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
                  color: "dark",
                  xstyle: g.descText,
                  children: V,
                }),
              }),
            ],
          })),
            (W = m.jsx(o("WAWebFlex.react").FlexRow, {
              xstyle: [q.uiMargin.vert4, q.uiMargin.horiz24],
              children: m.jsx("div", { className: "xh8yej3 xjm9jq1 x3x0x6p" }),
            })));
        }
        P = m.jsxs(r("WAWebDrawerBody.react"), {
          children: [
            O,
            B,
            W,
            m.jsx(r("WAWebSendLinkButton.react"), { onClick: x, divider: !1 }),
            M,
            L.participants.iAmAdmin() &&
              m.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
                testid: void 0,
                icon: m.jsx(o("WAWebRevokeIcon.react").RevokeIcon, {
                  xstyle: g.icon,
                }),
                onClick: D,
                divider: !1,
                children: s._(/*BTDS*/ "Reset link"),
              }),
          ],
        });
      }
      return m.jsxs(r("WAWebDrawer.react"), {
        ref: n,
        theme: "invite",
        testid: void 0,
        tsNavigationData: { surface: "unknown", viewName: "group-invite-link" },
        children: [
          m.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: $,
            onBack: a.onBack,
            rtlFixIfOnDarwin: !0,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          }),
          m.jsx("div", { ref: R, tabIndex: -1, children: P }),
        ],
      });
    }
    ((C.displayName = C.name + " [from " + i.id + "]"), (l.default = C));
  },
  226,
);
