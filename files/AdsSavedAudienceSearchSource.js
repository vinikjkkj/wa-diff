__d(
  "AdsSavedAudienceSearchSource",
  [
    "AbstractSearchSource",
    "AdsTargetingSavedAudienceDataLoader",
    "SearchableEntry",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {},
      s = function (t) {
        var e = t.id,
          n = t.name;
        return new (r("SearchableEntry"))({
          uniqueID: e,
          title: n,
          auxiliaryData: t,
        });
      },
      u = (function (t) {
        function n(n) {
          var r;
          return ((r = t.call(this) || this), (r.accountID = n), e[n], r);
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.searchImpl = function (t, n) {
            r("promiseDone")(
              o(
                "AdsTargetingSavedAudienceDataLoader",
              ).searchSavedAudiencesForAccount(this.accountID, t),
              function (e) {
                var r = e.data.map(s);
                n(r, t);
              },
            );
          }),
          (a.bootstrapEntries = function (t) {
            this.search("", t);
          }),
          (n.getInstance = function (r) {
            return (e[r] || (e[r] = new n(r)), e[r]);
          }),
          n
        );
      })(r("AbstractSearchSource"));
    l.default = u;
  },
  98,
);
