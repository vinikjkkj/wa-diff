__d(
  "WAWebTosModal.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebConnModel",
    "WAWebModalManager",
    "WAWebSocketModel",
    "react",
    "react-compiler-runtime",
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
      var e = o("react-compiler-runtime").c(5),
        t,
        n,
        r;
      o("useWAWebListener").useListener(
        o("WAWebConnModel").Conn,
        "change:tos",
        c,
      );
      e: switch (o("WAWebConnModel").Conn.tos) {
        default:
        case 1: {
          var a;
          (e[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = s._(
                /*BTDS*/ "WhatsApp is updating our Terms and Privacy Policy to reflect new features and comply with the new European Union data protection laws. Open WhatsApp on your phone to read our Terms and Privacy Policy and learn more about the choices you have.",
              )),
              (e[0] = a))
            : (a = e[0]),
            (t = a));
          var i;
          (e[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = s._(/*BTDS*/ "OK, got it")), (e[1] = i))
            : (i = e[1]),
            (n = i),
            (r = p));
          break e;
        }
        case 2: {
          var l;
          (e[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = s._(
                /*BTDS*/ "WhatsApp is updating our Terms and Privacy Policy to reflect new features and comply with the new European Union data protection laws. Open WhatsApp on your phone to read our Terms and Privacy Policy and learn more about the choices you have.",
              )),
              (e[2] = l))
            : (l = e[2]),
            (t = l));
          var m;
          (e[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((m = s._(/*BTDS*/ "Log out")), (e[3] = m))
            : (m = e[3]),
            (n = m),
            (r = d));
        }
      }
      var _;
      return (
        e[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: { surface: "unknown", viewName: "tos-accept" },
              onOK: r,
              okText: n,
              children: t,
            })),
            (e[4] = _))
          : (_ = e[4]),
        _
      );
    }
    function p() {
      return o("WAWebModalManager").ModalManager.close();
    }
    l.default = m;
  },
  226,
);
