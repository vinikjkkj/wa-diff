__d(
  "WAWebWindowsHybridBridgeContacts.v2623",
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
    "WAWebWindowsHybridBridgeTrace",
    "asyncToGeneratorRuntime",
    "filterNulls",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = r("qpl")._(891427936, "2894"),
      m = new Set([
        "phoneNumber",
        "name",
        "pushname",
        "isAddressBookContact",
        "username",
        "usernameCountryCode",
        "isHosted",
      ]);
    function p(e) {
      for (var t of e)
        if (!(t == null || typeof t != "object")) {
          for (var n of Object.keys(t)) if (m.has(n)) return !0;
        }
      return !1;
    }
    var _ = (function () {
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
                    m = self.performance.now() - c,
                    p = self.performance.now();
                  o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                    {
                      bridge: "contacts",
                      method: "updateContacts-2",
                      type: "async",
                    },
                    function () {
                      return l.$1.updateContacts(u, d);
                    },
                  );
                  var _ = self.performance.now() - p;
                  o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[hybrid-contacts] req ids=",
                        " rm=",
                        " bulkGet=",
                        "ms str=",
                        "ms bytes=",
                        " bridge=",
                        "ms",
                      ])),
                    n.length,
                    u.length,
                    s.toFixed(0),
                    m.toFixed(0),
                    d.length,
                    _.toFixed(0),
                  );
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
                    o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                      {
                        bridge: "contacts",
                        method: "receiveFrequentContacts-1",
                        type: "async",
                      },
                      function () {
                        return l.$1.receiveFrequentContacts(i);
                      },
                    ));
                } catch (e) {
                  (r("WAWebODS").incr(
                    "web.hybrid.bridge.contacts.send.frequent",
                  ),
                    o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                      {
                        bridge: "contacts",
                        method: "receiveFrequentContacts-2",
                        type: "async",
                      },
                      function () {
                        return l.$1.receiveFrequentContacts(JSON.stringify([]));
                      },
                    ));
                }
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()),
          (this.$8 = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* () {
              try {
                var e = yield o("WAWebBackendApi").frontendSendAndReceive(
                  "getFrequentChatsForSharing",
                  {},
                );
                (r("WAWebODS").incr(
                  "web.hybrid.bridge.contacts.send.frequent_chats_for_sharing",
                ),
                  o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                    {
                      bridge: "contacts",
                      method: "receiveFrequentChatsForSharing-1",
                      type: "async",
                    },
                    function () {
                      return l.$1.receiveFrequentChatsForSharing(
                        JSON.stringify(e),
                      );
                    },
                  ));
              } catch (e) {
                (o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[WinUi] getFrequentChatsForSharing error ",
                      "",
                    ])),
                  e,
                ),
                  r("WAWebODS").incr(
                    "web.hybrid.bridge.contacts.send.frequent_chats_for_sharing",
                  ),
                  o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                    {
                      bridge: "contacts",
                      method: "receiveFrequentChatsForSharing-2",
                      type: "async",
                    },
                    function () {
                      return l.$1.receiveFrequentChatsForSharing(
                        JSON.stringify([]),
                      );
                    },
                  ));
              }
            },
          )),
          (this.$1 = t),
          (this.$2 = a),
          (this.$3 = i),
          t.addEventListener("requestUpdateEvent", this.$6),
          t.addEventListener("requestFrequentContactsEvent", this.$7),
          t.addEventListener("requestFrequentChatsForSharingEvent", this.$8),
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
                  !p(n)) ||
                  e.$9(t);
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
                    yield o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                      {
                        bridge: "contacts",
                        method: "updateContacts-1",
                        type: "async",
                      },
                      function () {
                        return e.$1.updateContacts([], JSON.stringify(n));
                      },
                    ),
                    (n = yield o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
                      .getContactTable()
                      .greaterThan(["id"], i, { limit: t })));
                } while (n.length > 0);
                (r("WAWebODS").incr(
                  "web.hybrid.bridge.contacts.send.acknowledge_initial_sync",
                ),
                  o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                    {
                      bridge: "contacts",
                      method: "acknowledgeInitialSync",
                      type: "async",
                    },
                    function () {
                      return e.$1.acknowledgeInitialSync();
                    },
                  ));
              } catch (e) {
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
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
        (a.$9 = function (t) {
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
              o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                {
                  bridge: "contacts",
                  method: "invalidateContacts-1",
                  type: "sync",
                },
                function () {
                  if (o("WAWebWindowsConstants").WINDOWS_BUILD_IS_BETA) {
                    var t = o("WAWebQplFlowWrapper").QPL.markerStart(d);
                    (e.$2.invalidateContacts(n), t.end(2));
                  } else e.$2.invalidateContacts(n);
                },
              );
              var i = self.performance.now() - a;
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[hybrid-contacts] invalidate path=direct keys=",
                    " bridge=",
                    "ms",
                  ])),
                n.length,
                i.toFixed(0),
              );
            }
          }
        }),
        t
      );
    })();
    l.WindowsHybridBridgeContacts_v2623 = _;
  },
  98,
);
