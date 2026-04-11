__d(
  "WAWebSupportAINux.react",
  [
    "fbt",
    "WAWebAiSignalOutlineIcon.react",
    "WAWebBotFeedbackIcon.react",
    "WAWebCellV2.react",
    "WAWebCheckShieldIcon.react",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebMobilePlatforms",
    "WAWebModalManager",
    "WAWebNux",
    "WAWebSupportAiSessionWamEvent",
    "WAWebSupportChatStrings",
    "WAWebText.react",
    "WAWebWamEnumSupportAiEventType",
    "WAWebWdsPictoAiChatsAndroidIcon.react",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebNux",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        iconColor: { color: "xhslqc4", $$css: !0 },
        paddingBottom4: { paddingBottom: "x1nbhmlj", $$css: !0 },
        paddingAll8: {
          paddingTop: "x16ovd2e",
          paddingInlineEnd: "x1nzty39",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x12w63v0",
          $$css: !0,
        },
        paddingStart8: { paddingInlineStart: "x12w63v0", $$css: !0 },
      };
    function d(e) {
      var t = e.canCancel,
        a = e.isSending,
        i = e.okText,
        l = e.onOK,
        d = r("useWAWebNux")(o("WAWebNux").NUX.SUPPORT_AI),
        m = d[0],
        p = d[1];
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        okSpinner: a,
        okText: i,
        onOK: n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (p(), yield l());
        }),
        okDisabled: a,
        cancelDisabled: a,
        onCancel:
          t === !0
            ? function () {
                return o("WAWebModalManager").ModalManager.close();
              }
            : null,
        testid: void 0,
        tsNavigationData: { surface: "unknown", viewName: "support-ai-nux" },
        children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
          children: [
            u.jsx(o("WAWebFlex.react").FlexItem, {
              align: "center",
              marginTop: 20,
              children: u.jsx(
                o("WAWebWdsPictoAiChatsAndroidIcon.react")
                  .WdsPictoAiChatsAndroidIcon,
                { height: 88 },
              ),
            }),
            u.jsx(o("WAWebFlex.react").FlexItem, {
              marginTop: 20,
              marginBottom: 20,
              marginStart: 24,
              marginEnd: 24,
              align: "center",
              children: u.jsx("div", {
                className: "xngnso2 x1s688f x2b8uid",
                children: s._(
                  /*BTDS*/ "Get help from official WhatsApp Support",
                ),
              }),
            }),
            u.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "stretch",
              marginStart: 24,
              marginEnd: 24,
              children: [
                u.jsx(o("WAWebFlex.react").FlexItem, {
                  grow: 1,
                  children: u.jsx(r("WAWebCellV2.react"), {
                    containerXStyle: c.paddingBottom4,
                    detailLeftXStyle: c.paddingAll8,
                    primaryXStyle: c.paddingStart8,
                    interactive: !1,
                    colorScheme: "lightest",
                    detailLeft: u.jsx(
                      o("WAWebCheckShieldIcon.react").CheckShieldIcon,
                      { iconXstyle: c.iconColor, height: 20, width: 20 },
                    ),
                    primary: u.jsx(o("WAWebText.react").WAWebTextTitle, {
                      children: s._(/*BTDS*/ "Secure chat with WhatsApp"),
                    }),
                  }),
                }),
                u.jsx(o("WAWebFlex.react").FlexItem, {
                  grow: 1,
                  children: u.jsx(r("WAWebCellV2.react"), {
                    containerXStyle: c.paddingBottom4,
                    detailLeftXStyle: c.paddingAll8,
                    primaryXStyle: c.paddingStart8,
                    interactive: !1,
                    colorScheme: "lightest",
                    size: "none",
                    detailLeft: u.jsx(
                      o("WAWebAiSignalOutlineIcon.react").AiSignalOutlineIcon,
                      { iconXstyle: c.iconColor, height: 20, width: 20 },
                    ),
                    primary: u.jsx(o("WAWebText.react").WAWebTextTitle, {
                      children: s._(/*BTDS*/ "Answers may be AI generated"),
                    }),
                  }),
                }),
                u.jsx(o("WAWebFlex.react").FlexItem, {
                  grow: 1,
                  children: u.jsx(r("WAWebCellV2.react"), {
                    detailLeftXStyle: c.paddingAll8,
                    containerXStyle: c.paddingBottom4,
                    primaryXStyle: c.paddingStart8,
                    interactive: !1,
                    colorScheme: "lightest",
                    detailLeft: u.jsx(
                      o("WAWebBotFeedbackIcon.react").BotFeedbackIcon,
                      { iconXstyle: c.iconColor, height: 20, width: 20 },
                    ),
                    primary: u.jsx(o("WAWebText.react").WAWebTextTitle, {
                      children: s._(/*BTDS*/ "Help us improve with feedback"),
                    }),
                  }),
                }),
              ],
            }),
            u.jsx(o("WAWebFlex.react").FlexRow, {
              marginTop: 16,
              marginStart: 24,
              marginEnd: 24,
              children: u.jsx(o("WAWebFlex.react").FlexItem, {
                grow: 1,
                children: u.jsx("label", {
                  htmlFor: "contact-us-include-device",
                  children: u.jsxs(o("WAWebText.react").WAWebTextMuted, {
                    children: [
                      o("WAWebMobilePlatforms").isSMB()
                        ? o(
                            "WAWebSupportChatStrings",
                          ).SupportAINuxSmbDisclaimer()
                        : o("WAWebSupportChatStrings").SupportAINuxDisclaimer(),
                      " ",
                      u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                        href: o("WAWebFaqUrl").getSupportChatSafetyFaqUrl(),
                        onClick: function () {
                          new (o(
                            "WAWebSupportAiSessionWamEvent",
                          ).SupportAiSessionWamEvent)({
                            supportAiEventType: o(
                              "WAWebWamEnumSupportAiEventType",
                            ).SUPPORT_AI_EVENT_TYPE
                              .REVIEW_INFORMATION_LEARN_MORE_CLICKED,
                          }).commit();
                        },
                        children: s._(/*BTDS*/ "Learn more"),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          ],
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
