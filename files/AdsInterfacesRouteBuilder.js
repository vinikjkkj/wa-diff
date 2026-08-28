__d(
  "AdsInterfacesRouteBuilder",
  ["ifRequired", "performanceNow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t(e) {
          ((this.$1 = e),
            (this.$2 = null),
            (this.$3 = {}),
            (this.$4 = {}),
            (this.$5 = []),
            (this.$6 = []));
        }
        var n = t.prototype;
        return (
          (n.on = function (t) {
            return (t(this), this);
          }),
          (n.when = function (t, n) {
            return (t && n(this), this);
          }),
          (n.route = function (t) {
            return ((this.$2 = t), this);
          }),
          (n.params = function (t) {
            return ((this.$3 = babelHelpers.extends({}, this.$3, t)), this);
          }),
          (n.force = function () {
            return ((this.$4.force = !0), this);
          }),
          (n.forceLoad = function () {
            return ((this.$4.forceLoad = !0), this);
          }),
          (n.replaceState = function () {
            return ((this.$4.replaceState = !0), this);
          }),
          (n.fragment = function (t) {
            return ((this.$4.fragment = t), this);
          }),
          (n.setInteractionStartTime = function (t) {
            return ((this.$4.interactionStartTime = t), this);
          }),
          (n.onSuccess = function (t) {
            return (this.$5.push(t), this);
          }),
          (n.onComplete = function (t) {
            return (this.$6.push(t), this);
          }),
          (n.context = function (t) {
            return (
              (this.$4.context = babelHelpers.extends(
                {},
                this.$4.context || {},
                t,
              )),
              this
            );
          }),
          (n.navigate = function (n) {
            var t = this,
              o = null;
            this.__prepareRouting();
            var a = this.$6;
            this.$4.onComplete = function () {
              var n = (e || (e = r("performanceNow")))();
              (a.forEach(function (e) {
                return e();
              }),
                o != null && t.__logSpan(o, n));
            };
            var i = this.$5;
            ((this.$4.onSuccess = function () {
              i.forEach(function (e) {
                return e();
              });
            }),
              (o = (e || (e = r("performanceNow")))()),
              this.__navigate(n));
          }),
          (n.__logSpan = function (t, n) {
            r("ifRequired")("AdsPerfInteractionsController", function (e) {
              return e
                .getInteractionIDsForGlobalLogging()
                .forEach(function (e) {
                  r("ifRequired")("InteractionTracingMetrics", function (r) {
                    return r.addSubspan(e, "Routing", "AppTiming", t, n, {});
                  });
                });
            });
          }),
          (n.__navigate = function (t) {
            this.$2
              ? this.$1.navigateTo(this.$2, this.$3, this.$4, t)
              : this.$1.updateParams(this.$3 || {}, this.$4, t);
          }),
          (n.getURI = function (t) {
            return (this.__prepareRouting(), this.__getURI(t));
          }),
          (n.__getURI = function (t) {
            return this.$1.getURITo(this.$2, this.$3, this.$4, t);
          }),
          (n.__prepareRouting = function () {}),
          (n.__getRoute = function () {
            return this.$2;
          }),
          (n.__getParams = function () {
            return this.$3;
          }),
          (n.__getOptions = function () {
            return this.$4;
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
