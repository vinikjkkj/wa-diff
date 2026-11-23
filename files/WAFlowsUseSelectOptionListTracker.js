__d(
  "WAFlowsUseSelectOptionListTracker",
  ["WAFlowsComponentsCommon", "WAFlowsStateProvider.react", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect,
      d = s.useRef;
    function m(e) {
      var t = e.dataSource,
        n = e.hasUserInteracted,
        r = n === void 0 ? !0 : n,
        a = e.isDisabled,
        i = a === void 0 ? !1 : a,
        l = e.selectedValue,
        s = e.version,
        m = o("WAFlowsStateProvider.react").useWAFlowsState(),
        p = m.internal.screenHistory,
        _ = d(),
        f = u(
          function () {
            return o(
              "WAFlowsComponentsCommon",
            ).getExecuteOnSelectActionScreenChange(s);
          },
          [s],
        );
      c(
        function () {
          if (!i) {
            var e = [].concat(l),
              n = [].concat(_.current);
            (n.forEach(function (n) {
              if (!e.includes(n)) {
                var r = t.findIndex(function (e) {
                  var t = e.id;
                  return t === n;
                });
                if (r !== -1) {
                  var o = t[r];
                  o.onUnselect == null || o.onUnselect();
                }
              }
            }),
              e.forEach(function (e) {
                if (!n.includes(e)) {
                  var o = t.findIndex(function (t) {
                    var n = t.id;
                    return n === e;
                  });
                  if (o !== -1) {
                    var a = t[o];
                    (r || f()) && (a.onSelect == null || a.onSelect());
                  }
                }
              }),
              (_.current = l));
          }
        },
        [l, t, p, i, r, f],
      );
    }
    l.useSelectOptionListTracker = m;
  },
  98,
);
