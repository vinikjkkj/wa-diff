__d(
  "WAWebMmsClientPollMediaHosts",
  [
    "WAPromiseDelays",
    "WARetryPromise",
    "WAWebMediaHostsMaybeSwitchHost",
    "WAWebMmsMediaTypes",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 3e5;
    function s(e, t) {
      return (
        e === o("WAWebMmsMediaTypes").MEDIA_TYPES.DOCUMENT &&
        t > o("WAWebMediaHostsMaybeSwitchHost").THRESHOLD
      );
    }
    function u(e, t) {
      return (
        e === o("WAWebMmsMediaTypes").MEDIA_TYPES.DOCUMENT &&
        (t != null ? t : 0) > o("WAWebMediaHostsMaybeSwitchHost").THRESHOLD
      );
    }
    async function c(t) {
      var n = t.connectionBlock;
      return (
        await o("WAPromiseDelays").delayMs(e, t.signal),
        r("WARetryPromise")(function (r) {
          var a = r.retry;
          return new Promise(function (r) {
            return t.getMediaHosts().then(function (i) {
              var l = i.fallbackHost,
                s = i.selectedHost,
                u = { selectedHost: s, fallbackHost: l },
                c = t.getRemainingBytes();
              if (c == null) return a(e);
              var d = o("WAWebMediaHostsMaybeSwitchHost").maybeSwitchHost(
                  t.getHost(),
                  n,
                  u,
                  c,
                ),
                m = d.changed,
                p = d.host;
              return ((n = u), m ? r(p) : a(e));
            });
          });
        }, t.signal)
      );
    }
    ((l.SERVER_POLLING_INTERVAL = e),
      (l.shouldPollUploadHosts = s),
      (l.shouldPollDownloadHosts = u),
      (l.pollMediaHosts = c));
  },
  98,
);
