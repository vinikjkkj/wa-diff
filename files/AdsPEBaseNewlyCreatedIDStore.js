__d(
  "AdsPEBaseNewlyCreatedIDStore",
  [
    "AdsAccountStore",
    "AdsDataAtom",
    "AdsPEFilterUIStateSelectors",
    "DateConsts",
    "DateTime",
    "FluxReduceStore",
    "immutable",
    "isFalsey",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(
        r("immutable").Record({
          newlyCreatedIDs: r("immutable").Set(),
          cutoffTime: r("DateTime").localNow(),
        }),
      ),
      u = (function (t) {
        function n(n) {
          var a;
          return (
            (a = t.call(this, e || (e = r("AdsDataAtom"))) || this),
            (a.$AdsPEBaseNewlyCreatedIDStore$p_1 = n.level),
            (a.$AdsPEBaseNewlyCreatedIDStore$p_2 = n.draftFragmentStore),
            (a.$AdsPEBaseNewlyCreatedIDStore$p_3 = n.sortLiveStore),
            (a.$AdsPEBaseNewlyCreatedIDStore$p_4 = [
              r("AdsAccountStore"),
            ].concat(
              o("AdsPEFilterUIStateSelectors").getFilterSet.getStores(),
              [
                a.$AdsPEBaseNewlyCreatedIDStore$p_2,
                a.$AdsPEBaseNewlyCreatedIDStore$p_3,
              ],
            )),
            a
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getInitialState = function () {
            return new s({
              newlyCreatedIDs: r("immutable").Set(),
              cutoffTime: r("DateTime").now(
                r("AdsAccountStore").getTimezoneID(),
              ),
            });
          }),
          (a.reduce = function (n, a) {
            var t = this;
            (e || (e = r("AdsDataAtom"))).waitFor(this.__getDispatchTokens());
            var i = r("AdsAccountStore").getSelectedAccountID();
            return r("isFalsey")(i)
              ? n
              : this.__shouldUpdateNewlyCreatedIDs(n)
                ? n.withMutations(function (e) {
                    var n = t.$AdsPEBaseNewlyCreatedIDStore$p_2.getNewIDsFor(i);
                    n.forEach(function (n) {
                      var a =
                        t.$AdsPEBaseNewlyCreatedIDStore$p_2.getTimeCreated(n);
                      if (r("isTruthy")(a)) {
                        var i = new (r("DateTime"))(
                          Date.parse(a) / o("DateConsts").MS_PER_SEC,
                          r("AdsAccountStore").getTimezoneID(),
                        );
                        i.isAfter(e.cutoffTime) &&
                          e.set("newlyCreatedIDs", e.newlyCreatedIDs.add(n));
                      }
                    });
                  })
                : n.newlyCreatedIDs.size > 0 &&
                    this.__shouldClearNewlyCreatedIDs()
                  ? n.withMutations(function (e) {
                      (e.set("newlyCreatedIDs", r("immutable").Set()),
                        e.set(
                          "cutoffTime",
                          r("DateTime").now(
                            r("AdsAccountStore").getTimezoneID(),
                          ),
                        ));
                    })
                  : n;
          }),
          (a.__getDispatchTokens = function () {
            return this.$AdsPEBaseNewlyCreatedIDStore$p_4.map(function (e) {
              return e && e.getDispatchToken();
            });
          }),
          (a.__shouldUpdateNewlyCreatedIDs = function (t) {
            return (
              r("AdsAccountStore").hasChanged() ||
              this.$AdsPEBaseNewlyCreatedIDStore$p_2.hasChanged()
            );
          }),
          (a.__shouldClearNewlyCreatedIDs = function () {
            var e = [].concat(
              o("AdsPEFilterUIStateSelectors").getFilterSet.getStores(),
            );
            return (
              this.$AdsPEBaseNewlyCreatedIDStore$p_3.hasChanged() ||
              e.filter(function (e) {
                return e && e.hasChanged();
              }).length > 0
            );
          }),
          (a.getNewlyCreatedIDs = function () {
            return this.getState().newlyCreatedIDs;
          }),
          n
        );
      })(r("FluxReduceStore"));
    ((u.__moduleID = i.id), (l.default = u));
  },
  98,
);
