__d(
  "AdsUEditorCampaignGroupSelectors",
  [
    "VultureJSDeadSelector",
    "adsCreateSelector",
    "adsUEditorSelectedCampaignGroupPlainObjectsSelector",
    "adsUEditorSelectedCampaignGroupsSelector",
    "immutable",
    "memoizeByReference",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function (t) {
        return r("adsCreateSelector")(
          [r("adsUEditorSelectedCampaignGroupsSelector")],
          function (n) {
            return n.some(t);
          },
          { name: i.id },
        );
      },
      u = function (t) {
        return r("adsCreateSelector")(
          [r("adsUEditorSelectedCampaignGroupPlainObjectsSelector")],
          function (n) {
            return n.some(t);
          },
          { name: i.id },
        );
      },
      c = function (t) {
        return r("adsCreateSelector")(
          [r("adsUEditorSelectedCampaignGroupsSelector")],
          function (n) {
            return n.every(t);
          },
          { name: i.id },
        );
      },
      d = function (t) {
        return r("adsCreateSelector")(
          [r("adsUEditorSelectedCampaignGroupPlainObjectsSelector")],
          function (n) {
            return n.every(t);
          },
          { name: i.id },
        );
      },
      m = function (t) {
        return r("adsCreateSelector")(
          [s(t)],
          function (t) {
            return !t;
          },
          { name: i.id },
        );
      },
      p = r("VultureJSDeadSelector")(
        i.id,
        "campaignGroupsPlainObjectsNoneSelector",
      ),
      _ = r("VultureJSDeadSelector")(i.id, "campaignGroupsFilterSelector"),
      f = function (t) {
        return r("adsCreateSelector")(
          [r("adsUEditorSelectedCampaignGroupPlainObjectsSelector")],
          function (n) {
            return n.filter(t);
          },
          { name: i.id },
        );
      },
      g = function (t) {
        return r("adsCreateSelector")(
          [r("adsUEditorSelectedCampaignGroupsSelector")],
          function (n) {
            return n.map(t);
          },
          { name: i.id },
        );
      },
      h = function (t) {
        return r("adsCreateSelector")(
          [r("adsUEditorSelectedCampaignGroupPlainObjectsSelector")],
          function (n) {
            return n.map(t);
          },
          { name: i.id },
        );
      },
      y = function (t) {
        return r("adsCreateSelector")(
          [r("adsUEditorSelectedCampaignGroupsSelector")],
          function (n) {
            return r("immutable").Map(
              n.map(function (e, n, r) {
                return [e.id, t(e, n, r)];
              }),
            );
          },
          { name: i.id },
        );
      },
      C = function (t) {
        return r("adsCreateSelector")(
          [r("adsUEditorSelectedCampaignGroupPlainObjectsSelector")],
          function (n) {
            return r("immutable").Map(
              n.map(function (e, n, r) {
                return [e.id, t(e, n, r)];
              }),
            );
          },
          { name: i.id },
        );
      },
      b = s(function (e) {
        return e.is_meta_moment_maker_enabled === !0;
      }),
      v = {
        some: (e = r("memoizeByReference"))(s),
        somePlainObject: e(u),
        every: e(c),
        everyPlainObject: e(d),
        none: e(m),
        nonePlainObject: e(p),
        filter: e(_),
        filterPlainObject: e(f),
        map: e(g),
        mapPlainObject: e(h),
        mapTransform: e(y),
        mapTransformPlainObject: e(C),
      };
    ((l.isMetaMomentMakerSelector = b), (l.campaignGroups = v));
  },
  98,
);
