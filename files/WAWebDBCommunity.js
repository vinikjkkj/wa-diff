__d(
  "WAWebDBCommunity",
  [
    "Promise",
    "WABatcher",
    "WAWebDBCommunityTypes",
    "WAWebGroupsParticipantsApi",
    "WAWebSchemaChat",
    "WAWebSchemaGroupMetadata",
    "WAWebSchemaUnjoinedSubgroupMetadata",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = new Map(),
            a = new Map();
          (t.forEach(function (e) {
            switch (
              (e.subgroups.forEach(function (e) {
                a.set(String(e.id), null);
              }),
              e.action)
            ) {
              case o("WAWebDBCommunityTypes").CommunityLinkOperation
                .SiblingGroupLink:
              case o("WAWebDBCommunityTypes").CommunityLinkOperation
                .SiblingGroupUnlink:
                r.set(String(e.chatId), null);
                break;
              default:
                return;
            }
          }),
            (yield o("WAWebSchemaGroupMetadata")
              .getGroupMetadataTable()
              .bulkGet(Array.from(r.keys()))).forEach(function (e) {
              e && e.parentGroup != null && r.set(e.id, String(e.parentGroup));
            }),
            (yield o("WAWebSchemaChat")
              .getChatTable()
              .bulkGet(Array.from(a.keys()))).forEach(function (e) {
              e && a.set(e.id, e);
            }));
          var i = new Map(),
            l = new Map(),
            s = new Set(),
            u = function (t) {
              var e = t.link,
                n = t.parentGroupId,
                r = t.subgroups;
              r.forEach(function (t) {
                var r = String(t.id),
                  o = a.get(r);
                if (o != null && !o.isReadOnly)
                  i.set(r, { id: r, parentGroup: e ? n : void 0 });
                else if (e) {
                  var u;
                  s.delete(r);
                  var c = {
                      id: r,
                      subject: t.subject,
                      subjectTime: (u = t.subjectTime) != null ? u : 0,
                      parentGroup: n,
                    },
                    d = l.get(r);
                  (d &&
                    d.subjectTime > c.subjectTime &&
                    ((c.subject = d.subject), (c.subjectTime = d.subjectTime)),
                    l.set(r, c));
                } else (l.delete(r), s.add(r));
              });
            };
          (t.forEach(function (e) {
            var t = null,
              n = !1;
            switch (e.action) {
              case o("WAWebDBCommunityTypes").CommunityLinkOperation
                .SiblingGroupLink:
                ((t = r.get(String(e.chatId))), (n = !0));
                break;
              case o("WAWebDBCommunityTypes").CommunityLinkOperation
                .SiblingGroupUnlink:
                ((t = r.get(String(e.chatId))), (n = !1));
                break;
              case o("WAWebDBCommunityTypes").CommunityLinkOperation
                .SubGroupLink:
                ((t = String(e.chatId)), (n = !0));
                break;
              case o("WAWebDBCommunityTypes").CommunityLinkOperation
                .SubGroupUnlink:
                ((t = String(e.chatId)), (n = !1));
            }
            t != null &&
              u({ link: n, parentGroupId: t, subgroups: e.subgroups });
          }),
            yield (e || (e = n("Promise"))).all([
              o("WAWebSchemaGroupMetadata")
                .getGroupMetadataTable()
                .bulkCreateOrMerge(Array.from(i.values())),
              o("WAWebSchemaUnjoinedSubgroupMetadata")
                .getUnjoinedSubgroupMetadataTable()
                .bulkRemove(Array.from(s)),
              o("WAWebSchemaUnjoinedSubgroupMetadata")
                .getUnjoinedSubgroupMetadataTable()
                .bulkGet(Array.from(l.keys()))
                .then(function (e) {
                  return (
                    e.forEach(function (e) {
                      if (e) {
                        var t = l.get(e.id);
                        t &&
                          e.subjectTime != null &&
                          e.subjectTime > t.subjectTime &&
                          ((t.subjectTime = e.subjectTime),
                          (t.subject = e.subject));
                      }
                    }),
                    o("WAWebSchemaUnjoinedSubgroupMetadata")
                      .getUnjoinedSubgroupMetadataTable()
                      .bulkCreateOrMerge(
                        Array.from(l.values()).map(function (e) {
                          return babelHelpers.extends({}, e);
                        }),
                      )
                  );
                }),
            ]));
        })),
        u.apply(this, arguments)
      );
    }
    var c = (function () {
      var t = 5e3;
      return o("WABatcher").batch(
        { delayMs: t },
        (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            return (
              yield s(t),
              (e || (e = n("Promise"))).resolve(t.map(function (e) {}))
            );
          });
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
      );
    })();
    function d(e) {
      var t = e.action,
        n = e.chatId,
        r = e.isOffline,
        o = r === void 0 ? !1 : r,
        a = e.subgroups,
        i = { chatId: n, subgroups: a, action: t };
      return o ? c(i) : s([i]);
    }
    function m(e) {
      return o("WAWebSchemaGroupMetadata")
        .getGroupMetadataTable()
        .equals(["parentGroup"], e.toString());
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return (yield m(e)).find(function (e) {
            return e.defaultSubgroup === !0;
          });
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield p(e);
          return t == null ? null : o("WAWebWidFactory").createWid(t.id);
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield m(e),
            n = (yield o("WAWebGroupsParticipantsApi").bulkCheckMyMembership(
              t.map(function (e) {
                var t = e.id;
                return o("WAWebWidFactory").createWid(t);
              }),
            )).map(function (e, n) {
              return [t[n], e];
            });
          return n
            .filter(function (e) {
              var t = e[1];
              return t;
            })
            .map(function (e) {
              var t = e[0];
              return t;
            });
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return (yield h(e)).map(function (e) {
            var t = e.id;
            return o("WAWebWidFactory").createWid(t);
          });
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return o("WAWebSchemaUnjoinedSubgroupMetadata")
        .getUnjoinedSubgroupMetadataTable()
        .equals(["parentGroup"], e.toString());
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.parentGroup;
          if (t == null) return !1;
          var n = o("WAWebWidFactory").createWid(e.id),
            r = yield C(o("WAWebWidFactory").createWid(t));
          return r.length === 1 && r[0].equals(n);
        })),
        R.apply(this, arguments)
      );
    }
    ((l.persistCommunityLink = d),
      (l.getDefaultSubgroup = f),
      (l.getJoinedSubgroupsMetadata = h),
      (l.getJoinedSubgroups = C),
      (l.getUnjoinedSubgroupsMetadata = v),
      (l.isLastJoinedSubgroup = S));
  },
  98,
);
