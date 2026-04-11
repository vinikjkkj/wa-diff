__d(
  "WAWebProxied.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      o("WAWebExternalLink.react").openExternalLink(
        o("WAWebFaqUrl").getCannotConnectFaqUrl(),
      );
    }
    function d() {
      var e = o("react-compiler-runtime").c(3),
        t,
        n;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = s._(/*BTDS*/ "Can't load WhatsApp")),
          (n = s._(/*BTDS*/ "Learn more")),
          (e[0] = t),
          (e[1] = n))
        : ((t = e[0]), (n = e[1]));
      var r;
      return (
        e[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              cover: !0,
              title: t,
              okText: n,
              onOK: c,
              children: s._(
                /*BTDS*/ "Your computer is connected to a network that prevents WhatsApp from working correctly",
              ),
            })),
            (e[2] = r))
          : (r = e[2]),
        r
      );
    }
    l.default = d;
  },
  226,
);
