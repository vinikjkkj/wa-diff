__d(
  "AdsUEditorAdgroupCreateReducer",
  [
    "invariant",
    "AdsDataAtom",
    "AdsSelectorUtils",
    "AdsUEditorHostIDs",
    "VultureJSDeadSelector",
    "adsCreateStructuredSelector",
    "adsMemoizeWithArgs",
    "createObjectBy",
    "ifRequired",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g = r("adsMemoizeWithArgs")(
        function (e, t) {
          var n = t === r("AdsUEditorHostIDs").CREATION ? d : _;
          return n != null
            ? new n(
                r("VultureJSDeadSelector")(
                  i.id,
                  "getContextWithActionIDs_selector",
                ),
              )
            : null;
        },
        function (e) {
          return e.join(",");
        },
        i.id + ".getContextWithActionIDs",
      );
    function h(t, n) {
      var a = r("createObjectBy")(n, function (e) {
        return e.type;
      });
      return function (n, l) {
        var h = a[l.action.type],
          y = l.action.hostID;
        if (!h) return n;
        (t.includes(y) || s(0, 2899, y),
          r("ifRequired")("AdsCFAdgroupEditorContext", function (e) {
            return (c = e);
          }),
          r("ifRequired")("AdsCFAdgroupContext", function (e) {
            return (d = e);
          }),
          r("ifRequired")("AdsCFAdgroupDataProvider", function (e) {
            return (m = e && e.toFluxStore());
          }),
          r("ifRequired")("AdsEditingAdgroupEditorContext", function (e) {
            return (p = e);
          }),
          r("ifRequired")("AdsEditingAdgroupContext", function (e) {
            return (_ = e);
          }),
          r("ifRequired")("AdsAdgroupCombinedStore", function (e) {
            return (f = e);
          }));
        var C = y === r("AdsUEditorHostIDs").CREATION ? c : p,
          b = y === r("AdsUEditorHostIDs").CREATION ? m : f,
          v,
          S = h.fluxInputs;
        if (S) {
          var R = r("adsCreateStructuredSelector")(S, i.id + ".selector"),
            L = g(l.action.adgroupIDs || [], y),
            E = L != null ? L : C,
            k = b != null ? b.getDispatchToken() : void 0,
            I = (u || (u = o("AdsSelectorUtils")))
              .getStoreDispatchTokens([R], E)
              .filter(function (e) {
                return e !== k;
              });
          ((e || (e = r("AdsDataAtom"))).waitFor(I), (v = R(C)));
        }
        return h.mutate(l.action, n, v);
      };
    }
    l.default = h;
  },
  98,
);
