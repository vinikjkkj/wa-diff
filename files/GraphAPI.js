__d(
  "GraphAPI",
  [
    "errorCode",
    "ErrorNormalizeUtils",
    "FBLogger",
    "GraphAPIAdAccountPrefix",
    "GraphAPICore",
    "GraphAPIRequestSpec",
    "GraphAPIRequestSpecPotentialEdge",
    "err",
    "fb-error",
    "isValidID",
    "isValidVanityURI",
    "runGraphAPIBatch_EXPERIMENTAL",
    "sdk.URI",
    "sdk.safelyParseResponse",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = (function () {
        function e(e, t) {
          ((this.version = e), (this.source = t));
        }
        var t = e.prototype;
        return (
          (t.me = function () {
            return new (r("GraphAPIRequestSpecPotentialEdge"))(
              "me",
              this.$1("/me"),
              null,
              this.source,
            );
          }),
          (t.object = function (t, n, o) {
            o === void 0 && (o = !1);
            var e = this.$2(n, o);
            return new (r("GraphAPIRequestSpecPotentialEdge"))(
              "object:" + t,
              this.$1("/" + n),
              null,
              this.source,
              void 0,
              void 0,
              e,
            );
          }),
          (t.objects = function (t, n, o) {
            o === void 0 && (o = !1);
            var e = this.$3(n, o);
            return new (r("GraphAPIRequestSpec"))(
              "objects:" + t,
              this.$1("/"),
              { ids: n.join(",") },
              this.source,
              void 0,
              void 0,
              e,
            );
          }),
          (t.urls = function (t) {
            return (
              t.forEach(function (e) {
                return r("sdk.URI").isValidURI(e);
              }),
              new (r("GraphAPIRequestSpec"))(
                "urls",
                this.$1("/"),
                { ids: t.join(",") },
                this.source,
              )
            );
          }),
          (t.objectByName = function (t, n) {
            return (
              this.$4(n),
              new (r("GraphAPIRequestSpecPotentialEdge"))(
                "objectByName:" + t,
                this.$1("/" + n),
                null,
                this.source,
              )
            );
          }),
          (t.objectsByName = function (t, n) {
            var e = this;
            return (
              n.forEach(function (t) {
                return e.$4(t);
              }),
              new (r("GraphAPIRequestSpec"))(
                "objectsByName:" + t,
                this.$1("/"),
                { ids: n.join(",") },
                this.source,
              )
            );
          }),
          (t.adaccount = function (t, n) {
            n === void 0 && (n = !1);
            var e = this.$2(t, n);
            return new (r("GraphAPIRequestSpecPotentialEdge"))(
              "adaccount",
              this.$1(
                "/" + o("GraphAPIAdAccountPrefix").AddAdAdccountPrefix(t),
              ),
              null,
              this.source,
              void 0,
              void 0,
              e,
            );
          }),
          (t.adaccounts = function (t, n) {
            n === void 0 && (n = !1);
            var e = this.$3(t, n);
            return new (r("GraphAPIRequestSpecPotentialEdge"))(
              "adaccounts",
              this.$1("/"),
              {
                ids:
                  o("GraphAPIAdAccountPrefix").AD_ACCOUNT_PREFIX +
                  t.join("," + o("GraphAPIAdAccountPrefix").AD_ACCOUNT_PREFIX),
              },
              this.source,
              void 0,
              void 0,
              e,
            );
          }),
          (t.search = function (t) {
            return new (r("GraphAPIRequestSpec"))(
              "search:" + t,
              this.$1("/search"),
              { type: t },
              this.source,
            );
          }),
          (t.path_DO_NOT_USE = function (t) {
            return new (r("GraphAPIRequestSpec"))(
              "path:" + t,
              this.$1(t),
              null,
              this.source,
            );
          }),
          (t.root = function (t) {
            return this.objectByName(t, t);
          }),
          (t.$1 = function (t) {
            return "/v" + this.version + t;
          }),
          (t.$2 = function (t, n) {
            if (r("isValidID")(t)) return null;
            var e = r("fb-error").TAAL.blameToPreviousFile(
              r("err")(t + " is not a valid FBID"),
            );
            if (((e.is_js_error = !0), n))
              return (
                r("FBLogger")("graph_api")
                  .catching(e)
                  .mustfix(
                    "Attempted to make an API request for an invalid ID %s",
                    t,
                  ),
                (e.code = 100),
                (e.error_subcode = 1357052),
                (e.js_normalized_error = r(
                  "ErrorNormalizeUtils",
                ).normalizeError(e)),
                e
              );
            throw (
              (e.js_normalized_error = r("ErrorNormalizeUtils").normalizeError(
                e,
              )),
              e
            );
          }),
          (t.$3 = function (t, n) {
            for (var e = 0; e < t.length; e++) {
              var r = this.$2(t[e], n);
              if (r != null) return r;
            }
          }),
          (t.$4 = function (t) {
            if (!r("isValidVanityURI")(t)) {
              var e = new Error(t + " is not a valid vanity URI");
              throw (e.stack, r("fb-error").TAAL.blameToPreviousFile(e));
            }
          }),
          e
        );
      })();
    function c(e, t) {
      return (
        (t == null || t === "") &&
          r("FBLogger")("graph_api").warn(
            "Expected a valid request source to be passed, but none was given!",
          ),
        new u(e, t)
      );
    }
    ((c.blocklist = (e = r("GraphAPICore")).blocklist),
      (c.disableBatching = e.disableBatching),
      (c.enableBatching = e.enableBatching),
      (c.registerProcessor = e.registerProcessor),
      (c.runBatchExperimental = r("runGraphAPIBatch_EXPERIMENTAL")),
      (c.setMaxAPIRequestAttempts = e.setMaxAPIRequestAttempts),
      (c.addErrorHandler = function (e) {
        return r("GraphAPICore").addListener("error", e);
      }),
      (c.addRetryLogHandler = function (e) {
        return r("GraphAPICore").addListener("retry", e);
      }),
      (c.addSuccessLogHandler = function (e) {
        return r("GraphAPICore").addListener("success", e);
      }),
      (c.hasCustomErrorHandler = function () {
        return r("GraphAPICore").listeners("error").length > 1;
      }),
      r("sdk.safelyParseResponse").setErrorHandler(function (e, t, n, o) {
        var a = "unknown URL";
        if (n)
          if (r("sdk.URI").isValidURI(n)) {
            var i = new (r("sdk.URI"))(n);
            if (
              Object.prototype.hasOwnProperty.call(
                i.getQueryData(),
                "access_token",
              )
            ) {
              var l = i.getQueryData();
              ((l.access_token = "ACCESS_TOKEN"), i.setQueryData(l));
            }
            a = i.toString();
          } else a = "invalid URL (" + n + ")";
        return (
          r("FBLogger")("graph_api")
            .catching(e)
            .mustfix(
              "Received Invalid JSON reply [HTTP %s] from %s: %s",
              o,
              a,
              JSON.stringify(t),
            ),
          r("sdk.safelyParseResponse").ERROR
        );
      }),
      (l.default = c));
  },
  98,
);
