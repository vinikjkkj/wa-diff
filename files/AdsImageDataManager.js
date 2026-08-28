__d(
  "AdsImageDataManager",
  [
    "fbt",
    "AdsBaseDataManager",
    "AdsGraphAPI",
    "AdsImageBatchLoadErrorDataAction",
    "AdsImageBatchLoadedDataAction",
    "AdsImageDataManagerFields",
    "adsFetchAccountImage",
    "err",
    "immutable",
    "nullthrows",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.loadAllFor = function (t, n, a) {
            var e = this;
            r("promiseDone")(
              o("adsFetchAccountImage").fetchAccountImages(
                t,
                o("AdsImageDataManagerFields").AdsImageDataManagerFieldsNew,
                { date_format: "U", hashes: n, limit: n.length },
                i.id,
              ),
              function (l) {
                if ((l == null ? void 0 : l.data.length) === n.length) {
                  e.$AdsImageDataManager$p_1(l, n);
                  return;
                }
                var s = r("immutable")
                    .Set((l == null ? void 0 : l.data) || [])
                    .map(function (e) {
                      return e.hash;
                    }),
                  u = r("immutable").Set(n).subtract(s).toJS();
                (e.$AdsImageDataManager$p_1(l, s.toJS()),
                  a != null
                    ? r("promiseDone")(
                        o("AdsGraphAPI")
                          .get(i.id)
                          .object("business", r("nullthrows")(a))
                          .edge("images")
                          .batched()
                          .get({
                            fields: [
                              "id",
                              "height",
                              "hash",
                              "url",
                              "url_128",
                              "width",
                              "name",
                            ],
                            hashes: u,
                          }),
                        function (n) {
                          if (
                            (n == null ? void 0 : n.data.length) === u.length
                          ) {
                            e.$AdsImageDataManager$p_1(n, u);
                            return;
                          }
                          var o = r("immutable")
                              .Set((n == null ? void 0 : n.data) || [])
                              .map(function (e) {
                                return e.hash;
                              }),
                            a = r("immutable").Set(u).subtract(o).toJS();
                          (e.$AdsImageDataManager$p_1(n, o.toJS()),
                            e.$AdsImageDataManager$p_2(t, a));
                        },
                        function (t) {
                          u.forEach(function (n) {
                            e.__handleError(["load"], n, null, t);
                          });
                        },
                      )
                    : e.$AdsImageDataManager$p_2(t, u));
              },
              function (t) {
                n.forEach(function (n) {
                  e.__handleError(["load"], n, null, t);
                });
              },
            );
          }),
          (n.$AdsImageDataManager$p_2 = function (t, n) {
            var e = this;
            r("promiseDone")(
              o("AdsGraphAPI")
                .get(i.id)
                .adaccount(t)
                .edge("website_creative_assets")
                .batched()
                .get({
                  fields: [
                    "images{name,hash,width,height,url,url_128,url_256,bi_review_status}",
                  ],
                }),
              function (t) {
                var r,
                  o = [];
                (r = t.data) == null ||
                  r.forEach(function (e) {
                    var t;
                    (t = e.images) == null ||
                      (t = t.data) == null ||
                      t.map(function (e) {
                        return o.push(e);
                      });
                  });
                var a = new Set(n),
                  i = o.filter(function (e) {
                    return a.delete(e.hash);
                  });
                (i.forEach(function (e) {}),
                  e.$AdsImageDataManager$p_1({ data: i }, Array.from(n)));
              },
              function (t) {
                n.forEach(function (n) {
                  e.__handleError(["load"], n, null, t);
                });
              },
            );
          }),
          (n.loadOneFor = function (t, n) {
            this.loadAllFor(t, [n]);
          }),
          (n.$AdsImageDataManager$p_1 = function (t, n) {
            this.__processDataArrayResponse(
              t,
              n,
              function (e) {
                return e.hash;
              },
              function (e) {
                var t = r("err")(
                  String(
                    s._(
                      /*BTDS*/ 'Unable to load image hash "{image hash}", it may be invalid.',
                      [s._param("image hash", e)],
                    ),
                  ),
                );
                return (t.stack, t);
              },
            );
          }),
          (n.loadAll = function (t) {}),
          (n.__onBatchLoaded = function (t) {
            r("AdsImageBatchLoadedDataAction").dispatch(
              { images: t },
              { line: "227", module: "AdsImageDataManager.js", moduleID: i.id },
            );
          }),
          (n.__onBatchLoadError = function (t) {
            r("AdsImageBatchLoadErrorDataAction").dispatch(
              { errors: t },
              { line: "234", module: "AdsImageDataManager.js", moduleID: i.id },
            );
          }),
          t
        );
      })(r("AdsBaseDataManager")),
      u = new e();
    l.default = u;
  },
  226,
);
