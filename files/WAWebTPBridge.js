__d(
  "WAWebTPBridge",
  [
    "SecureMessageListener",
    "SecurePostMessage",
    "WACustomError",
    "WAWebNoop",
    "WAWebTPMessage",
    "WAWebTypedEventEmitter",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n) {
        var o = this;
        ((this.$1 = !1),
          (this.$5 = new Set()),
          (this.$6 = new Set()),
          (this.$7 = new (r("WAWebTypedEventEmitter"))()),
          (this.$9 = new Set()),
          (this.$2 = e),
          (this.$3 = t.endsWith("/") ? t.slice(0, -1) : t),
          (this.$8 = n),
          (this.$4 = new (r("SecureMessageListener"))(window, "webtpbridge")
            .setSupportedOrigins([n])
            .setEventHandler(function (e) {
              return o.$10(e);
            })),
          this.initialize());
      }
      var t = e.prototype;
      return (
        (t.initialize = function () {
          this.$1 || (this.$4.beginListening(), (this.$1 = !0));
        }),
        (t.addSupportedOrigin = function (t) {
          (this.$9.add(t), this.$11());
        }),
        (t.setEventHandler = function (t) {
          var e = this;
          this.$4.setEventHandler(function (n) {
            (t == null || t(n), e.$10(n));
          });
        }),
        (t.removeSupportedOrigin = function (t) {
          (this.$9.delete(t), this.$11());
        }),
        (t.$11 = function () {
          this.$4.setSupportedOrigins([this.$8].concat(Array.from(this.$9)));
        }),
        (t.publish = function (t, n) {
          if (this.$1) {
            var e = o("WAWebTPMessage").encodeWAWebTPMessage(t, n);
            o("SecurePostMessage").sendMessageToSpecificOrigin(
              this.$2,
              e,
              this.$3,
            );
            for (var r of this.$5) r.onPublish(e);
          }
        }),
        (t.registerListener = function (t) {
          var e = this;
          return (
            this.$5.add(t),
            function () {
              e.$5.delete(t);
            }
          );
        }),
        (t.listen = function (t, n) {
          var e = this;
          if (!this.$1) return r("WAWebNoop");
          var o = function (t) {
            n(t);
          };
          this.$7.on(t, o);
          var a = function () {
            e.$7.off(t, o);
          };
          return a;
        }),
        (t.listenOnce = function (t, n, a) {
          var e = this;
          if (!this.$1) return r("WAWebNoop");
          var i = a.onTimeout,
            l = a.timeoutMs,
            s = null,
            u = function (r) {
              (s != null &&
                (e.$6.delete(s), window.clearTimeout(s), (s = null)),
                n(r));
            };
          this.$7.once(t, u);
          var c = function () {
            (e.$7.off(t, u),
              s != null &&
                (e.$6.delete(s), window.clearTimeout(s), (s = null)));
          };
          return (
            l > 0 &&
              ((s = window.setTimeout(function () {
                (c(),
                  i(
                    new (o("WACustomError").TimeoutError)(
                      t + ", timeoutMs: " + l,
                    ),
                  ));
              }, l)),
              this.$6.add(s)),
            c
          );
        }),
        (t.destroy = function () {
          if (this.$1) {
            ((this.$1 = !1), this.$4.stopListening());
            for (var e of this.$6) window.clearTimeout(e);
            (this.$6.clear(), this.$5.clear());
          }
        }),
        (t.$10 = function (t) {
          var e = this;
          if (!(!this.$1 || t.origin !== this.$3 || t.source !== this.$2)) {
            var n = t.data;
            this.$7.trigger(
              n.type,
              o("WAWebTPMessage").decodeWAWebTPMessage(n),
            );
            for (var r of this.$5)
              r.onMessage(n, function (t, n) {
                return e.publish(t, n);
              });
          }
        }),
        e
      );
    })();
    l.WAWebTPBridge = e;
  },
  98,
);
