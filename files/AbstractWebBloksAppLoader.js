__d(
  "AbstractWebBloksAppLoader",
  [
    "ClientAjaxIdsUpdater",
    "WebBloksAppLoaderConsoleDebugger",
    "WebBloksErrors",
    "WebBloksServerData",
    "WebBloksUtils",
    "WebBloksVersioningID",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {
        var e = this;
        ((this.$1 = null),
          (this.$2 = null),
          (this.setLogger = function (t) {
            e.$2 = t;
          }),
          (this.setVersioningID = function (t) {
            e.$1 = t;
          }));
      }
      var t = e.prototype;
      return (
        (t.getVersioningID = function () {
          var e;
          return (e = this.$1) != null
            ? e
            : o("WebBloksVersioningID").versioningID;
        }),
        (t.$3 = function (t) {
          var e,
            n,
            r = t == null ? void 0 : t.versioning_id;
          r == null ||
            r === this.getVersioningID() ||
            (e = this.$2) == null ||
            e.mustfix(
              "Requested versioning ID %s but the response was reduced against %s (app %s). Unless this is an intentionally stale bundle, the requested ID failed to resolve and the server fell back.",
              this.getVersioningID(),
              r,
              (n = t == null ? void 0 : t.bloks_app_id) != null ? n : "unknown",
            );
        }),
        (t.fetchAppByUrl = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            return (
              r("WebBloksAppLoaderConsoleDebugger").onStart(e),
              o("WebBloksUtils").normaliseBloksPayload(
                yield this.$4(e, this.makePostRequest(e, { type: "app" })),
              )
            );
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.fetchApp = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              return o("WebBloksUtils").normaliseBloksPayload(
                yield this.$5(e, t, "app"),
              );
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.fetchAction = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              return o("WebBloksUtils").normaliseBloksPayload(
                yield this.$5(e, t, "action"),
              );
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.fetchComponentQuery = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              var n,
                r,
                o = yield this.$5(e, t, "app");
              return {
                components: o.components,
                stacked_screens:
                  (n = o.server_data) == null ? void 0 : n.stacked_screens,
                stacked_screens_delay_ms:
                  (r = o.server_data) == null
                    ? void 0
                    : r.stacked_screens_delay_ms,
              };
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.$5 = function (t, n, o) {
          r("WebBloksAppLoaderConsoleDebugger").onStart(t, n);
          var e = this.getAsyncFetchData(t, n, o);
          return this.$4(
            t,
            this.makePostRequest(this.getAsyncFetchURI(t, n, o), e),
          );
        }),
        (t.$4 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              try {
                var n,
                  a = yield t;
                (r("WebBloksAppLoaderConsoleDebugger").onSuccess(e, a),
                  r("ClientAjaxIdsUpdater")(a));
                var i = (n = a.payload) != null ? n : a;
                return (
                  o("WebBloksServerData").handleWebBloksServerData(
                    i.server_data,
                  ),
                  this.$3(i.server_data),
                  i
                );
              } catch (t) {
                var l = r("getErrorSafe")(t);
                throw (
                  r("WebBloksAppLoaderConsoleDebugger").onError(e, l),
                  l instanceof o("WebBloksErrors").WebBloksError
                    ? l
                    : new (o("WebBloksErrors").WebBloksError)(
                        "Fetch failed: " + l.message,
                        l,
                      )
                );
              }
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.makePostRequest = function (t, n) {
          throw new (o("WebBloksErrors").WebBloksError)("Abstract");
        }),
        (t.getAsyncFetchURI = function (t, n, r) {
          throw new (o("WebBloksErrors").WebBloksError)("Abstract");
        }),
        (t.getAsyncFetchData = function (t, n, r) {
          throw new (o("WebBloksErrors").WebBloksError)("Abstract");
        }),
        e
      );
    })();
    l.AbstractWebBloksAppLoader = e;
  },
  98,
);
