__d(
  "WAWebCommunityExistingGroupsConfirmationDrawer.react",
  [
    "fbt",
    "WAWebButton.react",
    "WAWebChat.react",
    "WAWebChatCollection",
    "WAWebCommunityAddGroupConfirmationPopup.react",
    "WAWebCommunityExistingGroupConfirmationPopup.react",
    "WAWebDetailImage.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebModalManager",
    "WAWebSettingsIcon.react",
    "WAWebText.react",
    "WAWebToastbar.react",
    "WAWebUISpacing",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = {
        header: {
          maxWidth: "x55n99s",
          textAlign: "x2b8uid",
          lineHeight: "x1evy7pa",
          $$css: !0,
        },
        section: { maxWidth: "x13qrzjo", $$css: !0 },
        disclaimerText: {
          textAlign: "x2b8uid",
          lineHeight: "x16h55sf",
          $$css: !0,
        },
        toastbar: { position: "xixxii4", justifyContent: "xl56j7k", $$css: !0 },
        row: { width: "xh8yej3", justifyContent: "x1qughib", $$css: !0 },
        column: { width: "xh8yej3", $$css: !0 },
      };
    function m(e) {
      var t = e.onClick;
      return c.jsx(r("WAWebToastbar.react"), {
        dismissible: !1,
        wrapperXstyle: d.toastbar,
        children: c.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
          onClick: t,
          testid: void 0,
          children: s._(/*BTDS*/ "Add to community"),
        }),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.isCommunityAdmin,
        n = e.selectedGroups,
        a = null;
      return (
        t
          ? (a =
              n.length === 1
                ? s._(
                    /*BTDS*/ "People in this group will become community members and can join other community groups. You can review group permissions:",
                  )
                : s._(
                    /*BTDS*/ "People in these groups will become community members and can join other community groups. You can review group permissions:",
                  ))
          : (a =
              n.length === 1
                ? s._(
                    /*BTDS*/ "If approved by community admins, people in this group will become community members and can join other community groups. You can review group permissions:",
                  )
                : s._(
                    /*BTDS*/ "If approved by community admins, people in these groups will become community members and can join other community groups. You can review group permissions:",
                  )),
        c.jsx(r("WAWebFlexItem.react"), {
          align: "center",
          xstyle: [
            d.section,
            o("WAWebUISpacing").uiMargin.top8,
            o("WAWebUISpacing").uiPadding.bottom30,
            o("WAWebUISpacing").uiPadding.top10,
          ],
          children: c.jsxs(o("WAWebText.react").WAWebTextSmall, {
            color: "secondary",
            xstyle: d.disclaimerText,
            children: [a, " "],
          }),
        })
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(t) {
      var n,
        a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.communityName,
        u = i.isCommunityAdmin,
        _ = i.isParentGroupClosed,
        f = i.onBack,
        g = i.onGroupPermissions,
        h = i.onSubmit,
        y = i.parentGroupId,
        C = i.selectedGroups,
        b = function () {
          return c.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "start",
            xstyle: [o("WAWebUISpacing").uiMargin.bottom16, d.column],
            children: C.map(function (e) {
              return c.jsxs(
                o("WAWebFlex.react").FlexRow,
                {
                  xstyle: d.row,
                  align: "center",
                  children: [
                    c.jsx(r("WAWebFlexItem.react"), {
                      grow: 0,
                      children: c.jsx(o("WAWebChat.react").ChatOrContact, {
                        theme: "plain",
                        chat: o("WAWebChatCollection").ChatCollection.assertGet(
                          e.id,
                        ),
                        mode: o("WAWebChat.react").Mode.INFO,
                        noContext: !0,
                        doNotBoldUnread: !0,
                      }),
                    }),
                    c.jsx(o("WAWebButton.react").WAWebButtonPlainWhite, {
                      icon: o("WAWebSettingsIcon.react").SettingsIcon,
                      onClick: function () {
                        return g(e.id);
                      },
                      ariaLabel: s._(/*BTDS*/ "Edit group permissions button"),
                    }),
                  ],
                },
                e.id.toString(),
              );
            }),
          });
        },
        v = function () {
          h(C);
        },
        S = function () {
          u
            ? _
              ? v()
              : o("WAWebModalManager").ModalManager.open(
                  c.jsx(
                    r("WAWebCommunityExistingGroupConfirmationPopup.react"),
                    { onContinue: v, communityName: l, groupCount: C.length },
                  ),
                )
            : o("WAWebModalManager").ModalManager.open(
                c.jsx(r("WAWebCommunityAddGroupConfirmationPopup.react"), {
                  selectedGroups: C,
                  onOK: function () {
                    (o("WAWebModalManager").ModalManager.close(), v());
                  },
                  onCancel: o("WAWebModalManager").closeModalManager,
                }),
              );
        },
        R = s._(
          /*BTDS*/ '_j{"*":"Add {group-count} groups to \\u201c{community-name}\\u201d?","_1":"Add 1 group to \\u201c{community-name}\\u201d?"}',
          [s._plural(C.length, "group-count"), s._param("community-name", l)],
        );
      return c.jsxs(r("WAWebDrawer.react"), {
        tsNavigationData: {
          surface: "unknown",
          viewName: "community-existing-groups-confirmation",
        },
        children: [
          c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: f,
          }),
          c.jsx(r("WAWebDrawerBody.react"), {
            ref: a,
            children: c.jsx(r("WAWebDrawerSection.react"), {
              animation: !1,
              theme: "full-height",
              children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
                xstyle: [
                  (n = o("WAWebUISpacing")).uiMargin.horiz40,
                  n.uiMargin.bottom40,
                ],
                children: [
                  c.jsx(r("WAWebFlexItem.react"), {
                    align: "center",
                    xstyle: n.uiMargin.top30,
                    children: c.jsx(o("WAWebDetailImage.react").DetailImage, {
                      id: y,
                      size: 104,
                      quality: o("WAWebDetailImage.react").DetailImageQuality
                        .High,
                      shape: o("WAWebDetailImage.react").DetailImageShape
                        .Squircle,
                    }),
                  }),
                  c.jsx(o("WAWebText.react").WAWebTextLarge, {
                    xstyle: [
                      n.uiMargin.top20,
                      n.uiMargin.horizAuto,
                      n.uiMargin.bottom0,
                      d.header,
                    ],
                    children: R,
                  }),
                  c.jsx(p, { isCommunityAdmin: u, selectedGroups: C }),
                  b(),
                ],
              }),
            }),
          }),
          c.jsx(m, { onClick: S }),
        ],
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
