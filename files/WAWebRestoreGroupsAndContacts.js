__d(
  "WAWebRestoreGroupsAndContacts",
  [
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
    "WAWebPerformanceUtils",
    "WAWebReleaseToEventLoop",
    "WAWebSchemaGroupMetadata",
    "WAWebWamMemoryStat",
    "WAWebWamOfflineResumeReporter",
    "WAWebWidFactory",
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
      f = 200,
      g = 100;
    function h() {
      return (
        o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.qpl.addPoint(
          "RestoreGroupsAndContacts_start",
        ),
        o("WAWebModelStorageInitialize")
          .initializeWithoutGKs()
          .then(async function () {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[init-from-storage] restoreGroupsAndContacts: start",
                ])),
            );
            var t = o("WAWebABProps").getABPropConfigValue(
                "web_anr_async_contacts_restore_from_db_enabled",
              ),
              n = self.performance.now();
            o(
              "WAWebWamOfflineResumeReporter",
            ).OfflineResumeReporter.qpl.addPoint(
              "RestoreContactsReadByLid_start",
            );
            var a = r("WAWebLidAwareContactsDB")
              .all()
              .then(async function (e) {
                return (
                  t &&
                    (await o("WAWebReleaseToEventLoop").releaseToEventLoop()),
                  o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[init-from-storage] contacts: got ",
                        " from db",
                      ])),
                    o("WAWebWamMemoryStat").roundIntForMetrics(e.length),
                  ),
                  o(
                    "WAWebWamOfflineResumeReporter",
                  ).OfflineResumeReporter.qpl.addPoint(
                    "WarmupAllLidMappings_start",
                  ),
                  await o("WAWebApiContact").warmUpAllLidPnMappings(e),
                  t &&
                    (await o("WAWebReleaseToEventLoop").releaseToEventLoop()),
                  o(
                    "WAWebWamOfflineResumeReporter",
                  ).OfflineResumeReporter.qpl.addPoint(
                    "WarmupAllLidMappings_end",
                  ),
                  r("justknobx")._("1559") && y(e),
                  t
                    ? await b(e)
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
                    o("WAWebWamMemoryStat").roundIntForMetrics(e.length),
                    o("WAWebPerformanceUtils").getElapsedTimeMs(n),
                  ),
                  e
                );
              });
            o(
              "WAWebWamOfflineResumeReporter",
            ).OfflineResumeReporter.qpl.addPoint("RestoreGroups_start");
            var i = o("WAWebSchemaGroupMetadata").getGroupMetadataTable().all();
            if (t) {
              await a;
              var l = await i;
              (await C(l),
                l.forEach(function (e) {
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
                  o("WAWebWamMemoryStat").roundIntForMetrics(l.length),
                  o("WAWebPerformanceUtils").getElapsedTimeMs(n),
                ),
                o(
                  "WAWebWamOfflineResumeReporter",
                ).OfflineResumeReporter.qpl.addPoint("RestoreGroups_end"));
            } else {
              var m = i.then(function (e) {
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
                    o("WAWebPerformanceUtils").getElapsedTimeMs(n),
                  ),
                  o(
                    "WAWebWamOfflineResumeReporter",
                  ).OfflineResumeReporter.qpl.addPoint("RestoreGroups_end"));
              });
              return Promise.all([a, m]);
            }
          })
          .then(function () {
            o(
              "WAWebWamOfflineResumeReporter",
            ).OfflineResumeReporter.qpl.addPoint(
              "RestoreGroupsAndContacts_end",
            );
          })
          .then(function () {
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
              });
          })
      );
    }
    async function y(e) {
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
    }
    async function C(e) {
      if (
        o("WAWebABProps").getABPropConfigValue("wmi_task_scheduler_second_step")
      ) {
        for (var t of e)
          (o("WAWebApiHydrateWidsUtil").hydrateWids(t),
            r("WAWebGroupMetadataCollection").add(t, { merge: !0 }),
            await r("WACommonTaskScheduler").yield(
              o("TaskSchedulerPriority").HIGH_PRIORITY,
            ));
        return;
      }
      for (var n = 0; n < e.length; n += g) {
        var a = e.slice(n, n + g);
        (r("WAWebGroupMetadataCollection").add(
          a.map(o("WAWebApiHydrateWidsUtil").hydrateWids),
          { merge: !0 },
        ),
          await o("WAWebReleaseToEventLoop").releaseToEventLoop());
      }
    }
    async function b(e) {
      if (
        o("WAWebABProps").getABPropConfigValue("wmi_task_scheduler_second_step")
      ) {
        for (var t of e)
          (o("WAWebApiHydrateWidsUtil").hydrateWids(t),
            o("WAWebContactCollection").ContactCollection.add(t, {
              silent: !0,
              merge: !0,
            }),
            await r("WACommonTaskScheduler").yield(
              o("TaskSchedulerPriority").HIGH_PRIORITY,
            ));
        return;
      }
      for (var n = 0; n < e.length; n += f) {
        var a = e.slice(n, n + f);
        (o("WAWebApiHydrateWidsUtil").hydrateWids(a),
          o("WAWebContactCollection").ContactCollection.add(a, {
            silent: !0,
            merge: !0,
          }),
          await o("WAWebReleaseToEventLoop").releaseToEventLoop());
      }
    }
    l.restoreGroupsAndContacts = h;
  },
  98,
);
