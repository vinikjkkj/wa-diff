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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(16),
        n = e.merchantUrl,
        r = e.onOkClick,
        a = e.url,
        i = e.verifyTrackableLink,
        l = n != null ? n : a;
      if (i === !0 && !h(l, a))
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
      var c;
      t[0] !== r || t[1] !== a
        ? ((c = function () {
            (o("WAWebExternalLink.react").openExternalLink(a),
              r == null || r(),
              o("WAWebModalManager").ModalManager.close());
          }),
          (t[0] = r),
          (t[1] = a),
          (t[2] = c))
        : (c = t[2]);
      var m = c,
        p = C,
        _ = n != null ? n : a,
        g;
      t[3] !== _ ? ((g = f(_)), (t[3] = _), (t[4] = g)) : (g = t[4]);
      var y = g,
        b;
      t[5] !== y
        ? ((b = o(
            "WAWebBizGatingUtils",
          ).isPremiumMessagesNewLeavingWAContentEnabled()
            ? s._(/*BTDS*/ "You will leave WhatsApp and go to {url}.", [
                s._param("url", y),
              ])
            : y),
          (t[5] = y),
          (t[6] = b))
        : (b = t[6]);
      var v = b,
        S;
      t[7] !== v
        ? ((S = d.jsx(o("WAWebText.react").WAWebTextSmall, {
            testid: void 0,
            children: v,
          })),
          (t[7] = v),
          (t[8] = S))
        : (S = t[8]);
      var R = S,
        L;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = { surface: "unknown", viewName: "external-link" }), (t[9] = L))
        : (L = t[9]);
      var E, k, I;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = s._(/*BTDS*/ "Open this link?")),
          (k = s._(/*BTDS*/ "Yes, open")),
          (I = s._(/*BTDS*/ "No, cancel")),
          (t[10] = E),
          (t[11] = k),
          (t[12] = I))
        : ((E = t[10]), (k = t[11]), (I = t[12]));
      var T;
      return (
        t[13] !== R || t[14] !== m
          ? ((T = d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: L,
              testid: void 0,
              title: E,
              okText: k,
              cancelText: I,
              onOK: m,
              onCancel: p,
              children: R,
            })),
            (t[13] = R),
            (t[14] = m),
            (t[15] = T))
          : (T = t[15]),
        T
      );
    }
    function C() {
      o("WAWebModalManager").ModalManager.close();
    }
    l.default = y;
  },
  226,
);
