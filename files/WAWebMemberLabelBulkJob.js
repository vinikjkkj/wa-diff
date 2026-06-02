__d(
  "WAWebMemberLabelBulkJob",
  ["WABatcher", "WALogger", "WAWebMemberLabelUtils", "WAWebSchemaMemberLabel"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      return new Map(e);
    }
    function c(e, t, n) {
      var r = e.memberLabelMap.get(t);
      return r != null && r.lastEditTimestamp > n.lastEditTimestamp;
    }
    function d(e) {
      var t = e.chatId,
        n = e.member,
        r = e.memberLabel,
        o = e.prevRecord;
      if (!o) return { chatId: t, memberLabelMap: new Map([[n, r]]) };
      var a = u(o.memberLabelMap);
      return c(o, n, r)
        ? o
        : (a.set(n, r), babelHelpers.extends({}, o, { memberLabelMap: a }));
    }
    function m(e) {
      var t = e.member,
        n = e.prevRecord,
        r = u(n.memberLabelMap);
      return (r.delete(t), babelHelpers.extends({}, n, { memberLabelMap: r }));
    }
    var p = (function () {
      return o("WABatcher").batch(
        { delayMs: o("WAWebMemberLabelUtils").getBatchDelayMs() },
        async function (t) {
          var n = Array.from(
              new Set(
                t.map(function (e) {
                  return e.data.chatId;
                }),
              ),
            ),
            r = o("WAWebSchemaMemberLabel").getMemberLabelTable(),
            a = new Map(
              (await r.bulkGet(n)).filter(Boolean).map(function (e) {
                return [e.chatId, e];
              }),
            ),
            i = [];
          for (var l of t) {
            var u = l.data,
              c = l.type,
              p = u.chatId,
              _ = u.member,
              f = u.memberLabel,
              g = a.get(p),
              h = null,
              y = !1;
            switch (c) {
              case "UPSERT": {
                if (f == null) {
                  (o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[updateMemberLabelsBatched] memberLabel null for upsert",
                      ])),
                  ),
                    i.push(null));
                  continue;
                }
                ((h = d({
                  chatId: p,
                  member: _,
                  memberLabel: f,
                  prevRecord: g,
                })),
                  (y = !0));
                break;
              }
              case "DELETE": {
                if (!g) {
                  (o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[updateMemberLabelsBatched]: no record found for chat ",
                        "",
                      ])),
                    p,
                  ),
                    i.push(null));
                  continue;
                }
                ((h = m({ prevRecord: g, member: _ })), (y = !0));
                break;
              }
            }
            (h != null && a.set(h.chatId, h), i.push(y ? l : null));
          }
          var C = Array.from(a.values()),
            b = [],
            v = [];
          for (var S of C) S.memberLabelMap.size === 0 ? b.push(S) : v.push(S);
          return (
            await Promise.all([
              r.bulkRemove(
                b.map(function (e) {
                  return e.chatId;
                }),
              ),
              r.bulkCreateOrReplace(v),
            ]),
            i
          );
        },
      );
    })();
    l.updateMemberLabelsBatched = p;
  },
  98,
);
