__d(
  "WAWebTeeRealClient",
  ["WALogger", "WAWebTEENodeTokenFetcher", "WAWebTeeRequestConfig", "err"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      throw new TypeError('"' + e + '" is read-only');
    }
    var c = (function () {
        function t() {
          ((this.nodeToken = null),
            (this.pendingPreconnect = null),
            (this.connectGeneration = 0));
        }
        var n = t.prototype;
        return (
          (n.sendRequest = (function () {
            var e = babelHelpers.wrapAsyncGenerator(function* (e) {
              throw r("err")(
                "TeeRealClient.sendRequest (RT2) is not implemented yet. RT1 node-token fetch is available via preconnect().",
              );
            });
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (n.preconnect = function () {
            var e = this,
              t = this.pendingPreconnect;
            if (t != null) return t;
            var n = this.fetchNodeTokenForGeneration(
              this.connectGeneration,
            ).finally(function () {
              e.pendingPreconnect === n && (e.pendingPreconnect = null);
            });
            return ((this.pendingPreconnect = n), n);
          }),
          (n.disconnect = function () {
            ((this.connectGeneration += 1),
              (this.pendingPreconnect = null),
              (this.nodeToken = null));
          }),
          (n.fetchNodeTokenForGeneration = async function (n) {
            var t = await o("WAWebTEENodeTokenFetcher").fetchNodeToken(
              o("WAWebTeeRequestConfig").DEFAULT_TEE_ENV,
            );
            if (n !== this.connectGeneration) {
              o("WALogger")
                .LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[TEE] discarding a node token superseded by disconnect",
                    ])),
                )
                .sendLogs("tee-preconnect-superseded")
                .tags("tee");
              return;
            }
            ((this.nodeToken = t),
              o("WALogger")
                .LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[TEE][RT1] preconnect fetched node token",
                    ])),
                )
                .sendLogs("tee-rt1-preconnect")
                .tags("tee"));
          }),
          t
        );
      })(),
      d = new c(),
      m = d;
    l.default = m;
  },
  98,
);
