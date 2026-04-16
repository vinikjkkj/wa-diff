__d(
  "WAWebWindowsHybridBridgeContacts",
  [
    "WALogger",
    "WAPromiseDelays",
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
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h = r("qpl")._(891427936, "2894"),
      y = 200,
      C = (function () {
        function t(t, a, i) {
          var l = this;
          ((this.$4 = "contacts"),
            (this.$5 = new Set()),
            (this.$6 = []),
            (this.$7 = null),
            (this.$8 = !1),
            (this.$9 = new Set()),
            (this.$10 = (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  var n = JSON.parse(t);
                  if (n.length !== 0) {
                    if (
                      (r("WAWebODS").incr(
                        "web.hybrid.bridge.contacts.receive.request_update",
                      ),
                      o("WAWebABProps").getABPropConfigValue(
                        "web_anr_batch_and_queue_bulk_contacts_db_writes_enabled",
                      ))
                    ) {
                      if (
                        (n.forEach(function (e) {
                          return l.$9.add(e);
                        }),
                        l.$8)
                      ) {
                        o("WALogger").LOG(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "[hybrid-contacts] request queued ids=",
                              " pending=",
                              "",
                            ])),
                          n.length,
                          l.$9.size,
                        );
                        return;
                      }
                      yield l.$13();
                      return;
                    }
                    n.forEach(function (e) {
                      return l.$5.add(e);
                    });
                    var a = self.performance.now(),
                      i = yield r("WAWebLidAwareContactsDB").bulkGet(n),
                      u = self.performance.now() - a;
                    i.forEach(function (e) {
                      return l.$5.delete(e == null ? void 0 : e.id);
                    });
                    var c = n.filter(function (e) {
                      return l.$5.has(e);
                    });
                    (c.forEach(function (e) {
                      return l.$5.delete(e);
                    }),
                      r("WAWebODS").incr(
                        "web.hybrid.bridge.contacts.send.update",
                      ));
                    var d = self.performance.now(),
                      m = JSON.stringify(r("filterNulls")(i)),
                      p = self.performance.now() - d;
                    (o("WALogger").LOG(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[hybrid-contacts] req ids=",
                          " rm=",
                          " bulkGet=",
                          "ms str=",
                          "ms bytes=",
                          "",
                        ])),
                      n.length,
                      c.length,
                      u.toFixed(0),
                      p.toFixed(0),
                      m.length,
                    ),
                      l.$1.updateContacts(c, m));
                  }
                },
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })()),
            (this.$11 = (function () {
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
            t.addEventListener("requestUpdateEvent", this.$10),
            t.addEventListener("requestFrequentContactsEvent", this.$11),
            t.subscribe(null));
        }
        var a = t.prototype;
        return (
          (a.initialize = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = this;
              if (
                (r("WAWebLidAwareContactsDB").setUpdateListener(function (t) {
                  return e.$12(t);
                }),
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
          (a.$12 = function (t) {
            var e = this;
            if (this.$3) {
              if (
                o("WAWebABProps").getABPropConfigValue(
                  "web_anr_batch_and_queue_bulk_contacts_db_writes_enabled",
                )
              )
                return this.$14(t);
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
                  var i = o("WAWebQplFlowWrapper").QPL.markerStart(h);
                  (this.$2.invalidateContacts(n), i.end(2));
                } else this.$2.invalidateContacts(n);
                var l = self.performance.now() - a;
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
          (a.$14 = function (t) {
            for (var e = this, n = 0, r = 0; r < t.length; r++) {
              var a = t[r];
              this.$5.has(a) || (this.$5.add(a), this.$6.push(a), n++);
            }
            n !== 0 &&
              (o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[hybrid-contacts] invalidate:queue keys=",
                    " pending=",
                    "",
                  ])),
                n,
                this.$6.length,
              ),
              this.$7 != null && self.clearTimeout(this.$7),
              (this.$7 = self.setTimeout(function () {
                e.$15();
              }, 0)));
          }),
          (a.$15 = function () {
            this.$7 = null;
            var e = this.$6;
            if (((this.$6 = []), e.length !== 0)) {
              r("WAWebODS").incr("web.hybrid.bridge.contacts.send.invalidate");
              var t = self.performance.now();
              if (o("WAWebWindowsConstants").WINDOWS_BUILD_IS_BETA) {
                var n = o("WAWebQplFlowWrapper").QPL.markerStart(h);
                (this.$2.invalidateContacts(e), n.end(2));
              } else this.$2.invalidateContacts(e);
              var a = self.performance.now() - t;
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[hybrid-contacts] invalidate:flush path=batched keys=",
                    " bridge=",
                    "ms",
                  ])),
                e.length,
                a.toFixed(0),
              );
            }
          }),
          (a.$13 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              this.$8 = !0;
              try {
                for (; this.$9.size > 0; ) {
                  var e = Array.from(this.$9);
                  this.$9.clear();
                  for (var t = 0; t < e.length; t++) this.$5.add(e[t]);
                  (o("WALogger").LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[hybrid-contacts] request:start ids=",
                        "",
                      ])),
                    e.length,
                  ),
                    yield this.$16(e));
                }
              } catch (e) {
                o("WALogger").WARN(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[hybrid-contacts] request:error ",
                      "",
                    ])),
                  e,
                );
              } finally {
                this.$8 = !1;
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$16 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                for (
                  var t = this, n = self.performance.now(), a = 0;
                  a < e.length;
                  a += y
                ) {
                  var i = e.slice(a, a + y),
                    l = self.performance.now(),
                    s = yield r("WAWebLidAwareContactsDB").bulkGet(i),
                    u = self.performance.now() - l;
                  s.forEach(function (e) {
                    return t.$5.delete(e == null ? void 0 : e.id);
                  });
                  var c = i.filter(function (e) {
                    return t.$5.has(e);
                  });
                  c.forEach(function (e) {
                    return t.$5.delete(e);
                  });
                  var d = self.performance.now(),
                    m = JSON.stringify(r("filterNulls")(s)),
                    p = self.performance.now() - d;
                  (o("WALogger").LOG(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "[hybrid-contacts] request:chunk i=",
                        " ids=",
                        " removed=",
                        " bulkGet=",
                        "ms stringify=",
                        "ms bytes=",
                        "",
                      ])),
                    a,
                    i.length,
                    c.length,
                    u.toFixed(0),
                    p.toFixed(0),
                    m.length,
                  ),
                    yield this.$1.updateContacts(c, m),
                    a + y < e.length &&
                      (yield o("WAPromiseDelays").releaseToEventLoop()));
                }
                var _ = self.performance.now() - n;
                o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "[hybrid-contacts] request:done ids=",
                      " total=",
                      "ms",
                    ])),
                  e.length,
                  _.toFixed(0),
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })();
    l.WindowsHybridBridgeContacts = C;
  },
  98,
);
