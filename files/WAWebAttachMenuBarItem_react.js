__d(
  "WAWebAttachMenuBarItem.react",
  [
    "fbt",
    "WAWebAttachMenuPopup.react",
    "WAWebAttachmentMenuLogger",
    "WAWebCmd",
    "WAWebDrawerManagerContext",
    "WAWebDropdown.react",
    "WAWebPlusRoundedIcon.react",
    "WAWebStateUtils",
    "WAWebTabOrder",
    "WAWebUim",
    "WAWebUseBusinessProfile.react",
    "WDSMenuBarItem.react",
    "react",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useImperativeHandle,
      p = d.useRef,
      _ = d.useState;
    function f(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.chat,
        l = a.questionReplyQuotedMessage,
        u = a.questionType,
        d = a.threadId,
        f = p(null),
        g = p(null),
        h = _(null),
        y = h[0],
        C = h[1];
      o("WAWebUseBusinessProfile.react").useBusinessProfile(i.id, [
        "isBizBot3p",
      ]);
      var b = o("WAWebDrawerManagerContext").useDrawerManagerContext("mid"),
        v = function (t) {
          var e,
            n = (e = b.existsDrawer()) != null ? e : !1;
          n && t.preventDefault();
        },
        S = function (t) {
          if ((t && v(t), g.current)) {
            g.current.open();
            return;
          }
          (f.current &&
            C({
              menu: c.jsx(r("WAWebAttachMenuPopup.react"), {
                chat: o("WAWebStateUtils").unproxy(i),
                getComposeContents: a.getComposeContents,
                getComposeBoxEditorRef: a.getComposeBoxEditorRef,
                onMenuComplete: a.onMenuComplete,
                questionType: u,
                questionReplyQuotedMessage: l,
                threadId: d,
              }),
              dirY: o("WAWebDropdown.react").DirY.TOP,
              dirX: o("WAWebDropdown.react").DirX.CENTER,
              type: o("WAWebDropdown.react").MenuType.AttachMenuPopup,
              flipOnRTL: !0,
              testid: "attach-menu-popup",
              anchor: f.current,
              offsetY: -25,
            }),
            o(
              "WAWebAttachmentMenuLogger",
            ).AttachmentMenuLogger.logAttachmentMenuOpen(i));
        };
      m(n, function () {
        return {
          open: function () {
            S();
          },
        };
      });
      var R = function (t) {
        (t === o("WAWebUim").DismissReason.UIM_INTERACTION &&
          o(
            "WAWebAttachmentMenuLogger",
          ).AttachmentMenuLogger.logAttachmentMenuClose(i),
          C(null));
      };
      o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "close_context_menu",
        R,
      );
      var L = o("WAWebPlusRoundedIcon.react").PlusRoundedIcon,
        E = c.jsx(r("WAWebAttachMenuPopup.react"), {
          chat: o("WAWebStateUtils").unproxy(i),
          getComposeContents: a.getComposeContents,
          getComposeBoxEditorRef: a.getComposeBoxEditorRef,
          onMenuComplete: a.onMenuComplete,
          questionType: u,
          questionReplyQuotedMessage: l,
          threadId: d,
        });
      return c.jsx(r("WDSMenuBarItem.react"), {
        imperativeRef: g,
        ref: f,
        onClick: function () {
          o(
            "WAWebAttachmentMenuLogger",
          ).AttachmentMenuLogger.logAttachmentMenuOpen(i);
        },
        icon: L,
        tabOrder: o("WAWebTabOrder").TAB_ORDER.COMPOSE_BOX_ATTACH_BUTTON,
        title: s._(/*BTDS*/ "Attach"),
        testid: void 0,
        wdsMenuToRender: E,
        menuAlign: "middle",
        menuPosition: "above",
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
