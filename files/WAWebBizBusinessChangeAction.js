__d(
  "WAWebBizBusinessChangeAction",
  [
    "WAWebBusinessProfileCollection",
    "WAWebConnModel",
    "WAWebContactGetters",
    "WAWebStateUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = function (t) {
      var e = o("WAWebStateUtils").unproxy(t),
        n = e.businessProfile,
        r = e.id,
        a =
          e.isBusiness ||
          (o("WAWebContactGetters").getIsMe(e) &&
            o("WAWebConnModel").Conn.isSMB);
      a && !n
        ? e.addChild(
            "businessProfile",
            o("WAWebBusinessProfileCollection").BusinessProfileCollection.gadd(
              r,
            ),
          )
        : !a &&
          n &&
          (e.stopListening(n), (e.businessProfile = void 0), n.delete());
    };
    l.handleBusinessChange = e;
  },
  98,
);
