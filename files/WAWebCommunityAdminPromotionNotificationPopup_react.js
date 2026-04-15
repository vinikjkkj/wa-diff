__d(
  "WAWebCommunityAdminPromotionNotificationPopup.react",
  [
    "fbt",
    "WAWebEmojiText.react",
    "WAWebExternalLink.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebL10N",
    "WAWebModal.react",
    "WAWebWdsPictoCommunitiesHeartIcon.react",
    "WDSButtonGroup.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(26),
        n = e.onContinue,
        a = e.onDemote,
        i = e.ref,
        l;
      t[0] !== a
        ? ((l = function (t) {
            (t.stopPropagation(), t.preventDefault(), a());
          }),
          (t[0] = a),
          (t[1] = l))
        : (l = t[1]);
      var c = l,
        m;
      t[2] !== n
        ? ((m = function (t) {
            (t.stopPropagation(), t.preventDefault(), n());
          }),
          (t[2] = n),
          (t[3] = m))
        : (m = t[3]);
      var p = m,
        _;
      t[4] !== p
        ? ((_ = { enter: p, escape: p }), (t[4] = p), (t[5] = _))
        : (_ = t[5]);
      var f = _,
        g;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = s._(/*BTDS*/ "Continue")), (t[6] = g))
        : (g = t[6]);
      var h;
      t[7] !== p
        ? ((h = {
            variant: "filled",
            type: "default",
            onPress: p,
            testid: "popup-controls-continue",
            label: g,
          }),
          (t[7] = p),
          (t[8] = h))
        : (h = t[8]);
      var y;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = s._(/*BTDS*/ "Dismiss yourself as admin")), (t[9] = y))
        : (y = t[9]);
      var C;
      t[10] !== c
        ? ((C = {
            variant: "outline",
            type: "default",
            onPress: c,
            testid: "popup-controls-demote",
            label: y,
          }),
          (t[10] = c),
          (t[11] = C))
        : (C = t[11]);
      var b;
      t[12] !== h || t[13] !== C
        ? ((b = u.jsx(r("WDSButtonGroup.react"), {
            width: "hug",
            orientation: "horizontal",
            primaryButtonProps: h,
            secondaryButtonProps: C,
          })),
          (t[12] = h),
          (t[13] = C),
          (t[14] = b))
        : (b = t[14]);
      var v = b,
        S;
      if (t[15] === Symbol.for("react.memo_cache_sentinel")) {
        var R = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
          href: d(),
          children: s._(/*BTDS*/ "admin tools"),
        });
        ((S = s._(
          /*BTDS*/ "You can send announcements, manage the community and use {learn-more-link} to help keep it safe. Your profile is now visible to community members.",
          [s._param("learn-more-link", R)],
        )),
          (t[15] = S));
      } else S = t[15];
      var L = S,
        E,
        k,
        I;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = { className: "x78zum5 xdt5ytf x6s0dn4 x16w0wmm" }),
          (k = u.jsx("div", {
            className: "x1yztbdb",
            children: u.jsx(
              o("WAWebWdsPictoCommunitiesHeartIcon.react")
                .WdsPictoCommunitiesHeartIcon,
              { width: 130 },
            ),
          })),
          (I = { className: "x1yztbdb x2b8uid" }),
          (t[16] = E),
          (t[17] = k),
          (t[18] = I))
        : ((E = t[16]), (k = t[17]), (I = t[18]));
      var T;
      t[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = u.jsxs(
            "div",
            babelHelpers.extends({}, E, {
              children: [
                k,
                u.jsx(
                  "div",
                  babelHelpers.extends({}, I, {
                    children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
                      className: "x1603h9y x1u7k74 xk50ysn",
                      text: s._(/*BTDS*/ "You're now a community admin"),
                    }),
                  }),
                ),
                u.jsx("div", {
                  className: "xg0cujg",
                  children: u.jsx("div", {
                    className: "x1f6kntn",
                    children: L,
                  }),
                }),
              ],
            }),
          )),
          (t[19] = T))
        : (T = t[19]);
      var D;
      t[20] !== v
        ? ((D = u.jsx(o("WAWebModal.react").Modal, {
            type: o("WAWebModal.react").ModalTheme.Promote,
            actions: v,
            children: T,
          })),
          (t[20] = v),
          (t[21] = D))
        : (D = t[21]);
      var x;
      return (
        t[22] !== f || t[23] !== i || t[24] !== D
          ? ((x = u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              ref: i,
              handlers: f,
              children: D,
            })),
            (t[22] = f),
            (t[23] = i),
            (t[24] = D),
            (t[25] = x))
          : (x = t[25]),
        x
      );
    }
    function d() {
      return p("communities/learning");
    }
    var m = "https://www.whatsapp.com";
    function p(e) {
      return m + "/" + e + "?lang=" + r("WAWebL10N").getNormalizedLocale();
    }
    l.default = c;
  },
  226,
);
