__d(
  "CometDevToolsGKToolInterop",
  [
    "AsyncRequest",
    "CometDevToolsGKs",
    "CometDevToolsInteropUtils",
    "ConstUriUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "gk_tool";
    function s(e) {
      var t = null;
      e.onMessage(function (n, a) {
        switch (n) {
          case "get_gks": {
            e.postMessage("current_gks", o("CometDevToolsGKs").getGKs());
            break;
          }
          case "gk_spoof": {
            var i, l;
            if (!(a instanceof Object)) break;
            var s = a;
            (i = t) == null || i.abort();
            var u =
              (l = o("ConstUriUtils").getUri(
                "/intern/comet_dev_tools/gk/spoof",
              )) == null ||
              (l = l.addQueryParam("clear", s.clear)) == null ||
              (l = l.addQueryParam("read", s.read)) == null
                ? void 0
                : l.addQueryParam("spoof_user", s.spoof_user);
            if (!u) break;
            var c = new (r("AsyncRequest"))(u.toString())
              .setHandler(function (t) {
                return e.postMessage("gk_spoof_response", t.getPayload());
              })
              .setErrorHandler(function (t) {
                e.postMessage("gk_spoof_response", {
                  error:
                    t.getError() === 404
                      ? "GK Spoofing is not available. Please be sure to load this page from a sandbox that has access to /intern/comet_dev_tools/gk/spoof"
                      : t.getErrorDescription(),
                });
              });
            (c.send(), (t = c));
            break;
          }
          case "refresh": {
            location.reload(!0);
            break;
          }
          case "reload_in_dev_mode":
            o("CometDevToolsInteropUtils").reloadWithParams({
              mh_p_min: "no_min",
            });
        }
      });
    }
    var u = { namespace: e, onConnection: s };
    l.default = u;
  },
  98,
);
