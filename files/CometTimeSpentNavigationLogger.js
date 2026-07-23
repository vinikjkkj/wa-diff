__d(
  "CometTimeSpentNavigationLogger",
  [
    "Banzai",
    "CometTimeSpentBitArrayLogger",
    "CometTimeSpentNavigation",
    "ConstUriUtils",
    "Env",
    "WebSession",
    "WebTimeSpentNavigationFalcoEvent",
    "isInIframe",
    "performance",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = !1;
    function c(e) {
      r("WebTimeSpentNavigationFalcoEvent").logImmediately(function () {
        return {
          cause: e.cause,
          custom_data_json: JSON.stringify(e.extra_data),
          dest_path: e.dest_path,
          sid_raw: e.sid_raw,
          source_path: e.source_path,
        };
      });
    }
    function d(t, n, a) {
      if (
        (o("WebSession").extend(),
        !(!u || r("isInIframe")()) &&
          !(
            (t == null ? void 0 : t.should_remove_navigation) === !0 &&
            (n == null ? void 0 : n.should_remove_navigation) === !0
          ))
      ) {
        var i = { cause: a, extra_data: {}, sid_raw: o("WebSession").getId() };
        (t &&
          ((t == null ? void 0 : t.should_remove_navigation) === !0
            ? ((i.source_path = null), (i.cause = "load"))
            : ((i.source_path = t.name),
              Object.entries(t.extraData).forEach(function (e) {
                var t = e[0],
                  n = e[1];
                return (i.extra_data["source_" + t] = n);
              }))),
          n &&
            ((n == null ? void 0 : n.should_remove_navigation) === !0
              ? ((i.dest_path = null), (i.cause = "unload"))
              : ((i.dest_path = n.name),
                Object.entries(n.extraData).forEach(function (e) {
                  var t = e[0],
                    n = e[1];
                  return (i.extra_data["dest_" + t] = n);
                }))),
          (e || (e = r("Env"))).isCometOnMobile === !0 &&
            (i.extra_data.comet_on_mobile = "1"),
          c(i));
      }
    }
    function m() {
      var e,
        t = r("CometTimeSpentNavigation").getPathInfo();
      if (t) {
        var n = babelHelpers.extends({}, t, {
          extraData: babelHelpers.extends({}, t.extraData, {
            navigation_type: f(),
            referrer: document.referrer,
            subdomain:
              (e = o("ConstUriUtils").getUri(document.location.href)) == null
                ? void 0
                : e.subdomain,
          }),
        });
        d(r("CometTimeSpentNavigation").getSourcePathInfo(), n, "load");
      }
    }
    function p() {
      (d(r("CometTimeSpentNavigation").getPathInfo(), null, "unload"),
        (u = !1));
    }
    function _(e, t) {
      d(e, t, "transition");
    }
    function f() {
      if (
        (s || (s = r("performance"))).navigation == null ||
        (s || (s = r("performance"))).navigation.type == null
      )
        return "UNSUPPORTED";
      switch ((s || (s = r("performance"))).navigation.type) {
        case (s || (s = r("performance"))).navigation.TYPE_NAVIGATE:
          return "NAVIGATE";
        case (s || (s = r("performance"))).navigation.TYPE_RELOAD:
          return "RELOAD";
        case (s || (s = r("performance"))).navigation.TYPE_BACK_FORWARD:
          return "BACK_FORWARD";
        case (s || (s = r("performance"))).navigation.TYPE_RESERVED:
          return "RESERVED";
        default:
          return "UNKNOWN";
      }
    }
    function g(e) {
      var t = e.sourcePathInfo,
        n = e.destPathInfo;
      !u ||
        !t ||
        !n ||
        (o("CometTimeSpentBitArrayLogger").changeEndpoint(
          n == null ? void 0 : n.name,
        ),
        _(t, n));
    }
    function h(e, t, n) {
      (t === void 0 && (t = null),
        (u = !0),
        r("CometTimeSpentNavigation").changePath(e, n, t),
        m(),
        r("CometTimeSpentNavigation").listenToPathChange(g),
        r("Banzai").subscribe(r("Banzai").SHUTDOWN, p));
    }
    l.init = h;
  },
  98,
);
