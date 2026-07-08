__d(
  "WAWebWindowsHybridBridgeContacts.v2627",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebBuildConstants",
    "WAWebContactsDbLidMigrationUtils",
    "WAWebEventsWaitForMainStreamReadyMd",
    "WAWebLidAwareContactsDB",
    "WAWebODS",
    "WAWebQplFlowWrapper",
    "WAWebReleaseToEventLoop",
    "WAWebSchemaContact_DO_NOT_USE_DIRECTLY",
    "WAWebSyncBootstrap",
    "WAWebWindowsConstants",
    "WAWebWindowsHybridBridgeTrace",
    "asyncToGeneratorRuntime",
    "filterNulls",
    "getErrorSafe",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = r("qpl")._(891427936, "2894"),
      f = new Set([
        "phoneNumber",
        "name",
        "pushname",
        "isAddressBookContact",
        "username",
        "usernameCountryCode",
        "isHosted",
      ]);
    function g(e) {
      for (var t of e)
        if (!(t == null || typeof t != "object")) {
          for (var n of Object.keys(t)) if (f.has(n)) return !0;
        }
      return !1;
    }
    var h = 262400,
      y = 2,
      C = (function () {
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
                          return l.$1.receiveFrequentContacts(
                            JSON.stringify([]),
                          );
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
                (r("WAWebLidAwareContactsDB").setUpdateListener(
                  function (t, n) {
                    (o("WAWebABProps").getABPropConfigValue(
                      "web_anr_skip_unused_contacts_db_updates_enabled",
                    ) &&
                      n != null &&
                      !g(n)) ||
                      e.$9(t);
                  },
                ),
                yield r("WAWebEventsWaitForMainStreamReadyMd")(),
                !this.$3 &&
                  !r("WAWebSyncBootstrap").isSyncDBootstrapInProcess())
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
                var a = o("WAWebBuildConstants").getWindowsVersion();
                if (
                  a != null &&
                  a >= h &&
                  o("WAWebABProps").getABPropConfigValue(
                    "web_anr_optimized_initial_contacts_sync_enabled",
                  )
                ) {
                  o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                    {
                      bridge: "contacts",
                      method: "invalidateContactsAsync",
                      type: "async",
                    },
                    function () {
                      return e.$10(n);
                    },
                  );
                  return;
                }
                var i = self.performance.now();
                o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                  {
                    bridge: "contacts",
                    method: "invalidateContacts-1",
                    type: "sync",
                  },
                  function () {
                    if (o("WAWebWindowsConstants").WINDOWS_BUILD_IS_BETA) {
                      var t = o("WAWebQplFlowWrapper").QPL.markerStart(_);
                      (e.$2.invalidateContacts(n), t.end(2));
                    } else e.$2.invalidateContacts(n);
                  },
                );
                var l = self.performance.now() - i;
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
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
          (a.$10 = function (t, n) {
            var e = this;
            n === void 0 && (n = 0);
            try {
              this.$2.invalidateContactsAsync(t).then(void 0, function (a) {
                if (n < y) {
                  (o("WALogger")
                    .WARN(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "[hybrid-contacts] invalidateContactsAsync rejected (attempt ",
                          "/",
                          "), retrying",
                        ])),
                      n + 1,
                      y,
                    )
                    .catching(r("getErrorSafe")(a))
                    .sendLogs("hybrid-contacts-invalidate-async-retry"),
                    o("WAWebReleaseToEventLoop")
                      .releaseToEventLoop()
                      .then(function () {
                        return e.$10(t, n + 1);
                      }));
                  return;
                }
                (o("WALogger")
                  .WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[hybrid-contacts] invalidateContactsAsync rejected after ",
                        " attempts, giving up",
                      ])),
                    n + 1,
                  )
                  .catching(r("getErrorSafe")(a))
                  .sendLogs("hybrid-contacts-invalidate-async-failed"),
                  t.forEach(function (t) {
                    return e.$5.delete(t);
                  }));
              });
            } catch (n) {
              (o("WALogger")
                .WARN(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[hybrid-contacts] invalidateContactsAsync threw synchronously, clearing dirty keys",
                    ])),
                )
                .catching(r("getErrorSafe")(n))
                .sendLogs("hybrid-contacts-invalidate-async-threw"),
                t.forEach(function (t) {
                  return e.$5.delete(t);
                }));
            }
          }),
          t
        );
      })();
    l.WindowsHybridBridgeContacts_v2627 = C;
  },
  98,
);
