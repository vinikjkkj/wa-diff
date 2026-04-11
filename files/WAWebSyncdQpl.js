__d(
  "WAWebSyncdQpl",
  [
    "WAWebOfflineHandler",
    "WAWebQplFlowWrapper",
    "WAWebSyncBootstrap",
    "WAWebSyncdMetrics",
    "err",
    "gkx",
    "justknobx",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("qpl")._(891431212, "3270"),
      s = 0,
      u = ["source"],
      c = 100;
    function d() {
      return Math.round(self.performance.now() / c) * c;
    }
    function m(e) {
      if ((e == null ? void 0 : e.string) != null) {
        var t = e.string,
          n = {};
        (Object.keys(e.string).forEach(function (e) {
          u.includes(e) || (n[e] = t[e]);
        }),
          (e.string = n));
      }
    }
    function p(e, t) {
      var n;
      if ((t == null || (n = t.string) == null ? void 0 : n.source) == null)
        return e;
      var r = t.string,
        o = Object.keys(r).filter(function (e) {
          return u.includes(e);
        });
      return [
        o.map(function (e) {
          return r[e];
        }),
        e,
      ].join("_");
    }
    function _() {
      return r("WAWebSyncBootstrap").isSyncDBootstrapInProcess()
        ? "bootstrap"
        : o(
              "WAWebOfflineHandler",
            ).OfflineMessageHandler.isResumeFromRestartComplete()
          ? "online"
          : "offline_resume";
    }
    var f = (function () {
      function t() {
        ((this.$3 = _()),
          (this.$4 =
            r("gkx")("26259") &&
            r("justknobx")._("3998") &&
            (this.$3 === "bootstrap" || this.$3 === "offline_resume")),
          this.$4 && (this.$1 = s++));
      }
      var n = t.prototype;
      return (
        (n.$6 = function () {
          if (!this.$4) return !1;
          if (!this.$2)
            throw r("err")("QPL instance ${this._instanceKey} is not started");
          return !0;
        }),
        (n.start = function () {
          this.$4 &&
            ((this.$5 = o("WAWebQplFlowWrapper").QPL.markerStart(e, {
              instanceKey: this.$1,
              timestamp: d(),
            })),
            (this.$2 = !0),
            this.annotate({ when: this.$3 }));
        }),
        (n.annotate = function (t) {
          if (this.$6()) {
            var e = o("WAWebSyncdMetrics").constructAnnotationsFromContext(t);
            if ((m(e), e)) {
              var n;
              (n = this.$5) == null || n.annotate(e);
            }
          }
        }),
        (n.mark = function (t, n) {
          if (this.$6()) {
            var e = o("WAWebSyncdMetrics").constructAnnotationsFromContext(n);
            this.$7(t, e);
          }
        }),
        (n.markAnnotations = function (t, n) {
          this.$6() && this.$7(t, n);
        }),
        (n.$7 = function (t, n) {
          var e,
            r = p(t, n),
            o = babelHelpers.extends({}, n);
          (m(o),
            (e = this.$5) == null ||
              e.addPoint(
                r,
                babelHelpers.extends({}, n && { data: o }, { timestamp: d() }),
              ));
        }),
        (n.end = function (t) {
          var e;
          (t === void 0 && (t = !1),
            this.$6() &&
              ((this.$2 = !1),
              (e = this.$5) == null || e.end(t ? 3 : 2, { timestamp: d() }),
              (this.$5 = null)));
        }),
        t
      );
    })();
    l.SyncdQPL = f;
  },
  98,
);
