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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(8),
        a = e.chat,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s._(/*BTDS*/ "Respond manually")), (t[0] = i))
        : (i = t[0]);
      var l = i,
        m = c(!1),
        p = m[0],
        _ = m[1],
        f;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                try {
                  _(!0);
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
                _(!1);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t[1] = f))
        : (f = t[1]);
      var g = f,
        h = p,
        y;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = u.jsx(r("WAWebFlexItem.react"), {
            children:
              o("WAWebBizAiAgentGating").isAiMuteUnmuteV2Enabled() &&
              u.jsx(r("WDSIconWdsIcAiFilled.react"), {}),
          })),
          (t[2] = y))
        : (y = t[2]);
      var C;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = u.jsx(r("WAWebFlexItem.react"), {
            children: u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              children: [
                y,
                u.jsx(r("WAWebFlexItem.react"), {
                  xstyle:
                    o("WAWebBizAiAgentGating").isAiMuteUnmuteV2Enabled() &&
                    d.iconSpacing,
                  children: s._(/*BTDS*/ "AI is responding in this chat."),
                }),
              ],
            }),
          })),
          (t[3] = C))
        : (C = t[3]);
      var b;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((b =
            o("WAWebBizAiAgentGating").isAiMuteUnmuteV2Enabled() &&
            d.buttonSpacing),
          (t[4] = b))
        : (b = t[4]);
      var v;
      return (
        t[5] !== a || t[6] !== h
          ? ((v = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              children: [
                C,
                u.jsx(r("WAWebFlexItem.react"), {
                  xstyle: b,
                  children: o("WAWebBizAiAgentGating").isAiMuteUnmuteV2Enabled()
                    ? u.jsx(r("WDSButton.react"), {
                        label: h ? void 0 : l,
                        Icon: r("WDSIconIcKeyboard.react"),
                        loading: h,
                        type: "default",
                        variant: "tonal",
                        onPress: function () {
                          (o(
                            "WAWebGenAiAgentLogEvents",
                          ).logClickGenAiAgentAutoReplyBlockingBar(),
                            g(a));
                        },
                      })
                    : u.jsx(
                        o("WAWebCopyPasteSelectable.react").SelectableLink,
                        {
                          className: "x1v5yvga",
                          id: "toggle-ai-reply-status",
                          "data-testid": void 0,
                          selectable: !1,
                          onClick: function () {
                            (o(
                              "WAWebGenAiAgentLogEvents",
                            ).logClickGenAiAgentAutoReplyBlockingBar(),
                              o("WAWebCmd").Cmd.changeAiReplyStatus(a, !1));
                          },
                          children: s._(/*BTDS*/ "Respond manually"),
                        },
                      ),
                }),
              ],
            })),
            (t[5] = a),
            (t[6] = h),
            (t[7] = v))
          : (v = t[7]),
        v
      );
    }
    l.default = m;
  },
  226,
);
