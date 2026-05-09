__d(
  "WAWebRestoreGroupsAndContacts",
  [
    "Promise",
    "TaskSchedulerPriority",
    "WACommonTaskScheduler",
    "WALogger",
    "WAWebABProps",
    "WAWebApiContact",
    "WAWebApiHydrateWidsUtil",
    "WAWebBackendApi",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebDBOutContactDatabaseApi",
    "WAWebGroupMetadataCollection",
    "WAWebGroupQueryBridge",
    "WAWebLidAwareContactsDB",
    "WAWebModelStorageInitialize",
    "WAWebOutContactInviteGating",
    "WAWebPerformanceUtils",
    "WAWebReleaseToEventLoop",
    "WAWebSchemaGroupMetadata",
    "WAWebWamMemoryStat",
    "WAWebWamOfflineResumeReporter",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g = 200,
      h = 100;
    function y() {
      return (
        o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.qpl.addPoint(
          "RestoreGroupsAndContacts_start",
        ),
        o("WAWebModelStorageInitialize")
          .initializeWithoutGKs()
          .then(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[init-from-storage] restoreGroupsAndContacts: start",
                  ])),
              );
              var t = o("WAWebABProps").getABPropConfigValue(
                  "web_anr_async_contacts_restore_from_db_enabled",
                ),
                a = self.performance.now();
              o(
                "WAWebWamOfflineResumeReporter",
              ).OfflineResumeReporter.qpl.addPoint(
                "RestoreContactsReadByLid_start",
              );
              var i = r("WAWebLidAwareContactsDB")
                .all()
                .then(
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        return (
                          t &&
                            (yield o(
                              "WAWebReleaseToEventLoop",
                            ).releaseToEventLoop()),
                          o("WALogger").LOG(
                            s ||
                              (s = babelHelpers.taggedTemplateLiteralLoose([
                                "[init-from-storage] contacts: got ",
                                " from db",
                              ])),
                            o("WAWebWamMemoryStat").roundIntForMetrics(
                              e.length,
                            ),
                          ),
                          o(
                            "WAWebWamOfflineResumeReporter",
                          ).OfflineResumeReporter.qpl.addPoint(
                            "WarmupAllLidMappings_start",
                          ),
                          yield o("WAWebApiContact").warmUpAllLidPnMappings(e),
                          t &&
                            (yield o(
                              "WAWebReleaseToEventLoop",
                            ).releaseToEventLoop()),
                          o(
                            "WAWebWamOfflineResumeReporter",
                          ).OfflineResumeReporter.qpl.addPoint(
                            "WarmupAllLidMappings_end",
                          ),
                          r("justknobx")._("1559") && C(e),
                          t
                            ? yield R(e)
                            : o("WAWebContactCollection").ContactCollection.add(
                                o("WAWebApiHydrateWidsUtil").hydrateWids(e),
                                { silent: !0, merge: !0 },
                              ),
                          o(
                            "WAWebWamOfflineResumeReporter",
                          ).OfflineResumeReporter.qpl.addPoint(
                            "RestoreContactsReadByLid_end",
                          ),
                          o("WALogger").LOG(
                            u ||
                              (u = babelHelpers.taggedTemplateLiteralLoose([
                                "[init-from-storage] contacts: restored ",
                                ", took ",
                                "",
                              ])),
                            o("WAWebWamMemoryStat").roundIntForMetrics(
                              e.length,
                            ),
                            o("WAWebPerformanceUtils").getElapsedTimeMs(a),
                          ),
                          e
                        );
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                );
              o(
                "WAWebWamOfflineResumeReporter",
              ).OfflineResumeReporter.qpl.addPoint("RestoreGroups_start");
              var l = o("WAWebSchemaGroupMetadata")
                .getGroupMetadataTable()
                .all();
              if (t) {
                yield i;
                var m = yield l;
                (yield v(m),
                  m.forEach(function (e) {
                    var t = o("WAWebWidFactory").createWidFromWidLike(e.id);
                    (e.isParentGroup === !0 &&
                      o("WAWebChatCollection").ChatCollection.gadd({
                        id: t,
                        isReadOnly: !1,
                      }),
                      o("WAWebGroupQueryBridge").updateSubject(t, e.subject));
                  }),
                  o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[init-from-storage] groups: restored ",
                        ", took ",
                        "",
                      ])),
                    o("WAWebWamMemoryStat").roundIntForMetrics(m.length),
                    o("WAWebPerformanceUtils").getElapsedTimeMs(a),
                  ),
                  o(
                    "WAWebWamOfflineResumeReporter",
                  ).OfflineResumeReporter.qpl.addPoint("RestoreGroups_end"));
              } else {
                var p = l.then(function (e) {
                  (r("WAWebGroupMetadataCollection").add(
                    e.map(o("WAWebApiHydrateWidsUtil").hydrateWids),
                    { merge: !0 },
                  ),
                    e.forEach(function (e) {
                      var t = o("WAWebWidFactory").createWidFromWidLike(e.id);
                      (e.isParentGroup === !0 &&
                        o("WAWebChatCollection").ChatCollection.gadd({
                          id: t,
                          isReadOnly: !1,
                        }),
                        o("WAWebGroupQueryBridge").updateSubject(t, e.subject));
                    }),
                    o("WALogger").LOG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "[init-from-storage] groups: restored ",
                          ", took ",
                          "",
                        ])),
                      o("WAWebWamMemoryStat").roundIntForMetrics(e.length),
                      o("WAWebPerformanceUtils").getElapsedTimeMs(a),
                    ),
                    o(
                      "WAWebWamOfflineResumeReporter",
                    ).OfflineResumeReporter.qpl.addPoint("RestoreGroups_end"));
                });
                return (f || (f = n("Promise"))).all([i, p]);
              }
            }),
          )
          .then(function () {
            (o("WAWebOutContactInviteGating").isOutContactInviteEnabled() &&
              o("WAWebDBOutContactDatabaseApi")
                .getAllOutContacts()
                .then(function (e) {
                  var t = e.map(function (e) {
                    return {
                      id: e.id,
                      fullName: e.fullName,
                      firstName: e.firstName,
                    };
                  });
                  (o("WAWebBackendApi").frontendFireAndForget(
                    "bulkUpsertOutContacts",
                    { contacts: t },
                  ),
                    o("WALogger").LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "[init-from-storage] out-contacts: restored ",
                          "",
                        ])),
                      o("WAWebWamMemoryStat").roundIntForMetrics(e.length),
                    ));
                })
                .catch(function (e) {
                  o("WALogger").LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[init-from-storage] restoreOutContacts failed: ",
                        "",
                      ])),
                    String(e),
                  );
                }),
              o(
                "WAWebWamOfflineResumeReporter",
              ).OfflineResumeReporter.qpl.addPoint(
                "RestoreGroupsAndContacts_end",
              ));
          })
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = [];
          for (var n of e)
            n.contactHash == null &&
              ((n.contactHash = o("WAWebApiContact").getContactHash(n.id)),
              t.push(n));
          t.length > 0 &&
            (o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[init-from-storage] contacts: ",
                  " missing hash, updating",
                ])),
              t.length,
            ),
            o("WAWebApiContact").updateContactsHashes(t));
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            o("WAWebABProps").getABPropConfigValue(
              "wmi_task_scheduler_second_step",
            )
          ) {
            for (var t of e)
              (o("WAWebApiHydrateWidsUtil").hydrateWids(t),
                r("WAWebGroupMetadataCollection").add(t, { merge: !0 }),
                yield r("WACommonTaskScheduler").yield(
                  o("TaskSchedulerPriority").HIGH_PRIORITY,
                ));
            return;
          }
          for (var n = 0; n < e.length; n += h) {
            var a = e.slice(n, n + h);
            (r("WAWebGroupMetadataCollection").add(
              a.map(o("WAWebApiHydrateWidsUtil").hydrateWids),
              { merge: !0 },
            ),
              yield o("WAWebReleaseToEventLoop").releaseToEventLoop());
          }
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            o("WAWebABProps").getABPropConfigValue(
              "wmi_task_scheduler_second_step",
            )
          ) {
            for (var t of e)
              (o("WAWebApiHydrateWidsUtil").hydrateWids(t),
                o("WAWebContactCollection").ContactCollection.add(t, {
                  silent: !0,
                  merge: !0,
                }),
                yield r("WACommonTaskScheduler").yield(
                  o("TaskSchedulerPriority").HIGH_PRIORITY,
                ));
            return;
          }
          for (var n = 0; n < e.length; n += g) {
            var a = e.slice(n, n + g);
            (o("WAWebApiHydrateWidsUtil").hydrateWids(a),
              o("WAWebContactCollection").ContactCollection.add(a, {
                silent: !0,
                merge: !0,
              }),
              yield o("WAWebReleaseToEventLoop").releaseToEventLoop());
          }
        })),
        L.apply(this, arguments)
      );
    }
    l.restoreGroupsAndContacts = y;
  },
  98,
);
