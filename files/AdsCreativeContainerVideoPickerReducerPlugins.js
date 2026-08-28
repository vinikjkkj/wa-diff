__d(
  "AdsCreativeContainerVideoPickerReducerPlugins",
  ["AdsAccountVideoDataSourcePluginSource", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("immutable").OrderedSet(),
      s = {
        reduce: function (t, n) {
          return babelHelpers.extends({}, t, { source: n.source });
        },
      },
      u = {
        reduce: function (n, o) {
          return {
            lastUploadedVideoID: null,
            source: r("AdsAccountVideoDataSourcePluginSource"),
            uploads: e,
          };
        },
      },
      c = {
        reduce: function (n, o) {
          return babelHelpers.extends({}, n, {
            source: r("AdsAccountVideoDataSourcePluginSource"),
            uploads: e,
          });
        },
      },
      d = {
        reduce: function (t, n) {
          var e = n.video;
          return babelHelpers.extends({}, t, {
            lastUploadedVideoID: e.id,
            source: r("AdsAccountVideoDataSourcePluginSource"),
          });
        },
      },
      m = {
        reduce: function (t, n) {
          var e = n.context,
            r = n.isIGMediaPickerSource,
            o = n.uploaderKey,
            a = t.uploads;
          return (
            (e == null ? void 0 : e.videoUploadCreativeContainerContext) !=
              null && o != null
              ? (a = a.add(o))
              : r === !0 && (a = a.add("newIGVideoUploadKey")),
            babelHelpers.extends({}, t, { uploads: a })
          );
        },
      },
      p = {
        reduce: function (t) {
          return babelHelpers.extends({}, t, {
            source: r("AdsAccountVideoDataSourcePluginSource"),
          });
        },
      };
    ((l.onChangeSource = s),
      (l.onCloseCreativeContainer = u),
      (l.onApplyChanges = c),
      (l.onEncodingSuccess = d),
      (l.onUploadStart = m),
      (l.onUpdateCarouselCard = p));
  },
  98,
);
