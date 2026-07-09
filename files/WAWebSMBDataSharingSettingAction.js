__d(
  "WAWebSMBDataSharingSettingAction",
  [
    "Promise",
    "WALogger",
    "WAWebCTWABizDataSharingJob",
    "WAWebCTWADataSharingModel",
    "WAWebCommonCTWADataSharing",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = function () {
        var e = o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue();
        return e
          ? (s || (s = n("Promise"))).resolve(e)
          : r(
              "WAWebCommonCTWADataSharing",
            ).fetchDataSharingSettingAndUpdateModel();
      };
    function c(t, n) {
      return o("WAWebCTWABizDataSharingJob")
        .setCtwaBizDataSharingSettingJob(t, n)
        .then(function (e) {
          var t, r;
          if (e == null) return null;
          var a = (t = (r = e.version) != null ? r : n) != null ? t : null;
          return (
            o("WAWebCTWADataSharingModel").CTWADataSharingModel.setValue(
              e.value,
              a,
            ),
            { value: e.value, version: a }
          );
        })
        .catch(function (t) {
          return (
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[ctwa] setSMBDataSharingSettingAction failed",
                ])),
            ),
            null
          );
        });
    }
    ((l.getSMBDataSharingSettingAction = u),
      (l.setSMBDataSharingSettingAction = c));
  },
  98,
);
