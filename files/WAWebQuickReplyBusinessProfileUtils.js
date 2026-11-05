__d(
  "WAWebQuickReplyBusinessProfileUtils",
  ["WAWebBusinessProfileCollection", "WAWebUserPrefsMeUser"],
  function (t, n, r, o, a, i, l) {
    function e() {
      if (o("WAWebUserPrefsMeUser").isMeUserRestored()) {
        var e = o(
          "WAWebBusinessProfileCollection",
        ).BusinessProfileCollection.get(
          o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
        );
        if ((e == null ? void 0 : e.dataSource) === "server") return e;
        for (var t of [
          o("WAWebUserPrefsMeUser").getMaybeMeLidUser(),
          o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
        ])
          if (t != null) {
            var n = o(
              "WAWebBusinessProfileCollection",
            ).BusinessProfileCollection.get(t);
            if ((n == null ? void 0 : n.dataSource) === "server") return n;
          }
        return e;
      }
    }
    l.getOwnQuickReplyBusinessProfile = e;
  },
  98,
);
