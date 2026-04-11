__d(
  "WAWebSafariTakeover",
  ["WALogger", "WAWebSWBus", "WAWebSWBusActions", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = !1;
    function u() {
      s = !0;
    }
    function c() {
      return s;
    }
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = navigator.serviceWorker;
          if (t != null && t.controller)
            try {
              var n = yield r("WAWebSWBus").request(
                t.controller,
                r("WAWebSWBusActions").ACTIVE_TAB,
              );
              return n.some(function (e) {
                return e.isActive === !0;
              });
            } catch (t) {
              return (
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "error: ",
                        "",
                      ])),
                    t,
                  )
                  .sendLogs("ACTIVE_TAB service worker call failed"),
                !1
              );
            }
          return !1;
        })),
        m.apply(this, arguments)
      );
    }
    ((l.setTabActive = u), (l.getIsTabActive = c), (l.isAnotherTabActive = d));
  },
  98,
);
