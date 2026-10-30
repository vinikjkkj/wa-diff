__d(
  "WAWebRestoreGroupsAndContacts",
  [
    "Promise",
    "WALogger",
    "WAWebApiContact",
    "WAWebApiHydrateWidsUtil",
    "WAWebBackendApi",
    "WAWebChatCollection",
    "WAWebChatGroupUtils",
    "WAWebContactCollection",
    "WAWebDBOutContactDatabaseApi",
    "WAWebFrontendContactGetters",
    "WAWebGroupMetadataCollection",
    "WAWebGroupQueryBridge",
    "WAWebLidAwareContactsDB",
    "WAWebModelStorageInitialize",
    "WAWebPerformanceUtils",
    "WAWebSchemaGroupMetadata",
    "WAWebWamMemoryStat",
    "WAWebWamOfflineResumeReporter",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
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
      g,
      h = (g || (g = n("Promise"))).resolve();
    function y() {
      return h;
    }
    function C() {
      o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.qpl.addPoint(
        "RestoreGroupsAndContacts_start",
      );
      var t = o("WAWebModelStorageInitialize").initializeWithoutGKs(),
        a = t.then(function () {
          return self.performance.now();
        }),
        i = a.then(b);
      h = i;
      var l = a.then(
        (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[init-from-storage] restoreGroupsAndContacts: start",
                ])),
            ),
              o(
                "WAWebWamOfflineResumeReporter",
              ).OfflineResumeReporter.qpl.addPoint(
                "RestoreContactsReadByLid_start",
              ));
            var a = r("WAWebLidAwareContactsDB")
              .all()
              .then(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      return (
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
                        yield o("WAWebApiContact").warmUpAllLidPnMappings(e),
                        o(
                          "WAWebWamOfflineResumeReporter",
                        ).OfflineResumeReporter.qpl.addPoint(
                          "WarmupAllLidMappings_end",
                        ),
                        S(e),
                        o("WAWebContactCollection").ContactCollection.add(
                          o("WAWebApiHydrateWidsUtil").hydrateWids(e),
                          { silent: !0, merge: !0 },
                        ),
                        o("WAWebChatCollection").ChatCollection.forEach(L),
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
                          o("WAWebPerformanceUtils").getElapsedTimeMs(t),
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
            return a;
          });
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
      );
      return (g || (g = n("Promise")))
        .all([l, i])
        .then(function () {
          o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.qpl.addPoint(
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
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[init-from-storage] out-contacts: restored ",
                      "",
                    ])),
                  o("WAWebWamMemoryStat").roundIntForMetrics(e.length),
                ));
            })
            .catch(function (e) {
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[init-from-storage] restoreOutContacts failed: ",
                    "",
                  ])),
                String(e),
              );
            });
        });
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.qpl.addPoint(
            "RestoreGroups_start",
          );
          var t = yield o("WAWebSchemaGroupMetadata")
            .getGroupMetadataTable()
            .all();
          (r("WAWebGroupMetadataCollection").add(
            t.map(o("WAWebApiHydrateWidsUtil").hydrateWids),
            { merge: !0 },
          ),
            t.forEach(function (e) {
              var t = o("WAWebWidFactory").createWidFromWidLike(e.id);
              (e.isParentGroup === !0 &&
                o("WAWebChatCollection").ChatCollection.gadd({
                  id: t,
                  isReadOnly: !1,
                }),
                o("WAWebGroupQueryBridge").updateSubject(t, e.subject));
            }),
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[init-from-storage] groups: restored ",
                  ", took ",
                  "",
                ])),
              o("WAWebWamMemoryStat").roundIntForMetrics(t.length),
              o("WAWebPerformanceUtils").getElapsedTimeMs(e),
            ),
            o(
              "WAWebWamOfflineResumeReporter",
            ).OfflineResumeReporter.qpl.addPoint("RestoreGroups_end"));
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
          o("WAWebApiContact").armContactHashRepairWait();
          try {
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
              yield o("WAWebApiContact").updateContactsHashes(t));
          } catch (e) {
            o("WALogger").WARN(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[init-from-storage] contacts: hash repair failed: ",
                  "",
                ])),
              String(e),
            );
          } finally {
            o("WAWebApiContact").markContactHashRepairComplete();
          }
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      try {
        if (
          e.trusted ||
          !o("WAWebFrontendContactGetters").getIsMyContact(e.contact)
        )
          return;
        (e.isTrusted(), o("WAWebChatGroupUtils").updateTitle(e));
      } catch (e) {
        o("WALogger").WARN(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "[init-from-storage] contacts: chat refresh failed: ",
              "",
            ])),
          String(e),
        );
      }
    }
    ((l.waitForGroupMetadataRestore = y), (l.restoreGroupsAndContacts = C));
  },
  98,
);
