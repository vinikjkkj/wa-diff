__d(
  "RSTIndexedDB",
  [
    "FBLogger",
    "Promise",
    "RSTConfig",
    "RSTCrypt",
    "RSTEvents",
    "RSTEventsMessageQueue",
    "RSTUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    try {
      s = self.indexedDB;
    } catch (e) {}
    var u = (function () {
      function t() {}
      var a = t.prototype;
      return (
        (a.initDB = function () {
          var t = this;
          if (this.$1 != null)
            return (e || (e = n("Promise"))).resolve(this.$1);
          if (this.$2 != null) return this.$2;
          var r = this.$3().finally(function () {
            t.$2 === r && (t.$2 = null);
          });
          return ((this.$2 = r), r);
        }),
        (a.$3 = function () {
          var t = this;
          return new (e || (e = n("Promise")))(function (e, n) {
            if (s == null)
              return n("IndexedDB is not supported in this browser");
            var o = s.open(
              r("RSTConfig").INDEX_DB_NAME,
              r("RSTConfig").INDEX_DB_VERSION,
            );
            ((o.onupgradeneeded = function () {
              ((t.$1 = o.result),
                t.$4(),
                t.$5(),
                t.$6(r("RSTConfig").INDEX_DB_TABLE_NAME, !0));
            }),
              (o.onsuccess = function (n) {
                ((t.$1 = n.target.result), t.$5(), e(n.target.result));
              }),
              (o.onblocked = function () {
                n("Database open blocked by another tab");
              }),
              (o.onerror = function (e) {
                t.closeDBConnection();
                var r = o.error || e.target.error;
                n(
                  "Database error: " +
                    ((r == null ? void 0 : r.message) ||
                      String(r) ||
                      "Unknown error"),
                );
              }));
          });
        }),
        (a.$4 = function () {
          var e = this.$1;
          if (e != null)
            for (var t of r("RSTConfig").PAST_INDEX_DB_TABLE_NAMES)
              e.objectStoreNames.contains(t) && e.deleteObjectStore(t);
        }),
        (a.$5 = function () {
          var e = this,
            t = this.$1;
          t == null ||
            t.onversionchange != null ||
            (t.onversionchange = function () {
              try {
                t.close();
              } catch (e) {}
              e.$1 === t && (e.$1 = null);
            });
        }),
        (a.$6 = function (t, n) {
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
        (a.$7 = function (t) {
          return r("RSTConfig").ENCRYPT_DB
            ? r("RSTCrypt").encrypt(JSON.stringify(t))
            : t;
        }),
        (a.$8 = function (t) {
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
        (a.$9 = function (t) {
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
                .catching(r("getErrorSafe")(e))
                .warn("Failed to clear object store after IndexedDB error");
            }));
        }),
        (a.$10 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = [],
              n = 50;
            try {
              for (var r = 0; r < e.length; r += n) {
                var a = e.slice(r, r + n);
                for (var i of a) {
                  var l = this.$8(i);
                  l != null && t.push(l);
                }
                r + n < e.length && (yield o("RSTUtils").scheduleYield());
              }
            } catch (e) {
              this.$9(e);
            }
            return t;
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.$11 = function (t, n, r) {
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
        (a.$12 = function (t, n, r) {
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
        (a.closeDBConnection = function () {
          var e = this.$1;
          if (e != null) {
            try {
              e.close();
            } catch (e) {}
            this.$1 = null;
          }
        }),
        (a.persistLog = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = r("RSTConfig").MAX_INCIDENT_COUNT;
            (t != null && (yield this.countIncidentsInDB()) >= t) ||
              (yield this.persistEventToDB(e));
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.countIncidentsInDB = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t = this;
            return (
              yield this.initDB(),
              new (e || (e = n("Promise")))(function (e, n) {
                if (t.$1 == null) {
                  n("indexed db instance is not initialized yet");
                  return;
                }
                var o = t.$1.transaction(
                    [r("RSTConfig").INDEX_DB_TABLE_NAME],
                    "readonly",
                  ),
                  a = o.objectStore(r("RSTConfig").INDEX_DB_TABLE_NAME),
                  i = a.count();
                ((i.onsuccess = function () {
                  e(i.result);
                }),
                  t.$11(i, n, "countIncidentsInDB"),
                  t.$12(o, n, "countIncidentsInDB"));
              })
            );
          });
          function o() {
            return t.apply(this, arguments);
          }
          return o;
        })()),
        (a.persistEventToDB = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var a = this;
            yield this.initDB();
            var i = Date.now(),
              l = babelHelpers.extends({ loggingTime: i }, t);
            return (
              o("RSTEventsMessageQueue").notify(
                o("RSTEvents").RSTEvent.LOGGING_UNRESPONSIVENESS_TO_INDEXDB,
                { unresponsiveEventRecord: l },
              ),
              new (e || (e = n("Promise")))(function (e, t) {
                if (a.$1 == null) {
                  t("indexed db instance is not initialized yet");
                  return;
                }
                var n = a.$1.transaction(
                    [r("RSTConfig").INDEX_DB_TABLE_NAME],
                    "readwrite",
                  ),
                  o = n.objectStore(r("RSTConfig").INDEX_DB_TABLE_NAME),
                  i = o.add(a.$7(l));
                ((i.onsuccess = function () {
                  e();
                }),
                  a.$11(i, t, "persistEventToDB"),
                  a.$12(n, t, "persistEventToDB"));
              })
            );
          });
          function a(e) {
            return t.apply(this, arguments);
          }
          return a;
        })()),
        (a.readEventsFromDB = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t = this;
            yield this.initDB();
            var o = yield new (e || (e = n("Promise")))(function (e, n) {
              if (t.$1 == null) {
                n("indexed db instance is not initialized yet");
                return;
              }
              var o = t.$1.transaction(
                  [r("RSTConfig").INDEX_DB_TABLE_NAME],
                  "readonly",
                ),
                a = o.objectStore(r("RSTConfig").INDEX_DB_TABLE_NAME),
                i = a.getAll();
              ((i.onsuccess = function () {
                e(i.result);
              }),
                t.$11(i, n, "readEventsFromDB"),
                t.$12(o, n, "readEventsFromDB"));
            });
            return this.$10(o);
          });
          function o() {
            return t.apply(this, arguments);
          }
          return o;
        })()),
        (a.$13 = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (t, a) {
              var i = this;
              return (
                yield this.initDB(),
                new (e || (e = n("Promise")))(function (e, n) {
                  if (i.$1 == null) {
                    n("indexed db instance is not initialized yet");
                    return;
                  }
                  var l = i.$1.transaction(
                      [r("RSTConfig").INDEX_DB_TABLE_NAME],
                      "readwrite",
                    ),
                    s = l.objectStore(r("RSTConfig").INDEX_DB_TABLE_NAME),
                    u = s.openCursor();
                  ((u.onsuccess = function (n) {
                    var r = n.target.result;
                    if (r == null) {
                      (o("RSTUtils").debugLog(
                        "Finished " + a + " over incidents in indexDB",
                      ),
                        e());
                      return;
                    }
                    try {
                      var l = i.$8(r.value);
                      if (l == null)
                        (o("RSTUtils").debugLog(
                          "Unable to parse an incident, deleting it from indexDB",
                        ),
                          r.delete());
                      else {
                        var s = t(l);
                        s === "delete"
                          ? (o("RSTUtils").debugLog(
                              "Deleting incident " +
                                l.incidentID +
                                " from indexDB",
                            ),
                            r.delete())
                          : s === "update" &&
                            (o("RSTUtils").debugLog(
                              "Update incident " + l.incidentID + " in indexDB",
                            ),
                            r.update(i.$7(l)));
                      }
                    } catch (e) {
                      r.delete();
                    }
                    r.continue();
                  }),
                    i.$11(u, n, a),
                    i.$12(l, n, a));
                })
              );
            },
          );
          function a(e, n) {
            return t.apply(this, arguments);
          }
          return a;
        })()),
        (a.mutateIncidentsInDB = function (t) {
          return this.$13(t, "mutateIncidentsInDB");
        }),
        (a.updateIncidentInDB = function (t) {
          return this.$13(function (e) {
            return t(e) ? "update" : "keep";
          }, "updateIncidentInDB");
        }),
        (a.clearIncidentFromDB = function (t) {
          return this.$13(function (e) {
            return t.has(e.incidentID) ? "delete" : "keep";
          }, "clearIncidentFromDB");
        }),
        (a.clearObjectStore = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var a = this;
            return (
              t === void 0 && (t = r("RSTConfig").INDEX_DB_TABLE_NAME),
              yield this.initDB(),
              o("RSTUtils").debugLogImportant("clearing object store:", t),
              new (e || (e = n("Promise")))(function (e, n) {
                try {
                  var r = a.$1;
                  if (r == null) {
                    n("indexed db instance is not initialized yet");
                    return;
                  }
                  if (!r.objectStoreNames.contains(t)) {
                    e();
                    return;
                  }
                  var o = r.transaction([t], "readwrite"),
                    i = o.objectStore(t),
                    l = i.clear();
                  ((l.onsuccess = function () {
                    e();
                  }),
                    (l.onerror = function (e) {
                      (a.closeDBConnection(),
                        n("Error clearing the store: " + e.target.errorCode));
                    }),
                    a.$11(l, n, "clearObjectStore"),
                    a.$12(o, n, "clearObjectStore"));
                } catch (t) {
                  e();
                }
              })
            );
          });
          function a(e) {
            return t.apply(this, arguments);
          }
          return a;
        })()),
        (a.deleteEventFromDB = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var o = this;
            return (
              yield this.initDB(),
              new (e || (e = n("Promise")))(function (e, n) {
                if (o.$1 == null) {
                  n("indexed db instance is not initialized yet");
                  return;
                }
                var a = o.$1.transaction(
                    [r("RSTConfig").INDEX_DB_TABLE_NAME],
                    "readwrite",
                  ),
                  i = a.objectStore(r("RSTConfig").INDEX_DB_TABLE_NAME),
                  l = i.delete(t);
                ((l.onsuccess = function () {
                  e();
                }),
                  o.$11(l, n, "deleteEventFromDB"),
                  o.$12(a, n, "deleteEventFromDB"));
              })
            );
          });
          function o(e) {
            return t.apply(this, arguments);
          }
          return o;
        })()),
        t
      );
    })();
    l.RSTIndexedDB = u;
  },
  98,
);
