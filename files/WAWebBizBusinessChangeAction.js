__d(
  "WAWebBizBusinessChangeAction",
  [
    "WAWebBusinessProfileCollection",
    "WAWebConnGetters",
    "WAWebConnModel",
    "WAWebContactGetters",
    "WAWebStateUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WAWebStateUtils").unproxy(e),
        n = t.businessProfile,
        r = t.id,
        a =
          t.isBusiness ||
          (o("WAWebContactGetters").getIsMe(t) &&
            o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn));
      a && !n
        ? t.addChild(
            "businessProfile",
            o("WAWebBusinessProfileCollection").BusinessProfileCollection.gadd(
              r,
            ),
          )
        : !a &&
          n &&
          (t.stopListening(n), (t.businessProfile = void 0), n.delete());
    }
    l.handleBusinessChange = e;
  },
  98,
);
