__d(
  "WmiMediaServiceDownloadQueueScheduler",
  [
    "FBLogger",
    "MAWGetPriorityFromDownloadEntry",
    "MpsMediaManagerV2",
    "MsgrSchedulerQPL",
    "NativeSchedulerTickStrategy",
    "Promise",
    "QPLFlow",
    "TaskScheduler",
    "TaskSchedulerPriority",
    "WAHashUtils",
    "WAIsDownloadMediaErrorRetryable",
    "WAStartMediaDownloadQplFlow",
    "WmiMediaServiceDownloadQueue",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "justknobx",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = function () {
        return r("FBLogger")("wmi").tags(["media_service", "download_queue"]);
      },
      d = null,
      m = {
        concurrency: 1,
        failOnTimeout: !0,
        promotionTimeoutMs: 3e4,
        timeoutMs: 10 * 6e4,
      },
      p = o("TaskScheduler").taskScheduler(
        "WmiMediaServiceDownloadQueue",
        m,
        o("NativeSchedulerTickStrategy").makeNativeSchedulerTickStrategy(),
      );
    p.setLifecycleListener(
      o("MsgrSchedulerQPL").makeMsgrSchedulerQPLListener(),
    );
    function _() {
      o("WmiMediaServiceDownloadQueue").MEDIA_DOWNLOAD_QUEUE.subscribe(
        function (e) {
          e.type === "new_entities" && f();
        },
      );
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (d != null) {
            c().DEBUG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Media download is already running",
                ])),
            );
            return;
          }
          var t = o("QPLFlow").startQPLFlow(r("qpl")._(767101798, "3375"));
          d = p.run(
            function () {
              return h(t);
            },
            {
              name: "wmi_media_service_download_queue",
              priority: o("TaskSchedulerPriority").BACKGROUND_PRIORITY,
            },
          );
          try {
            var n = yield d.promise;
            ((d = null), n && f());
          } catch (e) {
            d = null;
            var a = r("getErrorSafe")(e);
            (c().FATAL(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to download media: ",
                  "",
                ])),
              a.message,
            ),
              t.endFail("runtime_error", {
                string: { errorMessage: a.message },
              }),
              f());
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WmiMediaServiceDownloadQueue",
          ).MEDIA_DOWNLOAD_QUEUE.readFromIndex("attemptCount", {
            filter: function (t) {
              return t.attemptCount < r("justknobx")._("1900");
            },
            limit: r("justknobx")._("1911"),
          });
          if (
            (e.addPoint("retrieved_entries", {
              int: { entriesCount: t.length },
              int_array: {
                attemptCount: t.map(function (e) {
                  return e.attemptCount;
                }),
              },
            }),
            t.length === 0)
          )
            return (e.endSuccess(), !1);
          var a = [],
            i = [],
            l = 0,
            s = 0,
            c = 0,
            d = 0;
          e.addPoint("download_media_start");
          var m = yield (u || (u = n("Promise"))).allSettled(
            t.map(function (e) {
              return C(e);
            }),
          );
          e.addPoint("download_media_end");
          for (var p of m.entries()) {
            var _ = p[0],
              f = p[1];
            f.status === "rejected"
              ? (i.push(
                  babelHelpers.extends({}, t[_], {
                    attemptCount: t[_].attemptCount + 1,
                  }),
                ),
                (c += 1))
              : f.value.success === !1
                ? o(
                    "WAIsDownloadMediaErrorRetryable",
                  ).isDownloadMediaErrorRetryable(f.value.error)
                  ? (i.push(
                      babelHelpers.extends({}, t[_], {
                        attemptCount: t[_].attemptCount + 1,
                      }),
                    ),
                    (s += 1))
                  : (a.push(t[_].queueId), (l += 1))
                : (a.push(t[_].queueId), (d += 1));
          }
          return (
            e.addPoint("processed_entries", {
              int: {
                nonRetriableFailures: l,
                retriableFailures: s,
                runtimeErrors: c,
                successfulDownloads: d,
              },
            }),
            e.addPoint("delete_entries_start"),
            a.length > 0 &&
              (yield o(
                "WmiMediaServiceDownloadQueue",
              ).MEDIA_DOWNLOAD_QUEUE.delete(a)),
            i.length > 0 &&
              (yield o("WmiMediaServiceDownloadQueue").MEDIA_DOWNLOAD_QUEUE.put(
                i,
              )),
            e.addPoint("delete_entries_end"),
            e.endSuccess(),
            !0
          );
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAHashUtils").stringToPlaintextHash(e.queueId),
            n = yield o(
              "WAStartMediaDownloadQplFlow",
            ).startMediaDownloadQplFlow({
              downloadEntry: "MpsSyncMedia",
              e2eePlatform: e.e2eePlatform,
              msgType: null,
              protocolMsgId: null,
              triggerUIView: null,
            });
          n.addAnnotations({
            int: { downloadQueueAttemptCount: e.attemptCount },
          });
          try {
            var r = yield o("MpsMediaManagerV2")
                .mpsMediaManager()
                .enqueueDownloadFullSizeAndPreview({
                  fullSizePlaintextHash: t,
                  mediaDownloadFlow: n,
                  priority: o(
                    "MAWGetPriorityFromDownloadEntry",
                  ).getPriorityFromDownloadEntry(n.downloadEntry),
                }),
              a = r.fullsizePromise,
              i = yield a;
            return (i.success === !1 ? n.endFail(i.error) : n.endSuccess(), i);
          } catch (e) {
            throw (n.endFail("runtime_error"), e);
          }
        })),
        b.apply(this, arguments)
      );
    }
    l.subscribeToDownloadQueueUpdates = _;
  },
  98,
);
