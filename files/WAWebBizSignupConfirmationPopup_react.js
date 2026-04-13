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
      var p = d,
        _ = p == null ? void 0 : p.contact;
      if (i == null || _ == null) return null;
      var f;
      t[5] !== _
        ? ((f = u.jsx(o("WAWebName.react").Name, { contact: _ })),
          (t[5] = _),
          (t[6] = f))
        : (f = t[6]);
      var g = f,
        h;
      t[7] !== i.subscriptionTimestamp
        ? ((h = r("WAWeb-moment")
            .unix(parseInt(i.subscriptionTimestamp, 10))
            .format("ll")),
          (t[7] = i.subscriptionTimestamp),
          (t[8] = h))
        : (h = t[8]);
      var y = h,
        C = m,
        b,
        v;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = s._(/*BTDS*/ "OK, got it")),
          (v =
            c === o("WAWebSignupCTAExperiment").SignupCTAExperiment.GetOffers
              ? s._(/*BTDS*/ "Request successful")
              : s._(/*BTDS*/ "Sign up successful")),
          (t[9] = b),
          (t[10] = v))
        : ((b = t[9]), (v = t[10]));
      var S;
      t[11] !== g || t[12] !== y
        ? ((S = u.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDeemphasized",
            children:
              c === o("WAWebSignupCTAExperiment").SignupCTAExperiment.GetOffers
                ? s._(
                    /*BTDS*/ "You chose to get offers and announcements from {contactTitle} on {date}.",
                    [
                      s._param("contactTitle", u.jsx("bdi", { children: g })),
                      s._param("date", u.jsx("bdi", { children: y })),
                    ],
                  )
                : s._(
                    /*BTDS*/ "You signed up for offers and announcements from {contactTitle} on {date}.",
                    [
                      s._param("contactTitle", u.jsx("bdi", { children: g })),
                      s._param("date", u.jsx("bdi", { children: y })),
                    ],
                  ),
          })),
          (t[11] = g),
          (t[12] = y),
          (t[13] = S))
        : (S = t[13]);
      var R;
      t[14] !== _
        ? ((R = u.jsx(r("WAWebBizBrandingLine.react"), { contact: _ })),
          (t[14] = _),
          (t[15] = R))
        : (R = t[15]);
      var L;
      return (
        t[16] !== S || t[17] !== R
          ? ((L = u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
              onOK: C,
              okText: b,
              title: v,
              children: [S, R],
            })),
            (t[16] = S),
            (t[17] = R),
            (t[18] = L))
          : (L = t[18]),
        L
      );
    }
    function m() {
      o("WAWebModalManager").ModalManager.close();
    }
    l.openSignupConfirmationPopup = c;
  },
  226,
);
