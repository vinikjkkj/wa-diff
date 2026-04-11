__d(
  "WAWebWamMediaPickerStatsLogger",
  ["WAWebMediaPickerWamEvent", "WAWebWamMediaPickerEvent"],
  function (t, n, r, o, a, i, l) {
    var e = {
        mediaPickerCroppedRotated: "mediaPickerCroppedRotated",
        mediaPickerDrawing: "mediaPickerCroppedRotated",
        mediaPickerStickers: "mediaPickerCroppedRotated",
        mediaPickerText: "mediaPickerCroppedRotated",
      },
      s = (function () {
        function e() {
          ((this.mediaByTypeAndOrigin = new Map()),
            (this.mediaEventReverseIndex = new Map()),
            (this.chatRecipients = null));
        }
        var t = e.prototype;
        return (
          (t.$1 = function (t, n) {
            return t + "_" + n;
          }),
          (t.$2 = function (t) {
            var e = new (o("WAWebMediaPickerWamEvent").MediaPickerWamEvent)(
              babelHelpers.extends({}, t, {
                chatRecipients: this.chatRecipients,
              }),
            );
            e.commit();
          }),
          (t.$3 = function (t, n, o) {
            var e = this.$1(n, o),
              a = this.mediaByTypeAndOrigin.get(e);
            if (a) (a.onAdd(t), this.mediaEventReverseIndex.set(t, a));
            else {
              var i = new (r("WAWebWamMediaPickerEvent"))(t, n, o);
              (this.mediaByTypeAndOrigin.set(e, i),
                this.mediaEventReverseIndex.set(t, i));
            }
          }),
          (t.logChange = function (t, n) {
            var e = this.mediaEventReverseIndex.get(t);
            e && e.onChange(t, n);
          }),
          (t.logDelete = function (t) {
            var e = this.mediaEventReverseIndex.get(t);
            e && e.onDelete(t);
          }),
          (t.logSend = function (t) {
            var e = this;
            this.mediaByTypeAndOrigin.forEach(function (n) {
              e.$2(
                babelHelpers.extends({}, n.onSend(), {
                  isViewOnce: t.isViewOnce,
                }),
              );
            });
          }),
          (t.logCancel = function () {
            var e = this;
            this.mediaByTypeAndOrigin.forEach(function (t) {
              e.$2(t.onCancel());
            });
          }),
          (t.logAdd = function (t, n, r) {
            this.mediaEventReverseIndex.get(t) || this.$3(t, n, r);
          }),
          e
        );
      })();
    l.MediaPickerStatsLogger = s;
  },
  98,
);
