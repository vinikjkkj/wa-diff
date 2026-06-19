__d(
  "WAWebWidFactory",
  [
    "WALogger",
    "WATypeUtils",
    "WAWebWid",
    "WAWebWidError",
    "WAWebWidStore",
    "err",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 99,
      m = "lid",
      p = "hosted",
      _ = "hosted.lid";
    function f(t) {
      if (typeof t != "string")
        if (t instanceof r("WAWebWid"))
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "createWid: ",
                  " is not a string: Wid",
                ])),
              t.toLogString(),
            )
            .sendLogs("createWid-not-a-string-wid");
        else
          throw (
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "createWid: ",
                    " is not a string: ",
                    "",
                  ])),
                t,
                typeof t,
              )
              .sendLogs("createWid-not-a-string"),
            new (o("WAWebWidError").InvalidWidError)(
              "createWid: expected string, got " + typeof t,
            )
          );
      if (r("WAWebWid").isHosted(t)) return r("nullthrows")(g(t));
      var n = r("WAWebWidStore").cache[t];
      if (n) return n;
      var a = t;
      return (
        (a = t.replace("@s.whatsapp.net", "@c.us")),
        (n = r("WAWebWidStore").cache[a]),
        n ||
          ((n = new (r("WAWebWid"))(a, {
            intentionallyUsePrivateConstructor: !0,
          })),
          (r("WAWebWidStore").cache[a] = n)),
        n
      );
    }
    function g(e) {
      if (r("WAWebWidStore").cache[e]) {
        var t = r("WAWebWidStore").cache[e];
        return t;
      }
      if (
        !(
          o("WATypeUtils").isString(e) &&
          (e.endsWith("@hosted") || e.endsWith("@hosted.lid"))
        )
      )
        throw r("err")("Hosted jid create called with wrong domain type");
      var n = new (r("WAWebWid"))(e, {
        intentionallyUsePrivateConstructor: !0,
      });
      if (!n.isHosted())
        throw r("err")(
          "createHostedDeviceWidOrThrow is called with invalid input",
        );
      var a = n;
      return ((r("WAWebWidStore").cache[e] = a), a);
    }
    function h(e) {
      return e instanceof r("WAWebWid")
        ? e
        : f(typeof e == "string" ? e : e._serialized);
    }
    function y(e) {
      return e
        ? !!(
            r("WAWebWid").isWid(e) ||
            (e && typeof e == "object" && r("WAWebWid").isWid(e._serialized))
          )
        : !1;
    }
    function C(e, t, n) {
      n === void 0 && (n = !1);
      var r = e.split("@"),
        o = r[0],
        a = r[1],
        i = a === void 0 ? "c.us" : a;
      return n === !0 ? S(o, i, t) : v(o, i, t);
    }
    function b(e) {
      var t = e.split("@"),
        n = t[0],
        r = t[1],
        o = r === void 0 ? "c.us" : r;
      return E(n, o);
    }
    function v(e, t, n) {
      return n === d ? S(e, t, n) : L(e + ":" + n + "@" + t);
    }
    function S(e, t, n) {
      return g(e + ":" + n + "@" + (t.includes(m) ? _ : p));
    }
    function R(e) {
      if (!e.isUser())
        throw (
          o("WALogger").ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "createDeviceWidFromWidOrThrow: invalid device jid ",
                "",
              ])),
            e,
          ),
          r("err")(
            "createDeviceWidFromWidOrThrow is called with invalid user string",
          )
        );
      return e;
    }
    function L(e) {
      var t = f(e);
      return R(t);
    }
    function E(e, t) {
      var n;
      if (
        o("WATypeUtils").isString(e) &&
        (e.endsWith("@c.us") ||
          e.endsWith("@s.whatsapp.net") ||
          e.endsWith("@lid") ||
          e.endsWith("@bot"))
      )
        n = e;
      else {
        var a;
        (t == null || t === "hosted"
          ? (a = "c.us")
          : t === "hosted.lid"
            ? (a = "lid")
            : (a = t),
          (n = e + "@" + a));
      }
      if (((n = f(n)), n.device == null || n.device === 0)) return n;
      throw (
        o("WALogger").ERROR(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "createUserWidOrThrow: ",
              " is not a valid user jid",
            ])),
          e,
        ),
        r("err")("createUserWidOrThrow is called with invalid user string")
      );
    }
    function k(e, t) {
      return T(E(e, t));
    }
    function I(e) {
      if (!e.isUser())
        throw r("err")("asUserWidOrThrow: wid is not a user wid");
      return e.device == null || e.device === 0 ? e : E(e.user, e.server);
    }
    function T(e) {
      var t = I(e);
      if (!t.isLid()) throw r("err")("asUserLidOrThrow: userWid is not a lid");
      return t;
    }
    function D(e) {
      return e.isUser() ? I(e) : e;
    }
    function x(e) {
      if (e.isUser()) throw r("err")("asGroupWidOrThrow: wid is a user wid");
      return e;
    }
    function $(e) {
      if (e.isNewsletter()) return e;
      throw r("err")("asNewsletterWidOrThrow: wid is not a newsletter wid");
    }
    function P(e) {
      if (e.isBot()) return e;
      throw r("err")("asBotWidOrThrow: wid is not a bot wid");
    }
    ((l.createWid = f),
      (l.createHostedDeviceWidOrThrow = g),
      (l.createWidFromWidLike = h),
      (l.isWidlike = y),
      (l.createDeviceWidFromDeviceListPk = C),
      (l.createUserWidFromDeviceListPk = b),
      (l.createDeviceWidFromUserAndDevice = v),
      (l.createDeviceWidFromWidOrThrow = R),
      (l.createDeviceWidOrThrow = L),
      (l.createUserWidOrThrow = E),
      (l.createUserLidOrThrow = k),
      (l.asUserWidOrThrow = I),
      (l.asUserLidOrThrow = T),
      (l.asChatWid = D),
      (l.asGroupWidOrThrow = x),
      (l.asNewsletterWidOrThrow = $),
      (l.asBotWidOrThrow = P));
  },
  98,
);
