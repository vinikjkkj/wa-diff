__d(
  "WAWebSuspendedOrTerminatedGroupMsgBarV2.react",
  [
    "fbt",
    "WAWebButton.react",
    "WAWebClickableLink.react",
    "WAWebDeleteIcon.react",
    "WAWebExternalLink.react",
    "WAWebFlex.react",
    "WAWebGroupGatingUtils",
    "WAWebSuspendedGroupDeleteWamEvent",
    "WAWebSuspendedGroupUtils",
    "WAWebTabOrder",
    "WAWebWamEnumDeleteSuspendedGroupBtn",
    "WDSButton.react",
    "WDSIconIcDelete.react",
    "WDSIconIcHelp.react",
    "react",
    "useWAWebWindowSize",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { suspendedMsgBar: { width: "xh8yej3", $$css: !0 } };
    function d(e) {
      var t,
        n = e.chat,
        a = e.entityId,
        i = r("useWAWebWindowSize")(),
        l = i.width,
        d = function () {
          (new (o(
            "WAWebSuspendedGroupDeleteWamEvent",
          ).SuspendedGroupDeleteWamEvent)({
            deleteBtnSource: o("WAWebWamEnumDeleteSuspendedGroupBtn")
              .DELETE_SUSPENDED_GROUP_BTN.BLOCKED_COMPOSER_BTN,
          }).commit(),
            o("WAWebSuspendedGroupUtils").openExitAndDeleteGroupModal(n));
        },
        m = o(
          "WAWebGroupGatingUtils",
        ).isGroupSuspensionAppealsRedesignEnabled(),
        p = m
          ? u.jsx(r("WDSButton.react"), {
              variant: "borderless",
              type: "destructive",
              onPress: d,
              testid: void 0,
              Icon: r("WDSIconIcDelete.react"),
              label: s._(/*BTDS*/ "Delete group"),
            })
          : u.jsxs(o("WAWebButton.react").WAWebButtonSimplified, {
              onClick: d,
              testid: void 0,
              children: [
                u.jsx(o("WAWebDeleteIcon.react").DeleteIcon, {
                  directional: !0,
                }),
                s._(/*BTDS*/ "Delete group for me"),
              ],
            }),
        _ =
          l <= o("WAWebSuspendedGroupUtils").STACK_BUTTONS_WIDTH
            ? o("WAWebFlex.react").FlexColumn
            : o("WAWebFlex.react").FlexRow,
        f = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
          href: o("WAWebSuspendedGroupUtils").getSuspendedFaqUrl(),
          testid: void 0,
          "data-tab": o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE,
          children: s._(/*BTDS*/ "Learn more"),
        });
      return u.jsx(o("WAWebFlex.react").FlexColumn, {
        xstyle: c.suspendedMsgBar,
        children: u.jsxs(_, {
          alignSelf: "stretch",
          align: "center",
          justify: "all",
          testid: void 0,
          children: [
            u.jsx(o("WAWebFlex.react").FlexColumn, {
              children: u.jsx("span", {
                className: "x126k92a",
                children: m
                  ? s._(
                      /*BTDS*/ "This group is suspended. {link to see details}",
                      [
                        s._param(
                          "link to see details",
                          u.jsx(r("WAWebClickableLink.react"), {
                            onClick: function () {
                              o(
                                "WAWebSuspendedGroupUtils",
                              ).openSuspendedGroupRedesignModal(n);
                            },
                            testid: void 0,
                            children: s._(/*BTDS*/ "See details"),
                          }),
                        ),
                      ],
                    )
                  : s._(
                      /*BTDS*/ "This group is no longer available. {link to learn more}",
                      [s._param("link to learn more", f)],
                    ),
              }),
            }),
            u.jsxs(o("WAWebFlex.react").FlexRow, {
              children: [
                p,
                m &&
                  ((t = n.groupMetadata) == null
                    ? void 0
                    : t.participants.iAmAdmin()) &&
                  u.jsx(r("WDSButton.react"), {
                    variant: "borderless",
                    onPress: function () {
                      o(
                        "WAWebSuspendedGroupUtils",
                      ).openGroupSuspensionAppealModal(n.id);
                    },
                    testid: void 0,
                    Icon: r("WDSIconIcHelp.react"),
                    label: s._(/*BTDS*/ "Request review"),
                  }),
              ],
            }),
          ],
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
