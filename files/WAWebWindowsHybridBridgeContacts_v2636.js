__d(
  "WAWebWindowsHybridBridgeContacts.v2636",
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
      _,
      f = r("qpl")._(891427936, "2894"),
      g = new Set([
        "phoneNumber",
        "name",
        "pushname",
        "isAddressBookContact",
        "username",
        "usernameCountryCode",
        "isHosted",
      ]);
    function h(e) {
      for (var t of e)
        if (!(t == null || typeof t != "object")) {
          for (var n of Object.keys(t)) if (g.has(n)) return !0;
        }
      return !1;
    }
    var y = 262400,
      C = 2,
      b = (function () {
        function t(t, n, a) {
          var i = this;
          ((this.$4 = "contacts"),
            (this.$5 = new Set()),
            (this.$6 = new Set()),
            (this.$7 = !1),
            (this.$8 = async function (t) {
              var n = JSON.parse(t);
              if (n.length !== 0) {
                (r("WAWebODS").incr(
                  "web.hybrid.bridge.contacts.receive.request_update",
                ),
                  n.forEach(function (e) {
                    return i.$5.add(e);
                  }));
                var a = self.performance.now(),
                  l = await r("WAWebLidAwareContactsDB").bulkGet(n),
                  s = self.performance.now() - a;
                l.forEach(function (e) {
                  return i.$5.delete(e == null ? void 0 : e.id);
                });
                var u = n.filter(function (e) {
                  return i.$5.has(e);
                });
                (u.forEach(function (e) {
                  return i.$5.delete(e);
                }),
                  r("WAWebODS").incr("web.hybrid.bridge.contacts.send.update"));
                var c = self.performance.now(),
                  d = JSON.stringify(r("filterNulls")(l)),
                  m = self.performance.now() - c,
                  p = self.performance.now();
                o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                  {
                    bridge: "contacts",
                    method: "updateContacts-2",
                    type: "async",
                  },
                  function () {
                    return i.$1.updateContacts(u, d);
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
            }),
            (this.$9 = async function (e) {
              var t = e.count,
                n = e.includeVoipCallableOnly;
              try {
                var a = await o("WAWebBackendApi").frontendSendAndReceive(
                    "getFrequentContacts",
                    { count: t, includeVoipCallableOnly: n },
                  ),
                  l = JSON.stringify(a);
                (r("WAWebODS").incr("web.hybrid.bridge.contacts.send.frequent"),
                  o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                    {
                      bridge: "contacts",
                      method: "receiveFrequentContacts-1",
                      type: "async",
                    },
                    function () {
                      return i.$1.receiveFrequentContacts(l);
                    },
                  ));
              } catch (e) {
                (r("WAWebODS").incr("web.hybrid.bridge.contacts.send.frequent"),
                  o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                    {
                      bridge: "contacts",
                      method: "receiveFrequentContacts-2",
                      type: "async",
                    },
                    function () {
                      return i.$1.receiveFrequentContacts(JSON.stringify([]));
                    },
                  ));
              }
            }),
            (this.$10 = async function () {
              try {
                var e = await o("WAWebBackendApi").frontendSendAndReceive(
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
                      return i.$1.receiveFrequentChatsForSharing(
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
                      return i.$1.receiveFrequentChatsForSharing(
                        JSON.stringify([]),
                      );
                    },
                  ));
              }
            }),
            (this.$1 = t),
            (this.$2 = n),
            (this.$3 = a),
            t.addEventListener("requestUpdateEvent", this.$8),
            t.addEventListener("requestFrequentContactsEvent", this.$9),
            t.addEventListener("requestFrequentChatsForSharingEvent", this.$10),
            t.subscribe(null));
        }
        var n = t.prototype;
        return (
          (n.initialize = async function () {
            var e = this;
            if (
              (r("WAWebLidAwareContactsDB").setUpdateListener(function (t, n) {
                (n != null && !h(n)) || e.$11(t);
              }),
              await r("WAWebEventsWaitForMainStreamReadyMd")(),
              !this.$3 && !r("WAWebSyncBootstrap").isSyncDBootstrapInProcess())
            ) {
              this.$3 = !0;
              try {
                var t = 200,
                  n = await o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
                    .getContactTable()
                    .all({ limit: t, offset: 0 });
                do {
                  var a,
                    i = (a = n[n.length - 1]) == null ? void 0 : a.id;
                  ((n = await o(
                    "WAWebContactsDbLidMigrationUtils",
                  ).replacePnRowsWithLidData(n)),
                    r("WAWebODS").incr(
                      "web.hybrid.bridge.contacts.send.initial_sync_chunk",
                    ),
                    await o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                      {
                        bridge: "contacts",
                        method: "updateContacts-1",
                        type: "async",
                      },
                      function () {
                        return e.$1.updateContacts([], JSON.stringify(n));
                      },
                    ),
                    (n = await o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
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
          }),
          (n.$11 = function (t) {
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
                  a >= y &&
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
                      return e.$12(n);
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
                      var t = o("WAWebQplFlowWrapper").QPL.markerStart(f);
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
          (n.$12 = function (t) {
            var e = this;
            (t.forEach(function (t) {
              return e.$6.add(t);
            }),
              !this.$7 && ((this.$7 = !0), this.$13()));
          }),
          (n.$13 = async function () {
            var e = this;
            try {
              for (; this.$6.size > 0; ) {
                var t = Array.from(this.$6);
                this.$6.clear();
                try {
                  await this.$14(t);
                } catch (n) {
                  (o("WALogger")
                    .WARN(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "[hybrid-contacts] async invalidation drain failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(n))
                    .sendLogs("hybrid-contacts-invalidate-async-drain-failed"),
                    r("WAWebODS").incr(
                      "web.hybrid.bridge.contacts.send.invalidate.fail",
                    ),
                    t.forEach(function (t) {
                      return e.$5.delete(t);
                    }));
                }
              }
            } finally {
              this.$7 = !1;
            }
          }),
          (n.$14 = function (t, n) {
            var e = this;
            n === void 0 && (n = 0);
            try {
              return this.$2
                .invalidateContactsAsync(t)
                .then(void 0, async function (a) {
                  if (n < C)
                    return (
                      r("WAWebODS").incr(
                        "web.hybrid.bridge.contacts.send.invalidate.retry",
                      ),
                      o("WALogger")
                        .WARN(
                          m ||
                            (m = babelHelpers.taggedTemplateLiteralLoose([
                              "[hybrid-contacts] invalidateContactsAsync rejected (attempt ",
                              "/",
                              "), retrying",
                            ])),
                          n + 1,
                          C,
                        )
                        .catching(r("getErrorSafe")(a)),
                      await o("WAWebReleaseToEventLoop").releaseToEventLoop(),
                      e.$14(t, n + 1)
                    );
                  (o("WALogger")
                    .WARN(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "[hybrid-contacts] invalidateContactsAsync rejected after ",
                          " attempts, giving up",
                        ])),
                      n + 1,
                    )
                    .catching(r("getErrorSafe")(a))
                    .sendLogs("hybrid-contacts-invalidate-async-failed"),
                    r("WAWebODS").incr(
                      "web.hybrid.bridge.contacts.send.invalidate.fail",
                    ),
                    t.forEach(function (t) {
                      return e.$5.delete(t);
                    }));
                });
            } catch (n) {
              return (
                o("WALogger")
                  .WARN(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[hybrid-contacts] invalidateContactsAsync threw synchronously, clearing dirty keys",
                      ])),
                  )
                  .catching(r("getErrorSafe")(n))
                  .sendLogs("hybrid-contacts-invalidate-async-threw"),
                r("WAWebODS").incr(
                  "web.hybrid.bridge.contacts.send.invalidate.fail",
                ),
                t.forEach(function (t) {
                  return e.$5.delete(t);
                }),
                Promise.resolve()
              );
            }
          }),
          t
        );
      })();
    l.WindowsHybridBridgeContacts_v2636 = b;
  },
  98,
);
