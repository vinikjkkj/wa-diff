__d(
  "WAWebFindCommonGroupsContactAction",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "compactMap",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 2,
      d = 4,
      m = 3;
    function p(e) {
      var t = e.split(/\s+/).filter(Boolean);
      return t.length < c || t.length > d
        ? !1
        : t.every(function (e) {
            return e.length >= m;
          });
    }
    function _(t) {
      var a = o("WAWebStateUtils").unproxy(t);
      if (o("WAWebContactGetters").getIsMe(a))
        return (u || (u = n("Promise"))).resolve(null);
      var i = a.commonGroups,
        l = a.id,
        s = a.promises;
      return s.findCommonGroups
        ? s.findCommonGroups
        : i && !i.stale
          ? (i.set(
              i.filter(function (e) {
                return !e.isParentGroup;
              }),
            ),
            (u || (u = n("Promise"))).resolve(i))
          : (s.findCommonGroups = f(
              [
                a.id,
                o("WAWebApiContact").getAlternateUserWid(
                  o("WAWebWidFactory").asUserWidOrThrow(a.id),
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
                  i
                    ? (i.set(t), (i.stale = !1))
                    : (a.commonGroups = new (r("WAWebCommonGroupsCollection"))(
                        t,
                        l,
                      )),
                  a.commonGroups
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
                      (u || (u = n("Promise"))).reject(
                        r("err")(
                          "models:Contact:findCommonGroups error: " + t.status,
                        ),
                      )
                    );
                  },
                ),
              )
              .finally(function () {
                s.findCommonGroups = null;
              }));
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSchemaParticipant")
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
            a = yield o("WAWebSchemaGroupMetadata")
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
              _ = yield o("WAWebSchemaParticipant")
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
            var g = yield o("WAWebSchemaGroupMetadata")
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
                : (E.commonGroups = new (r("WAWebCommonGroupsCollection"))(
                    T,
                    x,
                  ));
            }
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
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
        h = new Map();
      return (
        d.forEach(function (t, n) {
          (h.set(n, b(t, e, f)), g.push([n, t]));
        }),
        g.sort(function (e, t) {
          var n,
            r,
            o = (n = h.get(e[0])) != null ? n : 0,
            a = (r = h.get(t[0])) != null ? r : 0;
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
    function b(e, t, n) {
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
    ((l.shouldRunMultiContactTokenSearch = p),
      (l.findCommonGroups = _),
      (l.findCommonGroupsForContacts = h),
      (l.findGroupsWithContactGroups = C));
  },
  98,
);
