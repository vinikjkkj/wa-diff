__d(
  "useWAWebTextStatus",
  [
    "WAWebFrontendContactGetters",
    "WAWebTextStatusAction",
    "WAWebTextStatusGatingUtils",
    "WAWebTextStatusUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
    "useWAWebAsync",
    "useWAWebContactValues",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useState;
    function u(e) {
      var t = e.contact,
        a = s(null),
        i = a[0],
        l = a[1],
        u = o("useWAWebContactValues").useContactValues(t.id, [
          o("WAWebFrontendContactGetters").getTextStatusLastUpdateTime,
        ]),
        c = u[0],
        d = r("useWAWebStableCallback")(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (
              (l(null),
              !!o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled() &&
                c === o("WAWebTextStatusUtils").TEXT_STATUS_NOT_FETCHED)
            )
              try {
                yield o("WAWebTextStatusAction").getTextStatus(t.id);
              } catch (e) {
                l(r("getErrorSafe")(e));
              }
          }),
        );
      return (r("useWAWebAsync")(d, [t.id, c]), { error: i });
    }
    l.default = u;
  },
  98,
);
