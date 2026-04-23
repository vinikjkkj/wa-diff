__d(
  "WAWebIdb",
  [
    "invariant",
    "Promise",
    "WALogger",
    "WANullthrows",
    "WAWeb-dexie",
    "WAWebAppTracker",
    "WAWebDexieCastTypes",
    "WAWebGlobals",
    "WAWebIdbAsyncAwaitConfig",
    "WAWebIdbEncryption",
    "WAWebIdbHelpers",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
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
            o("WAWebIdbHelpers").logStorageError(t, n, this.table.name);
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
                  a.$1(e, "bulkCreateWith_ALREADY_ENCRYPTED_RECORDS_ONLY", {
                    writeData: l,
                  }),
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
            var r = t.map(function (e) {
              return n.propFilter(e);
            });
            o("WAWebIdbHelpers").assertAllColsAreEncrypted(
              r,
              this.tableEncryptedColumns,
            );
            var a = r.map(function (e) {
              return n.$5(e);
            });
            return o("WAWebDexieCastTypes")
              .dexieCastToPromise(this.table.bulkPut(a))
              .catch(function (e) {
                throw (n.$1(e, "bulkCreateOrReplace", { writeData: a }), e);
              });
          }),
          (a.create = function (t) {
            var e,
              n = this;
            (e = this.updateListener) == null || e.call(this, [this.$15(t)]);
            var r = this.propFilter(t);
            if (
              !this.$3() &&
              o("WAWebIdbAsyncAwaitConfig").isAsyncAwaitPrepEnabled()
            ) {
              var a = this.$5(r);
              return o("WAWebDexieCastTypes")
                .dexieCastToPromise(this.table.add(a))
                .catch(function (e) {
                  throw (n.$1(e, "create", { writeData: r }), e);
                });
            }
            return o("WAWebDexieCastTypes")
              .dexieCastToPromise(this.$11(r))
              .catch(function (e) {
                throw (n.$1(e, "create", { writeData: r }), e);
              });
          }),
          (a.createOrReplace = function (t) {
            var e,
              n = this;
            (e = this.updateListener) == null || e.call(this, [this.$15(t)]);
            var r = this.propFilter(t);
            if (
              !this.$3() &&
              o("WAWebIdbAsyncAwaitConfig").isAsyncAwaitPrepEnabled()
            ) {
              var a = this.$5(r);
              return o("WAWebDexieCastTypes")
                .dexieCastToPromise(this.table.put(a))
                .catch(function (e) {
                  throw (n.$1(e, "createOrReplace", { writeData: r }), e);
                });
            }
            return o("WAWebDexieCastTypes")
              .dexieCastToPromise(this.$12(r))
              .catch(function (e) {
                throw (n.$1(e, "createOrReplace", { writeData: r }), e);
              });
          }),
          (a.createOrMerge = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n,
                  r = this;
                (n = this.updateListener) == null || n.call(this, [e]);
                var a = this.propFilter(t),
                  i =
                    this.$3() ||
                    !o("WAWebIdbAsyncAwaitConfig").isAsyncAwaitPrepEnabled()
                      ? yield this.$7(a, !0)
                      : this.$5(a, !0);
                return o("WAWebDexieCastTypes")
                  .dexieCastToPromise(
                    this.db
                      .transaction("rw", this.table, function () {
                        return r.table
                          .where(":id")
                          .equals(e)
                          .modify(function (e) {
                            Object.entries(i).forEach(function (t) {
                              var n = t[0],
                                r = t[1];
                              e[n] = r;
                            });
                          })
                          .then(function (e) {
                            if (e !== 1) return r.table.add(i);
                          });
                      })
                      .then(function () {}),
                  )
                  .catch(function (e) {
                    throw (r.$1(e, "createOrMerge", { writeData: i }), e);
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
                  throw (e.$1(t, "get"), t);
                })
            );
          }),
          (a.merge = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n;
                (n = this.updateListener) == null || n.call(this, [e]);
                var a = this.propFilter(t),
                  i =
                    this.$3() ||
                    !o("WAWebIdbAsyncAwaitConfig").isAsyncAwaitPrepEnabled()
                      ? yield this.$7(a, !0)
                      : this.$5(a, !0);
                try {
                  var l;
                  (yield o("WAWebDexieCastTypes").dexieCastToPromise(
                    this.table.update(e, i),
                  ),
                    (l = this.updateListener) == null || l.call(this, [e]));
                } catch (e) {
                  var s = r("getErrorSafe")(e);
                  throw (this.$1(s, "merge", { writeData: i }), s);
                }
              },
            );
            function t(t, n) {
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
            var r = t.map(function (e) {
              return n.propFilter(e);
            });
            if (this.$3())
              return o("WAWebDexieCastTypes")
                .dexieCastToPromise(
                  this.db.transaction("rw", this.table, function () {
                    return n.$13(r);
                  }),
                )
                .catch(function (e) {
                  throw (n.$1(e, "bulkCreate", { writeData: r }), e);
                });
            var a = r.map(function (e) {
              return n.$5(e);
            });
            return o("WAWebDexieCastTypes")
              .dexieCastToPromise(this.table.bulkAdd(a))
              .catch(function (e) {
                throw (n.$1(e, "bulkCreate", { writeData: a }), e);
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
            var r = t.map(function (e) {
              return n.propFilter(e);
            });
            if (this.$3())
              return o("WAWebDexieCastTypes")
                .dexieCastToPromise(
                  this.db.transaction("rw", this.table, function () {
                    return n.$14(r);
                  }),
                )
                .catch(function (e) {
                  throw (n.$1(e, "bulkCreateOrReplace", { writeData: r }), e);
                });
            var a = r.map(function (e) {
              return n.$5(e);
            });
            return o("WAWebDexieCastTypes")
              .dexieCastToPromise(this.table.bulkPut(a))
              .catch(function (e) {
                throw (n.$1(e, "bulkCreateOrReplace", { writeData: a }), e);
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
              function* (t, r) {
                var a,
                  i = this;
                if ((r === void 0 && (r = !0), t.length === 0))
                  return o("WAWebDexieCastTypes").dexieCastToPromise();
                var l = self.performance.now(),
                  c = {
                    encrypted: null,
                    serialized: null,
                    transaction: null,
                    modified: null,
                    put: null,
                  };
                (o("WAWebAppTracker").AppTracker.start(
                  o("WAWebAppTracker").AppTrackerType.BulkCreateOrMerge,
                ),
                  (a = this.updateListener) == null ||
                    a.call(
                      this,
                      t.map(function (e) {
                        return i.$15(e);
                      }),
                    ));
                var d = new Map(),
                  m = this.$17(),
                  p = this,
                  _ = yield this.$10(t);
                ((c.encrypted = Math.round(self.performance.now() - l)),
                  _.forEach(function (e) {
                    var t = i.propFilter(e),
                      n = i.$5(t, !0);
                    (m in n || s(0, 97881), d.set(n[m], n));
                  }),
                  (c.serialized = Math.round(self.performance.now() - l)));
                function f(e) {
                  return g.apply(this, arguments);
                }
                function g() {
                  return (
                    (g = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        for (
                          var t = Array.from(e.keys()),
                            n = 200,
                            r = function* () {
                              var r = t.slice(a, a + n),
                                i = yield o(
                                  "WAWebDexieCastTypes",
                                ).dexieCastToPromise(p.table.bulkGet(r)),
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
                                l.length > 0 && (yield p.table.bulkPut(l)));
                            },
                            a = 0;
                          a < t.length;
                          a += n
                        )
                          yield* r();
                        return Array.from(e.values());
                      },
                    )),
                    g.apply(this, arguments)
                  );
                }
                function h(e) {
                  return y.apply(this, arguments);
                }
                function y() {
                  return (
                    (y = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        var t = p.table
                          .where(":id")
                          .anyOf(Array.from(e.keys()));
                        yield t.modify(function (t) {
                          (Object.assign(t, e.get(t[m])), e.delete(t[m]));
                        });
                        var n = Array.from(e.values());
                        return n;
                      },
                    )),
                    y.apply(this, arguments)
                  );
                }
                return o("WAWebDexieCastTypes")
                  .dexieCastToPromise(
                    this.db.transaction("rw", this.table, function () {
                      c.transaction = Math.round(self.performance.now() - l);
                      var t = o("WAWebGlobals").getEnableImprovedBulkMerge()
                        ? f(d)
                        : h(d);
                      return t.then(function (t) {
                        if (
                          ((c.modified = Math.round(
                            self.performance.now() - l,
                          )),
                          t.length === 0 || !r)
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
                              i.table.name,
                            );
                          return;
                        }
                        return i.table.bulkPut(t);
                      });
                    }),
                  )
                  .catch(function (e) {
                    throw (
                      i.$1(
                        e,
                        "bulkMaybeCreateOrMerge(shouldCreate=" +
                          r.toString() +
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
                      (c.put = Math.round(self.performance.now() - l)),
                      c.put > 5e3 &&
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
                            i.table.name,
                            t.length,
                            c.put,
                            c.encrypted,
                            c.serialized,
                            c.transaction,
                            c.modified,
                          )
                          .sendLogs("long-bulk-db-operation", {
                            sampling: 0.001,
                          }));
                  });
              },
            );
            function r(e, n) {
              return t.apply(this, arguments);
            }
            return r;
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
                      throw (e.$1(t, "bulkGet"), t);
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
                    throw (e.$1(t, "bulkRemove"), t);
                  });
          }),
          (a.bulkRemoveByIndex = function (t, r) {
            var e = this;
            return r.length === 0
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
                      .anyOf(r)
                      .delete(),
                  )
                  .catch(function (t) {
                    throw (e.$1(t, "bulkRemoveByIndex"), t);
                  });
          }),
          (a.all = function (t, n) {
            var e = this,
              r = o("WAWebIdbHelpers").applyOptions(
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
              (r = r.until(function (t) {
                return n(e.$2(t));
              }));
            var a = null;
            e: {
              var i = t == null ? void 0 : t.returnKeyType;
              if (i === "keys") {
                a = o("WAWebDexieCastTypes").dexieCastToPromise(r.keys());
                break e;
              }
              if (i === "primary_key") {
                a = o("WAWebDexieCastTypes").dexieCastToPromise(
                  r.primaryKeys(),
                );
                break e;
              }
              if (i === void 0) {
                a = o("WAWebDexieCastTypes")
                  .dexieCastToPromise(r.toArray())
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
                  i,
              );
            }
            return a.catch(function (t) {
              throw (e.$1(t, "all"), t);
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
                throw (e.$1(t, "count"), t);
              });
          }),
          (a.bulkDeleteRange = function (t, n, r, a) {
            var e = this,
              i = this.table
                .where(
                  o("WAWebIdbHelpers").formatQueryIndex(t, this.tableColumns),
                )
                .between(
                  n,
                  r,
                  !!(a != null && a.lowerInclusive),
                  !!(a != null && a.upperInclusive),
                );
            return o("WAWebDexieCastTypes")
              .dexieCastToPromise(
                o("WAWebIdbHelpers").applyOptions(i, a).delete(),
              )
              .catch(function (t) {
                throw (e.$1(t, "bulkDeleteRange"), t);
              });
          }),
          (a.equals = function (t, n, r) {
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
                    r,
                  )
                  .toArray(),
              )
              .then(function (t) {
                return e.asyncViewMap(t, r == null ? void 0 : r.shouldDecrypt);
              })
              .catch(function (t) {
                throw (e.$1(t, "equals"), t);
              });
          }),
          (a.equalsPrimaryKeys = function (t, n, r) {
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
                    r,
                  )
                  .primaryKeys(),
              )
              .catch(function (t) {
                throw (e.$1(t, "equalsPrimaryKeys"), t);
              });
          }),
          (a.anyOf = function (t, r, a) {
            var e = this;
            return r.length === 0
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
                          .anyOf(r),
                        a,
                      )
                      .distinct()
                      .toArray(),
                  )
                  .then(function (t) {
                    return e.asyncViewMap(
                      t,
                      a == null ? void 0 : a.shouldDecrypt,
                    );
                  })
                  .catch(function (t) {
                    throw (e.$1(t, "anyOf"), t);
                  });
          }),
          (a.inAnyRange = function (t, r, a) {
            var e = this;
            return r.length === 0
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
                          .inAnyRange(r),
                        a,
                      )
                      .distinct()
                      .toArray(),
                  )
                  .then(function (t) {
                    return e.asyncViewMap(
                      t,
                      a == null ? void 0 : a.shouldDecrypt,
                    );
                  })
                  .catch(function (t) {
                    throw (e.$1(t, "inAnyRange"), t);
                  });
          }),
          (a.startsWithAnyOf = function (t, r, a) {
            var e = this;
            return r.length === 0
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
                          .startsWithAnyOf(r),
                        a,
                      )
                      .distinct()
                      .toArray(),
                  )
                  .then(function (t) {
                    return e.asyncViewMap(
                      t,
                      a == null ? void 0 : a.shouldDecrypt,
                    );
                  })
                  .catch(function (t) {
                    throw (e.$1(t, "startsWithAnyOf"), t);
                  });
          }),
          (a.greaterThan = function (t, n, r) {
            var e = this,
              a =
                (r == null ? void 0 : r.inclusive) === !0
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
                o("WAWebIdbHelpers").applyOptions(a, r).toArray(),
              )
              .then(function (t) {
                return e.asyncViewMap(t, r == null ? void 0 : r.shouldDecrypt);
              })
              .catch(function (t) {
                throw (e.$1(t, "greaterThan"), t);
              });
          }),
          (a.lessThan = function (t, n, r) {
            var e = this,
              a =
                (r == null ? void 0 : r.inclusive) === !0
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
                o("WAWebIdbHelpers").applyOptions(a, r).toArray(),
              )
              .then(function (t) {
                return e.asyncViewMap(t, r == null ? void 0 : r.shouldDecrypt);
              })
              .catch(function (t) {
                throw (e.$1(t, "lessThan"), t);
              });
          }),
          (a.between = function (t, n, r, a, i, l) {
            var e = this,
              s = o("WAWebIdbHelpers").applyOptions(
                this.table
                  .where(
                    o("WAWebIdbHelpers").formatQueryIndex(t, this.tableColumns),
                  )
                  .between(
                    n,
                    r,
                    !!(a != null && a.lowerInclusive),
                    !!(a != null && a.upperInclusive),
                  )
                  .filter(function (e) {
                    var t;
                    return (t = l == null ? void 0 : l(e)) != null ? t : !0;
                  }),
                a,
              ),
              u = null;
            switch (a == null ? void 0 : a.returnKeyType) {
              case "keys":
                u = o("WAWebDexieCastTypes").dexieCastToPromise(s.keys());
                break;
              case "primary_key":
                u = o("WAWebDexieCastTypes").dexieCastToPromise(
                  s.primaryKeys(),
                );
                break;
              default:
                i
                  ? (u = o("WAWebDexieCastTypes")
                      .dexieCastToPromise(
                        s
                          .until(function (t) {
                            return i(e.$2(t));
                          })
                          .toArray(),
                      )
                      .then(function (t) {
                        return e.asyncViewMap(
                          t,
                          a == null ? void 0 : a.shouldDecrypt,
                        );
                      }))
                  : (u = o("WAWebDexieCastTypes")
                      .dexieCastToPromise(s.toArray())
                      .then(function (t) {
                        return e.asyncViewMap(
                          t,
                          a == null ? void 0 : a.shouldDecrypt,
                        );
                      }));
            }
            return u.catch(function (t) {
              throw (e.$1(t, "between"), t);
            });
          }),
          (a.betweenCount = function (t, n, r, a) {
            var e = this,
              i = this.table
                .where(
                  o("WAWebIdbHelpers").formatQueryIndex(t, this.tableColumns),
                )
                .between(
                  n,
                  r,
                  !!(a != null && a.lowerInclusive),
                  !!(a != null && a.upperInclusive),
                );
            return o("WAWebDexieCastTypes")
              .dexieCastToPromise(
                o("WAWebIdbHelpers").applyOptions(i, a).count(),
              )
              .catch(function (t) {
                throw (e.$1(t, "betweenCount"), t);
              });
          }),
          (a.forEachSortedBy = function (t, r) {
            var e = this;
            return this.table
              .orderBy(t)
              .each(
                (function () {
                  var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (t) {
                      var n = e.$2(t),
                        o = yield e.$4(n);
                      return r(o);
                    },
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              )
              .catch(function (t) {
                throw (e.$1(t, "forEachSortedBy"), t);
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
                      return t(o);
                    },
                  );
                  return function (e) {
                    return r.apply(this, arguments);
                  };
                })(),
              )
              .catch(function (t) {
                throw (e.$1(t, "forEach"), t);
              });
          }),
          (a.clear = function () {
            var e = this;
            return o("WAWebDexieCastTypes")
              .dexieCastToPromise(this.table.clear())
              .catch(function (t) {
                throw (e.$1(t, "clear"), t);
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
              r("WANullthrows")(this.tableColumns.get(t)),
              r("WANullthrows")(this.tableEncryptedColumns.get(t)),
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
