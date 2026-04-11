__d(
  "WAWebNavBarLogEvents",
  ["WAWebWebcNavbarWamEvent"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = new (o("WAWebWebcNavbarWamEvent").WebcNavbarWamEvent)({
        webcNavbarItemLabel: e,
      });
      t.commit();
    }
    l.logNavBarEvent = e;
  },
  98,
);
