__d(
  "WAWebTosGatedModal.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "WAWebTos",
    "WAWebTosGating",
    "react",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.contact,
        n = function () {
          o("WAWebTosGating").shouldBlockByTos(t) ||
            o("WAWebModalManager").ModalManager.close();
        };
      (o("useWAWebListener").useListener(t, "change:privacyMode", n),
        o("useWAWebListener").useListener(
          o("WAWebTos").TosManager,
          "change",
          n,
        ));
      var r = s._(
        /*BTDS*/ "WhatsApp recently updated its terms and privacy policy. This business uses a secure service from Meta to manage chats. Open WhatsApp on your phone to read our Terms and Privacy Policy and learn more about the choices you have.",
      );
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: { surface: "unknown", viewName: "tos-gated" },
        onOK: d,
        okText: s._(/*BTDS*/ "OK, got it"),
        title: s._(/*BTDS*/ "WhatsApp's terms and privacy policy update"),
        children: r,
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d() {
      o("WAWebModalManager").ModalManager.close();
    }
    l.default = c;
  },
  226,
);
