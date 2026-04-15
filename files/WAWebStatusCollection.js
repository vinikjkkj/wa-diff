__d(
  "WAWebStatusCollection",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebApiContact",
    "WAWebBaseCollection",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebContactGetters",
    "WAWebContactStatusBridge",
    "WAWebCrosspostingMsgHydration",
    "WAWebFrontendContactGetters",
    "WAWebGroupMetadataCollection",
    "WAWebLidMigrationUtils",
    "WAWebLidStatusMigrationUtils",
    "WAWebMediaOpaqueData",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebNewsletterMetadataCollection",
    "WAWebStatusGetters",
    "WAWebStatusModel",
    "WAWebUserPrefsMeUser",
    "WAWebWebcStatusSessionWamEvent",
    "WAWebWebcStatusSyncWamEvent",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
    "sumOfArray",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 86400,
      d = (function (t) {
        function a() {
          for (var e, r = arguments.length, a = new Array(r), i = 0; i < r; i++)
            a[i] = arguments[i];
          return (
            (e = t.call.apply(t, [this].concat(a)) || this),
            (e.findImpl = function (e) {
              return (u || (u = n("Promise"))).resolve({ id: e });
            }),
            (e.findQueryImpl = function () {
              return o("WAWebContactStatusBridge").queryStatusAll();
            }),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.findQuery = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, r) {
                var o = this,
                  a = yield t.prototype.findQuery.call(this, e, r),
                  i = a || [];
                return (
                  yield (u || (u = n("Promise"))).all(
                    i.map(function (e) {
                      if (e) {
                        var t = 0;
                        return (
                          e.msgs.forEach(function (n) {
                            t < e.statusMsgs.length &&
                            e.statusMsgs[t].id.toString() === n.id.toString()
                              ? ++t
                              : n.delete();
                          }),
                          e.statusMsgs.length > 0
                            ? o.addStatusMessages(e.id, e.statusMsgs)
                            : (u || (u = n("Promise"))).resolve()
                        );
                      }
                    }),
                  ),
                  i
                );
              },
            );
            function r(t, n) {
              return e.apply(this, arguments);
            }
            return r;
          })()),
          (i.sync = function () {
            var t = this,
              n = window.performance.now();
            return this.findQuery({}, { set: this.hasSynced() })
              .finally(function () {
                t.trigger("sync");
              })
              .then(function (r) {
                var a = window.performance.now(),
                  i = Math.round(a - n);
                t.logMetrics({ type: "sync", syncTime: i });
                var l = t.filter(function (e) {
                  return e.msgs.length > e.totalCount;
                });
                return (
                  l.length > 0 &&
                    o("WALogger").LOG(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " statuses have msgs.length > totalCount => ",
                          "",
                        ])),
                      l.length,
                      l.slice(0, 3).map(function (e) {
                        return {
                          totalCount: e.totalCount,
                          msgsLength: e.msgs.length,
                        };
                      }),
                    ),
                  r
                );
              });
          }),
          (i.logMetrics = function (t) {
            var e;
            t.type === "sync"
              ? (e = new (o(
                  "WAWebWebcStatusSyncWamEvent",
                ).WebcStatusSyncWamEvent)({ webcStatusSyncT: t.syncTime }))
              : (e = new (o(
                  "WAWebWebcStatusSessionWamEvent",
                ).WebcStatusSessionWamEvent)({
                  webcStatusSessionId: t.sessionId,
                }));
            var n = this.filter(function (e) {
                return !o("WAWebContactGetters").getIsMe(e.contact);
              }),
              a = n.filter(function (e) {
                return !o("WAWebContactGetters").getCalculatedStatusMute(
                  e.contact,
                );
              }),
              i = a.filter(function (e) {
                return o("WAWebStatusGetters").getHasUnread(e);
              }),
              l = a.filter(function (e) {
                return !o("WAWebStatusGetters").getHasUnread(e);
              }),
              s = n.filter(function (e) {
                return o("WAWebContactGetters").getCalculatedStatusMute(
                  e.contact,
                );
              }),
              u = r("sumOfArray")(
                a.map(function (e) {
                  return e.unreadCount;
                }),
              ),
              c = r("sumOfArray")(
                a.map(function (e) {
                  return o("WAWebStatusGetters").getReadCount(e);
                }),
              ),
              d = r("sumOfArray")(
                s.map(function (e) {
                  return e.totalCount;
                }),
              );
            ((e.webcStatusRecentItemCount = u),
              (e.webcStatusRecentRowCount = i.length),
              (e.webcStatusViewedItemCount = c),
              (e.webcStatusViewedRowCount = l.length),
              (e.webcStatusMutedItemCount = d),
              (e.webcStatusMutedRowCount = s.length),
              e.commit());
          }),
          (i.hasSynced = function () {
            return !0;
          }),
          (i.getStatusModel = function (t, n) {
            var e = this.get(t);
            if (e == null && n) {
              var r =
                t != null
                  ? o("WAWebApiContact").getAlternateUserWid(
                      o("WAWebWidFactory").asUserWidOrThrow(t),
                    )
                  : null;
              e = r != null ? this.get(r) : null;
            }
            return e;
          }),
          (i.handleUpdate = function (t, n) {
            var e,
              a = (e = o("WAWebMsgGetters").getSender(t)) != null ? e : t.from;
            if (
              (t.id.remote.isStatus() &&
                (a = t.id.fromMe
                  ? o("WAWebLidStatusMigrationUtils").matWidConvert(
                      o("WAWebUserPrefsMeUser").getMeUser(),
                    )
                  : t.author),
              this.hasSynced())
            ) {
              if (n) return !0;
              var i =
                  t.subtype === "sender_revoke" || t.subtype === "admin_revoke",
                l = a ? this.getStatusModel(a, i) : null;
              if (l) {
                !i &&
                  l.isSyntheticFromMetadata === !0 &&
                  (l.set({ totalCount: 0, unreadCount: 0 }),
                  (l.isSyntheticFromMetadata = !1));
                var u = l.totalCount === l.msgs.length;
                if (i) {
                  var c = t.protocolMessageKey,
                    d =
                      c != null
                        ? o("WAWebLidMigrationUtils").getAlternateMsgKey(c)
                        : null,
                    m = !1;
                  if (
                    (c != null &&
                      (m = l.containsMessage(c) || l.containsMessage(d)),
                    m !== !0)
                  )
                    return !0;
                  var p = c == null ? void 0 : c.toString(),
                    _ = d == null ? void 0 : d.toString(),
                    f = { totalCount: l.totalCount - 1 };
                  (l != null &&
                    l.isUnreadMessage(p) &&
                    (_ == null || (l != null && l.isUnreadMessage(_))) &&
                    (f.unreadCount = l.unreadCount - 1),
                    l.set(f));
                } else {
                  if (l.containsMessage(t.id)) return u;
                  var g = { totalCount: l.totalCount + 1, t: t.t };
                  (t.invis !== !0 && (g.unreadCount = l.unreadCount + 1),
                    l.set(g));
                }
                return (
                  !u &&
                    !r("isStringNullOrEmpty")(t.body) &&
                    r("WAWebMediaOpaqueData")
                      .createFromBase64Jpeg(t.body)
                      .then(function (e) {
                        l.pic = e;
                      })
                      .catch(function () {
                        o("WALogger")
                          .ERROR(
                            s ||
                              (s = babelHelpers.taggedTemplateLiteralLoose([
                                "[StatusCollection] failed to create from base64 jpeg",
                              ])),
                          )
                          .sendLogs("failed-to-create-from-base64-jpeg");
                      }),
                  u
                );
              }
              if (i) return !0;
              if (a) {
                var h = {
                  id: a,
                  t: t.t,
                  unreadCount: t.invis === !0 ? 0 : 1,
                  totalCount: 1,
                };
                this.add(h);
              }
              return !0;
            }
            return !1;
          }),
          (i.addStatusMessages = function (t, r) {
            return (u || (u = n("Promise")))
              .all([
                this.$StatusCollectionImpl$p_1(
                  o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID),
                  r.filter(function (e) {
                    return e.id.remote.isStatus();
                  }),
                ),
                this.$StatusCollectionImpl$p_1(
                  t,
                  r.filter(function (e) {
                    return (
                      !e.id.remote.isStatus() &&
                      o("WAWebMsgGetters").getIsStatus(e)
                    );
                  }),
                ),
              ])
              .then(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = e[0],
                        n = e[1];
                      return (
                        yield o(
                          "WAWebCrosspostingMsgHydration",
                        ).hydrateCrosspostingInfoBulk(t),
                        t.concat(n)
                      );
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              );
          }),
          (i.$StatusCollectionImpl$p_1 = function (t, r) {
            return r.length === 0
              ? (u || (u = n("Promise"))).resolve([])
              : o("WAWebMsgCollection").MsgCollection.processMultipleMessages(
                  t,
                  r,
                  { add: "after", isHistory: !0 },
                  "addStatusMessages",
                );
          }),
          (i.getValidStatus = function () {
            return this.filter(function (e) {
              var t;
              if (
                e.isSyntheticFromMetadata === !0 ||
                e.totalCount <= 0 ||
                e.isExpired() ||
                o("WAWebContactGetters").getIsMe(e.contact)
              )
                return !1;
              if (o("WAWebFrontendContactGetters").getIsMyContact(e.contact))
                return !0;
              if (o("WAWebContactGetters").getIsPSA(e.contact)) return !1;
              var n = o("WAWebChatCollection").ChatCollection.get(e.contact.id);
              if (
                (n == null ? void 0 : n.archive) === !0 ||
                (n == null ? void 0 : n.isLocked) === !0
              )
                return !1;
              if (o("WAWebContactGetters").getIsGroup(e.contact)) {
                var a,
                  i =
                    r("WAWebGroupMetadataCollection") == null
                      ? void 0
                      : r("WAWebGroupMetadataCollection").get(e.contact.id);
                if ((i == null ? void 0 : i.suspended) === !0) return !1;
                if (
                  (i == null || (a = i.participants) == null
                    ? void 0
                    : a.iAmMember()) === !0
                )
                  return !0;
              }
              return !!(
                o("WAWebChatGetters").getIsNewsletter(e.contact) &&
                (r("WAWebNewsletterMetadataCollection") == null ||
                (t = r("WAWebNewsletterMetadataCollection").get(
                  e.contact.id,
                )) == null
                  ? void 0
                  : t.isSubscribedOrOwned) === !0
              );
            });
          }),
          (i.getUnexpired = function (t) {
            var e = t.containsAnyUnreadStatus,
              n = this.getValidStatus();
            return e
              ? n.filter(function (e) {
                  return e.unreadCount > 0;
                })
              : n.filter(function (e) {
                  return e.unreadCount === 0;
                });
          }),
          (i.getMyStatus = function () {
            var e = this.filter(function (e) {
              return o("WAWebContactGetters").getIsMe(e.contact);
            });
            if (e.length !== 0 && !(o("WATimeUtils").unixTime() - e[0].t > c))
              return e[0];
          }),
          (i.getPSAStatus = function () {
            var e = this.filter(function (e) {
              return o("WAWebContactGetters").getIsPSA(e.contact);
            });
            if (e.length !== 0) return e[0];
          }),
          a
        );
      })(o("WAWebBaseCollection").BaseCollection);
    ((d.model = r("WAWebStatusModel")),
      (d.comparator = function (e, t) {
        return t.t - e.t;
      }));
    var m = new d();
    l.StatusCollection = m;
  },
  98,
);
