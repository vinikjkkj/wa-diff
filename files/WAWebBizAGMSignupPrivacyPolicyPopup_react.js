__d(
  "WAWebBizAGMSignupPrivacyPolicyPopup.react",
  [
    "fbt",
    "WAWebBizBrandingLine.react",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebSignupCTAExperiment",
    "WDSIconIcOpenInNew.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.contact,
        n = e.experiment,
        a = e.privacyPolicyUrl,
        i = u.jsx(o("WAWebName.react").Name, { contact: t }),
        l = function () {
          o("WAWebModalManager").ModalManager.close();
        },
        c = function () {
          (o("WAWebExternalLink.react").openExternalLink(a),
            o("WAWebModalManager").ModalManager.close());
        };
      return u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
        onCancel: l,
        onOK: c,
        okIcon: r("WDSIconIcOpenInNew.react"),
        okText: s._(/*BTDS*/ "View Privacy Policy"),
        title: s._(/*BTDS*/ "About {contactTitle} Privacy Policy", [
          s._param("contactTitle", i),
        ]),
        children: [
          u.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDeemphasized",
            children:
              n === o("WAWebSignupCTAExperiment").SignupCTAExperiment.GetOffers
                ? s._(
                    /*BTDS*/ "By choosing to get offers and announcements, you agree that this business will use your contact info as described in their Privacy Policy. You also agree to receive messages from them on WhatsApp.",
                  )
                : s._(
                    /*BTDS*/ "By signing up, you agree that this business will use your contact info as described in their Privacy Policy. You also agree to get offers and announcements from them on WhatsApp.",
                  ),
          }),
          u.jsx(r("WAWebBizBrandingLine.react"), { contact: t }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
