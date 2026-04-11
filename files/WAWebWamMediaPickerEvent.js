__d(
  "WAWebWamMediaPickerEvent",
  ["WALogger", "WAWebWamEnumMediaType"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = {
        document: (s = o("WAWebWamEnumMediaType")).MEDIA_TYPE.DOCUMENT,
        video: s.MEDIA_TYPE.VIDEO,
        gif: s.MEDIA_TYPE.GIF,
        image: s.MEDIA_TYPE.PHOTO,
        audio: s.MEDIA_TYPE.AUDIO,
      },
      c = (function () {
        function t(e, t, n) {
          ((this.mediaPickerSentUnchanged = 0),
            (this.mediaPickerDeleted = 0),
            (this.mediaPickerChanged = new Set()),
            (this.mediaPickerCroppedRotated = new Set()),
            (this.mediaPickerDrawing = new Set()),
            (this.mediaPickerStickers = new Set()),
            (this.mediaPickerText = new Set()),
            (this.mediaPickerLikeDoc = 0),
            (this.mediaPickerNotLikeDoc = 0),
            (this.mediaPickerT = 0),
            (this.t0 = Date.now()),
            (this.mediaType = u[t]),
            (this.mediaPickerOrigin = n),
            (this.medias = new Set()),
            this.medias.add(e),
            (this.changeTypes = {
              mediaPickerCroppedRotated: this.mediaPickerCroppedRotated,
              mediaPickerDrawing: this.mediaPickerDrawing,
              mediaPickerStickers: this.mediaPickerStickers,
              mediaPickerText: this.mediaPickerText,
            }));
        }
        var n = t.prototype;
        return (
          (n.onAdd = function (t) {
            (this.medias.add(t),
              this.mediaType === "document"
                ? this.mediaPickerLikeDoc++
                : this.mediaPickerNotLikeDoc++);
          }),
          (n.onChange = function (t, n) {
            (this.mediaPickerChanged.add(t), this.changeTypes[n].add(t));
          }),
          (n.onDelete = function (t) {
            if (
              (this.medias.delete(t),
              this.mediaPickerDeleted++,
              this.medias.size === 0)
            )
              return this.onCancel();
          }),
          (n.onSend = function () {
            return (
              (this.mediaPickerSent = this.medias.size),
              (this.mediaPickerSentUnchanged =
                this.mediaPickerSent - this.mediaPickerChanged.size),
              this.dataPreflight()
            );
          }),
          (n.onCancel = function () {
            return (
              (this.mediaPickerSent = 0),
              (this.mediaPickerSentUnchanged = 0),
              this.dataPreflight()
            );
          }),
          (n.onPause = function () {
            ((this.mediaPickerT += Date.now() - (this.t0 || 0)),
              (this.t0 = null));
          }),
          (n.dataPreflight = function () {
            var t = this.mediaPickerSentUnchanged;
            if (isNaN(t)) {
              t = 0;
              var n =
                  this.mediaPickerSent != null && this.mediaPickerSent !== 0
                    ? this.mediaPickerSent
                    : "undefined",
                r = this.mediaPickerChanged.size || "undefined";
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "sentUnchanged NaN: sent=",
                      " changed=",
                      "",
                    ])),
                  n,
                  r,
                )
                .sendLogs("mediaPickerSentUnchange is not a number");
            }
            return {
              mediaPickerSent: this.mediaPickerSent,
              mediaPickerSentUnchanged: t,
              mediaPickerT: this.mediaPickerT + (Date.now() - (this.t0 || 0)),
              mediaType: this.mediaType,
              mediaPickerOrigin: this.mediaPickerOrigin,
              mediaPickerChanged: this.mediaPickerChanged.size,
              mediaPickerCroppedRotated: this.mediaPickerCroppedRotated.size,
              mediaPickerDrawing: this.mediaPickerDrawing.size,
              mediaPickerStickers: this.mediaPickerStickers.size,
              mediaPickerText: this.mediaPickerText.size,
              mediaPickerLikeDoc: this.mediaPickerLikeDoc,
              mediaPickerNotLikeDoc: this.mediaPickerNotLikeDoc,
              mediaPickerDeleted: this.mediaPickerDeleted,
            };
          }),
          t
        );
      })();
    l.default = c;
  },
  98,
);
