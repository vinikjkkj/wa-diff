__d(
  "MAIBACanvasPublishAdsManager",
  [
    "AdDraftFragmentSource",
    "AdsDraftPublishProvider",
    "Laminar",
    "adsDraftPublishingPublishAction",
    "immutable",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef,
      d = new Set(["SUCCEEDED", "FAILED"]);
    function m(e, t, n) {
      var o = r("immutable").Map();
      o = o.update("campaign", function (t) {
        return (t != null ? t : r("immutable").OrderedSet()).add(e);
      });
      var a = function (t) {
        o = o.update("ad_set", function (e) {
          return (e != null ? e : r("immutable").OrderedSet()).add(t);
        });
      };
      for (var i of t) a(i);
      var l = function (t) {
        o = o.update("ad", function (e) {
          return (e != null ? e : r("immutable").OrderedSet()).add(t);
        });
      };
      for (var s of n) l(s);
      return o;
    }
    function p(e) {
      var t = r("immutable").Set();
      e.campaignGroupDraftFragmentID != null &&
        (t = t.add(e.campaignGroupDraftFragmentID));
      for (var n of e.campaignDraftFragmentIDs) n != null && (t = t.add(n));
      for (var o of e.adgroupDraftFragmentIDs) o != null && (t = t.add(o));
      return t;
    }
    function _(e) {
      var t = p(e);
      return t.size === 0
        ? !1
        : (r("adsDraftPublishingPublishAction")({
            creationSource: r("AdDraftFragmentSource")
              .MAIBA_E2E_CAMPAIGN_CREATION,
            draftID: e.draftID,
            fragmentIDs: t,
            ignoreErrors: !1,
            selection: m(e.campaignGroupID, e.campaignIDs, e.adgroupIDs),
          }),
          !0);
    }
    function f(e) {
      var t,
        n,
        a = e.onTerminal,
        i = o("Laminar").useProvider(r("AdsDraftPublishProvider")),
        l = i.active,
        s =
          (t = (n = l.getValue()) == null ? void 0 : n.status) != null
            ? t
            : null,
        m = c(!1),
        p = c(null);
      return (
        u(
          function () {
            var e = p.current;
            if (((p.current = s), !m.current)) {
              m.current = !0;
              return;
            }
            s != null && s !== e && d.has(s) && a(s === "SUCCEEDED");
          },
          [s, a],
        ),
        null
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"),
      (l.dispatchPublish = _),
      (l.MAIBACanvasPublishLifecycleTracker = f));
  },
  98,
);
