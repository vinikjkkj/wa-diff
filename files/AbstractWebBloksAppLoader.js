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
          var e = this.$1;
          if (e == null)
            throw new (o("WebBloksErrors").WebBloksError)(
              "AppLoader has no versioning ID: the environment never called setVersioningID. Declare versioningID in the environment config so follow-up requests carry the bundle's schema.",
            );
          return e;
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
        (t.fetchAppByUrl = async function (t) {
          return (
            r("WebBloksAppLoaderConsoleDebugger").onStart(t),
            o("WebBloksUtils").normaliseBloksPayload(
              await this.$4(t, this.makePostRequest(t, { type: "app" })),
            )
          );
        }),
        (t.fetchApp = async function (t, n) {
          return o("WebBloksUtils").normaliseBloksPayload(
            await this.$5(t, n, "app"),
          );
        }),
        (t.fetchAction = async function (t, n) {
          return o("WebBloksUtils").normaliseBloksPayload(
            await this.$5(t, n, "action"),
          );
        }),
        (t.fetchComponentQuery = async function (t, n) {
          var e,
            r,
            o = await this.$5(t, n, "app");
          return {
            components: o.components,
            component_query_responses: o.component_query_responses,
            component_query_resources: o.component_query_resources,
            stacked_screens:
              (e = o.server_data) == null ? void 0 : e.stacked_screens,
            stacked_screens_delay_ms:
              (r = o.server_data) == null ? void 0 : r.stacked_screens_delay_ms,
          };
        }),
        (t.$5 = function (t, n, o) {
          r("WebBloksAppLoaderConsoleDebugger").onStart(t, n);
          var e = this.getAsyncFetchData(t, n, o);
          return this.$4(
            t,
            this.makePostRequest(this.getAsyncFetchURI(t, n, o), e),
          );
        }),
        (t.$4 = async function (t, n) {
          try {
            var e,
              a = await n;
            (r("WebBloksAppLoaderConsoleDebugger").onSuccess(t, a),
              r("ClientAjaxIdsUpdater")(a));
            var i = (e = a.payload) != null ? e : a;
            return (
              o("WebBloksServerData").handleWebBloksServerData(i.server_data),
              this.$3(i.server_data),
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
