__d(
  "WAWebGuestCoreEventLinkHandoff",
  [
    "Promise",
    "WAWebABPropsConfigs",
    "WAWebABPropsParseConfigValue",
    "WAWebIndexedDB",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "model-storage",
      u = "abpropConfigs",
      c = "event";
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return (yield _())
            ? (window.history.replaceState(null, "", p(e)),
              window.location.reload(),
              !0)
            : !1;
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      var t = new URLSearchParams({ cmd: c, token: e });
      return "/?" + t.toString();
    }
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = r("WAWebIndexedDB"),
            t = yield e == null || e.databases == null ? void 0 : e.databases();
          return e == null ||
            t == null ||
            !t.some(function (e) {
              return e.name === s;
            })
            ? !1
            : g(e);
        })),
        f.apply(this, arguments)
      );
    }
    function g(t) {
      return new (e || (e = n("Promise")))(function (e) {
        var n = t.open(s);
        ((n.onerror = function () {
          return e(!1);
        }),
          (n.onsuccess = function () {
            var t = n.result;
            try {
              var r = t
                .transaction(u)
                .objectStore(u)
                .get(
                  String(
                    o("WAWebABPropsConfigs").ABPropConfigs
                      .enable_events_v2_on_companion[0],
                  ),
                );
              ((r.onsuccess = function () {
                return e(h(r.result));
              }),
                (r.onerror = function () {
                  return e(!1);
                }));
            } catch (t) {
              e(!1);
            } finally {
              t.close();
            }
          }));
      });
    }
    function h(e) {
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
    ((l.WA_WEB_EVENT_LINK_CMD = c),
      (l.maybeOpenEventLinkInWaWeb = d),
      (l.getWaWebEventLinkPath = p),
      (l.doesWaWebOpenEventLinks = _));
  },
  98,
);
