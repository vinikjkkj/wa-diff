__d(
  "WAWebWindowsHybridBridgeContacts.v2605",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebContactsDbLidMigrationUtils",
    "WAWebEventsWaitForMainStreamReadyMd",
    "WAWebLidAwareContactsDB",
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
      s = r("qpl")._(891427936, "2894"),
      u = (function () {
        function t(e, t, a) {
          var i = this;
          ((this.$4 = "contacts"),
            (this.$5 = new Set()),
            (this.$6 = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = JSON.parse(e);
                  if (t.length !== 0) {
                    t.forEach(function (e) {
                      return i.$5.add(e);
                    });
                    var n = yield r("WAWebLidAwareContactsDB").bulkGet(t);
                    n.forEach(function (e) {
                      return i.$5.delete(e == null ? void 0 : e.id);
                    });
                    var o = t.filter(function (e) {
                      return i.$5.has(e);
                    });
                    (o.forEach(function (e) {
                      return i.$5.delete(e);
                    }),
                      i.$1.updateContacts(
                        o,
                        JSON.stringify(r("filterNulls")(n)),
                      ));
                  }
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            (this.$7 = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = e.count,
                    n = e.includeVoipCallableOnly;
                  try {
                    var r = yield o("WAWebBackendApi").frontendSendAndReceive(
                        "getFrequentContacts",
                        { count: t, includeVoipCallableOnly: n },
                      ),
                      a = JSON.stringify(r);
                    i.$1.receiveFrequentContacts(a);
                  } catch (e) {
                    i.$1.receiveFrequentContacts(JSON.stringify([]));
                  }
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            (this.$1 = e),
            (this.$2 = t),
            (this.$3 = a),
            e.addEventListener("requestUpdateEvent", this.$6),
            e.addEventListener("requestFrequentContactsEvent", this.$7),
            e.subscribe(null));
        }
        var a = t.prototype;
        return (
          (a.initialize = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var t = this;
              if (
                (r("WAWebLidAwareContactsDB").setUpdateListener(function (e) {
                  return t.$8(e);
                }),
                yield r("WAWebEventsWaitForMainStreamReadyMd")(),
                !this.$3 &&
                  !r("WAWebSyncBootstrap").isSyncDBootstrapInProcess())
              ) {
                this.$3 = !0;
                try {
                  var n = 200,
                    a = yield o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
                      .getContactTable()
                      .all({ limit: n, offset: 0 });
                  do {
                    var i,
                      l = (i = a[a.length - 1]) == null ? void 0 : i.id;
                    ((a = yield o(
                      "WAWebContactsDbLidMigrationUtils",
                    ).replacePnRowsWithLidData(a)),
                      yield this.$1.updateContacts([], JSON.stringify(a)),
                      (a = yield o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
                        .getContactTable()
                        .greaterThan(["id"], l, { limit: n })));
                  } while (a.length > 0);
                  this.$1.acknowledgeInitialSync();
                } catch (t) {
                  o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[WinUi] setInitialData ",
                        " error ",
                        "",
                      ])),
                    this.$4,
                    t,
                  );
                }
              }
            });
            function a() {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (a.$8 = function (t) {
            var e = this;
            if (this.$3) {
              var n = t.filter(function (t) {
                return !e.$5.has(t);
              });
              if (n.length !== 0)
                if (
                  (n.forEach(function (t) {
                    return e.$5.add(t);
                  }),
                  o("WAWebWindowsConstants").WINDOWS_BUILD_IS_BETA)
                ) {
                  var r = o("WAWebQplFlowWrapper").QPL.markerStart(s);
                  (this.$2.invalidateContacts(n), r.end(2));
                } else this.$2.invalidateContacts(n);
            }
          }),
          t
        );
      })();
    l.WindowsHybridBridgeContacts_v2605 = u;
  },
  98,
);
