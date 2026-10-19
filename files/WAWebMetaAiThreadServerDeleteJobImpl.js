__d(
  "WAWebMetaAiThreadServerDeleteJobImpl",
  [
    "WALogger",
    "WAWebDeleteMetaAiThreadGQL",
    "WAWebMetaAiThreadServerDeleteJob",
    "WAWebPersistedJobManager",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = new Map();
    function c(e, t) {
      var n = JSON.stringify([e, t]),
        r = u.get(n);
      if (r != null) return r;
      var o = d(e, t).finally(function () {
        u.delete(n);
      });
      return (u.set(n, o), o);
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          if (
            !(yield o("WAWebPersistedJobManager").hasUnfinishedJob(
              o("WAWebMetaAiThreadServerDeleteJob").JOB_TYPE,
              t,
            ))
          ) {
            if (!f(n)) {
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[meta-ai-thread-server-delete] account-changed-before-enqueue",
                  ])),
              );
              return;
            }
            yield o("WAWebPersistedJobManagerWorkerCompatible")
              .getJobManager()
              .waitUntilPersisted({
                type: o("WAWebMetaAiThreadServerDeleteJob").JOB_TYPE,
                args: { botFbid: t, meLid: n },
                uniqKey: t,
              });
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.botFbid,
            n = e.meLid;
          if (!f(n)) {
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[meta-ai-thread-server-delete] account-changed-since-enqueue",
                ])),
            );
            return;
          }
          var r = yield o("WAWebDeleteMetaAiThreadGQL").deleteMetaAiThreadGQL(
            t,
          );
          r === "retryable" &&
            o("WAWebMetaAiThreadServerDeleteJob").retryOnBackoff();
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      var t;
      return (
        ((t = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()) == null
          ? void 0
          : t.toString()) === e
      );
    }
    ((l.enqueueMetaAiThreadServerDelete = c), (l.deleteOnServer = p));
  },
  98,
);
