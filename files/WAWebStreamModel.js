__d(
  "WAWebStreamModel",
  [
    "$InternalEnum",
    "WALogger",
    "WAShiftTimer",
    "WAWebBackendEventBus",
    "WAWebBaseModel",
    "WAWebBuildConstants",
    "WAWebCallCollection",
    "WAWebEnvironment",
    "WAWebLockScreenResolver",
    "WAWebNetworkStatus",
    "WAWebPresenceChatAction",
    "WAWebPresenceCollection",
    "WAWebSocketConstants",
    "WAWebSocketModel",
    "WAWebStreamTypes",
    "WAWebUserPrefsMultiDevice",
    "WAWebUserPrefsScreenLock",
    "WAWebWamEnumWebcStreamModeCode",
    "WAWebWamPageLoadReporter",
    "WAWebWebcPageResumeWamEvent",
    "WAWebWebcStreamModeChangeWamEvent",
    "WAWebWindowsHybridBridgeInitiator",
    "asyncToGeneratorRuntime",
    "cr:17219",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = (e = n("cr:17219")) != null ? e : {},
      d = c.getWindowsBridge,
      m = n("$InternalEnum").Mirrored([
        "QR",
        "MAIN",
        "SYNCING",
        "OFFLINE",
        "CONFLICT",
        "PROXYBLOCK",
        "TOS_BLOCK",
        "SMB_TOS_BLOCK",
      ]),
      p = 18e3,
      _ = 3e3,
      f = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.id = o("WAWebBaseModel").prop()),
            (t.info = o("WAWebBaseModel").session(
              o("WAWebStreamTypes").StreamInfo.NORMAL,
            )),
            (t.mode = o("WAWebBaseModel").session(m.SYNCING)),
            (t.obscurity = o("WAWebBaseModel").session(
              o("WAWebStreamTypes").Obscurity.HIDE,
            )),
            (t.needsUpdate = o("WAWebBaseModel").session()),
            (t.isHardRefresh = o("WAWebBaseModel").session(!1)),
            (t.lastSyncStart = o("WAWebBaseModel").session(v())),
            (t.needsManualDownload = o("WAWebBaseModel").session()),
            (t.couldForce = o("WAWebBaseModel").session()),
            (t.uiActive = o("WAWebBaseModel").session()),
            (t.isInConnectedCall = o("WAWebBaseModel").session(!1)),
            (t.available = o("WAWebBaseModel").session(!0)),
            (t.unavailableShiftTimer = o("WAWebBaseModel").session()),
            (t.unavailableAutoLockTimer = o("WAWebBaseModel").session()),
            (t.unavailableLogoutTimer = o("WAWebBaseModel").session()),
            (t.unobscureShiftTimer = o("WAWebBaseModel").session()),
            (t.resumeCount = o("WAWebBaseModel").session(0)),
            (t.phoneAuthed = o("WAWebBaseModel").session(!1)),
            (t.hasSynced = o("WAWebBaseModel").session()),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var a = t.prototype;
        return (
          (a.initialize = function () {
            var t = this;
            (e.prototype.initialize.call(this),
              o("WAWebUserPrefsMultiDevice").isRegistered() ||
                (this.mode = m.QR),
              window.document && (this.available = document.hasFocus()),
              (this.unavailableShiftTimer = new (o("WAShiftTimer").ShiftTimer)(
                function () {
                  return t.markUnavailable();
                },
              )),
              (this.unobscureShiftTimer = new (o("WAShiftTimer").ShiftTimer)(
                function () {
                  return t.unobscure();
                },
              )),
              (this.unavailableAutoLockTimer = new (o(
                "WAShiftTimer",
              ).ShiftTimer)(function () {
                o(
                  "WAWebUserPrefsScreenLock",
                ).getScreenLockDurationInSeconds() !== 0 &&
                  (o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Stream:autoLockShiftTimer auto lock due to inactivity",
                      ])),
                  ),
                  o(
                    "WAWebLockScreenResolver",
                  ).lockScreenAndTriggerUnlockFlow());
              })),
              this.listenTo(
                o("WAWebSocketModel").Socket,
                "change:state change:stream change:hasSynced",
                this.$StreamImpl$p_1,
              ),
              (this.hasSynced = o("WAWebSocketModel").Socket.hasSynced),
              this.listenTo(
                r("WAWebNetworkStatus"),
                "change:online",
                this.$StreamImpl$p_1,
              ),
              this.listenTo(this, "change:available", this.$StreamImpl$p_2),
              this.listenTo(this, "change:phoneAuthed", this.$StreamImpl$p_3),
              this.listenTo(this, "change:info", this.logPageResume),
              this.listenTo(this, "change:info", this.updateWamLog),
              this.listenTo(this, "change:mode", this.logModeChange),
              this.listenTo(
                this,
                "change:available change:uiActive",
                this.updateCouldForce,
              ),
              this.listenTo(
                r("WAWebCallCollection"),
                "change:activeCall",
                this.updateCouldForce,
              ),
              o(
                "WAWebBackendEventBus",
              ).BackendEventBus.onSocketStreamDisconnected(function () {
                o(
                  "WAWebPresenceCollection",
                ).PresenceCollection.clearAllPresence();
              }),
              this.listenTo(
                r("WAWebCallCollection"),
                "change:isInConnectedCall",
                this.$StreamImpl$p_4,
              ),
              window.document &&
                document.addEventListener("visibilitychange", function () {
                  return t.updateCouldForce();
                }),
              this.updateCouldForce());
          }),
          (a.delete = function () {}),
          (a.markAvailable = function () {
            (this.unavailableShiftTimer.cancel(), (this.available = !0));
          }),
          (a.markUnavailable = function (t) {
            t != null && t !== 0
              ? this.unavailableShiftTimer.onOrBefore(t)
              : (this.unavailableShiftTimer.cancel(), (this.available = !1));
          }),
          (a.$StreamImpl$p_1 = function () {
            var e = C(),
              t = {
                info: e,
                mode: b(),
                phoneAuthed:
                  o("WAWebSocketModel").Socket.stream !==
                  o("WAWebSocketConstants").SOCKET_STREAM.DISCONNECTED,
                hasSynced: o("WAWebSocketModel").Socket.hasSynced,
              };
            if (e === o("WAWebStreamTypes").StreamInfo.NORMAL)
              (this.unobscureShiftTimer.cancel(),
                (t.obscurity = o("WAWebStreamTypes").Obscurity.HIDE));
            else if (e === o("WAWebStreamTypes").StreamInfo.OFFLINE)
              (this.unobscureShiftTimer.cancel(),
                (t.obscurity = o("WAWebStreamTypes").Obscurity.OBSCURE));
            else
              e: {
                var n = this.obscurity;
                if (n === o("WAWebStreamTypes").Obscurity.HIDE) {
                  this.unobscureShiftTimer.onOrBefore(p);
                  break e;
                }
                if (n === o("WAWebStreamTypes").Obscurity.OBSCURE) {
                  this.unobscureShiftTimer.onOrBefore(_);
                  break e;
                }
                if (n === o("WAWebStreamTypes").Obscurity.SHOW) break e;
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    n,
                );
              }
            this.set(t);
          }),
          (a.unobscure = function () {
            this.obscurity = o("WAWebStreamTypes").Obscurity.SHOW;
          }),
          (a.$StreamImpl$p_3 = function () {
            this.phoneAuthed &&
              (r("WAWebEnvironment").isWindows
                ? this.$StreamImpl$p_5()
                : this.$StreamImpl$p_6());
          }),
          (a.$StreamImpl$p_6 = function () {
            this.sendAvailability(!0);
          }),
          (a.$StreamImpl$p_5 = function () {
            var e,
              t =
                d == null ||
                (e = d(
                  r("WAWebWindowsHybridBridgeInitiator").WAWebStreamModel,
                )) == null ||
                (e = e.nativeAppStateBridge) == null
                  ? void 0
                  : e.isMinimizedToTray();
            t != null
              ? t && !this.isInConnectedCall
                ? o("WAWebPresenceChatAction").sendPresenceUnavailable()
                : this.sendAvailability(!1)
              : this.sendAvailability(!0);
          }),
          (a.$StreamImpl$p_2 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = this.available;
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Stream:onAvailableUpdate user ",
                    "",
                  ])),
                e ? "available" : "unavailable",
              );
              var t = o(
                "WAWebUserPrefsScreenLock",
              ).getScreenLockDurationInSeconds();
              (!e && t !== 0
                ? this.unavailableAutoLockTimer.onOrBefore(t * 1e3)
                : this.unavailableAutoLockTimer.cancel(),
                this.sendAvailability(!1),
                e ||
                  o(
                    "WAWebPresenceCollection",
                  ).PresenceCollection.clearAllPresence());
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$StreamImpl$p_4 = function () {
            ((this.isInConnectedCall =
              r("WAWebEnvironment").isWindows &&
              r("WAWebCallCollection").isInConnectedCall),
              this.sendAvailability(!0));
          }),
          (a.sendAvailability = function (t) {
            (t || this.uiActive || this.isInConnectedCall) &&
              (this.available || this.isInConnectedCall
                ? o("WAWebPresenceChatAction").sendPresenceAvailable()
                : o("WAWebPresenceChatAction").sendPresenceUnavailable());
          }),
          (a.updateCouldForce = function () {
            this.couldForce =
              (!this.uiActive || (!this.available && document.hidden)) &&
              !r("WAWebCallCollection").activeCall;
          }),
          (a.logPageResume = function () {
            this.info === o("WAWebStreamTypes").StreamInfo.RESUMING &&
              (this.resumeCount++,
              new (o("WAWebWebcPageResumeWamEvent").WebcPageResumeWamEvent)({
                webcResumeCount: this.resumeCount,
              }).commit());
          }),
          (a.updateWamLog = function () {
            var e = this.info === o("WAWebStreamTypes").StreamInfo.NORMAL;
            (o("WAWebWamPageLoadReporter").streamInfoChange(this.info, 1, e),
              e && this.stopListening(this, "change:info", this.updateWamLog));
          }),
          (a.logModeChange = function () {
            (this.mode === m.SYNCING && (this.lastSyncStart = v()),
              new (o(
                "WAWebWebcStreamModeChangeWamEvent",
              ).WebcStreamModeChangeWamEvent)({
                webcStreamMode: g(this.mode),
              }).commit());
          }),
          t
        );
      })(o("WAWebBaseModel").BaseModel);
    f.Proxy = "stream";
    function g(e) {
      switch (e) {
        case m.QR:
          return o("WAWebWamEnumWebcStreamModeCode").WEBC_STREAM_MODE_CODE.QR;
        case m.MAIN:
          return o("WAWebWamEnumWebcStreamModeCode").WEBC_STREAM_MODE_CODE.MAIN;
        case m.SYNCING:
          return o("WAWebWamEnumWebcStreamModeCode").WEBC_STREAM_MODE_CODE
            .SYNCING;
        case m.OFFLINE:
          return o("WAWebWamEnumWebcStreamModeCode").WEBC_STREAM_MODE_CODE
            .OFFLINE;
        case m.CONFLICT:
          return o("WAWebWamEnumWebcStreamModeCode").WEBC_STREAM_MODE_CODE
            .CONFLICT;
        case m.PROXYBLOCK:
          return o("WAWebWamEnumWebcStreamModeCode").WEBC_STREAM_MODE_CODE
            .PROXYBLOCK;
        case m.TOS_BLOCK:
        case m.SMB_TOS_BLOCK:
          return o("WAWebWamEnumWebcStreamModeCode").WEBC_STREAM_MODE_CODE
            .TOS_BLOCK;
      }
    }
    var h = o("WAWebBaseModel").defineModel(f),
      y = new h({ id: "1" });
    function C() {
      var e = !1;
      if (
        (e || r("gkx")("26256")) &&
        !r("WAWebNetworkStatus").online &&
        r("WAWebNetworkStatus").simulatedOfflineConditions
      )
        return o("WAWebStreamTypes").StreamInfo.OFFLINE;
      switch (o("WAWebSocketModel").Socket.state) {
        case o("WAWebSocketConstants").SOCKET_STATE.OPENING:
          return r("WAWebNetworkStatus").online
            ? o("WAWebStreamTypes").StreamInfo.OPENING
            : o("WAWebStreamTypes").StreamInfo.OFFLINE;
        case o("WAWebSocketConstants").SOCKET_STATE.PAIRING:
          return o("WAWebSocketModel").Socket.hasSynced
            ? o("WAWebStreamTypes").StreamInfo.RESUMING
            : o("WAWebStreamTypes").StreamInfo.PAIRING;
        case o("WAWebSocketConstants").SOCKET_STATE.CONNECTED:
          return o("WAWebSocketModel").Socket.stream !==
            o("WAWebSocketConstants").SOCKET_STREAM.CONNECTED &&
            !o("WAWebSocketModel").Socket.hasSynced
            ? o("WAWebStreamTypes").StreamInfo.SYNCING
            : o("WAWebStreamTypes").StreamInfo.NORMAL;
        case o("WAWebSocketConstants").SOCKET_STATE.UNLAUNCHED:
        case o("WAWebSocketConstants").SOCKET_STATE.PROXYBLOCK:
        default:
          return o("WAWebStreamTypes").StreamInfo.NORMAL;
      }
    }
    function b() {
      var e = !1;
      if (
        ((e = o("WAWebUserPrefsMultiDevice").isRegistered()),
        !e &&
          o("WAWebSocketModel").Socket.state !==
            o("WAWebSocketConstants").SOCKET_STATE.PROXYBLOCK)
      )
        return m.QR;
      var t = o("WAWebSocketModel").Socket.hasSynced;
      if (t && e && o("WAWebBuildConstants").WINDOWS_OFFLINE) return m.MAIN;
      switch (o("WAWebSocketModel").Socket.state) {
        case o("WAWebSocketConstants").SOCKET_STATE.PROXYBLOCK:
          return m.PROXYBLOCK;
        case o("WAWebSocketConstants").SOCKET_STATE.CONFLICT:
          return m.CONFLICT;
        case o("WAWebSocketConstants").SOCKET_STATE.TOS_BLOCK:
          return m.TOS_BLOCK;
        case o("WAWebSocketConstants").SOCKET_STATE.SMB_TOS_BLOCK:
          return m.SMB_TOS_BLOCK;
        case o("WAWebSocketConstants").SOCKET_STATE.UNLAUNCHED:
          return m.SYNCING;
        case o("WAWebSocketConstants").SOCKET_STATE.UNPAIRED_IDLE:
        case o("WAWebSocketConstants").SOCKET_STATE.UNPAIRED:
          return m.QR;
        case o("WAWebSocketConstants").SOCKET_STATE.OPENING:
          if (
            !r("WAWebNetworkStatus").online &&
            !o("WAWebSocketModel").Socket.hasSynced
          )
            return m.OFFLINE;
        default:
          return t ||
            o("WAWebSocketModel").Socket.stream ===
              o("WAWebSocketConstants").SOCKET_STREAM.CONNECTED
            ? m.MAIN
            : m.SYNCING;
      }
    }
    function v() {
      return Math.floor(window.performance.now());
    }
    ((l.StreamInfo = o("WAWebStreamTypes").StreamInfo),
      (l.StreamMode = m),
      (l.Stream = y));
  },
  98,
);
