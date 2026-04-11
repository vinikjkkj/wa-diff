__d(
  "WAWebPhashUtils",
  [
    "WABase64",
    "WACryptoSha256",
    "WALogger",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
            s = yield self.crypto.subtle.digest({ name: "SHA-1" }, l);
          return "1:" + o("WABase64").encodeB64(s.slice(0, 6));
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
              ),
            o(
              "WAWebBotGroupGatingUtils",
            ).isOpenGroupBotParticipantAddEnabled() &&
              t === !0 &&
              e.push(o("WAWebBotUtils").META_BOT_FBID_WID),
            o(
              "WAWebBotGroupGatingUtils",
            ).isTEEGroupBotParticipantAddEnabled() &&
              n === !0 &&
              e.push(o("WAWebBotUtils").META_BOT_TEE_FBID_WID));
          for (
            var a = e
                .map(function (e) {
                  return e.toString({ legacy: !0, formatFull: !0 });
                })
                .sort()
                .join(""),
              i = [],
              l = 0;
            l < a.length;
            l++
          )
            i.push(a.charCodeAt(l));
          var u = new Uint8Array(i),
            c = yield o("WACryptoSha256").sha256(u);
          return "2:" + o("WABase64").encodeB64(c.slice(0, 6));
        })),
        m.apply(this, arguments)
      );
    }
    ((l.phashV1 = u), (l.phashV2 = d));
  },
  98,
);
