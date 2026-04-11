__d(
  "SecureMessageListener",
  ["SecurePostMessage", "URI", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t(e, t) {
          var n = this;
          ((this.$3 = null),
            (this.$4 = !1),
            (this.$1 = e),
            (this.$6 = t),
            (this.$5 = function (e) {
              n.run(e);
            }));
        }
        var n = t.prototype;
        return (
          (n.setEventHandler = function (t) {
            return ((this.$2 = t), this);
          }),
          (n.setSupportedOrigins = function (t) {
            return ((this.$3 = t), this);
          }),
          (n.skipOriginCheck_UNSAFE = function () {
            return ((this.$4 = !0), this);
          }),
          (n.beginListening = function () {
            return (this.$1.addEventListener("message", this.$5), this);
          }),
          (n.stopListening = function () {
            try {
              this.$1.removeEventListener("message", this.$5);
            } catch (t) {
              var e = r("getErrorSafe")(t);
              if (!(e instanceof TypeError)) throw e;
            }
            return this;
          }),
          (n.run = function (t) {
            if (this.$3 == null || this.$3.length === 0) {
              if (!this.$4 && t.origin !== this.$1.location.origin) return;
            } else if (!this.isSupportedOrigin(this.$3, t.origin)) return;
            if (this.$2) {
              var e = function (n) {
                o("SecurePostMessage").sendMessageToSpecificOrigin(
                  t.source,
                  n,
                  t.origin,
                );
              };
              this.$2(t, e);
            }
          }),
          (n.isSupportedOrigin = function (n, o) {
            if (o.startsWith("chrome-extension://")) return n.includes(o);
            if (!new RegExp("^https://").test(o)) return !1;
            var t = new (e || (e = r("URI")))(o);
            return n.some(function (e) {
              return t.isSubdomainOfDomain(e);
            });
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
