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
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new TextEncoder();
    function u(e) {
      return s.encode(e).buffer;
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            r,
            a = e.id.id,
            i = (t = e.id.remote) == null ? void 0 : t.toString({ legacy: !0 }),
            l = yield E();
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
            m = yield o("WACryptoHmac").hmacSha256(l, d);
          return o("WABase64").encodeB64(m);
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          try {
            return yield c(t);
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
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return o("WAWebMsgGetters").getIsGroupStatus(e) ? v(e, t) : g(e, t);
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            !o(
              "WAWebStatusGatingUtils",
            ).isStatusViewerSidePosterIdentifiersEnabled()
          )
            return null;
          if (o("WAWebMsgGetters").getIsNewsletterStatus(e)) {
            var n,
              r = (n = e.id.remote) == null ? void 0 : n.toJid();
            return r == null ? null : R(r, t);
          }
          return e.author ? R(e.author.toJid(), t) : null;
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return o(
            "WAWebStatusGatingUtils",
          ).isStatusViewerSidePosterIdentifiersEnabled()
            ? R(e.toJid(), t)
            : null;
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return e != null && e.isNewsletter() ? e.user : void 0;
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.id.remote;
          return !o(
            "WAWebStatusGatingUtils",
          ).isStatusViewerSidePosterIdentifiersEnabled() ||
            !o("WAWebMsgGetters").getIsGroupStatus(e) ||
            n == null
            ? null
            : R(n.toJid(), t);
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebStatusGatingUtils").statusPogIdRotationWindowDays(),
            r = yield E();
          if (n === -1 || !r) return null;
          var a = k(t, n),
            i = yield o("WACryptoHmac").hmacSha256(r, u(e + a));
          return o("WABase64").encodeB64(i);
        })),
        L.apply(this, arguments)
      );
    }
    function E() {
      var e = o("WAWebUserPrefsMultiDevice")
        .getChatThreadLoggingSecretB64()
        .then(function (e) {
          return e == null ? null : o("WABase64").decodeB64(e);
        });
      return e;
    }
    function k(e, t) {
      return t === 0 ? "" : I(e, t);
    }
    function I(e, t) {
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
      (l.statusIdForLoggingOrUndefined = m),
      (l.statusPosterHashIdForLogging = _),
      (l.statusPosterIdForLogging = g),
      (l.channelStatusPosterHashId = y),
      (l.channelStatusCid = b),
      (l.statusGroupIdForLogging = v));
  },
  98,
);
