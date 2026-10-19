__d(
  "WAWebMetaAiThreadServerDeleteJob",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAPersistedJobManager",
    "WATimeUtils",
    "WAWebDefinePersistedJob",
    "WAWebNetworkStatus",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("JSResourceForInteraction")(
        "WAWebMetaAiThreadServerDeleteJobImpl",
      ).__setRef("WAWebMetaAiThreadServerDeleteJob"),
      u = "metaAiThreadServerDelete",
      c = {
        algo: {
          type: "exponential",
          first: o("WATimeUtils").MINUTE_MILLISECONDS,
        },
      };
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow().toString(),
            n = yield s.load();
          return n.enqueueMetaAiThreadServerDelete(e, t);
        })),
        m.apply(this, arguments)
      );
    }
    var p = o("WAWebDefinePersistedJob")
      .defineWebPersistedJob()
      .finalStep("deleteOnServer", function (e) {
        return _(e);
      })
      .end();
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield r("WAWebNetworkStatus").waitIfOffline();
          var t = yield h();
          if (t == null) {
            g();
            return;
          }
          yield t.deleteOnServer(e);
        })),
        f.apply(this, arguments)
      );
    }
    function g() {
      throw new (o("WAPersistedJobManager").RetryOnBackoff)(c);
    }
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            return yield s.load();
          } catch (t) {
            return (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[meta-ai-thread-server-delete] module-load-failed class=",
                      "",
                    ])),
                  C(t),
                )
                .sendLogs("meta-ai-thread-server-delete-module-load-failed"),
              null
            );
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      try {
        if (!(e instanceof Error)) return "NonError";
        var t = e.name;
        return t === "ChunkLoadError" ? "ChunkLoadError" : "OtherError";
      } catch (e) {
        return "Unreadable";
      }
    }
    ((l.JOB_TYPE = u),
      (l.enqueueMetaAiThreadServerDelete = d),
      (l.metaAiThreadServerDeleteJob = p),
      (l.retryOnBackoff = g));
  },
  98,
);
