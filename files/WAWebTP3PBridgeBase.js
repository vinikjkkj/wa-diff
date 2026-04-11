__d(
  "WAWebTP3PBridgeBase",
  [
    "SecureMessageListener",
    "SecurePostMessage",
    "WACustomError",
    "WAWebEventEmitter",
    "WAWebNoop",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (typeof e == "object" && e != null && "type" in e) {
        var t = e.type;
        if (t === "GET_PDF" || t === "PDF_DATA" || t === "GET_PDF_SUCCESS")
          return babelHelpers.extends({}, e, { type: t });
      }
      return null;
    }
    var s = (function () {
      function t(e, t, n) {
        var o = this;
        ((this.$1 = !1),
          (this.$5 = new Set()),
          (this.$6 = new Set()),
          (this.$7 = new (r("WAWebEventEmitter"))()),
          (this.$2 = e));
        var a = t.endsWith("/") ? t.slice(0, -1) : t;
        this.$3 = a;
        var i = new (r("SecureMessageListener"))(window, "webtp3pbridge");
        (t.startsWith("chrome-extension://")
          ? i.setSupportedOrigins([a])
          : i.setSupportedOrigins([n]),
          (this.$4 = i.setEventHandler(function (e) {
            return o.$8(e);
          })),
          this.initialize());
      }
      var n = t.prototype;
      return (
        (n.initialize = function () {
          this.$1 || (this.$4.beginListening(), (this.$1 = !0));
        }),
        (n.runEvent = function (t) {
          this.$4.run(t);
        }),
        (n.publish = function (t, n) {
          if (this.$1) {
            o("SecurePostMessage").sendMessageToSpecificOrigin(
              this.$2,
              babelHelpers.extends({ type: t }, n),
              this.$3,
            );
            for (var e of this.$5) e.onPublish(t, n);
          }
        }),
        (n.registerListener = function (t) {
          var e = this;
          return (
            this.$5.add(t),
            function () {
              e.$5.delete(t);
            }
          );
        }),
        (n.listenOnce = function (t, n, a) {
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
                (c(), i(new (o("WACustomError").TimeoutError)()));
              }, l)),
              this.$6.add(s)),
            c
          );
        }),
        (n.isTargetWindowClosed = function () {
          try {
            var e;
            return ((e = this.$2) == null ? void 0 : e.closed) === !0;
          } catch (e) {
            return !0;
          }
        }),
        (n.destroy = function () {
          if (this.$1) {
            ((this.$1 = !1), this.$4.stopListening());
            for (var e of this.$6) window.clearTimeout(e);
            (this.$6.clear(), this.$5.clear());
          }
        }),
        (n.$8 = function (n) {
          var t = this;
          if (
            !(
              !this.$1 ||
              n.origin !== this.$3 ||
              (n.source !== this.$2 && n.source !== this.$2.parent)
            )
          ) {
            var r = e(n.data);
            if (r != null) {
              this.$7.trigger(r.type, r);
              for (var o of this.$5)
                o.onMessage(r.type, r, function (e, n) {
                  return t.publish(e, n);
                });
            }
          }
        }),
        t
      );
    })();
    l.WAWebTP3PBridgeBase = s;
  },
  98,
);
