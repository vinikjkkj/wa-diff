__d(
  "WAWebSignalStateOneQueueFlushable",
  [
    "Promise",
    "WALogger",
    "WAWebGetMessageCache",
    "WAWebOfflineResumeCounters",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = [],
      c = (s || (s = n("Promise"))).resolve(),
      d = {
        flush: function () {
          var e = c.then(p);
          return ((c = e), e);
        },
      };
    function m() {
      return new (s || (s = n("Promise")))(function (e) {
        u.push(e);
      });
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = u;
          u = [];
          var n = !1;
          try {
            (yield o("WAWebGetMessageCache")
              .getMessageCache()
              .writeSignalState(t.length > 0),
              (n = !0));
          } catch (t) {
            (o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "signalStateOneQueueFlushable: flush failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .tags("messaging"),
              o("WAWebOfflineResumeCounters").logOneQueueFlushFailed());
          }
          t.forEach(function (e) {
            return e(n);
          });
        })),
        _.apply(this, arguments)
      );
    }
    ((l.signalStateOneQueueFlushable = d), (l.requestSignalStateWrite = m));
  },
  98,
);
