__d(
  "WAWebIdb",
  [
    "invariant",
    "WALogger",
    "WANullthrows",
    "WAWeb-dexie",
    "WAWebAppTracker",
    "WAWebDexieCastTypes",
    "WAWebGlobals",
    "WAWebIdbEncryption",
    "WAWebIdbHelpers",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = "Key already exists in the object store";
    ((r("WAWeb-dexie").Promise.PSD.onunhandled = function () {}),
      (r("WAWeb-dexie").Promise.PSD.txRelaxedDurabilityEnabled = !0));
    var m = (function () {
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
        var n = t.prototype;
        return (
          (n.$1 = function (t, n, r) {
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
          (n.asyncView = async function (t, n) {
            n === void 0 && (n = !0);
            var e = this.$2(t),
              r = this.$3() && n ? await this.$4(e) : e;
            return this.view(r);
          }),
          (n.$2 = function (t) {
            return t;
          }),
          (n.$5 = function (t, n) {
            return (n === void 0 && (n = !1), t);
          }),
          (n.$4 = async function (t) {
            var e = this;
            typeof t == "object" || s(0, 56350);
            var n = Array.from(
              this.tableEncryptedColumns.entries(),
              function (n) {
                var r = n[0],
                  a = n[1],
                  i = t[r];
                return !(i != null && i._data) || !(i != null && i.iv)
                  ? i
                  : o("WAWebIdbEncryption")
                      .decryptDbMaterial(
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
            return (await Promise.all(n), t);
          }),
          (n.$6 = function (t) {
            var e = this,
              n = Array.from(
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
            return Promise.all(n).then(function (e) {
              return t;
            });
          }),
          (n.$7 = async function (t, n) {
            n === void 0 && (n = !1);
            var e = await this.$8(t),
              r = this.$5(e, n);
            return r;
          }),
          (n.$9 = async function (t) {
            var e = this,
              n = await this.$10(t),
              r = n.map(function (t) {
                return e.$5(t);
              });
            return r;
          }),
          (n.$11 = async function (t) {
            var e = await this.$7(t);
            return this.table.add(e);
          }),
          (n.$12 = async function (t) {
            var e = await this.$7(t);
            return this.table.put(e);
          }),
          (n.$13 = async function (t) {
            var e = await this.$9(t);
            return this.table.bulkAdd(e);
          }),
          (n.$14 = function (t) {
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
          (n.$10 = function (t) {
            var e = this;
            if (this.$3()) {
              var n = [],
                r = t.map(function (t, r) {
                  return e.$6(t).then(function (e) {
                    n[r] = e;
                  });
                });
              return Promise.all(r).then(function () {
                return n;
              });
            }
            return Promise.resolve(t);
          }),
          (n.$8 = async function (t) {
            if (this.$3()) {
              var e = await this.$6(t);
              return e;
            }
            return t;
          }),
          (n.asyncViewMap = function (t, n) {
            var e = this;
            if ((n === void 0 && (n = !0), !this.$3() || !n))
              return Promise.resolve(
                t.map(function (t) {
                  return t ? e.view(e.$2(t)) : null;
                }),
              );
            var a = t.map(function (t) {
              return t != null ? e.asyncView(t, n) : Promise.resolve(null);
            });
            return o("WAWebDexieCastTypes").dexieCastToPromise(
              r("WAWeb-dexie").currentTransaction == null
                ? Promise.all(a)
                : r("WAWeb-dexie").waitFor(Promise.all(a)),
            );
          }),
          (n.preflightEncryptSingleRecord = function (t) {
            var e = this;
            return (
              Object.keys(t).forEach(function (n) {
                e.tableEncryptedColumns.has(n) || delete t[n];
              }),
              this.$6(t)
            );
          }),
          (n.postflightDecryptSingleRecord = async function (t) {
            var e = await this.$4(t);
            return this.view(e);
          }),
          (n.bulkCreateWith_ALREADY_ENCRYPTED_RECORDS_ONLY = function (t, n) {
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
                  t.includes(d)
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
          (n.bulkCreateOrReplace_ALREADY_ENCRYPTED_RECORDS_ONLY = function (t) {
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
          (n.create = function (t) {
            var e,
              n = this;
            (e = this.updateListener) == null || e.call(this, [this.$15(t)]);
            var r = this.propFilter(t);
            if (!this.$3()) {
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
          (n.createOrReplace = function (t) {
            var e,
              n = this;
            (e = this.updateListener) == null || e.call(this, [this.$15(t)]);
            var r = this.propFilter(t);
            if (!this.$3()) {
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
          (n.createOrMerge = async function (t, n) {
            var e,
              r = this;
            (e = this.updateListener) == null || e.call(this, [t], [n]);
            var a = this.propFilter(n),
              i = this.$3() ? await this.$7(a, !0) : this.$5(a, !0);
            return o("WAWebDexieCastTypes")
              .dexieCastToPromise(
                this.db
                  .transaction("rw", this.table, function () {
                    return r.table
                      .where(":id")
                      .equals(t)
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
          }),
          (n.get = function (t, n) {
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
          (n.merge = async function (t, n, a) {
            var e = (a == null ? void 0 : a.usePropsFilter) === !0;
            if (!e) {
              var i;
              (i = this.updateListener) == null || i.call(this, [t]);
            }
            var l = this.propFilter(n),
              s = this.$3() ? await this.$7(l, !0) : this.$5(l, !0);
            if (e) {
              var u;
              (u = this.updateListener) == null || u.call(this, [t], [n]);
            }
            try {
              if (
                (await o("WAWebDexieCastTypes").dexieCastToPromise(
                  this.table.update(t, s),
                ),
                !e)
              ) {
                var c;
                (c = this.updateListener) == null || c.call(this, [t]);
              }
            } catch (e) {
              var d = r("getErrorSafe")(e);
              throw (this.$1(d, "merge", { writeData: s }), d);
            }
          }),
          (n.remove = async function (t) {
            try {
              await o("WAWebDexieCastTypes").dexieCastToPromise(
                this.table.delete(t),
              );
            } catch (t) {
              var e = r("getErrorSafe")(t);
              throw (this.$1(e, "remove"), e);
            }
          }),
          (n.bulkCreate = function (t) {
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
          (n.bulkCreateOrReplace = function (t) {
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
          (n.bulkCreateOrMerge = async function (t) {
            return this.$16(t);
          }),
          (n.bulkMergeOnly = async function (t) {
            return this.$16(t, !1);
          }),
          (n.$16 = async function (n, r) {
            var t,
              a = this;
            if ((r === void 0 && (r = !0), n.length === 0))
              return o("WAWebDexieCastTypes").dexieCastToPromise();
            var i = self.performance.now(),
              l = {
                encrypted: null,
                serialized: null,
                transaction: null,
                modified: null,
                put: null,
              };
            (o("WAWebAppTracker").AppTracker.start(
              o("WAWebAppTracker").AppTrackerType.BulkCreateOrMerge,
            ),
              (t = this.updateListener) == null ||
                t.call(
                  this,
                  n.map(function (e) {
                    return a.$15(e);
                  }),
                  n,
                ));
            var c = new Map(),
              d = this.$17(),
              m = this,
              p = await this.$10(n);
            ((l.encrypted = Math.round(self.performance.now() - i)),
              p.forEach(function (e) {
                var t = a.propFilter(e),
                  n = a.$5(t, !0);
                (d in n || s(0, 97881), c.set(n[d], n));
              }),
              (l.serialized = Math.round(self.performance.now() - i)));
            async function _(e) {
              for (
                var t = Array.from(e.keys()),
                  n = 200,
                  r = async function () {
                    var r = t.slice(a, a + n),
                      i = await o("WAWebDexieCastTypes").dexieCastToPromise(
                        m.table.bulkGet(r),
                      ),
                      l = [];
                    (i.forEach(function (t, n) {
                      if (t != null) {
                        var o = r[n],
                          a = e.get(o);
                        a != null &&
                          (Object.assign(t, a), l.push(t), e.delete(o));
                      }
                    }),
                      l.length > 0 && (await m.table.bulkPut(l)));
                  },
                  a = 0;
                a < t.length;
                a += n
              )
                await r();
              return Array.from(e.values());
            }
            async function f(e) {
              var t = m.table.where(":id").anyOf(Array.from(e.keys()));
              await t.modify(function (t) {
                (Object.assign(t, e.get(t[d])), e.delete(t[d]));
              });
              var n = Array.from(e.values());
              return n;
            }
            return o("WAWebDexieCastTypes")
              .dexieCastToPromise(
                this.db.transaction("rw", this.table, function () {
                  l.transaction = Math.round(self.performance.now() - i);
                  var t = o("WAWebGlobals").getEnableImprovedBulkMerge()
                    ? _(c)
                    : f(c);
                  return t.then(function (t) {
                    if (
                      ((l.modified = Math.round(self.performance.now() - i)),
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
                          a.table.name,
                        );
                      return;
                    }
                    return a.table.bulkPut(t);
                  });
                }),
              )
              .catch(function (e) {
                throw (
                  a.$1(
                    e,
                    "bulkMaybeCreateOrMerge(shouldCreate=" + r.toString() + ")",
                    { writeData: n },
                  ),
                  e
                );
              })
              .finally(function () {
                var e;
                (o("WAWebAppTracker").AppTracker.stop(
                  o("WAWebAppTracker").AppTrackerType.BulkCreateOrMerge,
                ),
                  (l.put = Math.round(self.performance.now() - i)),
                  l.put > 5e3 &&
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
                        a.table.name,
                        n.length,
                        l.put,
                        l.encrypted,
                        l.serialized,
                        l.transaction,
                        l.modified,
                      )
                      .sendLogs("long-bulk-db-operation", { sampling: 0.001 }));
              });
          }),
          (n.bulkGet = function (t, n) {
            var e = this;
            return (
              n === void 0 && (n = !0),
              t.length === 0
                ? Promise.resolve([])
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
                      return e.asyncViewMap(t, n);
                    })
                    .catch(function (t) {
                      throw (e.$1(t, "bulkGet"), t);
                    })
            );
          }),
          (n.bulkRemove = function (t) {
            var e = this;
            return t.length === 0
              ? Promise.resolve()
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
          (n.bulkRemoveByIndex = function (t, n) {
            var e = this;
            return n.length === 0
              ? Promise.resolve()
              : o("WAWebDexieCastTypes")
                  .dexieCastToPromise(
                    this.table
                      .where(
                        o("WAWebIdbHelpers").formatQueryIndex(
                          t,
                          this.tableColumns,
                        ),
                      )
                      .anyOf(n)
                      .delete(),
                  )
                  .catch(function (t) {
                    throw (e.$1(t, "bulkRemoveByIndex"), t);
                  });
          }),
          (n.all = function (t, n) {
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
          (n.allPrimaryKeys = function () {
            return o("WAWebDexieCastTypes").dexieCastToPromise(
              this.table.orderBy(":id").primaryKeys(),
            );
          }),
          (n.count = function () {
            var e = this;
            return o("WAWebDexieCastTypes")
              .dexieCastToPromise(this.table.count())
              .catch(function (t) {
                throw (e.$1(t, "count"), t);
              });
          }),
          (n.bulkDeleteRange = function (t, n, r, a) {
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
          (n.equals = function (t, n, r) {
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
          (n.equalsPrimaryKeys = function (t, n, r) {
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
          (n.anyOf = function (t, n, r) {
            var e = this;
            return n.length === 0
              ? Promise.resolve([])
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
                          .anyOf(n),
                        r,
                      )
                      .distinct()
                      .toArray(),
                  )
                  .then(function (t) {
                    return e.asyncViewMap(
                      t,
                      r == null ? void 0 : r.shouldDecrypt,
                    );
                  })
                  .catch(function (t) {
                    throw (e.$1(t, "anyOf"), t);
                  });
          }),
          (n.anyOfPrimaryKeys = function (t, n, r) {
            var e = this;
            return n.length === 0
              ? Promise.resolve([])
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
                          .anyOf(n),
                        r,
                      )
                      .distinct()
                      .primaryKeys(),
                  )
                  .catch(function (t) {
                    throw (e.$1(t, "anyOfPrimaryKeys"), t);
                  });
          }),
          (n.inAnyRange = function (t, n, r) {
            var e = this;
            return n.length === 0
              ? Promise.resolve([])
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
                          .inAnyRange(n),
                        r,
                      )
                      .distinct()
                      .toArray(),
                  )
                  .then(function (t) {
                    return e.asyncViewMap(
                      t,
                      r == null ? void 0 : r.shouldDecrypt,
                    );
                  })
                  .catch(function (t) {
                    throw (e.$1(t, "inAnyRange"), t);
                  });
          }),
          (n.startsWithAnyOf = function (t, n, r) {
            var e = this;
            return n.length === 0
              ? Promise.resolve([])
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
                          .startsWithAnyOf(n),
                        r,
                      )
                      .distinct()
                      .toArray(),
                  )
                  .then(function (t) {
                    return e.asyncViewMap(
                      t,
                      r == null ? void 0 : r.shouldDecrypt,
                    );
                  })
                  .catch(function (t) {
                    throw (e.$1(t, "startsWithAnyOf"), t);
                  });
          }),
          (n.greaterThan = function (t, n, r) {
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
          (n.lessThan = function (t, n, r) {
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
          (n.between = function (t, n, r, a, i, l) {
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
          (n.betweenCount = function (t, n, r, a) {
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
          (n.forEachSortedBy = function (t, n) {
            var e = this;
            return this.table
              .orderBy(t)
              .each(async function (t) {
                var r = e.$2(t),
                  o = await e.$4(r);
                return n(o);
              })
              .catch(function (t) {
                throw (e.$1(t, "forEachSortedBy"), t);
              });
          }),
          (n.forEach = function (t) {
            var e = this;
            return this.table
              .each(async function (n) {
                var r = e.$2(n),
                  o = await e.$4(r);
                return t(o);
              })
              .catch(function (t) {
                throw (e.$1(t, "forEach"), t);
              });
          }),
          (n.clear = function () {
            var e = this;
            return o("WAWebDexieCastTypes")
              .dexieCastToPromise(this.table.clear())
              .catch(function (t) {
                throw (e.$1(t, "clear"), t);
              });
          }),
          (n.$15 = function (t) {
            var e,
              n = (e = this.updateListenerField) != null ? e : this.$17();
            return n in t ? t[n] : null;
          }),
          (n.$17 = function () {
            return this.table.schema.primKey.name;
          }),
          (n.$3 = function () {
            return this.tableEncryptedColumns.size > 0;
          }),
          (n.addHook = function (t) {
            this.table.hook(t.type, t.callback);
          }),
          (n.setUpdateListener = function (t, n) {
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
      p = (function () {
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
          (t.initialize = function (t, n, r, a) {
            a && (this.errorHandlers = a);
            var e = o("WAWebIdbHelpers").schemasToStores(
              n,
              this.tableNames,
              this.tableColumns,
              this.tableEncryptedColumns,
            );
            return (
              this.db
                .version(t + 1)
                .stores(e)
                .upgrade(function (e) {
                  if (r) {
                    var t;
                    return (t = e[r.name]) == null
                      ? void 0
                      : t.toCollection().modify(r.callback);
                  }
                }),
              Promise.resolve()
            );
          }),
          (t.open = async function () {
            await o("WAWebDexieCastTypes").dexieCastToPromise(this.db.open());
          }),
          (t.transact = function (t, n, r) {
            return (
              r === void 0 && (r = "rw"),
              o("WAWebDexieCastTypes").dexieCastToPromise(
                this.db.transaction(r, t, async function () {
                  var e = await n();
                  return e;
                }),
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
            return new m(
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
            return Promise.resolve(!0);
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
    l.default = p;
  },
  98,
);
