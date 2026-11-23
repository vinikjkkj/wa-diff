__d(
  "WebMps",
  [
    "DateConsts",
    "MpsDeletedCleaner",
    "MpsEphemeralCleaner",
    "MpsErrors",
    "MpsLogger",
    "MpsReadResult",
    "MpsReverbDbDump",
    "MpsReverbInit",
    "MpsTypes",
    "QPLFlow",
    "TaskSchedulerPriority",
    "WAPromiseQueue",
    "WATimeUtils",
    "WAWaitForUserUnblocked",
    "WebMpsBatchLoadMessage",
    "WebMpsBatchLoadMessages",
    "WebMpsInsertionCleaners",
    "WebMpsInsertionFlow",
    "WebMpsLoadDeletedMessages",
    "WebMpsLoadSnippet",
    "WebMpsPostprocess",
    "WebMpsPurgeDeletedPayload",
    "WebMpsPurgeDeletions",
    "WebMpsPurgeExpiredMessages",
    "WebMpsScheduler",
    "WebMpsSnippetScan",
    "WmiErrorFixesGate",
    "WmiErrorReport",
    "WmiMultiQplTracker",
    "getErrorSafe",
    "getSafeQplErrorMessage",
    "justknobx",
    "memoizeWithArgsLFUCache",
    "mergeMaps",
    "qpl",
    "schedulePeriodicTask",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["debug"],
      s = ["config"],
      u = ["debug"],
      c;
    function d(e) {
      return JSON.stringify(e);
    }
    async function m(e) {
      var t = e.db,
        n = e.dependencies,
        r = e.getMpsExtensionConfiguration;
      if (c != null)
        throw o("MpsErrors").MpsErrors.error(
          "initialised_twice",
          "MPS already initialised",
        );
      await o("MpsReverbInit").initReverb(t);
      var a = new h(r(), n);
      return ((c = a), a);
    }
    function p(e) {
      var t = e.payload,
        n = e.source;
      return o("QPLFlow").startQPLFlow(r("qpl")._(1056834650, "494"), {
        annotations: {
          string: {
            messageId: t.message.messageId,
            senderId: t.message.senderId,
            source: n,
            threadId: t.message.threadId,
          },
        },
      });
    }
    function _(e, t) {
      return e == null
        ? "no-target"
        : t.status === "rejected"
          ? "read-failed"
          : t.value == null
            ? "unresolved"
            : "unrenderable";
    }
    function f(e) {
      if (e.status === "rejected") return "read-failed";
      var t = e.value;
      return t.kind === "failed"
        ? "read-failed"
        : t.range == null
          ? "no-range"
          : t.range.messages.length === 0
            ? "empty"
            : "unrenderable";
    }
    function g(e) {
      var t, n;
      return e.status === "fulfilled" &&
        e.value.kind === "loaded" &&
        (t = (n = e.value.range) == null ? void 0 : n.messages.length) != null
        ? t
        : 0;
    }
    var h = (function () {
      function t(t, n) {
        var a = this;
        ((this.$3 = []),
          (this.$9 = new (o("WAPromiseQueue").PromiseQueue)()),
          (this.batchLoadMessage = function (e) {
            return o("MpsReadResult").toReadResult(
              a.$14(e),
              "batch_load_message",
              e.debug.purpose,
            );
          }),
          (this.$14 = function (e) {
            var t,
              n,
              i,
              l,
              s = e.config,
              u = e.debug,
              c = e.messageIds,
              d = e.threadId,
              m = {
                persistToReverb:
                  (t = s == null ? void 0 : s.persistToReverb) != null
                    ? t
                    : "persist",
                shouldFetchSupplementals:
                  (n = s == null ? void 0 : s.shouldFetchSupplementals) != null
                    ? n
                    : !0,
                shouldFetchTags:
                  (i = s == null ? void 0 : s.shouldFetchTags) != null ? i : !0,
                strategy:
                  (l = s == null ? void 0 : s.strategy) != null
                    ? l
                    : "full-fetch",
              };
            return o("WebMpsScheduler")
              .mpsScheduler()
              .run(
                function () {
                  return a.$2.batchLoad({
                    config: m,
                    messageIds: c,
                    metric: null,
                    threadId: d,
                  });
                },
                {
                  metrics: {
                    annotations: {
                      string: { purpose: u.purpose, strategy: m.strategy },
                    },
                    customFlags: { runtimeReliability: !0 },
                    eventSamplingRate: r("justknobx")._("4538"),
                  },
                  name: "batch-load-message",
                  priority: o("TaskSchedulerPriority").BLOCKING_PRIORITY,
                },
              )
              .promise.then(function (e) {
                return (a.$6(e.filter(Boolean), m), e);
              })
              .catch(function (e) {
                throw o("MpsErrors").MpsErrors.classify(
                  e,
                  "batch_load_message",
                  "read_failed",
                );
              });
          }),
          (this.$15 = r("memoizeWithArgsLFUCache")(
            function (e) {
              var t,
                n,
                i,
                l,
                s,
                u = e.config,
                c = e.debug,
                d = e.messageId,
                m = e.threadId,
                p = {
                  persistToReverb:
                    (t = u == null ? void 0 : u.persistToReverb) != null
                      ? t
                      : "persist",
                  shouldFetchSupplementals:
                    (n = u == null ? void 0 : u.shouldFetchSupplementals) !=
                    null
                      ? n
                      : !0,
                  shouldFetchTags:
                    (i = u == null ? void 0 : u.shouldFetchTags) != null
                      ? i
                      : !0,
                  strategy:
                    (l = u == null ? void 0 : u.strategy) != null
                      ? l
                      : "full-fetch",
                };
              return o("WebMpsScheduler")
                .mpsScheduler()
                .run(
                  async function () {
                    var e = await a.$2.load({
                      config: p,
                      messageId: d,
                      metric: null,
                      threadId: m,
                    });
                    return (e != null && a.$6([e], p), e);
                  },
                  {
                    metrics: {
                      annotations: {
                        string: { purpose: c.purpose, strategy: p.strategy },
                      },
                      customFlags: { runtimeReliability: !0 },
                      eventSamplingRate: r("justknobx")._("4536"),
                    },
                    name: "load-message",
                    priority:
                      (s = u == null ? void 0 : u.priority) != null
                        ? s
                        : o("TaskSchedulerPriority").BLOCKING_PRIORITY,
                  },
                ).promise;
            },
            function (t) {
              var n = t.debug,
                r = babelHelpers.objectWithoutPropertiesLoose(t, e);
              return d(
                babelHelpers.extends({}, r, {
                  ebEnabled: a.$1.eb.isEbEnabled(),
                }),
              );
            },
            1,
            function (e) {
              a.$3.push(e);
            },
          )),
          (this.loadMessage = function (e) {
            return o("MpsReadResult").toReadResult(
              a.$16(e),
              "load_message",
              e.debug.purpose,
            );
          }),
          (this.$16 = function (e) {
            return a.$15(e).catch(function (e) {
              throw (
                a.$11(),
                o("MpsErrors").MpsErrors.classify(
                  e,
                  "load_message",
                  "read_failed",
                )
              );
            });
          }),
          (this.loadSnippet = function (e) {
            return o("MpsReadResult").toReadResult(
              a.$17(e),
              "load_snippet",
              e.debug.purpose,
            );
          }),
          (this.$17 = function (e) {
            var t,
              n = e.config,
              i = e.debug,
              l = e.messageId,
              s = e.threadId,
              u =
                (t = a.extensionConfiguration.rankSnippetActivity) != null
                  ? t
                  : o("WebMpsLoadSnippet").snippetActivityTimestampMs,
              c = function (t) {
                var e, r, i;
                return a.$18({
                  config: {
                    persistToReverb:
                      (e = n == null ? void 0 : n.persistToReverb) != null
                        ? e
                        : "persist",
                    priority:
                      (r = n == null ? void 0 : n.priority) != null
                        ? r
                        : o("TaskSchedulerPriority").BLOCKING_PRIORITY,
                    shouldFetchSupplementals:
                      (i = n == null ? void 0 : n.shouldFetchSupplementals) !=
                      null
                        ? i
                        : !0,
                    shouldFetchTags: !1,
                    shouldIgnoreLocalOnly: !1,
                    strategy: t,
                    tagsFilter: "all",
                    useMessageVisibility: !1,
                  },
                  numMessages:
                    o("WebMpsLoadSnippet").SNIPPET_ELIGIBLE_SCAN_DEPTH,
                  threadId: s,
                });
              },
              d = function (t) {
                return t.kind === "loaded" && t.range != null
                  ? o("WebMpsLoadSnippet").selectLatestActivity(
                      t.range.messages,
                      u,
                    )
                  : null;
              };
            return Promise.allSettled([
              l == null
                ? Promise.resolve(null)
                : a.$15({
                    config: babelHelpers.extends({}, n != null ? n : {}, {
                      shouldFetchTags: !1,
                    }),
                    debug: i,
                    messageId: l,
                    threadId: s,
                  }),
              c("local-only"),
            ]).then(function (e) {
              var t = e[0],
                n = e[1],
                m =
                  t.status === "rejected" ? r("getErrorSafe")(t.reason) : null,
                p = (function (e) {
                  if (
                    ((typeof e == "object" && e !== null) ||
                      typeof e == "function") &&
                    e.status === "rejected" &&
                    "reason" in e
                  ) {
                    var t = e.reason;
                    return r("getErrorSafe")(t);
                  }
                  if (
                    ((typeof e == "object" && e !== null) ||
                      typeof e == "function") &&
                    e.status === "fulfilled" &&
                    ((typeof e.value == "object" && e.value !== null) ||
                      typeof e.value == "function") &&
                    e.value.kind === "failed" &&
                    "error" in e.value
                  ) {
                    var n = e.value.error;
                    return n;
                  }
                  return null;
                })(n);
              (m != null || p != null) && a.$11();
              var h = m != null && p != null ? [p] : [m, p];
              for (var y of h.filter(Boolean))
                o("WmiErrorReport").reportWmiError(
                  o("MpsErrors").MpsErrors.classify(
                    y,
                    "load_snippet",
                    "read_failed",
                  ),
                );
              if (m != null && p != null)
                throw o("MpsErrors").MpsErrors.classify(
                  m,
                  "load_snippet",
                  "read_failed",
                );
              var C = o("WebMpsLoadSnippet").selectSnippetMessage(
                o("WebMpsLoadSnippet").toSnippetCandidate(
                  t.status === "fulfilled" ? t.value : null,
                  u,
                ),
                n.status === "fulfilled" ? d(n.value) : null,
              );
              return C != null
                ? C
                : (o("MpsLogger")
                    .MpsLogger()
                    .debug(
                      "[loadSnippet] no local candidate, retrying against EB: thread=%s purpose=%s named=%s scan=%s scanned=%s",
                      String(s),
                      i.purpose,
                      _(l, t),
                      f(n),
                      String(g(n)),
                    ),
                  c("full-fetch").then(function (e) {
                    if (e.kind === "failed")
                      throw (
                        a.$11(),
                        o("MpsErrors").MpsErrors.classify(
                          e.error,
                          "load_snippet",
                          "read_failed",
                        )
                      );
                    return o("WebMpsLoadSnippet").selectSnippetMessage(
                      null,
                      d(e),
                    );
                  }));
            });
          }),
          (this.$5 = function (e) {
            var t,
              n,
              i = e.config,
              l = e.debug,
              s = e.ranges;
            return o("WebMpsScheduler")
              .mpsScheduler()
              .run(
                function () {
                  return o("WebMpsBatchLoadMessages").batchLoadMessages(
                    s.map(function (e) {
                      var t = e.direction,
                        n = e.from,
                        r = e.numMessages,
                        a = e.threadId;
                      return {
                        direction: t,
                        from: [
                          o("MpsTypes").toTimestamp(
                            o("WATimeUtils").miAdjustTimestamp(n[0]),
                          ),
                          n[1],
                        ],
                        numMessages: r,
                        threadId: a,
                      };
                    }),
                    a.$1,
                    i,
                    null,
                  );
                },
                {
                  metrics: {
                    annotations: {
                      string: {
                        purpose: l.purpose,
                        strategy:
                          (t = i == null ? void 0 : i.strategy) != null
                            ? t
                            : "full-fetch",
                      },
                    },
                    customFlags: { runtimeReliability: !0 },
                    eventSamplingRate: r("justknobx")._("4538"),
                  },
                  name: "batch-load-messages",
                  priority:
                    (n = i.priority) != null
                      ? n
                      : o("TaskSchedulerPriority").BLOCKING_PRIORITY,
                },
              ).promise;
          }),
          (this.batchLoadMessages = function (e) {
            return o("MpsReadResult").toReadResult(
              a.$19(e),
              "batch_load_messages",
              e.debug.purpose,
            );
          }),
          (this.$19 = function (e) {
            var t,
              n,
              r,
              i,
              l,
              u,
              c,
              d,
              m = e.config,
              p = babelHelpers.objectWithoutPropertiesLoose(e, s),
              _ = {
                persistToReverb:
                  (t = m == null ? void 0 : m.persistToReverb) != null
                    ? t
                    : "persist",
                priority:
                  (n = m == null ? void 0 : m.priority) != null
                    ? n
                    : o("TaskSchedulerPriority").BLOCKING_PRIORITY,
                shouldFetchSupplementals:
                  (r = m == null ? void 0 : m.shouldFetchSupplementals) != null
                    ? r
                    : !0,
                shouldFetchTags:
                  (i = m == null ? void 0 : m.shouldFetchTags) != null ? i : !0,
                shouldIgnoreLocalOnly:
                  (l = m == null ? void 0 : m.shouldIgnoreLocalOnly) != null
                    ? l
                    : !1,
                strategy:
                  (u = m == null ? void 0 : m.strategy) != null
                    ? u
                    : "full-fetch",
                tagsFilter:
                  (c = m == null ? void 0 : m.tagsFilter) != null ? c : "all",
                useMessageVisibility:
                  (d = m == null ? void 0 : m.useMessageVisibility) != null
                    ? d
                    : !1,
              };
            return a
              .$5(babelHelpers.extends({}, p, { config: _ }))
              .then(function (e) {
                var t = e.flatMap(function (e) {
                  return e.messages;
                });
                return (a.$6(t, _), e);
              })
              .catch(function (e) {
                throw o("MpsErrors").MpsErrors.classify(
                  e,
                  "batch_load_messages",
                  "read_failed",
                );
              });
          }),
          (this.$20 = r("memoizeWithArgsLFUCache")(
            function (e) {
              var t,
                n,
                i,
                l,
                s,
                u,
                c,
                d,
                m = e.config,
                p = e.debug,
                _ = e.direction,
                f = e.from,
                g = e.numMessages,
                h = e.source,
                y = e.threadId,
                C = {
                  persistToReverb:
                    (t = m == null ? void 0 : m.persistToReverb) != null
                      ? t
                      : "persist",
                  shouldFetchSupplementals:
                    (n = m == null ? void 0 : m.shouldFetchSupplementals) !=
                    null
                      ? n
                      : !0,
                  shouldFetchTags:
                    (i = m == null ? void 0 : m.shouldFetchTags) != null
                      ? i
                      : !0,
                  shouldIgnoreLocalOnly:
                    (l = m == null ? void 0 : m.shouldIgnoreLocalOnly) != null
                      ? l
                      : !1,
                  source: h,
                  strategy:
                    (s = m == null ? void 0 : m.strategy) != null
                      ? s
                      : "full-fetch",
                  tagsFilter:
                    (u = m == null ? void 0 : m.tagsFilter) != null ? u : "all",
                  useMessageVisibility:
                    (c = m == null ? void 0 : m.useMessageVisibility) != null
                      ? c
                      : !1,
                };
              return o("WebMpsScheduler")
                .mpsScheduler()
                .run(
                  function () {
                    return o("WebMpsBatchLoadMessages")
                      .batchLoadMessages(
                        [
                          {
                            direction: _,
                            from: [
                              o("MpsTypes").toTimestamp(
                                o("WATimeUtils").miAdjustTimestamp(f[0]),
                              ),
                              f[1],
                            ],
                            numMessages: g,
                            threadId: y,
                          },
                        ],
                        a.$1,
                        C,
                        null,
                      )
                      .then(function (e) {
                        e.length > 1 &&
                          o("WmiErrorReport").reportWmiError(
                            o("MpsErrors").MpsErrors.error(
                              "invariant",
                              "loadMessages returned more than one range",
                            ),
                          );
                        var t = e.at(0);
                        if (t == null)
                          throw o("MpsErrors").MpsErrors.error(
                            "all_sources_failed",
                            "loadMessages returned no result",
                          );
                        return (a.$6(t.messages, C), t);
                      });
                  },
                  {
                    metrics: {
                      annotations: {
                        string: { purpose: p.purpose, strategy: C.strategy },
                      },
                      customFlags: { runtimeReliability: !0 },
                      eventSamplingRate: r("justknobx")._("4538"),
                    },
                    name: "load-messages",
                    priority:
                      (d = m == null ? void 0 : m.priority) != null
                        ? d
                        : o("TaskSchedulerPriority").BLOCKING_PRIORITY,
                  },
                ).promise;
            },
            function (e) {
              var t,
                n = e.debug,
                r = babelHelpers.objectWithoutPropertiesLoose(e, u);
              return d(
                babelHelpers.extends({}, r, {
                  config: babelHelpers.extends({}, r.config, {
                    tagsFilter: (function (e) {
                      if (e === "all" || e === void 0) return "all";
                      {
                        var t = e;
                        return Array.from(t.values());
                      }
                    })((t = r.config) == null ? void 0 : t.tagsFilter),
                  }),
                  ebEnabled: a.$1.eb.isEbEnabled(),
                }),
              );
            },
            10 / 60,
            function (e) {
              a.$3.push(e);
            },
          )),
          (this.$18 = r("memoizeWithArgsLFUCache")(
            function (e) {
              return a.$4.scan(e);
            },
            function (e) {
              return d(
                babelHelpers.extends({}, e, {
                  config: babelHelpers.extends({}, e.config, {
                    tagsFilter: (function (e) {
                      if (e === "all" || e === void 0) return "all";
                      {
                        var t = e;
                        return Array.from(t.values());
                      }
                    })(e.config.tagsFilter),
                  }),
                  ebEnabled: a.$1.eb.isEbEnabled(),
                }),
              );
            },
            10 / 60,
            function (e) {
              a.$3.push(e);
            },
          )),
          (this.loadMessages = function (e) {
            return o("MpsReadResult").toReadResult(
              a.$21(e),
              "load_messages",
              e.debug.purpose,
            );
          }),
          (this.$21 = function (e) {
            return a.$20(e).catch(function (e) {
              throw (
                a.$11(),
                o("MpsErrors").MpsErrors.classify(
                  e,
                  "load_messages",
                  "read_failed",
                )
              );
            });
          }),
          (this.extensionConfiguration = t),
          (this.$1 = n),
          (this.$2 = new (o("WebMpsBatchLoadMessage").WebMpsPointQueryApi)(n)),
          (this.$4 = new (o("WebMpsSnippetScan").WebMpsSnippetScanApi)(
            function (e, t, n) {
              return a
                .$5({
                  config: e,
                  debug: { purpose: "snippet-scan" },
                  ranges: n.map(function (e) {
                    return {
                      direction: "desc",
                      from: [
                        o("MpsTypes").toTimestamp(Number.MAX_SAFE_INTEGER),
                        null,
                      ],
                      numMessages: t,
                      threadId: e,
                    };
                  }),
                })
                .then(function (t) {
                  return (
                    a.$6(
                      t.flatMap(function (e) {
                        return e.messages;
                      }),
                      e,
                    ),
                    t
                  );
                });
            },
          )),
          this.$7(),
          this.$8(function (e) {
            return n.generateDeletionMessage(e);
          }));
      }
      var n = t.prototype;
      return (
        (n.saveNewMessage = async function (t, n) {
          var e = null;
          if (
            (await this.saveNewMessages([t], n, function (n) {
              e = n.get(t.message.messageId);
            }),
            e != null)
          )
            throw e;
        }),
        (n.saveNewMessages = async function (t, n, r) {
          var e = await this.$10(t, n);
          e.size > 0 && r(e);
        }),
        (n.$10 = function (t, n) {
          var e = this,
            a = async function () {
              e.$11();
              var a = {
                messageToQpl: o("WmiMultiQplTracker").WmiMultiQplTracker.from(
                  t.map(function (e) {
                    return [
                      e.message.messageId,
                      p({ payload: e, source: n.source }),
                    ];
                  }),
                ),
              };
              a.messageToQpl
                .all(
                  t.map(function (e) {
                    return e.message.messageId;
                  }),
                )
                .addPoint("preprocess_start");
              var i = await e.extensionConfiguration.preprocessors.run({
                  ctx: a,
                  payloadList: t,
                }),
                l = i.errors,
                s = i.payloadList;
              (a.messageToQpl
                .all(
                  s.map(function (e) {
                    return e.message.messageId;
                  }),
                )
                .addPoint("preprocess_end"),
                a.messageToQpl
                  .all(
                    s.map(function (e) {
                      return e.message.messageId;
                    }),
                  )
                  .addPoint("schedule_cleaners_start"),
                await o("WebMpsInsertionCleaners").scheduleCleaners(s),
                a.messageToQpl
                  .all(
                    s.map(function (e) {
                      return e.message.messageId;
                    }),
                  )
                  .addPoint("schedule_cleaners_end"),
                a.messageToQpl
                  .all(
                    s.map(function (e) {
                      return e.message.messageId;
                    }),
                  )
                  .addPoint("persist_start"));
              var u = await o("WebMpsInsertionFlow").persistNewMessages(s, a),
                c = u.errors,
                d = u.msgs;
              (a.messageToQpl
                .all(
                  d.map(function (e) {
                    return e.message.messageId;
                  }),
                )
                .addPoint("persist_end"),
                c.forEach(function (e, t) {
                  (a.messageToQpl.addAnnotations(t, {
                    string: { error_code: o("MpsErrors").MpsErrors.codeOf(e) },
                  }),
                    a.messageToQpl.endFail(
                      t,
                      "persist-error",
                      o("getSafeQplErrorMessage").getSafeQPLErrorMessage(e),
                    ));
                }),
                a.messageToQpl
                  .all(
                    d.map(function (e) {
                      return e.message.messageId;
                    }),
                  )
                  .addPoint("persisted"));
              var m =
                (e.extensionConfiguration.skipDedupedPostprocessing == null
                  ? void 0
                  : e.extensionConfiguration.skipDedupedPostprocessing()) === !0
                  ? d.filter(function (e) {
                      return e.dedupedExisting !== !0;
                    })
                  : d;
              a.messageToQpl
                .all(
                  d.map(function (e) {
                    return e.message.messageId;
                  }),
                )
                .addPoint("critical_postprocess_start");
              var _ = await e.$12(m, a);
              (a.messageToQpl
                .all(
                  d.map(function (e) {
                    return e.message.messageId;
                  }),
                )
                .addPoint("critical_postprocess_end"),
                a.messageToQpl
                  .all(
                    d.map(function (e) {
                      return e.message.messageId;
                    }),
                  )
                  .addPoint("non_critical_postprocess_start"),
                e.$13(m, a),
                a.messageToQpl
                  .all(
                    d.map(function (e) {
                      return e.message.messageId;
                    }),
                  )
                  .addPoint("non_critical_postprocess_end"),
                d.forEach(function (e) {
                  a.messageToQpl.endSuccess(e.message.messageId);
                }));
              var f = r("mergeMaps")(l, c, _);
              return (
                f.forEach(function (e, t) {
                  o("WmiErrorReport").reportWmiError(e, {
                    loggerProject: n.loggerProject,
                    loggerSubject: t,
                  });
                }),
                f
              );
            };
          return this.$9.enqueue(function () {
            return o("WebMpsScheduler")
              .mpsScheduler()
              .run(a, {
                metrics: {
                  annotations: { string: { source: n.source } },
                  customFlags: { runtimeReliability: !0 },
                  eventSamplingRate: r("justknobx")._("4535"),
                },
                name: "save-new-messages",
                priority: o("TaskSchedulerPriority").BLOCKING_PRIORITY,
              }).promise;
          });
        }),
        (n.$13 = function (t, n) {
          o("WebMpsPostprocess")
            .runNonCriticalPostprocessor(
              t,
              this.extensionConfiguration.postProcessors.nonCritical,
              n,
            )
            .catch(function (e) {
              o("WmiErrorReport").reportWmiError(
                o("MpsErrors").MpsErrors.classify(
                  e,
                  "non_critical_postprocessing",
                  "write_failed",
                ),
              );
            });
        }),
        (n.$12 = function (t, n) {
          return o("WebMpsPostprocess")
            .runCriticalPostprocessor(
              t,
              this.extensionConfiguration.postProcessors.critical,
              n,
            )
            .catch(function (e) {
              var r = o("MpsErrors").MpsErrors.classify(
                e,
                "critical_postprocessing",
                "write_failed",
              );
              return o("WmiErrorFixesGate").isWmiErrorFixEnabled()
                ? (o("WmiErrorReport").reportWmiError(r),
                  new Map(
                    t.map(function (e) {
                      return (
                        n.messageToQpl.endFail(
                          e.message.messageId,
                          "critical_postprocessing-error",
                          o("getSafeQplErrorMessage").getSafeQPLErrorMessage(r),
                        ),
                        [e.message.messageId, r]
                      );
                    }),
                  ))
                : (o("WmiErrorReport").reportWmiError(r), new Map());
            });
        }),
        (n.purgeDeletions = async function () {
          try {
            await o("WAWaitForUserUnblocked").waitForUserUnblocked();
            var e = o("WebMpsScheduler")
              .mpsScheduler()
              .run(o("WebMpsPurgeDeletions").purgeDeletions, {
                name: "purge-deletions",
                priority: o("TaskSchedulerPriority").BACKGROUND_PRIORITY,
              }).promise;
            return o("WmiErrorFixesGate").isWmiErrorFixEnabled() ? await e : e;
          } catch (e) {
            return (
              o("WmiErrorReport").reportWmiError(
                o("MpsErrors").MpsErrors.classify(
                  e,
                  "purge_deletions",
                  "purge_failed",
                ),
              ),
              0
            );
          }
        }),
        (n.purgeDeletedPayload = async function () {
          try {
            await o("WAWaitForUserUnblocked").waitForUserUnblocked();
            var e = o("WebMpsScheduler")
              .mpsScheduler()
              .run(o("WebMpsPurgeDeletedPayload").purgeDeletedPayload, {
                name: "purge-deleted-payload",
                priority: o("TaskSchedulerPriority").BACKGROUND_PRIORITY,
              }).promise;
            return o("WmiErrorFixesGate").isWmiErrorFixEnabled() ? await e : e;
          } catch (e) {
            return (
              o("WmiErrorReport").reportWmiError(
                o("MpsErrors").MpsErrors.classify(
                  e,
                  "purge_deleted_payload",
                  "purge_failed",
                ),
              ),
              0
            );
          }
        }),
        (n.getNextDeletionTimestampMs = async function () {
          try {
            return (
              await o("WAWaitForUserUnblocked").waitForUserUnblocked(),
              await o("WebMpsScheduler")
                .mpsScheduler()
                .run(
                  o("WebMpsPurgeDeletedPayload").getNextDeletionTimestampMs,
                  {
                    name: "get-next-deletion-timestamp-ms",
                    priority: o("TaskSchedulerPriority").BACKGROUND_PRIORITY,
                  },
                ).promise
            );
          } catch (e) {
            throw o("MpsErrors").MpsErrors.classify(
              e,
              "get_next_deletion_timestamp_ms",
              "purge_failed",
            );
          }
        }),
        (n.purgeExpiredMessages = async function (t) {
          try {
            await o("WAWaitForUserUnblocked").waitForUserUnblocked();
            var e = o("WebMpsScheduler")
              .mpsScheduler()
              .run(
                function () {
                  return o("WebMpsPurgeExpiredMessages").purgeExpiredMessages(
                    t,
                    null,
                  );
                },
                {
                  metrics: { eventSamplingRate: r("justknobx")._("4539") },
                  name: "purge-expired-messages",
                  priority: o("TaskSchedulerPriority").BACKGROUND_PRIORITY,
                },
              ).promise;
            return o("WmiErrorFixesGate").isWmiErrorFixEnabled() ? await e : e;
          } catch (e) {
            return (
              o("WmiErrorReport").reportWmiError(
                o("MpsErrors").MpsErrors.classify(
                  e,
                  "purge_expired_messages",
                  "purge_failed",
                ),
              ),
              0
            );
          }
        }),
        (n.getNextExpiryTimestampMs = async function () {
          try {
            return (
              await o("WAWaitForUserUnblocked").waitForUserUnblocked(),
              await o("WebMpsScheduler")
                .mpsScheduler()
                .run(o("WebMpsPurgeExpiredMessages").getNextExpiryTimestampMs, {
                  metrics: { eventSamplingRate: r("justknobx")._("4539") },
                  name: "get-next-expire-timestamp-ms",
                  priority: o("TaskSchedulerPriority").BACKGROUND_PRIORITY,
                }).promise
            );
          } catch (e) {
            throw o("MpsErrors").MpsErrors.classify(
              e,
              "get_next_expiry_timestamp_ms",
              "purge_failed",
            );
          }
        }),
        (n.debugDbDump = function () {
          return o("MpsReverbDbDump").debugGetReverbDbDump();
        }),
        (n.spamReportLoadMessages = function (t) {
          var e = this;
          return o("WebMpsScheduler")
            .mpsScheduler()
            .run(
              async function () {
                var n = await Promise.all([
                    e.$20({
                      config: {
                        persistToReverb: "no-persist",
                        shouldFetchSupplementals: !0,
                        shouldFetchTags: !1,
                        shouldIgnoreLocalOnly: !1,
                        strategy: "local-only",
                        tagsFilter: "all",
                      },
                      debug: { purpose: "get-latest-msgs-for-spam-report" },
                      direction: "desc",
                      from: [
                        o("MpsTypes").toTimestamp(Number.MAX_SAFE_INTEGER),
                        null,
                      ],
                      numMessages: t.numMessages,
                      threadId: t.threadId,
                    }),
                    o("WebMpsLoadDeletedMessages").loadDeletedMessages(
                      t,
                      e.$1.decryptedProtobufToFullMessage,
                    ),
                  ]),
                  r = n[0],
                  a = n[1],
                  i = r.messages.filter(function (e) {
                    return !a.tombstones.has(e.toplevelProtobuf.messageId);
                  });
                return []
                  .concat(i, a.messages)
                  .toSorted(function (e, t) {
                    return (
                      t.toplevelProtobuf.timestampMs -
                      e.toplevelProtobuf.timestampMs
                    );
                  })
                  .slice(0, t.numMessages);
              },
              { name: "get-latest-msgs-for-spam-report" },
            ).promise;
        }),
        (n.$11 = function () {
          this.$3.forEach(function (e) {
            return e();
          });
        }),
        (n.$6 = function (t, n) {
          var e = this.extensionConfiguration.readSideEffects,
            r = t.filter(function (e) {
              return !o("MpsTypes").isVisibilityMetadataMessage(e);
            });
          if (!(e == null || r.length === 0))
            try {
              e(r, n);
            } catch (e) {
              o("WmiErrorReport").reportWmiError(
                o("MpsErrors").MpsErrors.classify(
                  e,
                  "read_side_effects",
                  "read_failed",
                ),
              );
            }
        }),
        (n.$7 = function () {
          var e = this;
          o("schedulePeriodicTask").schedulePeriodicTask(
            function () {
              return e.purgeDeletions();
            },
            o("DateConsts").MS_PER_MIN * 20,
          );
        }),
        (n.$8 = function (t) {
          var e = this;
          (o("MpsEphemeralCleaner").startMpsEphemeralCleaner({
            getNextTs: function () {
              return e.getNextExpiryTimestampMs();
            },
            purgeEnabled: function () {
              return !0;
            },
            removeExpired: function () {
              return e.purgeExpiredMessages(t);
            },
          }),
            o("MpsDeletedCleaner").startMpsDeletedCleaner({
              getNextTs: function () {
                return e.getNextDeletionTimestampMs();
              },
              purgeEnabled: function () {
                return !0;
              },
              removeExpired: function () {
                return e.purgeDeletedPayload();
              },
            }));
        }),
        t
      );
    })();
    function y() {
      if (c == null)
        throw o("MpsErrors").MpsErrors.error(
          "used_before_init",
          "MPS not initialised",
        );
      return c;
    }
    function C() {
      c = void 0;
    }
    ((l.makeMps = m),
      (l.startIncomingMessageFlow = p),
      (l.mps = y),
      (l.resetMps_TEST_ONLY = C));
  },
  98,
);
