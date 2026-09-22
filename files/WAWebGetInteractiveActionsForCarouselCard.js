__d(
  "WAWebGetInteractiveActionsForCarouselCard",
  [
    "WAWebCarouselMsgUtils",
    "WAWebGetInteractiveActionsFromButtons",
    "WAWebGetInteractiveCtaActions",
    "WAWebInteractiveMessageCarouselLogEvents",
    "WAWebWamEnumPaidMessagingUserInteractionsActionTarget",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n,
        a,
        i,
        l = [];
      if (
        !s(e, t) ||
        ((n = e.interactivePayload) == null ? void 0 : n.buttons) == null
      )
        return l;
      for (
        var c =
            (a = (i = e.interactivePayload) == null ? void 0 : i.buttons) !=
            null
              ? a
              : [],
          d = [],
          m = 0;
        m < c.length;
        m++
      ) {
        var p = c[m];
        if (p != null) {
          var _ = o(
            "WAWebGetInteractiveCtaActions",
          ).nativeFlowButtonToCtaButton(p, m, void 0, e.nativeFlowName);
          _ != null && d.push(_);
        }
      }
      var f = u(d, t);
      return (
        (l = r("WAWebGetInteractiveActionsFromButtons")(f, e)),
        l.map(function (t, n) {
          var a = f[n],
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
            ? t
            : babelHelpers.extends({}, t, {
                onClick: function () {
                  (t.onClick != null && t.onClick(),
                    o(
                      "WAWebInteractiveMessageCarouselLogEvents",
                    ).logCarouselCardClickCTA(
                      e.unsafe(),
                      r("nullthrows")(i),
                      n,
                    ));
                },
              });
        })
      );
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
