__d(
  "WAWebPresenceCollection",
  [
    "WAWebChatCollection",
    "WAWebContactPresenceBridge",
    "WAWebPresenceChatAction",
    "WAWebPresenceModel",
    "WAWebStaleBaseCollection",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, a = arguments.length, i = new Array(a), l = 0; l < a; l++)
          i[l] = arguments[l];
        return (
          (t = e.call.apply(e, [this].concat(i)) || this),
          (t.findImpl = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var n = t.gadd(e);
                return !n.isUser ||
                  r("WAWebWid").isServer(e) ||
                  r("WAWebWid").isPSA(e) ||
                  r("WAWebWid").isFbidBot(e) ||
                  o("WAWebUserPrefsMeUser").isMeAccount(n.id)
                  ? { id: e }
                  : (yield t._subscribe(e), { id: e });
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var a = t.prototype;
      return (
        (a._subscribe = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = o("WAWebChatCollection").ChatCollection.get(e);
            if (t) {
              var n = o("WAWebPresenceChatAction").getChatIdentifier(t),
                r = t == null ? void 0 : t.getTcToken();
              yield o("WAWebContactPresenceBridge").subscribePresence(n, r);
            }
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.reSubscribeWhenActive = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = this.get(e);
            t == null || t.isSubscribed === !1 || (yield this._subscribe(e));
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.clearAllPresence = function () {
          this.forEach(function (e) {
            (e.reset(), e.set({ stale: !0, isSubscribed: !1 }));
          });
        }),
        t
      );
    })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    e.model = o("WAWebPresenceModel").Presence;
    var s = new e();
    l.PresenceCollection = s;
  },
  98,
);
