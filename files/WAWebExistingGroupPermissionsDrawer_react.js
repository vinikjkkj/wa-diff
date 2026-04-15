__d(
  "WAWebExistingGroupPermissionsDrawer.react",
  [
    "fbt",
    "WAWebABProps",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebChatInfoDrawerRow.react",
    "WAWebChatRefreshedIcon.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebEmojiText.react",
    "WAWebFaqUrl",
    "WAWebFbtIntlList",
    "WAWebGroupConstants",
    "WAWebGroupGatingUtils",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryShareMode",
    "WAWebGroupLinkResetConfirmationModal.react",
    "WAWebGroupManageAdminModal",
    "WAWebGroupMemberLinkMode",
    "WAWebGroupSettingsConfirmation",
    "WAWebGroupType",
    "WAWebMessageReportRefreshedIcon.react",
    "WAWebMiscGatingUtils",
    "WAWebModalManager",
    "WAWebParticipantListUtils",
    "WAWebPencilRefreshedIcon.react",
    "WAWebPersonClockIcon.react",
    "WAWebPersonGearIcon.react",
    "WAWebPinMsgGatingUtils",
    "WAWebSchemaGroupMetadata",
    "WAWebSetPropertyGroupAction",
    "WAWebText.react",
    "WAWebUISpacing",
    "WDSIconIcGroupAdd.react",
    "WDSIconIcLink.react",
    "WDSSwitch.react",
    "WDSTextualLink.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebChatValues",
    "useWAWebListener",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useState,
      m = {
        sectionHeaderRefreshed: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          height: "x1vqgdyp",
          backgroundColor: "x1280gxy",
          $$css: !0,
        },
      };
    function p(e) {
      var t = o("react-compiler-runtime").c(32),
        a = e.chat,
        i = e.groupMetadata,
        l = e.icon,
        s = e.onConfirm,
        u = e.onValidateChange,
        m = e.secondaryTitle,
        p = e.settingType,
        _ = e.title,
        f;
      t[0] !== i || t[1] !== p
        ? ((f = function () {
            switch (p) {
              case o("WAWebGroupConstants").GROUP_SETTING_TYPE.ANNOUNCEMENT:
                return i.announce !== !0;
              case o("WAWebGroupConstants").GROUP_SETTING_TYPE.RESTRICT:
                return i.restrict !== !0;
              case o("WAWebGroupConstants").GROUP_SETTING_TYPE
                .NO_FREQUENTLY_FORWARDED:
                return i.noFrequentlyForwarded !== !0;
              case o("WAWebGroupConstants").GROUP_SETTING_TYPE
                .MEMBERSHIP_APPROVAL_MODE:
                return i.membershipApprovalMode === !0;
              case o("WAWebGroupConstants").GROUP_SETTING_TYPE
                .REPORT_TO_ADMIN_MODE:
                return i.reportToAdminMode === !0;
              case o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_ADD_MODE:
                return (
                  i.memberAddMode ===
                  o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD
                );
              case o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_LINK_MODE:
                return (
                  i.memberLinkMode ===
                  o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK
                );
              case o("WAWebGroupConstants").GROUP_SETTING_TYPE
                .MEMBER_SHARE_GROUP_HISTORY_MODE:
                return (
                  i.memberShareGroupHistoryMode ===
                  o("WAWebGroupHistoryShareMode").MemberShareGroupHistoryMode
                    .ALL_MEMBER_SHARE
                );
            }
            return !1;
          }),
          (t[0] = i),
          (t[1] = p),
          (t[2] = f))
        : (f = t[2]);
      var g = f,
        h;
      t[3] !== g
        ? ((h = function () {
            return g();
          }),
          (t[3] = g),
          (t[4] = h))
        : (h = t[4]);
      var y = d(h),
        C = y[0],
        b = y[1],
        v;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = [
            "change:restrict",
            "change:announce",
            "change:noFrequentlyForwarded",
            "change:membershipApprovalMode",
            "change:memberAddMode",
            "change:reportToAdminMode",
            "change:memberLinkMode",
            "change:memberShareGroupHistoryMode",
          ]),
          (t[5] = v))
        : (v = t[5]);
      var S;
      (t[6] !== g
        ? ((S = function () {
            return b(g());
          }),
          (t[6] = g),
          (t[7] = S))
        : (S = t[7]),
        o("useWAWebListener").useListener(i, v, S));
      var R;
      t[8] !== p
        ? ((R = function (t) {
            switch (p) {
              case o("WAWebGroupConstants").GROUP_SETTING_TYPE.ANNOUNCEMENT:
                return t ? 0 : 1;
              case o("WAWebGroupConstants").GROUP_SETTING_TYPE.RESTRICT:
                return t ? 0 : 1;
              case o("WAWebGroupConstants").GROUP_SETTING_TYPE
                .NO_FREQUENTLY_FORWARDED:
                return t ? 0 : 1;
              case o("WAWebGroupConstants").GROUP_SETTING_TYPE
                .MEMBERSHIP_APPROVAL_MODE:
                return t ? 1 : 0;
              case o("WAWebGroupConstants").GROUP_SETTING_TYPE
                .REPORT_TO_ADMIN_MODE:
                return t ? 1 : 0;
              case o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_ADD_MODE:
                return t ? 1 : 0;
              case o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_LINK_MODE:
                return t ? 1 : 0;
              case o("WAWebGroupConstants").GROUP_SETTING_TYPE
                .MEMBER_SHARE_GROUP_HISTORY_MODE:
                return t ? 1 : 0;
            }
            return 0;
          }),
          (t[8] = p),
          (t[9] = R))
        : (R = t[9]);
      var L = R,
        E;
      t[10] !== a || t[11] !== L || t[12] !== u || t[13] !== p || t[14] !== C
        ? ((E = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = !C;
              (u == null || (yield u(e))) &&
                (yield o("WAWebSetPropertyGroupAction").setGroupProperty(
                  a,
                  p,
                  L(e),
                ));
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (t[10] = a),
          (t[11] = L),
          (t[12] = u),
          (t[13] = p),
          (t[14] = C),
          (t[15] = E))
        : (E = t[15]);
      var k = E,
        I;
      t[16] !== k || t[17] !== s
        ? ((I = function () {
            s
              ? s(function () {
                  return void k();
                })
              : k();
          }),
          (t[16] = k),
          (t[17] = s),
          (t[18] = I))
        : (I = t[18]);
      var T = I,
        D;
      t[19] !== T || t[20] !== _ || t[21] !== C
        ? ((D = c.jsx(r("WDSSwitch.react"), {
            "aria-label": _,
            value: C,
            onChange: T,
          })),
          (t[19] = T),
          (t[20] = _),
          (t[21] = C),
          (t[22] = D))
        : (D = t[22]);
      var x = D,
        $;
      t[23] !== _
        ? (($ = c.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
            children: _,
          })),
          (t[23] = _),
          (t[24] = $))
        : ($ = t[24]);
      var P;
      t[25] !== m
        ? ((P = c.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, {
            children: m,
          })),
          (t[25] = m),
          (t[26] = P))
        : (P = t[26]);
      var N;
      return (
        t[27] !== l || t[28] !== $ || t[29] !== P || t[30] !== x
          ? ((N = c.jsx(
              o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed,
              { icon: l, side: x, title: $, secondaryTitle: P },
            )),
            (t[27] = l),
            (t[28] = $),
            (t[29] = P),
            (t[30] = x),
            (t[31] = N))
          : (N = t[31]),
        N
      );
    }
    function _(t) {
      var n = o("react-compiler-runtime").c(3),
        a = t.title,
        i;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = (e || (e = r("stylex"))).props(
            m.sectionHeaderRefreshed,
            o("WAWebUISpacing").uiPadding.horiz30,
          )),
          (n[0] = i))
        : (i = n[0]);
      var l;
      return (
        n[1] !== a
          ? ((l = c.jsx(
              "div",
              babelHelpers.extends({}, i, {
                children: c.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
                  color: "wdsContentDeemphasized",
                  children: a,
                }),
              }),
            )),
            (n[1] = a),
            (n[2] = l))
          : (l = n[2]),
        l
      );
    }
    function f(e) {
      var t = e.groupMetadata,
        n = d(o("WAWebParticipantListUtils").calculateAdminsList(t)),
        a = n[0],
        i = n[1];
      o("useWAWebListener").useListener(
        t.participants,
        "change:isAdmin",
        function () {
          return i(o("WAWebParticipantListUtils").calculateAdminsList(t));
        },
      );
      var l = r("WAWebFbtIntlList")(
          a,
          r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
          r("WAWebFbtIntlList").DELIMITERS.COMMA,
        ),
        s = c.jsx(o("WAWebEmojiText.react").EmojiText, {
          text: l,
          ellipsify: !0,
        });
      return c.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, {
        children: s,
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = o("react-compiler-runtime").c(73),
        a = e.chat,
        i = e.groupLinkingFlow,
        l = e.groupMetadata,
        u = e.onClose,
        d = e.ref,
        m;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = [
            o("WAWebChatGetters").getId,
            o("WAWebChatGetters").getIsNewsletter,
          ]),
          (t[0] = m))
        : (m = t[0]);
      var g = o("useWAWebChatValues").useChatValues(a.id, m),
        C = g[1],
        b;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = [
            "restrict",
            "announce",
            "noFrequentlyForwarded",
            "participants",
            "owner",
            "groupType",
            "isParentGroup",
            "membershipApprovalMode",
            "reportToAdminMode",
            "memberAddMode",
            "memberLinkMode",
            "membershipApprovalRequests",
            "participants",
            "hasCapi",
            "memberShareGroupHistoryMode",
            "isOpenBotGroup",
          ]),
          (t[1] = b))
        : (b = t[1]);
      var v = o("useWAWebModelValues").useModelValues(l, b),
        S = i != null ? i : !1,
        R;
      t[2] !== v.membershipApprovalRequests.length || t[3] !== v.participants
        ? ((R = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = v.membershipApprovalRequests.length;
                if (e === !1 && t > 0) {
                  if (
                    !(yield o(
                      "WAWebGroupSettingsConfirmation",
                    ).confirmPendingRequests())
                  )
                    return !1;
                  var n = v.participants.length,
                    r = o("WAWebMiscGatingUtils").getGroupSizeLimit() - n;
                  if (
                    t > r &&
                    !(yield o(
                      "WAWebGroupSettingsConfirmation",
                    ).confirmGroupFull(r, t))
                  )
                    return !1;
                }
                return !0;
              },
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })()),
          (t[2] = v.membershipApprovalRequests.length),
          (t[3] = v.participants),
          (t[4] = R))
        : (R = t[4]);
      var L = R,
        E = y,
        k = h,
        I;
      t[5] !== a || t[6] !== v.reportToAdminMode || t[7] !== C
        ? ((I =
            o("WAWebABProps").getABPropConfigValue(
              "report_to_admin_kill_switch",
            ) &&
            !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(a) &&
            !C &&
            (v.reportToAdminMode ||
              o("WAWebABProps").getABPropConfigValue(
                "report_to_admin_enabled",
              ))),
          (t[5] = a),
          (t[6] = v.reportToAdminMode),
          (t[7] = C),
          (t[8] = I))
        : (I = t[8]);
      var T = I,
        D;
      t[9] !== a || t[10] !== v.memberAddMode
        ? ((D =
            !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(a) &&
            v.memberAddMode ===
              o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD &&
            o("WAWebGroupGatingUtils").isAnyoneCanLinkToGroupsEnabled()),
          (t[9] = a),
          (t[10] = v.memberAddMode),
          (t[11] = D))
        : (D = t[11]);
      var x = D,
        $;
      t[12] !== a || t[13] !== v.memberAddMode
        ? (($ =
            !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(a) &&
            v.memberAddMode ===
              o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD &&
            o(
              "WAWebGroupHistoryGating",
            ).isGroupHistorySettingsToggleUIEnabled()),
          (t[12] = a),
          (t[13] = v.memberAddMode),
          (t[14] = $))
        : ($ = t[14]);
      var P = $,
        N;
      t[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = { surface: "unknown", viewName: "existing-group-permissions" }),
          (t[15] = N))
        : (N = t[15]);
      var M;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = s._(/*BTDS*/ "Group permissions")), (t[16] = M))
        : (M = t[16]);
      var w;
      t[17] !== u
        ? ((w = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: M,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: u,
          })),
          (t[17] = u),
          (t[18] = w))
        : (w = t[18]);
      var A;
      t[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = c.jsx(_, { title: s._(/*BTDS*/ "Members can:") })), (t[19] = A))
        : (A = t[19]);
      var F, O;
      t[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = c.jsx(
            o("WAWebPencilRefreshedIcon.react").PencilRefreshedIcon,
            {},
          )),
          (O = s._(/*BTDS*/ "Edit group settings")),
          (t[20] = F),
          (t[21] = O))
        : ((F = t[20]), (O = t[21]));
      var B;
      t[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = c.jsx(o("WAWebText.react").WAWebTextMuted, {
            children: o(
              "WAWebPinMsgGatingUtils",
            ).isPinnedMessagesM1SenderEnabled()
              ? s._(
                  /*BTDS*/ "This includes the name, icon, description, disappearing message timer, and the ability to pin, keep or unkeep messages.",
                )
              : s._(
                  /*BTDS*/ "This includes the name, icon, description, disappearing message timer, and keeping and unkeeping messages.",
                ),
          })),
          (t[22] = B))
        : (B = t[22]);
      var W, q;
      t[23] !== a || t[24] !== v
        ? ((W = c.jsx(p, {
            chat: a,
            groupMetadata: v,
            settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE.RESTRICT,
            icon: F,
            title: O,
            secondaryTitle: B,
          })),
          (q =
            v.groupType !==
            o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
              ? c.jsx(p, {
                  chat: a,
                  groupMetadata: v,
                  settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE
                    .ANNOUNCEMENT,
                  icon: c.jsx(
                    o("WAWebChatRefreshedIcon.react").ChatRefreshedIcon,
                    {},
                  ),
                  title: s._(/*BTDS*/ "Send new messages"),
                })
              : null),
          (t[23] = a),
          (t[24] = v),
          (t[25] = W),
          (t[26] = q))
        : ((W = t[25]), (q = t[26]));
      var U, V;
      t[27] === Symbol.for("react.memo_cache_sentinel")
        ? ((U = c.jsx(r("WDSIconIcGroupAdd.react"), {})),
          (V = s._(/*BTDS*/ "Add other members")),
          (t[27] = U),
          (t[28] = V))
        : ((U = t[27]), (V = t[28]));
      var H =
          v.memberAddMode ===
            o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD &&
          v.memberLinkMode ===
            o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK &&
          o("WAWebGroupGatingUtils").isAnyoneCanLinkToGroupsEnabled()
            ? k
            : void 0,
        G;
      t[29] !== a || t[30] !== v || t[31] !== H
        ? ((G = c.jsx(p, {
            chat: a,
            groupMetadata: v,
            settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE
              .MEMBER_ADD_MODE,
            icon: U,
            title: V,
            onConfirm: H,
          })),
          (t[29] = a),
          (t[30] = v),
          (t[31] = H),
          (t[32] = G))
        : (G = t[32]);
      var z;
      t[33] !== a || t[34] !== v || t[35] !== P
        ? ((z =
            P &&
            c.jsx(p, {
              chat: a,
              groupMetadata: v,
              settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE
                .MEMBER_SHARE_GROUP_HISTORY_MODE,
              icon: c.jsx(r("WDSIconIcGroupAdd.react"), {}),
              title: s._(/*BTDS*/ "Send message history"),
              secondaryTitle: s._(
                /*BTDS*/ "Past messages can be sent to new members.",
              ),
            })),
          (t[33] = a),
          (t[34] = v),
          (t[35] = P),
          (t[36] = z))
        : (z = t[36]);
      var j;
      t[37] !== a || t[38] !== v || t[39] !== x
        ? ((j =
            x &&
            c.jsx(p, {
              chat: a,
              groupMetadata: v,
              icon: c.jsx(r("WDSIconIcLink.react"), { testid: void 0 }),
              settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE
                .MEMBER_LINK_MODE,
              title: s._(/*BTDS*/ "Invite via link"),
              onConfirm:
                v.memberLinkMode ===
                o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK
                  ? k
                  : void 0,
            })),
          (t[37] = a),
          (t[38] = v),
          (t[39] = x),
          (t[40] = j))
        : (j = t[40]);
      var K;
      t[41] !== a || t[42] !== v || t[43] !== S || t[44] !== T
        ? ((K =
            T && !S
              ? c.jsx(p, {
                  chat: a,
                  groupMetadata: v,
                  settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE
                    .REPORT_TO_ADMIN_MODE,
                  onValidateChange: E,
                  icon: c.jsx(
                    o("WAWebMessageReportRefreshedIcon.react")
                      .MessageReportRefreshedIcon,
                    {},
                  ),
                  title: s._(/*BTDS*/ "Send for admin review"),
                  secondaryTitle: c.jsx(o("WAWebText.react").WAWebTextMuted, {
                    children: s._(
                      /*BTDS*/ "Allow group members to send messages to group admins for review. {=m2}",
                      [
                        s._implicitParam(
                          "=m2",
                          c.jsx(r("WDSTextualLink.react"), {
                            href: o("WAWebFaqUrl").getReportToAdminFaqUrl(),
                            children: s._(/*BTDS*/ "Learn more"),
                          }),
                        ),
                      ],
                    ),
                  }),
                })
              : null),
          (t[41] = a),
          (t[42] = v),
          (t[43] = S),
          (t[44] = T),
          (t[45] = K))
        : (K = t[45]);
      var Q;
      t[46] !== W ||
      t[47] !== q ||
      t[48] !== G ||
      t[49] !== z ||
      t[50] !== j ||
      t[51] !== K
        ? ((Q = c.jsxs(r("WAWebDrawerSection.react"), {
            animation: !1,
            xstyle: o("WAWebUISpacing").uiPadding.all0,
            theme: "refresh-new",
            children: [W, q, G, z, j, K],
          })),
          (t[46] = W),
          (t[47] = q),
          (t[48] = G),
          (t[49] = z),
          (t[50] = j),
          (t[51] = K),
          (t[52] = Q))
        : (Q = t[52]);
      var X;
      t[53] === Symbol.for("react.memo_cache_sentinel")
        ? ((X = c.jsx(_, { title: s._(/*BTDS*/ "Admins can:") })), (t[53] = X))
        : (X = t[53]);
      var Y, J;
      t[54] === Symbol.for("react.memo_cache_sentinel")
        ? ((Y = c.jsx(o("WAWebPersonClockIcon.react").PersonClockIcon, {})),
          (J = s._(/*BTDS*/ "Approve new members")),
          (t[54] = Y),
          (t[55] = J))
        : ((Y = t[54]), (J = t[55]));
      var Z;
      t[56] === Symbol.for("react.memo_cache_sentinel")
        ? ((Z = c.jsx(o("WAWebText.react").WAWebTextMuted, {
            children: s._(
              /*BTDS*/ "When turned on, admins must approve anyone who wants to join this group. {=m2}",
              [
                s._implicitParam(
                  "=m2",
                  c.jsx(r("WDSTextualLink.react"), {
                    href: o("WAWebFaqUrl").getMembershipApprovalModeFaqUrl(),
                    children: s._(/*BTDS*/ "Learn more"),
                  }),
                ),
              ],
            ),
          })),
          (t[56] = Z))
        : (Z = t[56]);
      var ee;
      t[57] !== a || t[58] !== v || t[59] !== L
        ? ((ee = c.jsx(r("WAWebDrawerSection.react"), {
            animation: !1,
            theme: "refresh-new",
            xstyle: o("WAWebUISpacing").uiPadding.all0,
            children: c.jsx(p, {
              chat: a,
              groupMetadata: v,
              settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE
                .MEMBERSHIP_APPROVAL_MODE,
              onValidateChange: L,
              icon: Y,
              title: J,
              secondaryTitle: Z,
            }),
          })),
          (t[57] = a),
          (t[58] = v),
          (t[59] = L),
          (t[60] = ee))
        : (ee = t[60]);
      var te;
      t[61] !== a || t[62] !== v || t[63] !== S
        ? ((te =
            v.groupType !==
              o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP && !S
              ? (function () {
                  var e = s._(/*BTDS*/ "Edit group admins"),
                    t = function () {
                      o("WAWebGroupManageAdminModal").openManageAdminModal(
                        a,
                        v,
                      );
                    },
                    n = c.jsx(
                      o("WAWebChatInfoDrawerRow.react")
                        .ChatInfoDrawerRowRefreshed,
                      {
                        onClick: t,
                        icon: c.jsx(
                          o("WAWebPersonGearIcon.react").PersonGearIcon,
                          {},
                        ),
                        title: c.jsx(
                          o("WAWebText.react").WAWebTextTitleRefreshed,
                          { children: e },
                        ),
                        secondaryTitle: c.jsx(f, { groupMetadata: v }),
                      },
                    );
                  return c.jsxs(c.Fragment, {
                    children: [
                      c.jsx(_, { title: s._(/*BTDS*/ "Group admins") }),
                      c.jsx(r("WAWebDrawerSection.react"), {
                        animation: !1,
                        theme: "refresh-new",
                        xstyle: o("WAWebUISpacing").uiPadding.all0,
                        children: n,
                      }),
                    ],
                  });
                })()
              : null),
          (t[61] = a),
          (t[62] = v),
          (t[63] = S),
          (t[64] = te))
        : (te = t[64]);
      var ne;
      t[65] !== Q || t[66] !== ee || t[67] !== te
        ? ((ne = c.jsxs(r("WAWebDrawerBody.react"), {
            children: [A, Q, X, ee, te],
          })),
          (t[65] = Q),
          (t[66] = ee),
          (t[67] = te),
          (t[68] = ne))
        : (ne = t[68]);
      var re;
      return (
        t[69] !== d || t[70] !== ne || t[71] !== w
          ? ((re = c.jsxs(r("WAWebDrawer.react"), {
              ref: d,
              theme: "striped",
              testid: void 0,
              tsNavigationData: N,
              children: [w, ne],
            })),
            (t[69] = d),
            (t[70] = ne),
            (t[71] = w),
            (t[72] = re))
          : (re = t[72]),
        re
      );
    }
    function h(e) {
      o("WAWebModalManager").ModalManager.open(
        c.jsx(r("WAWebGroupLinkResetConfirmationModal.react"), {
          onConfirm: e,
        }),
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return !(
            e === !1 &&
            !(yield o(
              "WAWebGroupSettingsConfirmation",
            ).confirmDeleteReportsForAdminReview())
          );
        })),
        C.apply(this, arguments)
      );
    }
    l.default = g;
  },
  226,
);
