__d(
  "WAWebMsgRcatUtils",
  [
    "Promise",
    "WABase64",
    "WACryptoHkdf",
    "WACryptoHmac",
    "WANullthrows",
    "WAWebABProps",
    "WAWebApiContact",
    "WAWebFrontendMsgGetters",
    "WAWebLid1X1MigrationGating",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebUserPrefsMeUser",
    "WAWebUtilsYoutubeUrlParser",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "Rcat",
      u = 32;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.nonce != null) return e.nonce;
          var t = o("WAWebMsgGetters").getSender(e),
            n = o(
              "WAWebLid1X1MigrationGating",
            ).Lid1X1MigrationUtils.isLidMigrated()
              ? o("WAWebUserPrefsMeUser").getMaybeMeLidUser()
              : o("WAWebUserPrefsMeUser").getMaybeMePnUser();
          if (t == null || n == null) return null;
          var r = e.messageSecret,
            a = e.rcat;
          if (a == null || r == null) return null;
          var i =
            o(
              "WAWebLid1X1MigrationGating",
            ).Lid1X1MigrationUtils.isLidMigrated() && !t.isLid()
              ? o("WAWebApiContact").getCurrentLid(
                  o("WAWebWidFactory").asUserWidOrThrow(t),
                )
              : t;
          if (i == null) return null;
          var l = yield _(
            e.id.id,
            r,
            o("WAWebWidToJid").widToUserJid(i),
            o("WAWebWidToJid").widToUserJid(n),
          );
          return ((e.nonce = l), l);
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t, n, r) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = new TextEncoder().encode([e, n, r, s].join("")),
              i = yield o("WACryptoHkdf").extractAndExpand(t, a, u);
            return new Uint8Array(i);
          },
        )),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n, r) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = yield m(e, t, n, r);
            return o("WABase64").encodeB64UrlSafe(a, !0);
          },
        )),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      var n = o("WAWebMsgGetters").getMatchedText(e);
      if (n == null || n === "") return null;
      var r = o("WAWebUtilsYoutubeUrlParser").parseYoutubeVideoId(n);
      return t || r != null ? r : n;
    }
    function h(e) {
      var t = g(e, !1);
      return t == null ? null : new TextEncoder().encode(t);
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WACryptoHmac").hmacSha256(t, e);
          return new Uint8Array(n).slice(0, 8);
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i = r("WANullthrows")(o("WAWebMsgGetters").getFrom(t)),
            l = h(t),
            s = o("WAWebMsgGetters").getMessageSecret(t);
          if (
            a.length === 0 ||
            t.type !== o("WAWebMsgType").MSG_TYPE.CHAT ||
            !o("WAWebFrontendMsgGetters").getIsUrlMessage(t) ||
            s == null ||
            l == null ||
            !o("WAWebMsgGetters").getIsSentByMe(t) ||
            a.length >
              o("WAWebABProps").getABPropConfigValue(
                "maximum_group_size_for_rcat",
              )
          )
            return null;
          var u = o("WAWebWidToJid").widToUserJid(i),
            c = new Map(),
            d = a.map(function (e) {
              var n = o("WAWebWidToJid").widToUserJid(e);
              return m(o("WAWebMsgGetters").getId(t).id, s, u, n)
                .then(function (e) {
                  return y(l, e);
                })
                .then(function (e) {
                  c.set(n, e);
                });
            });
          return (yield (e || (e = n("Promise"))).all(d), c);
        })),
        v.apply(this, arguments)
      );
    }
    ((l.genNonceForMsg = c),
      (l.deriveNonce = m),
      (l.deriveNonceString = _),
      (l.getContentIdString = g),
      (l.genContentBindingForMsg = b));
  },
  98,
);
