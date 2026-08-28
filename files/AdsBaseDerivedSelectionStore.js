__d(
  "AdsBaseDerivedSelectionStore",
  [
    "invariant",
    "AdsLoadObjectUtils",
    "AdsObjectTypeUtils",
    "AdsSelectionUtils",
    "FluxDerivedStore",
    "abstractMethod",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = [],
      u = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.__getStores = function () {
            return r("abstractMethod")(
              "AdsBaseDerivedSelectionStore",
              "__getStores",
            );
          }),
          (a.__getCurrentSection = function () {
            return r("abstractMethod")(
              "AdsBaseDerivedSelectionStore",
              "__getCurrentSection",
            );
          }),
          (a.__getCurrentAdObjectLevel = function () {
            return r("abstractMethod")(
              "AdsBaseDerivedSelectionStore",
              "__getCurrentAdObjectLevel",
            );
          }),
          (a.__getSelectedIDs = function (t) {
            return r("abstractMethod")(
              "AdsBaseDerivedSelectionStore",
              "__getSelectedIDs",
            );
          }),
          (a.__getSelectedObjects = function (t, n) {
            return r("abstractMethod")(
              "AdsBaseDerivedSelectionStore",
              "__getSelectedObjects",
            );
          }),
          (a.__getData = function (t) {
            var e = this.__getCurrentSection(),
              n = o("AdsObjectTypeUtils").getObjectLevelFromAdLevel(t);
            if (!e || !c.has(e) || n == null) return null;
            var r = this.__getCurrentAdObjectLevel(),
              a = o("AdsSelectionUtils").currentLevelToAncestorIDFields.get(r);
            a || s(0, 164080);
            var i = a.ancestorIDFields,
              l = this.__getSelectedIDs(e),
              u = i.get(n),
              d = null,
              m;
            return (
              u &&
                ((m = this.__getSelectedObjects(e, l)),
                (d = !o("AdsLoadObjectUtils").anyLoadingOrEmpty(m.values()))),
              {
                allLoaded: d,
                currentAdObjectLevel: r,
                selectedObjectLoaderByID: m,
                currentLevelSelectedIDs: l,
                ancestorIDField: u,
              }
            );
          }),
          (a.__computeResult = function (n, r) {
            if (!r) return e;
            var t = r.ancestorIDField,
              a = r.currentAdObjectLevel,
              i = r.currentLevelSelectedIDs,
              l = r.selectedObjectLoaderByID,
              u = o("AdsObjectTypeUtils").getObjectLevelFromAdLevel(n);
            if (a === u) return i;
            if (t) {
              if (l && l.isEmpty()) return e;
              l || s(0, 3590);
              var c = new Set();
              for (var d of i) {
                var m = l.get(d),
                  p = m ? m.getValue() : null,
                  _ = p != null && typeof p == "object" ? p[t] : null;
                typeof _ == "string" && _ !== "" && c.add(_);
              }
              return Array.from(c);
            }
            return e;
          }),
          (a.__areEqual = function (t, n) {
            return !t || !n
              ? t == n
              : t.allLoaded === n.allLoaded &&
                  t.currentLevelSelectedIDs === n.currentLevelSelectedIDs;
          }),
          n
        );
      })(r("FluxDerivedStore"));
    u.__moduleID = i.id;
    var c = r("immutable").Set([
      "L1",
      "L2",
      "L3",
      "PACKAGE_AD_CREATION",
      "CAMPAIGN_OVERVIEW",
    ]);
    l.default = u;
  },
  98,
);
