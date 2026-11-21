__d(
  "WAWebBizBroadcastAudienceDuplicateCheck",
  [
    "Promise",
    "WAJids",
    "WAWebAudienceExpressionTypes",
    "WAWebBizBroadcastProListUtils",
    "WAWebSchemaBroadcastMetadata",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 200,
      u = 2e4;
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (e.size === 0) return { status: "unavailable" };
          var n = yield g();
          return n == null ? { status: "incomplete" } : y(n, e, t);
        })),
        d.apply(this, arguments)
      );
    }
    function m() {
      var t,
        r = !1;
      return {
        countSavedAudience: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, n) {
              t != null || (t = p(e));
              var o = yield t;
              if (o == null || r) return { status: "incomplete" };
              var a = f(o, n);
              return ((r = a.status === "incomplete"), a);
            },
          );
          function o(t, n) {
            return e.apply(this, arguments);
          }
          return o;
        })(),
        markSaveFailed: function () {
          t != null && (t = (e || (e = n("Promise"))).resolve(null));
        },
      };
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield g();
          if (
            t == null ||
            !t.some(function (t) {
              return t.id === e && b(t);
            })
          )
            return null;
          var n = { audienceCount: 0, memberCount: 0, recipientSets: [] };
          for (var r of t)
            if (
              r.id !== e &&
              (n.audienceCount++, (n.memberCount += r.recipients.length), b(r))
            ) {
              var o = v(r.recipients);
              if (o == null) return null;
              n.recipientSets.push(o);
            }
          return n;
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      if (e.audienceCount >= s || t.length > u) return { status: "incomplete" };
      var n = new Set(t);
      if (e.memberCount + n.size > u) return { status: "incomplete" };
      var r = v(n);
      if (r == null) return { status: "incomplete" };
      var o = e.recipientSets.filter(function (e) {
        return C(e, r);
      }).length;
      return (
        e.audienceCount++,
        (e.memberCount += n.size),
        e.recipientSets.push(r),
        { count: o, status: "complete" }
      );
    }
    function g() {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = 0,
            t = yield o("WAWebSchemaBroadcastMetadata")
              .getBroadcastMetadataTable()
              .all({ limit: s + 1 }, function (t) {
                return ((e += t.recipients.length), e > u);
              });
          return t.length > s || e > u ? null : t;
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t, n) {
      var r = [],
        o = [];
      for (var a of e) {
        var i = t.has(a.id);
        if (!(!i && n != null && !n.has(a.id)) && b(a)) {
          var l = v(a.recipients);
          if (l == null) return { status: "incomplete" };
          i ? r.push(l) : o.push(l);
        }
      }
      if (r.length !== t.size) return { status: "incomplete" };
      var s = o.filter(function (e) {
        return r.some(function (t) {
          return C(t, e);
        });
      }).length;
      return { count: s, status: "complete" };
    }
    function C(e, t) {
      if (e.size !== t.size) return !1;
      for (var n of e) if (!t.has(n)) return !1;
      return !0;
    }
    function b(e) {
      return (
        String(e.id) !== "status@broadcast" &&
        String(e.id) !== "location@broadcast" &&
        !o("WAWebBizBroadcastProListUtils").isBizBroadcastProList(
          e.customAudienceFbid,
        ) &&
        e.audienceExpression.type ===
          o("WAWebAudienceExpressionTypes").EXPRESSION_TYPE_EXPLICIT
      );
    }
    function v(e) {
      var t = new Set();
      for (var n of e) {
        var r = o("WAJids").validateLidUserJid(n);
        if (r == null) return null;
        t.add(r);
      }
      return t.size > 0 ? t : null;
    }
    ((l.countMatchingCoreAudiences = c),
      (l.createImportAudienceDuplicateCheck = m));
  },
  98,
);
