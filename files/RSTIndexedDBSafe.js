__d(
  "RSTIndexedDBSafe",
  ["FBLogger", "RSTConfig", "RSTIndexedDB", "RSTUtils", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("RSTUtils").isIndexedDBSupported(),
      s = (function (t) {
        function n() {
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
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.guardDB = async function (t, n, a) {
            if (this.$RSTIndexedDBSafe$p_1) return n();
            try {
              return await t();
            } catch (t) {
              (this.closeDBConnection(), t == null || t.stack);
              var e = r("getErrorSafe")(t);
              if ((e == null || e.stack, !this.$RSTIndexedDBSafe$p_4(e)))
                try {
                  return n();
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
                  a +
                  " " +
                  this.$RSTIndexedDBSafe$p_2 +
                  " times disabling RST indexedDB";
                (o("RSTUtils").debugLogImportant(i),
                  r("FBLogger")("responsive-tracker")
                    .catching(e)
                    .warn(i + ": %s", e.message));
              }
              return n();
            }
          }),
          (a.$RSTIndexedDBSafe$p_4 = function (t) {
            if (t == null) return !1;
            var e = typeof t == "string" ? t : t == null ? void 0 : t.message;
            return typeof e != "string"
              ? !0
              : !this.$RSTIndexedDBSafe$p_3.some(function (t) {
                  return e.includes(t);
                });
          }),
          (a.initDB = function () {
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
          (a.persistLog = function (n) {
            var e = this;
            return this.guardDB(
              function () {
                return t.prototype.persistLog.call(e, n);
              },
              function () {},
              "persistLog",
            );
          }),
          (a.persistEventToDB = function (n) {
            var e = this;
            return this.guardDB(
              function () {
                return t.prototype.persistEventToDB.call(e, n);
              },
              function () {},
              "persistEventToDB",
            );
          }),
          (a.readEventsFromDB = function () {
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
          (a.updateIncidentInDB = function (n) {
            var e = this;
            return this.guardDB(
              function () {
                return t.prototype.updateIncidentInDB.call(e, n);
              },
              function () {},
              "updateIncidentInDB",
            );
          }),
          (a.clearIncidentFromDB = function (n) {
            var e = this;
            return this.guardDB(
              function () {
                return t.prototype.clearIncidentFromDB.call(e, n);
              },
              function () {},
              "clearIncidentFromDB",
            );
          }),
          (a.clearObjectStore = function (n) {
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
          (a.deleteEventFromDB = function (n) {
            var e = this;
            return this.guardDB(
              function () {
                return t.prototype.deleteEventFromDB.call(e, n);
              },
              function () {},
              "deleteEventFromDB",
            );
          }),
          (a.maybeClearObsoleteIncidents = async function () {
            try {
              var e = await this.readEventsFromDB(),
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
                await this.clearIncidentFromDB(t));
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
          }),
          n
        );
      })(o("RSTIndexedDB").RSTIndexedDB),
      u = new s(),
      c = u;
    l.default = c;
  },
  98,
);
