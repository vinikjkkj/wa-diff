__d(
  "WAWebFindCommonGroupsContactAction",
  [
    "WAFilteredCatch",
    "WALogger",
    "WAWebApiContact",
    "WAWebBackendErrors",
    "WAWebChatCollection",
    "WAWebCommonGroupsCollection",
    "WAWebContactGetters",
    "WAWebGroupsParticipantsApi",
    "WAWebSchemaGroupMetadata",
    "WAWebSchemaParticipant",
    "WAWebStateUtils",
    "WAWebWidFactory",
    "compactMap",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 2,
      c = 4,
      d = 3;
    function m(e) {
      var t = e.split(/\s+/).filter(Boolean);
      return t.length < u || t.length > c
        ? !1
        : t.every(function (e) {
            return e.length >= d;
          });
    }
    function p(t) {
      var n = o("WAWebStateUtils").unproxy(t);
      if (o("WAWebContactGetters").getIsMe(n)) return Promise.resolve(null);
      var a = n.commonGroups,
        i = n.id,
        l = n.promises;
      return l.findCommonGroups
        ? l.findCommonGroups
        : a && !a.stale
          ? (a.set(
              a.filter(function (e) {
                return !e.isParentGroup;
              }),
            ),
            Promise.resolve(a))
          : (l.findCommonGroups = _(
              [
                n.id,
                o("WAWebApiContact").getAlternateUserWid(
                  o("WAWebWidFactory").asUserWidOrThrow(n.id),
                ),
              ].filter(Boolean),
            )
              .then(function (e) {
                var t = r("compactMap")(e, function (e) {
                  return o("WAWebChatCollection").ChatCollection.get(e);
                }).filter(function (e) {
                  return e.isParentGroup !== !0 && !e.isLocked;
                });
                return (
                  a
                    ? (a.set(t), (a.stale = !1))
                    : (n.commonGroups = new (r("WAWebCommonGroupsCollection"))(
                        t,
                        i,
                      )),
                  n.commonGroups
                );
              })
              .catch(
                o("WAFilteredCatch").filteredCatch(
                  o("WAWebBackendErrors").ServerStatusCodeError,
                  function (t) {
                    return (
                      o("WALogger").WARN(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "models:Contact:findCommonGroups error: ",
                            "",
                          ])),
                        t.status,
                      ),
                      Promise.reject(
                        r("err")(
                          "models:Contact:findCommonGroups error: " + t.status,
                        ),
                      )
                    );
                  },
                ),
              )
              .finally(function () {
                l.findCommonGroups = null;
              }));
    }
    async function _(e) {
      var t = await o("WAWebSchemaParticipant")
          .getParticipantTable()
          .anyOf(
            ["participants"],
            e.map(function (e) {
              return e.toString();
            }),
          ),
        n = new Map(
          t.map(function (e) {
            return [
              e.groupId,
              o(
                "WAWebGroupsParticipantsApi",
              ).checkMyMembershipForParticipantRecord(e),
            ];
          }),
        ),
        r = t.map(function (e) {
          return e.groupId;
        }),
        a = await o("WAWebSchemaGroupMetadata")
          .getGroupMetadataTable()
          .anyOf(["id"], r),
        i = a
          .filter(function (e) {
            return e.defaultSubgroup !== !0 && n.get(e.id) === !0;
          })
          .map(function (e) {
            return o("WAWebWidFactory").createWid(e.id);
          });
      return i;
    }
    async function f(e) {
      var t = [];
      for (var n of e) {
        var a = o("WAWebStateUtils").unproxy(n);
        if (!o("WAWebContactGetters").getIsMe(a)) {
          var i = a.commonGroups;
          if (i && !i.stale) {
            i.set(
              i.filter(function (e) {
                return !e.isParentGroup;
              }),
            );
            continue;
          }
          t.push(a);
        }
      }
      if (t.length !== 0) {
        var l = new Map(),
          u = [];
        for (var c of t) {
          var d = [
            c.id,
            o("WAWebApiContact").getAlternateUserWid(
              o("WAWebWidFactory").asUserWidOrThrow(c.id),
            ),
          ].filter(Boolean);
          for (var m of d) {
            var p = m.toString();
            (l.set(p, c), u.push(p));
          }
        }
        var _;
        try {
          _ = await o("WAWebSchemaParticipant")
            .getParticipantTable()
            .anyOf(["participants"], u);
        } catch (e) {
          var f = String(e);
          throw (
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "get from participants table failed",
                  ])),
              )
              .verbose()
              .sendLogs(
                "get from participants table failed when finding common groups: " +
                  f,
              ),
            r("err")("get from participants table failed")
          );
        }
        var g = await o("WAWebSchemaGroupMetadata")
            .getGroupMetadataTable()
            .anyOf(
              ["id"],
              _.map(function (e) {
                return e.groupId;
              }),
            ),
          h = new Set(
            g
              .filter(function (e) {
                return e.defaultSubgroup !== !0;
              })
              .map(function (e) {
                return e.id;
              }),
          ),
          y = new Map();
        for (var C of t) y.set(C, new Map());
        for (var b of _)
          if (
            !(
              !h.has(b.groupId) ||
              !o(
                "WAWebGroupsParticipantsApi",
              ).checkMyMembershipForParticipantRecord(b)
            )
          ) {
            var v = o("WAWebChatCollection").ChatCollection.get(
              o("WAWebWidFactory").createWid(b.groupId),
            );
            if (!(v == null || v.isParentGroup === !0 || v.isLocked))
              for (var S of b.participants) {
                var R = l.get(S);
                if (R != null) {
                  var L;
                  (L = y.get(R)) == null || L.set(b.groupId, v);
                }
              }
          }
        for (var E of t) {
          var k,
            I,
            T = Array.from(
              (k = (I = y.get(E)) == null ? void 0 : I.values()) != null
                ? k
                : [],
            ),
            D = E.commonGroups,
            x = E.id;
          D
            ? (D.set(T), (D.stale = !1))
            : (E.commonGroups = new (r("WAWebCommonGroupsCollection"))(T, x));
        }
      }
    }
    function g(e, t) {
      var n = new Map(),
        r = function (t) {
          var e = n.get(t);
          if (e != null) return e;
          var r = o("WAWebStateUtils").unproxy(t);
          return (n.set(t, r), r);
        },
        a = e.map(function (e) {
          var t = new Set();
          for (var n of e) {
            var o = n.contact,
              a = r(o);
            if (a.commonGroups)
              for (var i of a.commonGroups.getModelsArray())
                t.add(i.id.toString());
          }
          return t;
        });
      if (a.length === 0) return [];
      for (var i = new Set(a[0]), l = 1; l < a.length; l++) {
        var s = a[l],
          u = new Set();
        for (var c of i) s.has(c) && u.add(c);
        if (((i = u), i.size === 0)) return [];
      }
      var d = new Map();
      for (var m of e) {
        var p = function () {
          var e = _.contact,
            t = r(e);
          if (t.commonGroups)
            for (var n of t.commonGroups.getModelsArray()) {
              var o = n.id.toString();
              if (i.has(o)) {
                d.has(n) || d.set(n, []);
                var a = d.get(n);
                a != null &&
                  !a.some(function (t) {
                    return t.id.toString() === e.id.toString();
                  }) &&
                  a.push(e);
              }
            }
        };
        for (var _ of m) p();
      }
      var f = e.length,
        g = [],
        y = new Map();
      return (
        d.forEach(function (t, n) {
          (y.set(n, h(t, e, f)), g.push([n, t]));
        }),
        g.sort(function (e, t) {
          var n,
            r,
            o = (n = y.get(e[0])) != null ? n : 0,
            a = (r = y.get(t[0])) != null ? r : 0;
          return o !== a
            ? a - o
            : e[0].t != null && t[0].t != null
              ? t[0].t - e[0].t
              : e[0].t != null
                ? -1
                : 1;
        }),
        g.slice(0, t)
      );
    }
    function h(e, t, n) {
      for (
        var r = 0,
          o = new Set(
            e.map(function (e) {
              return e.id.toString();
            }),
          ),
          a = 0;
        a < n;
        a++
      ) {
        var i = t[a].some(function (e) {
          var t = e.contact;
          return o.has(t.id.toString());
        });
        i && r++;
      }
      return r;
    }
    ((l.shouldRunMultiContactTokenSearch = m),
      (l.findCommonGroups = p),
      (l.findCommonGroupsForContacts = f),
      (l.findGroupsWithContactGroups = g));
  },
  98,
);
