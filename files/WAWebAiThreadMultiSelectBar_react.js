__d(
  "WAWebAiThreadMultiSelectBar.react",
  [
    "fbt",
    "Promise",
    "WALogger",
    "WAWebBotGating",
    "WAWebConfirmPopup.react",
    "WAWebDeleteAiThreadsAction",
    "WAWebDeleteRefreshedIcon.react",
    "WAWebMenuBar.react",
    "WAWebModalManager",
    "WAWebPinAiThreadAction",
    "WAWebTabOrder",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUISpacing",
    "WDSIconIcClose.react",
    "WDSIconIcPushPin.react",
    "WDSIconWdsIcPushPinSlash.react",
    "react",
    "stylex",
    "useWAWebForceUpdate",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p = m || (m = o("react")),
      _ = {
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
    function f(e) {
      var t = 0;
      for (var n of e) {
        var r = n.pinThreadTimestamp;
        r != null && r > 0 && t++;
      }
      return t;
    }
    function g(t) {
      "use no forget";
      var a = t.chat,
        i = t.multiSelection,
        l = t.onCancel,
        m = t.ref,
        g = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        h = i.getSelected(),
        y = h.length;
      o("useWAWebListener").useListener(i, "all", g);
      var C = h,
        b = f(C),
        v = C.length > 0 && b === C.length,
        S = b === 0,
        R = C.length - b,
        L = S && o("WAWebPinAiThreadAction").canPinMoreThreads(a, R),
        E = function () {
          if (C.length !== 0) {
            var t = C.filter(function (e) {
              var t = e.pinThreadTimestamp;
              return t == null || t <= 0;
            });
            (d || (d = n("Promise")))
              .all(
                t.map(function (e) {
                  return o("WAWebPinAiThreadAction").pinAiThreadAction(e, a.id);
                }),
              )
              .then(function () {
                l();
              })
              .catch(function (t) {
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[ai-thread-multi-select] failed to pin threads",
                      ])),
                  )
                  .catching(t);
              });
          }
        },
        k = function () {
          if (C.length !== 0) {
            var e = C.filter(function (e) {
              var t = e.pinThreadTimestamp;
              return t != null && t > 0;
            });
            (d || (d = n("Promise")))
              .all(
                e.map(function (e) {
                  return o("WAWebPinAiThreadAction").unpinAiThreadAction(
                    e,
                    a.id,
                  );
                }),
              )
              .then(function () {
                l();
              })
              .catch(function (e) {
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[ai-thread-multi-select] failed to unpin threads",
                      ])),
                  )
                  .catching(e);
              });
          }
        },
        I = function () {
          var e = h.length;
          e !== 0 &&
            o("WAWebModalManager").ModalManager.open(
              p.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                title: s._(
                  /*BTDS*/ '_j{"*":"Delete {number_of_threads_to_delete} chats with Meta AI?","_1":"Delete 1 chat with Meta AI?"}',
                  [s._plural(e, "number_of_threads_to_delete")],
                ),
                okText: s._(/*BTDS*/ "Delete"),
                okButtonType: "solid-warning",
                onOK: function () {
                  var t = h.map(function (e) {
                    return e.id;
                  });
                  o("WAWebDeleteAiThreadsAction")
                    .deleteAiThreadsAction(a.id, t)
                    .then(function () {
                      (l(),
                        o("WAWebModalManager").ModalManager.close(),
                        o("WAWebToastManager").ToastManager.open(
                          p.jsx(o("WAWebToast.react").Toast, {
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
        T = p.jsx(o("WAWebMenuBar.react").MenuBarItem, {
          testid: void 0,
          tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
          icon: p.jsx(
            o("WAWebDeleteRefreshedIcon.react").DeleteRefreshedIcon,
            {},
          ),
          title: s._(/*BTDS*/ "Delete selected"),
          disabled: y === 0,
          onClick: I,
          showHoverTooltip: !0,
        });
      return p.jsxs(
        "div",
        babelHelpers.extends(
          { ref: m },
          (c || (c = r("stylex"))).props(
            _.multiControls,
            o("WAWebUISpacing").uiPadding.vert6,
            o("WAWebUISpacing").uiPadding.start16,
            o("WAWebUISpacing").uiPadding.end20,
          ),
          {
            "data-testid": void 0,
            children: [
              p.jsx(o("WAWebMenuBar.react").MenuBarItem, {
                testid: void 0,
                tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
                icon: p.jsx(r("WDSIconIcClose.react"), {}),
                title: s._(/*BTDS*/ "Cancel selection"),
                onClick: l,
                showHoverTooltip: !0,
              }),
              p.jsx("div", {
                className:
                  "x1iyjqo2 xs83m0k xdl72j9 x1sa5p1d x1hm9lzh x6ikm8r x10wlt62 xlahmqy xlyipyv xuxw1ft",
                "data-testid": void 0,
                children: s._(
                  /*BTDS*/ '_j{"*":"{number_of_selected_threads} selected","_1":"1 selected"}',
                  [s._plural(y, "number_of_selected_threads")],
                ),
              }),
              p.jsx(
                o("WAWebMenuBar.react").MenuBar,
                {
                  children: p.jsxs(
                    o("WAWebMenuBar.react").MenuBarVelocityTransitionGroup,
                    {
                      transitionName: "dropdown",
                      children: [
                        o("WAWebBotGating").isAiThreadPinEnabled() && L
                          ? p.jsx(o("WAWebMenuBar.react").MenuBarItem, {
                              testid: void 0,
                              tabOrder:
                                o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
                              icon: p.jsx(r("WDSIconIcPushPin.react"), {}),
                              title: s._(/*BTDS*/ "Pin selected"),
                              disabled: y === 0,
                              onClick: E,
                              showHoverTooltip: !0,
                            })
                          : null,
                        o("WAWebBotGating").isAiThreadPinEnabled() && v
                          ? p.jsx(o("WAWebMenuBar.react").MenuBarItem, {
                              testid: void 0,
                              tabOrder:
                                o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
                              icon: p.jsx(
                                r("WDSIconWdsIcPushPinSlash.react"),
                                {},
                              ),
                              title: s._(/*BTDS*/ "Unpin selected"),
                              disabled: y === 0,
                              onClick: k,
                              showHoverTooltip: !0,
                            })
                          : null,
                        T,
                      ],
                    },
                  ),
                },
                "ai-thread-multi-select-bar-header",
              ),
            ],
          },
        ),
      );
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
