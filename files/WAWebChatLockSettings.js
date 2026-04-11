__d(
  "WAWebChatLockSettings",
  [
    "WAWebBaseModel",
    "WAWebChatLockUpdateDailyStats",
    "WAWebModelUtils",
    "WAWebUserPrefsChatLock",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.hideLockedChats = o("WAWebModelUtils").prop()),
          (t.secretCode = o("WAWebModelUtils").prop()),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.initialize = function () {
          var t = this;
          (e.prototype.initialize.call(this),
            this.updateDailyStats(),
            this.on("change", function () {
              t.updateDailyStats();
            }));
        }),
        (n.updateDailyStats = function () {
          o("WAWebChatLockUpdateDailyStats").updateChatLockDailyStats({
            secretCodeActive: this.secretCode != null,
            lockFolderHidden: this.hideLockedChats,
          });
        }),
        (n.updateAndSave = function (t) {
          (this.set(t),
            o("WAWebUserPrefsChatLock").saveChatLockSettingsToStorage({
              hideLockedChats: this.hideLockedChats,
              secretCode: this.secretCode,
            }));
        }),
        t
      );
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "chat_lock_settings";
    var s = o("WAWebBaseModel").defineModel(e);
    function u() {
      var e = o("WAWebUserPrefsChatLock").getChatLockSettingsFromStorage(),
        t = new s(e);
      return (
        o("WAWebChatLockUpdateDailyStats").updateChatLockDailyStats({
          secretCodeActive: t.secretCode != null,
          lockFolderHidden: t.hideLockedChats === !0,
        }),
        t
      );
    }
    var c;
    function d() {
      return (c == null && (c = u()), c);
    }
    l.getChatLockSettings = d;
  },
  98,
);
