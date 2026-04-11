__d(
  "WAWebStatusLoggingUtils",
  [
    "WABase64",
    "WACryptoHmac",
    "WATimeUtils",
    "WAWebMsgGetters",
    "WAWebStatusGatingUtils",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new TextEncoder(),
      s = function (n) {
        return e.encode(n).buffer;
      };
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            r,
            a = e.id.id,
            i = (t = e.id.remote) == null ? void 0 : t.toString({ legacy: !0 }),
            l = yield C();
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
            m = yield o("WACryptoHmac").hmacSha256(l, d);
          return o("WABase64").encodeB64(m);
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return o("WAWebMsgGetters").getIsGroupStatus(e) ? f(e, t) : p(e, t);
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return !o(
            "WAWebStatusGatingUtils",
          ).isStatusViewerSidePosterIdentifiersEnabled() || !e.author
            ? null
            : h(e.author.toJid(), t);
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.id.remote;
          return !o(
            "WAWebStatusGatingUtils",
          ).isStatusViewerSidePosterIdentifiersEnabled() ||
            !o("WAWebMsgGetters").getIsGroupStatus(e) ||
            n == null
            ? null
            : h(n.toJid(), t);
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebStatusGatingUtils").statusPogIdRotationWindowDays(),
            r = yield C();
          if (n === -1 || !r) return null;
          var a = b(t, n),
            i = yield o("WACryptoHmac").hmacSha256(r, s(e + a));
          return o("WABase64").encodeB64(i);
        })),
        y.apply(this, arguments)
      );
    }
    function C() {
      var e = o("WAWebUserPrefsMultiDevice")
        .getChatThreadLoggingSecretB64()
        .then(function (e) {
          return e == null ? null : o("WABase64").decodeB64(e);
        });
      return e;
    }
    function b(e, t) {
      return t === 0 ? "" : v(e, t);
    }
    function v(e, t) {
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
      (l.statusPosterHashIdForLogging = d),
      (l.statusPosterIdForLogging = p),
      (l.statusGroupIdForLogging = f));
  },
  98,
);
