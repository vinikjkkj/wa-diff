__d(
  "AdsBaseCombinedIDNameStore",
  ["AdsDataAtom", "FluxDerivedStore", "LoadObject", "abstractMethod"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (t) {
        function n() {
          return t.call(this, e || (e = r("AdsDataAtom"))) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var o = n.prototype;
        return (
          (o.$AdsBaseCombinedIDNameStore$p_1 = function (n) {
            var e = this,
              r = t.prototype.getAll.call(this, n),
              o = new Map();
            return (
              r.forEach(function (t, n) {
                var r = e.$AdsBaseCombinedIDNameStore$p_2(n),
                  a = r.parentID;
                o.set(a, t);
              }),
              o
            );
          }),
          (o.__getAllCached = function (t) {
            return r("abstractMethod")(
              "__getAllCached",
              "AdsBaseCombinedIDNameStore",
            );
          }),
          (o.__getLiveList = function (t, n, o) {
            return r("abstractMethod")(
              "__getLiveList",
              "AdsBaseCombinedIDNameStore",
            );
          }),
          (o.__getNameForDraftChildID = function (t) {
            return r("abstractMethod")(
              "__getNameForDraftChildID",
              "AdsBaseCombinedIDNameStore",
            );
          }),
          (o.__getAllDraftIDsForAccount = function (t) {
            return r("abstractMethod")(
              "__getAllDraftIDsForAccount",
              "AdsBaseCombinedIDNameStore",
            );
          }),
          (o.__getParentIDForDraftChild = function (t, n) {
            return r("abstractMethod")(
              "__getParentIDForDraftChild",
              "AdsBaseCombinedIDNameStore",
            );
          }),
          (o.__isNewParentID = function (t) {
            return r("abstractMethod")(
              "__isNewParentID",
              "AdsBaseCombinedIDNameStore",
            );
          }),
          (o.__startLoadingDataFor = function (t, n, r) {}),
          (o.__getFor = function (t, n, r) {
            return this.get(this.$AdsBaseCombinedIDNameStore$p_3(t, n, r));
          }),
          (o.__getForAll = function (t, n, r) {
            var e = this,
              o = r.map(function (r) {
                return e.$AdsBaseCombinedIDNameStore$p_3(t, n, r);
              });
            return (
              this.__startLoadingDataFor(t, n, r),
              this.$AdsBaseCombinedIDNameStore$p_1(o)
            );
          }),
          (o.__computeResult = function (t, n) {
            var e = this,
              o = n.allDraftChildIDs,
              a = n.liveIDNameList,
              l = n.parentID,
              s = n.parentType,
              u = o.filter(function (t) {
                return e.__getParentIDForDraftChild(t, s) === l;
              });
            if (this.__isNewParentID(l) && u.size === 0)
              return r("LoadObject").withValue([], { creatorModuleID: i.id });
            if (u.size === 0) return a;
            var c = a.getValue(),
              d = u.toArray().map(function (t) {
                return { id: t, name: e.__getNameForDraftChildID(t) };
              });
            if (!c)
              return r("LoadObject").withValue(d, { creatorModuleID: i.id });
            var m = d.concat(c).reduce(function (e, t) {
              var n;
              return t.id in e
                ? e
                : babelHelpers.extends({}, e, ((n = {}), (n[t.id] = t), n));
            }, {});
            return r("LoadObject").withValue(
              Object.keys(m).map(function (e) {
                return m[e];
              }),
              { creatorModuleID: i.id },
            );
          }),
          (o.__getData = function (t) {
            var e = this.$AdsBaseCombinedIDNameStore$p_2(t),
              n = e.accountID,
              r = e.parentID,
              o = e.parentType,
              a = this.__getAllDraftIDsForAccount(n),
              i = this.__getLiveList(n, o, r);
            return {
              allDraftChildIDs: a,
              liveIDNameList: i,
              parentID: r,
              parentType: o,
            };
          }),
          (o.__areEqual = function (t, n) {
            return !1;
          }),
          (o.$AdsBaseCombinedIDNameStore$p_3 = function (t, n, r) {
            return [t, n, r].join(":");
          }),
          (o.$AdsBaseCombinedIDNameStore$p_2 = function (t) {
            var e = t.split(":"),
              n = e[0],
              r = e[1],
              o = e[2],
              a = r;
            return { accountID: n, parentType: a, parentID: o };
          }),
          n
        );
      })(r("FluxDerivedStore"));
    ((s.__moduleID = i.id), (l.default = s));
  },
  98,
);
