__d(
  "createLWIBizWebMAIBANativeHandoffActions",
  ["MAIBAR21Utils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var r = e.getOpenDuplicateAdDialog,
        a = r == null ? void 0 : r(t),
        i = function () {
          var e;
          return (
            o("MAIBAR21Utils").isMAIBAR21MBSEnabled("MBS") &&
            ((e = n == null ? void 0 : n.isCurrent()) != null ? e : !0)
          );
        };
      return {
        openDuplicate:
          a == null
            ? null
            : function (e, t, r, o, l) {
                if (i()) {
                  if (n == null) {
                    a(e, t, r, o);
                    return;
                  }
                  n.isCurrent() &&
                    a(e, t, r, o, void 0, l, void 0, {
                      adAccountID: l,
                      boostID: e,
                      isCurrent: i,
                      onOpened: n.onOpened,
                    });
                }
              },
        openEditor: null,
      };
    }
    l.default = e;
  },
  98,
);
