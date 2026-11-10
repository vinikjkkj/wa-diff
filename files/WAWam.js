__d(
  "WAWam",
  ["Promise", "WALogger", "WAPromiseEach", "WAShiftTimer", "WAWamBuffer"],
  function (t, n, r, o, a, i, l) {
    "use strict";
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
      C = 65536,
      b = 300 * 1e3,
      v = 3e3,
      S = 1,
      R = 2,
      L = 6005,
      E = 113760892,
      k = 0,
      I = "none",
      T = {
        putBuffer: function (t, r, o) {
          return (y || (y = n("Promise"))).resolve();
        },
      },
      D = (function () {
        function t(t) {
          var n = this;
          ((this.$2 = []),
            (this.$3 = new Map()),
            (this.$4 = !1),
            (this.$5 = new Map()),
            (this.$8 = -1),
            (this.$9 = T),
            (this.$10 = null),
            (this.deinitialize = function () {
              ((n.$4 = !1),
                (n.$2 = []),
                n.$3.clear(),
                (n.$5 = new Map()),
                (n.$8 = -1),
                (n.$9 = T),
                n.serializePending.cancel(),
                n.finalizeBuffers.cancel());
            }),
            (this.enqueueEvent = function (e, t, r, o, a, i) {
              var l = S;
              (n.$2.push({
                type: l,
                id: e,
                commitTime: t,
                psIdIntValue: r,
                weight: a,
                fields: o,
                resolve: i,
              }),
                n.$4 && n.serializePending.onOrBefore(v));
            }),
            (this.enqueueAttributesUpdate = function (t) {
              var r = { type: R, delta: [] };
              (t.forEach(function (e, t) {
                e !== void 0 && r.delta.push([t, e]);
              }),
                r.delta.length > 0 &&
                  (o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "WAM: Enqueued ",
                        " attribute keys for update",
                      ])),
                    r.delta.length,
                  ),
                  n.$2.push(r)));
            }),
            (this.finalizeBuffers = new (o("WAShiftTimer").ShiftTimer)(
              function () {
                n.finalizeBuffers__INTERNAL();
              },
            )),
            (this.serializePending = new (o("WAShiftTimer").ShiftTimer)(
              function () {
                n.serializePending__INTERNAL().catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "WAM: Failed to serialize pending events: ",
                          "",
                        ])),
                      e,
                    )
                    .sendLogs("wam-serializePending");
                });
              },
            )),
            (this.forceSerializePending = function () {
              n.$4 && n.$11() && n.serializePending.forceRunNow();
            }),
            (this.$1 = t));
        }
        var n = t.prototype;
        return (
          (n.initialize = function (t, n, r, a) {
            if (this.$4) {
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "WAM: Failed to initialize already initialized WAM",
                    ])),
                )
                .sendLogs("wam-initialize");
              return;
            }
            ((this.$7 = a),
              (this.$8 = t),
              (this.$9 = r),
              (this.$10 = n),
              this.$11() && this.serializePending.forceRunNow(),
              (this.$4 = !0),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "WAM: Initialized with stream id ",
                    "",
                  ])),
                this.$8,
              ));
          }),
          (n.finalizeBuffers__INTERNAL = function () {
            (this.$5.forEach(function (e) {
              e.finalize();
            }),
              this.$5.size > 0 && this.serializePending.onOrBefore(v));
          }),
          (n.$12 = function (t) {
            var e;
            return (e = this.$7) != null && e.multipleSequences
              ? t === k
                ? "null-psid"
                : t
              : "regular";
          }),
          (n.$13 = function (t) {
            var e = this.$5.get(t);
            if (e) return e;
            var n = this.$12(t);
            if (this.$10 == null) {
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "WAM: Sequence number generator not initialised for channel ",
                      "",
                    ])),
                  this.$1,
                )
                .sendLogs("wam-serializePending");
              return;
            }
            var r = this.$10(n);
            if (
              ((e = new (o("WAWamBuffer").WamBuffer)(
                this.$1,
                this.$8,
                r,
                this.$3,
              )),
              this.$5.set(t, e),
              t !== "regular")
            )
              if (this.$6 == null)
                o("WALogger")
                  .ERROR(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "WAM: Tried to create a private buffer without setting private stats ids",
                      ])),
                  )
                  .sendLogs("wam-serializePending");
              else {
                var a = t === k ? I : this.$6.get(t);
                a == null
                  ? o("WALogger")
                      .ERROR(
                        p ||
                          (p = babelHelpers.taggedTemplateLiteralLoose([
                            "WAM: Tried to create a private buffer without setting private stats id",
                          ])),
                      )
                      .sendLogs("wam-serializePending")
                  : e.writeGlobal(L, a);
              }
            return e;
          }),
          (n.serializePending__INTERNAL = function () {
            var e = this,
              t = [];
            this.finalizeBuffers.onOrBefore(b);
            var n = new Map(),
              r = -1;
            this.$2.forEach(function (a, i) {
              if (a.type === S) {
                var l = !0;
                n.forEach(function (e) {
                  o("WAWamBuffer").canWriteGlobal(e) || (l = !1);
                });
                var s = o("WAWamBuffer").canWriteEvent(a.fields);
                if (s && l) {
                  var u;
                  switch (e.$1) {
                    case "regular":
                    case "realtime": {
                      u = e.$13("regular");
                      break;
                    }
                    default:
                      (e.$1,
                        a.psIdIntValue == null
                          ? o("WALogger")
                              .ERROR(
                                _ ||
                                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                                    "A WAM event in channel private was dropped before serialization. Reason: missing psIdIntValue in the event payload",
                                  ])),
                              )
                              .sendLogs("wam-serializePending")
                          : (u = e.$13(a.psIdIntValue)));
                  }
                  u != null &&
                    (n.forEach(function (t, n) {
                      var r = e.$3.get(n);
                      (r === void 0 || r !== t) &&
                        (e.$5.forEach(function (e) {
                          return e.writeGlobal(n, t);
                        }),
                        e.$3.set(n, t));
                    }),
                    n.clear(),
                    u.writeEvent(a.commitTime, a.id, a.fields, a.weight));
                } else
                  o("WALogger").WARN(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "A WAM event in channel ",
                        " was dropped before serialization. Event correct: ",
                        ", pending attributes correct: ",
                        "",
                      ])),
                    e.$1,
                    s,
                    l,
                  );
                (a.resolve != null && t.push(a.resolve), (r = i));
              } else {
                a.type;
                for (var c = 0; c < a.delta.length; ++c) {
                  var d = a.delta[c],
                    m = d[0],
                    p = d[1];
                  n.set(m, p);
                }
              }
            });
            var a = !1;
            this.$5.forEach(function (e) {
              (e.isFinalized() || e.getSize() > C) && (a = !0);
            });
            var i = [];
            this.$5.forEach(function (t, n) {
              t.hasEvents()
                ? i.push([t.getKey(), t.peek(), e.$12(n)])
                : o("WALogger").WARN(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "Skipping putting buffer to sink, as it does not contain any events",
                      ])),
                  );
            });
            var l = o("WAPromiseEach")
              .promiseEach(i, function (t) {
                var n = t[0],
                  r = t[1],
                  o = t[2];
                return e.$9.putBuffer(n, r, a, o);
              })
              .then(function () {
                t.forEach(function (e) {
                  return void e();
                });
              });
            return (
              (this.$2 = this.$2.slice(r + 1)),
              a && ((this.$5 = new Map()), this.finalizeBuffers.cancel()),
              l
            );
          }),
          (n.$11 = function () {
            return (
              this.$2.length > 0 &&
              this.$2.some(function (e) {
                return e.type === S;
              })
            );
          }),
          (n.isInitialized = function () {
            return this.$4;
          }),
          (n.getStreamId = function () {
            return this.$8;
          }),
          (n.getPendingActions = function () {
            return this.$2;
          }),
          (n.getBuffers__INTERNAL = function () {
            return this.$5;
          }),
          (n.getGlobals__INTERNAL = function () {
            return this.$3;
          }),
          (n.setGlobals__INTERNAL = function (t) {
            this.$3 = t;
          }),
          (n.getSink__INTERNAL = function () {
            return this.$9;
          }),
          (n.updatePrivateStatsIds = function (t) {
            if (this.$1 !== "private") {
              o("WALogger")
                .ERROR(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "WAM: Tried to set private stats ids on a non-private channel",
                    ])),
                )
                .sendLogs("wam-updatePrivateStatsIds");
              return;
            }
            this.$6 = t;
          }),
          t
        );
      })();
    ((l.PRIVATE_STATS_DEFAULT_PS_ID_KEY_HASH_INT = E), (l.Wam = D));
  },
  98,
);
