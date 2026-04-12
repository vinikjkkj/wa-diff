__d(
  "WAWebUsernameEditDropdown.react",
  [
    "fbt",
    "$InternalEnum",
    "WAWebDrawerManager",
    "WAWebDropdownItem.react",
    "WAWebEditUsernameDrawer.react",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebText.react",
    "WAWebUsernameCreationActionLogger",
    "WAWebUsernameDeleteModal.react",
    "WAWebWamEnumUsernameCreationActionName",
    "WAWebWamEnumUsernameCreationCurrentScreen",
    "WAWebWamEnumUsernameCreationFlowType",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = n("$InternalEnum")({ CHANGE: "change", DELETE: "delete" }),
      m = {
        option: {
          boxSizing: "x9f619",
          maxWidth: "x193iq5w",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          color: "x14ug900",
          cursor: "x1ypdohk",
          whiteSpace: "xuxw1ft",
          $$css: !0,
        },
        marginStart8: { marginInlineStart: "x150mmf0", $$css: !0 },
        paddingVert8: {
          paddingTop: "x16ovd2e",
          paddingBottom: "x12xbjc7",
          $$css: !0,
        },
        paddingEnd32: { paddingInlineEnd: "x1evaxtz", $$css: !0 },
        paddingStart24: { paddingInlineStart: "xb0esv5", $$css: !0 },
      };
    function p(t) {
      var n = t.contactId,
        a = t.dropdownItem,
        i = t.label,
        l = t.onBack,
        s = t.optionId,
        u = t.username;
      return c.jsx(
        o("WAWebDropdownItem.react").DropdownItem,
        {
          testid: void 0,
          action: function () {
            a === d.CHANGE
              ? (o(
                  "WAWebUsernameCreationActionLogger",
                ).UsernameCreationActionLogger.log({
                  usernameCreationCurrentScreen: o(
                    "WAWebWamEnumUsernameCreationCurrentScreen",
                  ).USERNAME_CREATION_CURRENT_SCREEN.USERNAME_EDIT,
                  usernameCreationActionName: o(
                    "WAWebWamEnumUsernameCreationActionName",
                  ).USERNAME_CREATION_ACTION_NAME.CLICK_CHANGE_USERNAME,
                  usernameCreationFlowType: o(
                    "WAWebWamEnumUsernameCreationFlowType",
                  ).USERNAME_CREATION_FLOW_TYPE.MANAGEMENT,
                }),
                o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
                  c.jsx(r("WAWebEditUsernameDrawer.react"), {
                    contactUsername: u,
                    contactId: n,
                  }),
                ))
              : (o(
                  "WAWebUsernameCreationActionLogger",
                ).UsernameCreationActionLogger.log({
                  usernameCreationCurrentScreen: o(
                    "WAWebWamEnumUsernameCreationCurrentScreen",
                  ).USERNAME_CREATION_CURRENT_SCREEN.USERNAME_EDIT,
                  usernameCreationActionName: o(
                    "WAWebWamEnumUsernameCreationActionName",
                  ).USERNAME_CREATION_ACTION_NAME.CLICK_DELETE_USERNAME,
                  usernameCreationFlowType: o(
                    "WAWebWamEnumUsernameCreationFlowType",
                  ).USERNAME_CREATION_FLOW_TYPE.MANAGEMENT,
                }),
                o("WAWebModalManager").ModalManager.open(
                  c.jsx(r("WAWebUsernameDeleteModal.react"), {
                    onDeleteUsername: l,
                  }),
                ));
          },
          children: c.jsx(o("WAWebFlex.react").FlexRow, {
            className: (e || (e = r("stylex")))([
              m.paddingVert8,
              m.paddingEnd32,
              m.paddingStart24,
              m.option,
            ]),
            children: c.jsx(o("WAWebText.react").WAWebTextSmall, {
              color: a === d.DELETE ? "critical" : "primary",
              xstyle: m.marginStart8,
              children: i,
            }),
          }),
        },
        s,
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = e.contactId,
        n = e.onBack,
        r = e.username;
      return c.jsxs(c.Fragment, {
        children: [
          c.jsx(p, {
            contactId: t,
            onBack: n,
            username: r,
            optionId: "option_change_username",
            dropdownItem: d.CHANGE,
            label: s._(/*BTDS*/ "Change username"),
          }),
          c.jsx(p, {
            contactId: t,
            onBack: n,
            username: r,
            dropdownItem: d.DELETE,
            optionId: "option_delete_username",
            label: s._(/*BTDS*/ "Delete username"),
          }),
        ],
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
