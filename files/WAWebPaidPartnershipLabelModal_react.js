__d(
  "WAWebPaidPartnershipLabelModal.react",
  [
    "fbt",
    "Promise",
    "WAJids",
    "WAWebActionToast.react",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebNetworkStatus",
    "WAWebNewsletterAddPaidPartnershipLabelAction",
    "WAWebToastManager",
    "WAWebWdsPictoMegaphoneAdsIcon.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "err",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        icon: { color: "x1v5yvga", marginBottom: "x1ua1l7f", $$css: !0 },
        titleText: {
          textAlign: "x2b8uid",
          marginBottom: "x1ua1l7f",
          $$css: !0,
        },
        centeredText: { textAlign: "x2b8uid", $$css: !0 },
      };
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          i === void 0 && (i = o("WAWebActionToast.react").genId());
          var l = o("WAWebFrontendMsgGetters").getChat(t),
            u = o("WAJids").toNewsletterJid(l.id.toJid()),
            d = t.serverId,
            p =
              d != null
                ? o(
                    "WAWebNewsletterAddPaidPartnershipLabelAction",
                  ).WAWebNewsletterAddPaidPartnershipLabelAction(
                    u,
                    d.toString(),
                    a,
                  )
                : (e || (e = n("Promise"))).resolve(!1),
            _ = s._(/*BTDS*/ "Please wait a moment"),
            f = s._(/*BTDS*/ "Paid partnership label added."),
            g = s._(/*BTDS*/ "Label not added."),
            h = new (o("WAWebActionToast.react").ActionType)(_),
            y = p
              .then(function (e) {
                if (e === !0)
                  return new (o("WAWebActionToast.react").ActionType)(f);
                throw r("err")("Label not added");
              })
              .catch(function () {
                return new (o("WAWebActionToast.react").ActionType)(g, {
                  actionText: r("WAWebFbtCommon")("Try again"),
                  actionHandler: function () {
                    return m(t, a, i);
                  },
                });
              });
          return o("WAWebToastManager").ToastManager.open(
            c.jsx(o("WAWebActionToast.react").ActionToast, {
              id: i,
              initialAction: h,
              pendingAction: y,
            }),
          );
        })),
        p.apply(this, arguments)
      );
    }
    function _(t, a, i) {
      i === void 0 && (i = o("WAWebActionToast.react").genId());
      var l = s._(/*BTDS*/ "Check your internet connection"),
        u = new (o("WAWebActionToast.react").ActionType)(l, {
          actionText: r("WAWebFbtCommon")("Try again"),
          actionHandler: function () {
            return r("WAWebNetworkStatus").online
              ? m(t, a, i)
              : (_(t, a, i), (e || (e = n("Promise"))).resolve());
          },
        });
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebActionToast.react").ActionToast, {
          id: i,
          initialAction: u,
          pendingAction: (e || (e = n("Promise"))).resolve(u),
        }),
      );
    }
    function f(e) {
      var t = e.msg,
        n = e.onClose,
        a = t.isNewsletterStatus === !0,
        i = a ? "STATUS" : "MESSAGE",
        l = function () {
          (o("WAWebModalManager").ModalManager.close(), n == null || n());
        },
        u = function () {
          if (!r("WAWebNetworkStatus").online) {
            (_(t, i), l());
            return;
          }
          (m(t, i), l());
        },
        p = c.jsx(o("WAWebExternalLink.react").ExternalLink, {
          href: o("WAWebFaqUrl").getPaidPartnershipLabelFaqUrl(),
          children: s._(/*BTDS*/ "Learn more"),
        });
      return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: {
          surface: "unknown",
          viewName: "paid-partnership-label",
        },
        type: a ? o("WAWebModal.react").ModalTheme.StatusReport : void 0,
        onOK: u,
        okText: s._(/*BTDS*/ "Add label"),
        onCancel: l,
        buttonWidth: "hug",
        children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
          align: "center",
          children: [
            c.jsx(
              o("WAWebWdsPictoMegaphoneAdsIcon.react").WdsPictoMegaphoneAdsIcon,
              { height: 64, width: 64, xstyle: d.icon },
            ),
            c.jsx(r("WDSText.react"), {
              type: "Headline1",
              colorName: "contentDefault",
              xstyle: d.titleText,
              children: a
                ? s._(/*BTDS*/ "Label your status as paid partnership")
                : s._(/*BTDS*/ "Label your update as paid partnership"),
            }),
            c.jsxs("div", {
              className: "x78zum5 xdt5ytf x6s0dn4 x1j3ira4",
              children: [
                c.jsx(r("WDSText.react"), {
                  type: "Body1",
                  colorName: "contentDeemphasized",
                  xstyle: d.centeredText,
                  children: a
                    ? s._(
                        /*BTDS*/ "Only add this label to let followers know when a brand or business has compensated you to share a status. {learnMoreLink}",
                        [s._param("learnMoreLink", p)],
                      )
                    : s._(
                        /*BTDS*/ "Only add this label to let followers know when a brand or business has compensated you to share an update. {learnMoreLink}",
                        [s._param("learnMoreLink", p)],
                      ),
                }),
                c.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDeemphasized",
                  xstyle: d.centeredText,
                  children: s._(
                    /*BTDS*/ "Once added, this label can't be removed.",
                  ),
                }),
              ],
            }),
          ],
        }),
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
