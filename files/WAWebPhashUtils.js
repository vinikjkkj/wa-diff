__d(
  "WAWebPhashUtils",
  [
    "WABase64",
    "WACryptoSha256",
    "WALogger",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebWidFactory",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t) {
      r("gkx")("26258") ||
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[phashV1] calculating phash for ",
              "",
            ])),
          t.join(","),
        );
      for (
        var n = t
            .map(function (e) {
              return o("WAWebWidFactory")
                .asUserWidOrThrow(e)
                .toString({ legacy: !0 });
            })
            .sort()
            .join(""),
          a = [],
          i = 0;
        i < n.length;
        i++
      )
        a.push(n.charCodeAt(i));
      var l = new Uint8Array(a),
        s = await self.crypto.subtle.digest({ name: "SHA-1" }, l);
      return "1:" + o("WABase64").encodeB64(s.slice(0, 6));
    }
    async function c(e, t, n) {
      (t === void 0 && (t = !1),
        n === void 0 && (n = !1),
        r("gkx")("26258") ||
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[phashV2] calculating phash for ",
                "",
              ])),
            e.join(","),
          ));
      var a = [].concat(e);
      (o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() &&
        t === !0 &&
        a.push(o("WAWebBotUtils").META_BOT_FBID_WID),
        n === !0 && a.push(o("WAWebBotUtils").META_BOT_TEE_FBID_WID));
      for (
        var i = a
            .map(function (e) {
              return e.toString({ legacy: !0, formatFull: !0 });
            })
            .sort()
            .join(""),
          l = [],
          u = 0;
        u < i.length;
        u++
      )
        l.push(i.charCodeAt(u));
      var c = new Uint8Array(l),
        d = await o("WACryptoSha256").sha256(c);
      return "2:" + o("WABase64").encodeB64(d.slice(0, 6));
    }
    ((l.phashV1 = u), (l.phashV2 = c));
  },
  98,
);
