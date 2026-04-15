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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.contact,
        a = e.experiment,
        i = e.privacyPolicyUrl,
        l;
      t[0] !== n
        ? ((l = u.jsx(o("WAWebName.react").Name, { contact: n })),
          (t[0] = n),
          (t[1] = l))
        : (l = t[1]);
      var c = l,
        d;
      t[2] !== i
        ? ((d = function () {
            (o("WAWebExternalLink.react").openExternalLink(i),
              o("WAWebModalManager").ModalManager.close());
          }),
          (t[2] = i),
          (t[3] = d))
        : (d = t[3]);
      var m = d,
        p;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = s._(/*BTDS*/ "View Privacy Policy")), (t[4] = p))
        : (p = t[4]);
      var _;
      t[5] !== c
        ? ((_ = s._(/*BTDS*/ "About {contactTitle} Privacy Policy", [
            s._param("contactTitle", c),
          ])),
          (t[5] = c),
          (t[6] = _))
        : (_ = t[6]);
      var f;
      t[7] !== a
        ? ((f = u.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDeemphasized",
            children:
              a === o("WAWebSignupCTAExperiment").SignupCTAExperiment.GetOffers
                ? s._(
                    /*BTDS*/ "By choosing to get offers and announcements, you agree that this business will use your contact info as described in their Privacy Policy. You also agree to receive messages from them on WhatsApp.",
                  )
                : s._(
                    /*BTDS*/ "By signing up, you agree that this business will use your contact info as described in their Privacy Policy. You also agree to get offers and announcements from them on WhatsApp.",
                  ),
          })),
          (t[7] = a),
          (t[8] = f))
        : (f = t[8]);
      var g;
      t[9] !== n
        ? ((g = u.jsx(r("WAWebBizBrandingLine.react"), { contact: n })),
          (t[9] = n),
          (t[10] = g))
        : (g = t[10]);
      var h;
      return (
        t[11] !== m || t[12] !== _ || t[13] !== f || t[14] !== g
          ? ((h = u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
              onCancel: o("WAWebModalManager").closeModalManager,
              onOK: m,
              okIcon: r("WDSIconIcOpenInNew.react"),
              okText: p,
              title: _,
              children: [f, g],
            })),
            (t[11] = m),
            (t[12] = _),
            (t[13] = f),
            (t[14] = g),
            (t[15] = h))
          : (h = t[15]),
        h
      );
    }
    l.default = c;
  },
  226,
);
