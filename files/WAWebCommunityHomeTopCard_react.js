__d(
  "WAWebCommunityHomeTopCard.react",
  [
    "fbt",
    "WAAbortError",
    "WAFilteredCatch",
    "WALogger",
    "WANullthrows",
    "WAPromiseRaceAbort",
    "WAWebAddUserIcon.react",
    "WAWebAlertErrorIcon.react",
    "WAWebChatCommunityUtils",
    "WAWebCommunitySubjectChangePopups.react",
    "WAWebConfirmPopup.react",
    "WAWebCopyPasteSelectable.react",
    "WAWebDrawerSectionRefreshed.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebGroupInfoSubjectInput.react",
    "WAWebL10N",
    "WAWebMiscErrors",
    "WAWebModalManager",
    "WAWebNewGroupIcon.react",
    "WAWebNoop",
    "WAWebPhotoPickerConstants",
    "WAWebPhotoPickerLoadable.react",
    "WAWebProfilePicThumbAction",
    "WAWebSetSubjectGroupAction",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "WDSActionTile.react",
    "WDSActionTileGroup.react",
    "WDSIconIcGroupAdd.react",
    "WDSIconIcGroupAddFilled.react",
    "WDSIconIcLink.react",
    "WDSIconIcPersonAdd.react",
    "WDSIconIcPersonAddFilled.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "stylex",
    "useWAWebABPropConfigValue",
    "useWAWebCommunitySubgroups",
    "useWAWebEventTargetValue",
    "useWAWebModelValues",
    "useWAWebShowCommunitySubjectSyncIssue",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = ["chat", "isAdmin"],
      d,
      m,
      p = m || (m = o("react")),
      _ = m.useState,
      f = {
        groupSecondaryRefreshed: { overflowWrap: "x1mzt3pk", $$css: !0 },
        icon: { zIndex: "xzkaem6", $$css: !0 },
        subjectInputFlex: {
          justifyContent: "xl56j7k",
          width: "xh8yej3",
          $$css: !0,
        },
        infoActions: {
          display: "xrvj5dj",
          rowGap: "x1rpttp",
          columnGap: "x9bxmr9",
          gridAutoFlow: "x1mt1orb",
          gridAutoColumns: "xu6a5m6",
          justifyItems: "x1o2pa38",
          alignItems: "x6s0dn4",
          $$css: !0,
        },
        actionIconRefreshed: { color: "x1v5yvga", $$css: !0 },
        infoAction: {
          flexGrow: "x1iyjqo2",
          color: "x1v5yvga",
          fontWeight: "x1s688f",
          $$css: !0,
        },
        infoActionFontSize: { fontSize: "x1f6kntn", $$css: !0 },
      };
    function g(e) {
      var t = e.chat,
        n = e.isAdmin,
        a = babelHelpers.objectWithoutPropertiesLoose(e, c),
        i = o("useWAWebModelValues").useModelValues(t, [
          "groupMetadata",
          "contact",
          "id",
        ]),
        l = r("useWAWebCommunitySubgroups")(i.groupMetadata),
        u = l.subgroupCount,
        m =
          o("WAWebChatCommunityUtils").isSuspendedCommunity(i) ||
          o("WAWebChatCommunityUtils").isIntegrityDeactivatedCommunity(i),
        _ = s._(/*BTDS*/ "Community"),
        g = p.jsxs(p.Fragment, {
          children: [
            _,
            m
              ? null
              : p.jsxs(p.Fragment, {
                  children: [
                    r("WAWebL10N").isRTL() ? " -\xA0" : " \xB7\xA0",
                    s._(/*BTDS*/ '_j{"*":"{count} groups","_1":"1 group"}', [
                      s._plural(u, "count"),
                    ]),
                  ],
                }),
          ],
        });
      return p.jsx(r("WAWebDrawerSectionRefreshed.react"), {
        theme: "padding-large",
        children: p.jsxs(o("WAWebFlex.react").FlexColumn, {
          align: "center",
          children: [
            p.jsx(y, {
              chat: i,
              xstyle: o("WAWebUISpacing").uiMargin.bottom6,
              isCommunitySuspended: m,
            }),
            p.jsx(C, { chat: i }),
            p.jsx(
              "div",
              babelHelpers.extends(
                {},
                (d || (d = r("stylex"))).props(
                  f.groupSecondaryRefreshed,
                  o("WAWebUISpacing").uiMargin.top10,
                ),
                {
                  children: p.jsx(
                    o("WAWebCopyPasteSelectable.react").SelectableSpan,
                    {
                      dir: "auto",
                      selectable: !0,
                      children: p.jsx(r("WDSText.react"), {
                        type: "Body1",
                        colorName: "contentDeemphasized",
                        children: g,
                      }),
                    },
                  ),
                },
              ),
            ),
            p.jsx(
              h,
              babelHelpers.extends({ chat: i, adminMode: n && m !== !0 }, a),
            ),
          ],
        }),
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = e.adminMode,
        n = e.chat,
        a = e.onAddMembersClick,
        i = e.onInviteMembersClick,
        l = e.onManageCommunityGroupsClick,
        u = e.onViewMembersClick,
        c = r("useWAWebEventTargetValue")(
          n == null ? void 0 : n.groupMetadata,
          ["change:allowNonAdminSubGroupCreation"],
          function () {
            return o("WAWebChatCommunityUtils").canAddGroupToCommunity(n);
          },
        ),
        m = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "waweb_chatinfo_refresh",
        );
      if (!t)
        return m
          ? p.jsx("div", {
              className: "xh8yej3 x1de0gy",
              children: p.jsxs(r("WDSActionTileGroup.react"), {
                children: [
                  p.jsx(r("WDSActionTile.react"), {
                    label: s._(/*BTDS*/ "Add members"),
                    Icon: r("WDSIconIcPersonAdd.react"),
                    onPress: a,
                    tooltip: s._(
                      /*BTDS*/ "Only admins can add members to this community",
                    ),
                    disabled: !0,
                  }),
                  p.jsx(r("WDSActionTile.react"), {
                    label: s._(/*BTDS*/ "Add groups"),
                    Icon: r("WDSIconIcGroupAdd.react"),
                    onPress: l,
                    disabled: !c,
                    tooltip: c
                      ? null
                      : s._(
                          /*BTDS*/ "Only admins can add groups to this community",
                        ),
                  }),
                ],
              }),
            })
          : null;
      if (m)
        return p.jsx("div", {
          className: "xh8yej3 x1de0gy",
          children: p.jsxs(r("WDSActionTileGroup.react"), {
            children: [
              p.jsx(r("WDSActionTile.react"), {
                label: s._(/*BTDS*/ "Invite"),
                Icon: r("WDSIconIcLink.react"),
                onPress: i,
                testid: void 0,
              }),
              p.jsx(r("WDSActionTile.react"), {
                label: s._(/*BTDS*/ "Add members"),
                Icon: r("WDSIconIcPersonAdd.react"),
                onPress: a,
                testid: void 0,
              }),
              p.jsx(r("WDSActionTile.react"), {
                label: s._(/*BTDS*/ "Add groups"),
                Icon: r("WDSIconIcGroupAdd.react"),
                onPress: l,
                testid: void 0,
              }),
            ],
          }),
        });
      var _ = [
        {
          Icon: r("WDSIconIcLink.react"),
          IconRefreshed: r("WDSIconIcLink.react"),
          onClick: i,
          testid: "info-invite-action",
          title: s._(/*BTDS*/ "Invite"),
        },
        {
          Icon: o("WAWebAddUserIcon.react").AddUserIcon,
          IconRefreshed: r("WDSIconIcPersonAddFilled.react"),
          onClick: a != null ? a : u,
          testid: "info-members-action",
          title: a ? s._(/*BTDS*/ "Add members") : s._(/*BTDS*/ "Members"),
        },
        {
          Icon: o("WAWebNewGroupIcon.react").NewGroupIcon,
          IconRefreshed: r("WDSIconIcGroupAddFilled.react"),
          onClick: l,
          testid: "info-add-groups-action",
          title: s._(/*BTDS*/ "Add groups"),
        },
      ];
      return p.jsx(
        "div",
        babelHelpers.extends(
          {},
          (d || (d = r("stylex"))).props(
            f.infoActions,
            o("WAWebUISpacing").uiPadding.top15,
            o("WAWebUISpacing").uiPadding.horiz20,
          ),
          {
            children: _.map(function (e, t) {
              var n = e.IconRefreshed,
                a = e.onClick,
                i = e.testid,
                l = e.title;
              return p.jsx(
                r("WAWebUnstyledButton.react"),
                {
                  "aria-label": l,
                  testid: void 0,
                  onClick: a,
                  xstyle: f.infoActionFontSize,
                  children: p.jsxs(o("WAWebFlex.react").FlexColumn, {
                    align: "center",
                    xstyle: [f.infoAction, o("WAWebUISpacing").uiPadding.all5],
                    children: [
                      p.jsx(n, {
                        xstyle: f.actionIconRefreshed,
                        width: 32,
                        height: 32,
                      }),
                      p.jsx(r("WDSText.react"), {
                        type: "Body1",
                        colorName: "accent",
                        children: l,
                      }),
                    ],
                  }),
                },
                t,
              );
            }),
          },
        ),
      );
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(t) {
      var n,
        a = t.chat,
        i = t.isCommunitySuspended,
        l = t.xstyle,
        s = o("useWAWebModelValues").useModelValues(a, [
          "isReadOnly",
          "groupMetadata",
          "contact",
        ]),
        u = o("useWAWebModelValues").useModelValues(s.contact, [
          "id",
          "profilePicThumb",
        ]);
      u.getProfilePicThumb();
      var c = o("useWAWebModelValues").useModelValues(u.profilePicThumb, [
          "imgFull",
        ]),
        m = _(!1),
        f = m[0],
        g = m[1],
        h = _(!1),
        y = h[0],
        C = h[1],
        b = r("useWAWebUnmountSignal")(),
        v = function (n, a) {
          C(!0);
          var t;
          (n != null && a != null
            ? (t = o("WAWebProfilePicThumbAction").setProfilePic(c, n, a))
            : (t = o("WAWebProfilePicThumbAction").deleteProfilePic(c)),
            r("WAPromiseRaceAbort")(t, b)
              .catch(o("WAAbortError").catchAbort(r("WAWebNoop")))
              .catch(
                o("WAFilteredCatch").filteredCatch(
                  o("WAWebMiscErrors").ActionError,
                  function (t) {
                    (o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "CommunityInfoDrawer: failed to set/delete community image",
                        ])),
                    ),
                      g(!f));
                  },
                ),
              )
              .finally(function () {
                C(!1);
              }));
        },
        S =
          s.isReadOnly ||
          (!c.canDelete() && !c.canSet()) ||
          i ||
          !((n = s.groupMetadata) != null && n.participants.iAmAdmin());
      return p.jsx(
        "div",
        babelHelpers.extends({}, (d || (d = r("stylex"))).props(l), {
          children: p.jsx(
            o("WAWebPhotoPickerLoadable.react").PhotoPickerLoadable,
            {
              type: o("WAWebPhotoPickerConstants").PhotoPickerType.COMMUNITY,
              id: u.id,
              attachToChat: !0,
              pending: y,
              startImage: c.imgFull,
              readOnly: S,
              onImageSet: v,
              dimmed: i,
              size: 128,
            },
            String(f),
          ),
        }),
      );
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = e.chat,
        a = o("useWAWebModelValues").useModelValues(t.contact, ["name"]),
        i = o("useWAWebModelValues").useModelValues(
          r("WANullthrows")(t.groupMetadata),
          ["creation", "restrict"],
        ),
        l = r("useWAWebUnmountSignal")(),
        c = _(!1),
        d = c[0],
        m = c[1],
        g = r("useWAWebShowCommunitySubjectSyncIssue")(t),
        h = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var n = e;
            n.trim() !== a.name &&
              (yield r("WAPromiseRaceAbort")(
                o("WAWebSetSubjectGroupAction").setGroupSubject(t, n),
                l,
              )
                .catch(o("WAAbortError").catchAbort(r("WAWebNoop")))
                .catch(function (e) {
                  o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "community_home:onSetSubject failed",
                      ])),
                  );
                }));
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        y = function () {
          o("WAWebModalManager").ModalManager.open(
            p.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              onOK: o("WAWebModalManager").closeModalManager,
              okText: r("WAWebFbtCommon")("OK"),
              children: s._(
                /*BTDS*/ "Only admins can edit this community's info",
              ),
            }),
          );
        },
        C = function () {
          o("WAWebModalManager").ModalManager.open(
            p.jsx(
              o("WAWebCommunitySubjectChangePopups.react")
                .CommunitySubjectSyncingIssuePopup,
              {
                parentChat: t,
                onOK: function () {
                  return m(!0);
                },
              },
            ),
          );
        };
      return p.jsxs(o("WAWebFlex.react").FlexRow, {
        xstyle: f.subjectInputFlex,
        children: [
          p.jsx(r("WAWebGroupInfoSubjectInput.react"), {
            testid: void 0,
            subject: a.name,
            onSave: h,
            editable: g && !d ? !1 : i.canSetSubject(),
            editRestrictionInfo: i.restrict ? y : void 0,
          }),
          g && !d
            ? p.jsx(r("WAWebUnstyledButton.react"), {
                onClick: C,
                xstyle: [f.icon, o("WAWebUISpacing").uiMargin.top8],
                "aria-label": o(
                  "WAWebCommunitySubjectChangePopups.react",
                ).getCommunitySubjectSyncingIssueTitle(),
                children: p.jsx(o("WAWebAlertErrorIcon.react").AlertErrorIcon, {
                  width: 20,
                }),
              })
            : null,
        ],
      });
    }
    ((C.displayName = C.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
