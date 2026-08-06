__d(
  "CometDevToolsCheatCodesInterop",
  ["CometDevToolsInteropUtils", "CurrentUser", "FBLogger", "SiteData"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = new URLSearchParams(window.location.search),
        t = Array.from(e.entries()),
        n = {};
      return (
        t.forEach(function (e) {
          var t = e[0],
            r = e[1];
          n[t] = r;
        }),
        n
      );
    }
    function s(e) {
      if (e === null) return null;
      var t = {};
      for (var n in e)
        e[n] === void 0 ||
        typeof e[n] == "string" ||
        typeof e[n] == "boolean" ||
        typeof e[n] == "number"
          ? (t[n] = e[n])
          : typeof e[n] == "object" && (t[n] = s(e[n]));
      return t;
    }
    function u() {
      return {
        __DEV__: 0,
        SiteData: s(n("SiteData")),
        currentUser: { id: r("CurrentUser").getID() },
      };
    }
    var c = "cheat_codes";
    function d(t) {
      (t.postMessage("current_cheats", e()),
        t.postMessage("current_site_info", u()),
        t.onMessage(function (n, a) {
          switch (n) {
            case "set_cheats": {
              if (typeof a != "object" || a == null) {
                r("FBLogger")("Comet Dev Tools: Cheats").mustfix(
                  "Invalid payload when setting a cheat",
                );
                return;
              }
              for (var i = Object.keys(a), l = {}, s = 0; s < i.length; s++) {
                var c = i[s],
                  d = a[c];
                if (typeof c == "string" && d === null) {
                  l[c] = null;
                  continue;
                }
                if (typeof c != "string" || typeof d != "string") {
                  r("FBLogger")("Comet Dev Tools: Cheats").mustfix(
                    "Invalid key or value when setting a cheat",
                  );
                  return;
                }
                l[c] = d;
              }
              o("CometDevToolsInteropUtils").reloadWithParams(l);
              break;
            }
            case "get_cheats":
              t.postMessage("current_cheats", e());
              break;
            case "get_site_info":
              t.postMessage("current_site_info", u());
              break;
            case "refresh": {
              location.reload(!0);
              break;
            }
            case "select_push_tier": {
              if (typeof a != "string" || a == null) {
                r("FBLogger")("Comet Dev Tools: Cheats").mustfix(
                  "Invalid payload when selecting a tier",
                );
                return;
              }
              o("CometDevToolsInteropUtils").selectPushTier(a);
              break;
            }
          }
        }));
    }
    var m = { namespace: c, onConnection: d };
    l.default = m;
  },
  98,
);
