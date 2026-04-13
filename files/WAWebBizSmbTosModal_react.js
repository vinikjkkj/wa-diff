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
    "react-compiler-runtime",
    "useWAWebListener",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d() {
      var e = o("react-compiler-runtime").c(4);
      r("vulture")("xih5WpfVAJMeDiuzgf5dWD0of_I=");
      var t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = s._(
            /*BTDS*/ "We are updating our WhatsApp Business Terms of Service. Agree to our new Terms on your phone to continue using WhatsApp Business.",
          )),
          (e[0] = t))
        : (t = e[0]);
      var n = t,
        a = p;
      o("useWAWebListener").useListener(
        o("WAWebConnModel").Conn,
        "change:smbTos",
        a,
      );
      var i = m,
        l;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s._(/*BTDS*/ "Log out")), (e[1] = l))
        : (l = e[1]);
      var u = l,
        d = i,
        _;
      e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = { surface: "unknown", viewName: "biz-smb-tos" }), (e[2] = _))
        : (_ = e[2]);
      var f;
      return (
        e[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: _,
              onOK: d,
              okText: u,
              children: [n, "\xA0", c.jsx(r("WAWebSmbLearnMore.react"), {})],
            })),
            (e[3] = f))
          : (f = e[3]),
        f
      );
    }
    function m() {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "SMB: terms of service modal, user clicked logout",
          ])),
      ),
        o("WAWebModalManager").ModalManager.close(),
        o("WAWebSocketModel").Socket.logout());
    }
    function p() {
      o("WAWebConnModel").Conn.smbTos ||
        o("WAWebModalManager").ModalManager.close();
    }
    l.default = d;
  },
  226,
);
