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
      var a = o("WAWebStateUtils").unproxy(t);
      if (o("WAWebContactGetters").getIsMe(a))
        return (s || (s = n("Promise"))).resolve(null);
      var i = a.commonGroups,
        l = a.id,
        u = a.promises;
      return u.findCommonGroups
        ? u.findCommonGroups
        : i && !i.stale
          ? (i.set(
              i.filter(function (e) {
                return !e.isParentGroup;
              }),
            ),
            (s || (s = n("Promise"))).resolve(i))
          : (u.findCommonGroups = _(
              [
                a.id,
                o("WAWebApiContact").getAlternateUserWid(
                  o("WAWebWidFactory").asUserWidOrThrow(a.id),
                ),
              ].filter(Boolean),
            )
              .then(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = r("compactMap")(e, function (e) {
                          return o("WAWebChatCollection").ChatCollection.get(e);
                        }).filter(function (e) {
                          return e.isParentGroup !== !0 && !e.isLocked;
                        }),
                        u = yield (s || (s = n("Promise"))).all(
                          t.map(function (e) {
                            return o(
                              "WAWebGroupsParticipantsApi",
                            ).checkMyMembership(e.id);
                          }),
                        ),
                        c = t.filter(function (e, t) {
                          return u[t];
                        });
                      return (
                        i
                          ? (i.set(c), (i.stale = !1))
                          : (a.commonGroups = new (r(
                              "WAWebCommonGroupsCollection",
                            ))(c, l)),
                        a.commonGroups
                      );
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              )
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
                      (s || (s = n("Promise"))).reject(
                        r("err")(
                          "models:Contact:findCommonGroups error: " + t.status,
                        ),
                      )
                    );
                  },
                ),
              )
              .finally(function () {
                u.findCommonGroups = null;
              }));
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSchemaParticipant")
              .getParticipantTable()
              .anyOf(
                ["participants"],
                e.map(function (e) {
                  return e.toString();
                }),
              ),
            n = t.map(function (e) {
              return e.groupId;
            }),
            r = yield o("WAWebSchemaGroupMetadata")
              .getGroupMetadataTable()
              .anyOf(["id"], n),
            a = r
              .filter(function (e) {
                return e.defaultSubgroup !== !0;
              })
              .map(function (e) {
                return o("WAWebWidFactory").createWid(e.id);
              });
          return a;
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      var n = e.map(function (e) {
        var t = new Set();
        for (var n of e) {
          var r = n.contact,
            a = o("WAWebStateUtils").unproxy(r);
          if (a.commonGroups)
            for (var i of a.commonGroups.getModelsArray())
              t.add(i.id.toString());
        }
        return t;
      });
      if (n.length === 0) return [];
      for (var r = new Set(n[0]), a = 1; a < n.length; a++) {
        var i = n[a],
          l = new Set();
        for (var s of r) i.has(s) && l.add(s);
        if (((r = l), r.size === 0)) return [];
      }
      var u = new Map();
      for (var c of e) {
        var d = function () {
          var e = m.contact,
            t = o("WAWebStateUtils").unproxy(e);
          if (t.commonGroups)
            for (var n of t.commonGroups.getModelsArray()) {
              var a = n.id.toString();
              if (r.has(a)) {
                u.has(n) || u.set(n, []);
                var i = u.get(n);
                i != null &&
                  !i.some(function (t) {
                    return t.id.toString() === e.id.toString();
                  }) &&
                  i.push(e);
              }
            }
        };
        for (var m of c) d();
      }
      var p = e.length,
        _ = [];
      return (
        u.forEach(function (e, t) {
          _.push([t, e]);
        }),
        _.sort(function (t, n) {
          var r = h(t[1], e, p),
            o = h(n[1], e, p);
          return r !== o
            ? o - r
            : t[0].t != null && n[0].t != null
              ? n[0].t - t[0].t
              : t[0].t != null
                ? -1
                : 1;
        }),
        _.slice(0, t)
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
      (l.findGroupsWithContactGroups = g));
  },
  98,
);
