__d(
  "WAWebDrawerCoordination",
  ["WAWebDrawerManagerGlobalContext"],
  function (t, n, r, o, a, i, l) {
    var e = ["left", "right", "fullscreen"];
    function s(t, n) {
      if (e.includes(t) && n === "opened")
        if (t === "left" || t === "right") {
          var r;
          (r = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager(
            "fullscreen",
          )) == null || r.closeDrawer(null, { isConflictingDrawerOpening: !0 });
        } else {
          var a,
            i = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager(
              "left",
            );
          (i == null || i.closeDrawer(null, { isConflictingDrawerOpening: !0 }),
            (a = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager(
              "right",
            )) == null ||
              a.closeDrawer(null, { isConflictingDrawerOpening: !0 }));
        }
    }
    l.closeConflictingDrawer = s;
  },
  98,
);
