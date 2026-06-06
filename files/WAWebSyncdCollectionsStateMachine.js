__d(
  "WAWebSyncdCollectionsStateMachine",
  [
    "WALogger",
    "WASyncdConst",
    "WATimeUtils",
    "WAWebGetCollectionVersion",
    "asyncToGeneratorRuntime",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (function () {
        function t() {}
        return (
          (t.loadStatesFromDb = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = this,
                t = yield o(
                  "WAWebGetCollectionVersion",
                ).getAllCollectionVersionsInTransaction();
              t.forEach(function (t) {
                return e.collectionStates.set(t.collection, {
                  collection: t.collection,
                  state: t.state,
                  finiteFailureStartTime: t.finiteFailureStartTime,
                });
              });
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.persistToDb = function () {
            var t = [];
            this.collectionStates.forEach(function (e) {
              return t.push(babelHelpers.extends({}, e));
            });
            var n = t.map(function (e) {
              var t =
                e.finiteFailureStartTime == null
                  ? ""
                  : "(failure start: " + e.finiteFailureStartTime + ")";
              return String(e.collection) + ": " + String(e.state) + " " + t;
            });
            return (
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: state machine persistToDb. states: ",
                    "",
                  ])),
                n,
              ),
              o(
                "WAWebGetCollectionVersion",
              ).bulkUpdateCollectionVersionInTransaction(t)
            );
          }),
          (t.clean = function () {
            this.collectionStates = new Map();
          }),
          (t.getCollectionState = function (t) {
            var e = this.collectionStates.get(t);
            return e
              ? e.state
              : (this.moveCollectionsToUpToDate([t]),
                o("WASyncdConst").CollectionSyncState.UpToDate);
          }),
          (t.getCollectionsInStateDirty = function () {
            var e = [];
            return (
              this.collectionStates.forEach(function (t) {
                t.state === o("WASyncdConst").CollectionSyncState.Dirty &&
                  e.push(t.collection);
              }),
              e
            );
          }),
          (t.getCollectionsInStateRetry = function () {
            var e = [];
            return (
              this.collectionStates.forEach(function (t) {
                t.state ===
                  o("WASyncdConst").CollectionSyncState.FailingFiniteRetry &&
                  e.push(t.collection);
              }),
              e
            );
          }),
          (t.getCollectionsInStateFatal = function () {
            var e = [];
            return (
              this.collectionStates.forEach(function (t) {
                t.state === o("WASyncdConst").CollectionSyncState.Fatal &&
                  e.push(t.collection);
              }),
              e
            );
          }),
          (t.getCollectionsInStateBlocked = function () {
            var e = [];
            return (
              this.collectionStates.forEach(function (t) {
                t.state === o("WASyncdConst").CollectionSyncState.Blocked &&
                  e.push(t.collection);
              }),
              e
            );
          }),
          (t.moveCollectionsToUpToDate = function (t) {
            var e = this;
            t.forEach(function (t) {
              return e.collectionStates.set(t, {
                collection: t,
                state: o("WASyncdConst").CollectionSyncState.UpToDate,
                finiteFailureStartTime: void 0,
              });
            });
          }),
          (t.moveCollectionsToDirty = function (t) {
            var e = this;
            t.forEach(function (t) {
              var n;
              return e.collectionStates.set(t, {
                collection: t,
                state: o("WASyncdConst").CollectionSyncState.Dirty,
                finiteFailureStartTime:
                  (n = e.collectionStates.get(t)) == null
                    ? void 0
                    : n.finiteFailureStartTime,
              });
            });
          }),
          (t.moveCollectionsToFiniteRetry = function (t) {
            var e = this;
            t.forEach(function (t) {
              var n, r;
              return e.collectionStates.set(t, {
                collection: t,
                state: o("WASyncdConst").CollectionSyncState.FailingFiniteRetry,
                finiteFailureStartTime:
                  (n =
                    (r = e.collectionStates.get(t)) == null
                      ? void 0
                      : r.finiteFailureStartTime) != null
                    ? n
                    : o("WATimeUtils").unixTimeMs(),
              });
            });
          }),
          (t.moveCollectionsToFatal = function (t) {
            var e = this;
            t.forEach(function (t) {
              return e.collectionStates.set(t, {
                collection: t,
                state: o("WASyncdConst").CollectionSyncState.Fatal,
              });
            });
          }),
          (t.moveCollectionsToBlocked = function (t) {
            var e = this;
            t.forEach(function (t) {
              var n;
              return e.collectionStates.set(t, {
                collection: t,
                state: o("WASyncdConst").CollectionSyncState.Blocked,
                finiteFailureStartTime:
                  (n = e.collectionStates.get(t)) == null
                    ? void 0
                    : n.finiteFailureStartTime,
              });
            });
          }),
          (t.getExpiredCollections = function () {
            var e = [],
              t = [],
              n = 0;
            return (
              this.collectionStates.forEach(function (r) {
                if (
                  r.state ===
                  o("WASyncdConst").CollectionSyncState.FailingFiniteRetry
                ) {
                  var a;
                  r.finiteFailureStartTime == null
                    ? ((a = 1 / 0), n++, t.length < 3 && t.push(r.collection))
                    : (a = r.finiteFailureStartTime);
                  var i = a + o("WASyncdConst").FINITE_FAILURE_EXPIRY_DURATION;
                  i < o("WATimeUtils").unixTimeMs() && e.push(r.collection);
                }
              }),
              n > 0 &&
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[syncd] ",
                      " finite retry w/o failureStartTime => ",
                      "",
                    ])),
                  n,
                  t,
                ),
              e
            );
          }),
          (t.getCollectionMinFailureTime = function () {
            var e = Array.from(this.collectionStates.values()).filter(
                function (e) {
                  return (
                    e.state ===
                    o("WASyncdConst").CollectionSyncState.FailingFiniteRetry
                  );
                },
              ),
              t = r("compactMap")(e, function (e) {
                return e.finiteFailureStartTime;
              });
            return t.length === 0 ? null : Math.min.apply(Math, t);
          }),
          t
        );
      })();
    ((u.collectionStates = new Map()), (l.default = u));
  },
  98,
);
