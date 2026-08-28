__d(
  "hyperionFlowlet",
  [
    "Promise",
    "hyperionCore",
    "hyperionDOM",
    "hyperionFlowletCore",
    "hyperionTestAndSet",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = new (o("hyperionTestAndSet").TestAndSet)();
    function m(t) {
      if (d.testAndSet()) return;
      function r(e) {
        var t;
        return (t = (s || (s = o("hyperionFlowletCore"))).getTriggerFlowlet(
          e,
        )) != null
          ? t
          : (s || (s = o("hyperionFlowletCore"))).getTriggerFlowlet(
              e == null ? void 0 : e.target,
            );
      }
      var a = function (n) {
        n.setter.onBeforeCallMapperAdd(function (e) {
          var o = e[0];
          return ((e[0] = t.wrap(o, n.name, r)), e);
        });
      };
      for (var i of [
        (u || (u = o("hyperionDOM"))).onabort,
        (u || (u = o("hyperionDOM"))).onerror,
        (u || (u = o("hyperionDOM"))).onload,
        (u || (u = o("hyperionDOM"))).onloadend,
        (u || (u = o("hyperionDOM"))).onloadstart,
        (u || (u = o("hyperionDOM"))).onprogress,
        (u || (u = o("hyperionDOM"))).readystatechange,
        (u || (u = o("hyperionDOM"))).ontimeout,
      ])
        a(i);
      ((u || (u = o("hyperionDOM"))).addEventListener.onBeforeCallMapperAdd(
        function (e) {
          return (
            (e[1] = t.wrap(
              e[1],
              (u || (u = o("hyperionDOM"))).addEventListener.name +
                "(" +
                e[0] +
                ")",
              r,
            )),
            e
          );
        },
      ),
        u.removeEventListener.onBeforeCallMapperAdd(function (e) {
          return ((e[1] = t.getWrappedOrOriginal(e[1])), e);
        }));
      var l = function (n) {
        n.onBeforeCallMapperAdd(function (e) {
          var r = e[0];
          return (
            typeof r == "string" && (r = new Function(r)),
            (e[0] = t.wrap(r, n.name)),
            e
          );
        });
      };
      for (var m of [
        (c || (c = o("hyperionCore"))).setTimeout,
        (c || (c = o("hyperionCore"))).setInterval,
      ])
        l(m);
      var p = function (n) {
        n.onBeforeCallMapperAdd(function (e) {
          var r = e[0];
          return ((e[0] = t.wrap(r, n.name)), e);
        });
      };
      for (var _ of [(u || (u = o("hyperionDOM"))).requestIdleCallback]) p(_);
      var f = function (n) {
        n.onBeforeCallMapperAdd(function (e) {
          var r = e[0];
          return ((e[0] = t.wrap(r, n.name)), e);
        });
      };
      for (var g of [(u || (u = o("hyperionDOM"))).requestAnimationFrame]) f(g);
      for (var h of [
        (c || (c = o("hyperionCore"))).constructor,
        (c || (c = o("hyperionCore"))).resolve,
        (c || (c = o("hyperionCore"))).reject,
      ])
        h.onAfterCallObserverAdd(function (e) {
          if (!(s || (s = o("hyperionFlowletCore"))).getTriggerFlowlet(e)) {
            var n,
              r = (n = t.top()) == null ? void 0 : n.data.triggerFlowlet;
            r && (s || (s = o("hyperionFlowletCore"))).setTriggerFlowlet(e, r);
          }
        });
      var y = 5,
        C = function (a) {
          a.onBeforeAndAfterCallMapperAdd(function (r) {
            var i = r[0];
            if (i.length === 1) {
              var l = i[0],
                u =
                  l instanceof (e || (e = n("Promise"))) &&
                  (s || (s = o("hyperionFlowletCore"))).getTriggerFlowlet(l);
              if (u)
                return function (e) {
                  return (
                    (s || (s = o("hyperionFlowletCore"))).setTriggerFlowlet(
                      e,
                      u,
                    ),
                    e
                  );
                };
            }
            return function (r) {
              var l,
                u,
                c =
                  (l = (s || (s = o("hyperionFlowletCore"))).getTriggerFlowlet(
                    r,
                  )) != null
                    ? l
                    : (u = t.top()) == null
                      ? void 0
                      : u.data.triggerFlowlet,
                d = new Set(),
                m = "";
              for (var p of i)
                if (p instanceof (e || (e = n("Promise")))) {
                  var _ = (
                    s || (s = o("hyperionFlowletCore"))
                  ).getTriggerFlowlet(p);
                  if (_ && (d.add(_), d.size >= y)) {
                    m = "...";
                    break;
                  }
                }
              if (d.size > 0) {
                var f = Array.from(d),
                  g =
                    "Promise." +
                    a.name +
                    "(" +
                    f
                      .map(function (e) {
                        return e.id;
                      })
                      .join("&") +
                    m +
                    ")",
                  h = new t.flowletCtor(g, c);
                (s || (s = o("hyperionFlowletCore"))).setTriggerFlowlet(r, h);
              } else
                c &&
                  (s || (s = o("hyperionFlowletCore"))).setTriggerFlowlet(r, c);
              return r;
            };
          });
        };
      for (var b of [
        (c || (c = o("hyperionCore"))).all,
        (c || (c = o("hyperionCore"))).allSettled,
        (c || (c = o("hyperionCore"))).any,
        (c || (c = o("hyperionCore"))).race,
      ])
        C(b);
      var v = "_PROMISE_TRIGGER_FLOWLET_GETTER";
      function S(e) {
        var t = (c || (c = o("hyperionCore"))).getVirtualPropertyValue(e, v);
        return (
          t ||
            ((t = function () {
              return (s || (s = o("hyperionFlowletCore"))).getTriggerFlowlet(e);
            }),
            (c || (c = o("hyperionCore"))).setVirtualPropertyValue(e, v, t)),
          t
        );
      }
      ((c || (c = o("hyperionCore"))).then.onBeforeAndAfterCallMapperAdd(
        function (e) {
          var n = this,
            r = S(this);
          return (
            (e[0] = t.wrap(e[0], (c || (c = o("hyperionCore"))).then.name, r)),
            (e[1] = t.wrap(e[1], c.then.name, r)),
            function (e) {
              if (e !== n) {
                var t = (s || (s = o("hyperionFlowletCore"))).getTriggerFlowlet(
                    n,
                  ),
                  r = s.getTriggerFlowlet(e);
                t &&
                  !r &&
                  (s || (s = o("hyperionFlowletCore"))).setTriggerFlowlet(e, t);
              }
              return e;
            }
          );
        },
      ),
        c.Catch.onBeforeAndAfterCallMapperAdd(function (e) {
          var n = this,
            r = S(this);
          return (
            (e[0] = t.wrap(e[0], (c || (c = o("hyperionCore"))).then.name, r)),
            function (e) {
              if (e !== n) {
                var t = (s || (s = o("hyperionFlowletCore"))).getTriggerFlowlet(
                    n,
                  ),
                  r = s.getTriggerFlowlet(e);
                t &&
                  !r &&
                  (s || (s = o("hyperionFlowletCore"))).setTriggerFlowlet(e, t);
              }
              return e;
            }
          );
        }));
    }
    l.initFlowletTrackers = m;
  },
  98,
);
