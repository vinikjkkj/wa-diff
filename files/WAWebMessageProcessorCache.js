__d(
  "WAWebMessageProcessorCache",
  [
    "WALogger",
    "WANullthrows",
    "WAShiftTimer",
    "WAWebABProps",
    "WAWebDBCreateLidPnMappings",
    "WAWebDBReportingTokenUtils",
    "WAWebGetGroupAddressingMode",
    "WAWebGroupDatabaseJob",
    "WAWebHandleMessageTypes.flow",
    "WAWebHandleMsgCommon",
    "WAWebPromiseQueue",
    "WAWebSendOfflineDeliveryReceiptJob",
    "WAWebSignalProtocolStore",
    "WAWebSignalStorageUtils",
    "WAWebSignalStoreApi",
    "WAWebStoreMsgs",
    "WAWebWamEnumMismatchOriginType",
    "WAWebWidFactory",
    "cr:13546",
  ],
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
      y = (e = n("cr:13546")) != null ? e : {},
      C = y.handleAddressingModeMismatch;
    function b() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_message_processing_cache_size",
      );
    }
    function v() {
      return S() > 0;
    }
    function S() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_offline_message_processor_timeout_seconds",
      );
    }
    var R = (function () {
        function e() {
          var e = this;
          ((this.$1 = []),
            (this.$2 = []),
            (this.$3 = new (o("WAWebPromiseQueue").PromiseQueue)()),
            (this.$4 = 0),
            (this.$6 = new Map()),
            (this.$7 = !1),
            (this.$5 = new (o("WAShiftTimer").ShiftTimer)(function () {
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[message-cache] flushing cache due to timeout",
                  ])),
              ),
                e.createSnapshot());
            })));
        }
        var t = e.prototype;
        return (
          (t.size = function () {
            return Promise.resolve(this.$1.length);
          }),
          (t.checkpointQueueSize = function () {
            return Promise.resolve(this.$3.size());
          }),
          (t.checkpointQueueWait = function () {
            return this.$3.wait();
          }),
          (t.addMessages = function (t, n) {
            var e;
            (n === void 0 && (n = !1), (e = this.$1).push.apply(e, t));
            var r = this.$8();
            if (n) return ((this.$7 = !0), this.createSnapshot(), r);
            this.$7 = !1;
            var a = t.map(function (e) {
              var t, n, r, o;
              return e.msg != null
                ? "msg " +
                    ((t =
                      (n = e.msg) == null || (n = n.id) == null
                        ? void 0
                        : n.id) != null
                      ? t
                      : "")
                : "receipt " +
                    (((r = e.receiptInfo) == null ? void 0 : r.externalId) ||
                      ((o = e.duplicateMsgReceiptInfo) == null
                        ? void 0
                        : o.externalId) ||
                      "");
            });
            return (
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[message-cache] add len=",
                    " nextIdx=",
                    ": ",
                    "",
                  ])),
                this.$1.length,
                this.$4,
                a,
              ),
              this.$1.length >= b()
                ? (this.createSnapshot(), r)
                : (v() &&
                    !this.$5.isScheduled() &&
                    this.$5.onOrBefore(S() * 1e3),
                  r)
            );
          }),
          (t.addAdditionalInfo = function (t, n) {
            if ((n === void 0 && (n = !1), this.$2.push(t), n)) {
              var e = this.$2;
              ((this.$2 = []), this.$9(e));
            }
          }),
          (t.handleChangedAddressingMode = async function (t) {
            var e = new Map();
            t.forEach(function (t) {
              var n = t.msg;
              if (n != null && n.id.remote.isGroup()) {
                var r;
                ((n == null ? void 0 : n.groupAddressingMode) === "pn"
                  ? (r = o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE
                      .pn)
                  : (n == null ? void 0 : n.groupAddressingMode) === "lid" &&
                    (r = o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE
                      .lid),
                  r != null && e.set(n.id.remote.toString(), r));
              }
            });
            var n = Array.from(e.keys(), o("WAWebWidFactory").createWid),
              a = await o(
                "WAWebGetGroupAddressingMode",
              ).bulkGetGroupAddressingMode(n),
              i = [];
            for (var l of e.entries()) {
              var s = l[0],
                u = l[1];
              a.get(s) !== u && i.push(o("WAWebWidFactory").createWid(s));
            }
            (this.$7 ||
              (await o(
                "WAWebGroupDatabaseJob",
              ).bulkMarkGroupParticipantStaleJob(i)),
              await Promise.all(
                i.map(function (t) {
                  return C == null
                    ? void 0
                    : C(t, {
                        localAddressingMode: r("WANullthrows")(
                          a.get(t.toString()),
                          "missing local addressing mode for group",
                        ),
                        serverAddressingMode: r("WANullthrows")(
                          e.get(t.toString()),
                          "missing server addressing mode for group",
                        ),
                        mismatchOrigin: o("WAWebWamEnumMismatchOriginType")
                          .MISMATCH_ORIGIN_TYPE.INCOMING_GROUP_MESSAGE,
                      });
                }),
              ));
          }),
          (t.$8 = function () {
            var e = this,
              t = this.$4;
            if (!this.$6.has(t)) {
              var n,
                o = function (t) {};
              this.$6.set(t, {
                promise: new Promise(function (e, t) {
                  ((n = e), (o = t));
                }),
                markCheckpointDone: function (a) {
                  if ((e.$6.delete(t), a != null)) {
                    o(a);
                    return;
                  }
                  n();
                },
              });
            }
            return r("WANullthrows")(this.$6.get(t)).promise;
          }),
          (t.$10 = function (t) {
            var e = [];
            return (
              t.forEach(function (t) {
                var n = t.msg;
                n != null && e.push(n);
              }),
              o("WAWebStoreMsgs").storeMsgs(e)
            );
          }),
          (t.$9 = async function (t) {
            var e = t
              .filter(function (e) {
                return (
                  e.type ===
                  o("WAWebHandleMessageTypes.flow").MsgAdditionalInfoType
                    .ReportingInfo
                );
              })
              .map(function (e) {
                return e.data;
              });
            o("WAWebDBReportingTokenUtils").handleAddReportingInfos(e);
          }),
          (t.createSnapshot = function () {
            var e,
              t,
              n = this,
              r = this.$1,
              a = this.$2;
            ((this.$1 = []),
              (this.$2 = []),
              this.$5.isScheduled() && this.$5.cancel());
            var i = this.$4,
              l = i + r.length;
            if (
              ((this.$4 = l),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[message-cache] createSnapshot ",
                    "-",
                    ": ",
                    " messages/receipts",
                  ])),
                i,
                l,
                r.length,
              ),
              r.length !== 0)
            ) {
              var s =
                  (e =
                    (t = this.$6.get(i)) == null
                      ? void 0
                      : t.markCheckpointDone) != null
                    ? e
                    : function (e) {
                        o("WALogger")
                          .ERROR(
                            d ||
                              (d = babelHelpers.taggedTemplateLiteralLoose([
                                "MessageProcessorCache: missing doneFn",
                              ])),
                          )
                          .sendLogs("message-cache-missing-doneFn");
                      },
                u =
                  !this.$7 &&
                  o("WAWebABProps").getABPropConfigValue(
                    "web_anr_throttle_signal_snapshot_enabled",
                  ),
                y = u
                  ? o("WAWebSignalProtocolStore")
                      .getSignalProtocolStore()
                      .generateSnapshotThrottled()
                  : o("WAWebSignalProtocolStore")
                      .getSignalProtocolStore()
                      .generateSnapshot();
              (this.$3.enqueue(async function () {
                try {
                  (await Promise.all([
                    n.$10(r),
                    o("WAWebDBCreateLidPnMappings").flushLidPnMappingsToDb(),
                  ]),
                    o("WALogger").LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "[message-cache] createSnapshot ",
                          "-",
                          ": messages added to table",
                        ])),
                      i,
                      l,
                    ));
                  var e = await y;
                  (e != null &&
                    (await o("WAWebSignalStorageUtils")
                      .getStorage()
                      .lock(
                        [
                          "session-store",
                          "identity-store",
                          "prekey-store",
                          "senderkey-store",
                        ],
                        async function () {
                          var t;
                          await Promise.all([
                            (t = o(
                              "WAWebSignalStoreApi",
                            )).waSignalStore.bulkPutSession(e.sessionUpdate),
                            t.waSignalStore.bulkPutIdentityKeyWithRowId(
                              e.identityUpdate,
                            ),
                            t.waSignalStore.bulkPutSenderKey(e.senderKeyUpdate),
                            t.waSignalStore.bulkRemovePreKey(e.preKeyRemove),
                            t.waSignalStore.bulkRemoveSession(e.sessionRemove),
                            t.waSignalStore.bulkRemoveIdentity(
                              e.identityRemove,
                            ),
                          ]);
                        },
                      ),
                    o("WALogger").LOG(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "[message-cache] createSnapshot ",
                          "-",
                          ": signal stores updated",
                        ])),
                      i,
                      l,
                    )),
                    await o(
                      "WAWebSendOfflineDeliveryReceiptJob",
                    ).sendAggregateOfflineReceipts(r),
                    o("WALogger").LOG(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "[message-cache] createSnapshot ",
                          "-",
                          ": aggregated receipts sent",
                        ])),
                      i,
                      l,
                    ),
                    await n.$9(a),
                    o("WALogger").LOG(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "[message-cache] createSnapshot ",
                          "-",
                          ": additional info processed",
                        ])),
                      i,
                      l,
                    ));
                } catch (e) {
                  (o("WALogger").WARN(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "[message-cache] createSnapshot ",
                        "-",
                        ": failed: ",
                        "",
                      ])),
                    i,
                    l,
                    e,
                  ),
                    s(e));
                  return;
                }
                (o("WALogger").LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "[message-cache] before markCheckpointDone",
                    ])),
                ),
                  s());
              }),
                this.handleChangedAddressingMode(r));
            }
          }),
          e
        );
      })(),
      L = new R();
    l.messageProcessorCache = L;
  },
  98,
);
