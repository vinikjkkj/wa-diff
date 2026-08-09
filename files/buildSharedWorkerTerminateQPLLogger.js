__d(
  "buildSharedWorkerTerminateQPLLogger",
  ["QPLUserFlow", "SiteData", "pageID", "qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("qpl")._(931600201, "1438"),
      s = 0;
    function u(t) {
      var n = !1,
        o = !1,
        a = s++;
      function i(i) {
        var l = i.callReason,
          s = i.workerName;
        if (!(n || o)) {
          n = !0;
          var u = {
            int: { clientRev: r("SiteData").client_revision },
            bool: { isDev: !1 },
            string: {
              workerName: s,
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
            annotations: u,
            timeoutInMs: 3e4,
            instanceKey: a,
          }),
            t == null || t({ type: "start", data: { annotations: u } }));
        }
      }
      function l(i, l) {
        if (!(!n || o)) {
          var s = i + "_start";
          (r("QPLUserFlow").addPoint(e, s, { data: l, instanceKey: a }),
            t == null ||
              t({ type: "point", data: { annotations: l, event: s } }));
        }
      }
      function u(i, l) {
        if (!(!n || o)) {
          var s = i + "_end";
          (r("QPLUserFlow").addPoint(e, s, { data: l, instanceKey: a }),
            t == null ||
              t({ type: "point", data: { annotations: l, event: s } }));
        }
      }
      function c(i, l) {
        !n ||
          o ||
          (r("QPLUserFlow").addPoint(e, i, { data: l, instanceKey: a }),
          t == null ||
            t({ type: "point", data: { annotations: l, event: i } }));
      }
      function d(i) {
        !n ||
          o ||
          (r("QPLUserFlow").endSuccess(e, { annotations: i, instanceKey: a }),
          t == null || t({ type: "end", data: { annotations: i } }),
          (o = !0));
      }
      function m(i, l) {
        !n ||
          o ||
          (r("QPLUserFlow").endFailure(e, i, {
            annotations: l,
            instanceKey: a,
          }),
          t == null ||
            t({ type: "end", data: { errorName: i, annotations: l } }),
          (o = !0));
      }
      function p(i) {
        !n ||
          o ||
          (r("QPLUserFlow").endCancel(e, { annotations: i, instanceKey: a }),
          t == null || t({ type: "end", data: { annotations: i, cancel: !0 } }),
          (o = !0));
      }
      function _(i) {
        !n ||
          o ||
          (r("QPLUserFlow").addAnnotations(e, i, { instanceKey: a }),
          t == null || t({ type: "annotate", data: { annotations: i } }));
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
