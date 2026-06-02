__d(
  "RSTIndexedDB",
  [
    "FBLogger",
    "RSTConfig",
    "RSTCrypt",
    "RSTEvents",
    "RSTEventsMessageQueue",
    "RSTUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    try {
      e = self.indexedDB;
    } catch (e) {}
    var s = (function () {
      function t() {}
      var n = t.prototype;
      return (
        (n.initDB = function () {
          var t = this;
          return new Promise(function (n, o) {
            if (e == null)
              return o("IndexedDB is not supported in this browser");
            if (t.$1 != null) return n(t.$1);
            var a = e.open(
              r("RSTConfig").INDEX_DB_NAME,
              r("RSTConfig").INDEX_DB_VERSION,
            );
            ((a.onupgradeneeded = function (e) {
              ((t.$1 = e.target.result),
                t.$2(),
                t.$3(),
                t.$4(r("RSTConfig").INDEX_DB_TABLE_NAME, !0));
            }),
              (a.onsuccess = function (e) {
                ((t.$1 = e.target.result), t.$3(), n(e.target.result));
              }),
              (a.onblocked = function () {
                o("Database open blocked by another tab");
              }),
              (a.onerror = function (e) {
                t.closeDBConnection();
                var n = a.error || e.target.error;
                o(
                  "Database error: " +
                    ((n == null ? void 0 : n.message) ||
                      String(n) ||
                      "Unknown error"),
                );
              }));
          });
        }),
        (n.$2 = function () {
          var e = this.$1;
          if (e != null)
            for (var t of r("RSTConfig").PAST_INDEX_DB_TABLE_NAMES)
              e.objectStoreNames.contains(t) && e.deleteObjectStore(t);
        }),
        (n.$3 = function () {
          var e = this;
          this.$1 == null ||
            this.$1.onversionchange != null ||
            (this.$1.onversionchange = function () {
              e.closeDBConnection();
            });
        }),
        (n.$4 = function (t, n) {
          n === void 0 && (n = !1);
          var e = this.$1;
          if (!(e == null || e.objectStoreNames.contains(t))) {
            if (e.objectStoreNames.contains(t)) {
              if (!n) return;
              e.deleteObjectStore(t);
            }
            e.createObjectStore(t, { autoIncrement: !0 });
          }
        }),
        (n.$5 = function (t) {
          return r("RSTConfig").ENCRYPT_DB
            ? r("RSTCrypt").encrypt(JSON.stringify(t))
            : t;
        }),
        (n.$6 = function (t) {
          if (t == null) return null;
          var e = !1,
            n = null;
          if (typeof t == "string") {
            var o = r("RSTCrypt").decryptEnforce(t);
            ((n = JSON.parse(o.result)), (e = o.exception));
          } else n = t;
          if (typeof n != "object" || n == null || n.incidentID == null)
            throw r("FBLogger")("responsive-tracker").mustfixThrow(
              "data parsing error",
            );
          var a = n;
          return ((a.hasDecryptionError = e), a);
        }),
        (n.$7 = function (t) {
          (t === void 0 && (t = null),
            this.closeDBConnection(),
            o("RSTUtils").debugLogImportant(
              "indexedDB error, clearing the object store",
            ),
            r("FBLogger")("responsive-tracker")
              .catching(t)
              .warn(
                "Failed to operate on IndexedDB, clearing the object store",
              ),
            this.clearObjectStore().catch(function (e) {
              r("FBLogger")("responsive-tracker")
                .catching(e)
                .warn("Failed to clear object store after IndexedDB error");
            }));
        }),
        (n.$8 = async function (t) {
          var e = [],
            n = 50;
          try {
            for (var r = 0; r < t.length; r += n) {
              var o = t.slice(r, r + n);
              for (var a of o) {
                var i = this.$6(a);
                i != null && e.push(i);
              }
              r + n < t.length &&
                (await new Promise(function (e) {
                  return window.setTimeout(e, 0);
                }));
            }
          } catch (e) {
            this.$7(e);
          }
          return e;
        }),
        (n.$9 = function (t, n, r) {
          var e = this;
          t.onerror = function (t) {
            var a, i;
            e.closeDBConnection();
            var l =
                (a =
                  t == null || (i = t.target) == null ? void 0 : i.errorCode) !=
                null
                  ? a
                  : "",
              s = "Failed to handle " + r + " request in IndexedDB." + l;
            (o("RSTUtils").debugLogImportant(s), n(s));
          };
        }),
        (n.$10 = function (t, n, r) {
          var e = this;
          t.onerror = function (t) {
            var a, i;
            e.closeDBConnection();
            var l =
                (a =
                  t == null || (i = t.target) == null ? void 0 : i.errorCode) !=
                null
                  ? a
                  : "",
              s = "Failed to handle " + r + " transaction in IndexedDB." + l;
            (o("RSTUtils").debugLogImportant(s), n(s));
          };
        }),
        (n.closeDBConnection = function () {
          var e = this.$1;
          if (e != null) {
            try {
              e.close();
            } catch (e) {}
            this.$1 = null;
          }
        }),
        (n.persistLog = async function (t) {
          (await this.initDB(), await this.persistEventToDB(t));
        }),
        (n.persistEventToDB = async function (t) {
          var e = this;
          await this.initDB();
          var n = Date.now(),
            a = babelHelpers.extends({ loggingTime: n }, t);
          return (
            o("RSTEventsMessageQueue").notify(
              o("RSTEvents").RSTEvent.LOGGING_UNRESPONSIVENESS_TO_INDEXDB,
              { unresponsiveEventRecord: a },
            ),
            new Promise(function (t, n) {
              if (e.$1 == null) {
                n("indexed db instance is not initialized yet");
                return;
              }
              var o = e.$1.transaction(
                  [r("RSTConfig").INDEX_DB_TABLE_NAME],
                  "readwrite",
                ),
                i = o.objectStore(r("RSTConfig").INDEX_DB_TABLE_NAME),
                l = i.add(e.$5(a));
              ((l.onsuccess = function () {
                t();
              }),
                e.$9(l, n, "persistEventToDB"),
                e.$10(o, n, "persistEventToDB"));
            })
          );
        }),
        (n.readEventsFromDB = async function () {
          var e = this;
          await this.initDB();
          var t = await new Promise(function (t, n) {
            if (e.$1 == null) {
              n("indexed db instance is not initialized yet");
              return;
            }
            var o = e.$1.transaction(
                [r("RSTConfig").INDEX_DB_TABLE_NAME],
                "readonly",
              ),
              a = o.objectStore(r("RSTConfig").INDEX_DB_TABLE_NAME),
              i = a.getAll();
            ((i.onsuccess = function () {
              t(i.result);
            }),
              e.$9(i, n, "readEventsFromDB"),
              e.$10(o, n, "readEventsFromDB"));
          });
          return this.$8(t);
        }),
        (n.updateIncidentInDB = async function (t) {
          var e = this;
          return (
            await this.initDB(),
            new Promise(function (n, a) {
              if (e.$1 == null) {
                a("IndexedDB instance is not initialized yet");
                return;
              }
              var i = e.$1.transaction(
                  [r("RSTConfig").INDEX_DB_TABLE_NAME],
                  "readwrite",
                ),
                l = i.objectStore(r("RSTConfig").INDEX_DB_TABLE_NAME),
                s = l.openCursor();
              ((s.onsuccess = function (r) {
                var a = r.target.result;
                if (a == null) {
                  (o("RSTUtils").debugLog(
                    "Finished clearing incidents from indexDB",
                  ),
                    n());
                  return;
                }
                try {
                  var i = e.$6(a.value);
                  if (i == null) {
                    var l;
                    (o("RSTUtils").debugLog(
                      "Unable to parse, deleting incident " +
                        (((l = i == null ? void 0 : i.incidentID) != null
                          ? l
                          : "") +
                          " from indexDB"),
                    ),
                      a.delete());
                  } else {
                    var s = t(i);
                    if (s) {
                      var u;
                      (o("RSTUtils").debugLog(
                        "Update incident " +
                          ((u = a.value) == null ? void 0 : u.incidentID) +
                          " in indexDB",
                      ),
                        a.update(e.$5(i)));
                    }
                  }
                } catch (e) {
                  a.delete();
                }
                a.continue();
              }),
                e.$9(s, a, "updateIncidentInDB"),
                e.$10(i, a, "updateIncidentInDB"));
            })
          );
        }),
        (n.clearIncidentFromDB = async function (t) {
          var e = this;
          return (
            await this.initDB(),
            new Promise(function (n, a) {
              if (e.$1 == null) {
                a("indexed db instance is not initialized yet");
                return;
              }
              var i = e.$1.transaction(
                  [r("RSTConfig").INDEX_DB_TABLE_NAME],
                  "readwrite",
                ),
                l = i.objectStore(r("RSTConfig").INDEX_DB_TABLE_NAME),
                s = l.openCursor();
              ((s.onsuccess = function (r) {
                var a = r.target.result;
                if (a) {
                  try {
                    var i = e.$6(a.value);
                    if (i == null || t.has(i == null ? void 0 : i.incidentID)) {
                      var l;
                      (o("RSTUtils").debugLog(
                        "Deleting incident " +
                          ((l = i == null ? void 0 : i.incidentID) != null
                            ? l
                            : "") +
                          " from indexDB",
                      ),
                        a.delete());
                    }
                  } catch (e) {
                    a.delete();
                  }
                  a.continue();
                } else
                  (o("RSTUtils").debugLog(
                    "Finished clearing incidents from indexDB",
                  ),
                    n());
              }),
                e.$9(s, a, "clearIncidentFromDB"),
                e.$10(i, a, "clearIncidentFromDB"));
            })
          );
        }),
        (n.clearObjectStore = async function (t) {
          var e = this;
          return (
            t === void 0 && (t = r("RSTConfig").INDEX_DB_TABLE_NAME),
            await this.initDB(),
            o("RSTUtils").debugLogImportant("clearing object store:", t),
            new Promise(function (n, r) {
              try {
                var o = e.$1;
                if (o == null) {
                  r("indexed db instance is not initialized yet");
                  return;
                }
                if (!o.objectStoreNames.contains(t)) {
                  n();
                  return;
                }
                var a = o.transaction([t], "readwrite"),
                  i = a.objectStore(t),
                  l = i.clear();
                ((l.onsuccess = function () {
                  n();
                }),
                  (l.onerror = function (t) {
                    (e.closeDBConnection(),
                      r("Error clearing the store: " + t.target.errorCode));
                  }),
                  e.$9(l, r, "clearObjectStore"),
                  e.$10(a, r, "clearObjectStore"));
              } catch (e) {
                n();
              }
            })
          );
        }),
        (n.deleteEventFromDB = async function (t) {
          var e = this;
          return (
            await this.initDB(),
            new Promise(function (n, o) {
              if (e.$1 == null) {
                o("indexed db instance is not initialized yet");
                return;
              }
              var a = e.$1.transaction(
                  [r("RSTConfig").INDEX_DB_TABLE_NAME],
                  "readwrite",
                ),
                i = a.objectStore(r("RSTConfig").INDEX_DB_TABLE_NAME),
                l = i.delete(t);
              ((l.onsuccess = function () {
                n();
              }),
                e.$9(l, o, "deleteEventFromDB"),
                e.$10(a, o, "deleteEventFromDB"));
            })
          );
        }),
        t
      );
    })();
    l.RSTIndexedDB = s;
  },
  98,
);
