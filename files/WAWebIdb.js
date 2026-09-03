__d(
  "WAWebIdb",
  [
    "invariant",
    "Promise",
    "WALogger",
    "WAWeb-dexie",
    "WAWebAppTracker",
    "WAWebDexieCastTypes",
    "WAWebGlobals",
    "WAWebIdbEncryption",
    "WAWebIdbHelpers",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m = "Key already exists in the object store";
    ((r("WAWeb-dexie").Promise.PSD.onunhandled = function () {}),
      (r("WAWeb-dexie").Promise.PSD.txRelaxedDurabilityEnabled = !0));
    var p = (function () {
        function t(e, t, n, r, o, a, i) {
          ((this.errorHandlers = new Map()),
            (this.updateListener = null),
            (this.updateListenerField = null),
            (this.table = e),
            (this.view = n),
            (this.db = t),
            (this.propFilter = r),
            (this.tableColumns = o),
            (this.tableEncryptedColumns = new Map(
              Object.keys(a).map(function (e) {
                return [e, a[e]];
              }),
            )),
            (this.shouldUseDbMsgEncKeyForEncryptedCol =
              i.shouldUseDbMsgEncKeyForEncryptedCol),
            (this.packColumns = i.packColumns),
            (this.errorHandlers = i.errorHandlers || new Map()));
        }
        var a = t.prototype;
        return (
          (a.$1 = function (t, n, r) {
            o("WAWebIdbHelpers").logStorageError({
              error: t,
              operation: n,
              tableName: this.table.name,
            });
            var e = this.errorHandlers.get(t.name);
            if (e) {
              var a = { op: n, table: this.table.name, db: this.db.name };
              if ((r == null ? void 0 : r.writeData) != null) {
                var i = o("WAWebIdbHelpers").calculateWriteDataSize(
                  r.writeData,
                );
                (i > 0 && (a.writeSize = i),
                  Array.isArray(r.writeData) &&
                    (a.records = r.writeData.length));
              }
              e(t, a);
            }
          }),
          (a.asyncView = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                t === void 0 && (t = !0);
                var n = this.$2(e),
                  r = this.$3() && t ? yield this.$4(n) : n;
                return this.view(r);
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$2 = function (t) {
            return t;
          }),
          (a.$5 = function (t, n) {
            return (n === void 0 && (n = !1), t);
          }),
          (a.$4 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this;
                typeof e == "object" || s(0, 56350);
                var r = Array.from(
                  this.tableEncryptedColumns.entries(),
                  function (n) {
                    var r = n[0],
                      a = n[1],
                      i = e[r];
                    return !(i != null && i._data) || !(i != null && i.iv)
                      ? i
                      : o("WAWebIdbEncryption")
                          .decryptDbMaterial(
                            i,
                            { tableName: t.table.name, columnName: r },
                            a,
                            t.shouldUseDbMsgEncKeyForEncryptedCol,
                          )
                          .then(function (t) {
                            e[r] = t;
                          });
                  },
                );
                return (yield (d || (d = n("Promise"))).all(r), e);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$6 = function (t) {
            var e = this,
              r = Array.from(
                this.tableEncryptedColumns.entries(),
                function (n) {
                  var r = n[0],
                    a = n[1],
                    i = t[r];
                  return i == null
                    ? i
                    : o("WAWebIdbEncryption")
                        .encryptDbMaterial(
                          i,
                          { tableName: e.table.name, columnName: r },
                          a,
                          e.shouldUseDbMsgEncKeyForEncryptedCol,
                        )
                        .then(function (e) {
                          t[r] = e;
                        });
                },
              );
            return (d || (d = n("Promise"))).all(r).then(function (e) {
              return t;
            });
          }),
          (a.$7 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                t === void 0 && (t = !1);
                var n = yield this.$8(e),
                  r = this.$5(n, t);
                return r;
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$9 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this,
                  n = yield this.$10(e),
                  r = n.map(function (e) {
                    return t.$5(e);
                  });
                return r;
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$11 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield this.$7(e);
                return this.table.add(t);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$12 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield this.$7(e);
                return this.table.put(t);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$13 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield this.$9(e);
                return this.table.bulkAdd(t);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$14 = function (t) {
            var e = this;
            if (this.$3())
              return r("WAWeb-dexie")
                .waitFor(this.$10(t))
                .then(function (t) {
                  var n = t.map(function (t) {
                    return e.$5(t);
                  });
                  return e.table.bulkPut(n);
                });
            var n = t.map(function (t) {
              return e.$5(t);
            });
            return this.table.bulkPut(n);
          }),
          (a.$10 = function (t) {
            var e = this;
            if (this.$3()) {
              var r = [],
                o = t.map(function (t, n) {
                  return e.$6(t).then(function (e) {
                    r[n] = e;
                  });
                });
              return (d || (d = n("Promise"))).all(o).then(function () {
                return r;
              });
            }
            return (d || (d = n("Promise"))).resolve(t);
          }),
          (a.$8 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if (this.$3()) {
                  var t = yield this.$6(e);
                  return t;
                }
                return e;
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.asyncViewMap = function (t, a) {
            var e = this;
            if ((a === void 0 && (a = !0), !this.$3() || !a))
              return (d || (d = n("Promise"))).resolve(
                t.map(function (t) {
                  return t ? e.view(e.$2(t)) : null;
                }),
              );
            var i = t.map(function (t) {
              return t != null
                ? e.asyncView(t, a)
                : (d || (d = n("Promise"))).resolve(null);
            });
            return o("WAWebDexieCastTypes").dexieCastToPromise(
              r("WAWeb-dexie").currentTransaction == null
                ? (d || (d = n("Promise"))).all(i)
                : r("WAWeb-dexie").waitFor((d || (d = n("Promise"))).all(i)),
            );
          }),
          (a.preflightEncryptSingleRecord = function (t) {
            var e = this;
            return (
              Object.keys(t).forEach(function (n) {
                e.tableEncryptedColumns.has(n) || delete t[n];
              }),
              this.$6(t)
            );
          }),
          (a.postflightDecryptSingleRecord = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield this.$4(e);
                return this.view(t);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.bulkCreateWith_ALREADY_ENCRYPTED_RECORDS_ONLY = function (t, n) {
            var e,
              a = this;
            if ((n === void 0 && (n = !1), t.length === 0))
              return o("WAWebDexieCastTypes").dexieCastToPromise();
            (e = this.updateListener) == null ||
              e.call(
                this,
                t.map(function (e) {
                  return a.$15(e);
                }),
              );
            var i = t.map(function (e) {
              return a.propFilter(e);
            });
            o("WAWebIdbHelpers").assertAllColsAreEncrypted(
              i,
              this.tableEncryptedColumns,
            );
            var l = i.map(function (e) {
              return a.$5(e);
            });
            return o("WAWebDexieCastTypes")
              .dexieCastToPromise(this.table.bulkAdd(l))
              .catch(function (e) {
                var t;
                if (
                  o("WAWebGlobals").getAllowHistorySyncPutAllowDuplicate() ===
                    !0 &&
                  n === !0 &&
                  e instanceof r("WAWeb-dexie").BulkError &&
                  (t = e.failures) != null &&
                  (t = t[0]) != null &&
                  (t = t.toString()) != null &&
                  t.includes(m)
                )
                  return o("WAWebDexieCastTypes").dexieCastToPromise();
                throw (
                  a.$1(
                    r("getErrorSafe")(e),
                    "bulkCreateWith_ALREADY_ENCRYPTED_RECORDS_ONLY",
                    { writeData: l },
                  ),
                  e
                );
              });
          }),
          (a.bulkCreateOrReplace_ALREADY_ENCRYPTED_RECORDS_ONLY = function (t) {
            var e,
              n = this;
            if (t.length === 0)
              return o("WAWebDexieCastTypes").dexieCastToPromise();
            (e = this.updateListener) == null ||
              e.call(
                this,
                t.map(function (e) {
                  return n.$15(e);
                }),
              );
            var a = t.map(function (e) {
              return n.propFilter(e);
            });
            o("WAWebIdbHelpers").assertAllColsAreEncrypted(
              a,
              this.tableEncryptedColumns,
            );
            var i = a.map(function (e) {
              return n.$5(e);
            });
            return o("WAWebDexieCastTypes")
              .dexieCastToPromise(this.table.bulkPut(i))
              .catch(function (e) {
                throw (
                  n.$1(r("getErrorSafe")(e), "bulkCreateOrReplace", {
                    writeData: i,
                  }),
                  e
                );
              });
          }),
          (a.create = function (t) {
            var e,
              n = this;
            (e = this.updateListener) == null || e.call(this, [this.$15(t)]);
            var a = this.propFilter(t);
            if (!this.$3()) {
              var i = this.$5(a);
              return o("WAWebDexieCastTypes")
                .dexieCastToPromise(this.table.add(i))
                .catch(function (e) {
                  throw (
                    n.$1(r("getErrorSafe")(e), "create", { writeData: a }),
                    e
                  );
                });
            }
            return o("WAWebDexieCastTypes")
              .dexieCastToPromise(this.$11(a))
              .catch(function (e) {
                throw (
                  n.$1(r("getErrorSafe")(e), "create", { writeData: a }),
                  e
                );
              });
          }),
          (a.createOrReplace = function (t) {
            var e,
              n = this;
            (e = this.updateListener) == null || e.call(this, [this.$15(t)]);
            var a = this.propFilter(t);
            if (!this.$3()) {
              var i = this.$5(a);
              return o("WAWebDexieCastTypes")
                .dexieCastToPromise(this.table.put(i))
                .catch(function (e) {
                  throw (
                    n.$1(r("getErrorSafe")(e), "createOrReplace", {
                      writeData: a,
                    }),
                    e
                  );
                });
            }
            return o("WAWebDexieCastTypes")
              .dexieCastToPromise(this.$12(a))
              .catch(function (e) {
                throw (
                  n.$1(r("getErrorSafe")(e), "createOrReplace", {
                    writeData: a,
                  }),
                  e
                );
              });
          }),
          (a.createOrMerge = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n,
                  a = this;
                (n = this.updateListener) == null || n.call(this, [e], [t]);
                var i = this.propFilter(t),
                  l = this.$3() ? yield this.$7(i, !0) : this.$5(i, !0);
                return o("WAWebDexieCastTypes")
                  .dexieCastToPromise(
                    this.db
                      .transaction("rw", this.table, function () {
                        return a.table
                          .where(":id")
                          .equals(e)
                          .modify(function (e) {
                            Object.entries(l).forEach(function (t) {
                              var n = t[0],
                                r = t[1];
                              e[n] = r;
                            });
                          })
                          .then(function (e) {
                            if (e !== 1) return a.table.add(l);
                          });
                      })
                      .then(function () {}),
                  )
                  .catch(function (e) {
                    throw (
                      a.$1(r("getErrorSafe")(e), "createOrMerge", {
                        writeData: l,
                      }),
                      e
                    );
                  });
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.get = function (t, n) {
            var e = this;
            return (
              n === void 0 && (n = !0),
              o("WAWebDexieCastTypes")
                .dexieCastToPromise(this.table.get(t))
                .then(function (t) {
                  return t ? e.asyncView(t, n) : null;
                })
                .catch(function (t) {
                  throw (e.$1(r("getErrorSafe")(t), "get"), t);
                })
            );
          }),
          (a.merge = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                var a = (n == null ? void 0 : n.usePropsFilter) === !0;
                if (!a) {
                  var i;
                  (i = this.updateListener) == null || i.call(this, [e]);
                }
                var l = this.propFilter(t),
                  s = this.$3() ? yield this.$7(l, !0) : this.$5(l, !0);
                if (a) {
                  var u;
                  (u = this.updateListener) == null || u.call(this, [e], [t]);
                }
                try {
                  if (
                    (yield o("WAWebDexieCastTypes").dexieCastToPromise(
                      this.table.update(e, s),
                    ),
                    !a)
                  ) {
                    var c;
                    (c = this.updateListener) == null || c.call(this, [e]);
                  }
                } catch (e) {
                  var d = r("getErrorSafe")(e);
                  throw (this.$1(d, "merge", { writeData: s }), d);
                }
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.remove = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                try {
                  yield o("WAWebDexieCastTypes").dexieCastToPromise(
                    this.table.delete(e),
                  );
                } catch (e) {
                  var t = r("getErrorSafe")(e);
                  throw (this.$1(t, "remove"), t);
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.bulkCreate = function (t) {
            var e,
              n = this;
            if (t.length === 0)
              return o("WAWebDexieCastTypes").dexieCastToPromise();
            (e = this.updateListener) == null ||
              e.call(
                this,
                t.map(function (e) {
                  return n.$15(e);
                }),
              );
            var a = t.map(function (e) {
              return n.propFilter(e);
            });
            if (this.$3())
              return o("WAWebDexieCastTypes")
                .dexieCastToPromise(
                  this.db.transaction("rw", this.table, function () {
                    return n.$13(a);
                  }),
                )
                .catch(function (e) {
                  throw (
                    n.$1(r("getErrorSafe")(e), "bulkCreate", { writeData: a }),
                    e
                  );
                });
            var i = a.map(function (e) {
              return n.$5(e);
            });
            return o("WAWebDexieCastTypes")
              .dexieCastToPromise(this.table.bulkAdd(i))
              .catch(function (e) {
                throw (
                  n.$1(r("getErrorSafe")(e), "bulkCreate", { writeData: i }),
                  e
                );
              });
          }),
          (a.bulkCreateOrReplace = function (t) {
            var e,
              n = this;
            if (t.length === 0)
              return o("WAWebDexieCastTypes").dexieCastToPromise();
            (e = this.updateListener) == null ||
              e.call(
                this,
                t.map(function (e) {
                  return n.$15(e);
                }),
              );
            var a = t.map(function (e) {
              return n.propFilter(e);
            });
            if (this.$3())
              return o("WAWebDexieCastTypes")
                .dexieCastToPromise(
                  this.db.transaction("rw", this.table, function () {
                    return n.$14(a);
                  }),
                )
                .catch(function (e) {
                  throw (
                    n.$1(r("getErrorSafe")(e), "bulkCreateOrReplace", {
                      writeData: a,
                    }),
                    e
                  );
                });
            var i = a.map(function (e) {
              return n.$5(e);
            });
            return o("WAWebDexieCastTypes")
              .dexieCastToPromise(this.table.bulkPut(i))
              .catch(function (e) {
                throw (
                  n.$1(r("getErrorSafe")(e), "bulkCreateOrReplace", {
                    writeData: i,
                  }),
                  e
                );
              });
          }),
          (a.bulkCreateOrMerge = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                return this.$16(e);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.bulkMergeOnly = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                return this.$16(e, !1);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$16 = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, a) {
                var i,
                  l = this;
                if ((a === void 0 && (a = !0), t.length === 0))
                  return o("WAWebDexieCastTypes").dexieCastToPromise();
                var c = self.performance.now(),
                  d = {
                    encrypted: null,
                    serialized: null,
                    transaction: null,
                    modified: null,
                    put: null,
                  };
                (o("WAWebAppTracker").AppTracker.start(
                  o("WAWebAppTracker").AppTrackerType.BulkCreateOrMerge,
                ),
                  (i = this.updateListener) == null ||
                    i.call(
                      this,
                      t.map(function (e) {
                        return l.$15(e);
                      }),
                      t,
                    ));
                var m = new Map(),
                  p = this.$17(),
                  _ = this,
                  f = yield this.$10(t);
                ((d.encrypted = Math.round(self.performance.now() - c)),
                  f.forEach(function (e) {
                    var t = l.propFilter(e),
                      n = l.$5(t, !0);
                    (p in n || s(0, 97881), m.set(n[p], n));
                  }),
                  (d.serialized = Math.round(self.performance.now() - c)));
                function g(e) {
                  return h.apply(this, arguments);
                }
                function h() {
                  return (
                    (h = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        for (
                          var t = Array.from(e.keys()),
                            n = 200,
                            r = function* () {
                              var r = t.slice(a, a + n),
                                i = yield o(
                                  "WAWebDexieCastTypes",
                                ).dexieCastToPromise(_.table.bulkGet(r)),
                                l = [];
                              (i.forEach(function (t, n) {
                                if (t != null) {
                                  var o = r[n],
                                    a = e.get(o);
                                  a != null &&
                                    (Object.assign(t, a),
                                    l.push(t),
                                    e.delete(o));
                                }
                              }),
                                l.length > 0 && (yield _.table.bulkPut(l)));
                            },
                            a = 0;
                          a < t.length;
                          a += n
                        )
                          yield* r();
                        return Array.from(e.values());
                      },
                    )),
                    h.apply(this, arguments)
                  );
                }
                function y(e) {
                  return C.apply(this, arguments);
                }
                function C() {
                  return (
                    (C = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        var t = _.table
                          .where(":id")
                          .anyOf(Array.from(e.keys()));
                        yield t.modify(function (t) {
                          (Object.assign(t, e.get(t[p])), e.delete(t[p]));
                        });
                        var n = Array.from(e.values());
                        return n;
                      },
                    )),
                    C.apply(this, arguments)
                  );
                }
                return o("WAWebDexieCastTypes")
                  .dexieCastToPromise(
                    this.db.transaction("rw", this.table, function () {
                      d.transaction = Math.round(self.performance.now() - c);
                      var t = o("WAWebGlobals").getEnableImprovedBulkMerge()
                        ? g(m)
                        : y(m);
                      return t.then(function (t) {
                        if (
                          ((d.modified = Math.round(
                            self.performance.now() - c,
                          )),
                          t.length === 0 || !a)
                        ) {
                          t.length > 0 &&
                            o("WALogger").LOG(
                              e ||
                                (e = babelHelpers.taggedTemplateLiteralLoose([
                                  "bulkMaybeCreateOrMerge: skipped adding ",
                                  " records for table ",
                                  "",
                                ])),
                              t.length,
                              l.table.name,
                            );
                          return;
                        }
                        return l.table.bulkPut(t);
                      });
                    }),
                  )
                  .catch(function (e) {
                    throw (
                      l.$1(
                        r("getErrorSafe")(e),
                        "bulkMaybeCreateOrMerge(shouldCreate=" +
                          a.toString() +
                          ")",
                        { writeData: t },
                      ),
                      e
                    );
                  })
                  .finally(function () {
                    var e;
                    (o("WAWebAppTracker").AppTracker.stop(
                      o("WAWebAppTracker").AppTrackerType.BulkCreateOrMerge,
                    ),
                      (d.put = Math.round(self.performance.now() - c)),
                      d.put > 5e3 &&
                        (e = self.document) != null &&
                        e.hasFocus != null &&
                        e.hasFocus() &&
                        o("WALogger")
                          .WARN(
                            u ||
                              (u = babelHelpers.taggedTemplateLiteralLoose([
                                "bulkMaybeCreateOrMerge:",
                                " chg:",
                                " t:",
                                "ms enc:",
                                " ser:",
                                " tra:",
                                " mod:",
                                "",
                              ])),
                            l.table.name,
                            t.length,
                            d.put,
                            d.encrypted,
                            d.serialized,
                            d.transaction,
                            d.modified,
                          )
                          .sendLogs("long-bulk-db-operation", {
                            sampling: 0.001,
                          }));
                  });
              },
            );
            function a(e, n) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (a.bulkGet = function (t, a) {
            var e = this;
            return (
              a === void 0 && (a = !0),
              t.length === 0
                ? (d || (d = n("Promise"))).resolve([])
                : o("WAWebDexieCastTypes")
                    .dexieCastToPromise(
                      this.db.transaction("r", this.table, function () {
                        var n = t.map(function (t) {
                          return e.table.get(t);
                        });
                        return r("WAWeb-dexie").Promise.all(n);
                      }),
                    )
                    .then(function (t) {
                      return e.asyncViewMap(t, a);
                    })
                    .catch(function (t) {
                      throw (e.$1(r("getErrorSafe")(t), "bulkGet"), t);
                    })
            );
          }),
          (a.bulkRemove = function (t) {
            var e = this;
            return t.length === 0
              ? (d || (d = n("Promise"))).resolve()
              : o("WAWebDexieCastTypes")
                  .dexieCastToPromise(
                    this.db.transaction("rw", this.table, function () {
                      return e.table.bulkDelete(t);
                    }),
                  )
                  .catch(function (t) {
                    throw (e.$1(r("getErrorSafe")(t), "bulkRemove"), t);
                  });
          }),
          (a.bulkRemoveByIndex = function (t, a) {
            var e = this;
            return a.length === 0
              ? (d || (d = n("Promise"))).resolve()
              : o("WAWebDexieCastTypes")
                  .dexieCastToPromise(
                    this.table
                      .where(
                        o("WAWebIdbHelpers").formatQueryIndex(
                          t,
                          this.tableColumns,
                        ),
                      )
                      .anyOf(a)
                      .delete(),
                  )
                  .catch(function (t) {
                    throw (e.$1(r("getErrorSafe")(t), "bulkRemoveByIndex"), t);
                  });
          }),
          (a.all = function (t, n) {
            var e = this,
              a = o("WAWebIdbHelpers").applyOptions(
                this.table.orderBy(
                  t != null && t.index
                    ? o("WAWebIdbHelpers").formatQueryIndex(
                        t.index,
                        this.tableColumns,
                      )
                    : ":id",
                ),
                t,
              );
            n &&
              (a = a.until(function (t) {
                return n(e.$2(t));
              }));
            var i = null;
            e: {
              var l = t == null ? void 0 : t.returnKeyType;
              if (l === "keys") {
                i = o("WAWebDexieCastTypes").dexieCastToPromise(a.keys());
                break e;
              }
              if (l === "primary_key") {
                i = o("WAWebDexieCastTypes").dexieCastToPromise(
                  a.primaryKeys(),
                );
                break e;
              }
              if (l === void 0) {
                i = o("WAWebDexieCastTypes")
                  .dexieCastToPromise(a.toArray())
                  .then(function (n) {
                    return e.asyncViewMap(
                      n,
                      t == null ? void 0 : t.shouldDecrypt,
                    );
                  });
                break e;
              }
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  l,
              );
            }
            return i.catch(function (t) {
              throw (e.$1(r("getErrorSafe")(t), "all"), t);
            });
          }),
          (a.allPrimaryKeys = function () {
            return o("WAWebDexieCastTypes").dexieCastToPromise(
              this.table.orderBy(":id").primaryKeys(),
            );
          }),
          (a.count = function () {
            var e = this;
            return o("WAWebDexieCastTypes")
              .dexieCastToPromise(this.table.count())
              .catch(function (t) {
                throw (e.$1(r("getErrorSafe")(t), "count"), t);
              });
          }),
          (a.bulkDeleteRange = function (t, n, a, i) {
            var e = this,
              l = this.table
                .where(
                  o("WAWebIdbHelpers").formatQueryIndex(t, this.tableColumns),
                )
                .between(
                  n,
                  a,
                  !!(i != null && i.lowerInclusive),
                  !!(i != null && i.upperInclusive),
                );
            return o("WAWebDexieCastTypes")
              .dexieCastToPromise(
                o("WAWebIdbHelpers").applyOptions(l, i).delete(),
              )
              .catch(function (t) {
                throw (e.$1(r("getErrorSafe")(t), "bulkDeleteRange"), t);
              });
          }),
          (a.equals = function (t, n, a) {
            var e = this;
            return o("WAWebDexieCastTypes")
              .dexieCastToPromise(
                o("WAWebIdbHelpers")
                  .applyOptions(
                    this.table
                      .where(
                        o("WAWebIdbHelpers").formatQueryIndex(
                          t,
                          this.tableColumns,
                        ),
                      )
                      .equals(n),
                    a,
                  )
                  .toArray(),
              )
              .then(function (t) {
                return e.asyncViewMap(t, a == null ? void 0 : a.shouldDecrypt);
              })
              .catch(function (t) {
                throw (e.$1(r("getErrorSafe")(t), "equals"), t);
              });
          }),
          (a.equalsPrimaryKeys = function (t, n, a) {
            var e = this;
            return o("WAWebDexieCastTypes")
              .dexieCastToPromise(
                o("WAWebIdbHelpers")
                  .applyOptions(
                    this.table
                      .where(
                        o("WAWebIdbHelpers").formatQueryIndex(
                          t,
                          this.tableColumns,
                        ),
                      )
                      .equals(n),
                    a,
                  )
                  .primaryKeys(),
              )
              .catch(function (t) {
                throw (e.$1(r("getErrorSafe")(t), "equalsPrimaryKeys"), t);
              });
          }),
          (a.anyOf = function (t, a, i) {
            var e = this;
            return a.length === 0
              ? (d || (d = n("Promise"))).resolve([])
              : o("WAWebDexieCastTypes")
                  .dexieCastToPromise(
                    o("WAWebIdbHelpers")
                      .applyOptions(
                        this.table
                          .where(
                            o("WAWebIdbHelpers").formatQueryIndex(
                              t,
                              this.tableColumns,
                            ),
                          )
                          .anyOf(a),
                        i,
                      )
                      .distinct()
                      .toArray(),
                  )
                  .then(function (t) {
                    return e.asyncViewMap(
                      t,
                      i == null ? void 0 : i.shouldDecrypt,
                    );
                  })
                  .catch(function (t) {
                    throw (e.$1(r("getErrorSafe")(t), "anyOf"), t);
                  });
          }),
          (a.anyOfPrimaryKeys = function (t, a, i) {
            var e = this;
            return a.length === 0
              ? (d || (d = n("Promise"))).resolve([])
              : o("WAWebDexieCastTypes")
                  .dexieCastToPromise(
                    o("WAWebIdbHelpers")
                      .applyOptions(
                        this.table
                          .where(
                            o("WAWebIdbHelpers").formatQueryIndex(
                              t,
                              this.tableColumns,
                            ),
                          )
                          .anyOf(a),
                        i,
                      )
                      .distinct()
                      .primaryKeys(),
                  )
                  .catch(function (t) {
                    throw (e.$1(r("getErrorSafe")(t), "anyOfPrimaryKeys"), t);
                  });
          }),
          (a.inAnyRange = function (t, a, i) {
            var e = this;
            return a.length === 0
              ? (d || (d = n("Promise"))).resolve([])
              : o("WAWebDexieCastTypes")
                  .dexieCastToPromise(
                    o("WAWebIdbHelpers")
                      .applyOptions(
                        this.table
                          .where(
                            o("WAWebIdbHelpers").formatQueryIndex(
                              t,
                              this.tableColumns,
                            ),
                          )
                          .inAnyRange(a),
                        i,
                      )
                      .distinct()
                      .toArray(),
                  )
                  .then(function (t) {
                    return e.asyncViewMap(
                      t,
                      i == null ? void 0 : i.shouldDecrypt,
                    );
                  })
                  .catch(function (t) {
                    throw (e.$1(r("getErrorSafe")(t), "inAnyRange"), t);
                  });
          }),
          (a.startsWithAnyOf = function (t, a, i) {
            var e = this;
            return a.length === 0
              ? (d || (d = n("Promise"))).resolve([])
              : o("WAWebDexieCastTypes")
                  .dexieCastToPromise(
                    o("WAWebIdbHelpers")
                      .applyOptions(
                        this.table
                          .where(
                            o("WAWebIdbHelpers").formatQueryIndex(
                              t,
                              this.tableColumns,
                            ),
                          )
                          .startsWithAnyOf(a),
                        i,
                      )
                      .distinct()
                      .toArray(),
                  )
                  .then(function (t) {
                    return e.asyncViewMap(
                      t,
                      i == null ? void 0 : i.shouldDecrypt,
                    );
                  })
                  .catch(function (t) {
                    throw (e.$1(r("getErrorSafe")(t), "startsWithAnyOf"), t);
                  });
          }),
          (a.greaterThan = function (t, n, a) {
            var e = this,
              i =
                (a == null ? void 0 : a.inclusive) === !0
                  ? this.table
                      .where(
                        o("WAWebIdbHelpers").formatQueryIndex(
                          t,
                          this.tableColumns,
                        ),
                      )
                      .aboveOrEqual(n)
                  : this.table
                      .where(
                        o("WAWebIdbHelpers").formatQueryIndex(
                          t,
                          this.tableColumns,
                        ),
                      )
                      .above(n);
            return o("WAWebDexieCastTypes")
              .dexieCastToPromise(
                o("WAWebIdbHelpers").applyOptions(i, a).toArray(),
              )
              .then(function (t) {
                return e.asyncViewMap(t, a == null ? void 0 : a.shouldDecrypt);
              })
              .catch(function (t) {
                throw (e.$1(r("getErrorSafe")(t), "greaterThan"), t);
              });
          }),
          (a.lessThan = function (t, n, a) {
            var e = this,
              i =
                (a == null ? void 0 : a.inclusive) === !0
                  ? this.table
                      .where(
                        o("WAWebIdbHelpers").formatQueryIndex(
                          t,
                          this.tableColumns,
                        ),
                      )
                      .belowOrEqual(n)
                  : this.table
                      .where(
                        o("WAWebIdbHelpers").formatQueryIndex(
                          t,
                          this.tableColumns,
                        ),
                      )
                      .below(n);
            return o("WAWebDexieCastTypes")
              .dexieCastToPromise(
                o("WAWebIdbHelpers").applyOptions(i, a).toArray(),
              )
              .then(function (t) {
                return e.asyncViewMap(t, a == null ? void 0 : a.shouldDecrypt);
              })
              .catch(function (t) {
                throw (e.$1(r("getErrorSafe")(t), "lessThan"), t);
              });
          }),
          (a.between = function (t, n, a, i, l, s) {
            var e = this,
              u = o("WAWebIdbHelpers").applyOptions(
                this.table
                  .where(
                    o("WAWebIdbHelpers").formatQueryIndex(t, this.tableColumns),
                  )
                  .between(
                    n,
                    a,
                    !!(i != null && i.lowerInclusive),
                    !!(i != null && i.upperInclusive),
                  )
                  .filter(function (e) {
                    var t;
                    return (t = s == null ? void 0 : s(e)) != null ? t : !0;
                  }),
                i,
              ),
              c = null;
            switch (i == null ? void 0 : i.returnKeyType) {
              case "keys":
                c = o("WAWebDexieCastTypes").dexieCastToPromise(u.keys());
                break;
              case "primary_key":
                c = o("WAWebDexieCastTypes").dexieCastToPromise(
                  u.primaryKeys(),
                );
                break;
              default:
                l
                  ? (c = o("WAWebDexieCastTypes")
                      .dexieCastToPromise(
                        u
                          .until(function (t) {
                            return l(e.$2(t));
                          })
                          .toArray(),
                      )
                      .then(function (t) {
                        return e.asyncViewMap(
                          t,
                          i == null ? void 0 : i.shouldDecrypt,
                        );
                      }))
                  : (c = o("WAWebDexieCastTypes")
                      .dexieCastToPromise(u.toArray())
                      .then(function (t) {
                        return e.asyncViewMap(
                          t,
                          i == null ? void 0 : i.shouldDecrypt,
                        );
                      }));
            }
            return c.catch(function (t) {
              throw (e.$1(r("getErrorSafe")(t), "between"), t);
            });
          }),
          (a.betweenCount = function (t, n, a, i) {
            var e = this,
              l = this.table
                .where(
                  o("WAWebIdbHelpers").formatQueryIndex(t, this.tableColumns),
                )
                .between(
                  n,
                  a,
                  !!(i != null && i.lowerInclusive),
                  !!(i != null && i.upperInclusive),
                );
            return o("WAWebDexieCastTypes")
              .dexieCastToPromise(
                o("WAWebIdbHelpers").applyOptions(l, i).count(),
              )
              .catch(function (t) {
                throw (e.$1(r("getErrorSafe")(t), "betweenCount"), t);
              });
          }),
          (a.forEachSortedBy = function (t, o) {
            var e = this;
            return this.table
              .orderBy(t)
              .each(
                (function () {
                  var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (t) {
                      var n = e.$2(t),
                        r = yield e.$4(n);
                      return o(e.view(r));
                    },
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              )
              .catch(function (t) {
                throw (e.$1(r("getErrorSafe")(t), "forEachSortedBy"), t);
              });
          }),
          (a.forEach = function (t) {
            var e = this;
            return this.table
              .each(
                (function () {
                  var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (n) {
                      var r = e.$2(n),
                        o = yield e.$4(r);
                      return t(e.view(o));
                    },
                  );
                  return function (e) {
                    return r.apply(this, arguments);
                  };
                })(),
              )
              .catch(function (t) {
                throw (e.$1(r("getErrorSafe")(t), "forEach"), t);
              });
          }),
          (a.clear = function () {
            var e = this;
            return o("WAWebDexieCastTypes")
              .dexieCastToPromise(this.table.clear())
              .catch(function (t) {
                throw (e.$1(r("getErrorSafe")(t), "clear"), t);
              });
          }),
          (a.$15 = function (t) {
            var e,
              n = (e = this.updateListenerField) != null ? e : this.$17();
            return n in t ? t[n] : null;
          }),
          (a.$17 = function () {
            return this.table.schema.primKey.name;
          }),
          (a.$3 = function () {
            return this.tableEncryptedColumns.size > 0;
          }),
          (a.addHook = function (t) {
            this.table.hook(t.type, t.callback);
          }),
          (a.setUpdateListener = function (t, n) {
            (n === void 0 && (n = null),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[storage] setUpdateListener for ",
                    "",
                  ])),
                this.table.name,
              ),
              (this.updateListener = t),
              (this.updateListenerField = n));
          }),
          t
        );
      })(),
      _ = (function () {
        function e(e, t) {
          ((this.tableNames = new Map()),
            (this.tableColumns = new Map()),
            (this.tableEncryptedColumns = new Map()),
            (this.errorHandlers = new Map()),
            (this.name = e),
            (this.db = new (r("WAWeb-dexie"))(this.name, {
              chromeTransactionDurability: "relaxed",
              addons: [],
            })),
            (this.packColumns = !!(t != null && t.packColumns)));
        }
        var t = e.prototype;
        return (
          (t.initialize = function (t, r, a, i) {
            i && (this.errorHandlers = i);
            var e = o("WAWebIdbHelpers").schemasToStores(
              r,
              this.tableNames,
              this.tableColumns,
              this.tableEncryptedColumns,
            );
            return (
              this.db
                .version(t + 1)
                .stores(e)
                .upgrade(function (e) {
                  if (a) {
                    var t;
                    return (t = e[a.name]) == null
                      ? void 0
                      : t.toCollection().modify(a.callback);
                  }
                }),
              (d || (d = n("Promise"))).resolve()
            );
          }),
          (t.open = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              yield o("WAWebDexieCastTypes").dexieCastToPromise(this.db.open());
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.transact = function (t, r, a) {
            return (
              a === void 0 && (a = "rw"),
              o("WAWebDexieCastTypes").dexieCastToPromise(
                this.db.transaction(
                  a,
                  t,
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    var e = yield r();
                    return e;
                  }),
                ),
              )
            );
          }),
          (t.close = function () {
            return (
              this.db.close(),
              o("WAWebDexieCastTypes").dexieCastToPromise()
            );
          }),
          (t.view = function (t, n, a, i) {
            (this.tableNames.has(t) || s(0, 75743, t),
              this.tableColumns.has(t) || s(0, 75744, t));
            var e = a
              ? o("WAWebIdbHelpers").columnPropFilter(this.tableColumns.get(t))
              : function (e) {
                  return e;
                };
            return new p(
              this.db.table(this.tableNames.get(t)),
              this.db,
              n,
              e,
              r("nullthrows")(this.tableColumns.get(t)),
              r("nullthrows")(this.tableEncryptedColumns.get(t)),
              {
                shouldUseDbMsgEncKeyForEncryptedCol: i,
                packColumns: this.packColumns,
                errorHandlers: this.errorHandlers,
              },
            );
          }),
          (t.available = function () {
            return (d || (d = n("Promise"))).resolve(!0);
          }),
          (t.reset = function () {
            return (
              (this.tableNames = new Map()),
              o("WAWebDexieCastTypes").dexieCastToPromise(this.db.delete())
            );
          }),
          (t.getDbName = function () {
            return this.name;
          }),
          e
        );
      })();
    l.default = _;
  },
  98,
);
