__d(
  "WAWebCallLogPreviewCounts",
  [
    "Promise",
    "WAAbortError",
    "WALogger",
    "WAPromiseDelays",
    "WAPromiseRaceAbort",
    "WAWebCallLogUtils",
    "WAWebChatCollection",
    "WAWebFrontendMsgGetters",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgModel",
    "WAWebMsgQueryUtils",
    "WAWebMsgType",
    "WAWebUIListener",
    "WAWebVoipCallsTabCallInfoUtils",
    "WAWebVoipCallsTabPanelManager",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 200,
      c = 2,
      d = 250,
      m = new Map(),
      p = (function () {
        function t() {
          var t = this;
          ((this.$1 = m),
            (this.$2 = []),
            (this.$3 = new Set()),
            (this.$4 = []),
            (this.$5 = null),
            (this.$6 = null),
            (this.$7 = 0),
            (this.$8 = !1),
            (this.getSnapshot = function () {
              return t.$1;
            }),
            (this.subscribe = function (e) {
              return (
                t.$3.add(e),
                t.$3.size === 1 && (t.$9(), t.$10()),
                function () {
                  if ((t.$3.delete(e), t.$3.size === 0)) {
                    var n;
                    (t.$4.forEach(function (e) {
                      return e.disengage();
                    }),
                      (t.$4 = []),
                      t.$7++,
                      (n = t.$6) == null || n.abort(),
                      (t.$2 = []),
                      (t.$1 = m));
                  }
                }
              );
            }),
            (this.$10 = function () {
              if ((t.$7++, t.$5 == null)) {
                var n = t.$7,
                  r = new AbortController();
                ((t.$6 = r),
                  (t.$5 = f(r.signal)
                    .then(function (e) {
                      n === t.$7 && ((t.$2 = e), t.$13());
                    })
                    .catch(function (t) {
                      r.signal.aborted ||
                        o("WALogger")
                          .ERROR(
                            e ||
                              (e = babelHelpers.taggedTemplateLiteralLoose([
                                "call-log-preview: failed to load call logs ",
                                "",
                              ])),
                            t,
                          )
                          .sendLogs("call-log-preview-load-failed");
                    })
                    .finally(function () {
                      ((t.$5 = null),
                        (t.$6 = null),
                        t.$3.size > 0 && n !== t.$7 && t.$10());
                    })));
              }
            }),
            (this.$11 = function () {
              var e = arguments.length <= 0 ? void 0 : arguments[0];
              e instanceof o("WAWebMsgModel").Msg &&
                e.type === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
                t.$10();
            }),
            (this.$12 = function () {
              var e = arguments.length <= 0 ? void 0 : arguments[0];
              e instanceof o("WAWebMsgModel").Msg &&
                e.type === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
                t.$13();
            }),
            (this.$13 = function () {
              t.$8 ||
                ((t.$8 = !0),
                queueMicrotask(function () {
                  ((t.$8 = !1), t.$3.size > 0 && t.$14());
                }));
            }));
        }
        var n = t.prototype;
        return (
          (n.$9 = function () {
            var e = this,
              t;
            ((this.$4 = [
              new (t = o("WAWebUIListener")).Listener(
                r("WAWebVoipCallsTabPanelManager"),
                "onWriteCallLogMessage",
                this.$10,
              ),
              new t.Listener(
                o("WAWebMsgCollection").MsgCollection,
                "collection_has_synced",
                this.$10,
              ),
              new t.Listener(
                o("WAWebMsgCollection").MsgCollection,
                "remove",
                this.$11,
              ),
              new t.Listener(
                o("WAWebMsgCollection").MsgCollection,
                "change:t",
                this.$11,
              ),
              new t.Listener(
                o("WAWebChatCollection").ChatCollection,
                "remove",
                this.$10,
              ),
            ].concat(
              [
                "callOutcome",
                "finalCallOutcome",
                "isVideoCall",
                "callSilenceReason",
                "subtype",
              ].map(function (t) {
                return new (o("WAWebUIListener").Listener)(
                  o("WAWebMsgCollection").MsgCollection,
                  "change:" + t,
                  e.$12,
                );
              }),
              o(
                "WAWebVoipCallsTabCallInfoUtils",
              ).CALLS_TAB_CALL_LOG_VISIBILITY_TRIGGERS.flatMap(function (t) {
                var n = t.delivery,
                  r = t.events,
                  a = t.source;
                return r.map(function (t) {
                  return new (o("WAWebUIListener").Listener)(
                    a(),
                    t,
                    n === "batchedCallLogs" ? e.$12 : e.$13,
                  );
                });
              }),
            )),
              this.$4.forEach(function (e) {
                return e.engage();
              }));
          }),
          (n.$14 = function () {
            var e = this;
            this.$2.forEach(function (e) {
              (o("WAWebMsgGetters").clearMsgGetterCacheFor(e),
                o("WAWebFrontendMsgGetters").clearFrontendMsgGetterCacheFor(e));
            });
            var t = new Map(),
              n = o("WAWebCallLogUtils").mergeCallRecords(
                this.$2.filter(
                  o("WAWebVoipCallsTabCallInfoUtils")
                    .getShouldShowInCallsTabCallLog,
                ),
              );
            (n.forEach(function (e) {
              var n = e.mergedMsgs;
              n.forEach(function (e) {
                return t.set(e.id.toString(), n.length);
              });
            }),
              !(
                t.size === this.$1.size &&
                Array.from(t).every(function (t) {
                  var n = t[0],
                    r = t[1];
                  return e.$1.get(n) === r;
                })
              ) &&
                ((this.$1 = t),
                this.$3.forEach(function (e) {
                  return e();
                })));
          }),
          t
        );
      })(),
      _ = new p();
    function f(e, t) {
      return (
        t === void 0 && (t = 0),
        e.aborted
          ? (s || (s = n("Promise"))).reject(o("WAAbortError").ABORT_ERROR)
          : r("WAPromiseRaceAbort")(
              o("WAWebMsgQueryUtils").getVoipCallLogMsgs(u, null),
              e,
            ).catch(
              (function () {
                var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (n) {
                    if (e.aborted || t >= c) throw n;
                    return (
                      yield o("WAPromiseDelays").delayMs(d * Math.pow(2, t), e),
                      f(e, t + 1)
                    );
                  },
                );
                return function (e) {
                  return r.apply(this, arguments);
                };
              })(),
            )
      );
    }
    l.previewCounts = _;
  },
  98,
);
