__d(
  "WAWebChatCollection",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebBaseCollection",
    "WAWebBizBroadcastProOnboardingStatus",
    "WAWebChatComparator",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebChatLockUpdateDailyStats",
    "WAWebChatModel",
    "WAWebDebounce",
    "WAWebIdleTaskRunner",
    "WAWebL10N",
    "WAWebLidMigrationUtils",
    "WAWebSocketConstants",
    "WAWebSocketModel",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 18e5,
      u = (function (t) {
        function n() {
          var e;
          return (
            (e = t.call(this) || this),
            (e.notSpam = {}),
            (e.promises = { sendUnstarAll: null }),
            (e.$ChatCollectionImpl$p_1 = !1),
            (e.$ChatCollectionImpl$p_2 = !1),
            (e.$ChatCollectionImpl$p_4 = new Set()),
            (e.setIndexes = function () {
              e.forEach(function (e, t) {
                e.initialIndex = t;
              });
            }),
            o(
              "WAWebBizBroadcastProOnboardingStatus",
            ).bizBroadcastProNuxStateEmitter.on("change", function () {
              e.forEach(d);
            }),
            e.on("add", d),
            e.enableSortListener(),
            e.listenTo(
              o("WAWebSocketModel").Socket,
              "change:stream",
              function () {
                o("WAWebSocketModel").Socket.stream ===
                  o("WAWebSocketConstants").SOCKET_STREAM.RESUMING &&
                  e.forEach(function (e) {
                    e.pendingMsgs = !1;
                  });
              },
            ),
            e.listenToOnce(e, "sort", r("WAWebDebounce")(e.setIndexes, 100)),
            e.$ChatCollectionImpl$p_5(),
            e.listenTo(
              e,
              "change:isLocked",
              r("WAWebDebounce")(function () {
                o("WAWebChatLockUpdateDailyStats").updateChatLockDailyStats({
                  totalFolderChatsCount: e.countWhere(function (e) {
                    return e.isLocked;
                  }),
                });
              }, 500),
            ),
            e
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.$ChatCollectionImpl$p_5 = function () {
            var e = this;
            (self.clearTimeout(this.$ChatCollectionImpl$p_3),
              (this.$ChatCollectionImpl$p_3 = self.setTimeout(function () {
                o("WAWebIdleTaskRunner").IdleCallbackTasks.enqueue(function () {
                  (e.$ChatCollectionImpl$p_6(), e.$ChatCollectionImpl$p_5());
                });
              }, s)));
          }),
          (a.$ChatCollectionImpl$p_6 = function () {
            var e = this;
            this.forEach(function (t) {
              var n = t.id;
              e.$ChatCollectionImpl$p_4.has(n) ||
                (o("WAWebIdleTaskRunner").IdleCallbackTasks.enqueue(
                  function () {
                    e.$ChatCollectionImpl$p_4.delete(n);
                    var t = e.get(n);
                    (t == null ? void 0 : t.active) === !1 &&
                      t.deregisterExpiredViewOnceBulkMessages(t.msgs);
                  },
                ),
                e.$ChatCollectionImpl$p_4.add(n));
            });
          }),
          (a.getUnreadCount = function () {
            return this.countWhere(function (e) {
              return e.showUnreadInTitle;
            });
          }),
          (a.add = function (n, a) {
            var e = this,
              i = t.prototype.add.call(this, n, a);
            return (
              !this.$ChatCollectionImpl$p_1 &&
                o("WAWebABProps").getABPropConfigValue("web_memlab_fixes_3") &&
                ((this.$ChatCollectionImpl$p_1 = !0),
                this.listenTo(r("WAWebL10N"), "locale_change", function () {
                  e.forEach(function (e) {
                    o("WAWebChatGroupUtils").updateTitle(e);
                  });
                })),
              i
            );
          }),
          (a.enableSortListener = function (t) {
            this.$ChatCollectionImpl$p_2 ||
              (this.listenTo(
                this,
                "change:t change:pin change:id change:isLocked change:endOfHistoryTransferType change:isParentGroup change:msgs change:createdLocally change:msgsLength change:bbProStatus",
                this.sort,
              ),
              t === !0 && this.sort(),
              (this.$ChatCollectionImpl$p_2 = !0));
          }),
          (a.disableSortListener = function () {
            this.$ChatCollectionImpl$p_2 &&
              (this.stopListening(null, null, this.sort),
              (this.$ChatCollectionImpl$p_2 = !1));
          }),
          (a.getActive = function () {
            var t = this.filter(function (e) {
              return e.active;
            });
            return (
              t.length > 1 &&
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "ChatCollection:getActive more than one active chat",
                      ])),
                  )
                  .sendLogs("more-than-one-active-chat-in-chat-collection"),
              t[0]
            );
          }),
          (a.getChatByAccountLid = function (t) {
            var e = this.get(t);
            if (e) return e;
            var n = o("WAWebLidMigrationUtils").toPn(t),
              r = n ? this.get(n) : null;
            return t.equals(r == null ? void 0 : r.accountLid) ? r : null;
          }),
          (a.getLatestChatForWid = function (t) {
            var e = o("WAWebLidMigrationUtils").shouldHaveAccountLid(t)
              ? o("WAWebLidMigrationUtils").toLid(t)
              : null;
            return e != null ? c.getChatByAccountLid(e) : c.get(t);
          }),
          (a.delete = function () {
            (t.prototype.delete.call(this),
              this.listenToOnce(
                this,
                "sort",
                r("WAWebDebounce")(this.setIndexes, 100),
              ));
          }),
          n
        );
      })(o("WAWebBaseCollection").BaseCollection);
    ((u.model = o("WAWebChatModel").Chat),
      (u.comparator = r("WAWebChatComparator")));
    var c = new u();
    function d(e) {
      var t = o(
        "WAWebBizBroadcastProOnboardingStatus",
      ).getBizBroadcastProNuxOnboardingStatus();
      t != null &&
        o("WAWebChatGetters").getIsBroadcast(e) &&
        e.bbProStatus !== t &&
        (e.bbProStatus = t);
    }
    ((l.ChatCollectionImpl = u), (l.ChatCollection = c));
  },
  98,
);
