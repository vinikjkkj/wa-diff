__d(
  "preloadedAsyncRequest",
  [
    "Promise",
    "URI",
    "asyncToGeneratorRuntime",
    "clearTimeout",
    "err",
    "setTimeoutAcrossTransitions",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = !1,
      c = function (t) {};
    function d(e) {
      return e.getMethod() !== "GET"
        ? e.getURI()
        : new (s || (s = r("URI")))(e.getURI())
            .addQueryData(e.getData())
            .toString();
    }
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, o, a) {
          var i,
            l,
            s = t.preloader,
            u = d(o);
          if (
            (c("Request URI = " + u),
            c("Preload URI = " + ((i = t.uri) != null ? i : "<NULL>")),
            s == null || u !== t.uri)
          )
            return (
              c(
                u +
                  ": Preloaded data NOT available (preload URI doesn't match)",
              ),
              o.promisePayload().then(function (e) {
                return (c(u + ": AsyncRequest completed"), e);
              })
            );
          c(u + ": Preload URL matches request URL, preloading can be used!");
          var m = (l = s.peek()) == null ? void 0 : l.data;
          if (m != null) return (c(u + ": Preloaded data was available"), a(m));
          c(u + ": Preloaded data not available yet");
          var p = null,
            _ = !1,
            f = function (t) {
              ((_ = !0),
                o.promisePayload().then(function (e) {
                  (c(u + ": AsyncRequest completed"), t(e));
                }));
            },
            g = new (e || (e = n("Promise")))(function (e, t) {
              (s.onLoaded(function (n) {
                var o = n.data;
                o != null
                  ? (r("clearTimeout")(p),
                    c(u + ": Preload completed"),
                    e(a(o)))
                  : (c(u + ": Preload completed but it had no data :/"),
                    t(r("err")("Preloaded data was empty")));
              }),
                s.onError(function (t) {
                  (c(u + ": Preload had error, making AsyncRequest"),
                    _ ||
                      (r("clearTimeout")(p),
                      c(u + ": Making AsyncRequest due to preloader error"),
                      f(e)));
                }));
            }),
            h = new e(function (e) {
              var t = 5e3;
              (c(u + ": Waiting " + t + "ms for preloader to finish"),
                (p = r("setTimeoutAcrossTransitions")(function () {
                  (c(u + ": Making AsyncRequest to race preloader"), f(e));
                }, t)));
            });
          return yield e.race([g, h]);
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      return m(e, t, function (e) {
        return e;
      });
    }
    ((_.withDataProcessor = function (e, t, n) {
      return m(e, t, n);
    }),
      (l.default = _));
  },
  98,
);
