__d(
  "MAIBAIssueContextExposure",
  [
    "CurrentUser",
    "ExecutionEnvironment",
    "MAIBAIssueContextKVIssues",
    "MAIBAIssueContextNavigation",
    "MAIBAIssueContextPromptSnapshotStore",
    "isMAIBAIssueContextLBDPromptEligible",
    "justknobx",
    "qex",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useCallback,
      d = u.useLayoutEffect,
      m = u.useSyncExternalStore,
      p = new Map(),
      _ = new Set();
    function f(e) {
      return r("justknobx")._("3557")
        ? !1
        : e === "BSH"
          ? r("justknobx")._("3574") === !0
          : e === "BHC"
            ? r("justknobx")._("5924") === !0
            : e === "MBS"
              ? r("justknobx")._("5926") === !0
              : e === "BILLING_DESKTOP"
                ? r("justknobx")._("5925") === !0
                : e === "BILLING_MWEB"
                  ? !1
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          e,
                      );
                    })();
    }
    function g(e) {
      var t;
      if (e == null) return !1;
      var n = o(
        "MAIBAIssueContextPromptSnapshotStore",
      ).getMAIBAIssueContextPromptSnapshotForSurface(
        r("CurrentUser").getPossiblyNonFacebookUserID(),
        e,
      );
      return n == null
        ? !1
        : ((t = n.lbdDetectedIssues) == null
            ? void 0
            : t.some(r("isMAIBAIssueContextLBDPromptEligible"))) === !0 ||
            o("MAIBAIssueContextKVIssues").getUsableKVIssueContext(
              n.ensureResult,
              null,
              e !== "BSH",
              o("MAIBAIssueContextKVIssues").getMAIBAIssueContextAdAccountScope(
                e,
                n.adAccountID,
              ),
            ) != null;
    }
    function h(e) {
      _.add(e);
      var t = o(
        "MAIBAIssueContextPromptSnapshotStore",
      ).subscribeMAIBAIssueContextPromptSnapshot(e);
      return function () {
        (_.delete(e), t());
      };
    }
    function y() {
      return null;
    }
    function C(t) {
      if (
        !(e || (e = r("ExecutionEnvironment"))).canUseDOM ||
        t == null ||
        !f(t) ||
        !g(t)
      )
        return null;
      var n = p.get(t);
      return n != null &&
        n.viewerKey === r("CurrentUser").getPossiblyNonFacebookUserID()
        ? n.enabled
        : null;
    }
    function b(e) {
      var t = c(
        function () {
          return C(e);
        },
        [e],
      );
      return m(h, t, y);
    }
    function v(t) {
      var n,
        o = r("CurrentUser").getPossiblyNonFacebookUserID();
      if (
        !(
          !(e || (e = r("ExecutionEnvironment"))).canUseDOM ||
          o === "" ||
          o === "0" ||
          !f(t) ||
          !g(t) ||
          ((n = p.get(t)) == null ? void 0 : n.viewerKey) === o
        )
      ) {
        var a = r("qex")._("798") === !0;
        (p.set(t, { enabled: a, viewerKey: o }),
          _.forEach(function (e) {
            return e();
          }));
      }
    }
    function S(e) {
      var t = c(
        function () {
          return g(e);
        },
        [e],
      );
      return m(
        o("MAIBAIssueContextPromptSnapshotStore")
          .subscribeMAIBAIssueContextPromptSnapshot,
        t,
        function () {
          return !1;
        },
      );
    }
    function R(e, t) {
      t === void 0 && (t = !0);
      var n = e != null && t && f(e),
        o = r("CurrentUser").getPossiblyNonFacebookUserID(),
        a = S(e);
      d(
        function () {
          n && a && e != null && v(e);
        },
        [n, a, e, o],
      );
      var i = b(e);
      return n ? i : null;
    }
    function L() {
      (o(
        "MAIBAIssueContextNavigation",
      ).resetMAIBAIssueContextNavigationSurface(),
        p.clear(),
        _.forEach(function (e) {
          return e();
        }));
    }
    ((l.getMAIBAIssueContextNavigationSurface = o(
      "MAIBAIssueContextNavigation",
    ).getMAIBAIssueContextNavigationSurface),
      (l.useMAIBAIssueContextNavigationSurface = o(
        "MAIBAIssueContextNavigation",
      ).useMAIBAIssueContextNavigationSurface),
      (l.getMAIBAIssueContextExposure = C),
      (l.useMAIBAIssueContextExposure = b),
      (l.activateMAIBAIssueContextExposure = v),
      (l.useMAIBAIssueContextHasIssuePrompts = S),
      (l.useMAIBAIssueContextMountExposure = R),
      (l.resetMAIBAIssueContextExposure = L));
  },
  98,
);
