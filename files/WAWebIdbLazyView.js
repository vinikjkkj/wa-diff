__d(
  "WAWebIdbLazyView",
  [
    "Promise",
    "WAWebBrokerGlobalAppState",
    "WAWebDBStats",
    "WAWebMiscErrors",
    "WAWebStorageCmd",
    "WAWebStorageErrorHandlingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        function t(e, t, n) {
          ((this.$1 = e),
            (this.$2 = t),
            (this.$3 = n),
            o("WAWebDBStats").dbStats.initTable(this.$2));
        }
        var a = t.prototype;
        return (
          (a.$4 = function (t) {
            return Array.isArray(t) ? t.length : t === void 0 ? 0 : 1;
          }),
          (a.getView_TESTONLY = function () {
            return this.$1;
          }),
          (a.$5 = function (a) {
            var t = this;
            if (r("WAWebBrokerGlobalAppState").isLogoutInProgress)
              return (e || (e = n("Promise"))).reject(
                new (o("WAWebMiscErrors").DbOnLogoutAbort)(
                  "dropping db read operation due to logout",
                ),
              );
            var i = this.$1(),
              l = self.performance.now();
            return a(i)
              .then(function (e) {
                return (
                  o("WAWebDBStats").dbStats.trackReadTransaction(
                    t.$2,
                    l,
                    t.$4(e),
                  ),
                  e
                );
              })
              .catch(function (e) {
                throw e;
              });
          }),
          (a.$6 = function (t) {
            throw (
              o("WAWebStorageErrorHandlingUtils").isQuotaExceededError(t) &&
                (o("WAWebStorageCmd").StorageCmd.trigger(
                  "storage_not_enough_space",
                ),
                o("WAWebStorageErrorHandlingUtils").reportQuotaExceededError(
                  t,
                )),
              t
            );
          }),
          (a.$7 = function (a, i) {
            var t = this;
            if (
              (i === void 0 && (i = !1),
              i !== !0 && r("WAWebBrokerGlobalAppState").isLogoutInProgress)
            )
              return (e || (e = n("Promise"))).reject(
                new (o("WAWebMiscErrors").DbOnLogoutAbort)(
                  "dropping db write operation due to logout",
                ),
              );
            var l = self.performance.now(),
              s = this.$1();
            return a(s)
              .then(function (e) {
                return (
                  o("WAWebDBStats").dbStats.trackWriteTransaction(t.$2, l),
                  e
                );
              })
              .catch(function (e) {
                return t.$6(e);
              });
          }),
          (a.create = function (t) {
            return this.$7(function (e) {
              return e.create(t);
            });
          }),
          (a.preflightEncryptSingleRecord = function (t) {
            return this.$7(function (e) {
              return e.preflightEncryptSingleRecord(t);
            }, !1);
          }),
          (a.postflightDecryptSingleRecord = function (t) {
            return this.$7(function (e) {
              return e.postflightDecryptSingleRecord(t);
            }, !1);
          }),
          (a.bulkCreateWith_ALREADY_ENCRYPTED_RECORDS_ONLY = function (t, n) {
            return (
              n === void 0 && (n = !1),
              this.$7(function (e) {
                return e.bulkCreateWith_ALREADY_ENCRYPTED_RECORDS_ONLY(t, n);
              })
            );
          }),
          (a.bulkCreateOrReplace_ALREADY_ENCRYPTED_RECORDS_ONLY = function (t) {
            return this.$7(function (e) {
              return e.bulkCreateOrReplace_ALREADY_ENCRYPTED_RECORDS_ONLY(t);
            });
          }),
          (a.createOrReplace = function (t) {
            return this.$7(function (e) {
              return e.createOrReplace(t);
            });
          }),
          (a.createOrMerge = function (t, n) {
            return this.$7(function (e) {
              return e.createOrMerge(t, n);
            });
          }),
          (a.get = function (t, n) {
            return this.$5(function (e) {
              return e.get(t, n);
            });
          }),
          (a.merge = function (t, n) {
            return this.$7(function (e) {
              return e.merge(t, n);
            });
          }),
          (a.remove = function (t) {
            return this.$7(function (e) {
              return e.remove(t);
            });
          }),
          (a.bulkCreate = function (t) {
            return this.$7(function (e) {
              return e.bulkCreate(t);
            });
          }),
          (a.bulkCreateOrReplace = function (t) {
            return this.$7(function (e) {
              return e.bulkCreateOrReplace(t);
            });
          }),
          (a.bulkCreateOrMerge = function (t) {
            return this.$7(function (e) {
              return e.bulkCreateOrMerge(t);
            });
          }),
          (a.bulkMergeOnly = function (t) {
            return this.$7(function (e) {
              return e.bulkMergeOnly(t);
            });
          }),
          (a.bulkGet = function (t, n) {
            return this.$5(function (e) {
              return e.bulkGet(t, n);
            });
          }),
          (a.bulkRemoveByIndex = function (t, n) {
            return this.$7(function (e) {
              return e.bulkRemoveByIndex(t, n);
            });
          }),
          (a.bulkRemove = function (t) {
            return this.$7(function (e) {
              return e.bulkRemove(t);
            });
          }),
          (a.betweenCount = function (t, n, r, o) {
            return this.$7(function (e) {
              return e.betweenCount(t, n, r, o);
            });
          }),
          (a.bulkDeleteRange = function (t, n, r, o) {
            return this.$7(function (e) {
              return e.bulkDeleteRange(t, n, r);
            });
          }),
          (a.all = function (t, n) {
            return this.$5(function (e) {
              return e.all(t, n);
            });
          }),
          (a.allPrimaryKeys = function () {
            return this.$5(function (e) {
              return e.allPrimaryKeys();
            });
          }),
          (a.count = function () {
            return this.$5(function (e) {
              return e.count();
            });
          }),
          (a.equals = function (t, n, r) {
            return this.$5(function (e) {
              return e.equals(t, n, r);
            });
          }),
          (a.equalsPrimaryKeys = function (t, n, r) {
            return this.$5(function (e) {
              return e.equalsPrimaryKeys(t, n, r);
            });
          }),
          (a.anyOf = function (t, n, r) {
            return this.$5(function (e) {
              return e.anyOf(t, n, r);
            });
          }),
          (a.inAnyRange = function (t, n, r) {
            return this.$5(function (e) {
              return e.inAnyRange(t, n, r);
            });
          }),
          (a.startsWithAnyOf = function (t, n, r) {
            return this.$5(function (e) {
              return e.startsWithAnyOf(t, n, r);
            });
          }),
          (a.greaterThan = function (t, n, r) {
            return this.$5(function (e) {
              return e.greaterThan(t, n, r);
            });
          }),
          (a.lessThan = function (t, n, r) {
            return this.$5(function (e) {
              return e.lessThan(t, n, r);
            });
          }),
          (a.between = function (t, n, r, o, a, i) {
            return this.$5(function (e) {
              return e.between(t, n, r, o, a, i);
            });
          }),
          (a.forEachSortedBy = function (t, n) {
            return this.$5(function (e) {
              return e.forEachSortedBy(t, n);
            });
          }),
          (a.forEach = function (t) {
            return this.$5(function (e) {
              return e.forEach(t);
            });
          }),
          (a.clear = function (t) {
            return (
              t === void 0 && (t = !1),
              this.$7(function (e) {
                return e.clear();
              }, t)
            );
          }),
          (a.addHook = function (t) {
            return this.$1().addHook(t);
          }),
          (a.setUpdateListener = function (t, n) {
            (n === void 0 && (n = null), this.$1().setUpdateListener(t, n));
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
