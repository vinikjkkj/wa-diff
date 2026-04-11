__d(
  "WAWebMemberLabelBulkJob",
  [
    "Promise",
    "WABatcher",
    "WALogger",
    "WAWebMemberLabelUtils",
    "WAWebSchemaMemberLabel",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(e) {
      return new Map(e);
    }
    function d(e, t, n) {
      var r = e.memberLabelMap.get(t);
      return r != null && r.lastEditTimestamp > n.lastEditTimestamp;
    }
    function m(e) {
      var t = e.chatId,
        n = e.member,
        r = e.memberLabel,
        o = e.prevRecord;
      if (!o) return { chatId: t, memberLabelMap: new Map([[n, r]]) };
      var a = c(o.memberLabelMap);
      return d(o, n, r)
        ? o
        : (a.set(n, r), babelHelpers.extends({}, o, { memberLabelMap: a }));
    }
    function p(e) {
      var t = e.member,
        n = e.prevRecord,
        r = c(n.memberLabelMap);
      return (r.delete(t), babelHelpers.extends({}, n, { memberLabelMap: r }));
    }
    var _ = (function () {
      return o("WABatcher").batch(
        { delayMs: o("WAWebMemberLabelUtils").getBatchDelayMs() },
        (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var r = Array.from(
                new Set(
                  t.map(function (e) {
                    return e.data.chatId;
                  }),
                ),
              ),
              a = o("WAWebSchemaMemberLabel").getMemberLabelTable(),
              i = new Map(
                (yield a.bulkGet(r)).filter(Boolean).map(function (e) {
                  return [e.chatId, e];
                }),
              ),
              l = [];
            for (var c of t) {
              var d = c.data,
                _ = c.type,
                f = d.chatId,
                g = d.member,
                h = d.memberLabel,
                y = i.get(f),
                C = null,
                b = !1;
              switch (_) {
                case "UPSERT": {
                  if (h == null) {
                    (o("WALogger").LOG(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[updateMemberLabelsBatched] memberLabel null for upsert",
                        ])),
                    ),
                      l.push(null));
                    continue;
                  }
                  ((C = m({
                    chatId: f,
                    member: g,
                    memberLabel: h,
                    prevRecord: y,
                  })),
                    (b = !0));
                  break;
                }
                case "DELETE": {
                  if (!y) {
                    (o("WALogger").LOG(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[updateMemberLabelsBatched]: no record found for chat ",
                          "",
                        ])),
                      f,
                    ),
                      l.push(null));
                    continue;
                  }
                  ((C = p({ prevRecord: y, member: g })), (b = !0));
                  break;
                }
              }
              (C != null && i.set(C.chatId, C), l.push(b ? c : null));
            }
            var v = Array.from(i.values()),
              S = [],
              R = [];
            for (var L of v)
              L.memberLabelMap.size === 0 ? S.push(L) : R.push(L);
            return (
              yield (u || (u = n("Promise"))).all([
                a.bulkRemove(
                  S.map(function (e) {
                    return e.chatId;
                  }),
                ),
                a.bulkCreateOrReplace(R),
              ]),
              l
            );
          });
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
      );
    })();
    l.updateMemberLabelsBatched = _;
  },
  98,
);
