__d(
  "RealtimeGraphQLRequest",
  [
    "invariant",
    "RequestStreamCommonRequestStreamCommonTypes",
    "TransportSelectingClientSingleton",
    "asyncToGeneratorRuntime",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t = this,
          n = e.body,
          a = e.doc_id,
          i = e.extra_headers,
          l = e.graphiql_sandbox,
          u = e.instrumentation_data,
          c = e.method,
          d = e.options;
        ((this.$13 = function (e) {
          switch (e) {
            case o("RequestStreamCommonRequestStreamCommonTypes").FlowStatus
              .Started:
              if (t.$10) {
                t.$9 != null || s(0, 13576);
                var n = Date.now() - r("nullthrows")(t.$9);
                t.$7 != null && t.$7(n);
              } else ((t.$10 = !0), t.$5 != null && t.$5());
              break;
            case o("RequestStreamCommonRequestStreamCommonTypes").FlowStatus
              .Stopped:
              ((t.$9 = Date.now()), t.$6 != null && t.$6(!1, !1));
              break;
            default:
              break;
          }
        }),
          (this.$10 = !1));
        var m = { method: c, doc_id: a };
        (l != null &&
          (m = babelHelpers.extends({}, m, {
            graphiql_sandbox: l.replace(
              /^not-www\.(\d+|\w+)\.(od|sb)\.internalfb\.com$/,
              "www.$1.$2.facebook.com",
            ),
          })),
          i != null && (m = babelHelpers.extends({}, m, i)),
          (this.$1 = m),
          (this.$2 = JSON.stringify(n)),
          (this.$11 = u),
          (this.$12 = d));
      }
      var t = e.prototype;
      return (
        (t.onResponse = function (t) {
          return ((this.$3 = t), this);
        }),
        (t.onError = function (t) {
          return ((this.$4 = t), this);
        }),
        (t.onActive = function (t) {
          return ((this.$5 = t), this);
        }),
        (t.onPause = function (t) {
          return ((this.$6 = t), this);
        }),
        (t.onResume = function (t) {
          return ((this.$7 = t), this);
        }),
        (t.onRetryUpdateRequestBody = function (t) {
          return (
            (this.$8 = t),
            (this.$1 = babelHelpers.extends({}, this.$1, {
              request_stream_retry: "false",
            })),
            this
          );
        }),
        (t.send = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            this.$3 != null || s(0, 33593);
            var e = { onData: r("nullthrows")(this.$3) };
            (this.$4 != null &&
              (e = babelHelpers.extends({}, e, { onTermination: this.$4 })),
              (e = babelHelpers.extends({}, e, { onFlowStatus: this.$13 })),
              this.$8 != null &&
                (e = babelHelpers.extends({}, e, {
                  onRetryUpdateRequestBody: this.$8,
                })));
            var t = yield r("TransportSelectingClientSingleton").requestStream(
              this.$1,
              this.$2,
              e,
              this.$11,
              this.$12,
            );
            return {
              cancel: function () {
                t.cancel();
              },
              amendExperimental: function (n) {
                try {
                  return (t.amendWithoutAck(JSON.stringify(n)), !0);
                } catch (e) {
                  return !1;
                }
              },
            };
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        e
      );
    })();
    l.default = e;
  },
  98,
);
