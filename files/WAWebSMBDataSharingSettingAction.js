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
      },
      c = function (n) {
        return o("WAWebCTWABizDataSharingJob")
          .setCtwaBizDataSharingSettingJob(n)
          .then(function (e) {
            return (
              e &&
                o("WAWebCTWADataSharingModel").CTWADataSharingModel.setValue(e),
              e
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
      };
    ((l.getSMBDataSharingSettingAction = u),
      (l.setSMBDataSharingSettingAction = c));
  },
  98,
);
