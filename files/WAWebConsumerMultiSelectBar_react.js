__d(
  "WAWebConsumerMultiSelectBar.react",
  [
    "fbt",
    "WAWebConsumerMultiSelectBarOverflowMenu.react",
    "WAWebTabOrder",
    "WAWebUISpacing",
    "WDSIconIcClose.react",
    "WDSIconIcMoreVert.react",
    "WDSMenuBarItem.react",
    "react",
    "stylex",
    "useWAWebEventCounterValue",
    "useWAWebForceUpdate",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d = c || (c = o("react")),
      m = {
        multiControls: {
          insetInlineStart: "x1o0tod",
          zIndex: "x1yg4o9v",
          boxSizing: "x9f619",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          width: "xh8yej3",
          height: "xy063j7",
          position: "x1n2onr6",
          bottom: "xgxk9ee",
          backgroundColor: "x1h3rtpe",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "xx42vgk",
          borderInlineEndColor: "xbogo7e",
          borderBottomColor: "x120ee7l",
          borderInlineStartColor: "x1vb5itz",
          $$css: !0,
        },
      };
    function p(t) {
      "use no forget";
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.onCancel,
        l = a.selectedModels,
        c = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        p = l.getSelected(),
        _ = p.length,
        f = r("useWAWebEventCounterValue")(l, "unread_chat"),
        g = r("useWAWebEventCounterValue")(l, "unmuted_chat");
      o("useWAWebListener").useListener(l, "all", c);
      var h = d.jsx(r("WAWebConsumerMultiSelectBarOverflowMenu.react"), {
        selectedModels: l,
        onComplete: i,
        unreadChatCount: f,
        unmutedChatCount: g,
      });
      return d.jsxs(
        "div",
        babelHelpers.extends(
          { ref: n },
          (u || (u = r("stylex"))).props(
            m.multiControls,
            o("WAWebUISpacing").uiPadding.vert6,
            o("WAWebUISpacing").uiPadding.start16,
            o("WAWebUISpacing").uiPadding.end20,
          ),
          {
            "data-testid": void 0,
            children: [
              d.jsx(r("WDSMenuBarItem.react"), {
                testid: void 0,
                tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
                icon: r("WDSIconIcClose.react"),
                title: s._(/*BTDS*/ "Cancel selection"),
                onClick: i,
              }),
              d.jsx("div", {
                className:
                  "x1iyjqo2 xs83m0k xdl72j9 x1sa5p1d x1hm9lzh x6ikm8r x10wlt62 xlahmqy xlyipyv xuxw1ft",
                "data-testid": void 0,
                children: s._(
                  /*BTDS*/ '_j{"*":"{number_of_selected_items} selected","_1":"1 selected"}',
                  [s._plural(_, "number_of_selected_items")],
                ),
              }),
              _ > 0 &&
                d.jsx(r("WDSMenuBarItem.react"), {
                  icon: r("WDSIconIcMoreVert.react"),
                  title: s._(/*BTDS*/ "Menu"),
                  wdsMenuToRender: h,
                  testid: void 0,
                  tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
                }),
            ],
          },
        ),
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
