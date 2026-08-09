__d(
  "ReStoreDbClosedError",
  ["ClientConsistencyEventEmitter", "MAWCurrentUser"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "ReStore DB closed",
      s = (function (t) {
        function n(n) {
          var a,
            i = n != null ? n : e;
          switch (
            ((a = t.call(this, i) || this),
            (a.message = i),
            Number(o("MAWCurrentUser").getAppID()))
          ) {
            case 772021112871879:
              r("ClientConsistencyEventEmitter").emit(
                "hardRefresh",
                "restore_db_closed",
              );
              break;
            default:
              r("ClientConsistencyEventEmitter").emit(
                "softRefresh",
                "restore_db_closed",
              );
          }
          return a;
        }
        return (babelHelpers.inheritsLoose(n, t), n);
      })(babelHelpers.wrapNativeSuper(Error));
    l.default = s;
  },
  98,
);
