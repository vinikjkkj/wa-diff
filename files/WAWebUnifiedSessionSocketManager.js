__d(
  "WAWebUnifiedSessionSocketManager",
  ["WALogger", "WAWebCmd", "WAWebUserPrefsAppStateSync"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y = { DISCONNECTED: "DISCONNECTED", CONNECTED: "CONNECTED" },
      C = (function () {
        function t() {
          ((this.$1 = !1),
            (this.$2 = y.DISCONNECTED),
            (this.$3 = null),
            (this.$4 = !1));
        }
        var n = t.prototype;
        return (
          (n.init = function (n) {
            var t = this;
            if ((n === void 0 && (n = null), this.$4)) {
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[unified-session-socket] init() already called",
                  ])),
              );
              return;
            }
            ((this.$4 = !0), (this.$3 = n));
            var r = o("WAWebUserPrefsAppStateSync").getAllCriticalDataSynced(),
              a = o("WAWebCmd").Cmd.isMainStreamReadyMd;
            ((this.$1 = r),
              (this.$2 = r && a ? y.CONNECTED : y.DISCONNECTED),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[unified-session-socket] init synced=",
                    " open=",
                    " stream=",
                    "",
                  ])),
                String(r),
                String(a),
                this.$2,
              ),
              o("WAWebCmd").Cmd.on(
                "main_stream_mode_ready_from_bridge",
                function () {
                  t.$5();
                },
              ),
              o("WAWebCmd").Cmd.on(
                "on_critical_sync_done_from_bridge",
                function () {
                  t.$5();
                },
              ),
              o("WAWebCmd").Cmd.on(
                "open_socket_stream_from_bridge",
                function () {
                  t.$6();
                },
              ),
              o("WAWebCmd").Cmd.on(
                "socket_stream_disconnected_from_bridge",
                function () {
                  t.$7();
                },
              ));
          }),
          (n.isConnected = function () {
            return this.$2 === y.CONNECTED;
          }),
          (n.isInitialized = function () {
            return this.$4;
          }),
          (n.$8 = function (t) {
            var e;
            if (((this.$2 = t ? y.CONNECTED : y.DISCONNECTED), !this.$4)) {
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[unified-session-socket] skip callback: not init",
                  ])),
              );
              return;
            }
            (e = this.$3) == null || e.call(this);
          }),
          (n.$5 = function () {
            if (
              (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[unified-session-socket] ready->CONNECTED",
                  ])),
              ),
              this.$1 === !0 && this.isConnected())
            ) {
              o("WALogger").WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[unified-session-socket] skip->CONNECTED: already",
                  ])),
              );
              return;
            }
            var e = o("WAWebUserPrefsAppStateSync").getAllCriticalDataSynced();
            if (!e) {
              o("WALogger").WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[unified-session-socket] skip->CONNECTED: no sync",
                  ])),
              );
              return;
            }
            ((this.$1 = e), this.$8(!0));
          }),
          (n.$6 = function () {
            if (
              (o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[unified-session-socket] open->CONNECTED",
                  ])),
              ),
              this.$1 === !1)
            ) {
              o("WALogger").WARN(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[unified-session-socket] skip->CONNECTED: no sync",
                  ])),
              );
              return;
            }
            if (this.isConnected()) {
              o("WALogger").WARN(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[unified-session-socket] skip->CONNECTED: already",
                  ])),
              );
              return;
            }
            this.$8(!0);
          }),
          (n.$7 = function () {
            if (
              (o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[unified-session-socket] disconnect->DISCONNECTED",
                  ])),
              ),
              this.isConnected() === !1)
            ) {
              o("WALogger").WARN(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[unified-session-socket] skip->DISCONNECTED: already",
                  ])),
              );
              return;
            }
            this.$8(!1);
          }),
          t
        );
      })();
    l.UnifiedSessionSocketManager = C;
  },
  98,
);
