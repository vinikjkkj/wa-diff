__d(
  "WAWebBizBroadcastProAudienceMemberPhones",
  [
    "CometRelay",
    "WAWebBizBroadcastProAudienceMemberPhonesQuery.graphql",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 120,
      u = 20,
      c = s * u,
      d =
        e !== void 0
          ? e
          : (e = n("WAWebBizBroadcastProAudienceMemberPhonesQuery.graphql"));
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = new Set(),
            o = yield _(
              { customAudienceID: t, environment: e, phones: r, signal: n },
              null,
              1,
            );
          return o === "complete" ? { phones: r, status: o } : { status: o };
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r,
            a = yield o("CometRelay")
              .fetchQuery(
                e.environment,
                d,
                { after: t, caId: e.customAudienceID, first: s },
                { fetchPolicy: "network-only" },
              )
              .toPromise(),
            i = a == null ? void 0 : a.xfb_whatsapp_subscriber_list_members;
          if (i == null) return "unavailable";
          if (((r = i.count) != null ? r : 0) > c) return "incomplete";
          g(e.phones, i);
          var l = h(i, t);
          if (l == null) {
            var m;
            return ((m = i.page_info) == null ? void 0 : m.has_next_page) === !0
              ? "incomplete"
              : "complete";
          }
          return n >= u || e.signal.aborted ? "incomplete" : _(e, l, n + 1);
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      for (var n of (r = t.edges) != null ? r : []) {
        var r,
          o,
          a,
          i =
            (o =
              n == null || (a = n.node) == null || (a = a.phone_number) == null
                ? void 0
                : a.replace(/\D/g, "")) != null
              ? o
              : "";
        i !== "" && e.add(i);
      }
    }
    function h(e, t) {
      var n,
        r,
        o = (n = e.page_info) == null ? void 0 : n.end_cursor;
      return ((r = e.page_info) == null ? void 0 : r.has_next_page) !== !0 ||
        o === t
        ? null
        : o;
    }
    l.fetchAudienceMemberPhones = m;
  },
  98,
);
