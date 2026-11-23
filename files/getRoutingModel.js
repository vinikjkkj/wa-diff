__d(
  "getRoutingModel",
  ["invariant", "WAFlowsUtils"],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t, n, r, o) {
      var a = {};
      switch (e) {
        case 100:
        case 101:
        case 110:
          (t.routing_model || s(0, 73006), (a = t.routing_model));
          break;
        case 120:
        case 200:
        case 201:
        case 202:
        case 299:
        case 300:
        case 301:
        case 302:
        case 400:
        case 401:
        case 500:
        case 501:
        case 502:
        case 600:
        case 601:
        case 602:
        case 603:
        case 700:
        case 701:
        case 702:
        case 703:
        case 704:
          t.routing_model != null ? (a = t.routing_model) : (a = u(n, r, o));
          break;
      }
      return (
        t.screens.forEach(function (e) {
          var t = e.id;
          a[t] || (a[t] = []);
        }),
        a
      );
    }
    function u(e, t, n) {
      return c(e, t, n);
    }
    function c(e, t, n) {
      var r = e.navigate,
        a = {};
      if (n) {
        var i = o("WAFlowsUtils").getNavigationListScreens(t);
        t.forEach(function (e) {
          if (i.includes(e.id)) {
            var n = t.filter(function (t) {
              return t.id !== e.id;
            });
            n.length > 0 &&
              (a[e.id] = n.map(function (e) {
                return e.id;
              }));
          }
        });
      }
      var l = r.reduce(function (e, t) {
        var n = t.action,
          r = t.screen_id;
        if ((e[r] == null && (e[r] = []), n.next.type === "screen")) {
          var o = n.next.name;
          e[r].push(o);
        }
        return e;
      }, {});
      return babelHelpers.extends({}, l, a);
    }
    l.default = e;
  },
  98,
);
