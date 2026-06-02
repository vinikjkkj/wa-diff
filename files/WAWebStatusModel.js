__d(
  "WAWebStatusModel",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebAlarm",
    "WAWebAppTracker",
    "WAWebBaseModel",
    "WAWebCollectionConstants",
    "WAWebCommonMsgUtils",
    "WAWebContactCollection",
    "WAWebContactStatusBridge",
    "WAWebFrontendMsgGetters",
    "WAWebFrontendStatusGetters",
    "WAWebMsgGetters",
    "WAWebMsgModelUtils",
    "WAWebNoop",
    "WAWebNotificationBackend",
    "WAWebStatusCollection",
    "WAWebStatusGatingUtils",
    "WAWebStatusGetters",
    "WAWebStatusPSAUtils",
    "WAWebSuperChatMsgs",
    "WAWebWid",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = [
        o("WAWebCommonMsgUtils").EventType.DEFAULT,
        o("WAWebCommonMsgUtils").EventType.AMBIENT,
      ],
      c = 3600 * 24,
      d = 1e3,
      m = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.id = o("WAWebBaseModel").prop()),
            (e.t = o("WAWebBaseModel").prop()),
            (e.unreadCount = o("WAWebBaseModel").prop(0)),
            (e.totalCount = o("WAWebBaseModel").prop(0)),
            (e.pic = o("WAWebBaseModel").prop()),
            (e.statusMsgs = o("WAWebBaseModel").prop(function () {
              return [];
            })),
            (e.isLoading = o("WAWebBaseModel").session(!1)),
            (e.isSyntheticFromMetadata = o("WAWebBaseModel").session(!1)),
            (e.readKeys = o("WAWebBaseModel").session(function () {
              return {};
            })),
            (e.contact = o("WAWebBaseModel").session()),
            (e.expireTimer = o("WAWebBaseModel").session()),
            (e.expireTs = o("WAWebBaseModel").session()),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.initialize = function () {
            var e = this;
            (t.prototype.initialize.call(this),
              this.addChild(
                "contact",
                o("WAWebContactCollection").ContactCollection.gadd(this.id),
              ),
              this.listenTo(this.msgs, "add bulk_add", function () {
                self.setTimeout(function () {
                  e.setupStatusExpiration();
                });
              }),
              this.listenTo(this, "change:msgsChanged", function () {
                var t = o("WAWebFrontendStatusGetters").getLastStatus(e);
                t && (e.t = t.t);
              }),
              this.listenTo(this.msgs, "remove", function (t) {
                t.isGroupStatus === !0 &&
                  ((e.totalCount = Math.max(0, e.totalCount - 1)),
                  t.ack &&
                    t.ack < o("WAWebAck").ACK.READ &&
                    (e.unreadCount = Math.max(0, e.unreadCount - 1)),
                  e.totalCount === 0 && e.onEmptyMRM());
              }),
              this.listenTo(this.msgs, "add", function (e) {
                o(
                  "WAWebStatusGatingUtils",
                ).isStatusPrivateMentionsReceiveEnabled() &&
                  !o("WAWebMsgGetters").getIsSentByMe(e) &&
                  o("WAWebMsgGetters").getStatusMentioned(e) &&
                  u.includes(o("WAWebFrontendMsgGetters").getEventType(e)) &&
                  o("WAWebNotificationBackend").showStatusNotification(e);
              }));
          }),
          (a.isExpired = function () {
            return this.id.isPSA()
              ? o("WAWebStatusPSAUtils").isExpiredStatusPSA(
                  this.msgs.toArray(),
                  c,
                )
              : o("WATimeUtils").unixTime() - this.t > c;
          }),
          (a.setupStatusExpiration = function () {
            var e = this,
              t = this.msgs.at(0);
            if (
              t &&
              !(typeof this.expireTs == "number" && this.expireTs <= t.t)
            ) {
              var n = 1,
                a = t.t + c + n;
              a < o("WATimeUtils").unixTime()
                ? self.setTimeout(function () {
                    e.expireMsg();
                  })
                : ((this.expireTimer = r("WAWebAlarm").setGlobalTimeout(
                    this.expireMsg.bind(this),
                    a * d,
                    this.expireTimer,
                  )),
                  (this.expireTs = t.t));
            }
          }),
          (a.$Status$p_1 = function (t) {
            var e = this.msgs;
            (this.unreadCount > this.totalCount - 1 && this.unreadCount--,
              this.totalCount--,
              e.remove(t),
              t.delete());
          }),
          (a.expireMsg = function () {
            if (this.id.isPSA()) {
              this.expirePSAMsg();
              return;
            }
            o("WAWebAppTracker").AppTracker.start(
              o("WAWebAppTracker").AppTrackerType.PurgeStatuses,
            );
            for (var e = this.msgs; e.length > 0; ) {
              var t = e.at(0);
              if (!t) break;
              var n = t.t + c > o("WATimeUtils").unixTime();
              if (n) break;
              this.$Status$p_1(t);
            }
            (r("gkx")("26258"),
              o("WAWebAppTracker").AppTracker.stop(
                o("WAWebAppTracker").AppTrackerType.PurgeStatuses,
              ),
              (this.expireTs = void 0),
              (this.expireTimer = void 0),
              this.totalCount !== 0 && this.setupStatusExpiration());
          }),
          (a.expirePSAMsg = function () {
            var e = this,
              t = o("WAWebStatusPSAUtils").getPSACampaigns(this.msgs.toArray());
            (o("WAWebAppTracker").AppTracker.start(
              o("WAWebAppTracker").AppTrackerType.PurgeStatuses,
            ),
              this.msgs.forEach(function (n) {
                var r = n.campaignId;
                if (r != null) {
                  var a = o("WAWebStatusPSAUtils").isCampaignExpired(t[r], c);
                  a && e.$Status$p_1(n);
                }
              }),
              r("gkx")("26258"),
              o("WAWebAppTracker").AppTracker.stop(
                o("WAWebAppTracker").AppTrackerType.PurgeStatuses,
              ),
              (this.expireTs = void 0),
              (this.expireTimer = void 0),
              this.totalCount !== 0 && this.setupStatusExpiration());
          }),
          (a.isUnreadMessage = function (t) {
            if (t == null) return !1;
            var e = o("WAWebMsgModelUtils").getReadMsgKeys(this.msgs.toArray()),
              n =
                e.find(function (e) {
                  return e === t;
                }) == null;
            return n && this.readKeys[t] !== !0;
          }),
          (a.revokeMsgs = function (t) {
            var e = this,
              n = new Set(t),
              r = this.msgs.filter(function (e) {
                return n.has(e.id.toString());
              });
            (r.forEach(function (t) {
              return e.$Status$p_1(t);
            }),
              this.totalCount === 0 &&
                ((this.expireTs = void 0), (this.expireTimer = void 0)));
          }),
          (a.delete = function () {
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Status deleted with total count: ",
                  "",
                ])),
              this.totalCount,
            ),
              t.prototype.delete.call(this),
              this.expireTimer &&
                r("WAWebAlarm").clearTimeout(this.expireTimer),
              this.expireTs != null && (this.expireTs = void 0),
              this.getCollection().remove(this.id),
              o("WAWebStatusGetters").clearStatusGetterCacheFor(this),
              o("WAWebFrontendStatusGetters").clearFrontendStatusGetterCacheFor(
                this,
              ));
          }),
          (a.onEmptyMRM = function () {
            var e = this;
            if (
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Status onEmptyMRM with total count: ",
                    ", noEarlierMsgs: ",
                    "",
                  ])),
                this.totalCount,
                this.msgs.msgLoadState.noEarlierMsgs ? "true" : "false",
              ),
              this.msgs.msgLoadState.noEarlierMsgs && this.totalCount === 0)
            ) {
              this.delete();
              return;
            }
            this.totalCount > 0 &&
              this.loadMore()
                .catch(r("WAWebNoop"))
                .finally(function () {
                  e.msgs.length || e.delete();
                });
          }),
          (a.loadMore = function (t) {
            return (
              t === void 0 && (t = o("WAWebCollectionConstants").PAGE_SIZE),
              this.msgs.msgLoadState.noEarlierMsgs
                ? Promise.resolve()
                : this.msgs.msgLoadState.isLoadingEarlierMsgs
                  ? this.msgs.loadEarlierPromise
                  : ((this.msgs.msgLoadState.noEarlierMsgs = !0),
                    Promise.resolve())
            );
          }),
          (a.handleReadStatus = function (t) {
            var e = t.toString();
            this.readKeys[e] ||
              ((this.readKeys[e] = !0),
              this.unreadCount > 0 && this.unreadCount--);
          }),
          (a.sendReadStatus = async function (t, n, r) {
            var e = await o("WAWebContactStatusBridge").sendReadStatus(t, n, r);
            e && this.handleReadStatus(t.id);
          }),
          (a.getCollection = function () {
            return o("WAWebStatusCollection").StatusCollection;
          }),
          (a.containsMessage = function (t) {
            return t == null
              ? !1
              : this.msgs.toArray().some(function (e) {
                  return e.id.toString() === t.toString();
                });
          }),
          n
        );
      })(r("WAWebSuperChatMsgs"));
    ((m.Proxy = "status"), (m.idClass = r("WAWebWid")));
    var p = o("WAWebBaseModel").defineModel(m);
    l.default = p;
  },
  98,
);
