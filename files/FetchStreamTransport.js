__d(
  "FetchStreamTransport",
  [
    "ArbiterMixin",
    "FetchStreamConfig",
    "StreamBlockReader",
    "TimeSlice",
    "URI",
    "asyncToGeneratorRuntime",
    "mixin",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 0,
      u = (function (t) {
        function o(e) {
          var n;
          if (!self.ReadableStream || !self.fetch || !Request || !TextDecoder) {
            var r = new Error("fetch stream transport is not supported here");
            throw (r.stack, r);
          }
          return (
            (n = t.call(this) || this),
            (n.$FetchStreamTransport$p_6 = null),
            (n.$FetchStreamTransport$p_1 = e),
            (n.$FetchStreamTransport$p_3 = !1),
            (n.$FetchStreamTransport$p_4 = !1),
            (n.$FetchStreamTransport$p_5 = !1),
            (n.$FetchStreamTransport$p_2 = ++s),
            n || babelHelpers.assertThisInitialized(n)
          );
        }
        babelHelpers.inheritsLoose(o, t);
        var a = o.prototype;
        return (
          (a.hasFinished = function () {
            return this.$FetchStreamTransport$p_5;
          }),
          (a.getRequestURI = function () {
            return new (e || (e = r("URI")))(
              this.$FetchStreamTransport$p_1,
            ).addQueryData({
              __a: 1,
              __adt: this.$FetchStreamTransport$p_2,
              __req: "fetchstream_" + this.$FetchStreamTransport$p_2,
              ajaxpipe_fetch_stream: 1,
            });
          }),
          (a.send = function () {
            if (this.$FetchStreamTransport$p_3) {
              var e = new Error(
                "FetchStreamTransport instances cannot be re-used.",
              );
              throw (e.stack, e);
            }
            this.$FetchStreamTransport$p_3 = !0;
            var t = new Request(this.getRequestURI().toString(), {
              mode: "same-origin",
              credentials: "include",
            });
            this.$FetchStreamTransport$p_6 = r(
              "TimeSlice",
            ).getGuardedContinuation(
              "FetchStreamTransport: waiting on first response",
            );
            var n = self.fetch(t, { redirect: "follow" });
            this.$FetchStreamTransport$p_7(n);
          }),
          (a.$FetchStreamTransport$p_7 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this,
                  n;
                try {
                  n = yield e;
                } catch (e) {
                  this.abort();
                }
                if (!n || !n.body || !n.ok) {
                  this.abort();
                  return;
                }
                for (
                  var o = new (r("StreamBlockReader"))(n.body),
                    a = function* () {
                      var e = yield o.readUntilStringOrEnd(
                        r("FetchStreamConfig").delim,
                      );
                      if (t.$FetchStreamTransport$p_4) return 1;
                      r("nullthrows")(t.$FetchStreamTransport$p_6)(function () {
                        var n = JSON.parse(e);
                        (o.isDone() || n.finished
                          ? (t.$FetchStreamTransport$p_5 = !0)
                          : (t.$FetchStreamTransport$p_6 = r(
                              "TimeSlice",
                            ).getGuardedContinuation(
                              "FetchStreamTransport: waiting on next response",
                            )),
                          t.inform("response", n.content));
                      });
                    };
                  !this.$FetchStreamTransport$p_5 &&
                  !this.$FetchStreamTransport$p_4 &&
                  !(yield* a());
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.abort = function () {
            var e = this;
            if (
              !(
                this.$FetchStreamTransport$p_4 || this.$FetchStreamTransport$p_5
              )
            )
              if (
                ((this.$FetchStreamTransport$p_4 = !0),
                (this.$FetchStreamTransport$p_5 = !0),
                this.$FetchStreamTransport$p_6)
              ) {
                var t = this.$FetchStreamTransport$p_6;
                t(function () {
                  e.inform("abort");
                });
              } else this.inform("abort");
          }),
          o
        );
      })(r("mixin")(r("ArbiterMixin")));
    l.default = u;
  },
  98,
);
