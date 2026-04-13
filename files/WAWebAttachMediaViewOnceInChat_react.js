__d(
  "WAWebAttachMediaViewOnceInChat.react",
  [
    "WAWebAttachMediaViewOnce.react",
    "WAWebBizCoexUtils",
    "WAWebChatGetters",
    "WAWebEphemeralityFrontendUtils",
    "WAWebFrontendChatGetters",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.chat,
        a = e.containerXstyle,
        i = e.dataTab,
        l = e.disabled,
        u = e.isOn,
        c = e.mediaType,
        d = e.onChange,
        m = e.shouldShowNux,
        p = e.shouldSkipNuxAndToast,
        _;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = ["isEphemeralityDisabled"]), (t[0] = _))
        : (_ = t[0]);
      var f = o("useWAWebModelValues").useOptionalModelValues(n.contact, _);
      if (
        o("WAWebChatGetters").getIsNewsletter(n) ||
        o("WAWebFrontendChatGetters").getIsCapiHostedGroup(n) ||
        o("WAWebBizCoexUtils").isMeOrCurrentContactHosted(n.contact) ||
        (f &&
          o(
            "WAWebEphemeralityFrontendUtils",
          ).isEphemeralityDisabledInUIForContact(f))
      )
        return null;
      var g;
      return (
        t[1] !== a ||
        t[2] !== i ||
        t[3] !== l ||
        t[4] !== u ||
        t[5] !== c ||
        t[6] !== d ||
        t[7] !== m ||
        t[8] !== p
          ? ((g = s.jsx(r("WAWebAttachMediaViewOnce.react"), {
              containerXstyle: a,
              dataTab: i,
              disabled: l,
              isOn: u,
              mediaType: c,
              onChange: d,
              shouldShowNux: m,
              shouldSkipNuxAndToast: p,
            })),
            (t[1] = a),
            (t[2] = i),
            (t[3] = l),
            (t[4] = u),
            (t[5] = c),
            (t[6] = d),
            (t[7] = m),
            (t[8] = p),
            (t[9] = g))
          : (g = t[9]),
        g
      );
    }
    l.default = u;
  },
  98,
);
