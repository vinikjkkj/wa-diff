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
    "asyncToGeneratorRuntime",
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
      g = function (r, a, i) {
        var t = this;
        if (
          (a === void 0 && (a = !1),
          (this.$2 = function (e) {
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
          (this.$3 = function () {
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
                    ? (m || (m = n("Promise"))).resolve({
                        msgIdx: c,
                        statusIdx: i,
                      })
                    : (m || (m = n("Promise"))).reject(new p()))
                : ((c = l.msgs
                    ? l.msgs.findIndex(function (e) {
                        return !u.has(e.id.toString());
                      })
                    : -1),
                  c === -1 && e.msgs.msgLoadState.noEarlierMsgs
                    ? (r ? (c = 0) : (c = l.msgs.length - 1),
                      (m || (m = n("Promise"))).resolve({
                        msgIdx: c,
                        statusIdx: i,
                      }))
                    : c !== -1
                      ? (m || (m = n("Promise"))).resolve({
                          msgIdx: c,
                          statusIdx: i,
                        })
                      : l.unreadCount === 0 && r && l.msgs.length > 0
                        ? (m || (m = n("Promise"))).resolve({
                            msgIdx: 0,
                            statusIdx: i,
                          })
                        : t
                            .$4(e)
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
                                new p()
                              );
                            }));
            }
            return (m || (m = n("Promise"))).reject(new p());
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
              return (m || (m = n("Promise"))).resolve({
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
                  o("WAWebStatusCollection").StatusCollection.sync(),
                  (m || (m = n("Promise"))).reject(new p()))
                : t
                    .$4(a)
                    .then(function () {
                      return t.getNext(e);
                    })
                    .catch(function (n) {
                      if (
                        (o("WALogger").WARN(
                          c ||
                            (c = babelHelpers.taggedTemplateLiteralLoose([
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
              var i = t.statuses[e.statusIdx + 1].status;
              return t.getFirstUnread(i, !0);
            }
            return (m || (m = n("Promise"))).reject(new p());
          }),
          (this.hasPrev = function (e) {
            return e.msgIdx > 0 ? !0 : e.statusIdx > 0;
          }),
          (this.getPrev = function (e) {
            if (e.msgIdx > 0)
              return (m || (m = n("Promise"))).resolve({
                msgIdx: e.msgIdx - 1,
                statusIdx: e.statusIdx,
              });
            if (e.statusIdx > 0) {
              var r = t.statuses[e.statusIdx - 1].status;
              return t.getFirstUnread(r, !1);
            }
            return (m || (m = n("Promise"))).reject(new p());
          }),
          (this.statusAt = function (e, r) {
            var a = t.statuses[e.statusIdx],
              i = a.status;
            return r < a.msgs.length
              ? (m || (m = n("Promise"))).resolve({
                  msgIdx: r,
                  statusIdx: e.statusIdx,
                })
              : i.msgs.msgLoadState.noEarlierMsgs
                ? (m || (m = n("Promise"))).reject(new p())
                : t
                    .$4(i)
                    .then(function () {
                      return t.statusAt(e, r);
                    })
                    .catch(function (e) {
                      throw (
                        o("WALogger").WARN(
                          d ||
                            (d = babelHelpers.taggedTemplateLiteralLoose([
                              "error while loading more status msgs: ",
                              "",
                            ])),
                          String(e),
                        ),
                        new p()
                      );
                    });
          }),
          (this.$4 = (function () {
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
                if (!r) throw new _();
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()),
          i)
        ) {
          var l = r.msgs.getModelsArray().find(function (e) {
            return i && e.id.toString() === i.toString();
          });
          if (!l) throw new f();
          this.statuses = [
            {
              status: r,
              totalCount: 1,
              unreadCount: 0,
              msgs: [l],
              readMsgKeys: this.$1([l]),
            },
          ];
        } else if (
          a &&
          r.unreadCount > 0 &&
          !o("WAWebContactGetters").getIsMe(r.contact) &&
          !o("WAWebContactGetters").getCalculatedStatusMute(r.contact)
        ) {
          var g = o("WAWebStatusCollection").StatusCollection.getUnexpired({
              containsAnyUnreadStatus: !0,
            }),
            h = [];
          (g.forEach(function (e) {
            if (!o("WAWebContactGetters").getCalculatedStatusMute(e.contact)) {
              var n = t.$2(e);
              h.push(n);
            }
          }),
            (this.statuses = h));
        } else this.statuses = [this.$2(r)];
        this.$3();
      };
    ((l.InvalidStatusIterator = p),
      (l.StatusLoadingError = _),
      (l.StatusMsgNotFound = f),
      (l.StatusSnapshot = g));
  },
  98,
);
