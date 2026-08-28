__d(
  "ZenonTransactionManager",
  ["Promise", "ZenonTransactionConstantTimeRetries", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t(e, t) {
          ((this.$4 = function () {}),
            (this.$5 = function () {}),
            (this.$6 = null),
            (this.$3 = new Map()),
            (this.$1 = e),
            (this.$2 = t));
        }
        var o = t.prototype;
        return (
          (o.$7 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if (this.$6 == null) return this.$1.sendMessage(e);
                var t = yield this.$6.processSignalingMessage(e);
                return this.$1.sendMessage(t);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (o.$8 = function (t) {
            var e = this;
            return this.$3.has(t)
              ? this.$3.get(t)
              : (this.$3.set(
                  t,
                  new (r("ZenonTransactionConstantTimeRetries"))(
                    t,
                    this.$2,
                    function (t) {
                      return e.$7(t);
                    },
                    function (t) {
                      if (e.$6 != null) e.$6.receive(t);
                      else {
                        var n = t.getHeader(),
                          r = n.messageID,
                          o = n.protocol,
                          a = t.getEvents();
                        a.forEach(function (t) {
                          return e.$4(t, r, o);
                        });
                      }
                    },
                    this.$5,
                  ),
                ),
                this.$3.get(t));
          }),
          (o.sendMessage = function (r) {
            var t = r.getHeader(),
              o = t.messageID,
              a = this.$8(o);
            return a != null
              ? a.sendMessage(r)
              : (e || (e = n("Promise"))).resolve();
          }),
          (o.receiveMessage = function (t) {
            var e = t.getHeader(),
              n = e.messageID,
              r = this.$8(n);
            r != null && r.receiveMessage(t);
          }),
          (o.setReceiver = function (t) {
            this.$4 = t;
          }),
          (o.setLoggingEventHandler = function (t) {
            this.$1.setLoggingEventHandler(t);
          }),
          (o.setMessageSentHandler = function (t) {
            this.$5 = t;
          }),
          (o.setSecureDataMessageManager = function (t) {
            this.$6 = t;
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
