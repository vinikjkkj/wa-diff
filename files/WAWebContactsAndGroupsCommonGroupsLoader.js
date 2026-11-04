__d(
  "WAWebContactsAndGroupsCommonGroupsLoader",
  [
    "Promise",
    "WALogger",
    "WAWebApiContact",
    "WAWebFindCommonGroupsContactAction",
    "WAWebNoop",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 5e3,
      c = new Set(),
      d = !1,
      m = new WeakSet(),
      p = new Map();
    function _(e) {
      var t;
      return (
        p.set(e, ((t = p.get(e)) != null ? t : 0) + 1),
        g(e),
        function () {
          return f(e);
        }
      );
    }
    function f(e) {
      var t,
        n = ((t = p.get(e)) != null ? t : 0) - 1;
      if (n > 0) {
        p.set(e, n);
        return;
      }
      (p.delete(e), c.delete(e));
    }
    function g(e) {
      var t = e.commonGroups;
      (t != null && !t.stale) ||
        (c.add(e),
        d || ((d = !0), (s || (s = n("Promise"))).resolve().then(h)));
    }
    function h() {
      d = !1;
      var t = Array.from(c);
      return (
        (c = new Set()),
        t.length === 0
          ? (s || (s = n("Promise"))).resolve()
          : (s || (s = n("Promise")))
              .all(
                y(t).map(function (t) {
                  return o("WAWebFindCommonGroupsContactAction")
                    .findCommonGroupsForContacts(t)
                    .then(
                      function () {
                        return t.forEach(function (e) {
                          return m.delete(e);
                        });
                      },
                      function (n) {
                        (o("WALogger")
                          .WARN(
                            e ||
                              (e = babelHelpers.taggedTemplateLiteralLoose([
                                "requestCommonGroups: reading the groups in common failed",
                              ])),
                          )
                          .catching(r("getErrorSafe")(n)),
                          b(t));
                      },
                    );
                }),
              )
              .then(r("WAWebNoop"))
      );
    }
    function y(e) {
      var t = [],
        n = function () {
          var e = C(r),
            n = t.find(function (t) {
              return e.every(function (e) {
                return !t.ids.has(e);
              });
            });
          (n == null && ((n = { contacts: [], ids: new Set() }), t.push(n)),
            n.contacts.push(r));
          for (var o of e) n.ids.add(o);
        };
      for (var r of e) n();
      return t.map(function (e) {
        return e.contacts;
      });
    }
    function C(e) {
      var t = e.id;
      if (!t.isUser()) return [t.toString()];
      var n = o("WAWebApiContact").getAlternateUserWid(
        o("WAWebWidFactory").asUserWidOrThrow(t),
      );
      return n == null ? [t.toString()] : [t.toString(), n.toString()];
    }
    function b(e) {
      var t = e.filter(function (e) {
        return !m.has(e);
      });
      (e.forEach(function (e) {
        return m.delete(e);
      }),
        t.length !== 0 &&
          (t.forEach(function (e) {
            return m.add(e);
          }),
          self.setTimeout(function () {
            t.filter(function (e) {
              return p.has(e);
            }).forEach(g);
          }, u)));
    }
    l.requestCommonGroups = _;
  },
  98,
);
