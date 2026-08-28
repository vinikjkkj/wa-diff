__d(
  "VideoAdsCreationSessionStateManager",
  [
    "LoadingMarkerGlobalListener",
    "VideoAdsCreationSpinnerTypes",
    "VideoAdsCreationTypedLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { IDLE: "idle", STARTED: "started", FINISHED: "finished" },
      s = (function () {
        function t() {
          ((this.$1 = 0),
            (this.$2 = 0),
            (this.$3 = null),
            (this.$4 = null),
            (this.$5 = e.IDLE),
            (this.$6 = "ads_interface"));
        }
        var n = t.prototype;
        return (
          (n.init = function () {
            var t = this;
            ((this.$5 = e.IDLE),
              (this.$1 = 0),
              (this.$3 = null),
              o("LoadingMarkerGlobalListener").subscribe(
                function (e) {
                  return t.$7(e);
                },
                function (e, n) {
                  return t.$8(e, n);
                },
              ));
          }),
          (n.$7 = function (n) {
            if (this.$5 === e.STARTED && this.$3 !== null)
              switch (n.name) {
                case r("VideoAdsCreationSpinnerTypes")
                  .ADS_VIDEO_UPLOAD_PROGRESS_VIEW:
                case r("VideoAdsCreationSpinnerTypes").ADS_VIDEO_UPLOAD_VIEW:
                  new (r("VideoAdsCreationTypedLogger"))()
                    .setEvent("upload.client.spinner_start")
                    .setWaterfallID(String(this.$3))
                    .setAdAccountID(this.$4)
                    .setSourceType(this.$6)
                    .setTriggerTime(Date.now())
                    .setSpinnerName(String(n.name))
                    .setSpinnerSource(String(n.cssStack))
                    .setSpinnerID(String(n.id))
                    .log();
                  break;
                default:
                  break;
              }
          }),
          (n.$8 = function (n, o) {
            if (this.$5 === e.STARTED && this.$3 !== null)
              switch (n.name) {
                case r("VideoAdsCreationSpinnerTypes")
                  .ADS_VIDEO_UPLOAD_PROGRESS_VIEW:
                case r("VideoAdsCreationSpinnerTypes").ADS_VIDEO_UPLOAD_VIEW:
                  (new (r("VideoAdsCreationTypedLogger"))()
                    .setEvent("upload.client.spinner_finished")
                    .setWaterfallID(String(this.$3))
                    .setAdAccountID(this.$4)
                    .setSourceType(this.$6)
                    .setTriggerTime(Date.now())
                    .setSpinnerName(String(n.name))
                    .setSpinnerSource(String(n.cssStack))
                    .setSpinnerID(String(n.id))
                    .log(),
                    this.endUploadSession());
                  break;
                default:
                  break;
              }
          }),
          (n.startUploadSession = function (n, r, o) {
            ((this.$3 = n),
              (this.$4 = r),
              (this.$1 = Date.now()),
              (this.$5 = e.STARTED),
              (this.$6 = o != null ? o : "ads_interface"));
          }),
          (n.endUploadSession = function () {
            ((this.$3 = null), (this.$2 = Date.now()), (this.$5 = e.FINISHED));
          }),
          (n.getWaterfallID = function () {
            return this.$3;
          }),
          t
        );
      })(),
      u = new s();
    l.default = u;
  },
  98,
);
