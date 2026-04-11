__d(
  "EmitterSubscription",
  ["EventSubscription"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t, n, r) {
        var o;
        return (
          (o = e.call(this, t) || this),
          (o.listener = n),
          (o.context = r),
          o
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(r("EventSubscription"));
    l.default = e;
  },
  98,
);
