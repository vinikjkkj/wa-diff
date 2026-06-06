__d(
  "WAWebStatusLoggingUtils",
  [
    "WABase64",
    "WACryptoHmac",
    "WATimeUtils",
    "WAWebMsgGetters",
    "WAWebStatusGatingUtils",
    "WAWebUserPrefsMultiDevice",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new TextEncoder(),
      s = function (n) {
        return e.encode(n).buffer;
      };
    async function u(e) {
      var t,
        n,
        r,
        a = e.id.id,
        i = (t = e.id.remote) == null ? void 0 : t.toString({ legacy: !0 }),
        l = await f();
      if (!l || !i) return a;
      var u = e.id.fromMe ? 1 : 0,
        c = e.id.fromMe
          ? "0"
          : (n =
                (r = e.id.participant) == null
                  ? void 0
                  : r.toString({ legacy: !0 })) != null
            ? n
            : "0",
        d = s([i, a, u, c].join("_")),
        m = await o("WACryptoHmac").hmacSha256(l, d);
      return o("WABase64").encodeB64(m);
    }
    async function c(e, t) {
      return o("WAWebMsgGetters").getIsGroupStatus(e) ? p(e, t) : d(e, t);
    }
    async function d(e, t) {
      if (
        !o(
          "WAWebStatusGatingUtils",
        ).isStatusViewerSidePosterIdentifiersEnabled()
      )
        return null;
      if (o("WAWebMsgGetters").getIsNewsletterStatus(e)) {
        var n,
          r = (n = e.id.remote) == null ? void 0 : n.toJid();
        return r == null ? null : _(r, t);
      }
      return e.author ? _(e.author.toJid(), t) : null;
    }
    async function m(e, t) {
      return o(
        "WAWebStatusGatingUtils",
      ).isStatusViewerSidePosterIdentifiersEnabled()
        ? _(e.toJid(), t)
        : null;
    }
    async function p(e, t) {
      var n = e.id.remote;
      return !o(
        "WAWebStatusGatingUtils",
      ).isStatusViewerSidePosterIdentifiersEnabled() ||
        !o("WAWebMsgGetters").getIsGroupStatus(e) ||
        n == null
        ? null
        : _(n.toJid(), t);
    }
    async function _(e, t) {
      var n = o("WAWebStatusGatingUtils").statusPogIdRotationWindowDays(),
        r = await f();
      if (n === -1 || !r) return null;
      var a = g(t, n),
        i = await o("WACryptoHmac").hmacSha256(r, s(e + a));
      return o("WABase64").encodeB64(i);
    }
    function f() {
      var e = o("WAWebUserPrefsMultiDevice")
        .getChatThreadLoggingSecretB64()
        .then(function (e) {
          return e == null ? null : o("WABase64").decodeB64(e);
        });
      return e;
    }
    function g(e, t) {
      return t === 0 ? "" : h(e, t);
    }
    function h(e, t) {
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
    ((l.statusIdForLogging = u),
      (l.statusPosterHashIdForLogging = c),
      (l.statusPosterIdForLogging = d),
      (l.channelStatusPosterHashId = m),
      (l.statusGroupIdForLogging = p));
  },
  98,
);
