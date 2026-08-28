__d(
  "FrameEncryptionWasmTypes",
  ["$InternalEnum", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "This wasm pointer must not be null.",
      s = "This wasm pointer is read after being freed.",
      u = 0;
    function c(e, t) {
      if (e <= u) throw r("err")(t);
    }
    var d = n("$InternalEnum")({
        POST_REMOTE_SDP: "post_remote_sdp",
        GROUP: "group",
        P2P: "p2p",
        WASM: "wasm",
        PRE_REMOTE_SDP: "pre_remote_sdp",
        INSERTABLE_STREAMS: "insertable_streams",
      }),
      m = (function () {
        function e(e) {
          this.$1 = e;
        }
        var t = e.prototype;
        return (
          (t.isNull = function () {
            return this.$1 <= u;
          }),
          (t.get = function () {
            return this.$1;
          }),
          (t.markAsFreed = function () {
            this.$1 = u;
          }),
          e
        );
      })(),
      p = (function (t) {
        function n(n) {
          return (c(n, e), t.call(this, n) || this);
        }
        (babelHelpers.inheritsLoose(n, t),
          (n.fromNullable = function (r) {
            var t = r.get();
            return (c(t, e), new n(t));
          }));
        var r = n.prototype;
        return (
          (r.get = function () {
            return (
              c(t.prototype.get.call(this), s),
              t.prototype.get.call(this)
            );
          }),
          n
        );
      })(m),
      _ = (function () {
        function e(e) {
          ((this.$1 = e), (this.$2 = new Array(0)));
        }
        var t = e.prototype;
        return (
          (t.createCallback = function (t, n) {
            var e = new p(this.$1.addFunction(t, n));
            return (this.$2.push(e), e);
          }),
          (t.getCountOfCallbacks = function () {
            return this.$2.length;
          }),
          (t.cleanupAllCallbacks = function () {
            var e = this;
            (this.$2.forEach(function (t) {
              return e.$1.removeFunction(t.get());
            }),
              (this.$2 = new Array(0)));
          }),
          e
        );
      })();
    ((l.ERROR_MESSAGE_MUST_NOT_BE_NULL = e),
      (l.ERROR_MESSAGE_USE_AFTER_FREE = s),
      (l.WASM_NULLPTR_VALUE = u),
      (l.ZenonE2eeComponent = d),
      (l.ZenonNullableWasmPtr = m),
      (l.ZenonNonNullWasmPtr = p),
      (l.WasmCallbackManager = _));
  },
  98,
);
