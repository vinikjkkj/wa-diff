__d(
  "WAWebBizAdManagementAdPaymentModal.react",
  [
    "fbt",
    "CometRelay",
    "WAWebBizAdManagementAdPaymentModalMutation.graphql",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WDSButton.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useState,
      m = 400,
      p = {
        root: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          paddingTop: "xl7twdi",
          paddingBottom: "xvg22vi",
          paddingInlineStart: "xb0esv5",
          paddingInlineEnd: "xyo0t3i",
          paddingLeft: null,
          paddingRight: null,
          rowGap: "x1f0uite",
          width: "x1l2rt3b",
          $$css: !0,
        },
      },
      _ =
        e !== void 0
          ? e
          : (e = n("WAWebBizAdManagementAdPaymentModalMutation.graphql"));
    function f(e, t, n) {
      o("CometRelay").commitMutation(e, {
        mutation: _,
        onCompleted: function (r) {
          r.xfb_wa_biz_send_payment_hub_notification === !0 ? t() : n();
        },
        onError: function () {
          n();
        },
        variables: {},
      });
    }
    function g(e) {
      var t = e.onClose,
        n = e.onError,
        a = e.onSuccess,
        i = e.relayEnvironment,
        l = d(!1),
        u = l[0],
        m = l[1],
        _ = function () {
          if (i == null) {
            n();
            return;
          }
          (m(!0),
            f(
              i,
              function () {
                (m(!1), a());
              },
              function () {
                (m(!1), n());
              },
            ));
        };
      return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        type: o("WAWebModal.react").ModalTheme.Auto,
        children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
          align: "stretch",
          xstyle: p.root,
          children: [
            c.jsx(r("WDSText.react"), {
              type: "Headline1",
              colorName: "contentDefault",
              children: s._(/*BTDS*/ "Ad payments"),
            }),
            c.jsx(r("WDSText.react"), {
              type: "Body1",
              colorName: "contentDefault",
              children: s._(
                /*BTDS*/ "To see your payment activity, see ad payments on your phone.",
              ),
            }),
            c.jsxs("div", {
              className: "x78zum5 x1q0g3np x1lvf691 xs2akgl x16ovd2e",
              children: [
                c.jsx(r("WDSButton.react"), {
                  label: r("WAWebFbtCommon")("Close"),
                  variant: "borderless",
                  size: "medium",
                  type: "default",
                  onPress: t,
                }),
                c.jsx(r("WDSButton.react"), {
                  label: s._(/*BTDS*/ "Notify on phone"),
                  variant: "filled",
                  size: "medium",
                  type: "default",
                  loading: u,
                  onPress: _,
                }),
              ],
            }),
          ],
        }),
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
