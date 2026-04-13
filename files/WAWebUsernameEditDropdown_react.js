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
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(13),
        a = t.contactId,
        i = t.dropdownItem,
        l = t.label,
        s = t.onBack,
        u = t.optionId,
        p = t.username,
        _;
      n[0] !== a || n[1] !== i || n[2] !== s || n[3] !== p
        ? ((_ = function () {
            i === d.CHANGE
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
                    contactUsername: p,
                    contactId: a,
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
                    onDeleteUsername: s,
                  }),
                ));
          }),
          (n[0] = a),
          (n[1] = i),
          (n[2] = s),
          (n[3] = p),
          (n[4] = _))
        : (_ = n[4]);
      var f;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = (e || (e = r("stylex")))([
            m.paddingVert8,
            m.paddingEnd32,
            m.paddingStart24,
            m.option,
          ])),
          (n[5] = f))
        : (f = n[5]);
      var g = i === d.DELETE ? "critical" : "primary",
        h;
      n[6] !== l || n[7] !== g
        ? ((h = c.jsx(o("WAWebFlex.react").FlexRow, {
            className: f,
            children: c.jsx(o("WAWebText.react").WAWebTextSmall, {
              color: g,
              xstyle: m.marginStart8,
              children: l,
            }),
          })),
          (n[6] = l),
          (n[7] = g),
          (n[8] = h))
        : (h = n[8]);
      var y;
      return (
        n[9] !== u || n[10] !== _ || n[11] !== h
          ? ((y = c.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              { testid: void 0, action: _, children: h },
              u,
            )),
            (n[9] = u),
            (n[10] = _),
            (n[11] = h),
            (n[12] = y))
          : (y = n[12]),
        y
      );
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.contactId,
        r = e.onBack,
        a = e.username,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s._(/*BTDS*/ "Change username")), (t[0] = i))
        : (i = t[0]);
      var l;
      t[1] !== n || t[2] !== r || t[3] !== a
        ? ((l = c.jsx(p, {
            contactId: n,
            onBack: r,
            username: a,
            optionId: "option_change_username",
            dropdownItem: d.CHANGE,
            label: i,
          })),
          (t[1] = n),
          (t[2] = r),
          (t[3] = a),
          (t[4] = l))
        : (l = t[4]);
      var u;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = s._(/*BTDS*/ "Delete username")), (t[5] = u))
        : (u = t[5]);
      var m;
      t[6] !== n || t[7] !== r || t[8] !== a
        ? ((m = c.jsx(p, {
            contactId: n,
            onBack: r,
            username: a,
            dropdownItem: d.DELETE,
            optionId: "option_delete_username",
            label: u,
          })),
          (t[6] = n),
          (t[7] = r),
          (t[8] = a),
          (t[9] = m))
        : (m = t[9]);
      var _;
      return (
        t[10] !== l || t[11] !== m
          ? ((_ = c.jsxs(c.Fragment, { children: [l, m] })),
            (t[10] = l),
            (t[11] = m),
            (t[12] = _))
          : (_ = t[12]),
        _
      );
    }
    l.default = _;
  },
  226,
);
