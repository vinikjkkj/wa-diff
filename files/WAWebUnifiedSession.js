__d(
  "WAWebUnifiedSession",
  [
    "$InternalEnum",
    "WALogger",
    "WASmaxUnifiedSessionShareRPC",
    "WATimeUtils",
    "WAWebUnifiedSessionSocketManager",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 7 * o("WATimeUtils").DAY_MILLISECONDS,
      c = 3 * o("WATimeUtils").DAY_MILLISECONDS,
      d = n("$InternalEnum")({
        InitialRender: "initial-render",
        Foreground: "foreground",
      }),
      m = (function () {
        function t(e) {
          ((this.$1 = null), (this.$2 = 0), (this.$3 = !1), (this.$4 = e));
        }
        var n = t.prototype;
        return (
          (n.getSocketStreamChangeHandler = function () {
            var e = this;
            return function () {
              return e.$5();
            };
          }),
          (n.getSessionId = function () {
            return this.$1;
          }),
          (n.getSequence = function () {
            return ++this.$2;
          }),
          (n.clearSessionId = function () {
            this.$1 = null;
          }),
          (n.generateSessionId = function (n) {
            try {
              var t = (p() + c) % u,
                r = this.$1;
              ((this.$1 = String(t)), (this.$3 = !1), (this.$2 = 0), this.$6());
            } catch (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[unified-session] Error generating session id: ",
                      "",
                    ])),
                  t,
                )
                .sendLogs("unified-session-generate-error");
            }
          }),
          (n.$6 = async function () {
            if (this.$4.isConnected() !== !1) {
              var e = this.$1;
              if (e != null && !this.$3)
                try {
                  (await o("WASmaxUnifiedSessionShareRPC").sendShareRPC({
                    unifiedSessionId: e,
                  }),
                    (this.$3 = !0));
                } catch (e) {
                  o("WALogger")
                    .ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[unified-session] failed to send session id: ",
                          "",
                        ])),
                      e,
                    )
                    .sendLogs("send-unified-session-id-failed");
                }
            }
          }),
          (n.$5 = function () {
            this.$4.isInitialized() && this.$4.isConnected() && this.$6();
          }),
          t
        );
      })();
    function p() {
      return Date.now() + o("WATimeUtils").getClockSkew();
    }
    var _ = (function () {
      var e = new (o(
          "WAWebUnifiedSessionSocketManager",
        ).UnifiedSessionSocketManager)(),
        t = new m(e);
      return (
        e.init(t.getSocketStreamChangeHandler()),
        t.generateSessionId(d.InitialRender),
        t
      );
    })();
    ((l.UnifiedSessionGenReason = d), (l.UnifiedSessionManager = _));
  },
  98,
);
