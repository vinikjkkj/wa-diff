__d(
  "WAWebUseBusinessProfile.react",
  [
    "WAWebBusinessProfileCollection",
    "WAWebContactCollection",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebModelValues",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState;
    function d(e, t) {
      var a = c(function () {
          return e
            ? o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(
                e,
              )
            : null;
        }),
        i = a[0],
        l = a[1];
      i &&
        e &&
        !i.id.equals(e) &&
        l(o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(e));
      var s = r("useWAWebUnmountSignal")();
      return (
        u(
          function () {
            var t = (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  if (!(!e || !e.isUserNotPSA() || e.isFbidBot())) {
                    var t = o("WAWebContactCollection").ContactCollection.get(
                      e,
                    );
                    if (!(t && !t.isBusiness && !t.isEnterprise)) {
                      var n = yield o(
                        "WAWebBusinessProfileCollection",
                      ).BusinessProfileCollection.find(e);
                      s.aborted || l(n);
                    }
                  }
                },
              );
              return function () {
                return t.apply(this, arguments);
              };
            })();
            t();
          },
          [e],
        ),
        o("useWAWebModelValues").useOptionalModelValues(i, t != null ? t : [])
      );
    }
    l.useBusinessProfile = d;
  },
  98,
);
