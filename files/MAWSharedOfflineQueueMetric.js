__d(
  "MAWSharedOfflineQueueMetric",
  [
    "MAWInteractionTracing",
    "MAWMICInteractionTraceKey",
    "MWFBLogger",
    "MawMpsCop",
    "QPLFlow",
    "WAGlobals",
    "WATimeUtils",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = o("MWFBLogger").MWLogger().tags(["offline"]),
      d = (function () {
        function t(e, t, n) {
          ((this.$1 = 0),
            (this.$2 = 0),
            (this.$4 = 0),
            (this.$5 = 0),
            (this.$6 = 0),
            (this.$7 = 0),
            (this.$8 = 0),
            (this.$9 = { messages: 0, total: 0 }),
            this.$10(e),
            this.$11(),
            this.$12(t),
            this.$13(n));
        }
        var n = t.prototype;
        return (
          (n.$14 = function () {
            if (this.$3 != null) return this.$3;
            var e = o("QPLFlow").startQPLFlow(r("qpl")._(25306361, "5664"));
            return (
              (this.$6 = 0),
              (this.$5 = 0),
              (this.$4 = 0),
              (this.$8 = 0),
              (this.$7 = 0),
              (this.$3 = e),
              (this.$9 = { messages: 0, total: 0 }),
              (this.$2 = Math.round(
                o("WATimeUtils").performanceAbsoluteNow() / 1e3,
              )),
              e
            );
          }),
          (n.$12 = function (t) {
            var e = this;
            t.subscribe(function (t) {
              switch (t.type) {
                case "passive-mode-start": {
                  var n = e.$14();
                  n.addPoint("wa_passive_mode_start", {
                    int: { passiveModeAcks: t.count },
                  });
                  break;
                }
                case "passive-mode-end": {
                  var r;
                  (r = e.$3) == null || r.addPoint("wa_passive_mode_end");
                  break;
                }
                default: {
                  var o;
                  (t.type,
                    (o = e.$3) == null || o.addPoint("wa_passive_mode_fail"));
                }
              }
            });
          }),
          (n.$13 = function (t) {
            var e = this;
            t.subscribe(function (t) {
              switch (t.type) {
                case "new-message": {
                  if (t.commonMessageBase.offline == null) return;
                  e.$8 += 1;
                  break;
                }
              }
            });
          }),
          (n.$10 = function (n) {
            var t = this;
            n.subscribe(function (n) {
              switch (n.type) {
                case "offline-start": {
                  var a = t.$14();
                  (t.$1++,
                    (t.$2 = Math.round(
                      o("WATimeUtils").performanceAbsoluteNow() / 1e3,
                    )));
                  var i = n.offlineStats;
                  (r("MAWInteractionTracing").startTrace(
                    o("MAWMICInteractionTraceKey").getMICInteractionTraceKey(),
                    m(t.$1),
                    { annotations: { expectedCount: i.count } },
                  ),
                    a.addPoint("wa_client_infra_start", {
                      bool: {
                        waDanglingQueue: o("WAGlobals")
                          .getConfig()
                          .waDanglingQueue(),
                      },
                      int: {
                        expectedAppdata: i.appdata,
                        expectedCount: i.count,
                        expectedMessage: i.message,
                        expectedNotification: i.notification,
                        expectedReceipt: i.receipt,
                        offlineResumeCount: t.$1,
                      },
                    }),
                    (t.$9 = { messages: i.message, total: i.count }));
                  break;
                }
                case "offline-end": {
                  var l;
                  (l = t.$3) == null ||
                    l.addPoint("wa_client_infra_end", {
                      int: {
                        mailboxAgeSec: t.$4,
                        maxOffline: t.$5,
                        waDownloaded: t.$6,
                        waMessage: t.$8,
                      },
                    });
                  break;
                }
                case "offline-entity": {
                  t.$15(n.serverTs, n.offline);
                  break;
                }
                case "offline-processed": {
                  t.$7 += n.count;
                  break;
                }
                case "connection-lost": {
                  var s;
                  (c.INFO(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Connection Lost. Time taken: ",
                        " sec;\n          expected: ",
                        " with ",
                        " messages;\n          entities: ",
                        ";\n          processed: ",
                        ";\n          messages: ",
                        "",
                      ])),
                    o("WATimeUtils").performanceAbsoluteNow() / 1e3 - t.$2,
                    t.$9.total,
                    t.$9.messages,
                    t.$6,
                    t.$7,
                    t.$8,
                  ),
                    r("MAWInteractionTracing").finishTrace(
                      o(
                        "MAWMICInteractionTraceKey",
                      ).getMICInteractionTraceKey(),
                      m(t.$1),
                      {
                        annotations: { error: "connection-lost" },
                        isError: !0,
                      },
                    ),
                    (s = t.$3) == null ||
                      s.endFail("connection-lost", {
                        bool: { isConnectionLost: !0 },
                      }),
                    (t.$3 = null));
                  break;
                }
                default:
              }
            });
          }),
          (n.$11 = function () {
            var e = this;
            o("MawMpsCop")
              .mpsCop()
              .subscribe(function (t) {
                e.$16(t);
              });
          }),
          (n.$16 = function (t) {
            switch (t.type) {
              case "maw-infra-start": {
                var e;
                (e = this.$3) == null || e.addPoint("maw_infra_start");
                break;
              }
              case "maw-infra-end": {
                var n;
                if (
                  (r("MAWInteractionTracing").finishTrace(
                    o("MAWMICInteractionTraceKey").getMICInteractionTraceKey(),
                    m(this.$1),
                    { isError: !t.success },
                  ),
                  this.$3 == null)
                )
                  return;
                if (
                  ((n = this.$3) == null || n.addPoint("maw_infra_end"),
                  t.success)
                ) {
                  var a;
                  (c.INFO(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Completed. Time taken: ",
                        " sec;\n          expected: ",
                        " with ",
                        " messages;\n          entities: ",
                        ";\n          processed: ",
                        ";\n          messages: ",
                        "",
                      ])),
                    o("WATimeUtils").performanceAbsoluteNow() / 1e3 - this.$2,
                    this.$9.total,
                    this.$9.messages,
                    this.$6,
                    this.$7,
                    this.$8,
                  ),
                    (a = this.$3) == null || a.endSuccess());
                } else {
                  var i;
                  (c.INFO(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed. Time taken: ",
                        " sec;\n          expected: ",
                        " with ",
                        " messages;\n          entities: ",
                        ";\n          processed: ",
                        ";\n          messages: ",
                        "",
                      ])),
                    o("WATimeUtils").performanceAbsoluteNow() / 1e3 - this.$2,
                    this.$9.total,
                    this.$9.messages,
                    this.$6,
                    this.$7,
                    this.$8,
                  ),
                    (i = this.$3) == null || i.endFail("fail"));
                }
                this.$3 = null;
                break;
              }
              default:
            }
          }),
          (n.$15 = function (t, n) {
            (this.$6++,
              (this.$5 = Math.max(this.$5, n)),
              t != null && (this.$4 = this.$2 - t));
          }),
          t
        );
      })();
    function m(e) {
      return "offlineDrain:" + e;
    }
    var p;
    function _(e, t, n) {
      if (p != null) {
        var r = p;
        return (c.mustfix("Offline sync reported is inited twice"), r);
      }
      return ((p = new d(e, t, n)), p);
    }
    l.makeOfflineQueueMetric = _;
  },
  98,
);
