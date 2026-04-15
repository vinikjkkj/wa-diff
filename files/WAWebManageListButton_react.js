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
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(16),
        a = t.listId,
        i = t.listName,
        l;
      n[0] !== a
        ? ((l = function () {
            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
              c.jsx(r("WAWebCreateOrEditListDrawer.react"), {
                listId: a,
                onBack: o("WAWebDrawerManager").closeDrawerLeft,
                onClose: o("WAWebDrawerManager").closeDrawerLeft,
                entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT
                  .CHAT_LIST_FILTER_MANAGE,
              }),
              { focusOnUnMount: !0 },
            );
          }),
          (n[0] = a),
          (n[1] = l))
        : (l = n[1]);
      var u = l,
        m;
      n[2] !== i
        ? ((m = s._(/*BTDS*/ "Manage {listName}", [s._param("listName", i)])),
          (n[2] = i),
          (n[3] = m))
        : (m = n[3]);
      var p = m,
        _;
      n[4] !== u
        ? ((_ = { enter: u, space: u }), (n[4] = u), (n[5] = _))
        : (_ = n[5]);
      var f;
      n[6] !== p ? ((f = p.toString()), (n[6] = p), (n[7] = f)) : (f = n[7]);
      var g;
      n[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = (e || (e = r("stylex"))).props(
            o("WDSFontTokenStyles").WDSFontTokenStyles.Body1,
            d.manageListText,
          )),
          (n[8] = g))
        : (g = n[8]);
      var h;
      n[9] !== i
        ? ((h = c.jsx(
            "span",
            babelHelpers.extends({}, g, {
              children: s._(/*BTDS*/ "Manage {listName}", [
                s._param("listName", i),
              ]),
            }),
          )),
          (n[9] = i),
          (n[10] = h))
        : (h = n[10]);
      var y;
      return (
        n[11] !== u || n[12] !== _ || n[13] !== f || n[14] !== h
          ? ((y = c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              handlers: _,
              "aria-label": f,
              role: "button",
              "data-testid": void 0,
              onClick: u,
              xstyle: d.container,
              tabIndex: 0,
              children: h,
            })),
            (n[11] = u),
            (n[12] = _),
            (n[13] = f),
            (n[14] = h),
            (n[15] = y))
          : (y = n[15]),
        y
      );
    }
    l.default = m;
  },
  226,
);
