__d(
  "WAWebDeactivateCommunityDrawer.react",
  [
    "WAWebCommunityDeactivationInfoDrawer.react",
    "react",
    "useWAWebCallbackOnce",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.chat,
        n = e.onBack,
        o = e.ref,
        a = r("useWAWebCallbackOnce")(function () {
          n();
        });
      return s.jsx(r("WAWebCommunityDeactivationInfoDrawer.react"), {
        ref: o,
        onBack: a,
        chat: t,
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
