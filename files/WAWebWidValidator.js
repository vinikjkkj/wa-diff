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
    function T(e, t) {
      if ((t === void 0 && (t = !1), e == null)) return !1;
      var n = e.match(/(.*)@(.*)/);
      if (n == null) return e === "call" || e === "s.whatsapp.net";
      var r = n[1],
        o = n[2];
      if (t) {
        if (o === "hosted") return R.test(r);
        if (o === "hosted.lid") return L.test(r);
      }
      var a = s.cast(o);
      if (a == null) return !1;
      var i = I(a);
      return i.test(r);
    }
    function D(t, n) {
      if ((n === void 0 && (n = !1), t == null)) return null;
      var r = t.match(/(.*)@(.*)/);
      if (n) {
        if (r && r[2] === "hosted") {
          var a = r[1],
            i = a.match(R);
          return i
            ? { serverPart: "hosted", userPart: i[1], devicePart: "99" }
            : null;
        }
        if (r && r[2] === "hosted.lid") {
          var l = r[1],
            u = l.match(L);
          return u
            ? { serverPart: "hosted.lid", userPart: u[1], devicePart: "99" }
            : null;
        }
      }
      if (r == null)
        return t === "call" || t === "s.whatsapp.net"
          ? { serverPart: t }
          : null;
      var c = r[1],
        d = s.cast(r[2]);
      if (d == null)
        return (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "validateAndGetParts: Domain not supported",
              ])),
          ),
          null
        );
      var m = I(d),
        p = c.match(m);
      if (!p) return null;
      switch (d) {
        case s.BROADCAST:
          return { serverPart: s.BROADCAST, userPart: p[1] };
        case s.CALL:
          return { serverPart: s.CALL, userPart: p[1] };
        case s.G_US:
          return { serverPart: s.G_US, userPart: p[1] };
        case s.NEWSLETTER:
          return { serverPart: s.NEWSLETTER, userPart: p[1] };
        case s.C_US:
          return { serverPart: s.C_US, userPart: p[1], devicePart: p[3] };
        case s.S_WHATSAPP_NET:
          return {
            serverPart: s.S_WHATSAPP_NET,
            userPart: p[1],
            devicePart: p[3],
          };
        case s.LID:
          return { serverPart: s.LID, userPart: p[1], devicePart: p[3] };
        case s.MSGR:
          return { serverPart: s.LID, userPart: p[1], devicePart: p[2] };
        case s.BOT:
          return { serverPart: s.BOT, userPart: p[1], devicePart: p[2] };
      }
      return null;
    }
    ((l.Domains = s), (l.validateWid = T), (l.validateAndGetParts = D));
  },
  98,
);
