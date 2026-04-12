__d(
  "WAWebBizSmbTosModal.react",
  [
    "fbt",
    "WALogger",
    "WAWebConfirmPopup.react",
    "WAWebConnModel",
    "WAWebModalManager",
    "WAWebSmbLearnMore.react",
    "WAWebSocketModel",
    "react",
    "useWAWebListener",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d() {
      r("vulture")("xih5WpfVAJMeDiuzgf5dWD0of_I=");
      var t = s._(
          /*BTDS*/ "We are updating our WhatsApp Business Terms of Service. Agree to our new Terms on your phone to continue using WhatsApp Business.",
        ),
        n = function () {
          o("WAWebConnModel").Conn.smbTos ||
            o("WAWebModalManager").ModalManager.close();
        };
      o("useWAWebListener").useListener(
        o("WAWebConnModel").Conn,
        "change:smbTos",
        n,
      );
      var a = function () {
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "SMB: terms of service modal, user clicked logout",
              ])),
          ),
            o("WAWebModalManager").ModalManager.close(),
            o("WAWebSocketModel").Socket.logout());
        },
        i = s._(/*BTDS*/ "Log out"),
        l = a;
      return c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: { surface: "unknown", viewName: "biz-smb-tos" },
        onOK: l,
        okText: i,
        children: [t, "\xA0", c.jsx(r("WAWebSmbLearnMore.react"), {})],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
