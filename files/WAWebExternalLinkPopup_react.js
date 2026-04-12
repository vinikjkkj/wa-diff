__d(
  "WAWebExternalLinkPopup.react",
  [
    "fbt",
    "WALogger",
    "WAWebBizGatingUtils",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebModalManager",
    "WAWebText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = 200,
      p = 140,
      _ = 60;
    function f(e) {
      return e.length > m ? e.substr(0, p) + "..." + e.substr(e.length - _) : e;
    }
    var g = "https:";
    function h(t, n) {
      var r = "w.meta.me";
      if (n === t) return !0;
      var a;
      try {
        a = new URL(n);
      } catch (t) {
        if (!(t instanceof TypeError)) throw t;
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Trackable link verification failed - invalid url format",
                ])),
            )
            .sendLogs("trackable-link-verification-failed"),
          !1
        );
      }
      return !(a.protocol !== g || a.hostname !== r);
    }
    function y(e) {
      var t = e.merchantUrl,
        n = e.onOkClick,
        r = e.url,
        a = e.verifyTrackableLink,
        i = t != null ? t : r;
      if (a === !0 && !h(i, r))
        return (
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "Trackable link verification failed",
                ])),
            )
            .sendLogs("trackable-link-verification-failed"),
          null
        );
      var l = function () {
          (o("WAWebExternalLink.react").openExternalLink(r),
            n == null || n(),
            o("WAWebModalManager").ModalManager.close());
        },
        c = function () {
          o("WAWebModalManager").ModalManager.close();
        },
        m = f(t != null ? t : r),
        p = o(
          "WAWebBizGatingUtils",
        ).isPremiumMessagesNewLeavingWAContentEnabled()
          ? s._(/*BTDS*/ "You will leave WhatsApp and go to {url}.", [
              s._param("url", m),
            ])
          : m,
        _ = d.jsx(o("WAWebText.react").WAWebTextSmall, {
          testid: void 0,
          children: p,
        });
      return d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: { surface: "unknown", viewName: "external-link" },
        testid: void 0,
        title: s._(/*BTDS*/ "Open this link?"),
        okText: s._(/*BTDS*/ "Yes, open"),
        cancelText: s._(/*BTDS*/ "No, cancel"),
        onOK: l,
        onCancel: c,
        children: _,
      });
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  226,
);
