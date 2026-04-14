__d(
  "WAWebTempBanScreen.react",
  [
    "fbt",
    "WALogger",
    "WAWeb-moment",
    "WAWebConflict.react",
    "WAWebFaqUrl",
    "WAWebFavicon.react",
    "WAWebSocketModel",
    "WAWebUserPrefsMeUser",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(e) {
      var t = e.banData,
        n = t || {},
        a = n.code,
        i = n.expire,
        l = n.message,
        u = n.url,
        d = l != null ? l : p(a),
        m = r("WAWeb-moment").duration(i, "seconds").humanize();
      return c.jsx(o("WAWebFavicon.react").ErrorFavicon, {
        children: c.jsxs(r("WAWebConflict.react"), {
          cancelText: s._(/*BTDS*/ "Log out"),
          onCancel: _,
          okText: s._(/*BTDS*/ "Learn more"),
          onOK: window.open.bind(
            window,
            u != null ? u : o("WAWebFaqUrl").getFaqUrl(),
          ),
          children: [
            c.jsx("div", { children: d }),
            c.jsx("div", {
              children: s._(
                /*BTDS*/ "You'll be able to use WhatsApp again in {duration}",
                [s._param("duration", m)],
              ),
            }),
          ],
        }),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    var m = function () {
      return s._(
        /*BTDS*/ "You're temporarily banned from WhatsApp because you may have violated our terms of service.",
      );
    };
    function p(e) {
      var t,
        n =
          (t = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) == null
            ? void 0
            : t.user;
      switch (e) {
        case 101:
          return n == null
            ? m()
            : s._(
                /*BTDS*/ "You're temporarily banned from WhatsApp because you sent too many messages to people who don't have {phone} in their address books.",
                [s._param("phone", n)],
              );
        case 102:
          return s._(
            /*BTDS*/ "You're temporarily banned from WhatsApp because too many people blocked you.",
          );
        case 103:
          return n == null
            ? m()
            : s._(
                /*BTDS*/ "You're temporarily banned from WhatsApp because you created too many groups with people who don't have {phone} in their address books.",
                [s._param("phone", n)],
              );
        case 104:
          return s._(
            /*BTDS*/ "You're temporarily banned from WhatsApp because you sent the same message to too many people.",
          );
        case 106:
          return s._(
            /*BTDS*/ "You're temporarily banned from WhatsApp because you sent too many messages to a broadcast list.",
          );
        default:
          return m();
      }
    }
    function _() {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "Banned accounts: user selected logout",
          ])),
      ),
        o("WAWebSocketModel").Socket.logout());
    }
    l.default = d;
  },
  226,
);
