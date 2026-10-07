__d(
  "WAWebBizUpdateCartEnabledAction",
  [
    "WAWebBusinessProfileCollection",
    "WAWebBusinessProfileJob",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebBusinessProfileJob").updateCartEnabled(e),
            n = o(
              "WAWebBusinessProfileCollection",
            ).BusinessProfileCollection.getValid(
              o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
            ),
            r = n == null ? void 0 : n.profileOptions;
          n &&
            r &&
            ((r.cartEnabled = t),
            o("WAWebBusinessProfileCollection").BusinessProfileCollection.add(
              n,
              { merge: !0 },
            ));
        })),
        s.apply(this, arguments)
      );
    }
    l.updateCartEnabled = e;
  },
  98,
);
