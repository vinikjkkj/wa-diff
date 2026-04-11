__d(
  "WAWebChatCollection",
  [
    "WALogger",
    "WAWebBaseCollection",
    "WAWebChatComparator",
    "WAWebChatGetters",
    "WAWebChatLockUpdateDailyStats",
    "WAWebChatModel",
    "WAWebIdleTaskRunner",
    "WAWebLidMigrationUtils",
    "WAWebSendUnstarAllChatAction",
    "WAWebSocketConstants",
    "WAWebSocketModel",
    "lodash",
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
            (e._sortEnabled = !1),
            (e._viewOnceCleanupTaskQueue = new Set()),
            (e.setIndexes = function () {
              e.forEach(function (e, t) {
                e.initialIndex = t;
              });
            }),
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
            e.listenToOnce(e, "sort", r("lodash").debounce(e.setIndexes, 100)),
            e._scheduleViewOnceMediaCleanup(),
            e.listenTo(
              e,
              "change:isLocked",
              r("lodash").debounce(function () {
                o("WAWebChatLockUpdateDailyStats").updateChatLockDailyStats({
                  totalFolderChatsCount: e.filter(function (e) {
                    return e.isLocked;
                  }).length,
                });
              }, 500),
            ),
            e
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a._scheduleViewOnceMediaCleanup = function () {
            var e = this;
            (self.clearTimeout(this._viewOnceCleanupTimeout),
              (this._viewOnceCleanupTimeout = self.setTimeout(function () {
                o("WAWebIdleTaskRunner").IdleCallbackTasks.enqueue(function () {
                  (e._runViewOnceMediaCleanup(),
                    e._scheduleViewOnceMediaCleanup());
                });
              }, s)));
          }),
          (a._runViewOnceMediaCleanup = function () {
            var e = this;
            this.forEach(function (t) {
              var n = t.id;
              e._viewOnceCleanupTaskQueue.has(n) ||
                (o("WAWebIdleTaskRunner").IdleCallbackTasks.enqueue(
                  function () {
                    e._viewOnceCleanupTaskQueue.delete(n);
                    var t = e.get(n);
                    (t == null ? void 0 : t.active) === !1 &&
                      t.deregisterExpiredViewOnceBulkMessages(t.msgs);
                  },
                ),
                e._viewOnceCleanupTaskQueue.add(n));
            });
          }),
          (a.getUnreadCount = function () {
            return this.countWhere(function (e) {
              return e.showUnreadInTitle;
            });
          }),
          (a.enableSortListener = function (t) {
            this._sortEnabled ||
              (this.listenTo(
                this,
                "change:t change:pin change:id change:isLocked change:endOfHistoryTransferType change:isParentGroup change:msgs change:createdLocally change:msgsLength",
                this.sort,
              ),
              t === !0 && this.sort(),
              (this._sortEnabled = !0));
          }),
          (a.disableSortListener = function () {
            this._sortEnabled &&
              (this.stopListening(null, null, this.sort),
              (this._sortEnabled = !1));
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
          (a.unstarAllMessages = function (t, n) {
            return o("WAWebSendUnstarAllChatAction").unstarAllMessages(t, n);
          }),
          (a.hasAnyUnreadSinceGivenTimestamp = function (t) {
            return this.length === 0
              ? !1
              : this.some(function (e) {
                  var n,
                    r = (n = e.t) != null ? n : 0;
                  return o("WAWebChatGetters").getHasUnread(e) && r > t;
                });
          }),
          (a.delete = function () {
            (t.prototype.delete.call(this),
              this.listenToOnce(
                this,
                "sort",
                r("lodash").debounce(this.setIndexes, 100),
              ));
          }),
          n
        );
      })(o("WAWebBaseCollection").BaseCollection);
    ((u.model = o("WAWebChatModel").Chat),
      (u.comparator = r("WAWebChatComparator")));
    var c = new u();
    ((l.ChatCollectionImpl = u), (l.ChatCollection = c));
  },
  98,
);
