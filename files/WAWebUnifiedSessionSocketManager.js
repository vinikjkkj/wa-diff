__d(
  "WAWebUnifiedSessionSocketManager",
  ["WALogger", "WAWebUserPrefsAppStateSync", "cr:37437"],
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
      y,
      C = { DISCONNECTED: "DISCONNECTED", CONNECTED: "CONNECTED" },
      b = (e = n("cr:37437")) != null ? e : {},
      v = b.Cmd,
      S = (function () {
        function e() {
          ((this.$1 = !1),
            (this.$2 = C.DISCONNECTED),
            (this.$3 = null),
            (this.$4 = !1));
        }
        var t = e.prototype;
        return (
          (t.init = function (t) {
            var e,
              n = this;
            if ((t === void 0 && (t = null), this.$4)) {
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[unified-session-socket] init() already called",
                  ])),
              );
              return;
            }
            ((this.$4 = !0), (this.$3 = t));
            var r = o("WAWebUserPrefsAppStateSync").getAllCriticalDataSynced(),
              a =
                (e = v == null ? void 0 : v.isMainStreamReadyMd) != null
                  ? e
                  : !1;
            ((this.$1 = r),
              (this.$2 = r && a ? C.CONNECTED : C.DISCONNECTED),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[unified-session-socket] init synced=",
                    " open=",
                    " stream=",
                    "",
                  ])),
                String(r),
                String(a),
                this.$2,
              ),
              v != null &&
                (v.on("main_stream_mode_ready_from_bridge", function () {
                  n.$5();
                }),
                v.on("on_critical_sync_done_from_bridge", function () {
                  n.$5();
                }),
                v.on("open_socket_stream_from_bridge", function () {
                  n.$6();
                }),
                v.on("socket_stream_disconnected_from_bridge", function () {
                  n.$7();
                })));
          }),
          (t.isConnected = function () {
            return this.$2 === C.CONNECTED;
          }),
          (t.isInitialized = function () {
            return this.$4;
          }),
          (t.$8 = function (t) {
            var e;
            if (((this.$2 = t ? C.CONNECTED : C.DISCONNECTED), !this.$4)) {
              o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[unified-session-socket] skip callback: not init",
                  ])),
              );
              return;
            }
            (e = this.$3) == null || e.call(this);
          }),
          (t.$5 = function () {
            if (
              (o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[unified-session-socket] ready->CONNECTED",
                  ])),
              ),
              this.$1 === !0 && this.isConnected())
            ) {
              o("WALogger").WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[unified-session-socket] skip->CONNECTED: already",
                  ])),
              );
              return;
            }
            var e = o("WAWebUserPrefsAppStateSync").getAllCriticalDataSynced();
            if (!e) {
              o("WALogger").WARN(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[unified-session-socket] skip->CONNECTED: no sync",
                  ])),
              );
              return;
            }
            ((this.$1 = e), this.$8(!0));
          }),
          (t.$6 = function () {
            if (
              (o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[unified-session-socket] open->CONNECTED",
                  ])),
              ),
              this.$1 === !1)
            ) {
              o("WALogger").WARN(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[unified-session-socket] skip->CONNECTED: no sync",
                  ])),
              );
              return;
            }
            if (this.isConnected()) {
              o("WALogger").WARN(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[unified-session-socket] skip->CONNECTED: already",
                  ])),
              );
              return;
            }
            this.$8(!0);
          }),
          (t.$7 = function () {
            if (
              (o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[unified-session-socket] disconnect->DISCONNECTED",
                  ])),
              ),
              this.isConnected() === !1)
            ) {
              o("WALogger").WARN(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[unified-session-socket] skip->DISCONNECTED: already",
                  ])),
              );
              return;
            }
            this.$8(!1);
          }),
          e
        );
      })();
    l.UnifiedSessionSocketManager = S;
  },
  98,
);
