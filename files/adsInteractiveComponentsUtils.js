__d(
  "adsInteractiveComponentsUtils",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        r,
        o,
        a,
        i = m(
          d(
            e == null ||
              (n = e.creative) == null ||
              (n = n.interactive_components_spec) == null
              ? void 0
              : n.components,
          ),
          t,
        ),
        l =
          (e == null ||
          (r = e.creative) == null ||
          (r = r.interactive_components_spec) == null ||
          (r = r.child_attachments) == null
            ? void 0
            : r.some(function (e) {
                return m(u(e), t);
              })) === !0,
        c =
          ((o = e.creative) == null ||
          (o = o.asset_feed_spec) == null ||
          (o = o.images) == null
            ? void 0
            : o.some(function (e) {
                return m(u(s(e)), t);
              })) === !0,
        p =
          ((a = e.creative) == null ||
          (a = a.asset_feed_spec) == null ||
          (a = a.videos) == null
            ? void 0
            : a.some(function (e) {
                return m(u(s(e)), t);
              })) === !0;
      return i || l || c || p;
    }
    function s(e) {
      return e instanceof r("immutable").Map
        ? e.getIn(["interactive_components_spec"])
        : e == null
          ? void 0
          : e.interactive_components_spec;
    }
    function u(e) {
      var t = c(e);
      return t == null ? [] : d(t.components);
    }
    function c(e) {
      return e == null ? null : e instanceof r("immutable").Map ? e.toJS() : e;
    }
    function d(e) {
      return e == null ? [] : r("immutable").List(e).toJS();
    }
    function m(e, t) {
      return (
        (e == null
          ? void 0
          : e.some(function (e) {
              return e.type === t;
            })) === !0
      );
    }
    ((l.adgroupHasInteractiveComponents = e),
      (l.getICSfromAsset = s),
      (l.extractNormailzedSpecFromRaw = c),
      (l.interactiveComponentsOfTypePresent = m));
  },
  98,
);
