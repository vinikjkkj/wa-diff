__d(
  "DGWStreamFactory",
  ["DGWStreamGroupHandler", "Promise", "uuidv4"],
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
              multiStreamGroupLoggingId: null,
              multiStreamGroupPriorStreamCountGuess: 0,
              authType: null,
            };
          }),
          (o.$4 = function (t) {
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
          (o.establishStream = function (o, a, i) {
            var t = this,
              l = i.serviceId == null ? s : i.serviceId,
              c = this.$4({ serviceId: l, overrideUrl: i.overrideUrl }),
              d = this.$2[c],
              m = d == null ? void 0 : d.dgwStreamGroup,
              p = d == null ? void 0 : d.authType,
              _ = i.authType,
              f = m != null && p !== _;
            if (m == null || !m.canCreateGroupedStream() || f) {
              var g = {
                deviceId: i.deviceId,
                serviceId: l,
                disableFalcoLogging: i.disableFalcoLogging,
                streamGroupAppHeaders: { "stream-group": "group1" },
                authToken: i.authToken,
                authType: i.authType,
              };
              (i.overrideUrl != null && (g.overrideUrl = i.overrideUrl),
                (g.keepAliveMs = u),
                this.$1.get_log_dgw_streamgroup() &&
                  (g.loggingId = r("uuidv4")()));
              try {
                ((m = this.$1.dgw_client_factory().createStreamGroup(
                  new (r("DGWStreamGroupHandler"))(
                    function () {
                      t.$3(c);
                    },
                    function () {
                      t.$3(c);
                    },
                    function () {
                      t.$3(c);
                    },
                  ),
                  g,
                )),
                  (this.$2[c] = {
                    dgwStreamGroup: m,
                    multiStreamGroupLoggingId: g.loggingId,
                    multiStreamGroupPriorStreamCountGuess: 0,
                    authType: i.authType,
                  }));
              } catch (t) {
                return (e || (e = n("Promise"))).reject(t);
              }
            }
            return (
              this.$2[c].multiStreamGroupPriorStreamCountGuess++,
              m.establishStream(
                {
                  loggingId: i.loggingId,
                  disableFalcoLogging: i.disableFalcoLogging,
                  groupedStreamHeaders: o,
                },
                a,
              )
            );
          }),
          t
        );
      })();
    l.default = d;
  },
  98,
);
