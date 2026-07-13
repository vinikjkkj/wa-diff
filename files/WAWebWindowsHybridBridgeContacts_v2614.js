__d(
  "WAWebWindowsHybridBridgeContacts.v2614",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebContactsDbLidMigrationUtils",
    "WAWebEventsWaitForMainStreamReadyMd",
    "WAWebLidAwareContactsDB",
    "WAWebODS",
    "WAWebQplFlowWrapper",
    "WAWebSchemaContact_DO_NOT_USE_DIRECTLY",
    "WAWebSyncBootstrap",
    "WAWebWindowsConstants",
    "asyncToGeneratorRuntime",
    "filterNulls",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = r("qpl")._(891427936, "2894"),
      d = new Set([
        "phoneNumber",
        "name",
        "pushname",
        "isAddressBookContact",
        "username",
        "usernameCountryCode",
        "isHosted",
      ]);
    function m(e) {
      for (var t of e)
        if (!(t == null || typeof t != "object")) {
          for (var n of Object.keys(t)) if (d.has(n)) return !0;
        }
      return !1;
    }
    var p = (function () {
      function t(t, a, i) {
        var l = this;
        ((this.$4 = "contacts"),
          (this.$5 = new Set()),
          (this.$6 = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = JSON.parse(t);
                if (n.length !== 0) {
                  (r("WAWebODS").incr(
                    "web.hybrid.bridge.contacts.receive.request_update",
                  ),
                    n.forEach(function (e) {
                      return l.$5.add(e);
                    }));
                  var a = self.performance.now(),
                    i = yield r("WAWebLidAwareContactsDB").bulkGet(n),
                    s = self.performance.now() - a;
                  i.forEach(function (e) {
                    return l.$5.delete(e == null ? void 0 : e.id);
                  });
                  var u = n.filter(function (e) {
                    return l.$5.has(e);
                  });
                  (u.forEach(function (e) {
                    return l.$5.delete(e);
                  }),
                    r("WAWebODS").incr(
                      "web.hybrid.bridge.contacts.send.update",
                    ));
                  var c = self.performance.now(),
                    d = JSON.stringify(r("filterNulls")(i)),
                    m = self.performance.now() - c;
                  (o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[hybrid-contacts] request ids=",
                        " removed=",
                        " bulkGet=",
                        "ms stringify=",
                        "ms bytes=",
                        "",
                      ])),
                    n.length,
                    u.length,
                    s.toFixed(0),
                    m.toFixed(0),
                    d.length,
                  ),
                    l.$1.updateContacts(u, d));
                }
              },
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })()),
          (this.$7 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = e.count,
                  n = e.includeVoipCallableOnly;
                try {
                  var a = yield o("WAWebBackendApi").frontendSendAndReceive(
                      "getFrequentContacts",
                      { count: t, includeVoipCallableOnly: n },
                    ),
                    i = JSON.stringify(a);
                  (r("WAWebODS").incr(
                    "web.hybrid.bridge.contacts.send.frequent",
                  ),
                    l.$1.receiveFrequentContacts(i));
                } catch (e) {
                  (r("WAWebODS").incr(
                    "web.hybrid.bridge.contacts.send.frequent",
                  ),
                    l.$1.receiveFrequentContacts(JSON.stringify([])));
                }
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()),
          (this.$1 = t),
          (this.$2 = a),
          (this.$3 = i),
          t.addEventListener("requestUpdateEvent", this.$6),
          t.addEventListener("requestFrequentContactsEvent", this.$7),
          t.subscribe(null));
      }
      var a = t.prototype;
      return (
        (a.initialize = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = this;
            if (
              (r("WAWebLidAwareContactsDB").setUpdateListener(function (t, n) {
                (o("WAWebABProps").getABPropConfigValue(
                  "web_anr_skip_unused_contacts_db_updates_enabled",
                ) &&
                  n != null &&
                  !m(n)) ||
                  e.$8(t);
              }),
              yield r("WAWebEventsWaitForMainStreamReadyMd")(),
              !this.$3 && !r("WAWebSyncBootstrap").isSyncDBootstrapInProcess())
            ) {
              this.$3 = !0;
              try {
                var t = 200,
                  n = yield o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
                    .getContactTable()
                    .all({ limit: t, offset: 0 });
                do {
                  var a,
                    i = (a = n[n.length - 1]) == null ? void 0 : a.id;
                  ((n = yield o(
                    "WAWebContactsDbLidMigrationUtils",
                  ).replacePnRowsWithLidData(n)),
                    r("WAWebODS").incr(
                      "web.hybrid.bridge.contacts.send.initial_sync_chunk",
                    ),
                    yield this.$1.updateContacts([], JSON.stringify(n)),
                    (n = yield o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
                      .getContactTable()
                      .greaterThan(["id"], i, { limit: t })));
                } while (n.length > 0);
                (r("WAWebODS").incr(
                  "web.hybrid.bridge.contacts.send.acknowledge_initial_sync",
                ),
                  this.$1.acknowledgeInitialSync());
              } catch (e) {
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[WinUi] setInitialData ",
                      " error ",
                      "",
                    ])),
                  this.$4,
                  e,
                );
              }
            }
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.$8 = function (t) {
          var e = this;
          if (this.$3) {
            var n = t.filter(function (t) {
              return !e.$5.has(t);
            });
            if (n.length !== 0) {
              (n.forEach(function (t) {
                return e.$5.add(t);
              }),
                r("WAWebODS").incr(
                  "web.hybrid.bridge.contacts.send.invalidate",
                ));
              var a = self.performance.now();
              if (o("WAWebWindowsConstants").WINDOWS_BUILD_IS_BETA) {
                var i = o("WAWebQplFlowWrapper").QPL.markerStart(c);
                (this.$2.invalidateContacts(n), i.end(2));
              } else this.$2.invalidateContacts(n);
              var l = self.performance.now() - a;
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[hybrid-contacts] invalidate path=direct keys=",
                    " bridge=",
                    "ms",
                  ])),
                n.length,
                l.toFixed(0),
              );
            }
          }
        }),
        t
      );
    })();
    l.WindowsHybridBridgeContacts_v2614 = p;
  },
  98,
);
