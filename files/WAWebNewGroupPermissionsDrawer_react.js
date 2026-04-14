__d(
  "WAWebNewGroupPermissionsDrawer.react",
  [
    "fbt",
    "WAWebActionToast.react",
    "WAWebAddUserIcon.react",
    "WAWebChatInfoDrawerRow.react",
    "WAWebChatsOutlineIcon.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebDrawerUtils",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebGroupConstants",
    "WAWebGroupGatingUtils",
    "WAWebGroupHistoryGating",
    "WAWebPendingParticipantsIcon.react",
    "WAWebSetPropertyGroupAction",
    "WAWebText.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUISpacing",
    "WDSIconIcEdit.react",
    "WDSIconIcLink.react",
    "WDSSwitch.react",
    "asyncToGeneratorRuntime",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d = c || (c = o("react")),
      m = { secondary: { color: "xhslqc4", $$css: !0 } };
    function p(e) {
      var t = e.icon,
        a = e.secondaryTitle,
        i = e.settingType,
        l = e.setValue,
        s = e.title,
        u = e.value,
        c = u === !0 ? "off" : "on",
        m = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            l(!e);
            var t = o("WAWebActionToast.react").genId(),
              n = o("WAWebSetPropertyGroupAction").getActionString(i, c)[1];
            o("WAWebToastManager").ToastManager.open(
              d.jsx(o("WAWebToast.react").Toast, { id: t, msg: n }),
            );
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        p = d.jsx(r("WDSSwitch.react"), {
          "aria-label": s,
          value: u,
          onChange: function () {
            return void m(u);
          },
        });
      return d.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRow, {
        icon: t,
        side: p,
        title: s,
        secondaryTitle: a,
        spaced: !0,
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.announce,
        l = a.memberAddMode,
        c = a.memberLinkMode,
        _ = a.memberShareGroupHistoryMode,
        f = a.membershipApprovalMode,
        g = a.onBack,
        h = a.onCancel,
        y = a.participantCount,
        C = a.restrict,
        b = a.setAnnounce,
        v = a.setMemberAddMode,
        S = a.setMemberLinkMode,
        R = a.setMemberShareGroupHistoryMode,
        L = a.setMembershipApprovalMode,
        E = a.setRestrict,
        k = o("WAWebDrawerUtils").getDrawerHeaderType(a.viewType),
        I =
          l === !0 &&
          o("WAWebGroupGatingUtils").isAnyoneCanLinkToGroupsEnabled() &&
          !(
            o("WAWebGroupGatingUtils").isAnyoneCanLinkToGroupsM2Enabled() &&
            y != null &&
            y >
              o("WAWebGroupGatingUtils")
                .ANYONE_CAN_LINK_M2_PARTICIPANT_THRESHOLD
          ),
        T =
          l === !0 &&
          o("WAWebGroupHistoryGating").isGroupHistorySettingsToggleUIEnabled(),
        D = function (t) {
          (v(t), t === !1 && c === !0 && S(!1));
        };
      return d.jsxs(r("WAWebDrawer.react"), {
        ref: n,
        theme: "striped",
        testid: void 0,
        viewType: a.viewType,
        tsNavigationData: {
          surface: "unknown",
          viewName: "new-group-permissions",
        },
        children: [
          d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: s._(/*BTDS*/ "Group permissions"),
            type: k,
            onBack: g,
            onCancel: h,
          }),
          d.jsxs(r("WAWebDrawerBody.react"), {
            children: [
              d.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (u || (u = r("stylex"))).props(
                    o("WAWebUISpacing").uiMargin.horiz30,
                    o("WAWebUISpacing").uiMargin.vert10,
                  ),
                  {
                    children: d.jsx(o("WAWebText.react").WAWebTextMuted, {
                      children: s._(/*BTDS*/ "Members can:"),
                    }),
                  },
                ),
              ),
              d.jsxs(r("WAWebDrawerSection.react"), {
                animation: !1,
                children: [
                  d.jsx(p, {
                    value: C,
                    setValue: E,
                    icon: d.jsx(r("WDSIconIcEdit.react"), {
                      viewBox: { x: 0, y: 0, width: 24, height: 24 },
                      width: 18,
                      height: 18,
                      xstyle: m.secondary,
                    }),
                    settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE
                      .RESTRICT,
                    title: s._(/*BTDS*/ "Edit group settings"),
                    secondaryTitle: d.jsx(o("WAWebText.react").WAWebTextMuted, {
                      children: s._(
                        /*BTDS*/ "This includes the name, icon, description, disappearing message timer, and the ability to pin, keep or unkeep messages.",
                      ),
                    }),
                  }),
                  d.jsx(p, {
                    value: i,
                    setValue: b,
                    icon: d.jsx(
                      o("WAWebChatsOutlineIcon.react").ChatsOutlineIcon,
                      { width: 20, height: 20, xstyle: m.secondary },
                    ),
                    settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE
                      .ANNOUNCEMENT,
                    title: s._(/*BTDS*/ "Send new messages"),
                  }),
                  d.jsx(p, {
                    value: l,
                    setValue: D,
                    icon: d.jsx(o("WAWebAddUserIcon.react").AddUserIcon, {
                      width: 22,
                      height: 22,
                      xstyle: m.secondary,
                    }),
                    settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE
                      .MEMBER_ADD_MODE,
                    title: s._(/*BTDS*/ "Add other members"),
                  }),
                  T &&
                    d.jsx(p, {
                      value: _,
                      setValue: R,
                      icon: d.jsx(r("WDSIconIcLink.react"), {
                        testid: void 0,
                        xstyle: m.secondary,
                      }),
                      settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE
                        .MEMBER_SHARE_GROUP_HISTORY_MODE,
                      title: s._(/*BTDS*/ "Send message history"),
                      secondaryTitle: d.jsx(
                        o("WAWebText.react").WAWebTextMuted,
                        {
                          children: s._(
                            /*BTDS*/ "Past messages can be sent to new members.",
                          ),
                        },
                      ),
                    }),
                  I &&
                    d.jsx(p, {
                      value: c,
                      setValue: S,
                      icon: d.jsx(r("WDSIconIcLink.react"), {
                        testid: void 0,
                        xstyle: m.secondary,
                      }),
                      settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE
                        .MEMBER_LINK_MODE,
                      title: s._(/*BTDS*/ "Invite via link"),
                    }),
                ],
              }),
              d.jsxs(d.Fragment, {
                children: [
                  d.jsx(
                    "div",
                    babelHelpers.extends(
                      {},
                      u.props(
                        o("WAWebUISpacing").uiMargin.horiz30,
                        o("WAWebUISpacing").uiMargin.vert10,
                      ),
                      {
                        children: d.jsx(o("WAWebText.react").WAWebTextMuted, {
                          children: s._(/*BTDS*/ "Admins can:"),
                        }),
                      },
                    ),
                  ),
                  d.jsx(r("WAWebDrawerSection.react"), {
                    animation: !1,
                    children: d.jsx(p, {
                      value: f,
                      setValue: L,
                      icon: d.jsx(
                        o("WAWebPendingParticipantsIcon.react")
                          .PendingParticipantsIcon,
                        { width: 19, height: 19, xstyle: m.secondary },
                      ),
                      settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE
                        .MEMBERSHIP_APPROVAL_MODE,
                      title: s._(/*BTDS*/ "Approve new members"),
                      secondaryTitle: d.jsx(
                        o("WAWebText.react").WAWebTextMuted,
                        {
                          children: s._(
                            /*BTDS*/ "When turned on, admins must approve anyone who wants to join this group. {=m2}",
                            [
                              s._implicitParam(
                                "=m2",
                                d.jsx(
                                  o("WAWebExternalLink.react").ExternalLink,
                                  {
                                    href: o(
                                      "WAWebFaqUrl",
                                    ).getMembershipApprovalModeFaqUrl(),
                                    children: s._(/*BTDS*/ "Learn more"),
                                  },
                                ),
                              ),
                            ],
                          ),
                        },
                      ),
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
