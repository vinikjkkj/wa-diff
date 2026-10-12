__d(
  "DGWStreamFactory",
  ["DGWStreamGroupHandler", "Promise", "asyncToGeneratorRuntime", "uuidv4"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "realtime",
      u = 1e4,
      c = null,
      d = (function () {
        function t(e) {
          ((this.$1 = e), (this.$2 = {}));
        }
        t.get = function (n) {
          return (c == null && (c = new t(n)), c);
        };
        var o = t.prototype;
        return (
          (o.$3 = function (t) {
            this.$2[t] = {
              dgwStreamGroup: null,
              activeStreamCount: 0,
              retired: !1,
              multiStreamGroupLoggingId: null,
              multiStreamGroupPriorStreamCountGuess: 0,
              authType: null,
            };
          }),
          (o.refreshStreamGroup = function (t) {
            var e = this.$2[t];
            (this.$3(t), e != null && ((e.retired = !0), this.$4(e)));
          }),
          (o.$4 = function (t) {
            if (t.retired && t.activeStreamCount === 0) {
              var e = t.dgwStreamGroup;
              ((t.dgwStreamGroup = null), e == null || e.close());
            }
          }),
          (o.$5 = function (t) {
            var e = t.overrideUrl,
              n = t.serviceId;
            return e != null ? n + ":" + e : n;
          }),
          (o.getStreamGroupLoggingId = function (t) {
            var e;
            return (
              t === void 0 && (t = null),
              (e = this.$2[t != null ? t : s]) == null
                ? void 0
                : e.multiStreamGroupLoggingId
            );
          }),
          (o.guessStreamGroupPriorStreamCount = function (t) {
            var e;
            return (
              t === void 0 && (t = null),
              ((e = this.$2[t != null ? t : s]) == null
                ? void 0
                : e.multiStreamGroupPriorStreamCountGuess) || 0
            );
          }),
          (o.establishStream = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, o, a) {
                var i = this,
                  l = a.serviceId == null ? s : a.serviceId,
                  c = this.$5({ serviceId: l, overrideUrl: a.overrideUrl }),
                  d = this.$2[c],
                  m = d == null ? void 0 : d.dgwStreamGroup,
                  p = d == null ? void 0 : d.authType,
                  _ = a.authType,
                  f = m != null && p !== _;
                if (m == null || !m.canCreateGroupedStream() || f) {
                  var g = {
                    deviceId: a.deviceId,
                    serviceId: l,
                    disableFalcoLogging: a.disableFalcoLogging,
                    streamGroupAppHeaders: { "stream-group": "group1" },
                    authToken: a.authToken,
                    authType: a.authType,
                  };
                  (a.overrideUrl != null && (g.overrideUrl = a.overrideUrl),
                    (g.keepAliveMs = u),
                    this.$1.get_log_dgw_streamgroup() &&
                      (g.loggingId = r("uuidv4")()));
                  try {
                    ((m = this.$1.dgw_client_factory().createStreamGroup(
                      new (r("DGWStreamGroupHandler"))(
                        function () {
                          var e;
                          ((e = i.$2[c]) == null
                            ? void 0
                            : e.dgwStreamGroup) === m && i.$3(c);
                        },
                        function () {
                          var e;
                          ((e = i.$2[c]) == null
                            ? void 0
                            : e.dgwStreamGroup) === m && i.$3(c);
                        },
                        function () {
                          var e;
                          ((e = i.$2[c]) == null
                            ? void 0
                            : e.dgwStreamGroup) === m && i.$3(c);
                        },
                      ),
                      g,
                    )),
                      (this.$2[c] = {
                        dgwStreamGroup: m,
                        activeStreamCount: 0,
                        retired: !1,
                        multiStreamGroupLoggingId: g.loggingId,
                        multiStreamGroupPriorStreamCountGuess: 0,
                        authType: a.authType,
                      }));
                  } catch (t) {
                    return (e || (e = n("Promise"))).reject(t);
                  }
                }
                this.$2[c].multiStreamGroupPriorStreamCountGuess++;
                var h = this.$2[c];
                h.activeStreamCount++;
                var y = !1,
                  C = function () {
                    y || ((y = !0), h.activeStreamCount--, i.$4(h));
                  };
                try {
                  return yield m.establishStream(
                    {
                      loggingId: a.loggingId,
                      disableFalcoLogging: a.disableFalcoLogging,
                      groupedStreamHeaders: t,
                    },
                    {
                      onClose: function (t) {
                        (C(), o.onClose(t));
                      },
                      onError: function (t) {
                        (C(), o.onError(t));
                      },
                      onDataReceived: function (t) {
                        return o.onDataReceived(t);
                      },
                      onStreamMustDrain: function (t, n) {
                        return o.onStreamMustDrain(t, n);
                      },
                      onServerHasFinishedSendingData: function (t) {
                        return o.onServerHasFinishedSendingData(t);
                      },
                    },
                  );
                } catch (e) {
                  throw (C(), e);
                }
              },
            );
            function o(e, n, r) {
              return t.apply(this, arguments);
            }
            return o;
          })()),
          t
        );
      })();
    l.default = d;
  },
  98,
);
