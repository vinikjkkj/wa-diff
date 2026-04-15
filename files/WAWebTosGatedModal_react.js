__d(
  "WAWebTosGatedModal.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "WAWebTos",
    "WAWebTosGating",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.contact,
        r;
      t[0] !== n
        ? ((r = function () {
            o("WAWebTosGating").shouldBlockByTos(n) ||
              o("WAWebModalManager").ModalManager.close();
          }),
          (t[0] = n),
          (t[1] = r))
        : (r = t[1]);
      var a = r;
      (o("useWAWebListener").useListener(n, "change:privacyMode", a),
        o("useWAWebListener").useListener(
          o("WAWebTos").TosManager,
          "change",
          a,
        ));
      var i;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s._(
            /*BTDS*/ "WhatsApp recently updated its terms and privacy policy. This business uses a secure service from Meta to manage chats. Open WhatsApp on your phone to read our Terms and Privacy Policy and learn more about the choices you have.",
          )),
          (t[2] = i))
        : (i = t[2]);
      var l = i,
        c;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = { surface: "unknown", viewName: "tos-gated" }), (t[3] = c))
        : (c = t[3]);
      var m;
      return (
        t[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: c,
              onOK: d,
              okText: s._(/*BTDS*/ "OK, got it"),
              title: s._(/*BTDS*/ "WhatsApp's terms and privacy policy update"),
              children: l,
            })),
            (t[4] = m))
          : (m = t[4]),
        m
      );
    }
    function d() {
      o("WAWebModalManager").ModalManager.close();
    }
    l.default = c;
  },
  226,
);
