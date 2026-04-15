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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(19),
        n = e.msg,
        a;
      t[0] !== n
        ? ((a = o(
            "WAWebInAppSignupConfirmation",
          ).getInAppSignupConfirmationInfo(n)),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = o("WAWebSignupCTAExperiment").getSignupCTAExperiment()),
          (t[2] = l))
        : (l = t[2]);
      var c = l,
        d;
      t[3] !== n
        ? ((d = o("WAWebFrontendMsgGetters").getChat(n.unsafe())),
          (t[3] = n),
          (t[4] = d))
        : (d = t[4]);
      var m = d,
        p = m == null ? void 0 : m.contact;
      if (i == null || p == null) return null;
      var _;
      t[5] !== p
        ? ((_ = u.jsx(o("WAWebName.react").Name, { contact: p })),
          (t[5] = p),
          (t[6] = _))
        : (_ = t[6]);
      var f = _,
        g;
      t[7] !== i.subscriptionTimestamp
        ? ((g = r("WAWeb-moment")
            .unix(parseInt(i.subscriptionTimestamp, 10))
            .format("ll")),
          (t[7] = i.subscriptionTimestamp),
          (t[8] = g))
        : (g = t[8]);
      var h = g,
        y,
        C;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = s._(/*BTDS*/ "OK, got it")),
          (C =
            c === o("WAWebSignupCTAExperiment").SignupCTAExperiment.GetOffers
              ? s._(/*BTDS*/ "Request successful")
              : s._(/*BTDS*/ "Sign up successful")),
          (t[9] = y),
          (t[10] = C))
        : ((y = t[9]), (C = t[10]));
      var b;
      t[11] !== f || t[12] !== h
        ? ((b = u.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDeemphasized",
            children:
              c === o("WAWebSignupCTAExperiment").SignupCTAExperiment.GetOffers
                ? s._(
                    /*BTDS*/ "You chose to get offers and announcements from {contactTitle} on {date}.",
                    [
                      s._param("contactTitle", u.jsx("bdi", { children: f })),
                      s._param("date", u.jsx("bdi", { children: h })),
                    ],
                  )
                : s._(
                    /*BTDS*/ "You signed up for offers and announcements from {contactTitle} on {date}.",
                    [
                      s._param("contactTitle", u.jsx("bdi", { children: f })),
                      s._param("date", u.jsx("bdi", { children: h })),
                    ],
                  ),
          })),
          (t[11] = f),
          (t[12] = h),
          (t[13] = b))
        : (b = t[13]);
      var v;
      t[14] !== p
        ? ((v = u.jsx(r("WAWebBizBrandingLine.react"), { contact: p })),
          (t[14] = p),
          (t[15] = v))
        : (v = t[15]);
      var S;
      return (
        t[16] !== b || t[17] !== v
          ? ((S = u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
              onOK: o("WAWebModalManager").closeModalManager,
              okText: y,
              title: C,
              children: [b, v],
            })),
            (t[16] = b),
            (t[17] = v),
            (t[18] = S))
          : (S = t[18]),
        S
      );
    }
    l.openSignupConfirmationPopup = c;
  },
  226,
);
