__d(
  "WAWebWidValidator",
  ["$InternalEnum", "WALogger"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = n("$InternalEnum")({
        BROADCAST: "broadcast",
        CALL: "call",
        C_US: "c.us",
        G_US: "g.us",
        LID: "lid",
        MSGR: "msgr",
        S_WHATSAPP_NET: "s.whatsapp.net",
        NEWSLETTER: "newsletter",
        BOT: "bot",
      }),
      u = ["status", "location", "chat"],
      c = /[1-9][0-9]{9}/,
      d = /[0-9]{1,2}/,
      m = /[1-9][0-9]{0,2}/,
      p = /[1-9][0-9]{0,14}/,
      _ = /0/,
      f = /[1-9][0-9]{0,19}/,
      g = /(?!10)[1-9][0-9]{4,19}/,
      h = /^([0-9a-f]{18,32})$/i,
      y = new RegExp(
        "^(" + g.source + "[-]" + c.source + "$|^" + f.source + ")$",
      ),
      C = new RegExp(
        "^(" +
          f.source +
          "$|" +
          u
            .map(function (e) {
              return "^" + e + "$";
            })
            .join("|") +
          ")",
        "i",
      ),
      b = new RegExp(
        "^(0$|^" +
          g.source +
          ")([.]" +
          _.source +
          ")?(?:[:](" +
          d.source +
          "))?$",
      ),
      v = new RegExp(
        "^(" + p.source + ")([.]" + _.source + ")?(?:[:](" + d.source + "))?$",
      ),
      S = new RegExp("^(" + f.source + ")(?:[:](" + m.source + "))?$"),
      R = new RegExp("^(" + g.source + ")(?=:99$)"),
      L = new RegExp("^(" + p.source + ")(?=:99$)"),
      E = new RegExp("^(" + f.source + ")$"),
      k = new RegExp("^(" + f.source + ")(?::(0))?$");
    function I(e) {
      switch (e) {
        case s.BROADCAST:
          return C;
        case s.CALL:
          return h;
        case s.C_US:
          return b;
        case s.G_US:
          return y;
        case s.LID:
          return v;
        case s.MSGR:
          return S;
        case s.S_WHATSAPP_NET:
          return b;
        case s.NEWSLETTER:
          return E;
        case s.BOT:
          return k;
      }
    }
    function T(e) {
      if (e == null) return !1;
      var t = e.match(/(.*)@(.*)/);
      if (t == null) return e === "call" || e === "s.whatsapp.net";
      var n = t[1],
        r = t[2];
      if (r === "hosted") return R.test(n);
      if (r === "hosted.lid") return L.test(n);
      var o = s.cast(r);
      if (o == null) return !1;
      var a = I(o);
      return a.test(n);
    }
    function D(t) {
      if (t == null) return null;
      var n = t.match(/(.*)@(.*)/);
      if (n && n[2] === "hosted") {
        var r = n[1],
          a = r.match(R);
        return a
          ? { serverPart: "hosted", userPart: a[1], devicePart: "99" }
          : null;
      }
      if (n && n[2] === "hosted.lid") {
        var i = n[1],
          l = i.match(L);
        return l
          ? { serverPart: "hosted.lid", userPart: l[1], devicePart: "99" }
          : null;
      }
      if (n == null)
        return t === "call" || t === "s.whatsapp.net"
          ? { serverPart: t }
          : null;
      var u = n[1],
        c = s.cast(n[2]);
      if (c == null)
        return (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "validateAndGetParts: Domain not supported",
              ])),
          ),
          null
        );
      var d = I(c),
        m = u.match(d);
      if (!m) return null;
      switch (c) {
        case s.BROADCAST:
          return { serverPart: s.BROADCAST, userPart: m[1] };
        case s.CALL:
          return { serverPart: s.CALL, userPart: m[1] };
        case s.G_US:
          return { serverPart: s.G_US, userPart: m[1] };
        case s.NEWSLETTER:
          return { serverPart: s.NEWSLETTER, userPart: m[1] };
        case s.C_US:
          return { serverPart: s.C_US, userPart: m[1], devicePart: m[3] };
        case s.S_WHATSAPP_NET:
          return {
            serverPart: s.S_WHATSAPP_NET,
            userPart: m[1],
            devicePart: m[3],
          };
        case s.LID:
          return { serverPart: s.LID, userPart: m[1], devicePart: m[3] };
        case s.MSGR:
          return { serverPart: s.LID, userPart: m[1], devicePart: m[2] };
        case s.BOT:
          return { serverPart: s.BOT, userPart: m[1], devicePart: m[2] };
      }
      return null;
    }
    ((l.Domains = s), (l.validateWid = T), (l.validateAndGetParts = D));
  },
  98,
);
