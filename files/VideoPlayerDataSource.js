__d(
  "VideoPlayerDataSource",
  ["react", "removeFromArray", "useForceUpdate"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState;
    function d(e) {
      var t,
        n = r("useForceUpdate")(),
        o = c((t = e == null ? void 0 : e.value) != null ? t : null),
        a = o[0],
        i = o[1];
      return (
        u(
          function () {
            var t = e == null ? void 0 : e.onChangeHandlers;
            if (t) {
              var o = function () {
                var t;
                (i((t = e == null ? void 0 : e.value) != null ? t : null), n());
              };
              return (
                t.push(o),
                e == null ||
                  e.notifyChangeHandlersChanged == null ||
                  e.notifyChangeHandlersChanged(),
                function () {
                  (r("removeFromArray")(t, o),
                    e == null ||
                      e.notifyChangeHandlersChanged == null ||
                      e.notifyChangeHandlersChanged());
                }
              );
            }
          },
          [n, e],
        ),
        a
      );
    }
    function m(e, t) {
      return { notifyChangeHandlersChanged: t, onChangeHandlers: [], value: e };
    }
    function p(e) {
      var t = e.onChangeHandlers;
      t.forEach(function (e) {
        e();
      });
    }
    ((l.useDataSourceSubscriptionState = d),
      (l.createDataSource = m),
      (l.notifyAllDataSourceHandlers = p));
  },
  98,
);
