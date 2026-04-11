__d(
  "WAWebStatusViewerFollowNewsletterButton.react",
  [
    "fbt",
    "WAWebFollowNewsletter",
    "WAWebNewsletterCollection",
    "WAWebNewsletterMembershipUtil",
    "WAWebStateUtils",
    "WAWebWamEnumChannelEventSurface",
    "WAWebWamEnumTsSurface",
    "WDSButton.react",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useState;
    function p(e) {
      var t = e.statusId,
        a = r("WAWebNewsletterCollection").get(t),
        i = o("useWAWebModelValues").useOptionalModelValues(
          a == null ? void 0 : a.newsletterMetadata,
          ["membershipType"],
        ),
        l = m(!1),
        c = l[0],
        p = l[1],
        _ = d(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (a != null) {
              p(!0);
              try {
                yield o("WAWebFollowNewsletter").followNewsletter(
                  o("WAWebStateUtils").unproxy(a),
                  {
                    eventSurface: o("WAWebWamEnumChannelEventSurface")
                      .CHANNEL_EVENT_SURFACE.CHANNEL_UPDATES_HOME,
                    discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE
                      .STATUS_VIEW,
                  },
                );
              } finally {
                p(!1);
              }
            }
          }),
          [a],
        );
      return a == null || !o("WAWebNewsletterMembershipUtil").iAmGuest(i)
        ? null
        : u.jsx(r("WDSButton.react"), {
            variant: "outline",
            type: "media",
            size: "medium",
            onPress: function () {
              return void _();
            },
            loading: c,
            testid: void 0,
            label: s._(/*BTDS*/ "Follow channel"),
          });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
