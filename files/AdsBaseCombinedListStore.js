__d(
  "AdsBaseCombinedListStore",
  [
    "AdsBaseListStore_LEGACY",
    "AdsDataAtom",
    "FluxDerivedStore",
    "abstractMethod",
    "shallowArrayEqual",
  ],
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
          (o.$AdsBaseCombinedListStore$p_1 = function (n) {
            var e = this,
              r = t.prototype.getAll.call(this, n),
              o = new Map();
            return (
              r.forEach(function (t, n) {
                var r = e.$AdsBaseCombinedListStore$p_2(n),
                  a = r.parentID;
                o.set(a, t);
              }),
              o
            );
          }),
          (o.getLoadingList = function () {
            return r("AdsBaseListStore_LEGACY").getLoadingList();
          }),
          (o.__getAllCached = function (t) {
            return r("abstractMethod")(
              "__getAllCached",
              "AdsBaseCombinedListStore",
            );
          }),
          (o.__getLiveList = function (t, n, o) {
            return r("abstractMethod")(
              "__getLiveList",
              "AdsBaseCombinedListStore",
            );
          }),
          (o.__getAllDraftIDsForAccount = function (t) {
            return r("abstractMethod")(
              "__getAllDraftIDsForAccount",
              "AdsBaseCombinedListStore",
            );
          }),
          (o.__getParentIDForDraftChild = function (t, n) {
            return r("abstractMethod")(
              "__getParentIDForDraftChild",
              "AdsBaseCombinedListStore",
            );
          }),
          (o.__startLoadingDataFor = function (t, n, r) {}),
          (o.__getFor = function (t, n, r) {
            return this.get(this.$AdsBaseCombinedListStore$p_3(t, n, r));
          }),
          (o.__getForAll = function (t, n, r) {
            var e = this,
              o = r.map(function (r) {
                return e.$AdsBaseCombinedListStore$p_3(t, n, r);
              });
            return (
              this.__startLoadingDataFor(t, n, r),
              this.$AdsBaseCombinedListStore$p_1(o)
            );
          }),
          (o.__computeResult = function (t, n) {
            return n;
          }),
          (o.__getData = function (t) {
            var e = this,
              n = this.$AdsBaseCombinedListStore$p_2(t),
              r = n.accountID,
              o = n.parentID,
              a = n.parentType,
              i = this.__getAllDraftIDsForAccount(r),
              l = this.__getLiveList(r, a, o),
              s = i.filter(function (t) {
                return e.__getParentIDForDraftChild(t, a) === o;
              });
            if (s.size === 0) return l;
            var u = l.loadState,
              c = s.toArray().concat(l.list);
            return { loadState: u, list: c };
          }),
          (o.__areEqual = function (t, n) {
            return (
              t.loadState === n.loadState &&
              r("shallowArrayEqual")(t.list, n.list)
            );
          }),
          (o.$AdsBaseCombinedListStore$p_3 = function (t, n, r) {
            return [t, n, r].join(":");
          }),
          (o.$AdsBaseCombinedListStore$p_2 = function (t) {
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
