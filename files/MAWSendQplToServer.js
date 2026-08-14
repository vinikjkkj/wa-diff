__d(
  "MAWSendQplToServer",
  [
    "BrowserLockManager",
    "ExecutionEnvironment",
    "QPLUserFlow",
    "WAExceededStorageQuota",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n, o, a) {
      return (
        r("QPLUserFlow").start(t, {
          annotations: babelHelpers.extends({}, n || {}, {
            bool: babelHelpers.extends(
              {},
              (n == null ? void 0 : n.bool) || {},
              {
                isDev: 0,
                isFromUIThread: (e || (e = r("ExecutionEnvironment")))
                  .isInMainThread,
                isGifSearchEnbled: !0,
                isLockApiSupported: r("BrowserLockManager") != null,
                processAcksInOneQueue: r("gkx")("23955"),
                useSharedWorker:
                  "SharedWorkerGlobalScope" in self &&
                  self instanceof self.SharedWorkerGlobalScope,
              },
            ),
          }),
          instanceKey: o,
          timeoutInMs: a,
        }),
        u(t, o)
      );
    }
    function u(e, t) {
      return {
        addAnnotations: function (o) {
          r("QPLUserFlow").addAnnotations(e, o, { instanceKey: t });
        },
        addPoint: function (o, a) {
          (a && r("QPLUserFlow").addAnnotations(e, a, { instanceKey: t }),
            r("QPLUserFlow").addPoint(e, o, { instanceKey: t }));
        },
        endCancel: function (a) {
          var n;
          (r("QPLUserFlow").addAnnotations(
            e,
            babelHelpers.extends({}, a, {
              bool: babelHelpers.extends({}, a == null ? void 0 : a.bool, {
                exceededStorageQuota: o(
                  "WAExceededStorageQuota",
                ).getExceededStorageQuota(),
                isRelaxedDurability: !0,
              }),
              string: babelHelpers.extends({}, a == null ? void 0 : a.string, {
                threadID: a == null || (n = a.string) == null ? void 0 : n.jid,
              }),
            }),
            { instanceKey: t },
          ),
            r("QPLUserFlow").endCancel(e, { annotations: a, instanceKey: t }));
        },
        endFail: function (a, i) {
          var n;
          (r("QPLUserFlow").addAnnotations(
            e,
            babelHelpers.extends({}, i, {
              bool: babelHelpers.extends({}, i == null ? void 0 : i.bool, {
                exceededStorageQuota: o(
                  "WAExceededStorageQuota",
                ).getExceededStorageQuota(),
                isRelaxedDurability: !0,
              }),
              string: babelHelpers.extends({}, i == null ? void 0 : i.string, {
                threadID: i == null || (n = i.string) == null ? void 0 : n.jid,
              }),
            }),
            { instanceKey: t },
          ),
            r("QPLUserFlow").endFailure(e, a, {
              annotations: i,
              instanceKey: t,
            }));
        },
        endSuccess: function (a) {
          (r("QPLUserFlow").addAnnotations(
            e,
            {
              bool: {
                exceededStorageQuota: o(
                  "WAExceededStorageQuota",
                ).getExceededStorageQuota(),
                isRelaxedDurability: !0,
              },
            },
            { instanceKey: t },
          ),
            r("QPLUserFlow").endSuccess(e, { annotations: a, instanceKey: t }));
        },
        markError: function (o, a, i) {
          return r("QPLUserFlow").markError(e, o, {
            debugInfo: a,
            error: i,
            instanceKey: t,
          });
        },
      };
    }
    ((l.startQplUserFlow = s), (l.makeMAWQPLProxyForExistingQPLUserFlow = u));
  },
  98,
);
