__d(
  "NavigationMetricsWWW",
  [
    "Arbiter",
    "BigPipeInstance",
    "NavigationMetricsCore",
    "PageEvents",
    "performance",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "0";
    ((r("NavigationMetricsCore").getFullPageLoadLid = function () {
      return s;
    }),
      r("NavigationMetricsCore").siteInit(function (t) {
        var n = new t(),
          o = !0;
        (r("Arbiter").subscribe(
          r("BigPipeInstance").Events.init,
          function (e, a) {
            var i = o ? n : new t();
            (o && (s = a.lid), (o = !1), i.setServerLID(a.lid));
            var l = a.arbiter;
            (l.subscribe(r("BigPipeInstance").Events.tti, function (e, t) {
              var n = t.ts;
              i.setTTI(n);
            }),
              l.subscribe(r("PageEvents").AJAXPIPE_SEND, function (e, t) {
                var n = t.ts;
                i.setRequestStart(n);
              }),
              l.subscribe(r("PageEvents").AJAXPIPE_ONLOAD, function (e, t) {
                var n = t.ts;
                i.setE2E(n).doneNavigation();
              }),
              l.subscribe(
                r("BigPipeInstance").Events.displayed,
                function (e, t) {
                  var n = t.ts;
                  i.setDisplayDone(n);
                },
              ),
              l.subscribe(r("BigPipeInstance").Events.loaded, function (e, t) {
                var n = t.ts;
                i.setAllPageletsLoaded(n);
              }));
          },
        ),
          r("Arbiter").subscribe(
            r("PageEvents").BIGPIPE_ONLOAD,
            function (t, a) {
              var i = a.ts;
              ((o = !1),
                n
                  .setRequestStart(
                    (e || (e = r("performance"))).timing &&
                      (e || (e = r("performance"))).timing.navigationStart,
                  )
                  .setE2E(i)
                  .doneNavigation());
            },
          ));
      }),
      (l.default = r("NavigationMetricsCore")));
  },
  98,
);
