__d(
  "WAWebGuestCoreEventLinkHandoff",
  ["WAWebABPropsConfigs", "WAWebABPropsParseConfigValue", "WAWebIndexedDB"],
  function (t, n, r, o, a, i, l) {
    var e = "model-storage",
      s = "abpropConfigs",
      u = "event";
    async function c(e) {
      return (await m())
        ? (window.history.replaceState(null, "", d(e)),
          window.location.reload(),
          !0)
        : !1;
    }
    function d(e) {
      var t = new URLSearchParams({ cmd: u, token: e });
      return "/?" + t.toString();
    }
    async function m() {
      var t = r("WAWebIndexedDB"),
        n = await (t == null || t.databases == null ? void 0 : t.databases());
      return t == null ||
        n == null ||
        !n.some(function (t) {
          return t.name === e;
        })
        ? !1
        : p(t);
    }
    function p(t) {
      return new Promise(function (n) {
        var r = t.open(e);
        ((r.onerror = function () {
          return n(!1);
        }),
          (r.onsuccess = function () {
            var e = r.result;
            try {
              var t = e
                .transaction(s)
                .objectStore(s)
                .get(
                  String(
                    o("WAWebABPropsConfigs").ABPropConfigs
                      .enable_events_v2_on_companion[0],
                  ),
                );
              ((t.onsuccess = function () {
                return n(_(t.result));
              }),
                (t.onerror = function () {
                  return n(!1);
                }));
            } catch (e) {
              n(!1);
            } finally {
              e.close();
            }
          }));
      });
    }
    function _(e) {
      var t = e != null && typeof e == "object" ? e.configValue : null;
      return (
        o("WAWebABPropsParseConfigValue").parseConfigValue(
          typeof t == "string" ? t : null,
          o("WAWebABPropsConfigs").ABPropConfigs
            .enable_events_v2_on_companion[1],
          o("WAWebABPropsConfigs").ABPropConfigs
            .enable_events_v2_on_companion[2],
        ) === !0
      );
    }
    ((l.WA_WEB_EVENT_LINK_CMD = u),
      (l.maybeOpenEventLinkInWaWeb = c),
      (l.getWaWebEventLinkPath = d),
      (l.doesWaWebOpenEventLinks = m));
  },
  98,
);
