__d(
  "WAWebSMBDataSharingSettingAction",
  [
    "Promise",
    "WALogger",
    "WAWebCTWADataSharingModel",
    "WAWebCommonCTWADataSharing",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = r("requireDeferred")("WAWebCTWABizDataSharingJob").__setRef(
        "WAWebSMBDataSharingSettingAction",
      ),
      c = function () {
        var e = o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue();
        return e
          ? (s || (s = n("Promise"))).resolve(e)
          : o(
              "WAWebCommonCTWADataSharing",
            ).fetchDataSharingSettingAndUpdateModel();
      };
    function d(t, n) {
      return u
        .load()
        .then(function (e) {
          return e.setCtwaBizDataSharingSettingJob(t, n);
        })
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
    ((l.getSMBDataSharingSettingAction = c),
      (l.setSMBDataSharingSettingAction = d));
  },
  98,
);
