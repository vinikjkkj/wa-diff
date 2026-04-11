__d(
  "WAWebGroupMembershipApprovalRequestsDrawerMenu.react",
  [
    "fbt",
    "WAWebDropdown.react",
    "WAWebDropdownItem.react",
    "WAWebFbtCommon",
    "WAWebMembershipApprovalRequestsOrder",
    "WDSIconIcMoreVert.react",
    "WDSMenuBarItem.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.onSortBySource,
        l = a.onSortByTime,
        u = a.orderBy,
        d = [];
      (u !==
        o("WAWebMembershipApprovalRequestsOrder")
          .MembershipApprovalRequestsOrder.Source &&
        d.push(
          c.jsx(
            o("WAWebDropdownItem.react").DropdownItem,
            {
              testid: void 0,
              action: i,
              children: s._(/*BTDS*/ "Sort by request source"),
            },
            "sort-by-source",
          ),
        ),
        u !==
          o("WAWebMembershipApprovalRequestsOrder")
            .MembershipApprovalRequestsOrder.Time &&
          d.push(
            c.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              {
                testid: void 0,
                action: l,
                children: s._(/*BTDS*/ "Sort by time"),
              },
              "sort-by-time",
            ),
          ));
      var m = c.jsx(r("WDSMenuBarItem.react"), {
        ref: n,
        testid: void 0,
        icon: r("WDSIconIcMoreVert.react"),
        title: r("WAWebFbtCommon")("Context menu"),
        dropdownMenu: {
          menu: d,
          type: o("WAWebDropdown.react").MenuType.DropdownMenu,
          flipOnRTL: !0,
          dirX: o("WAWebDropdown.react").DirX.LEFT,
        },
      });
      return m;
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
