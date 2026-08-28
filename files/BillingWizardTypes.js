__d(
  "BillingWizardTypes",
  ["asyncToGeneratorRuntime", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = [
        "BACK",
        "CURRENCY_CHANGE",
        "DONE",
        "EXIT",
        "NEW_ACCOUNT_CREATED",
        "STATUS",
        "WIZARD",
      ],
      c = function (t) {
        ((this.name = ""), (this.entryPointQuery = null), (this.events = t));
      },
      d = (function (e) {
        function t(t, n, r, o) {
          var a;
          return (
            r === void 0 && (r = {}),
            o === void 0 && (o = !1),
            (a = e.call(this, r) || this),
            (a.config = t),
            (a.name = n),
            (a.preserveBack = o),
            a
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var r = t.prototype;
        return (
          (r.getConfig = function (t) {
            return this.config;
          }),
          (r.getConfigName = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield this.config.load();
              return e.default ? e.default.name : e.name;
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })(c),
      m = (function (e) {
        function t(t, n, r) {
          var o;
          return (
            r === void 0 && (r = {}),
            (o = e.call(this, r) || this),
            (o.config = t),
            (o.name = n),
            o
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var r = t.prototype;
        return (
          (r.getConfig = function () {
            return this.config;
          }),
          (r.getConfigName = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield this.config.load();
              return e.default ? e.default.name : e.name;
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })(c);
    ((l.BASE_TRANSITIONS = u),
      (l.BaseWizardState = c),
      (l.RootConfigState = d),
      (l.SubConfigState = m));
  },
  98,
);
