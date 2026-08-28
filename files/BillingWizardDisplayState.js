__d(
  "BillingWizardDisplayState",
  [
    "BillingWizardRootUPLogger",
    "BillingWizardTypes",
    "Promise",
    "RelayHooks",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.name = "placeholder"),
            (e.allowPreloading = !0),
            (e.preloadedQuery = null),
            (e.preloadFuture = function () {}),
            (e.query = null),
            (e.mapPropsToQuery = function (e) {
              return babelHelpers.extends({}, e);
            }),
            (e.fetchPolicy = "store-or-network"),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.getWizardScreenName = function () {
            return this.name;
          }),
          (i.setPreloadFuture = function (t) {
            this.preloadFuture = t;
          }),
          (i.onDisplay = function (t, n, r) {
            var e = new Error("Failed to set screen");
            throw (e.stack, e);
          }),
          (i.onDisplayInternal = function (t, n, r) {
            return this.onDisplay(t, n, r);
          }),
          (i.onEnter = function (r, o) {
            return (e || (e = n("Promise"))).resolve({ newProps: r });
          }),
          (i.onExit = function (r, o, a) {
            return (e || (e = n("Promise"))).resolve({ event: r, newProps: o });
          }),
          (i.onLoaded = function (t, n) {}),
          (i.onEnterInternal = function (t, n, r) {
            return (this.preloadQuery(t, n, r), this.onEnter(t, r));
          }),
          (i.onExitInternal = function (t, n, r) {
            return (
              this.preloadedQuery != null && this.preloadedQuery.dispose(),
              this.onExit(t, n, r)
            );
          }),
          (i.onLoadedInternal = function (t, n) {
            var e = this.getWizardScreenName();
            (r("BillingWizardRootUPLogger").setWizardScreen(e),
              this.onLoaded(t, n),
              this.preloadFuture(t));
          }),
          (i.preloadQuery = function (t, n, r) {
            var e = this,
              a = this.mapPropsToQuery(t, r);
            if (this.query != null) {
              var i,
                l = (i = t == null ? void 0 : t.isTest) != null ? i : !1;
              (l && n.mock.queuePendingOperation(this.query, a),
                (this.preloadedQuery = o("RelayHooks").loadQuery(
                  n,
                  this.query,
                  a,
                  { fetchPolicy: this.fetchPolicy },
                )));
            }
            return function () {
              e.preloadedQuery != null && e.preloadedQuery.dispose();
            };
          }),
          a
        );
      })(o("BillingWizardTypes").BaseWizardState);
    l.DisplayState = c;
  },
  98,
);
