__d(
  "WAWebBizUpdateCartEnabledAction",
  [
    "WAWebBusinessProfileCollection",
    "WAWebBusinessProfileJob",
    "WAWebUserUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = await o("WAWebBusinessProfileJob").updateCartEnabled(e),
        n = o(
          "WAWebBusinessProfileCollection",
        ).BusinessProfileCollection.getValid(
          o("WAWebUserUtils").getMeUserOrThrow(),
        ),
        r = n == null ? void 0 : n.profileOptions;
      n &&
        r &&
        ((r.cartEnabled = t),
        o("WAWebBusinessProfileCollection").BusinessProfileCollection.add(n, {
          merge: !0,
        }));
    }
    l.updateCartEnabled = e;
  },
  98,
);
