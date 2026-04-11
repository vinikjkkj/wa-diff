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
    "WAWebUserPrefsMultiDevice",
    "WAWebUserPrefsScreenLock",
    "WAWebWamEnumWebcStreamModeCode",
    "WAWebWamPageLoadReporter",
    "WAWebWebcPageResumeWamEvent",
    "WAWebWebcStreamModeChangeWamEvent",
    "asyncToGeneratorRuntime",
    "cr:17219",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = (e = n("cr:17219")) != null ? e : {},
      m = d.getWindowsBridge,
      p = n("$InternalEnum").Mirrored([
        "OFFLINE",
        "OPENING",
        "PAIRING",
        "SYNCING",
        "RESUMING",
        "CONNECTING",
        "NORMAL",
      ]),
      _ = n("$InternalEnum").Mirrored([
        "QR",
        "MAIN",
        "SYNCING",
        "OFFLINE",
        "CONFLICT",
        "PROXYBLOCK",
        "TOS_BLOCK",
        "SMB_TOS_BLOCK",
        "DEPRECATED_VERSION",
      ]),
      f = n("$InternalEnum").Mirrored(["SHOW", "OBSCURE", "HIDE"]),
      g = 18e3,
      h = 3e3,
      y = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.info = o("WAWebBaseModel").session(p.NORMAL)),
            (t.mode = o("WAWebBaseModel").session(_.SYNCING)),
            (t.obscurity = o("WAWebBaseModel").session(f.HIDE)),
            (t.needsUpdate = o("WAWebBaseModel").session()),
            (t.isHardRefresh = o("WAWebBaseModel").session(!1)),
            (t.lastSyncStart = o("WAWebBaseModel").session(E())),
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
            (t.displayInfo = o("WAWebBaseModel").derived(
              function () {
                return L(this.info, this.obscurity);
              },
              ["info", "obscurity"],
            )),
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
                (this.mode = _.QR),
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
                document.addEventListener(
                  "visibilitychange",
                  this.updateCouldForce,
                ),
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
            var e = S(),
              t = {
                info: e,
                mode: R(),
                phoneAuthed:
                  o("WAWebSocketModel").Socket.stream !==
                  o("WAWebSocketConstants").SOCKET_STREAM.DISCONNECTED,
              };
            if (e === p.NORMAL)
              (this.unobscureShiftTimer.cancel(), (t.obscurity = f.HIDE));
            else if (e === p.OFFLINE)
              (this.unobscureShiftTimer.cancel(), (t.obscurity = f.OBSCURE));
            else
              e: {
                var n = this.obscurity;
                if (n === f.HIDE) {
                  this.unobscureShiftTimer.onOrBefore(g);
                  break e;
                }
                if (n === f.OBSCURE) {
                  this.unobscureShiftTimer.onOrBefore(h);
                  break e;
                }
                if (n === f.SHOW) break e;
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    n,
                );
              }
            this.set(t);
          }),
          (a.unobscure = function () {
            this.obscurity = f.SHOW;
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
                m == null ||
                (e = m()) == null ||
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
            this.info === p.RESUMING &&
              (this.resumeCount++,
              new (o("WAWebWebcPageResumeWamEvent").WebcPageResumeWamEvent)({
                webcResumeCount: this.resumeCount,
              }).commit());
          }),
          (a.updateWamLog = function () {
            var e = this.info === p.NORMAL;
            (o("WAWebWamPageLoadReporter").streamInfoChange(this.info, 1, e),
              e && this.stopListening(this, "change:info", this.updateWamLog));
          }),
          (a.logModeChange = function () {
            (this.mode === _.SYNCING && (this.lastSyncStart = E()),
              new (o(
                "WAWebWebcStreamModeChangeWamEvent",
              ).WebcStreamModeChangeWamEvent)({
                webcStreamMode: C(this.mode),
              }).commit());
          }),
          t
        );
      })(o("WAWebBaseModel").BaseModel);
    y.Proxy = "stream";
    function C(e) {
      switch (e) {
        case _.QR:
          return o("WAWebWamEnumWebcStreamModeCode").WEBC_STREAM_MODE_CODE.QR;
        case _.MAIN:
          return o("WAWebWamEnumWebcStreamModeCode").WEBC_STREAM_MODE_CODE.MAIN;
        case _.SYNCING:
          return o("WAWebWamEnumWebcStreamModeCode").WEBC_STREAM_MODE_CODE
            .SYNCING;
        case _.OFFLINE:
          return o("WAWebWamEnumWebcStreamModeCode").WEBC_STREAM_MODE_CODE
            .OFFLINE;
        case _.CONFLICT:
          return o("WAWebWamEnumWebcStreamModeCode").WEBC_STREAM_MODE_CODE
            .CONFLICT;
        case _.PROXYBLOCK:
          return o("WAWebWamEnumWebcStreamModeCode").WEBC_STREAM_MODE_CODE
            .PROXYBLOCK;
        case _.DEPRECATED_VERSION:
          return o("WAWebWamEnumWebcStreamModeCode").WEBC_STREAM_MODE_CODE
            .DEPRECATED_VERSION;
        case _.TOS_BLOCK:
        case _.SMB_TOS_BLOCK:
          return o("WAWebWamEnumWebcStreamModeCode").WEBC_STREAM_MODE_CODE
            .TOS_BLOCK;
      }
    }
    var b = o("WAWebBaseModel").defineModel(y),
      v = new b();
    function S() {
      var e = !1;
      if (
        (e || r("gkx")("26256")) &&
        !r("WAWebNetworkStatus").online &&
        r("WAWebNetworkStatus").simulatedOfflineConditions
      )
        return p.OFFLINE;
      switch (o("WAWebSocketModel").Socket.state) {
        case o("WAWebSocketConstants").SOCKET_STATE.OPENING:
          return r("WAWebNetworkStatus").online ? p.OPENING : p.OFFLINE;
        case o("WAWebSocketConstants").SOCKET_STATE.PAIRING:
          return o("WAWebSocketModel").Socket.hasSynced
            ? p.RESUMING
            : p.PAIRING;
        case o("WAWebSocketConstants").SOCKET_STATE.CONNECTED:
          return o("WAWebSocketModel").Socket.stream !==
            o("WAWebSocketConstants").SOCKET_STREAM.CONNECTED
            ? o("WAWebSocketModel").Socket.hasSynced
              ? p.NORMAL
              : p.SYNCING
            : p.NORMAL;
        case o("WAWebSocketConstants").SOCKET_STATE.UNLAUNCHED:
        case o("WAWebSocketConstants").SOCKET_STATE.PROXYBLOCK:
        default:
          return p.NORMAL;
      }
    }
    function R() {
      var e = !1;
      if (
        ((e = o("WAWebUserPrefsMultiDevice").isRegistered()),
        !e &&
          o("WAWebSocketModel").Socket.state !==
            o("WAWebSocketConstants").SOCKET_STATE.PROXYBLOCK)
      )
        return _.QR;
      var t = o("WAWebSocketModel").Socket.hasSynced;
      if (t && e && o("WAWebBuildConstants").WINDOWS_OFFLINE) return _.MAIN;
      switch (o("WAWebSocketModel").Socket.state) {
        case o("WAWebSocketConstants").SOCKET_STATE.PROXYBLOCK:
          return _.PROXYBLOCK;
        case o("WAWebSocketConstants").SOCKET_STATE.CONFLICT:
          return _.CONFLICT;
        case o("WAWebSocketConstants").SOCKET_STATE.TOS_BLOCK:
          return _.TOS_BLOCK;
        case o("WAWebSocketConstants").SOCKET_STATE.SMB_TOS_BLOCK:
          return _.SMB_TOS_BLOCK;
        case o("WAWebSocketConstants").SOCKET_STATE.DEPRECATED_VERSION:
          return _.DEPRECATED_VERSION;
        case o("WAWebSocketConstants").SOCKET_STATE.UNLAUNCHED:
          return _.SYNCING;
        case o("WAWebSocketConstants").SOCKET_STATE.UNPAIRED_IDLE:
        case o("WAWebSocketConstants").SOCKET_STATE.UNPAIRED:
          return _.QR;
        case o("WAWebSocketConstants").SOCKET_STATE.OPENING:
          if (
            !r("WAWebNetworkStatus").online &&
            !o("WAWebSocketModel").Socket.hasSynced
          )
            return _.OFFLINE;
        default:
          return t ||
            o("WAWebSocketModel").Socket.stream ===
              o("WAWebSocketConstants").SOCKET_STREAM.CONNECTED
            ? _.MAIN
            : _.SYNCING;
      }
    }
    function L(e, t) {
      switch (t) {
        case f.SHOW:
          return e;
        case f.HIDE:
          return o("WAWebSocketModel").Socket.hasSynced
            ? p.NORMAL
            : p.CONNECTING;
        case f.OBSCURE:
          switch (e) {
            case p.OPENING:
            case p.PAIRING:
            case p.SYNCING:
            case p.RESUMING:
              return p.CONNECTING;
            default:
              return e;
          }
      }
      return (
        o("WALogger").WARN(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "Stream:unknown obscure level:",
            ])),
        ),
        e
      );
    }
    function E() {
      return Math.floor(window.performance.now());
    }
    ((l.StreamInfo = p), (l.StreamMode = _), (l.Stream = v));
  },
  98,
);
