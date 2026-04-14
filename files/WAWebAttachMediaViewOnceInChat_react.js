__d(
  "WAWebAttachMediaViewOnceInChat.react",
  [
    "WAWebAttachMediaViewOnce.react",
    "WAWebBizCoexUtils",
    "WAWebChatGetters",
    "WAWebEphemeralityFrontendUtils",
    "WAWebFrontendChatGetters",
    "react",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.chat,
        n = e.containerXstyle,
        a = e.dataTab,
        i = e.disabled,
        l = e.isOn,
        u = e.mediaType,
        c = e.onChange,
        d = e.shouldShowNux,
        m = e.shouldSkipNuxAndToast,
        p = o("useWAWebModelValues").useOptionalModelValues(t.contact, [
          "isEphemeralityDisabled",
        ]);
      return o("WAWebChatGetters").getIsNewsletter(t) ||
        o("WAWebFrontendChatGetters").getIsCapiHostedGroup(t) ||
        o("WAWebBizCoexUtils").isMeOrCurrentContactHosted(t.contact) ||
        (p &&
          o(
            "WAWebEphemeralityFrontendUtils",
          ).isEphemeralityDisabledInUIForContact(p))
        ? null
        : s.jsx(r("WAWebAttachMediaViewOnce.react"), {
            containerXstyle: n,
            dataTab: a,
            disabled: i,
            isOn: l,
            mediaType: u,
            onChange: c,
            shouldShowNux: d,
            shouldSkipNuxAndToast: m,
          });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
