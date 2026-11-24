__d(
  "MAIBATriggerSendLiveReviewStore",
  ["MAIBAReactiveMap", "MAIBATriggerSendCreationBusyStore", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState,
      d = s.useSyncExternalStore,
      m = new (r("MAIBAReactiveMap"))(),
      p = null;
    function _() {
      if (typeof window == "undefined") return "";
      var e = new URLSearchParams(window.location.search);
      return JSON.stringify([
        window.location.pathname,
        e.get("business_id"),
        e.get("asset_id"),
        e.get("waba_id"),
        e.get("id"),
        e.get("campaign_type"),
      ]);
    }
    function f(e, t, n) {
      (n === void 0 && (n = _()),
        n === _() &&
          ((p = e),
          m.set("active", babelHelpers.extends({}, t, { scope: n }))));
    }
    function g(e) {
      p === e && ((p = null), m.delete("active"));
    }
    function h() {
      var e,
        t = m.get("active");
      if (t == null || t.scope !== _()) return null;
      var n = new URLSearchParams(window.location.search),
        r = n.get("business_id"),
        o = (e = n.get("asset_id")) != null ? e : n.get("waba_id");
      return (r == null || r === t.businessID) && (o == null || o === t.wabaID)
        ? t
        : null;
    }
    var y = function (t) {
        return m.subscribe("active", t);
      },
      C = function () {
        return null;
      };
    function b() {
      var e = d(y, h, C),
        t = o(
          "MAIBATriggerSendCreationBusyStore",
        ).useMAIBATriggerSendCreationBusy();
      return e != null && t && !e.isCreating
        ? babelHelpers.extends({}, e, { isCreating: !0 })
        : e;
    }
    var v = new (r("MAIBAReactiveMap"))();
    function S(e, t) {
      var n = c(function () {
          return Symbol("trigger-send-account");
        }),
        r = n[0],
        o = _();
      u(
        function () {
          return (
            o === _() &&
              v.set("selected", { id: e, owner: r, scope: o, title: t }),
            function () {
              var e;
              ((e = v.get("selected")) == null ? void 0 : e.owner) === r &&
                v.delete("selected");
            }
          );
        },
        [e, r, o, t],
      );
    }
    var R = function (t) {
      return v.subscribe("selected", t);
    };
    function L(e) {
      var t = e != null ? e : null;
      return d(
        R,
        function () {
          var e = v.get("selected");
          return t != null &&
            t !== "" &&
            e != null &&
            e.id === t &&
            e.scope === _()
            ? e.title
            : null;
        },
        C,
      );
    }
    function E(e, t) {
      var n = c(function () {
          return Symbol("trigger-send-page-1");
        }),
        r = n[0],
        o = _(),
        a = t.businessID,
        i = t.campaignName,
        l = t.crmAccountID,
        s = t.crmAppTitle,
        d = t.isComplete,
        m = t.isCreating,
        p = t.libraryJourneyName,
        h = t.wabaID;
      (u(
        function () {
          return (
            e
              ? f(
                  r,
                  {
                    businessID: a,
                    campaignName: i,
                    crmAccountID: l,
                    crmAppTitle: s,
                    isComplete: d,
                    isCreating: m,
                    libraryJourneyName: p,
                    wabaID: h,
                  },
                  o,
                )
              : g(r),
            function () {}
          );
        },
        [e, r, o, a, i, l, s, d, m, p, h],
      ),
        u(
          function () {
            return function () {
              return g(r);
            };
          },
          [r],
        ));
    }
    ((l.publishLiveReview = f),
      (l.clearLiveReview = g),
      (l.getLiveReview = h),
      (l.useMAIBATriggerSendLiveReview = b),
      (l.usePublishMAIBATriggerSendAccountTitle = S),
      (l.useMAIBATriggerSendAccountTitle = L),
      (l.usePublishMAIBATriggerSendLiveReview = E));
  },
  98,
);
