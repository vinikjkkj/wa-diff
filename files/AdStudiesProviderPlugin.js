__d(
  "AdStudiesProviderPlugin",
  [
    "AdStudiesLoader",
    "DateConsts",
    "LoadObject",
    "LoadObjectMap",
    "adStudiesProviderKeyFactory",
    "asyncToGeneratorRuntime",
    "isEmpty",
    "promiseDone",
    "promiseLoadObjectsFromKeys",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 10,
      u = 5 * o("DateConsts").MS_PER_SEC;
    function c(t) {
      return t.cells.data.some(function (t) {
        var n,
          o,
          a,
          i,
          l = [].concat(
            (n = t.ad_ids) != null ? n : [],
            (o = t.adaccount_ids) != null ? o : [],
            (a = t.adset_ids) != null ? a : [],
            (i = t.campaign_ids) != null ? i : [],
          );
        return (e || (e = r("isEmpty")))(l);
      });
    }
    function d(e) {
      var t = e.adAccountID,
        a = e.attempt,
        l = e.setState,
        m = e.studyID;
      a > s ||
        r("setTimeout")(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield o("AdStudiesLoader").loadAdStudy(m);
            if (e.status !== "DRAFT" && c(e))
              d({ adAccountID: t, setState: l, studyID: m, attempt: a + 1 });
            else {
              var n = new Map([
                [
                  { adAccountID: t, studyID: m },
                  r("LoadObject").withValue(e, { creatorModuleID: i.id }),
                ],
              ]);
              l(function (e) {
                return e.merge(n);
              });
            }
          }),
          u * Math.pow(1.25, a),
        );
    }
    function m(e) {
      return function (t) {
        var n = t.adAccountID,
          r = t.justCreated,
          a = t.preloader,
          i = t.studyID;
        return o("AdStudiesLoader")
          .loadAdStudy(i, { preloader: a })
          .then(function (t) {
            return (
              c(t) &&
                d({ adAccountID: n, attempt: 1, setState: e, studyID: t.id }),
              r === !0 ? babelHelpers.extends({}, t, { justCreated: r }) : t
            );
          });
      };
    }
    var p = function (t) {
        var e = t.adAccountID,
          n = t.studyID;
        return r("adStudiesProviderKeyFactory")({ adAccountID: e, studyID: n });
      },
      _ = function (t, n) {
        return !t.isLoading() && (t.isEmpty() || n.updateExisting === !0);
      },
      f = {
        initialState: function (t) {
          return r("LoadObjectMap").createKeyed(
            function (e) {
              (t(function (t) {
                return t.setLoading(e);
              }),
                r("promiseDone")(
                  r("promiseLoadObjectsFromKeys")(e, m(t)),
                  function (e) {
                    return t(function (t) {
                      return t.merge(e);
                    });
                  },
                ));
            },
            p,
            _,
          );
        },
      },
      g = f;
    l.default = g;
  },
  98,
);
