__d(
  "AbstractWebBloksAppLoader",
  [
    "ClientAjaxIdsUpdater",
    "WebBloksAppLoaderConsoleDebugger",
    "WebBloksErrors",
    "WebBloksServerData",
    "WebBloksUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.fetchAppByUrl = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            return (
              r("WebBloksAppLoaderConsoleDebugger").onStart(e),
              o("WebBloksUtils").normaliseBloksPayload(
                yield this.$1(e, this.makePostRequest(e, { type: "app" })),
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
                yield this.$2(e, t, "app"),
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
                yield this.$2(e, t, "action"),
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
              var n = yield this.$2(e, t, "app");
              return { components: n.components };
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.$2 = function (t, n, o) {
          r("WebBloksAppLoaderConsoleDebugger").onStart(t, n);
          var e = this.getAsyncFetchData(t, n, o);
          return this.$1(
            t,
            this.makePostRequest(this.getAsyncFetchURI(t, n, o), e),
          );
        }),
        (t.$1 = (function () {
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
