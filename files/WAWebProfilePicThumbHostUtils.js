__d(
  "WAWebProfilePicThumbHostUtils",
  [
    "WALogger",
    "WAWebMediaHosts",
    "WAWebMediaHostsRouteSelection",
    "WAWebMmsClientSelectHost",
    "WAWebMmsMediaTypes",
    "WAWebProfilePicConstants",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t, n) {
      var r,
        o = (r = n == null ? void 0 : n.hostname) != null ? r : d(t);
      return "https://" + o + e;
    }
    function c(t, n, a) {
      try {
        var i = m(t),
          l = i.fallbackHost,
          s = i.selectedHost;
        return r("WAWebMmsClientSelectHost")({
          selectedHost: s,
          fallbackHost: l,
          attemptCount: n,
          lastHostUsed: a,
          lastFetchMadeProgress: n === 0,
        });
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "profile-pic host resolve failed, using fallback: ",
                  "",
                ])),
              t,
            )
            .tags("mms4"),
          null
        );
      }
    }
    function d(e) {
      try {
        return m(e).selectedHost.hostname;
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "profile-pic host resolve failed, using fallback: ",
                  "",
                ])),
              e,
            )
            .tags("mms4"),
          o("WAWebProfilePicConstants").DEFAULT_HOSTNAME
        );
      }
    }
    function m(e) {
      return o("WAWebMediaHosts").mediaHosts.getCachedHostsInfo({
        encFilehash: e,
        operation: o("WAWebMediaHostsRouteSelection").OPERATIONS.DOWNLOAD,
        type: o("WAWebMmsMediaTypes").MEDIA_TYPES.PPIC,
      });
    }
    ((l.buildMms4DownloadUrl = u), (l.selectMms4Host = c));
  },
  98,
);
