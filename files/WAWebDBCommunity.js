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
            u = function (t, n, r) {
              n.forEach(function (e) {
                var n = String(e.id),
                  o = a.get(n);
                if (o != null && !o.isReadOnly)
                  i.set(n, { id: n, parentGroup: r ? t : void 0 });
                else if (r) {
                  var u;
                  s.delete(n);
                  var c = {
                      id: n,
                      subject: e.subject,
                      subjectTime: (u = e.subjectTime) != null ? u : 0,
                      parentGroup: t,
                    },
                    d = l.get(n);
                  (d &&
                    d.subjectTime > c.subjectTime &&
                    ((c.subject = d.subject), (c.subjectTime = d.subjectTime)),
                    l.set(n, c));
                } else (l.delete(n), s.add(n));
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
            t != null && u(t, e.subgroups, n);
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
    function d(e, t, n, r) {
      r === void 0 && (r = !1);
      var o = { chatId: e, subgroups: t, action: n };
      return r ? c(o) : s([o]);
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
