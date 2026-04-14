__d(
  "WAWebBizSignupConfirmationPopup.react",
  [
    "fbt",
    "WAWeb-moment",
    "WAWebBizBrandingLine.react",
    "WAWebConfirmPopup.react",
    "WAWebFrontendMsgGetters",
    "WAWebInAppSignupConfirmation",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebSignupCTAExperiment",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      o("WAWebModalManager").ModalManager.open(u.jsx(d, { msg: e }), {
        transition: "modal-flow",
      });
    }
    function d(e) {
      var t = e.msg,
        n = o("WAWebInAppSignupConfirmation").getInAppSignupConfirmationInfo(t),
        a = o("WAWebSignupCTAExperiment").getSignupCTAExperiment(),
        i = o("WAWebFrontendMsgGetters").getChat(t.unsafe()),
        l = i == null ? void 0 : i.contact;
      if (n == null || l == null) return null;
      var c = u.jsx(o("WAWebName.react").Name, { contact: l }),
        d = r("WAWeb-moment")
          .unix(parseInt(n.subscriptionTimestamp, 10))
          .format("ll");
      return u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
        onOK: o("WAWebModalManager").closeModalManager,
        okText: s._(/*BTDS*/ "OK, got it"),
        title:
          a === o("WAWebSignupCTAExperiment").SignupCTAExperiment.GetOffers
            ? s._(/*BTDS*/ "Request successful")
            : s._(/*BTDS*/ "Sign up successful"),
        children: [
          u.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDeemphasized",
            children:
              a === o("WAWebSignupCTAExperiment").SignupCTAExperiment.GetOffers
                ? s._(
                    /*BTDS*/ "You chose to get offers and announcements from {contactTitle} on {date}.",
                    [
                      s._param("contactTitle", u.jsx("bdi", { children: c })),
                      s._param("date", u.jsx("bdi", { children: d })),
                    ],
                  )
                : s._(
                    /*BTDS*/ "You signed up for offers and announcements from {contactTitle} on {date}.",
                    [
                      s._param("contactTitle", u.jsx("bdi", { children: c })),
                      s._param("date", u.jsx("bdi", { children: d })),
                    ],
                  ),
          }),
          u.jsx(r("WAWebBizBrandingLine.react"), { contact: l }),
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"),
      (l.openSignupConfirmationPopup = c));
  },
  226,
);
