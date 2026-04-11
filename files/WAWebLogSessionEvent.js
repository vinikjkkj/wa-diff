__d(
  "WAWebLogSessionEvent",
  ["WAWebContactUsSessionWamEvent"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r = new (o("WAWebContactUsSessionWamEvent").ContactUsSessionWamEvent)(
        {
          contactUsExitState: e,
          contactUsT: Math.ceil(self.performance.now() - t),
        },
      );
      (n &&
        ((r.contactUsAutomaticEmail = !0),
        (r.contactUsScreenshotC = n.numScreenshots)),
        r.commit());
    }
    l.logSessionEvent = e;
  },
  98,
);
