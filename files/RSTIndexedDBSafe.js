__d(
  "RSTIndexedDBSafe",
  [
    "FBLogger",
    "RSTConfig",
    "RSTIndexedDB",
    "RSTUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("RSTUtils").isIndexedDBSupported(),
      s = (function (t) {
        function a() {
          for (var n, r = arguments.length, o = new Array(r), a = 0; a < r; a++)
            o[a] = arguments[a];
          return (
            (n = t.call.apply(t, [this].concat(o)) || this),
            (n.$RSTIndexedDBSafe$p_1 = !e),
            (n.$RSTIndexedDBSafe$p_2 = 0),
            (n.$RSTIndexedDBSafe$p_3 = [
              "The database connection is closing",
              "Can't start a transaction on a closed database",
              "A version change transaction is running",
            ]),
            babelHelpers.assertThisInitialized(n) ||
              babelHelpers.assertThisInitialized(n)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.guardDB = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                if (this.$RSTIndexedDBSafe$p_1) return t();
                try {
                  return yield e();
                } catch (e) {
                  (this.closeDBConnection(), e == null || e.stack);
                  var a = r("getErrorSafe")(e);
                  if ((a == null || a.stack, !this.$RSTIndexedDBSafe$p_4(a)))
                    try {
                      return t();
                    } catch (e) {}
                  if (
                    (this.$RSTIndexedDBSafe$p_2 <
                      r("RSTConfig").MAX_DB_FAILED_COUNT &&
                      this.$RSTIndexedDBSafe$p_2++,
                    this.$RSTIndexedDBSafe$p_2 >=
                      r("RSTConfig").MAX_DB_FAILED_COUNT)
                  ) {
                    this.$RSTIndexedDBSafe$p_1 = !0;
                    var i =
                      "Failed to " +
                      n +
                      " " +
                      this.$RSTIndexedDBSafe$p_2 +
                      " times disabling RST indexedDB";
                    (o("RSTUtils").debugLogImportant(i),
                      r("FBLogger")("responsive-tracker")
                        .catching(a)
                        .warn(i + ": %s", a.message));
                  }
                  return t();
                }
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.$RSTIndexedDBSafe$p_4 = function (t) {
            if (t == null) return !1;
            var e = typeof t == "string" ? t : t == null ? void 0 : t.message;
            return typeof e != "string"
              ? !0
              : !this.$RSTIndexedDBSafe$p_3.some(function (t) {
                  return e.includes(t);
                });
          }),
          (i.initDB = function () {
            var e = this;
            return this.guardDB(
              function () {
                return t.prototype.initDB.call(e);
              },
              function () {
                return null;
              },
              "initDB",
            );
          }),
          (i.persistLog = function (n) {
            var e = this;
            return this.guardDB(
              function () {
                return t.prototype.persistLog.call(e, n);
              },
              function () {},
              "persistLog",
            );
          }),
          (i.persistEventToDB = function (n) {
            var e = this;
            return this.guardDB(
              function () {
                return t.prototype.persistEventToDB.call(e, n);
              },
              function () {},
              "persistEventToDB",
            );
          }),
          (i.readEventsFromDB = function () {
            var e = this;
            return this.guardDB(
              function () {
                return t.prototype.readEventsFromDB.call(e);
              },
              function () {
                return [];
              },
              "readEventsFromDB",
            );
          }),
          (i.updateIncidentInDB = function (n) {
            var e = this;
            return this.guardDB(
              function () {
                return t.prototype.updateIncidentInDB.call(e, n);
              },
              function () {},
              "updateIncidentInDB",
            );
          }),
          (i.clearIncidentFromDB = function (n) {
            var e = this;
            return this.guardDB(
              function () {
                return t.prototype.clearIncidentFromDB.call(e, n);
              },
              function () {},
              "clearIncidentFromDB",
            );
          }),
          (i.clearObjectStore = function (n) {
            var e = this;
            return (
              n === void 0 && (n = r("RSTConfig").INDEX_DB_TABLE_NAME),
              this.guardDB(
                function () {
                  return t.prototype.clearObjectStore.call(e, n);
                },
                function () {},
                "clearObjectStore",
              )
            );
          }),
          (i.deleteEventFromDB = function (n) {
            var e = this;
            return this.guardDB(
              function () {
                return t.prototype.deleteEventFromDB.call(e, n);
              },
              function () {},
              "deleteEventFromDB",
            );
          }),
          (i.maybeClearObsoleteIncidents = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              try {
                var e = yield this.readEventsFromDB(),
                  t = new Set();
                (e.forEach(function (e) {
                  e != null &&
                    typeof e.incidentID == "string" &&
                    (typeof e.detectTime != "number" ||
                      Date.now() - e.detectTime >
                        (1 + Math.random()) *
                          r("RSTConfig")
                            .OBSOLETE_PENDING_INCIDENT_THRESHOLD_MS) &&
                    t.add(e.incidentID);
                }),
                  yield this.clearIncidentFromDB(t));
              } catch (e) {
                var n,
                  o = r("getErrorSafe")(e);
                r("FBLogger")("responsive-tracker")
                  .catching(o)
                  .warn(
                    (n = o.message) != null
                      ? n
                      : "Failed to clear obsolete incidents",
                  );
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          a
        );
      })(o("RSTIndexedDB").RSTIndexedDB),
      u = new s(),
      c = u;
    l.default = c;
  },
  98,
);
