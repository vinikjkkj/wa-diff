__d(
  "WAWebProxied.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "react",
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
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        cover: !0,
        title: s._(/*BTDS*/ "Can't load WhatsApp"),
        okText: s._(/*BTDS*/ "Learn more"),
        onOK: c,
        children: s._(
          /*BTDS*/ "Your computer is connected to a network that prevents WhatsApp from working correctly",
        ),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
