__d(
  "WAWebAdCollection",
  [
    "WAWebAdModel",
    "WAWebBaseCollection",
    "WAWebFetchAds",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.loadingInfo = null),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var r = t.prototype;
      return (
        (r.loadAds = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = this;
            if (this.loadingInfo != null && this.loadingInfo.pageId === e)
              return this.loadingInfo.promise;
            this.reset();
            var n = o("WAWebFetchAds")
              .fetchAds(e)
              .then(function (n) {
                var r;
                (n.type === "success"
                  ? (t.set(
                      n.ads.map(function (e) {
                        return { id: e.adId, ad: e };
                      }),
                    ),
                    (r = { result: "success", pageId: e }))
                  : n.type === "recovery-required"
                    ? (r = {
                        result: "recovery-required",
                        pageId: e,
                        emailMask: n.emailMask,
                      })
                    : (n.type, (r = { result: n.type, pageId: e })),
                  t.trigger("ads-loaded", r));
              })
              .finally(function () {
                t.loadingInfo = null;
              });
            return ((this.loadingInfo = { promise: n, pageId: e }), n);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        t
      );
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o("WAWebAdModel").AdModel;
    var s = new e();
    l.AdCollection = s;
  },
  98,
);
