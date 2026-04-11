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
          return new (e || (e = n("Promise")))(function (e, n) {
            if (s == null)
              return n("IndexedDB is not supported in this browser");
            if (t.$1 != null) return e(t.$1);
            var o = s.open(
              r("RSTConfig").INDEX_DB_NAME,
              r("RSTConfig").INDEX_DB_VERSION,
            );
            ((o.onupgradeneeded = function (e) {
              ((t.$1 = e.target.result),
                t.$2(),
                t.$3(),
                t.$4(r("RSTConfig").INDEX_DB_TABLE_NAME, !0));
            }),
              (o.onsuccess = function (n) {
                ((t.$1 = n.target.result), t.$3(), e(n.target.result));
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
        (a.$2 = function () {
          var e = this.$1;
          if (e != null)
            for (var t of r("RSTConfig").PAST_INDEX_DB_TABLE_NAMES)
              e.objectStoreNames.contains(t) && e.deleteObjectStore(t);
        }),
        (a.$3 = function () {
          var e = this;
          this.$1 == null ||
            this.$1.onversionchange != null ||
            (this.$1.onversionchange = function () {
              e.closeDBConnection();
            });
        }),
        (a.$4 = function (t, n) {
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
        (a.$5 = function (t) {
          return r("RSTConfig").ENCRYPT_DB
            ? r("RSTCrypt").encrypt(JSON.stringify(t))
            : t;
        }),
        (a.$6 = function (t) {
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
        (a.$7 = function (t) {
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
        (a.$8 = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var r = [],
              o = 50;
            try {
              for (var a = 0; a < t.length; a += o) {
                var i = t.slice(a, a + o);
                for (var l of i) {
                  var s = this.$6(l);
                  s != null && r.push(s);
                }
                a + o < t.length &&
                  (yield new (e || (e = n("Promise")))(function (e) {
                    return window.setTimeout(e, 0);
                  }));
              }
            } catch (e) {
              this.$7(e);
            }
            return r;
          });
          function r(e) {
            return t.apply(this, arguments);
          }
          return r;
        })()),
        (a.$9 = function (t, n, r) {
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
        (a.$10 = function (t, n, r) {
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
            (yield this.initDB(), yield this.persistEventToDB(e));
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
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
                  i = o.add(a.$5(l));
                ((i.onsuccess = function () {
                  e();
                }),
                  a.$9(i, t, "persistEventToDB"),
                  a.$10(n, t, "persistEventToDB"));
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
                t.$9(i, n, "readEventsFromDB"),
                t.$10(o, n, "readEventsFromDB"));
            });
            return this.$8(o);
          });
          function o() {
            return t.apply(this, arguments);
          }
          return o;
        })()),
        (a.updateIncidentInDB = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var a = this;
            return (
              yield this.initDB(),
              new (e || (e = n("Promise")))(function (e, n) {
                if (a.$1 == null) {
                  n("IndexedDB instance is not initialized yet");
                  return;
                }
                var i = a.$1.transaction(
                    [r("RSTConfig").INDEX_DB_TABLE_NAME],
                    "readwrite",
                  ),
                  l = i.objectStore(r("RSTConfig").INDEX_DB_TABLE_NAME),
                  s = l.openCursor();
                ((s.onsuccess = function (n) {
                  var r = n.target.result;
                  if (r == null) {
                    (o("RSTUtils").debugLog(
                      "Finished clearing incidents from indexDB",
                    ),
                      e());
                    return;
                  }
                  try {
                    var i = a.$6(r.value);
                    if (i == null) {
                      var l;
                      (o("RSTUtils").debugLog(
                        "Unable to parse, deleting incident " +
                          (((l = i == null ? void 0 : i.incidentID) != null
                            ? l
                            : "") +
                            " from indexDB"),
                      ),
                        r.delete());
                    } else {
                      var s = t(i);
                      if (s) {
                        var u;
                        (o("RSTUtils").debugLog(
                          "Update incident " +
                            ((u = r.value) == null ? void 0 : u.incidentID) +
                            " in indexDB",
                        ),
                          r.update(a.$5(i)));
                      }
                    }
                  } catch (e) {
                    r.delete();
                  }
                  r.continue();
                }),
                  a.$9(s, n, "updateIncidentInDB"),
                  a.$10(i, n, "updateIncidentInDB"));
              })
            );
          });
          function a(e) {
            return t.apply(this, arguments);
          }
          return a;
        })()),
        (a.clearIncidentFromDB = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var a = this;
            return (
              yield this.initDB(),
              new (e || (e = n("Promise")))(function (e, n) {
                if (a.$1 == null) {
                  n("indexed db instance is not initialized yet");
                  return;
                }
                var i = a.$1.transaction(
                    [r("RSTConfig").INDEX_DB_TABLE_NAME],
                    "readwrite",
                  ),
                  l = i.objectStore(r("RSTConfig").INDEX_DB_TABLE_NAME),
                  s = l.openCursor();
                ((s.onsuccess = function (n) {
                  var r = n.target.result;
                  if (r) {
                    try {
                      var i = a.$6(r.value);
                      if (
                        i == null ||
                        t.has(i == null ? void 0 : i.incidentID)
                      ) {
                        var l;
                        (o("RSTUtils").debugLog(
                          "Deleting incident " +
                            ((l = i == null ? void 0 : i.incidentID) != null
                              ? l
                              : "") +
                            " from indexDB",
                        ),
                          r.delete());
                      }
                    } catch (e) {
                      r.delete();
                    }
                    r.continue();
                  } else
                    (o("RSTUtils").debugLog(
                      "Finished clearing incidents from indexDB",
                    ),
                      e());
                }),
                  a.$9(s, n, "clearIncidentFromDB"),
                  a.$10(i, n, "clearIncidentFromDB"));
              })
            );
          });
          function a(e) {
            return t.apply(this, arguments);
          }
          return a;
        })()),
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
                    a.$9(l, n, "clearObjectStore"),
                    a.$10(o, n, "clearObjectStore"));
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
                  o.$9(l, n, "deleteEventFromDB"),
                  o.$10(a, n, "deleteEventFromDB"));
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
