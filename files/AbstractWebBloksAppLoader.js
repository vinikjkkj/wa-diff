__d(
  "AbstractWebBloksAppLoader",
  [
    "ClientAjaxIdsUpdater",
    "WebBloksAppLoaderConsoleDebugger",
    "WebBloksErrors",
    "WebBloksServerData",
    "WebBloksUtils",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.fetchAppByUrl = async function (t) {
          return (
            r("WebBloksAppLoaderConsoleDebugger").onStart(t),
            o("WebBloksUtils").normaliseBloksPayload(
              await this.$1(t, this.makePostRequest(t, { type: "app" })),
            )
          );
        }),
        (t.fetchApp = async function (t, n) {
          return o("WebBloksUtils").normaliseBloksPayload(
            await this.$2(t, n, "app"),
          );
        }),
        (t.fetchAction = async function (t, n) {
          return o("WebBloksUtils").normaliseBloksPayload(
            await this.$2(t, n, "action"),
          );
        }),
        (t.fetchComponentQuery = async function (t, n) {
          var e = await this.$2(t, n, "app");
          return { components: e.components };
        }),
        (t.$2 = function (t, n, o) {
          r("WebBloksAppLoaderConsoleDebugger").onStart(t, n);
          var e = this.getAsyncFetchData(t, n, o);
          return this.$1(
            t,
            this.makePostRequest(this.getAsyncFetchURI(t, n, o), e),
          );
        }),
        (t.$1 = async function (t, n) {
          try {
            var e,
              a = await n;
            (r("WebBloksAppLoaderConsoleDebugger").onSuccess(t, a),
              r("ClientAjaxIdsUpdater")(a));
            var i = (e = a.payload) != null ? e : a;
            return (
              o("WebBloksServerData").handleWebBloksServerData(i.server_data),
              i
            );
          } catch (e) {
            var l = r("getErrorSafe")(e);
            throw (
              r("WebBloksAppLoaderConsoleDebugger").onError(t, l),
              l instanceof o("WebBloksErrors").WebBloksError
                ? l
                : new (o("WebBloksErrors").WebBloksError)(
                    "Fetch failed: " + l.message,
                    l,
                  )
            );
          }
        }),
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
