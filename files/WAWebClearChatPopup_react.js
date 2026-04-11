__d(
  "WAWebClearChatPopup.react",
  [
    "fbt",
    "WAWebBoolFunc",
    "WAWebChatFlowTypes",
    "WAWebChatGetters",
    "WAWebCheckBox.react",
    "WAWebConfirmPopup.react",
    "WAWebFrontendChatGetters",
    "WAWebModalManager",
    "WAWebSendClearChatAction",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebWamChatPSALogger",
    "react",
    "stylex",
    "useWAWebChatValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useMemo,
      p = d.useState,
      _ = {
        section: {
          display: "x78zum5",
          fontSize: "x1f6kntn",
          lineHeight: "x16h55sf",
          $$css: !0,
        },
        control: {
          display: "x1rg5ohu",
          flex: "x1okw0bk",
          verticalAlign: "x1uuroth",
          transition: "xqz5vs7",
          $$css: !0,
        },
      };
    function f(t) {
      var n = t.chat,
        a = o("useWAWebChatValues").useChatValues(n.id, [
          o("WAWebFrontendChatGetters").getKind,
          o("WAWebChatGetters").getIsPSA,
        ]),
        i = a[0],
        l = a[1],
        u = p(o("WAWebBoolFunc").returnFalse),
        d = u[0],
        f = u[1],
        g = function () {
          f(!d);
        },
        h = function () {
          if ((n.pendingAction++, l)) {
            var e = n.msgs.last();
            o("WAWebWamChatPSALogger").logChatPSARemove(e, 5, 14);
          }
          (o("WAWebSendClearChatAction")
            .sendClear(n, d)
            .finally(function () {
              n.pendingAction--;
            }),
            (n.createdLocally = !1),
            o("WAWebModalManager").ModalManager.close());
        },
        y = m(
          function () {
            if (i != null)
              switch (i) {
                case o("WAWebChatFlowTypes").ChatKindType.Group:
                  return s._(/*BTDS*/ "Clear this chat?");
                case o("WAWebChatFlowTypes").ChatKindType.Chat:
                  return s._(/*BTDS*/ "Clear this chat?");
                case o("WAWebChatFlowTypes").ChatKindType.Broadcast:
                  return s._(/*BTDS*/ "Clear this chat?");
                case o("WAWebChatFlowTypes").ChatKindType.Newsletter:
                case o("WAWebChatFlowTypes").ChatKindType.Community:
                  return "";
              }
            return "";
          },
          [i],
        ),
        C = c.jsxs(
          "div",
          babelHelpers.extends(
            {},
            (e || (e = r("stylex"))).props(
              _.section,
              o("WAWebUISpacing").uiMargin.top18,
            ),
            {
              children: [
                c.jsx(
                  "div",
                  babelHelpers.extends(
                    { "data-testid": void 0 },
                    e.props(_.control, o("WAWebUISpacing").uiMargin.end10),
                    {
                      children: c.jsx(o("WAWebCheckBox.react").CheckBox, {
                        onChange: g,
                        checked: d,
                        id: "menu-icon-clear-chat",
                      }),
                    },
                  ),
                ),
                c.jsx("label", {
                  htmlFor: "menu-icon-clear-chat",
                  className: "x98rzlu x1ypdohk xqz5vs7",
                  children: s._(/*BTDS*/ "Keep starred messages"),
                }),
              ],
            },
          ),
        ),
        b = c.jsxs("div", {
          children: [
            c.jsx(o("WAWebText.react").WAWebTextMuted, {
              as: "p",
              children: s._(
                /*BTDS*/ "This chat will be empty but will remain in your chat list.",
              ),
            }),
            C,
          ],
        });
      return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: { surface: "clear-chat", viewName: "clear-chat" },
        title: y,
        onOK: h,
        okText: s._(/*BTDS*/ "Clear chat"),
        okButtonType: "solid-warning",
        onCancel: o("WAWebModalManager").closeModalManager,
        children: b,
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
