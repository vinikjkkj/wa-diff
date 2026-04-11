__d(
  "WAFrameSocket",
  ["WABinary", "WAErrors", "WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = (function (e) {
        function t(t) {
          var n,
            r = "SocketClosed";
          return (
            (n = e.call(this, t != null ? t : r) || this),
            (n.name = r),
            n
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.toString = function () {
            return this.name;
          }),
          t
        );
      })(babelHelpers.wrapNativeSuper(Error)),
      m = (function () {
        function t(t, n) {
          var r = this;
          ((this.$3 = new (o("WABinary").Binary)()),
            (this.closed = !1),
            (this.$4 = !1),
            (this.onFrame = null),
            (this.onClose = null),
            (this.$5 = function (e) {
              (r.$3.writeByteArray(e), r.convertBufferedToFrames());
            }),
            (this.$6 = function () {
              if (r.$3.peek(p)) {
                (o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "FrameSocket closed, waiting for pending processing",
                    ])),
                ),
                  (r.$4 = !0));
                return;
              }
              r.$9();
            }),
            (this.$7 = function (e) {}),
            (this.$2 = n),
            (this.$1 = t),
            (t.onData = this.$5),
            (t.onClose = this.$6),
            (t.onError = this.$7));
        }
        var n = t.prototype;
        return (
          (n.sendFrame = function (t) {
            if (!this.$4) {
              this.throwIfClosed();
              var e = this.$2,
                n = t.byteLength;
              this.$8(n);
              var r = this.$1.dataToSend;
              (e
                ? ((this.$2 = null),
                  r.ensureAdditionalCapacity(e.length + 3 + n),
                  r.writeByteArray(e))
                : r.ensureAdditionalCapacity(3 + n),
                r.writeUint8(n >> 16),
                r.writeUint16(n & 65535),
                r.write(t),
                this.$1.requestSend());
            }
          }),
          (n.$9 = function () {
            if (!this.closed) {
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "FrameSocket closed",
                  ])),
              ),
                (this.$4 = !1),
                (this.closed = !0));
              var e = this.onClose;
              e && e();
            }
          }),
          (n.$8 = function (t) {
            if (t >= 1 << 24)
              throw (
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "Buffer to send: ",
                      "",
                    ])),
                  t,
                ),
                new (o("WAErrors").BufferTooLargeError)(
                  "Buffer too large: " + t,
                )
              );
          }),
          (n.convertBufferedToFrames = function () {
            for (var e = this.$3, t = this.onFrame; t && e.peek(p); ) {
              var n = _(e),
                r = e.readByteArrayView(n);
              (t(r), (t = this.onFrame));
            }
            (this.$4 && !e.peek(p) && this.$9(),
              t &&
                e.size() &&
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "FrameSocket: queueing partial frame of ",
                      " bytes",
                    ])),
                  e.size(),
                ));
          }),
          (n.throwIfClosed = function () {
            if (this.closed) throw new d();
          }),
          (n.close = function () {
            this.$1.close();
          }),
          t
        );
      })();
    function p(e) {
      if (e.size() < 3) return !1;
      var t = _(e);
      return t <= e.size();
    }
    function _(e) {
      return (e.readUint8() << 16) | e.readUint16();
    }
    ((l.SocketClosed = d), (l.FrameSocket = m));
  },
  98,
);
