__d(
  "WAWebMetaAiThreadServerDeleteJobImpl",
  [
    "QPLFlow",
    "WALogger",
    "WAWebDeleteMetaAiThreadGQL",
    "WAWebJobsMigrationGating",
    "WAWebLazyPersistedQueue",
    "WAWebMetaAiThreadServerDeleteJob",
    "WAWebPersistedJobManager",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebPersistedQueueQpl",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = new Map();
    function d(e, t) {
      var n = JSON.stringify([e, t]),
        r = c.get(n);
      if (r != null) return r;
      var a = o("WAWebJobsMigrationGating").isJobsManagerDecommissioned()
          ? _
          : m,
        i = a(e, t).finally(function () {
          c.delete(n);
        });
      return (c.set(n, i), i);
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          if (
            !(yield o("WAWebPersistedJobManager").hasUnfinishedJob(
              o("WAWebMetaAiThreadServerDeleteJob").JOB_TYPE,
              t,
            ))
          ) {
            if (!y(n)) {
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
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            (yield o("WAWebLazyPersistedQueue").whenPersistedQueuesMayOpen(),
            !y(t))
          ) {
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[meta-ai-thread-server-delete] account-changed-before-enqueue",
                ])),
            );
            return;
          }
          var r = o("QPLFlow").startQPLFlow(
            o("WAWebPersistedQueueQpl").PERSISTED_QUEUE_EVENT,
            {
              annotations: {
                bool: { isPQ: !0 },
                string: {
                  operationType: o("WAWebMetaAiThreadServerDeleteJob").JOB_TYPE,
                },
              },
              timeoutInMs: o("WAWebPersistedQueueQpl")
                .PERSISTED_QUEUE_TIMEOUT_MS,
            },
          );
          yield o("QPLFlow").endWith(
            r,
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var n = yield o(
                "WAWebLazyPersistedQueue",
              ).whenPersistedQueuesReady(r);
              yield n.enqueueMetaAiThreadServerDeleteNow(e, t);
            }),
          );
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.botFbid,
            n = e.meLid;
          if (!y(n)) {
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
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
        h.apply(this, arguments)
      );
    }
    function y(e) {
      var t;
      return (
        ((t = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()) == null
          ? void 0
          : t.toString()) === e
      );
    }
    ((l.enqueueMetaAiThreadServerDelete = d), (l.deleteOnServer = g));
  },
  98,
);
