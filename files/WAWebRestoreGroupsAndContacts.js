__d(
  "WAWebRestoreGroupsAndContacts",
  [
    "Promise",
    "WALogger",
    "WAPromiseDelays",
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
      g = 500,
      h = 100,
      y = 100;
    function C() {
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
                            (yield o("WAPromiseDelays").releaseToEventLoop()),
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
                            (yield o("WAPromiseDelays").releaseToEventLoop()),
                          o(
                            "WAWebWamOfflineResumeReporter",
                          ).OfflineResumeReporter.qpl.addPoint(
                            "WarmupAllLidMappings_end",
                          ),
                          r("justknobx")._("1559") && b(e),
                          t
                            ? yield L(e)
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
                (yield S(m),
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
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          for (var t = k(), n = 0; n < e.length; n += h) {
            var a = e.slice(n, n + h);
            (r("WAWebGroupMetadataCollection").add(
              a.map(o("WAWebApiHydrateWidsUtil").hydrateWids),
              { merge: !0 },
            ),
              yield t());
          }
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          for (var t = k(), n = 0; n < e.length; n += g) {
            var r = e.slice(n, n + g);
            (o("WAWebApiHydrateWidsUtil").hydrateWids(r),
              o("WAWebContactCollection").ContactCollection.add(r, {
                silent: !0,
                merge: !0,
              }),
              yield t());
          }
        })),
        E.apply(this, arguments)
      );
    }
    function k() {
      var e = self.performance.now();
      return function () {
        if (self.performance.now() - e > y)
          return (
            (e = self.performance.now()),
            o("WAPromiseDelays").releaseToEventLoop()
          );
      };
    }
    l.restoreGroupsAndContacts = C;
  },
  98,
);
