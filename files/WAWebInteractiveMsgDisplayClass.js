__d(
  "WAWebInteractiveMsgDisplayClass",
  [
    "WAWebBloksWidgetPayload",
    "WAWebFrontendMsgGetters",
    "WAWebGetInteractiveFooterText",
    "WAWebIsBloksOnlyMessage",
    "WAWebMsgGetters",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.msg;
      return !o("WAWebBloksWidgetPayload").isA2UIBloksWidget(
        o("WAWebMsgGetters").getBloksWidget(t),
      ) ||
        !s(t) ||
        u(t) ||
        o("WAWebBloksWidgetPayload").getA2uiNativeBubbleChatKind(t.id) == null
        ? null
        : "messageChat";
    }
    function s(e) {
      var t;
      return r("WAWebIsBloksOnlyMessage")({
        bloksWidget: (t = o("WAWebMsgGetters")).getBloksWidget(e),
        footerText: o(
          "WAWebGetInteractiveFooterText",
        ).getInteractiveFooterTextFor({
          footer: t.getFooter(e),
          interactivePayload: t.getInteractivePayload(e),
          nativeFlowName: t.getNativeFlowName(e),
          type: t.getType(e),
        }),
        interactiveHeader: t.getInteractiveHeader(e),
        text: o("WAWebFrontendMsgGetters").getText(e),
      });
    }
    function u(e) {
      var t = o("WAWebMsgGetters").getInteractivePayload(e);
      return (
        t != null &&
        "buttons" in t &&
        Array.isArray(t.buttons) &&
        t.buttons.length > 0
      );
    }
    l.default = e;
  },
  98,
);
