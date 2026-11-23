__d(
  "WAWebStatusSnapshot",
  [
    "WABackoffUtils",
    "WACustomError",
    "WALogger",
    "WAPromiseDelays",
    "WAPromiseLoop",
    "WAWebContactGetters",
    "WAWebMsgModelUtils",
    "WAWebStatusCollection",
    "WAWebStatusGatingUtils",
    "WAWebStatusListOrder",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = (function (e) {
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
      _ = (function (e) {
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
      f = (function (e) {
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
      g = function (n) {
        var t = this,
          r = n.continuousPlay,
          a = r === void 0 ? !1 : r,
          i = n.msgKey,
          l = n.prioritizeInitialStatus,
          g = l === void 0 ? !1 : l,
          h = n.status;
        if (
          ((this.$2 = function (e) {
            if (!o("WAWebStatusGatingUtils").isStatusViewerRefreshM4Enabled())
              return null;
            var n = o("WAWebStatusListOrder").getStatusListOrder();
            return n.includes(e)
              ? n.map(function (e) {
                  return t.$5(e);
                })
              : null;
          }),
          (this.$3 = function (e, n) {
            var r = t.$7().map(function (e) {
                return t.$5(e);
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
          (this.$4 = function (e, n) {
            var r = t.$7();
            return n
              ? [e].concat(r).map(function (e) {
                  return t.$5(e);
                })
              : r.length > 0 &&
                  r.length >=
                    o("WAWebStatusGatingUtils").statusChainUnseenMinPog() &&
                  o("WAWebStatusGatingUtils").isStatusAddUnseenAtEndEnabled()
                ? [e].concat(r).map(function (e) {
                    return t.$5(e);
                  })
                : [t.$5(e)];
          }),
          (this.getChainableContactStatuses = function () {
            return t.$7().filter(function (e) {
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
              n.has(e) || (t.statuses.push(t.$5(e)), n.add(e));
            });
          }),
          (this.$7 = function () {
            return o("WAWebStatusCollection")
              .StatusCollection.getUnexpired({ containsAnyUnreadStatus: !0 })
              .filter(function (e) {
                return !o("WAWebContactGetters").getCalculatedStatusMute(
                  e.contact,
                );
              });
          }),
          (this.$5 = function (e) {
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
          (this.$6 = function () {
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
          (this.getFirstUnread = function (e, n, r) {
            var a = t.statuses.findIndex(function (t) {
              return t.status === e;
            });
            if (a !== -1) {
              var i = t.statuses[a],
                l = i.readMsgKeys,
                u;
              return r
                ? ((u = i.msgs
                    ? i.msgs.findIndex(function (e) {
                        return r && e.id.toString() === r.toString();
                      })
                    : -1),
                  u >= 0
                    ? Promise.resolve({ msgIdx: u, statusIdx: a })
                    : Promise.reject(new p()))
                : ((u = i.msgs
                    ? i.msgs.findIndex(function (e) {
                        return !l.has(e.id.toString());
                      })
                    : -1),
                  u === -1 && e.msgs.msgLoadState.noEarlierMsgs
                    ? (n ? (u = 0) : (u = i.msgs.length - 1),
                      Promise.resolve({ msgIdx: u, statusIdx: a }))
                    : u !== -1
                      ? Promise.resolve({ msgIdx: u, statusIdx: a })
                      : i.unreadCount === 0 && n && i.msgs.length > 0
                        ? Promise.resolve({ msgIdx: 0, statusIdx: a })
                        : t
                            .$8(e)
                            .then(function () {
                              return t.getFirstUnread(e, n, r);
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
                                new p()
                              );
                            }));
            }
            return Promise.reject(new p());
          }),
          (this.hasNext = function (e) {
            var n = t.statuses[e.statusIdx];
            return e.msgIdx + 1 < n.totalCount
              ? !0
              : e.statusIdx + 1 < t.statuses.length;
          }),
          (this.getNext = function (e) {
            var n = t.statuses[e.statusIdx],
              r = n.status;
            if (e.msgIdx + 1 < n.totalCount && e.msgIdx + 1 < n.msgs.length)
              return Promise.resolve({
                msgIdx: e.msgIdx + 1,
                statusIdx: e.statusIdx,
              });
            if (e.msgIdx + 1 < n.totalCount)
              return r.msgs.msgLoadState.noEarlierMsgs
                ? (o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[status] loaded ",
                        "/",
                        " msgs, noEarlierMsgs, re-syncing",
                      ])),
                    n.msgs.length,
                    n.totalCount,
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
                  Promise.reject(new p()))
                : t
                    .$8(r)
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
                      throw new p();
                    });
            if (e.statusIdx + 1 < t.statuses.length) {
              var a = t.statuses[e.statusIdx + 1].status;
              return t.getFirstUnread(a, !0);
            }
            return Promise.reject(new p());
          }),
          (this.hasPrev = function (e) {
            return e.msgIdx > 0 ? !0 : e.statusIdx > 0;
          }),
          (this.getPrev = function (e) {
            if (e.msgIdx > 0)
              return Promise.resolve({
                msgIdx: e.msgIdx - 1,
                statusIdx: e.statusIdx,
              });
            if (e.statusIdx > 0) {
              var n = t.statuses[e.statusIdx - 1].status;
              return t.getFirstUnread(n, !1);
            }
            return Promise.reject(new p());
          }),
          (this.statusAt = function (e, n) {
            var r = t.statuses[e.statusIdx],
              a = r.status;
            return n < r.msgs.length
              ? Promise.resolve({ msgIdx: n, statusIdx: e.statusIdx })
              : a.msgs.msgLoadState.noEarlierMsgs
                ? Promise.reject(new p())
                : t
                    .$8(a)
                    .then(function () {
                      return t.statusAt(e, n);
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
                        new p()
                      );
                    });
          }),
          (this.$8 = async function (e) {
            var n = await o("WAPromiseLoop").promiseLoop(
              async function (n, r, a) {
                var i = o("WAPromiseDelays").delayMs(
                  o("WABackoffUtils").expBackoff(a, 12e4, 1e3, 0.1),
                );
                try {
                  await e.loadMore();
                  var l = t.statuses.findIndex(function (t) {
                    return t.status === e;
                  });
                  if (l !== -1) {
                    var s = t.statuses[l],
                      u = s.totalCount,
                      c = e.msgs.getModelsArray().slice(0, u),
                      d = t.$1(c);
                    ((s.msgs = c),
                      (s.readMsgKeys = new Set([].concat(s.readMsgKeys, d))),
                      n(!0));
                  } else if (a >= 4) n(!1);
                  else return i;
                } catch (e) {
                  if (a >= 4) n(!1);
                  else return i;
                }
              },
            );
            if (!n) throw new _();
          }),
          i)
        ) {
          var y = h.msgs.getModelsArray().find(function (e) {
            return i && e.id.toString() === i.toString();
          });
          if (!y) throw new f();
          this.statuses = [
            {
              status: h,
              totalCount: 1,
              unreadCount: 0,
              msgs: [y],
              readMsgKeys: this.$1([y]),
            },
          ];
        } else if (
          a &&
          (!o("WAWebContactGetters").getIsMe(h.contact) || g) &&
          !o("WAWebContactGetters").getCalculatedStatusMute(h.contact)
        ) {
          var C = g ? null : this.$2(h);
          this.statuses =
            C != null
              ? C
              : h.unreadCount > 0 &&
                  !o("WAWebContactGetters").getIsMe(h.contact)
                ? this.$3(h, g)
                : this.$4(h, g);
        } else this.statuses = [this.$5(h)];
        this.$6();
      };
    ((l.InvalidStatusIterator = p),
      (l.StatusLoadingError = _),
      (l.StatusMsgNotFound = f),
      (l.StatusSnapshot = g));
  },
  98,
);
