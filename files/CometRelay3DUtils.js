__d(
  "CometRelay3DUtils",
  ["relay-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var r = e.lookup(
        o("relay-runtime").createOperationDescriptor(t, n).fragment,
      );
      return r.data;
    }
    function s(e, t, n, r) {
      var a = o("relay-runtime").getModuleOperationKey(t),
        i = o("relay-runtime").getModuleComponentKey(t);
      (e.setValue__UNSAFE(n, a), e.setValue__UNSAFE(r, i));
    }
    function u(e, t, n) {
      var r = o("relay-runtime").getModuleOperationKey(n),
        a = o("relay-runtime").getModuleComponentKey(n);
      (t.setValue__UNSAFE(e.getValue(r), r),
        t.setValue__UNSAFE(e.getValue(a), a));
    }
    ((l.lookupQuery = e), (l.setRelay3DValue = s), (l.copyRelay3DValue = u));
  },
  98,
);
