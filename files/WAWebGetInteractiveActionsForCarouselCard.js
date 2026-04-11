__d(
  "WAWebGetInteractiveActionsForCarouselCard",
  [
    "WANullthrows",
    "WAWebGetInteractiveActionsFromButtons",
    "WAWebGetInteractiveCtaActions",
    "WAWebInteractiveMessageCarouselLogEvents",
    "WAWebWamEnumPaidMessagingUserInteractionsActionTarget",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n,
        a,
        i,
        l = [];
      if (
        t !== !0 ||
        ((n = e.interactivePayload) == null ? void 0 : n.buttons) == null
      )
        return l;
      for (
        var s =
            (a = (i = e.interactivePayload) == null ? void 0 : i.buttons) !=
            null
              ? a
              : [],
          u = [],
          c = 0;
        c < s.length;
        c++
      ) {
        var d = s[c];
        if (d != null) {
          var m = o(
            "WAWebGetInteractiveCtaActions",
          ).nativeFlowButtonToCtaButton(d, c);
          m != null && u.push(m);
        }
      }
      return (
        (l = r("WAWebGetInteractiveActionsFromButtons")(u, e)),
        l.map(function (t, n) {
          var a = u[n],
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
                      r("WANullthrows")(i),
                      n,
                    ));
                },
              });
        })
      );
    }
    l.default = e;
  },
  98,
);
