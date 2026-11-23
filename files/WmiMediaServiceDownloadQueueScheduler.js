__d(
  "WmiMediaServiceDownloadQueueScheduler",
  [
    "FBLogger",
    "MAWGetPriorityFromDownloadEntry",
    "MpsErrors",
    "MpsMediaManagerV2",
    "MsgrSchedulerQPL",
    "NativeSchedulerTickStrategy",
    "QPLFlow",
    "TaskScheduler",
    "TaskSchedulerPriority",
    "WAHashUtils",
    "WAIsDownloadMediaErrorRetryable",
    "WAStartMediaDownloadQplFlow",
    "WmiErrorReport",
    "WmiMediaServiceDownloadQueue",
    "justknobx",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function () {
        return r("FBLogger")("wmi").tags(["media_service", "download_queue"]);
      },
      u = null,
      c = {
        concurrency: 1,
        failOnTimeout: !0,
        promotionTimeoutMs: 3e4,
        timeoutMs: 10 * 6e4,
      },
      d = o("TaskScheduler").taskScheduler(
        "WmiMediaServiceDownloadQueue",
        c,
        o("NativeSchedulerTickStrategy").makeNativeSchedulerTickStrategy(),
      );
    d.setLifecycleListener(
      o("MsgrSchedulerQPL").makeMsgrSchedulerQPLListener(),
    );
    function m() {
      o("WmiMediaServiceDownloadQueue").MEDIA_DOWNLOAD_QUEUE.subscribe(
        function (e) {
          e.type === "new_entities" && p();
        },
      );
    }
    async function p() {
      if (u != null) {
        s().DEBUG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "Media download is already running",
            ])),
        );
        return;
      }
      var t = o("QPLFlow").startQPLFlow(r("qpl")._(767101798, "3375"));
      u = d.run(
        function () {
          return _(t);
        },
        {
          name: "wmi_media_service_download_queue",
          priority: o("TaskSchedulerPriority").BACKGROUND_PRIORITY,
        },
      );
      try {
        var n = await u.promise;
        ((u = null), n && p());
      } catch (e) {
        u = null;
        var a = o("MpsErrors").MpsErrors.classify(
          e,
          "media_download",
          "download_failed",
        );
        (t.endFail("runtime_error", {
          string: {
            error_code: o("MpsErrors").MpsErrors.codeOf(a),
            errorMessage: a.message,
          },
        }),
          o("WmiErrorReport").reportWmiError(a, {
            loggerTags: ["media_service", "download_queue"],
          }),
          p());
      }
    }
    async function _(e) {
      var t = await o(
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
      var n = [],
        a = [],
        i = 0,
        l = 0,
        s = 0,
        u = 0;
      e.addPoint("download_media_start");
      var c = await Promise.allSettled(
        t.map(function (e) {
          return f(e);
        }),
      );
      e.addPoint("download_media_end");
      for (var d of c.entries()) {
        var m = d[0],
          p = d[1];
        p.status === "rejected"
          ? (a.push(
              babelHelpers.extends({}, t[m], {
                attemptCount: t[m].attemptCount + 1,
              }),
            ),
            (s += 1))
          : p.value.success === !1
            ? o(
                "WAIsDownloadMediaErrorRetryable",
              ).isDownloadMediaErrorRetryable(p.value.error)
              ? (a.push(
                  babelHelpers.extends({}, t[m], {
                    attemptCount: t[m].attemptCount + 1,
                  }),
                ),
                (l += 1))
              : (n.push(t[m].queueId), (i += 1))
            : (n.push(t[m].queueId), (u += 1));
      }
      return (
        e.addPoint("processed_entries", {
          int: {
            nonRetriableFailures: i,
            retriableFailures: l,
            runtimeErrors: s,
            successfulDownloads: u,
          },
        }),
        e.addPoint("delete_entries_start"),
        n.length > 0 &&
          (await o("WmiMediaServiceDownloadQueue").MEDIA_DOWNLOAD_QUEUE.delete(
            n,
          )),
        a.length > 0 &&
          (await o("WmiMediaServiceDownloadQueue").MEDIA_DOWNLOAD_QUEUE.put(a)),
        e.addPoint("delete_entries_end"),
        e.endSuccess(),
        !0
      );
    }
    async function f(e) {
      var t = o("WAHashUtils").stringToPlaintextHash(e.queueId),
        n = await o("WAStartMediaDownloadQplFlow").startMediaDownloadQplFlow({
          downloadEntry: "MpsSyncMedia",
          e2eePlatform: e.e2eePlatform,
          msgType: null,
          protocolMsgId: null,
          triggerUIView: null,
        });
      n.addAnnotations({ int: { downloadQueueAttemptCount: e.attemptCount } });
      try {
        var r = await o("MpsMediaManagerV2")
            .mpsMediaManager()
            .enqueueDownloadFullSizeAndPreview({
              fullSizePlaintextHash: t,
              mediaDownloadFlow: n,
              priority: o(
                "MAWGetPriorityFromDownloadEntry",
              ).getPriorityFromDownloadEntry(n.downloadEntry),
            }),
          a = r.fullsizePromise,
          i = await a;
        return (i.success === !1 ? n.endFail(i.error) : n.endSuccess(), i);
      } catch (e) {
        throw (n.endFail("runtime_error"), e);
      }
    }
    l.subscribeToDownloadQueueUpdates = m;
  },
  98,
);
