__d(
  "ThisControllerNoLongerExists",
  [
    "XControllerURIBuilder",
    "XThisControllerNoLongerExistsController",
    "jsRouteBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t) {
        var n;
        return (
          (n = e.call(this, "/dcb/tcnle/", {}) || this),
          (n.$XControllerURIBuilderNoOpDead$p_1 = t),
          n
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.__validateRequiredParamsExistence = function () {}),
        (n.__assertParamExists = function (t) {}),
        (n.__setParam = function (t, n, r) {
          return this;
        }),
        (n.__setParamInt = function (t, n) {}),
        (n.getRequest_LEGACY_UNTYPED = function (t) {
          return t.setURI(this.getURI());
        }),
        (n.getURI = function () {
          return r("XThisControllerNoLongerExistsController")
            .getURIBuilder()
            .setString("t", this.$XControllerURIBuilderNoOpDead$p_1)
            .getURI();
        }),
        (n.getLookasideURI = function () {
          return this.getURI();
        }),
        t
      );
    })(r("XControllerURIBuilder"));
    function s(e) {
      return r("XThisControllerNoLongerExistsController")
        .getURIBuilder()
        .setString("t", e)
        .getURI();
    }
    function u(t) {
      return new e(t);
    }
    function c(e) {
      var t = r("jsRouteBuilder")("/dcb/tcnle/", {}),
        n = { t: e };
      return {
        buildUri: function () {
          return t.buildUri(n);
        },
        buildUriNullable: function () {
          return t.buildUriNullable(n);
        },
        buildURL: function () {
          return t.buildURL(n);
        },
        buildURLStringDEPRECATED: function () {
          return t.buildURLStringDEPRECATED(n);
        },
        getPath: function () {
          return t.getPath();
        },
      };
    }
    ((l.__DEADURI__ = s),
      (l.__DEADBUILDER__ = u),
      (l.__DEADROUTEBUILDER__ = c));
  },
  98,
);
