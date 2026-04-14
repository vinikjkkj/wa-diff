__d(
  "WAWebChannelStatusPlayerOverflowMenu.react",
  [
    "fbt",
    "WAWebDeleteRefreshedIcon.react",
    "WAWebDropdown.react",
    "WAWebDropdownItem.react",
    "WAWebMegaphoneRefreshedIcon.react",
    "WAWebMsgActionCapability",
    "WAWebMsgGetters",
    "WAWebNewsletterGatingUtils",
    "WAWebTabOrder",
    "WDSIconIcMoreVert.react",
    "WDSIconIcThumbDown.react",
    "WDSMenuBarItem.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.msg,
        n = e.onAddPaidPartnershipLabel,
        a = e.onDelete,
        i = e.onOverflowMenuDismissed,
        l = e.onOverflowMenuShown,
        c = e.onReport,
        d = [];
      return (
        o("WAWebMsgActionCapability").canAddPaidPartnershipLabelToMsg(t) &&
          d.push(
            u.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              {
                action: n,
                testid: void 0,
                icon: u.jsx(
                  o("WAWebMegaphoneRefreshedIcon.react").MegaphoneRefreshedIcon,
                  {},
                ),
                children: s._(/*BTDS*/ "Add paid partnership"),
              },
              "channel-status-overflow-menu-paid-partnership",
            ),
          ),
        o("WAWebMsgGetters").getIsSentByMe(t)
          ? o(
              "WAWebNewsletterGatingUtils",
            ).isNewsletterStatusCreationEnabled() &&
            d.push(
              u.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                {
                  action: a,
                  testid: void 0,
                  icon: u.jsx(
                    o("WAWebDeleteRefreshedIcon.react").DeleteRefreshedIcon,
                    {},
                  ),
                  children: s._(/*BTDS*/ "Delete"),
                },
                "channel-status-overflow-menu-delete",
              ),
            )
          : d.push(
              u.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                {
                  action: c,
                  testid: void 0,
                  icon: u.jsx(r("WDSIconIcThumbDown.react"), {}),
                  children: s._(/*BTDS*/ "Report"),
                },
                "channel-status-overflow-menu-report",
              ),
            ),
        d.length === 0
          ? null
          : u.jsx(r("WDSMenuBarItem.react"), {
              icon: r("WDSIconIcMoreVert.react"),
              onClick: l,
              onClose: i,
              testid: void 0,
              tabOrder: o("WAWebTabOrder").TAB_ORDER.STATUS_HEADER_SECTION,
              buttonType: "media",
              title: s._(/*BTDS*/ "Menu"),
              dropdownMenu: {
                menu: d,
                dirY: o("WAWebDropdown.react").DirY.BOTTOM,
                dirX: o("WAWebDropdown.react").DirX.LEFT,
                type: o("WAWebDropdown.react").MenuType.DropdownMenu,
                flipOnRTL: !0,
                testid: "channel-status-overflow-menu",
              },
            })
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
