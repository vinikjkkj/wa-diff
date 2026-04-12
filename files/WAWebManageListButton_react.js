__d(
  "WAWebManageListButton.react",
  [
    "fbt",
    "WAWebCreateOrEditListDrawer.react",
    "WAWebDrawerManager",
    "WAWebKeyboardHotKeys.react",
    "WAWebWamEnumUpdateEntryPoint",
    "WDSFontTokenStyles",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        container: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          height: "xdd8jsf",
          cursor: "x1ypdohk",
          paddingInlineStart: "x1phvje8",
          paddingInlineEnd: "xcldk2z",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        manageListText: {
          color: "xk4n5i7",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          textOverflow: "xlyipyv",
          whiteSpace: "xuxw1ft",
          $$css: !0,
        },
      };
    function m(t) {
      var n = t.listId,
        a = t.listName,
        i = function () {
          o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
            c.jsx(r("WAWebCreateOrEditListDrawer.react"), {
              listId: n,
              onBack: o("WAWebDrawerManager").closeDrawerLeft,
              onClose: o("WAWebDrawerManager").closeDrawerLeft,
              entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT
                .CHAT_LIST_FILTER_MANAGE,
            }),
            { focusOnUnMount: !0 },
          );
        },
        l = s._(/*BTDS*/ "Manage {listName}", [s._param("listName", a)]);
      return c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        handlers: { enter: i, space: i },
        "aria-label": l.toString(),
        role: "button",
        "data-testid": void 0,
        onClick: i,
        xstyle: d.container,
        tabIndex: 0,
        children: c.jsx(
          "span",
          babelHelpers.extends(
            {},
            (e || (e = r("stylex"))).props(
              o("WDSFontTokenStyles").WDSFontTokenStyles.Body1,
              d.manageListText,
            ),
            {
              children: s._(/*BTDS*/ "Manage {listName}", [
                s._param("listName", a),
              ]),
            },
          ),
        ),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
