__d(
  "WAWebWamLoginReporter",
  [
    "WALogger",
    "WAStorageEstimator",
    "WAWebChatCollection",
    "WAWebCmd",
    "WAWebCollectionConstants",
    "WAWebContactCollection",
    "WAWebEventEmitter",
    "WAWebMsgCollection",
    "WAWebNetworkType",
    "WAWebStreamModel",
    "WAWebWamQrCodeCount",
    "WAWebWebcLoginWamEvent",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u() {
      return Math.floor(window.performance.now());
    }
    var c = (function (t) {
        function n() {
          var e, n;
          return (
            (n = t.call(this) || this),
            (n.timings = {
              chatSync: void 0,
              contactSync: void 0,
              endSync: void 0,
              msgSync: void 0,
              startSync: void 0,
            }),
            (n.data = {
              webcPersistentLoginEnabled: !1,
              webcQrCodes: 0,
              webcSyncMessageCount: 0,
              webcSyncMessageSize: 0,
            }),
            (e = window.performance) != null && e.now
              ? (n.init(), n)
              : babelHelpers.assertThisInitialized(n)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.init = function () {
            ((this.timings.startSync =
              o("WAWebStreamModel").Stream.lastSyncStart),
              this.listenTo(
                o("WAWebStreamModel").Stream,
                "change:mode",
                this.changeStreamMode,
              ),
              this.listenTo(
                o("WAWebChatCollection").ChatCollection,
                o("WAWebCollectionConstants").COLLECTION_HAS_SYNCED,
                this._handleChatSync,
              ),
              this.listenTo(
                o("WAWebContactCollection").ContactCollection,
                o("WAWebCollectionConstants").COLLECTION_HAS_SYNCED,
                this._handleContactSync,
              ),
              this.listenTo(
                o("WAWebMsgCollection").MsgCollection,
                o("WAWebCollectionConstants").COLLECTION_HAS_SYNCED,
                this._handleMsgSync,
              ),
              this.listenTo(
                o("WAWebMsgCollection").MsgCollection,
                "handle:msg_history",
                this._handleMsgHistory,
              ));
          }),
          (a.changeStreamMode = function () {
            (o("WAWebStreamModel").Stream.mode ===
              o("WAWebStreamModel").StreamMode.SYNCING &&
              ((this.timings.startSync = u()),
              (this.data.webcPersistentLoginEnabled = !0)),
              o("WAWebStreamModel").Stream.mode ===
                o("WAWebStreamModel").StreamMode.MAIN &&
                ((this.timings.endSync = u()), this.maybeLogToWam()));
          }),
          (a._handleChatSync = function (t) {
            (t.timing != null
              ? (this.data.webcSyncChatT = t.timing)
              : (this.timings.chatSync = u()),
              (this.data.webcSyncChatCount = t.count),
              (this.data.webcSyncChatSize = 10),
              this.maybeLogToWam());
          }),
          (a._handleMsgSync = function (t) {
            (t &&
              ((this.timings.msgSync = u()),
              (this.data.webcSyncMessageCount += t.count)),
              this.maybeLogToWam());
          }),
          (a._handleContactSync = function (t) {
            (t.timing != null
              ? (this.data.webcSyncContactT = t.timing)
              : (this.timings.contactSync = u()),
              (this.data.webcSyncContactCount = t.count),
              this.maybeLogToWam());
          }),
          (a._handleMsgHistory = function (t) {
            ((this.data.webcSyncMessageSize += t.binarySize),
              (this.data.webcSyncMessageCount += t.count),
              this.timings.msgSync != null && (this.timings.msgSync = u()));
          }),
          (a.maybeLogToWam = function () {
            var t = this,
              n = this.timings,
              r = n.chatSync,
              a = n.contactSync,
              i = n.msgSync,
              l = r != null && Number.isFinite(r || this.data.webcSyncChatT),
              s = a != null && Number.isFinite(a || this.data.webcSyncContactT),
              u = Number.isFinite(i);
            !l ||
              !s ||
              !u ||
              this._commitPromise ||
              (this._commitPromise = o("WAStorageEstimator")
                .estimateStorage()
                .then(function (n) {
                  n.success
                    ? t._commitEvent(n.value)
                    : o("WALogger").WARN(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[wam] Error committing login event",
                          ])),
                      );
                })
                .then(function () {
                  return t.reset();
                }));
          }),
          (a._commitEvent = function (t) {
            var e = this.timings,
              n = e.chatSync,
              a = e.contactSync,
              i = e.endSync,
              l = e.msgSync,
              u = e.startSync,
              c = r("WAWebWamQrCodeCount").initialDisplayDate;
            if (
              c != null &&
              c !== 0 &&
              u != null &&
              i != null &&
              l != null &&
              n != null &&
              a != null &&
              Number.isFinite(c) &&
              Number.isFinite(u) &&
              Number.isFinite(i)
            ) {
              ((this.data.webcQrLoadT = c),
                (this.data.webcQrCodes = r("WAWebWamQrCodeCount").get()),
                (this.data.webcLoginT = u - c),
                (this.data.webcSyncT = i - u),
                (this.data.webcSyncMessageT = l - u),
                (this.data.webcSyncChatT == null ||
                  this.data.webcSyncChatT === 0) &&
                  (this.data.webcSyncChatT = n - u),
                (this.data.webcSyncContactT == null ||
                  this.data.webcSyncContactT === 0) &&
                  (this.data.webcSyncContactT = a - u),
                (this.data.webcBrowserNetworkType =
                  o("WAWebNetworkType").getEffectiveNetworkType()),
                t &&
                  ((this.data.webcBrowserStorageQuotaBytes = t.quota),
                  (this.data.webcBrowserStorageQuotaUsedBytes = t.usage)));
              var d = new (o("WAWebWebcLoginWamEvent").WebcLoginWamEvent)(
                this.data,
              );
              d.commit();
            } else
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "One or more of the login timings was not logged: ",
                  ])),
              );
          }),
          (a.reset = function () {
            (this.stopListening(),
              (this.data = {
                webcPersistentLoginEnabled: !1,
                webcQrCodes: 0,
                webcSyncMessageCount: 0,
                webcSyncMessageSize: 0,
              }),
              (this.timings = {
                chatSync: void 0,
                contactSync: void 0,
                endSync: void 0,
                msgSync: void 0,
                startSync: void 0,
              }),
              (this._commitPromise = void 0),
              this.listenToOnce(
                o("WAWebCmd").Cmd,
                "logout_from_bridge",
                this.init,
              ));
          }),
          n
        );
      })(r("WAWebEventEmitter")),
      d = function () {
        return new c();
      };
    l.initialize = d;
  },
  98,
);
