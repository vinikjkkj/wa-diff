__d(
  "WAWebAiThreadMultiSelectBar.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebDeleteAiThreadsAction",
    "WAWebDeleteRefreshedIcon.react",
    "WAWebMenuBar.react",
    "WAWebModalManager",
    "WAWebTabOrder",
    "WAWebThreadId",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUISpacing",
    "WDSIconIcClose.react",
    "compactMap",
    "react",
    "stylex",
    "useWAWebForceUpdate",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
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
          borderTopStyle: "x13fuv20",
          borderTopColor: "xx42vgk",
          borderBottomWidth: "xso031l",
          borderBottomStyle: "x1q0q8m5",
          borderBottomColor: "x120ee7l",
          $$css: !0,
        },
      };
    function m(t) {
      "use no forget";
      var n = t.chat,
        a = t.multiSelection,
        i = t.onCancel,
        l = t.ref,
        u = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        m = a.getSelected(),
        p = m.length;
      o("useWAWebListener").useListener(a, "all", u);
      var _ = function () {
          var e = m.length;
          e !== 0 &&
            o("WAWebModalManager").ModalManager.open(
              c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                title: s._(
                  /*BTDS*/ '_j{"*":"Delete {number_of_threads_to_delete} chats with Meta AI?","_1":"Delete 1 chat with Meta AI?"}',
                  [s._plural(e, "number_of_threads_to_delete")],
                ),
                okText: s._(/*BTDS*/ "Delete"),
                okButtonType: "solid-warning",
                onOK: function () {
                  var t = r("compactMap")(m, function (e) {
                    return e.id instanceof r("WAWebThreadId") ? e.id : null;
                  });
                  o("WAWebDeleteAiThreadsAction")
                    .deleteAiThreadsAction(n.id, t)
                    .then(function () {
                      (i(),
                        o("WAWebModalManager").ModalManager.close(),
                        o("WAWebToastManager").ToastManager.open(
                          c.jsx(o("WAWebToast.react").Toast, {
                            msg: s._(
                              /*BTDS*/ '_j{"*":"{number_of_threads_deleted} chats deleted","_1":"1 chat deleted"}',
                              [s._plural(e, "number_of_threads_deleted")],
                            ),
                          }),
                        ));
                    });
                },
                onCancel: o("WAWebModalManager").closeModalManager,
                children: s._(
                  /*BTDS*/ "Messages will be removed from all devices.",
                ),
              }),
            );
        },
        f = c.jsx(o("WAWebMenuBar.react").MenuBarItem, {
          testid: void 0,
          tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
          icon: c.jsx(
            o("WAWebDeleteRefreshedIcon.react").DeleteRefreshedIcon,
            {},
          ),
          title: s._(/*BTDS*/ "Delete selected"),
          disabled: p === 0,
          onClick: _,
          showHoverTooltip: !0,
        });
      return c.jsxs(
        "div",
        babelHelpers.extends(
          { ref: l },
          (e || (e = r("stylex"))).props(
            d.multiControls,
            o("WAWebUISpacing").uiPadding.vert6,
            o("WAWebUISpacing").uiPadding.start16,
            o("WAWebUISpacing").uiPadding.end20,
          ),
          {
            "data-testid": void 0,
            children: [
              c.jsx(o("WAWebMenuBar.react").MenuBarItem, {
                testid: void 0,
                tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
                icon: c.jsx(r("WDSIconIcClose.react"), {}),
                title: s._(/*BTDS*/ "Cancel selection"),
                onClick: i,
                showHoverTooltip: !0,
              }),
              c.jsx("div", {
                className:
                  "x1iyjqo2 xs83m0k xdl72j9 x1sa5p1d x1hm9lzh x6ikm8r x10wlt62 xlahmqy xlyipyv xuxw1ft",
                "data-testid": void 0,
                children: s._(
                  /*BTDS*/ '_j{"*":"{number_of_selected_threads} selected","_1":"1 selected"}',
                  [s._plural(p, "number_of_selected_threads")],
                ),
              }),
              c.jsx(
                o("WAWebMenuBar.react").MenuBar,
                {
                  children: c.jsx(
                    o("WAWebMenuBar.react").MenuBarVelocityTransitionGroup,
                    { transitionName: "dropdown", children: f },
                  ),
                },
                "ai-thread-multi-select-bar-header",
              ),
            ],
          },
        ),
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
