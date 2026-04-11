__d(
  "WAWebMmsClientPollMediaHosts",
  [
    "Promise",
    "WAPromiseDelays",
    "WARetryPromise",
    "WAWebMediaHostsMaybeSwitchHost",
    "WAWebMmsMediaTypes",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 3e5;
    function u(e, t) {
      return (
        e === o("WAWebMmsMediaTypes").MEDIA_TYPES.DOCUMENT &&
        t > o("WAWebMediaHostsMaybeSwitchHost").THRESHOLD
      );
    }
    function c(e, t) {
      return (
        e === o("WAWebMmsMediaTypes").MEDIA_TYPES.DOCUMENT &&
        (t != null ? t : 0) > o("WAWebMediaHostsMaybeSwitchHost").THRESHOLD
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.connectionBlock;
          return (
            yield o("WAPromiseDelays").delayMs(s, t.signal),
            r("WARetryPromise")(function (r) {
              var i = r.retry;
              return new (e || (e = n("Promise")))(function (e) {
                return t.getMediaHosts().then(function (n) {
                  var r = n.fallbackHost,
                    l = n.selectedHost,
                    u = { selectedHost: l, fallbackHost: r },
                    c = t.getRemainingBytes();
                  if (c == null) return i(s);
                  var d = o("WAWebMediaHostsMaybeSwitchHost").maybeSwitchHost(
                      t.getHost(),
                      a,
                      u,
                      c,
                    ),
                    m = d.changed,
                    p = d.host;
                  return ((a = u), m ? e(p) : i(s));
                });
              });
            }, t.signal)
          );
        })),
        m.apply(this, arguments)
      );
    }
    ((l.SERVER_POLLING_INTERVAL = s),
      (l.shouldPollUploadHosts = u),
      (l.shouldPollDownloadHosts = c),
      (l.pollMediaHosts = d));
  },
  98,
);
