__d(
  "WAWebMsgRcatUtils",
  [
    "WABase64",
    "WACryptoHkdf",
    "WACryptoHmac",
    "WAWebABProps",
    "WAWebApiContact",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebUserUtils",
    "WAWebUtilsYoutubeUrlParser",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "Rcat",
      s = 32;
    async function u(e) {
      if (e.nonce != null) return e.nonce;
      var t = o("WAWebMsgGetters").getSender(e),
        n = o("WAWebUserUtils").getMeLidUserOrThrow();
      if (t == null) return null;
      var r = e.messageSecret,
        a = e.rcat;
      if (a == null || r == null) return null;
      var i = t.isLid()
        ? t
        : o("WAWebApiContact").getCurrentLid(
            o("WAWebWidFactory").asUserWidOrThrow(t),
          );
      if (i == null) return null;
      var l = await d({
        fromJid: o("WAWebWidToJid").widToUserJid(i),
        messageSecret: r,
        stanzaId: e.id.id,
        toJid: o("WAWebWidToJid").widToUserJid(n),
      });
      return ((e.nonce = l), l);
    }
    async function c(t) {
      var n = t.fromJid,
        r = t.messageSecret,
        a = t.stanzaId,
        i = t.toJid,
        l = new TextEncoder().encode([a, n, i, e].join("")),
        u = await o("WACryptoHkdf").extractAndExpand(r, l, s);
      return new Uint8Array(u);
    }
    async function d(e) {
      var t = e.fromJid,
        n = e.messageSecret,
        r = e.stanzaId,
        a = e.toJid,
        i = await c({ fromJid: t, messageSecret: n, stanzaId: r, toJid: a });
      return o("WABase64").encodeB64UrlSafe(i, !0);
    }
    function m(e, t) {
      var n = o("WAWebMsgGetters").getMatchedText(e);
      if (n == null || n === "") return null;
      var r = o("WAWebUtilsYoutubeUrlParser").parseYoutubeVideoId(n);
      return t || r != null ? r : n;
    }
    function p(e) {
      var t = m(e, !1);
      return t == null ? null : new TextEncoder().encode(t);
    }
    async function _(e, t) {
      var n = await o("WACryptoHmac").hmacSha256(t, e);
      return new Uint8Array(n).slice(0, 8);
    }
    async function f(e, t) {
      var n = r("nullthrows")(o("WAWebMsgGetters").getFrom(e)),
        a = p(e),
        i = o("WAWebMsgGetters").getMessageSecret(e);
      if (
        t.length === 0 ||
        e.type !== o("WAWebMsgType").MSG_TYPE.CHAT ||
        !o("WAWebFrontendMsgGetters").getIsUrlMessage(e) ||
        i == null ||
        a == null ||
        !o("WAWebMsgGetters").getIsSentByMe(e) ||
        t.length >
          o("WAWebABProps").getABPropConfigValue("maximum_group_size_for_rcat")
      )
        return null;
      var l = o("WAWebWidToJid").widToUserJid(n),
        s = new Map(),
        u = t.map(function (t) {
          var n = o("WAWebWidToJid").widToUserJid(t);
          return c({
            fromJid: l,
            messageSecret: i,
            stanzaId: o("WAWebMsgGetters").getId(e).id,
            toJid: n,
          })
            .then(function (e) {
              return _(a, e);
            })
            .then(function (e) {
              s.set(n, e);
            });
        });
      return (await Promise.all(u), s);
    }
    ((l.genNonceForMsg = u),
      (l.deriveNonce = c),
      (l.deriveNonceString = d),
      (l.getContentIdString = m),
      (l.genContentBindingForMsg = f));
  },
  98,
);
