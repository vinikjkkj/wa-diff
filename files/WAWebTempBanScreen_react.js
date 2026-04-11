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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(e) {
      var t = o("react-compiler-runtime").c(35),
        n = e.banData,
        a;
      t[0] !== n ? ((a = n || {}), (t[0] = n), (t[1] = a)) : (a = t[1]);
      var i = a,
        l = i.code,
        u = i.expire,
        d = i.message,
        m = i.url,
        f;
      t[2] !== l || t[3] !== d
        ? ((f = d != null ? d : p(l)), (t[2] = l), (t[3] = d), (t[4] = f))
        : (f = t[4]);
      var g = f,
        h,
        y,
        C,
        b,
        v,
        S,
        R,
        L;
      if (t[5] !== u || t[6] !== g || t[7] !== m) {
        var E = r("WAWeb-moment").duration(u, "seconds").humanize();
        ((y = o("WAWebFavicon.react").ErrorFavicon),
          (h = r("WAWebConflict.react")),
          t[16] === Symbol.for("react.memo_cache_sentinel")
            ? ((b = s._(/*BTDS*/ "Log out")), (t[16] = b))
            : (b = t[16]),
          (v = _),
          t[17] === Symbol.for("react.memo_cache_sentinel")
            ? ((S = s._(/*BTDS*/ "Learn more")), (t[17] = S))
            : (S = t[17]),
          t[18] !== m
            ? ((R = window.open.bind(
                window,
                m != null ? m : o("WAWebFaqUrl").getFaqUrl(),
              )),
              (t[18] = m),
              (t[19] = R))
            : (R = t[19]),
          t[20] !== g
            ? ((L = c.jsx("div", { children: g })), (t[20] = g), (t[21] = L))
            : (L = t[21]),
          (C = s._(
            /*BTDS*/ "You'll be able to use WhatsApp again in {duration}",
            [s._param("duration", E)],
          )),
          (t[5] = u),
          (t[6] = g),
          (t[7] = m),
          (t[8] = h),
          (t[9] = y),
          (t[10] = C),
          (t[11] = b),
          (t[12] = v),
          (t[13] = S),
          (t[14] = R),
          (t[15] = L));
      } else
        ((h = t[8]),
          (y = t[9]),
          (C = t[10]),
          (b = t[11]),
          (v = t[12]),
          (S = t[13]),
          (R = t[14]),
          (L = t[15]));
      var k;
      t[22] !== C
        ? ((k = c.jsx("div", { children: C })), (t[22] = C), (t[23] = k))
        : (k = t[23]);
      var I;
      t[24] !== h ||
      t[25] !== b ||
      t[26] !== v ||
      t[27] !== S ||
      t[28] !== R ||
      t[29] !== L ||
      t[30] !== k
        ? ((I = c.jsxs(h, {
            cancelText: b,
            onCancel: v,
            okText: S,
            onOK: R,
            children: [L, k],
          })),
          (t[24] = h),
          (t[25] = b),
          (t[26] = v),
          (t[27] = S),
          (t[28] = R),
          (t[29] = L),
          (t[30] = k),
          (t[31] = I))
        : (I = t[31]);
      var T;
      return (
        t[32] !== y || t[33] !== I
          ? ((T = c.jsx(y, { children: I })),
            (t[32] = y),
            (t[33] = I),
            (t[34] = T))
          : (T = t[34]),
        T
      );
    }
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
