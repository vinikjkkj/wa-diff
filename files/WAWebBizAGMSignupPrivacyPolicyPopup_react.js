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
        m = d,
        p;
      t[2] !== i
        ? ((p = function () {
            (o("WAWebExternalLink.react").openExternalLink(i),
              o("WAWebModalManager").ModalManager.close());
          }),
          (t[2] = i),
          (t[3] = p))
        : (p = t[3]);
      var _ = p,
        f;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = s._(/*BTDS*/ "View Privacy Policy")), (t[4] = f))
        : (f = t[4]);
      var g;
      t[5] !== c
        ? ((g = s._(/*BTDS*/ "About {contactTitle} Privacy Policy", [
            s._param("contactTitle", c),
          ])),
          (t[5] = c),
          (t[6] = g))
        : (g = t[6]);
      var h;
      t[7] !== a
        ? ((h = u.jsx(r("WDSText.react"), {
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
          (t[8] = h))
        : (h = t[8]);
      var y;
      t[9] !== n
        ? ((y = u.jsx(r("WAWebBizBrandingLine.react"), { contact: n })),
          (t[9] = n),
          (t[10] = y))
        : (y = t[10]);
      var C;
      return (
        t[11] !== _ || t[12] !== g || t[13] !== h || t[14] !== y
          ? ((C = u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
              onCancel: m,
              onOK: _,
              okIcon: r("WDSIconIcOpenInNew.react"),
              okText: f,
              title: g,
              children: [h, y],
            })),
            (t[11] = _),
            (t[12] = g),
            (t[13] = h),
            (t[14] = y),
            (t[15] = C))
          : (C = t[15]),
        C
      );
    }
    function d() {
      o("WAWebModalManager").ModalManager.close();
    }
    l.default = c;
  },
  226,
);
