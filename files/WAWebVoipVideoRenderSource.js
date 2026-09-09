__d(
  "WAWebVoipVideoRenderSource",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebVoipSelfPreviewJid",
    "WAWebWidFactory",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = n("$InternalEnum").Mirrored(["CAMERA", "SCREEN_SHARE"]),
      u = "#ss",
      c = 128,
      d = new Map(),
      m = new Set(),
      p = (function () {
        function e(e, t, n, o) {
          var a = o.intentionallyUsePrivateConstructor;
          if (!a)
            throw r("err")(
              "Use WAWebVoipVideoRenderSource.peer()/self()/fromWire() instead of the constructor.",
            );
          ((this.wid = e), (this.stream = t), (this.key = n));
        }
        ((e.peer = function (t, n) {
          return _(t, n);
        }),
          (e.self = function (t) {
            return _(null, t);
          }),
          (e.fromWire = function (t, n) {
            var e = n ? s.SCREEN_SHARE : s.CAMERA;
            if (t === o("WAWebVoipSelfPreviewJid").selfPreviewJid)
              return _(null, e);
            var r = g(t);
            return r == null ? null : _(r, e);
          }));
        var t = e.prototype;
        return (
          (t.isSelf = function () {
            return this.wid == null;
          }),
          (t.isScreenShare = function () {
            return this.stream === s.SCREEN_SHARE;
          }),
          (t.withStream = function (t) {
            return _(this.wid, t);
          }),
          (t.toString = function () {
            return this.key;
          }),
          (t.toJSON = function () {
            return this.key;
          }),
          e
        );
      })();
    function _(e, t) {
      var n = f(
          e == null
            ? o("WAWebVoipSelfPreviewJid").selfPreviewJid
            : e.toString(),
          t,
        ),
        r = d.get(n);
      if (r != null) return r;
      var a = new p(e, t, n, { intentionallyUsePrivateConstructor: !0 });
      return (d.set(n, a), a);
    }
    function f(e, t) {
      return t === s.SCREEN_SHARE ? e + u : e;
    }
    function g(e) {
      if (m.has(e)) return null;
      try {
        return o("WAWebWidFactory").createWid(e);
      } catch (t) {
        return (h(e), null);
      }
    }
    function h(t) {
      if (m.size >= c) {
        var n = m.keys().next();
        n.done || m.delete(n.value);
      }
      m.add(t);
      var r = t.lastIndexOf("@"),
        a = r < 0 ? "(none)" : t.slice(r + 1);
      o("WALogger")
        .ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: VideoRenderSource: dropping frames for invalid JID, server=",
              " length=",
              "",
            ])),
          a,
          t.length,
        )
        .sendLogs("voip-video-render-source-invalid-jid");
    }
    ((l.selfPreviewJid = o("WAWebVoipSelfPreviewJid").selfPreviewJid),
      (l.WAWebVoipVideoRenderStream = s),
      (l.WAWebVoipVideoRenderSource = p));
  },
  98,
);
