__d(
  "WAWebTosModal.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebConnModel",
    "WAWebModalManager",
    "WAWebSocketModel",
    "react",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      o("WAWebConnModel").Conn.tos === 0 &&
        o("WAWebModalManager").ModalManager.close();
    }
    function d() {
      (o("WAWebModalManager").ModalManager.close(),
        o("WAWebSocketModel").Socket.logout());
    }
    function m() {
      var e, t, n;
      switch (
        (o("useWAWebListener").useListener(
          o("WAWebConnModel").Conn,
          "change:tos",
          c,
        ),
        o("WAWebConnModel").Conn.tos)
      ) {
        default:
        case 1:
          ((e = s._(
            /*BTDS*/ "WhatsApp is updating our Terms and Privacy Policy to reflect new features and comply with the new European Union data protection laws. Open WhatsApp on your phone to read our Terms and Privacy Policy and learn more about the choices you have.",
          )),
            (t = s._(/*BTDS*/ "OK, got it")),
            (n = function () {
              return o("WAWebModalManager").ModalManager.close();
            }));
          break;
        case 2:
          ((e = s._(
            /*BTDS*/ "WhatsApp is updating our Terms and Privacy Policy to reflect new features and comply with the new European Union data protection laws. Open WhatsApp on your phone to read our Terms and Privacy Policy and learn more about the choices you have.",
          )),
            (t = s._(/*BTDS*/ "Log out")),
            (n = d));
          break;
      }
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: { surface: "unknown", viewName: "tos-accept" },
        onOK: n,
        okText: t,
        children: e,
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
