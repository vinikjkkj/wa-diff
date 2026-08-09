__d(
  "buildSharedWorkerInitQPLLogger",
  ["QPLUserFlow", "SiteData", "checkForIndexedDbSupported", "pageID", "qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("qpl")._(931595918, "2062"),
      s = 0;
    function u(t) {
      var n = !1,
        o = !1,
        a = s++;
      function i(i) {
        var l = i.callReason,
          s = i.experimental_init,
          u = i.migrationEnabled,
          c = i.version,
          d = i.workerName;
        if (!(n || o)) {
          n = !0;
          var m = {
            int: { version: c, clientRev: r("SiteData").client_revision },
            bool: {
              isDev: !1,
              supportsIDB: r("checkForIndexedDbSupported")(),
              experimental_init: s != null ? s : !1,
              migrationEnabled: u != null ? u : !1,
            },
            string: {
              workerName: d,
              hostname: window.location.hostname,
              callReason: l,
              pageID: r("pageID"),
            },
          };
          (r("QPLUserFlow").start(e, {
            onFlowTimeout__doNOTUSE: function () {
              (r("QPLUserFlow").addAnnotations(
                e,
                { bool: { setupTimeout: !0 } },
                { instanceKey: a },
              ),
                (o = !0));
            },
            cancelOnUnload: !0,
            annotations: m,
            timeoutInMs: 66e4,
            instanceKey: a,
          }),
            t == null || t({ type: "start", data: { annotations: m } }));
        }
      }
      function l(i, l) {
        var s = i + "_start";
        (t == null || t({ type: "point", data: { annotations: l, event: s } }),
          !(!n || o) &&
            r("QPLUserFlow").addPoint(e, s, { data: l, instanceKey: a }));
      }
      function u(i, l) {
        var s = i + "_end";
        (t == null || t({ type: "point", data: { annotations: l, event: s } }),
          !(!n || o) &&
            (r("QPLUserFlow").addPoint(e, s, { data: l, instanceKey: a }),
            t == null ||
              t({ type: "point", data: { annotations: l, event: s } })));
      }
      function c(i, l) {
        (t == null || t({ type: "point", data: { annotations: l, event: i } }),
          !(!n || o) &&
            r("QPLUserFlow").addPoint(e, i, { data: l, instanceKey: a }));
      }
      function d(i) {
        (t == null || t({ type: "end", data: { annotations: i } }),
          !(!n || o) &&
            (r("QPLUserFlow").endSuccess(e, { annotations: i, instanceKey: a }),
            (o = !0)));
      }
      function m(i, l) {
        (t == null ||
          t({ type: "end", data: { errorName: i, annotations: l } }),
          !(!n || o) &&
            (r("QPLUserFlow").endFailure(e, i, {
              annotations: l,
              instanceKey: a,
            }),
            (o = !0)));
      }
      function p(i) {
        (t == null || t({ type: "end", data: { annotations: i, cancel: !0 } }),
          !(!n || o) &&
            (r("QPLUserFlow").endCancel(e, { annotations: i, instanceKey: a }),
            (o = !0)));
      }
      function _(i) {
        (t == null || t({ type: "annotate", data: { annotations: i } }),
          !(!n || o) &&
            r("QPLUserFlow").addAnnotations(e, i, { instanceKey: a }));
      }
      return {
        start: i,
        endFailure: m,
        addAnnotations: _,
        endSuccess: d,
        endCancel: p,
        markEventStart: l,
        markEventEnd: u,
        markPoint: c,
      };
    }
    l.default = u;
  },
  98,
);
