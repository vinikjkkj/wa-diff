__d(
  "WAWebPaymentLinkComponents.react",
  [
    "fbt",
    "PaymentLinkWamLogger",
    "PaymentLinkWithCTAFeature",
    "WALogger",
    "WAWebExternalLink.react",
    "WAWebLaunchIcon.react",
    "WAWebMessageBubbleActions.react",
    "WAWebMsgGetters",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react"));
    function d() {
      return s._(/*BTDS*/ "Open payment link");
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(t, n, r) {
      var a = t.matchedText;
      (o("WAWebExternalLink.react").openExternalLink(a),
        o("PaymentLinkWamLogger").shouldLogReceiverEvent(t) &&
          o("PaymentLinkWamLogger")
            .genLogClickEvent({ interaction_component: n, msg: t }, r)
            .catch(function (t) {
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "error logging payment link message click: ",
                    "",
                  ])),
                t,
              );
            }));
    }
    function p(e) {
      var t,
        n = e.msg,
        r = e.psp;
      if (o("PaymentLinkWithCTAFeature").isKillSwitchEnabled()) return null;
      var a = o("WAWebMsgGetters").getPaymentLinkMetadata(n);
      if (
        (a == null || (t = a.button) == null ? void 0 : t.displayText) == null
      )
        return null;
      var i = function (t) {
        var e = n.matchedText;
        (o("WAWebExternalLink.react").openExternalLink(e),
          m(
            n,
            o("PaymentLinkWamLogger").ClickInteractionComponent.LINK_CTA,
            r,
          ));
      };
      return c.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
        items: [
          {
            label: d(),
            title: d(),
            onClick: i,
            disabled: !1,
            testid: "payment-link-cta",
            Icon: o("WAWebLaunchIcon.react").LaunchIcon,
          },
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
