__d(
  "WAWebRestoreGroupsAndContacts",
  [
    "WAJids",
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
    "WAWebNoop",
    "WAWebPerformanceUtils",
    "WAWebSchemaGroupMetadata",
    "WAWebWamMemoryStat",
    "WAWebWamOfflineResumeReporter",
    "WAWebWidFactory",
    "getErrorSafe",
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
      g,
      h,
      y,
      C,
      b = Promise.resolve();
    function v() {
      return b;
    }
    var S = !1,
      R = null,
      L = F();
    function E() {
      var e = R;
      return e != null ? ((R = null), e) : T();
    }
    function k() {
      if (!S) {
        var t = T();
        ((R = t),
          t.catch(function (t) {
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[init-from-storage] early restoreGroupsAndContacts failed: ",
                  "",
                ])),
              String(t),
            );
          }));
      }
    }
    function I() {
      return L.promise;
    }
    function T() {
      ((S = !0),
        o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.qpl.addPoint(
          "RestoreGroupsAndContacts_start",
        ));
      var e = o("WAWebModelStorageInitialize").initializeWithoutGKs(),
        t = e.then(function () {
          return self.performance.now();
        }),
        n = t.then(D);
      b = n;
      var a = t.then(async function (e) {
          (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[init-from-storage] restoreGroupsAndContacts: start",
              ])),
          ),
            o(
              "WAWebWamOfflineResumeReporter",
            ).OfflineResumeReporter.qpl.addPoint(
              "RestoreContactsReadByLid_start",
            ));
          var t = r("WAWebLidAwareContactsDB")
            .all()
            .then(async function (t) {
              (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[init-from-storage] contacts: got ",
                    " from db",
                  ])),
                o("WAWebWamMemoryStat").roundIntForMetrics(t.length),
              ),
                o(
                  "WAWebWamOfflineResumeReporter",
                ).OfflineResumeReporter.qpl.addPoint(
                  "WarmupAllLidMappings_start",
                ),
                await o("WAWebApiContact").warmUpAllLidPnMappings(t),
                o(
                  "WAWebWamOfflineResumeReporter",
                ).OfflineResumeReporter.qpl.addPoint(
                  "WarmupAllLidMappings_end",
                ),
                x(t),
                $(t));
              var n = o("WAWebApiHydrateWidsUtil").hydrateWids(t);
              return (
                o("WAWebContactCollection").ContactCollection.add(n, {
                  silent: !0,
                  merge: !0,
                }),
                w(n),
                o("WAWebChatCollection").ChatCollection.forEach(A),
                L.resolve(),
                o(
                  "WAWebWamOfflineResumeReporter",
                ).OfflineResumeReporter.qpl.addPoint(
                  "RestoreContactsReadByLid_end",
                ),
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[init-from-storage] contacts: restored ",
                      ", took ",
                      "",
                    ])),
                  o("WAWebWamMemoryStat").roundIntForMetrics(t.length),
                  o("WAWebPerformanceUtils").getElapsedTimeMs(e),
                ),
                t
              );
            });
          return t;
        }),
        i = L;
      return (
        a.catch(function () {
          i.resolve();
        }),
        Promise.all([a, n])
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
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[init-from-storage] out-contacts: restored ",
                        "",
                      ])),
                    o("WAWebWamMemoryStat").roundIntForMetrics(e.length),
                  ));
              })
              .catch(function (e) {
                o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[init-from-storage] restoreOutContacts failed: ",
                      "",
                    ])),
                  String(e),
                );
              });
          })
      );
    }
    async function D(e) {
      o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.qpl.addPoint(
        "RestoreGroups_start",
      );
      var t = await o("WAWebSchemaGroupMetadata").getGroupMetadataTable().all();
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
        o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.qpl.addPoint(
          "RestoreGroups_end",
        ));
    }
    async function x(e) {
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
          await o("WAWebApiContact").updateContactsHashes(t));
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
    }
    function $(e) {
      if (!r("justknobx")._("437"))
        try {
          var t = e
            .map(function (e) {
              var t = e.id;
              return t;
            })
            .filter(function (e) {
              return o("WAJids").validateUserJid(e) == null;
            });
          t.length > 0 &&
            o("WALogger")
              .ERROR(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[init-from-storage] contacts: ",
                    " rows with a non-jid id (",
                    ")",
                  ])),
                t.length,
                P(t),
              )
              .sendLogs("contact-db-non-jid-id");
        } catch (e) {
          o("WALogger").WARN(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "[init-from-storage] contacts: non-jid id report failed: ",
                "",
              ])),
            String(e),
          );
        }
    }
    function P(e) {
      var t = new Map([
        ["wid", 0],
        ["device", 0],
        ["empty", 0],
      ]);
      for (var n of e) {
        var r,
          o = N(n),
          a = o === "other" ? M(n) : o;
        t.set(a, ((r = t.get(a)) != null ? r : 0) + 1);
      }
      return Array.from(t, function (e) {
        var t = e[0],
          n = e[1];
        return t + ": " + n;
      }).join(", ");
    }
    function N(e) {
      return e === ""
        ? "empty"
        : e.includes(":")
          ? "device"
          : e.endsWith("@c.us")
            ? "wid"
            : "other";
    }
    function M(e) {
      var t = e.lastIndexOf("@");
      return t === -1 ? "no-domain" : e.slice(t + 1);
    }
    function w(e) {
      try {
        e.forEach(function (e) {
          var t = e.id,
            n = e.textStatusExpiryTs;
          if (n != null) {
            var r;
            (r = o("WAWebContactCollection").ContactCollection.get(t)) ==
              null || r.restartTextStatusExpiration();
          }
        });
      } catch (e) {
        o("WALogger")
          .WARN(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "[init-from-storage] contacts: About expiry restart failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("restore-text-status-expiry-restart-failed");
      }
    }
    function A(e) {
      try {
        if (
          e.trusted ||
          !o("WAWebFrontendContactGetters").getIsMyContact(e.contact)
        )
          return;
        (e.isTrusted(), o("WAWebChatGroupUtils").updateTitle(e));
      } catch (e) {
        o("WALogger").WARN(
          C ||
            (C = babelHelpers.taggedTemplateLiteralLoose([
              "[init-from-storage] contacts: chat refresh failed: ",
              "",
            ])),
          String(e),
        );
      }
    }
    function F() {
      var e = r("WAWebNoop"),
        t = new Promise(function (t) {
          e = t;
        });
      return { promise: t, resolve: e };
    }
    ((l.waitForGroupMetadataRestore = v),
      (l.restoreGroupsAndContacts = E),
      (l.startRestoreGroupsAndContactsEarly = k),
      (l.waitForRestoredContacts = I));
  },
  98,
);
