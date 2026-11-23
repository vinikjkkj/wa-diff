__d(
  "WAWebBizBroadcastProChatListAudienceQuery",
  [
    "WALogger",
    "WAWebBizBroadcastProAudienceIdentityQuery",
    "WAWebChatListVisibilityUtils",
    "WAWebLidAwareContactsDB",
    "WAWebRunInBatches",
    "WAWebSchemaLabel",
    "WAWebSchemaLabelAssociation",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 256,
      c = o("WAWebChatListVisibilityUtils").createChatListVisibilityPolicy({
        UNREAD: (s = o("WAWebSchemaLabel")).ListType.UNREAD,
        GROUPS: s.ListType.GROUPS,
        FAVORITES: s.ListType.FAVORITES,
        COMMUNITY: s.ListType.COMMUNITY,
        MENTIONS_AND_REPLIES: s.ListType.MENTIONS_AND_REPLIES,
        SERVER_ASSIGNED: s.ListType.SERVER_ASSIGNED,
        CHANNELS: s.ListType.CHANNELS,
        AI_HANDOFF: s.ListType.AI_HANDOFF,
        AI_RESPONDING: s.ListType.AI_RESPONDING,
      }),
      d = c.isVisibleNamedChatList;
    async function m(e) {
      var t = await o("WAWebSchemaLabel").getLabelTable().all(),
        n = t.filter(d),
        r = Array.from(new Set(e.candidateLids)),
        a = await _(r, t, n),
        i = n.map(function (e) {
          var t, n;
          return {
            listId: e.id,
            name: e.name,
            eligibleCount:
              (t = (n = a.get(e.id)) == null ? void 0 : n.size) != null ? t : 0,
          };
        });
      return (
        i.sort(function (e, t) {
          return (
            t.eligibleCount - e.eligibleCount ||
            e.name.localeCompare(t.name) ||
            e.listId.localeCompare(t.listId)
          );
        }),
        { lists: i }
      );
    }
    async function p(e) {
      var t,
        n = await o("WAWebSchemaLabel").getLabelTable().all(),
        r = n.filter(function (t) {
          return t.id === e.listId && d(t);
        });
      if (r.length === 0)
        return {
          listId: e.listId,
          recipientLids: [],
          unavailableReason: "list_unavailable",
        };
      var a = Array.from(new Set(e.candidateLids)),
        i = await _(a, n, r),
        l = (t = i.get(e.listId)) != null ? t : new Set();
      return {
        listId: e.listId,
        recipientLids: a.filter(function (e) {
          return l.has(e);
        }),
        unavailableReason: null,
      };
    }
    async function _(e, t, n) {
      var r = f(t, n),
        a = new Map(
          n.map(function (e) {
            return [e.id, new Set()];
          }),
        ),
        i = await g(e);
      return (
        await o("WAWebRunInBatches").runInBatches(
          Array.from(i.keys()),
          async function (e) {
            var t = await o("WAWebSchemaLabelAssociation")
              .getLabelAssociationTable()
              .anyOf(
                ["associationId", "type"],
                e.map(function (e) {
                  return [
                    e,
                    o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid,
                  ];
                }),
              );
            for (var n of t) {
              var l = n.associationId,
                s = n.labelId,
                u = r.get(s),
                c = i.get(l);
              if (u != null && c != null) {
                var d;
                (d = a.get(u)) == null || d.add(c);
              }
            }
          },
          { batchSize: u },
        ),
        a
      );
    }
    function f(e, t) {
      var n = new Map(
          t.map(function (e) {
            return [e.id, e.id];
          }),
        ),
        r = new Map();
      for (var a of t) {
        var i = a.predefinedId;
        i != null && !r.has(i) && r.set(i, a.id);
      }
      for (var l of e)
        if (l.type === o("WAWebSchemaLabel").ListType.SERVER_ASSIGNED) {
          var s = o(
              "WAWebChatListVisibilityUtils",
            ).getManualChatListPredefinedId(l.predefinedId),
            u = s == null ? null : r.get(s);
          u != null && n.set(l.id, u);
        }
      return n;
    }
    async function g(e) {
      var t = new Set(e),
        n = new Map(
          e.map(function (e) {
            return [e, e];
          }),
        );
      return (
        await o("WAWebRunInBatches").runInBatches(
          e,
          async function (e) {
            var a = await r("WAWebLidAwareContactsDB").bulkGet(e, !1),
              i = a.flatMap(function (e) {
                var t = h(e);
                return t == null ? [] : [t];
              }),
              l = await o(
                "WAWebBizBroadcastProAudienceIdentityQuery",
              ).resolveProAudienceLids(i);
            for (var s of l) {
              var u = s[0],
                c = s[1];
              t.has(c) && n.set(u, c);
            }
          },
          { batchSize: u },
        ),
        n
      );
    }
    function h(t) {
      if ((t == null ? void 0 : t.phoneNumber) == null) return null;
      try {
        var n = o("WAWebWidFactory").createUserWidOrThrow(t.phoneNumber);
        return n.isLid() ? null : n;
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to resolve phone identity for Pro chat list audience",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("bb-pro-chat-list-phone-resolution-failed"),
          null
        );
      }
    }
    ((l.queryProChatListCatalog = m), (l.queryProChatListAudience = p));
  },
  98,
);
