__d(
  "MAIBAChatSendInterceptorStore",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set();
    function l(t) {
      return (
        e.add(t),
        function () {
          e.delete(t);
        }
      );
    }
    function s(t) {
      for (var n of e)
        try {
          if (n(t)) return !0;
        } catch (e) {}
      return !1;
    }
    ((i.registerSendInterceptor = l), (i.runSendInterceptors = s));
  },
  66,
);
