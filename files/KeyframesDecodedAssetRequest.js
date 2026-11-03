__d(
  "KeyframesDecodedAssetRequest",
  ["KeyframesDownloadTracker", "Promise", "promiseDone", "requireDeferred"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("requireDeferred")("KeyframesAssetDecoder").__setRef(
        "KeyframesDecodedAssetRequest",
      ),
      u = r("requireDeferred")("KeyframesRenderer").__setRef(
        "KeyframesDecodedAssetRequest",
      );
    function c(t) {
      return !t || typeof t != "string"
        ? (e || (e = n("Promise"))).reject("Request: invalid uri " + t)
        : r("KeyframesDownloadTracker")(t);
    }
    var d = (function () {
      function t(t, o) {
        var a = this;
        this.$1 = !1;
        var i = (e || (e = n("Promise"))).all([
          typeof t == "string" ? c(t) : t,
          s.load(),
        ]);
        ((this.$2 = i.then(function (e) {
          var t = e[0],
            n = e[1];
          return n.fromDocumentBytes(t);
        })),
          o.scheduleDecode(i, this.$2),
          r("promiseDone")(
            this.$2,
            function () {
              return (a.$1 = !0);
            },
            function () {
              return (a.$1 = !0);
            },
          ));
      }
      var o = t.prototype;
      return (
        (o.isDone = function () {
          return this.$1;
        }),
        (o.getAsset = function () {
          return this.$2;
        }),
        (o.getRenderer = function (r) {
          return (e || (e = n("Promise")))
            .all([this.$2, u.load(), r.maybeGetPerformanceLog()])
            .then(function (e) {
              var t = e[0],
                n = e[1],
                r = e[2];
              return new n(t, r);
            });
        }),
        t
      );
    })();
    l.default = d;
  },
  98,
);
