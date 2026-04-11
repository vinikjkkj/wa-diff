__d(
  "WAWebTextStatusBridgeApi",
  ["WAWebTextStatusCollection", "WAWebUserPrefsMeUser", "WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    var e = {
      setMyStatus: function (t) {
        var e = t.status,
          n = o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE();
        o("WAWebTextStatusCollection").TextStatusCollection.assertGet(
          o("WAWebWidFactory").asUserWidOrThrow(n),
        ).status =
          e != null ? e : o("WAWebTextStatusCollection").getDefaultTextStatus();
      },
    };
    l.TextStatusBridgeApi = e;
  },
  98,
);
