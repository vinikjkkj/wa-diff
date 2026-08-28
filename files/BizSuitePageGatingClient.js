__d(
  "BizSuitePageGatingClient",
  [
    "AsyncRequest",
    "BizSuitePageGatingEventManager",
    "BizSuitePageGatingEventTypes",
    "BizSuitePageGatingStore",
    "FBLogger",
    "ODS",
    "Promise",
    "XBusinessExposeGatingAsyncControllerRouteBuilder",
    "gkx",
    "justknobx",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = r("justknobx")._("389");
    function c(t, r, a) {
      var i,
        l =
          (i = o("BizSuitePageGatingStore").getPageGatingEntryState(a, r, t)) !=
          null
            ? i
            : o("BizSuitePageGatingStore").initializeEntryState(a, r, t),
        c;
      if ((l == null ? void 0 : l.deferredPromise) != null)
        return l == null ? void 0 : l.deferredPromise;
      var d,
        m = new (s || (s = n("Promise")))(function (n) {
          if (
            ((d = n),
            c != null && window.clearTimeout(c),
            (l == null ? void 0 : l.asyncState) ===
              o("BizSuitePageGatingEventTypes").PageGatingAsyncState
                .FULFILLED && (l == null ? void 0 : l.entry) != null)
          )
            return n(l.entry);
          c = window.setTimeout(function () {
            if (
              (n(null),
              a !== "0" &&
                (e || (e = o("ODS"))).bumpEntityKey(
                  4203,
                  "biz_inbox_page_gating",
                  t + "." + r + ".requestTimeout",
                ),
              !o("BizSuitePageGatingStore").isInstalled())
            )
              (e || (e = o("ODS"))).bumpEntityKey(
                4203,
                "biz_inbox_page_gating",
                t + "." + r + ".notInstalled",
              );
            else {
              var i = o("BizSuitePageGatingStore").getPageGatingEntryState(
                a,
                r,
                t,
              );
              if (i != null) {
                var l =
                  i.asyncState ===
                  o("BizSuitePageGatingEventTypes").PageGatingAsyncState
                    .FULFILLED
                    ? "timeoutWithEntry"
                    : "timeoutWithoutEntry";
                (e || (e = o("ODS"))).bumpEntityKey(
                  4203,
                  "biz_inbox_page_gating",
                  t + "." + r + "." + l,
                );
              }
            }
          }, u);
        }),
        p = !1;
      function _() {
        return p;
      }
      function f() {
        p || (p = !0);
      }
      var g = [
        m,
        function (e) {
          (window.clearTimeout(c), (c = null), d == null || d(e));
        },
        _,
        f,
      ];
      return ((l.deferredPromise = g), g);
    }
    function d(e, t, n, r) {
      var a;
      function i() {
        a != null &&
          (o("BizSuitePageGatingStore").disposeListener(e, t, n, a),
          (a = null));
      }
      var l = o("BizSuitePageGatingStore").initializeEntryState(e, t, n);
      return (
        (a = o("BizSuitePageGatingEventManager").subscribeToResponseEntry(
          function (o) {
            var a = o.asyncState,
              s = o.entry;
            ((l.asyncState = a),
              (l.entry = s),
              m(s, t, n, e) && r(s, a) && i());
          },
        )),
        l.listeners.add(a),
        m(l.entry, t, n, e) && r(l.entry, l.asyncState) && i(),
        o("BizSuitePageGatingEventManager").dispatchRequestEntry(e, t, n),
        i
      );
    }
    function m(e, t, n, r) {
      return (
        (e == null ? void 0 : e.name) === t &&
        (e == null ? void 0 : e.type) === n &&
        (e == null ? void 0 : e.unitID) === r
      );
    }
    function p(t, n, a) {
      var i,
        l = o("BizSuitePageGatingStore").getPageGatingEntryState(
          t.unitID,
          t.name,
          t.type,
        ),
        s =
          t.type === "gk"
            ? t.value
            : ((i = t.params) == null || (i = i[n != null ? n : ""]) == null
                ? void 0
                : i.getBool) === !0,
        u = s === !0 ? "test" : "control";
      if (
        ((e || (e = o("ODS"))).bumpEntityKey(
          4203,
          "biz_inbox_page_gating",
          t.type + "." + t.name + "." + u + "ExposeAttempt",
        ),
        l != null &&
          !l.exposed &&
          t.inExperiment &&
          l.asyncState ===
            o("BizSuitePageGatingEventTypes").PageGatingAsyncState.FULFILLED)
      ) {
        l.exposed = !0;
        var c = new (r("AsyncRequest"))().setURI(
          r("XBusinessExposeGatingAsyncControllerRouteBuilder").buildUri(
            babelHelpers.extends(
              {
                exposure_name: t.name,
                exposure_type: t.type,
                page_id: t.unitID,
                param_name: n != null ? n : "",
              },
              a != null ? a : {},
            ),
          ),
        );
        r("promiseDone")(
          c.exec(!1),
          function (n) {
            var r;
            (n == null || (r = n.payload) == null ? void 0 : r.exposed) === !1
              ? ((e || (e = o("ODS"))).bumpEntityKey(
                  4203,
                  "biz_inbox_page_gating",
                  t.type + "." + t.name + "." + u + "ExposureIneligible",
                ),
                (l.exposed = !1))
              : (e || (e = o("ODS"))).bumpEntityKey(
                  4203,
                  "biz_inbox_page_gating",
                  t.type + "." + t.name + "." + u + "ExposeSuccess",
                );
          },
          function (n) {
            (r("gkx")("10411") && (l.exposed = !1),
              (e || (e = o("ODS"))).bumpEntityKey(
                4203,
                "biz_inbox_page_gating",
                t.type + "." + t.name + "." + u + "exposeFailure",
              ),
              r("FBLogger")("biz_inbox_page_gating", "expose")
                .catching(n)
                .warn(
                  "Failed to expose %s:%s for %s",
                  t.type,
                  t.name,
                  t.unitID,
                ));
          },
        );
      } else
        (l == null ? void 0 : l.exposed) === !0
          ? (e || (e = o("ODS"))).bumpEntityKey(
              4203,
              "biz_inbox_page_gating",
              t.type + "." + t.name + "." + u + "AlreadyExposed",
            )
          : t.inExperiment === !1
            ? (e || (e = o("ODS"))).bumpEntityKey(
                4203,
                "biz_inbox_page_gating",
                t.type + "." + t.name + "." + u + "NotInExperiment",
              )
            : (l == null ? void 0 : l.asyncState) !==
                o("BizSuitePageGatingEventTypes").PageGatingAsyncState
                  .FULFILLED &&
              (e || (e = o("ODS"))).bumpEntityKey(
                4203,
                "biz_inbox_page_gating",
                t.type + "." + t.name + "." + u + "DataNotFetched",
              );
    }
    var _ = new Map();
    function f(t, n, r, a) {
      var i = t + ":" + n + ":" + r + ":" + a,
        l = r + "." + n + "." + a,
        s = _.get(i);
      (s != null && window.clearTimeout(s),
        _.set(
          i,
          window.setTimeout(function () {
            (e || (e = o("ODS"))).bumpEntityKey(
              4203,
              "biz_inbox_page_gating",
              l,
            );
          }, 100),
        ));
    }
    ((l.getOrCreatePromiseTuple = c),
      (l.requestEntryByUniverse = d),
      (l.exposeGatingEntry = p),
      (l.ODSBumpKeyDebounced = f));
  },
  98,
);
