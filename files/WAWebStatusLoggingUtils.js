__d(
  "WAWebStatusLoggingUtils",
  [
    "WABase64",
    "WACryptoHmac",
    "WALogger",
    "WATimeUtils",
    "WAWebMsgGetters",
    "WAWebStatusGatingUtils",
    "WAWebUserPrefsMultiDevice",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new TextEncoder();
    function u(e) {
      return s.encode(e).buffer;
    }
    async function c(e) {
      var t,
        n,
        r,
        a = e.id.id,
        i = (t = e.id.remote) == null ? void 0 : t.toString({ legacy: !0 }),
        l = await y();
      if (!l || !i) return a;
      var s = e.id.fromMe ? 1 : 0,
        c = e.id.fromMe
          ? "0"
          : (n =
                (r = e.id.participant) == null
                  ? void 0
                  : r.toString({ legacy: !0 })) != null
            ? n
            : "0",
        d = u([i, a, s, c].join("_")),
        m = await o("WACryptoHmac").hmacSha256(l, d);
      return o("WABase64").encodeB64(m);
    }
    async function d(t, n) {
      try {
        return await c(t);
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[StatusLogging] could not hash the status id",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs(n);
        return;
      }
    }
    async function m(e, t) {
      return o("WAWebMsgGetters").getIsGroupStatus(e) ? g(e, t) : p(e, t);
    }
    async function p(e, t) {
      if (
        !o(
          "WAWebStatusGatingUtils",
        ).isStatusViewerSidePosterIdentifiersEnabled()
      )
        return null;
      if (o("WAWebMsgGetters").getIsNewsletterStatus(e)) {
        var n,
          r = (n = e.id.remote) == null ? void 0 : n.toJid();
        return r == null ? null : h(r, t);
      }
      return e.author ? h(e.author.toJid(), t) : null;
    }
    async function _(e, t) {
      return o(
        "WAWebStatusGatingUtils",
      ).isStatusViewerSidePosterIdentifiersEnabled()
        ? h(e.toJid(), t)
        : null;
    }
    function f(e) {
      return e != null && e.isNewsletter() ? e.user : void 0;
    }
    async function g(e, t) {
      var n = e.id.remote;
      return !o(
        "WAWebStatusGatingUtils",
      ).isStatusViewerSidePosterIdentifiersEnabled() ||
        !o("WAWebMsgGetters").getIsGroupStatus(e) ||
        n == null
        ? null
        : h(n.toJid(), t);
    }
    async function h(e, t) {
      var n = o("WAWebStatusGatingUtils").statusPogIdRotationWindowDays(),
        r = await y();
      if (n === -1 || !r) return null;
      var a = C(t, n),
        i = await o("WACryptoHmac").hmacSha256(r, u(e + a));
      return o("WABase64").encodeB64(i);
    }
    function y() {
      var e = o("WAWebUserPrefsMultiDevice")
        .getChatThreadLoggingSecretB64()
        .then(function (e) {
          return e == null ? null : o("WABase64").decodeB64(e);
        });
      return e;
    }
    function C(e, t) {
      return t === 0 ? "" : b(e, t);
    }
    function b(e, t) {
      var n = new Date(e.getTime() - 28800),
        r = n.getUTCFullYear(),
        a = (n.getUTCMonth() + 1).toString().padStart(2, "0"),
        i = o("WATimeUtils").weekOfYear(n).toString().padStart(2, "0"),
        l = Math.floor((o("WATimeUtils").weekOfYear(n) + 1) / 2)
          .toString()
          .padStart(2, "0"),
        s = n.getUTCDate().toString().padStart(2, "0");
      return t === 1
        ? r + "/" + a + "/" + s
        : t === 7
          ? r + "/" + i
          : t === 14
            ? r + "/" + l
            : t === 30
              ? r + "/" + a
              : r + "/" + a + "/" + s;
    }
    ((l.statusIdForLogging = c),
      (l.statusIdForLoggingOrUndefined = d),
      (l.statusPosterHashIdForLogging = m),
      (l.statusPosterIdForLogging = p),
      (l.channelStatusPosterHashId = _),
      (l.channelStatusCid = f),
      (l.statusGroupIdForLogging = g));
  },
  98,
);
