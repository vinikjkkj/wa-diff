__d(
  "WAWebMusicArtworkValidation",
  ["WALogger", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 2097152,
      m = 32 * 1024 * 1024,
      p = 30 * 1e3,
      _ = 0.01,
      f = [
        { mimeType: "image/jpeg", signature: [255, 216, 255] },
        { mimeType: "image/png", signature: [137, 80, 78, 71, 13, 10, 26, 10] },
      ],
      g = { isAllowed: !1 },
      h = new Map(),
      y = new Map(),
      C = new Map(),
      b = new Map(),
      v = new Set(),
      S = new Set(),
      R = 0;
    function L(t) {
      v.delete(t) && h.delete(t);
      var n = h.get(t);
      if (n != null) return n;
      var a = D(t).catch(function (n) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[music] artwork check failed",
                ])),
            )
            .catching(r("getErrorSafe")(n)),
          v.add(t),
          O(t, g)
        );
      });
      return (h.set(t, a), a);
    }
    function E(e) {
      return y.get(e);
    }
    function k(e) {
      var t;
      return (
        b.set(e, ((t = b.get(e)) != null ? t : 0) + 1),
        function () {
          var t,
            n = ((t = b.get(e)) != null ? t : 1) - 1;
          if (n > 0) {
            b.set(e, n);
            return;
          }
          (b.delete(e), A());
        }
      );
    }
    function I(e) {
      return !y.has(e) || v.has(e);
    }
    function T(e) {
      return (
        S.add(e),
        function () {
          S.delete(e);
        }
      );
    }
    async function D(e) {
      var t = await x(e);
      if (t == null) return (v.add(e), O(e, g));
      if (t === "too-large") return w(e, "too-large");
      var n = f.find(function (e) {
        var n = e.signature;
        return W(t, n);
      });
      if (n == null) return w(e, "unsupported-type");
      var r = URL.createObjectURL(new Blob([t], { type: n.mimeType }));
      return (
        C.set(e, t.byteLength),
        (R += t.byteLength),
        O(e, { isAllowed: !0, src: r }),
        A(),
        !0
      );
    }
    async function x(e) {
      var t = new AbortController(),
        n = window.setTimeout(function () {
          return t.abort();
        }, p);
      try {
        var a = await window.fetch(e, {
          credentials: "omit",
          mode: "cors",
          signal: t.signal,
        });
        return a.ok
          ? Number(a.headers.get("content-length")) > d
            ? (await M(a), "too-large")
            : await $(a)
          : (o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[music] artwork download failed: ",
                  "",
                ])),
              a.status,
            ),
            null);
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[music] artwork download failed",
                ])),
            )
            .catching(r("getErrorSafe")(e)),
          null
        );
      } finally {
        window.clearTimeout(n);
      }
    }
    async function $(e) {
      var t = e.body;
      return t == null ? new Uint8Array(0) : P(t.getReader(), [], 0);
    }
    async function P(e, t, n) {
      var r = await e.read(),
        o = r.done,
        a = r.value;
      if (o || a == null) return N(t, n);
      var i = n + a.byteLength;
      return i > d
        ? (await e.cancel(), "too-large")
        : P(e, [].concat(t, [a]), i);
    }
    function N(e, t) {
      var n = new Uint8Array(t);
      return (
        e.reduce(function (e, t) {
          return (n.set(t, e), e + t.byteLength);
        }, 0),
        n
      );
    }
    async function M(e) {
      var t = e.body;
      t != null && typeof t.cancel == "function" && (await t.cancel());
    }
    function w(e, t) {
      return (
        o("WALogger")
          .WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[music] artwork rejected: ",
                "",
              ])),
            t,
          )
          .sendLogs("music-artwork-rejected", { sampling: _ }),
        O(e, g)
      );
    }
    function A() {
      var e = !1;
      for (var t of C) {
        var n = t[0],
          r = t[1];
        if (R <= m) break;
        b.has(n) || (F(n, r), (e = !0));
      }
      e && B();
    }
    function F(e, t) {
      var n = y.get(e);
      (n != null && n.isAllowed && URL.revokeObjectURL(n.src),
        y.delete(e),
        h.delete(e),
        C.delete(e),
        (R -= t));
    }
    function O(e, t) {
      return (y.set(e, t), B(), t.isAllowed);
    }
    function B() {
      S.forEach(function (e) {
        return e();
      });
    }
    function W(e, t) {
      return t.every(function (t, n) {
        return e[n] === t;
      });
    }
    ((l.isMusicArtworkAllowed = L),
      (l.getMusicArtworkVerdict = E),
      (l.holdMusicArtwork = k),
      (l.shouldCheckMusicArtwork = I),
      (l.subscribeToMusicArtworkVerdicts = T));
  },
  98,
);
