__d(
  "WAMediaOperationsRetrier",
  ["WALogger", "WAPromiseBackoffs"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 4,
      u = { algo: { type: "constant", delay: 1e3 }, jitter: 0 },
      c = (function () {
        function t(e, t, n) {
          ((this.$1 = e),
            (this.routesInfo = t),
            (this.$2 = o("WAPromiseBackoffs").createPromiseTimer(u)),
            (this.$3 = 0),
            (this.$4 = !1),
            (this.$5 = n));
        }
        var n = t.prototype;
        return (
          (n.run = async function (n, r) {
            for (; this.$3 < s; ) {
              await this.$2();
              var t = void 0;
              if (this.$3 > 0) {
                var a;
                ((t = this.$3 >= s - 2 && !this.$4),
                  o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "MediaOperationsRetrier:",
                        " wait for internet, attempt = ",
                        "",
                      ])),
                    this.$1,
                    this.$3,
                  ),
                  await ((a = this.$5) == null ? void 0 : a.call(this)));
              } else t = !1;
              var i = this.routesInfo;
              if (!i) return null;
              var l = i.host;
              t && i.fallbackHost && (l = i.fallbackHost);
              var u = await n(l, i.authToken, this.$3, r);
              if (u.success) return u.value;
              (++this.$3, (this.$4 = u.error.progressMade));
            }
            return null;
          }),
          t
        );
      })();
    function d(e) {
      return new c(
        "upload",
        {
          authToken: "",
          fallbackHost: null,
          host: { class: null, domain: "" },
          timeElapsed: null,
        },
        e,
      );
    }
    ((l.MediaOperationsRetrier = c),
      (l.createRouteIndependentUploadRetrier = d));
  },
  98,
);
