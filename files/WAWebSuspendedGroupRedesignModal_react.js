__d(
  "WAWebSuspendedGroupRedesignModal.react",
  [
    "fbt",
    "WAWebCxtUrl",
    "WAWebDeactivateCommunityDrawerLoadable",
    "WAWebDrawerManager",
    "WAWebExternalLink.react",
    "WAWebFlex.react",
    "WAWebLeaveCommunityModal.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebSuspendedGroupUtils",
    "WDSButton.react",
    "WDSButtonGroup.react",
    "WDSIconIcBlock.react",
    "WDSIconIcCheck.react",
    "WDSIconIcClose.react",
    "WDSIconIcGppMaybe.react",
    "WDSIllustrationWdsPictoGroupBlockFeedbackNegative.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        icon: { color: "xhslqc4", $$css: !0 },
        title: { paddingTop: "x9orja2", paddingBottom: "xwib8y2", $$css: !0 },
        bodyRow: {
          paddingTop: "xyinxu5",
          paddingInlineStart: "x1g0dm76",
          paddingInlineEnd: "xyri2b",
          columnGap: "x1qgv0r9",
          $$css: !0,
        },
        buttons: {
          paddingTop: "x1p5oq8j",
          paddingBottom: "xsag5q8",
          alignSelf: "xpvyfi4",
          $$css: !0,
        },
      };
    function d(e) {
      var t,
        n = e.chat,
        a = e.isCommunity,
        i =
          ((t = n.groupMetadata) == null
            ? void 0
            : t.participants.iAmAdmin()) === !0,
        l = function () {
          (o("WAWebModalManager").closeModalManager(),
            o("WAWebSuspendedGroupUtils").openGroupSuspensionAppealModal(
              n.id.user,
            ));
        },
        d = function () {
          o("WAWebModalManager").closeModalManager();
        },
        m,
        p;
      a
        ? i
          ? ((m = s._(/*BTDS*/ "Deactivate community")),
            (p = function () {
              (o("WAWebModalManager").ModalManager.close(),
                o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                  u.jsx(
                    o("WAWebDeactivateCommunityDrawerLoadable")
                      .DeactivateCommunityDrawerLoadable,
                    {
                      onBack: o("WAWebDrawerManager").closeDrawerRight,
                      chat: n,
                    },
                  ),
                ));
            }))
          : ((m = s._(/*BTDS*/ "Exit community")),
            (p = function () {
              o("WAWebModalManager").ModalManager.open(
                u.jsx(r("WAWebLeaveCommunityModal.react"), { chat: n }),
                { transition: "modal-flow" },
              );
            }))
        : ((m = s._(/*BTDS*/ "Delete group")),
          (p = function () {
            o("WAWebSuspendedGroupUtils").openExitAndDeleteGroupModal(n);
          }));
      var _;
      return (
        i
          ? (_ = s._(
              /*BTDS*/ "You can request a review if you think there has been a mistake.",
            ))
          : a
            ? (_ = s._(/*BTDS*/ "Only community admins can request a review."))
            : (_ = s._(/*BTDS*/ "Only group admins can request a review.")),
        u.jsx(o("WAWebModal.react").Modal, {
          onOverlayClick: d,
          children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
            children: [
              u.jsx(o("WAWebFlex.react").FlexItem, {
                align: "start",
                children: u.jsx(r("WDSButton.react"), {
                  Icon: r("WDSIconIcClose.react"),
                  onPress: d,
                  variant: "borderless",
                  size: "medium",
                  "aria-label": s._(/*BTDS*/ "Close"),
                }),
              }),
              u.jsx(o("WAWebFlex.react").FlexItem, {
                align: "center",
                children: u.jsx(
                  r("WDSIllustrationWdsPictoGroupBlockFeedbackNegative.react"),
                  {},
                ),
              }),
              u.jsx(o("WAWebFlex.react").FlexItem, {
                align: "center",
                xstyle: c.title,
                children: u.jsx(r("WDSText.react"), {
                  type: "Headline1",
                  colorName: "contentDefault",
                  children: a
                    ? s._(/*BTDS*/ "Community activity suspended")
                    : s._(/*BTDS*/ "This group is suspended"),
                }),
              }),
              u.jsxs(o("WAWebFlex.react").FlexColumn, {
                children: [
                  u.jsxs(o("WAWebFlex.react").FlexRow, {
                    align: "center",
                    xstyle: c.bodyRow,
                    children: [
                      u.jsx(r("WDSIconIcGppMaybe.react"), { xstyle: c.icon }),
                      u.jsxs(r("WDSText.react"), {
                        type: "Body1",
                        colorName: "contentDefault",
                        children: [
                          a
                            ? s._(
                                /*BTDS*/ "Some activity in this community may be a sign of spam or scams, or be harmful to others.",
                              )
                            : s._(
                                /*BTDS*/ "Some activity in this group may be a sign of spam or scams, or be harmful to others.",
                              ),
                          " ",
                          u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                            href: a
                              ? o(
                                  "WAWebCxtUrl",
                                ).getCommunityNotAvailableFaqUrl()
                              : o(
                                  "WAWebSuspendedGroupUtils",
                                ).getSuspendedFaqUrl(),
                            children: s._(/*BTDS*/ "Learn more"),
                          }),
                        ],
                      }),
                    ],
                  }),
                  u.jsxs(o("WAWebFlex.react").FlexRow, {
                    align: "center",
                    xstyle: c.bodyRow,
                    children: [
                      u.jsx(r("WDSIconIcBlock.react"), { xstyle: c.icon }),
                      u.jsx(r("WDSText.react"), {
                        type: "Body1",
                        colorName: "contentDefault",
                        children: a
                          ? s._(
                              /*BTDS*/ "No one in this community can send messages, add members or groups, download or forward media.",
                            )
                          : s._(
                              /*BTDS*/ "No one in this group can send messages, add members, download or forward media.",
                            ),
                      }),
                    ],
                  }),
                  u.jsxs(o("WAWebFlex.react").FlexRow, {
                    align: "center",
                    xstyle: c.bodyRow,
                    children: [
                      u.jsx(r("WDSIconIcCheck.react"), { xstyle: c.icon }),
                      u.jsx(r("WDSText.react"), {
                        type: "Body1",
                        colorName: "contentDefault",
                        children: _,
                      }),
                    ],
                  }),
                ],
              }),
              u.jsx(o("WAWebFlex.react").FlexItem, {
                xstyle: c.buttons,
                children: u.jsx(r("WDSButtonGroup.react"), {
                  orientation: "horizontal",
                  primaryButtonProps: {
                    variant: "filled",
                    onPress: i ? l : d,
                    size: "medium",
                    label: i
                      ? s._(/*BTDS*/ "Request review")
                      : s._(/*BTDS*/ "OK"),
                  },
                  secondaryButtonProps: {
                    variant: "borderless",
                    type: "destructive",
                    onPress: p,
                    size: "medium",
                    label: m,
                  },
                }),
              }),
            ],
          }),
        })
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
