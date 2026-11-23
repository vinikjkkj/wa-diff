__d(
  "AYMTSecureBillingEligibleModalTip",
  [
    "fbt",
    "DOMContainer.react",
    "GeoButton.react",
    "GeoHeading.react",
    "GeoIllustrationModal.react",
    "GeoModalFooter.react",
    "GeoSection.react",
    "GeoText.react",
    "IPB4BImage.react",
    "goURI",
    "meta-business-illustrations-am-add-funds-modal-b4b",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useState;
    function d(e) {
      var t = e.onClose,
        n = e.onPrimaryClick,
        a = e.tipData,
        i = c(!0),
        l = i[0],
        d = i[1],
        m = function () {
          (d(!1), t());
        },
        p = function () {
          (a.primaryButtonAction != null && r("goURI")(a.primaryButtonAction),
            d(!1),
            n());
        };
      return u.jsx(r("GeoIllustrationModal.react"), {
        "data-testid": void 0,
        footer: u.jsx(r("GeoModalFooter.react"), {
          primaryButton: u.jsx(r("GeoButton.react"), {
            label: s._(/*BTDS*/ "", [
              s._param(
                "Button for Secure Billing modal",
                u.jsx(r("DOMContainer.react"), {
                  children: a.primaryButtonText,
                }),
              ),
            ]),
            onClick: p,
            variant: "primary",
          }),
        }),
        heading: "",
        image: u.jsx("div", {
          className: "x1isuwpm xtkt0ra",
          children: u.jsx(r("IPB4BImage.react"), {
            height: 220,
            src: o("meta-business-illustrations-am-add-funds-modal-b4b")
              .metaBusinessIllustrationsAmAddFundsModalB4b,
            width: 440,
          }),
        }),
        isShown: l,
        onHide: m,
        orientation: "horizontal",
        children: u.jsxs(r("GeoSection.react"), {
          children: [
            u.jsx(r("GeoHeading.react"), {
              level: 2,
              children: s._(/*BTDS*/ "", [
                s._param(
                  "Title for Secure Billing modal",
                  u.jsx(r("DOMContainer.react"), { children: a.title }),
                ),
              ]),
            }),
            u.jsx("div", {
              className: "x13ihpsm",
              children: u.jsx(r("GeoText.react"), {
                children: s._(/*BTDS*/ "", [
                  s._param(
                    "Body for Secure Billing modal",
                    u.jsx(r("DOMContainer.react"), { children: a.body }),
                  ),
                ]),
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
