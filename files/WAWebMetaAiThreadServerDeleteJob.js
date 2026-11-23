__d(
  "WAWebMetaAiThreadServerDeleteJob",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAPersistedJobManager",
    "WATimeUtils",
    "WAWebDefinePersistedJob",
    "WAWebNetworkStatus",
    "WAWebUserUtils",
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
    async function d(e) {
      var t = o("WAWebUserUtils").getMeLidUserOrThrow().toString(),
        n = await s.load();
      return n.enqueueMetaAiThreadServerDelete(e, t);
    }
    var m = o("WAWebDefinePersistedJob")
      .defineWebPersistedJob()
      .finalStep("deleteOnServer", function (e) {
        return p(e);
      })
      .end();
    async function p(e) {
      await r("WAWebNetworkStatus").waitIfOffline();
      var t = await f();
      if (t == null) {
        _();
        return;
      }
      await t.deleteOnServer(e);
    }
    function _() {
      throw new (o("WAPersistedJobManager").RetryOnBackoff)(c);
    }
    async function f() {
      try {
        return await s.load();
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[meta-ai-thread-server-delete] module-load-failed class=",
                  "",
                ])),
              g(t),
            )
            .sendLogs("meta-ai-thread-server-delete-module-load-failed"),
          null
        );
      }
    }
    function g(e) {
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
      (l.metaAiThreadServerDeleteJob = m),
      (l.retryOnBackoff = _));
  },
  98,
);
