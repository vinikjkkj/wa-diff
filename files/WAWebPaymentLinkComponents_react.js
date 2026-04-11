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
    "react-compiler-runtime",
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
        n = o("react-compiler-runtime").c(7),
        r = e.msg,
        a = e.psp;
      if (o("PaymentLinkWithCTAFeature").isKillSwitchEnabled()) return null;
      var i = o("WAWebMsgGetters").getPaymentLinkMetadata(r);
      if (
        (i == null || (t = i.button) == null ? void 0 : t.displayText) == null
      )
        return null;
      var l;
      n[0] !== r || n[1] !== a
        ? ((l = function (t) {
            var e = r.matchedText;
            (o("WAWebExternalLink.react").openExternalLink(e),
              m(
                r,
                o("PaymentLinkWamLogger").ClickInteractionComponent.LINK_CTA,
                a,
              ));
          }),
          (n[0] = r),
          (n[1] = a),
          (n[2] = l))
        : (l = n[2]);
      var s = l,
        u,
        p;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = d()), (p = d()), (n[3] = u), (n[4] = p))
        : ((u = n[3]), (p = n[4]));
      var _;
      return (
        n[5] !== s
          ? ((_ = c.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
              items: [
                {
                  label: u,
                  title: p,
                  onClick: s,
                  disabled: !1,
                  testid: "payment-link-cta",
                  Icon: o("WAWebLaunchIcon.react").LaunchIcon,
                },
              ],
            })),
            (n[5] = s),
            (n[6] = _))
          : (_ = n[6]),
        _
      );
    }
    l.default = p;
  },
  226,
);
