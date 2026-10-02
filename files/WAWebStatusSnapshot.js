__d(
  "WAWebStatusSnapshot",
  [
    "Promise",
    "WABackoffUtils",
    "WACustomError",
    "WALogger",
    "WAPromiseDelays",
    "WAPromiseLoop",
    "WAWebContactGetters",
    "WAWebMsgModelUtils",
    "WAWebStatusCollection",
    "WAWebStatusGatingUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "InvalidStatusIterator"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WACustomError").CustomError),
      f = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "StatusLoadingError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WACustomError").CustomError),
      g = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "StatusMsgNotFound"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WACustomError").CustomError),
      h = function (r) {
        var t = this,
          a = r.continuousPlay,
          i = a === void 0 ? !1 : a,
          l = r.msgKey,
          h = r.prioritizeInitialStatus,
          y = h === void 0 ? !1 : h,
          C = r.status;
        if (
          ((this.$2 = function (e, n) {
            var r = t.$6().map(function (e) {
                return t.$4(e);
              }),
              a = r.findIndex(function (t) {
                return t.status === e;
              });
            return n && a > 0
              ? [r[a]].concat(r.slice(0, a), r.slice(a + 1))
              : (a > 0 &&
                  r.length >=
                    o("WAWebStatusGatingUtils").statusChainUnseenMinPog() &&
                  o("WAWebStatusGatingUtils").isStatusAddUnseenAtEndEnabled() &&
                  (r = [].concat(r.slice(a), r.slice(0, a))),
                r);
          }),
          (this.$3 = function (e, n) {
            var r = t.$6();
            return n
              ? [e].concat(r).map(function (e) {
                  return t.$4(e);
                })
              : r.length > 0 &&
                  r.length >=
                    o("WAWebStatusGatingUtils").statusChainUnseenMinPog() &&
                  o("WAWebStatusGatingUtils").isStatusAddUnseenAtEndEnabled()
                ? [e].concat(r).map(function (e) {
                    return t.$4(e);
                  })
                : [t.$4(e)];
          }),
          (this.getChainableContactStatuses = function () {
            return t.$6().filter(function (e) {
              return !o("WAWebContactGetters").getIsMe(e.contact);
            });
          }),
          (this.appendStatuses = function (e) {
            var n = new Set(
              t.statuses.map(function (e) {
                return e.status;
              }),
            );
            e.forEach(function (e) {
              n.has(e) || (t.statuses.push(t.$4(e)), n.add(e));
            });
          }),
          (this.$6 = function () {
            return o("WAWebStatusCollection")
              .StatusCollection.getUnexpired({ containsAnyUnreadStatus: !0 })
              .filter(function (e) {
                return !o("WAWebContactGetters").getCalculatedStatusMute(
                  e.contact,
                );
              });
          }),
          (this.$4 = function (e) {
            var n = e.msgs.getModelsArray();
            return {
              status: e,
              totalCount: e.totalCount,
              unreadCount: e.unreadCount,
              msgs: n,
              readMsgKeys: t.$1(n),
            };
          }),
          (this.$1 = function (e) {
            return new Set(o("WAWebMsgModelUtils").getReadMsgKeys(e));
          }),
          (this.$5 = function () {
            var n = 0,
              r = 0,
              a = 0;
            (t.statuses.forEach(function (e) {
              ((n += e.totalCount), (r += e.unreadCount), (a += e.msgs.length));
            }),
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " statuses - Total count: ",
                    ", unread count: ",
                    ", msgs length: ",
                    "",
                  ])),
                t.statuses.length,
                n,
                r,
                a,
              ));
          }),
          (this.getFirstUnread = function (e, r, a) {
            var i = t.statuses.findIndex(function (t) {
              return t.status === e;
            });
            if (i !== -1) {
              var l = t.statuses[i],
                u = l.readMsgKeys,
                c;
              return a
                ? ((c = l.msgs
                    ? l.msgs.findIndex(function (e) {
                        return a && e.id.toString() === a.toString();
                      })
                    : -1),
                  c >= 0
                    ? (p || (p = n("Promise"))).resolve({
                        msgIdx: c,
                        statusIdx: i,
                      })
                    : (p || (p = n("Promise"))).reject(new _()))
                : ((c = l.msgs
                    ? l.msgs.findIndex(function (e) {
                        return !u.has(e.id.toString());
                      })
                    : -1),
                  c === -1 && e.msgs.msgLoadState.noEarlierMsgs
                    ? (r ? (c = 0) : (c = l.msgs.length - 1),
                      (p || (p = n("Promise"))).resolve({
                        msgIdx: c,
                        statusIdx: i,
                      }))
                    : c !== -1
                      ? (p || (p = n("Promise"))).resolve({
                          msgIdx: c,
                          statusIdx: i,
                        })
                      : l.unreadCount === 0 && r && l.msgs.length > 0
                        ? (p || (p = n("Promise"))).resolve({
                            msgIdx: 0,
                            statusIdx: i,
                          })
                        : t
                            .$7(e)
                            .then(function () {
                              return t.getFirstUnread(e, r, a);
                            })
                            .catch(function (e) {
                              throw (
                                o("WALogger").WARN(
                                  s ||
                                    (s =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "error while getting first unread status: ",
                                        "",
                                      ])),
                                  String(e),
                                ),
                                new _()
                              );
                            }));
            }
            return (p || (p = n("Promise"))).reject(new _());
          }),
          (this.hasNext = function (e) {
            var n = t.statuses[e.statusIdx];
            return e.msgIdx + 1 < n.totalCount
              ? !0
              : e.statusIdx + 1 < t.statuses.length;
          }),
          (this.getNext = function (e) {
            var r = t.statuses[e.statusIdx],
              a = r.status;
            if (e.msgIdx + 1 < r.totalCount && e.msgIdx + 1 < r.msgs.length)
              return (p || (p = n("Promise"))).resolve({
                msgIdx: e.msgIdx + 1,
                statusIdx: e.statusIdx,
              });
            if (e.msgIdx + 1 < r.totalCount)
              return a.msgs.msgLoadState.noEarlierMsgs
                ? (o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[status] loaded ",
                        "/",
                        " msgs, noEarlierMsgs, re-syncing",
                      ])),
                    r.msgs.length,
                    r.totalCount,
                  ),
                  o("WAWebStatusCollection")
                    .StatusCollection.sync()
                    .catch(function (e) {
                      o("WALogger").WARN(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "error while syncing statuses: ",
                            "",
                          ])),
                        String(e),
                      );
                    }),
                  (p || (p = n("Promise"))).reject(new _()))
                : t
                    .$7(a)
                    .then(function () {
                      return t.getNext(e);
                    })
                    .catch(function (n) {
                      if (
                        (o("WALogger").WARN(
                          d ||
                            (d = babelHelpers.taggedTemplateLiteralLoose([
                              "error while loading more status msgs: ",
                              "",
                            ])),
                          String(n),
                        ),
                        e.statusIdx + 1 < t.statuses.length)
                      ) {
                        var r = t.statuses[e.statusIdx + 1].status;
                        return t.getFirstUnread(r, !0);
                      }
                      throw new _();
                    });
            if (e.statusIdx + 1 < t.statuses.length) {
              var i = t.statuses[e.statusIdx + 1].status;
              return t.getFirstUnread(i, !0);
            }
            return (p || (p = n("Promise"))).reject(new _());
          }),
          (this.hasPrev = function (e) {
            return e.msgIdx > 0 ? !0 : e.statusIdx > 0;
          }),
          (this.getPrev = function (e) {
            if (e.msgIdx > 0)
              return (p || (p = n("Promise"))).resolve({
                msgIdx: e.msgIdx - 1,
                statusIdx: e.statusIdx,
              });
            if (e.statusIdx > 0) {
              var r = t.statuses[e.statusIdx - 1].status;
              return t.getFirstUnread(r, !1);
            }
            return (p || (p = n("Promise"))).reject(new _());
          }),
          (this.statusAt = function (e, r) {
            var a = t.statuses[e.statusIdx],
              i = a.status;
            return r < a.msgs.length
              ? (p || (p = n("Promise"))).resolve({
                  msgIdx: r,
                  statusIdx: e.statusIdx,
                })
              : i.msgs.msgLoadState.noEarlierMsgs
                ? (p || (p = n("Promise"))).reject(new _())
                : t
                    .$7(i)
                    .then(function () {
                      return t.statusAt(e, r);
                    })
                    .catch(function (e) {
                      throw (
                        o("WALogger").WARN(
                          m ||
                            (m = babelHelpers.taggedTemplateLiteralLoose([
                              "error while loading more status msgs: ",
                              "",
                            ])),
                          String(e),
                        ),
                        new _()
                      );
                    });
          }),
          (this.$7 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var r = yield o("WAPromiseLoop").promiseLoop(
                  (function () {
                    var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (n, r, a) {
                        var i = o("WAPromiseDelays").delayMs(
                          o("WABackoffUtils").expBackoff(a, 12e4, 1e3, 0.1),
                        );
                        try {
                          yield e.loadMore();
                          var l = t.statuses.findIndex(function (t) {
                            return t.status === e;
                          });
                          if (l !== -1) {
                            var s = t.statuses[l],
                              u = s.totalCount,
                              c = e.msgs.getModelsArray().slice(0, u),
                              d = t.$1(c);
                            ((s.msgs = c),
                              (s.readMsgKeys = new Set(
                                [].concat(s.readMsgKeys, d),
                              )),
                              n(!0));
                          } else if (a >= 4) n(!1);
                          else return i;
                        } catch (e) {
                          if (a >= 4) n(!1);
                          else return i;
                        }
                      },
                    );
                    return function (e, t, n) {
                      return r.apply(this, arguments);
                    };
                  })(),
                );
                if (!r) throw new f();
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()),
          l)
        ) {
          var b = C.msgs.getModelsArray().find(function (e) {
            return l && e.id.toString() === l.toString();
          });
          if (!b) throw new g();
          this.statuses = [
            {
              status: C,
              totalCount: 1,
              unreadCount: 0,
              msgs: [b],
              readMsgKeys: this.$1([b]),
            },
          ];
        } else
          i &&
          (!o("WAWebContactGetters").getIsMe(C.contact) || y) &&
          !o("WAWebContactGetters").getCalculatedStatusMute(C.contact)
            ? (this.statuses =
                C.unreadCount > 0 &&
                !o("WAWebContactGetters").getIsMe(C.contact)
                  ? this.$2(C, y)
                  : this.$3(C, y))
            : (this.statuses = [this.$4(C)]);
        this.$5();
      };
    ((l.InvalidStatusIterator = _),
      (l.StatusLoadingError = f),
      (l.StatusMsgNotFound = g),
      (l.StatusSnapshot = h));
  },
  98,
);
