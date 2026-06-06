__d(
  "WAWebDBCommunity",
  [
    "WABatcher",
    "WAWebDBCommunityTypes",
    "WAWebGroupsParticipantsApi",
    "WAWebSchemaChat",
    "WAWebSchemaGroupMetadata",
    "WAWebSchemaUnjoinedSubgroupMetadata",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = new Map(),
        n = new Map();
      (e.forEach(function (e) {
        switch (
          (e.subgroups.forEach(function (e) {
            n.set(String(e.id), null);
          }),
          e.action)
        ) {
          case o("WAWebDBCommunityTypes").CommunityLinkOperation
            .SiblingGroupLink:
          case o("WAWebDBCommunityTypes").CommunityLinkOperation
            .SiblingGroupUnlink:
            t.set(String(e.chatId), null);
            break;
          default:
            return;
        }
      }),
        (
          await o("WAWebSchemaGroupMetadata")
            .getGroupMetadataTable()
            .bulkGet(Array.from(t.keys()))
        ).forEach(function (e) {
          e && e.parentGroup != null && t.set(e.id, String(e.parentGroup));
        }),
        (
          await o("WAWebSchemaChat")
            .getChatTable()
            .bulkGet(Array.from(n.keys()))
        ).forEach(function (e) {
          e && n.set(e.id, e);
        }));
      var r = new Map(),
        a = new Map(),
        i = new Set(),
        l = function (t) {
          var e = t.link,
            o = t.parentGroupId,
            l = t.subgroups;
          l.forEach(function (t) {
            var l = String(t.id),
              s = n.get(l);
            if (s != null && !s.isReadOnly)
              r.set(l, { id: l, parentGroup: e ? o : void 0 });
            else if (e) {
              var u;
              i.delete(l);
              var c = {
                  id: l,
                  subject: t.subject,
                  subjectTime: (u = t.subjectTime) != null ? u : 0,
                  parentGroup: o,
                },
                d = a.get(l);
              (d &&
                d.subjectTime > c.subjectTime &&
                ((c.subject = d.subject), (c.subjectTime = d.subjectTime)),
                a.set(l, c));
            } else (a.delete(l), i.add(l));
          });
        };
      (e.forEach(function (e) {
        var n = null,
          r = !1;
        switch (e.action) {
          case o("WAWebDBCommunityTypes").CommunityLinkOperation
            .SiblingGroupLink:
            ((n = t.get(String(e.chatId))), (r = !0));
            break;
          case o("WAWebDBCommunityTypes").CommunityLinkOperation
            .SiblingGroupUnlink:
            ((n = t.get(String(e.chatId))), (r = !1));
            break;
          case o("WAWebDBCommunityTypes").CommunityLinkOperation.SubGroupLink:
            ((n = String(e.chatId)), (r = !0));
            break;
          case o("WAWebDBCommunityTypes").CommunityLinkOperation.SubGroupUnlink:
            ((n = String(e.chatId)), (r = !1));
        }
        n != null && l({ link: r, parentGroupId: n, subgroups: e.subgroups });
      }),
        await Promise.all([
          o("WAWebSchemaGroupMetadata")
            .getGroupMetadataTable()
            .bulkCreateOrMerge(Array.from(r.values())),
          o("WAWebSchemaUnjoinedSubgroupMetadata")
            .getUnjoinedSubgroupMetadataTable()
            .bulkRemove(Array.from(i)),
          o("WAWebSchemaUnjoinedSubgroupMetadata")
            .getUnjoinedSubgroupMetadataTable()
            .bulkGet(Array.from(a.keys()))
            .then(function (e) {
              return (
                e.forEach(function (e) {
                  if (e) {
                    var t = a.get(e.id);
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
                    Array.from(a.values()).map(function (e) {
                      return babelHelpers.extends({}, e);
                    }),
                  )
              );
            }),
        ]));
    }
    var s = (function () {
      var t = 5e3;
      return o("WABatcher").batch({ delayMs: t }, async function (t) {
        return (await e(t), Promise.resolve(t.map(function (e) {})));
      });
    })();
    function u(t, n, r, o) {
      o === void 0 && (o = !1);
      var a = { chatId: t, subgroups: n, action: r };
      return o ? s(a) : e([a]);
    }
    function c(e) {
      return o("WAWebSchemaGroupMetadata")
        .getGroupMetadataTable()
        .equals(["parentGroup"], e.toString());
    }
    async function d(e) {
      return (await c(e)).find(function (e) {
        return e.defaultSubgroup === !0;
      });
    }
    async function m(e) {
      var t = await d(e);
      return t == null ? null : o("WAWebWidFactory").createWid(t.id);
    }
    async function p(e) {
      var t = await c(e),
        n = (
          await o("WAWebGroupsParticipantsApi").bulkCheckMyMembership(
            t.map(function (e) {
              var t = e.id;
              return o("WAWebWidFactory").createWid(t);
            }),
          )
        ).map(function (e, n) {
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
    }
    async function _(e) {
      return (await p(e)).map(function (e) {
        var t = e.id;
        return o("WAWebWidFactory").createWid(t);
      });
    }
    function f(e) {
      return o("WAWebSchemaUnjoinedSubgroupMetadata")
        .getUnjoinedSubgroupMetadataTable()
        .equals(["parentGroup"], e.toString());
    }
    async function g(e) {
      var t = e.parentGroup;
      if (t == null) return !1;
      var n = o("WAWebWidFactory").createWid(e.id),
        r = await _(o("WAWebWidFactory").createWid(t));
      return r.length === 1 && r[0].equals(n);
    }
    ((l.persistCommunityLink = u),
      (l.getDefaultSubgroup = m),
      (l.getJoinedSubgroupsMetadata = p),
      (l.getJoinedSubgroups = _),
      (l.getUnjoinedSubgroupsMetadata = f),
      (l.isLastJoinedSubgroup = g));
  },
  98,
);
