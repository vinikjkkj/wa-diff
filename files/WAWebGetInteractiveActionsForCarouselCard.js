__d(
  "WAWebGetInteractiveActionsForCarouselCard",
  [
    "WAWebCarouselMsgUtils",
    "WAWebGetInteractiveActionsForButtons",
    "WAWebGetInteractiveButtonActionValues",
    "WAWebGetInteractiveCtaActions",
    "WAWebInteractiveMessageCarouselLogEvents",
    "WAWebWamEnumPaidMessagingUserInteractionsActionTarget",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n, a, i;
      if (!s(e, t)) return [];
      if (((n = e.interactivePayload) == null ? void 0 : n.buttons) == null)
        return [];
      for (
        var l =
            (a = (i = e.interactivePayload) == null ? void 0 : i.buttons) !=
            null
              ? a
              : [],
          c = [],
          d = 0;
        d < l.length;
        d++
      ) {
        var m = l[d];
        if (m != null) {
          var p = o(
            "WAWebGetInteractiveCtaActions",
          ).nativeFlowButtonToCtaButton({
            button: m,
            index: d,
            messageNativeFlowName: e.nativeFlowName,
          });
          p != null && c.push(p);
        }
      }
      var _ = r("WAWebGetInteractiveActionsForButtons")(
        u(c, t),
        e.id,
        r("WAWebGetInteractiveButtonActionValues")(e),
      );
      return _.map(function (t) {
        var n = t.action,
          a = t.button,
          i = null;
        switch (a.name) {
          case "cta_url":
            i = o("WAWebWamEnumPaidMessagingUserInteractionsActionTarget")
              .PAID_MESSAGING_USER_INTERACTIONS_ACTION_TARGET.CTA_URL;
            break;
          case "quick_reply":
            i = o("WAWebWamEnumPaidMessagingUserInteractionsActionTarget")
              .PAID_MESSAGING_USER_INTERACTIONS_ACTION_TARGET.QUICK_REPLY;
            break;
          case "cta_call":
            i = o("WAWebWamEnumPaidMessagingUserInteractionsActionTarget")
              .PAID_MESSAGING_USER_INTERACTIONS_ACTION_TARGET.CTA_CALL;
            break;
          case "cta_catalog":
            break;
        }
        return i == null
          ? n
          : babelHelpers.extends({}, n, {
              onClick: function () {
                (n.onClick != null && n.onClick(),
                  o(
                    "WAWebInteractiveMessageCarouselLogEvents",
                  ).logCarouselCardClickCTA(
                    e.unsafe(),
                    r("nullthrows")(i),
                    a.index,
                  ));
              },
            });
      });
    }
    function s(e, t) {
      return t === !0
        ? !0
        : o("WAWebCarouselMsgUtils").isOutgoingBizBotMessage(e.unsafe());
    }
    function u(e, t) {
      return t === !0
        ? e
        : e.filter(function (e) {
            return e.name === "quick_reply";
          });
    }
    l.default = e;
  },
  98,
);
