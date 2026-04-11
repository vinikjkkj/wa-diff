__d(
  "WAWebQuickRepliesDrawerItem.react",
  [
    "fbt",
    "WAWebBizQuickRepliesModal.react",
    "WAWebBoolFunc",
    "WAWebChatCell.react",
    "WAWebConfirmPopup.react",
    "WAWebDeleteQuickReplyAction",
    "WAWebDeleteRefreshedIcon.react",
    "WAWebDropdownItem.react",
    "WAWebFocusTracer",
    "WAWebKeyboardHotKeys.react",
    "WAWebL10N",
    "WAWebModalManager",
    "WAWebPencilRefreshedIcon.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useRef,
      m = c.useState;
    function p(e) {
      var t,
        a = e.quickReply,
        i = m(!1),
        l = i[0],
        c = i[1],
        p = m(null),
        _ = p[0],
        f = p[1],
        g = d(null),
        h = d(null),
        y = r("WAWebL10N").isRTL() ? "left" : "right",
        C =
          ((t = {}),
          (t[y] = function () {
            var e;
            (e = h.current) == null || e.focusOnContextMenuButton();
          }),
          t),
        b = function (t) {
          var e;
          ((e = h.current) == null || e.mouseOver(), c(!0));
        },
        v = function (t) {
          var e;
          ((e = h.current) == null || e.mouseLeave(), c(!1));
        },
        S = function () {
          o("WAWebModalManager").ModalManager.open(
            u.jsx(r("WAWebBizQuickRepliesModal.react"), {
              quickReply: a,
              tsNavigationData: { surface: "smb-quick-reply-edit" },
            }),
          );
        },
        R = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              (yield o("WAWebDeleteQuickReplyAction").deleteQuickReplyAction(
                a.id,
              ),
                o("WAWebToastManager").ToastManager.open(
                  u.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(/*BTDS*/ "Quick reply deleted"),
                  }),
                ));
            } catch (e) {
              o("WAWebToastManager").ToastManager.open(
                u.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "Failed to delete the quick reply"),
                }),
              );
            } finally {
              o("WAWebModalManager").ModalManager.close();
            }
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        L = function () {
          o("WAWebModalManager").ModalManager.open(
            u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              title: s._(/*BTDS*/ "Delete quick reply"),
              onOK: R,
              onCancel: o("WAWebModalManager").closeModalManager,
              children: s._(
                /*BTDS*/ "Are you sure you want to delete the quick reply?",
              ),
            }),
          );
        },
        E = function (t) {
          if (_) {
            f(null);
            return;
          }
          var e = [];
          (e.push(
            u.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              {
                testid: void 0,
                action: S,
                icon: u.jsx(
                  o("WAWebPencilRefreshedIcon.react").PencilRefreshedIcon,
                  {},
                ),
                children: s._(/*BTDS*/ "Edit"),
              },
              "mi-edit-quick_reply",
            ),
          ),
            e.push(
              u.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                {
                  testid: void 0,
                  action: L,
                  icon: u.jsx(
                    o("WAWebDeleteRefreshedIcon.react").DeleteRefreshedIcon,
                    {},
                  ),
                  theme: o("WAWebDropdownItem.react").DropdownItemThemeType
                    .Negative,
                  children: s._(/*BTDS*/ "Delete"),
                },
                "mi-delete-quick-reply",
              ),
            ),
            f({ menu: e, event: t.event, anchor: t.anchor }));
        },
        k = function () {
          (f(null), r("WAWebFocusTracer").focus(g.current));
        },
        I =
          _ &&
          u.jsx(o("WAWebUimUie.react").UIE, {
            displayName: "QuickReplyContextMenu",
            escapable: !0,
            popable: !0,
            dismissOnWindowResize: !0,
            requestDismiss: k,
            children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: _ }),
          });
      return u.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
        ref: g,
        handlers: C,
        tabIndex: 0,
        onFocus: b,
        onBlur: v,
        children: [
          u.jsx(r("WAWebChatCell.react"), {
            ref: h,
            active: l || !!_,
            contextEnabled: o("WAWebBoolFunc").returnTrue,
            contextMenuControlled: !0,
            onContext: E,
            theme: "quick-replies-drawer-item",
            primary: a.shortcut,
            secondary: a.message,
            testid: void 0,
          }),
          I,
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
