__d(
  "WAWebImgRetry",
  [
    "Promise",
    "WAAbortError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebMiscErrors",
    "WAWebWebcImgErrorWamEvent",
    "WAWebXHR",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 3e4,
      d = (function () {
        function t(e) {
          var t = e.crossOrigin,
            n = e.hasPrivacyChecks,
            r = e.noXHR,
            o = e.src;
          ((this.crossOrigin = t),
            (this.hasPrivacyChecks = n),
            (this.noXHR = r),
            (this.src = o),
            (this.generation = 0),
            (this.refCount = 0),
            (this.inProgress = !1));
        }
        var a = t.prototype;
        return (
          (a.key = function () {
            var e = this.crossOrigin ? "Y" : "N",
              t = this.noXHR ? "Y" : "N";
            return "co:" + e + ",noXHR:" + t + ",src:" + this.src;
          }),
          (a.sendXHR = function () {
            var t = this;
            if (this.noXHR) return (u || (u = n("Promise"))).resolve(!0);
            var a = this.src;
            this.inProgress = !0;
            var i = new AbortController(),
              l = o("WAPromiseTimeout").promiseTimeout(
                r("WAWebXHR").get(a, void 0, void 0, i.signal),
                c,
                "ImgRetryTimeout",
              );
            return (
              (this.$1 = { promise: l, controller: i }),
              this.$1.promise
                .then(function (t) {
                  var n = t.status;
                  if (n >= 200 && n < 400) return !0;
                  if (n >= 500) {
                    o("WALogger").LOG(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "Img:Retry ",
                          " failed with error code ",
                          ". Retrying.",
                        ])),
                      a,
                      n,
                    );
                    var r = new (o(
                      "WAWebWebcImgErrorWamEvent",
                    ).WebcImgErrorWamEvent)({ webcImgErrorCode: n });
                    return (r.commit(), !1);
                  }
                  o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Img:Retry ",
                        " failed with error code ",
                        ". Not retrying.",
                      ])),
                    a,
                    n,
                  );
                  var i = new (o(
                    "WAWebWebcImgErrorWamEvent",
                  ).WebcImgErrorWamEvent)({ webcImgErrorCode: n });
                  throw (
                    i.commit(),
                    new (o("WAWebMiscErrors").ServerStatusError)(null, a, n)
                  );
                })
                .catch(function (e) {
                  if (
                    e instanceof o("WAWebMiscErrors").ServerStatusError ||
                    e.name === o("WAAbortError").ABORT_ERROR
                  )
                    throw e;
                  return !1;
                })
                .finally(function () {
                  t.inProgress = !1;
                })
            );
          }),
          (a.release = function () {
            return (
              this.refCount--,
              this.refCount <= 0
                ? (this.$1 && this.$1.controller.abort(), !0)
                : !1
            );
          }),
          (a.shouldRetain = function () {
            return this.refCount > 0;
          }),
          t
        );
      })();
    l.default = d;
  },
  98,
);
