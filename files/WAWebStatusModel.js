__d(
  "WAWebStatusModel",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = [
        o("WAWebCommonMsgUtils").EventType.DEFAULT,
        o("WAWebCommonMsgUtils").EventType.AMBIENT,
      ],
      d = 3600 * 24,
      m = 1e3,
      p = (function (t) {
        function a() {
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
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.initialize = function () {
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
                  c.includes(o("WAWebFrontendMsgGetters").getEventType(e)) &&
                  o("WAWebNotificationBackend").showStatusNotification(e);
              }));
          }),
          (i.isExpired = function () {
            return this.id.isPSA()
              ? o("WAWebStatusPSAUtils").isExpiredStatusPSA(
                  this.msgs.toArray(),
                  d,
                )
              : o("WATimeUtils").unixTime() - this.t > d;
          }),
          (i.setupStatusExpiration = function () {
            var e = this,
              t = this.msgs.at(0);
            if (
              t &&
              !(typeof this.expireTs == "number" && this.expireTs <= t.t)
            ) {
              var n = 1,
                a = t.t + d + n;
              a < o("WATimeUtils").unixTime()
                ? self.setTimeout(function () {
                    e.expireMsg();
                  })
                : ((this.expireTimer = r("WAWebAlarm").setGlobalTimeout(
                    this.expireMsg.bind(this),
                    a * m,
                    this.expireTimer,
                  )),
                  (this.expireTs = t.t));
            }
          }),
          (i.$Status$p_1 = function (t) {
            var e = this.msgs;
            (this.unreadCount > this.totalCount - 1 && this.unreadCount--,
              this.totalCount--,
              e.remove(t),
              t.delete());
          }),
          (i.expireMsg = function () {
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
              var n = t.t + d > o("WATimeUtils").unixTime();
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
          (i.expirePSAMsg = function () {
            var e = this,
              t = o("WAWebStatusPSAUtils").getPSACampaigns(this.msgs.toArray());
            (o("WAWebAppTracker").AppTracker.start(
              o("WAWebAppTracker").AppTrackerType.PurgeStatuses,
            ),
              this.msgs.forEach(function (n) {
                var r = n.campaignId;
                if (r != null) {
                  var a = o("WAWebStatusPSAUtils").isCampaignExpired(t[r], d);
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
          (i.isUnreadMessage = function (t) {
            if (t == null) return !1;
            var e = o("WAWebMsgModelUtils").getReadMsgKeys(this.msgs.toArray()),
              n =
                e.find(function (e) {
                  return e === t;
                }) == null;
            return n && this.readKeys[t] !== !0;
          }),
          (i.revokeMsgs = function (t) {
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
          (i.delete = function () {
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
          (i.onEmptyMRM = function () {
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
          (i.loadMore = function (t) {
            return (
              t === void 0 && (t = o("WAWebCollectionConstants").PAGE_SIZE),
              this.msgs.msgLoadState.noEarlierMsgs
                ? (u || (u = n("Promise"))).resolve()
                : this.msgs.msgLoadState.isLoadingEarlierMsgs
                  ? this.msgs.loadEarlierPromise
                  : ((this.msgs.msgLoadState.noEarlierMsgs = !0),
                    (u || (u = n("Promise"))).resolve())
            );
          }),
          (i.handleReadStatus = function (t) {
            var e = t.toString();
            this.readKeys[e] ||
              ((this.readKeys[e] = !0),
              this.unreadCount > 0 && this.unreadCount--);
          }),
          (i.sendReadStatus = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                var r = yield o("WAWebContactStatusBridge").sendReadStatus(
                  e,
                  t,
                  n,
                );
                r && this.handleReadStatus(e.id);
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.getCollection = function () {
            return o("WAWebStatusCollection").StatusCollection;
          }),
          (i.containsMessage = function (t) {
            return t == null
              ? !1
              : this.msgs.toArray().some(function (e) {
                  return e.id.toString() === t.toString();
                });
          }),
          a
        );
      })(r("WAWebSuperChatMsgs"));
    ((p.Proxy = "status"), (p.idClass = r("WAWebWid")));
    var _ = o("WAWebBaseModel").defineModel(p);
    l.default = _;
  },
  98,
);
