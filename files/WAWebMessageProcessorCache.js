__d(
  "WAWebMessageProcessorCache",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
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
      y,
      C = (e = n("cr:13546")) != null ? e : {},
      b = C.handleAddressingModeMismatch;
    function v() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_message_processing_cache_size",
      );
    }
    function S() {
      return R() > 0;
    }
    function R() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_offline_message_processor_timeout_seconds",
      );
    }
    var L = (function () {
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
            return (y || (y = n("Promise"))).resolve(this.$1.length);
          }),
          (t.checkpointQueueSize = function () {
            return (y || (y = n("Promise"))).resolve(this.$3.size());
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
              this.$1.length >= v()
                ? (this.createSnapshot(), r)
                : (S() &&
                    !this.$5.isScheduled() &&
                    this.$5.onOrBefore(R() * 1e3),
                  r)
            );
          }),
          (t.addAdditionalInfo = function (t, n) {
            if ((n === void 0 && (n = !1), this.$2.push(t), n)) {
              var e = this.$2;
              ((this.$2 = []), this.$9(e));
            }
          }),
          (t.handleChangedAddressingMode = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = new Map();
                e.forEach(function (e) {
                  var n = e.msg;
                  if (n != null && n.id.remote.isGroup()) {
                    var r;
                    ((n == null ? void 0 : n.groupAddressingMode) === "pn"
                      ? (r = o("WAWebHandleMsgCommon")
                          .STANZA_MSG_ADDRESSING_MODE.pn)
                      : (n == null ? void 0 : n.groupAddressingMode) ===
                          "lid" &&
                        (r = o("WAWebHandleMsgCommon")
                          .STANZA_MSG_ADDRESSING_MODE.lid),
                      r != null && t.set(n.id.remote.toString(), r));
                  }
                });
                var a = Array.from(t.keys(), o("WAWebWidFactory").createWid),
                  i = yield o(
                    "WAWebGetGroupAddressingMode",
                  ).bulkGetGroupAddressingMode(a),
                  l = [];
                for (var s of t.entries()) {
                  var u = s[0],
                    c = s[1];
                  i.get(u) !== c && l.push(o("WAWebWidFactory").createWid(u));
                }
                (this.$7 ||
                  (yield o(
                    "WAWebGroupDatabaseJob",
                  ).bulkMarkGroupParticipantStaleJob(l)),
                  yield (y || (y = n("Promise"))).all(
                    l.map(function (e) {
                      return b == null
                        ? void 0
                        : b(e, {
                            localAddressingMode: r("WANullthrows")(
                              i.get(e.toString()),
                              "missing local addressing mode for group",
                            ),
                            serverAddressingMode: r("WANullthrows")(
                              t.get(e.toString()),
                              "missing server addressing mode for group",
                            ),
                            mismatchOrigin: o("WAWebWamEnumMismatchOriginType")
                              .MISMATCH_ORIGIN_TYPE.INCOMING_GROUP_MESSAGE,
                          });
                    }),
                  ));
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.$8 = function () {
            var e = this,
              t = this.$4;
            if (!this.$6.has(t)) {
              var o,
                a = function (t) {};
              this.$6.set(t, {
                promise: new (y || (y = n("Promise")))(function (e, t) {
                  ((o = e), (a = t));
                }),
                markCheckpointDone: function (r) {
                  if ((e.$6.delete(t), r != null)) {
                    a(r);
                    return;
                  }
                  o();
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
          (t.$9 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = e
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
                o("WAWebDBReportingTokenUtils").handleAddReportingInfos(t);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.createSnapshot = function () {
            var e,
              t,
              r = this,
              a = this.$1,
              i = this.$2;
            ((this.$1 = []),
              (this.$2 = []),
              this.$5.isScheduled() && this.$5.cancel());
            var l = this.$4,
              s = l + a.length;
            if (
              ((this.$4 = s),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[message-cache] createSnapshot ",
                    "-",
                    ": ",
                    " messages/receipts",
                  ])),
                l,
                s,
                a.length,
              ),
              a.length !== 0)
            ) {
              var u =
                  (e =
                    (t = this.$6.get(l)) == null
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
                C = o("WAWebSignalProtocolStore")
                  .getSignalProtocolStore()
                  .generateSnapshot();
              (this.$3.enqueue(
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  try {
                    (yield (y || (y = n("Promise"))).all([
                      r.$10(a),
                      o("WAWebDBCreateLidPnMappings").flushLidPnMappingsToDb(),
                    ]),
                      o("WALogger").LOG(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "[message-cache] createSnapshot ",
                            "-",
                            ": messages added to table",
                          ])),
                        l,
                        s,
                      ),
                      C != null &&
                        (yield o("WAWebSignalStorageUtils")
                          .getStorage()
                          .lock(
                            [
                              "session-store",
                              "identity-store",
                              "prekey-store",
                              "senderkey-store",
                            ],
                            n("asyncToGeneratorRuntime").asyncToGenerator(
                              function* () {
                                yield (y || (y = n("Promise"))).all([
                                  o(
                                    "WAWebSignalStoreApi",
                                  ).waSignalStore.bulkPutSession(
                                    C.sessionUpdate,
                                  ),
                                  o(
                                    "WAWebSignalStoreApi",
                                  ).waSignalStore.bulkPutIdentityKeyWithRowId(
                                    C.identityUpdate,
                                  ),
                                  o(
                                    "WAWebSignalStoreApi",
                                  ).waSignalStore.bulkPutSenderKey(
                                    C.senderKeyUpdate,
                                  ),
                                  o(
                                    "WAWebSignalStoreApi",
                                  ).waSignalStore.bulkRemovePreKey(
                                    C.preKeyRemove,
                                  ),
                                  o(
                                    "WAWebSignalStoreApi",
                                  ).waSignalStore.bulkRemoveSession(
                                    C.sessionRemove,
                                  ),
                                  o(
                                    "WAWebSignalStoreApi",
                                  ).waSignalStore.bulkRemoveIdentity(
                                    C.identityRemove,
                                  ),
                                ]);
                              },
                            ),
                          ),
                        o("WALogger").LOG(
                          p ||
                            (p = babelHelpers.taggedTemplateLiteralLoose([
                              "[message-cache] createSnapshot ",
                              "-",
                              ": signal stores updated",
                            ])),
                          l,
                          s,
                        )),
                      yield o(
                        "WAWebSendOfflineDeliveryReceiptJob",
                      ).sendAggregateOfflineReceipts(a),
                      o("WALogger").LOG(
                        _ ||
                          (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "[message-cache] createSnapshot ",
                            "-",
                            ": aggregated receipts sent",
                          ])),
                        l,
                        s,
                      ),
                      yield r.$9(i),
                      o("WALogger").LOG(
                        f ||
                          (f = babelHelpers.taggedTemplateLiteralLoose([
                            "[message-cache] createSnapshot ",
                            "-",
                            ": additional info processed",
                          ])),
                        l,
                        s,
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
                      l,
                      s,
                      e,
                    ),
                      u(e));
                    return;
                  }
                  (o("WALogger").LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "[message-cache] before markCheckpointDone",
                      ])),
                  ),
                    u());
                }),
              ),
                this.handleChangedAddressingMode(a));
            }
          }),
          e
        );
      })(),
      E = new L();
    l.messageProcessorCache = E;
  },
  98,
);
