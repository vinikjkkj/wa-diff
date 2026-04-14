__d(
  "WAWebBizAiBlockMsgBar.react",
  [
    "fbt",
    "WAWebAiAgentAutoReplyControlMutation",
    "WAWebBizAiAgentGating",
    "WAWebBizAiMuteUnmuteErrorDrawer.react",
    "WAWebCmd",
    "WAWebCopyPasteSelectable.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebGenAiAgentLogEvents",
    "WAWebModalManager",
    "WAWebProtobufsE2E.pb",
    "WDSButton.react",
    "WDSIconIcKeyboard.react",
    "WDSIconWdsIcAiFilled.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = {
        iconSpacing: { marginInlineStart: "x150mmf0", $$css: !0 },
        buttonSpacing: { marginTop: "x98l61r", $$css: !0 },
      };
    function m(e) {
      var t = e.chat,
        a = s._(/*BTDS*/ "Respond manually"),
        i = c(!1),
        l = i[0],
        m = i[1];
      function p(e) {
        return _.apply(this, arguments);
      }
      function _() {
        return (
          (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            try {
              m(!0);
              var t = yield o(
                "WAWebAiAgentAutoReplyControlMutation",
              ).changeAiReplyStatus(e.id, "MUTED");
              t.isSuccess
                ? e.setCapiThreadControl(
                    o("WAWebProtobufsE2E.pb")
                      .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
                      .CONTROL_PASSED,
                  )
                : o("WAWebModalManager").ModalManager.open(
                    u.jsx(r("WAWebBizAiMuteUnmuteErrorDrawer.react"), {}),
                  );
            } catch (e) {
              o("WAWebModalManager").ModalManager.open(
                u.jsx(r("WAWebBizAiMuteUnmuteErrorDrawer.react"), {}),
              );
            }
            m(!1);
          })),
          _.apply(this, arguments)
        );
      }
      var f = l;
      return u.jsxs(o("WAWebFlex.react").FlexColumn, {
        align: "center",
        children: [
          u.jsx(r("WAWebFlexItem.react"), {
            children: u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              children: [
                u.jsx(r("WAWebFlexItem.react"), {
                  children:
                    o("WAWebBizAiAgentGating").isAiMuteUnmuteV2Enabled() &&
                    u.jsx(r("WDSIconWdsIcAiFilled.react"), {}),
                }),
                u.jsx(r("WAWebFlexItem.react"), {
                  xstyle:
                    o("WAWebBizAiAgentGating").isAiMuteUnmuteV2Enabled() &&
                    d.iconSpacing,
                  children: s._(/*BTDS*/ "AI is responding in this chat."),
                }),
              ],
            }),
          }),
          u.jsx(r("WAWebFlexItem.react"), {
            xstyle:
              o("WAWebBizAiAgentGating").isAiMuteUnmuteV2Enabled() &&
              d.buttonSpacing,
            children: o("WAWebBizAiAgentGating").isAiMuteUnmuteV2Enabled()
              ? u.jsx(r("WDSButton.react"), {
                  label: f ? void 0 : a,
                  Icon: r("WDSIconIcKeyboard.react"),
                  loading: f,
                  type: "default",
                  variant: "tonal",
                  onPress: function () {
                    (o(
                      "WAWebGenAiAgentLogEvents",
                    ).logClickGenAiAgentAutoReplyBlockingBar(),
                      p(t));
                  },
                })
              : u.jsx(o("WAWebCopyPasteSelectable.react").SelectableLink, {
                  className: "x1v5yvga",
                  id: "toggle-ai-reply-status",
                  "data-testid": void 0,
                  selectable: !1,
                  onClick: function () {
                    (o(
                      "WAWebGenAiAgentLogEvents",
                    ).logClickGenAiAgentAutoReplyBlockingBar(),
                      o("WAWebCmd").Cmd.changeAiReplyStatus(t, !1));
                  },
                  children: s._(/*BTDS*/ "Respond manually"),
                }),
          }),
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
