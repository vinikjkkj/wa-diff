__d(
  "WAWebCommsExperimental",
  ["WADeprecatedSendIq", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e = new Map();
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = t.attrs.id,
            a = e.get(r);
          if (a != null) return a;
          var i = o("WADeprecatedSendIq").deprecatedSendIq(t, n);
          e.set(r, i);
          var l = yield i;
          return (e.set(r, l), l);
        })),
        u.apply(this, arguments)
      );
    }
    l.sendSuspensefulIq = s;
  },
  98,
);
