__d(
  "AdsPagePostDataManager",
  [
    "fbt",
    "AdsBaseDataManager",
    "AdsGraphAPI",
    "AdsPagePostBatchLoadErrorDataAction",
    "AdsPagePostBatchLoadedDataAction",
    "AdsPostFields",
    "adsPagePostResponseShaper",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = "U",
      u = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.loadAll = function (t) {
            var e = this;
            t.forEach(function (t) {
              return e.load(t);
            });
          }),
          (a.load = function (n) {
            var t = this;
            r("promiseDone")(
              o("AdsGraphAPI")
                .get(i.id)
                .object("page_post", n)
                .batched()
                .get({
                  date_format: e,
                  fields: o("AdsPostFields").getFieldsWithAdAccountId(),
                  execution_options: ["validate_only"],
                }),
              function (e) {
                var o = r("adsPagePostResponseShaper")(e);
                return t.__handleSuccess(["load"], n, null, o);
              },
              function (e) {
                return t.__handleError(["load"], n, null, e);
              },
            );
          }),
          (a.__onBatchLoaded = function (t, n) {
            r("AdsPagePostBatchLoadedDataAction").dispatch(
              { posts: t, versions: n },
              {
                line: "58",
                module: "AdsPagePostDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          (a.__onBatchLoadError = function (t, n) {
            var e = this,
              o = new Map();
            (t.forEach(function (t, n) {
              o.set(n, e.__getObjectError(n, t));
            }),
              r("AdsPagePostBatchLoadErrorDataAction").dispatch(
                { errors: o, versions: n },
                {
                  line: "73",
                  module: "AdsPagePostDataManager.js",
                  moduleID: i.id,
                },
              ));
          }),
          (a.__getObjectTypeLabel = function () {
            return s._(/*BTDS*/ "Page post");
          }),
          n
        );
      })(r("AdsBaseDataManager")),
      c = new u(),
      d = c;
    l.default = d;
  },
  226,
);
