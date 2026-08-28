__d(
  "GraphAPIRequestSpec",
  ["invariant", "CurrentLocale", "GraphAPICore", "GraphAPIPreloadedData"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = (function () {
        function e(e, t, n, r, o, a, i, l, s, u) {
          ((this.name = e),
            (this.path = t),
            (this.params = n),
            (this.batch = r),
            (this.source = o),
            (this.preloadInfo = a),
            (this.priority = i),
            (this.canRetry = !1),
            (this.earlyRejectionError = l),
            (this.cacheInfo = s),
            (this.clientMetadata = u));
        }
        var t = e.prototype;
        return (
          (t.preloadedBy = function (t, n, r) {
            var e = { ignoreMismatches: !1 },
              o = n.isScenarioOngoing,
              a = n.log;
            return (
              (this.preloadInfo = babelHelpers.extends(
                { asyncData: t, isScenarioOngoing: o, log: a },
                e,
                r,
                { mutableData: {} },
              )),
              this
            );
          }),
          (t.batched = function () {
            return ((this.batch = !0), this);
          }),
          (t.setPriority = function (t) {
            return ((this.priority = t), this);
          }),
          (t.retriable = function () {
            return ((this.canRetry = !0), this);
          }),
          (t.withClientMetadata = function (t, n) {
            var e;
            return (
              (this.clientMetadata =
                (e = this.clientMetadata) != null ? e : new Map()),
              this.clientMetadata.set(t, n),
              this
            );
          }),
          (t.__setCacheInfo = function (t) {
            return ((this.cacheInfo = t), this);
          }),
          e
        );
      })(),
      u = (function (e) {
        function t(t, n, r, o, a, i, l, s, u) {
          return e.call(this, t, n, r, !1, o, a, i, l, s, u) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.clone = function () {
            var e = new t(
              this.name,
              this.path,
              this.params,
              this.source,
              this.preloadInfo,
              this.priority,
              this.earlyRejectionError,
              null,
              this.clientMetadata,
            );
            return this.batch ? e.batched() : e;
          }),
          (n.declareOnly = function () {
            return new c(this);
          }),
          (n.get = function (t) {
            return this.declareOnly().get(t).go();
          }),
          (n.post = function (t) {
            return this.declareOnly().post(t).go();
          }),
          (n.remove = function (t) {
            return this.declareOnly().remove(t).go();
          }),
          t
        );
      })(e),
      c = (function (e) {
        function n(t) {
          return (
            e.call(
              this,
              t.name,
              t.path,
              t.params,
              t.batch,
              t.source,
              t.preloadInfo,
              t.priority,
              t.earlyRejectionError,
              t.cacheInfo,
              t.clientMetadata,
            ) || this
          );
        }
        babelHelpers.inheritsLoose(n, e);
        var o = n.prototype;
        return (
          (o.get = function (t) {
            return (
              (t = this.$SemideclaredGraphAPIRequestSpec$p_1(t)),
              new d(this, t, "get")
            );
          }),
          (o.post = function (n) {
            return (
              n && t.FormData && n instanceof t.FormData
                ? (n = this.$SemideclaredGraphAPIRequestSpec$p_2(n))
                : (n = this.$SemideclaredGraphAPIRequestSpec$p_1(n)),
              new d(this, n, "post")
            );
          }),
          (o.remove = function (t) {
            return (
              (t = this.$SemideclaredGraphAPIRequestSpec$p_1(t)),
              new d(this, t, "delete")
            );
          }),
          (o.$SemideclaredGraphAPIRequestSpec$p_1 = function (t) {
            return babelHelpers.extends(
              { locale: r("CurrentLocale").get() },
              this.params,
              t,
            );
          }),
          (o.$SemideclaredGraphAPIRequestSpec$p_2 = function (t) {
            t.append("locale", r("CurrentLocale").get());
            var e = this.params;
            if (e)
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && t.append(n, e[n]);
            return t;
          }),
          n
        );
      })(e),
      d = (function (e) {
        function t(t, n, r) {
          var o;
          return (
            (o =
              e.call(
                this,
                t.name,
                t.path,
                n,
                t.batch,
                t.source,
                t.preloadInfo,
                t.priority,
                t.earlyRejectionError,
                t.cacheInfo,
                t.clientMetadata,
              ) || this),
            (o.method = r),
            o
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.go = function () {
            var e = this.params,
              t = this.method,
              n = o("GraphAPIPreloadedData").find(this);
            if (n != null)
              return (
                r("GraphAPICore").emit(
                  "preloaded",
                  babelHelpers.extends(
                    { reqSrc: this.source, path: this.path },
                    n,
                  ),
                ),
                n.response
              );
            if (e instanceof FormData)
              return (
                t === "post" || s(0, 3975),
                r("GraphAPICore").promisePostFormData(
                  this.name,
                  this.path,
                  e,
                  this.earlyRejectionError,
                )
              );
            switch ((e || s(0, 3976), t)) {
              case "get":
                return r("GraphAPICore").promiseGet(
                  this.name,
                  this.path,
                  e,
                  this.batch,
                  this.source,
                  this.preloadInfo,
                  this.priority,
                  this.canRetry,
                  this.earlyRejectionError,
                  this.cacheInfo,
                  this.clientMetadata,
                );
              case "post":
                return r("GraphAPICore").promisePost(
                  this.name,
                  this.path,
                  e,
                  this.batch,
                  this.source,
                  this.preloadInfo,
                  this.priority,
                  this.canRetry,
                  this.earlyRejectionError,
                );
              case "delete":
                return r("GraphAPICore").promiseDelete(
                  this.name,
                  this.path,
                  e,
                  this.batch,
                  this.source,
                  this.preloadInfo,
                  this.priority,
                  this.earlyRejectionError,
                );
            }
            s(0, 3977);
          }),
          t
        );
      })(e);
    l.default = u;
  },
  98,
);
